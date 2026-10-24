/**
 * Contextual internal linking.
 *
 * Walks the body prose of every article and, where it mentions a topic another
 * article owns, links the first mention to that article. The phrase → page map
 * lives in scripts/interlink-anchors.json and is curated by hand: a phrase
 * belongs there only if a reader seeing it would expect the link to go to that
 * page.
 *
 *   node scripts/interlink.mjs            # dry run: print what would change
 *   node scripts/interlink.mjs --write    # apply, then regenerate edited spec pages
 *
 * Generated pages are edited through their spec (src/content/articles/*.mjs),
 * section `html` only. Hand-written pages are edited between the lead paragraph
 * and the FAQ. FAQ answers, product copy, notes and Common Mistakes cards are
 * never touched, so FAQPage and Product JSON-LD stay identical.
 *
 * Rules, so pages do not turn into link farms:
 *   - only bare <p> and <li> blocks, never headings, tables, buttons, bold
 *     labels, existing links or dark/hero panels;
 *   - at most one new link per block, and none in a block that already has two;
 *   - each target at most once per page, and never if the page links to it already;
 *   - a per-page cap that shrinks as the page's existing link count grows;
 *   - when there are more candidates than the cap allows, the least-linked
 *     targets win, then targets in the same section hub.
 *
 * Idempotent: added links carry `data-autolink`, which counts against the cap on
 * later runs, so re-running only fills pages that have room (e.g. a new article
 * whose topic is mentioned elsewhere) and never stacks links on a page.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { execFileSync } from 'child_process';
import { walkPages, routeFor, isLandingPage, isDraft } from './lib/pages.mjs';

const ROOT = join(import.meta.dirname, '..');
const PAGES_DIR = join(ROOT, 'src', 'pages');
const SPECS_DIR = join(ROOT, 'src', 'content', 'articles');
const ANCHORS = JSON.parse(readFileSync(join(import.meta.dirname, 'interlink-anchors.json'), 'utf-8'));
const WRITE = process.argv.includes('--write');
const LINK_CLASS = 'text-[#0F62FE] font-medium';

// Elements whose text must never become a link. Bold runs are usually lead-in
// labels ("<strong>Holding the handrails.</strong> …"), which read badly as links.
const NO_LINK_INSIDE = new Set(['a', 'strong', 'b', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button', 'code', 'table', 'nav', 'figure', 'script', 'style', 'svg', 'summary']);
// Containers whose styling a blue link would clash with.
const DARK_CLASS = /\b(bg-gray-9\d\d|bg-black|text-white|bg-\[#0F62FE\]|bg-\[#FF5A1F\])\b/;

function capFor(existingLinks) {
  if (existingLinks < 10) return 6;
  if (existingLinks < 20) return 4;
  return 2;
}

// ---------------------------------------------------------------------------
// Pages

const articleFiles = walkPages(PAGES_DIR).filter((f) => !isLandingPage(f));
const pages = articleFiles.map((file) => {
  const slug = file.replace(/\.astro$/, '');
  const specPath = join(SPECS_DIR, `${slug}.mjs`);
  const spec = existsSync(specPath);
  return {
    file,
    slug,
    route: routeFor(file),
    draft: isDraft(PAGES_DIR, file),
    spec,
    srcPath: spec ? specPath : join(PAGES_DIR, file),
  };
});
const bySlug = new Map(pages.map((p) => [p.slug, p]));

// Section hub membership, for the relevance tie-break.
const hubOf = new Map();
{
  const sections = readFileSync(join(ROOT, 'src', 'data', 'sections.ts'), 'utf-8');
  let current = null;
  for (const line of sections.split('\n')) {
    const slug = line.match(/^\s{4}slug:\s*'([^']+)'/);
    if (slug) current = slug[1];
    const url = line.match(/url:\s*'\/([^']+)\/'/);
    if (url && current && !hubOf.has(url[1])) hubOf.set(url[1], current);
  }
}

// Inbound counts from other articles, from the generated pages.
const inbound = new Map(pages.map((p) => [p.slug, 0]));
function hrefsIn(text) {
  return new Set([...text.matchAll(/href="\/([^"#]*?)\/?(?:#[^"]*)?"/g)].map((m) => m[1]));
}
for (const p of pages) {
  for (const slug of hrefsIn(readFileSync(join(PAGES_DIR, p.file), 'utf-8'))) {
    if (slug !== p.slug && inbound.has(slug)) inbound.set(slug, inbound.get(slug) + 1);
  }
}

// ---------------------------------------------------------------------------
// Anchor map → one matcher

const problems = [];
const phraseTarget = new Map();
for (const [slug, phrases] of Object.entries(ANCHORS)) {
  if (slug.startsWith('_')) continue;
  const page = bySlug.get(slug);
  if (!page) problems.push(`anchor target "${slug}" is not an article page`);
  else if (page.draft) problems.push(`anchor target "${slug}" is a draft; drafts are not link targets`);
  for (const phrase of phrases) {
    const key = phrase.toLowerCase().trim();
    if (phraseTarget.has(key) && phraseTarget.get(key) !== slug) {
      problems.push(`phrase "${key}" is mapped to both ${phraseTarget.get(key)} and ${slug}`);
    }
    phraseTarget.set(key, slug);
  }
}
if (problems.length) {
  console.error(problems.map((p) => `✗ ${p}`).join('\n'));
  process.exit(1);
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const toPattern = (phrase) =>
  escape(phrase)
    .replace(/'/g, "['’]")
    .replace(/ /g, '\\s+');
// Longest phrase first, so "nordictrack commercial 1750" beats "commercial 1750".
const phrases = [...phraseTarget.keys()].sort((a, b) => b.length - a.length);
const MATCHER = new RegExp(`(?<![\\w-])(${phrases.map(toPattern).join('|')})(?![\\w-])`, 'gi');
const normalise = (s) => s.toLowerCase().replace(/’/g, "'").replace(/\s+/g, ' ');

// ---------------------------------------------------------------------------
// Editable regions

/** [start, end) offsets of each region of `source` the linker may edit. */
function regionsOf(page, source) {
  if (page.spec) {
    // Each section's html is the only template literal opened by `html: \``.
    const regions = [];
    const re = /html:\s*`/g;
    let m;
    while ((m = re.exec(source)) !== null) {
      const start = m.index + m[0].length;
      let end = start;
      while (end < source.length && !(source[end] === '`' && source[end - 1] !== '\\')) end += 1;
      regions.push([start, end]);
      re.lastIndex = end + 1;
    }
    return regions;
  }
  const lead = source.indexOf('<p class="text-2xl font-medium text-gray-900 mb-8 italic">');
  const faq = source.indexOf('id="faq"');
  return lead !== -1 && faq > lead ? [[lead, faq]] : [];
}

/**
 * Eligible blocks inside a region: bare <p>/<li> elements with no template
 * expressions, not nested in a forbidden or dark container. Each comes back with
 * the text runs inside it that may be linked.
 */
function blocksIn(source, start, end) {
  const blocks = [];
  const stack = [];
  const tagRe = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g;
  tagRe.lastIndex = start;
  let open = null; // the block currently being collected
  let lastEnd = start;
  let m;

  const pushText = (from, to) => {
    if (!open || from >= to) return;
    const blocked = stack.slice(open.depth).some((e) => NO_LINK_INSIDE.has(e.name));
    if (!blocked) open.runs.push([from, to]);
  };

  while ((m = tagRe.exec(source)) !== null && m.index < end) {
    pushText(lastEnd, m.index);
    lastEnd = m.index + m[0].length;
    const name = m[1].toLowerCase();
    const closing = m[0][1] === '/';
    const selfClosing = /\/\s*$/.test(m[2]) || ['br', 'img', 'hr', 'input', 'source', 'path', 'circle'].includes(name);

    if (closing) {
      const idx = stack.map((e) => e.name).lastIndexOf(name);
      if (idx === -1) continue;
      stack.length = idx;
      if (open && stack.length < open.depth) {
        open.end = m.index;
        blocks.push(open);
        open = null;
      }
      continue;
    }
    if (selfClosing) continue;

    if (!open && (name === 'p' || name === 'li') && m[2].trim() === '') {
      const forbidden = stack.some((e) => NO_LINK_INSIDE.has(e.name) || DARK_CLASS.test(e.attrs));
      if (!forbidden) open = { depth: stack.length + 1, start: m.index, runs: [] };
    }
    stack.push({ name, attrs: m[2] });
  }

  return blocks.filter((b) => {
    const html = source.slice(b.start, b.end);
    if (html.includes('${') || /[{}]/.test(html)) return false;
    // One added link per block, across runs as well as within one.
    if (html.includes('data-autolink')) return false;
    b.existingLinks = (html.match(/<a\s/g) ?? []).length;
    return b.existingLinks < 2;
  });
}

// ---------------------------------------------------------------------------
// Plan

const plans = [];
for (const page of pages) {
  const source = readFileSync(page.srcPath, 'utf-8');
  const rendered = readFileSync(join(PAGES_DIR, page.file), 'utf-8');
  const alreadyLinked = hrefsIn(rendered);
  // Links this script added on an earlier run carry data-autolink, so the cap is
  // measured against the page's own links and re-running cannot exceed it.
  let ownLinks = 0;
  let autoLinks = 0;
  for (const [s, e] of regionsOf(page, source)) {
    const region = source.slice(s, e);
    autoLinks += (region.match(/<a [^>]*data-autolink/g) ?? []).length;
    ownLinks += (region.match(/<a\s/g) ?? []).length;
  }
  ownLinks -= autoLinks;

  const candidates = [];
  regionsOf(page, source).forEach(([rs, re]) => {
    for (const block of blocksIn(source, rs, re)) {
      for (const [from, to] of block.runs) {
        const text = source.slice(from, to);
        for (const match of text.matchAll(MATCHER)) {
          const target = phraseTarget.get(normalise(match[1]));
          if (!target || target === page.slug || alreadyLinked.has(target)) continue;
          candidates.push({ target, block, at: from + match.index, text: match[1] });
        }
      }
    }
  });

  // Least-linked targets first, then same-hub, then earliest mention.
  const hub = hubOf.get(page.slug);
  candidates.sort(
    (a, b) =>
      inbound.get(a.target) - inbound.get(b.target) ||
      (hubOf.get(b.target) === hub) - (hubOf.get(a.target) === hub) ||
      a.at - b.at
  );

  const cap = capFor(ownLinks) - autoLinks;
  const chosen = [];
  const usedTargets = new Set();
  const usedBlocks = new Set();
  for (const c of candidates) {
    if (chosen.length >= cap) break;
    if (usedTargets.has(c.target) || usedBlocks.has(c.block)) continue;
    // First mention of this target on the page, not merely the first in this block.
    const first = candidates
      .filter((o) => o.target === c.target && !usedBlocks.has(o.block))
      .sort((x, y) => x.at - y.at)[0];
    chosen.push(first);
    usedTargets.add(first.target);
    usedBlocks.add(first.block);
    inbound.set(first.target, inbound.get(first.target) + 1);
  }

  if (chosen.length) plans.push({ page, source, chosen });
}

// ---------------------------------------------------------------------------
// Report / apply

let total = 0;
const regenerate = [];
for (const { page, source, chosen } of plans) {
  let out = source;
  for (const c of [...chosen].sort((a, b) => b.at - a.at)) {
    const link = `<a href="/${c.target}/" class="${LINK_CLASS}" data-autolink>${c.text}</a>`;
    out = out.slice(0, c.at) + link + out.slice(c.at + c.text.length);
  }
  total += chosen.length;
  console.log(`${page.route}  +${chosen.length}`);
  for (const c of chosen.sort((a, b) => a.at - b.at)) {
    const ctx = source.slice(Math.max(0, c.at - 50), c.at + c.text.length + 50).replace(/\s+/g, ' ');
    console.log(`    → /${c.target}/  "${c.text}"   …${ctx}…`);
  }
  if (WRITE) {
    writeFileSync(page.srcPath, out);
    if (page.spec) regenerate.push(page.slug);
  }
}

console.log(`\n${total} links across ${plans.length} pages${WRITE ? '' : ' (dry run — pass --write to apply)'}`);

// The builder is deterministic and the committed pages are in sync with their
// specs, so regenerating all of them only rewrites the ones that changed.
if (WRITE && regenerate.length) {
  execFileSync('node', [join(import.meta.dirname, 'build-articles.mjs')], { stdio: 'ignore' });
  console.log(`regenerated ${regenerate.length} spec page(s)`);
}

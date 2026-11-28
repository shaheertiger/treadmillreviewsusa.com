#!/usr/bin/env node
/**
 * Inbound internal links per article (PLAYBOOK §0b, rule L1).
 *
 * Counts how many other pages in src/pages link to each article (one per linking page), then lists
 * the pages under the line: 11 for every article, 21 for cost, fix and brand pages.
 *
 *   node scripts/inbound-links.mjs            # pages under the line, fewest links first
 *   node scripts/inbound-links.mjs --all      # every page with its count
 *   node scripts/inbound-links.mjs --json     # machine-readable
 *
 * Drafts and pages without a `const title` (hubs, index, 404) are skipped as targets. Writes nothing.
 */
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const PAGES = join(import.meta.dirname, '..', 'src', 'pages');
const args = new Set(process.argv.slice(2));
const files = readdirSync(PAGES).filter((f) => f.endsWith('.astro'));
const src = Object.fromEntries(files.map((f) => [f.slice(0, -6), readFileSync(join(PAGES, f), 'utf8')]));

const inbound = new Map();
for (const [slug, text] of Object.entries(src)) {
  for (const target of new Set([...text.matchAll(/href="\/([a-z0-9-]+)\/"/g)].map((m) => m[1]))) {
    if (target !== slug) inbound.set(target, (inbound.get(target) ?? 0) + 1);
  }
}

const isArticle = (t) => t.includes('const title') && !/draft\s*[:=]\s*true/.test(t);
const money = (s) =>
  /cost|price|troubleshoot|not-working|noise|smell|slipping|reset|wont|shock|key|breaker|overheat|beeping|repair/.test(s) ||
  /-treadmills$|-walking-pad$/.test(s);

const rows = Object.entries(src)
  .filter(([s, t]) => !['index', '404'].includes(s) && isArticle(t))
  .map(([s]) => ({ slug: s, inbound: inbound.get(s) ?? 0, need: money(s) ? 21 : 11 }))
  .sort((a, b) => a.inbound - b.inbound || a.slug.localeCompare(b.slug));

const under = rows.filter((r) => r.inbound < r.need);
if (args.has('--json')) {
  console.log(JSON.stringify(args.has('--all') ? rows : under, null, 2));
} else {
  for (const r of args.has('--all') ? rows : under) console.log(`${String(r.inbound).padStart(3)} / ${r.need}  /${r.slug}/`);
  console.log(`\n${under.length} of ${rows.length} articles are under the line (11 inbound; 21 for cost, fix and brand pages).`);
}

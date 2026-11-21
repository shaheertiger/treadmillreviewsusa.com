#!/usr/bin/env node
/**
 * Keeps each page's dateModified (and so the sitemap <lastmod>) equal to the date its content last
 * really changed, from git history.
 *
 *   node scripts/sync-lastmod.mjs            # dry run: list the pages that would change
 *   node scripts/sync-lastmod.mjs --write    # update specs and hand-written pages, then regenerate
 *
 * Why: Bing Webmaster Tools flagged updated pages as "missing from your sitemaps" because their
 * <lastmod> still showed the publish date after their content had changed (21 Nov 2026). The sitemap
 * reads dateModified from each page (astro.config.mjs), and dateModified only moved when someone
 * remembered to set `modified` by hand.
 *
 * A commit counts as a content change for a file only if its diff touches a line other than the date
 * fields themselves, so running this script (and committing its output) never moves a date on its own.
 * Spec pages get `modified`, `updated` and `updatedLong`; hand-written pages get dateModified and
 * modifiedTime. Generated .astro pages follow their spec when it is regenerated.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

const ROOT = join(import.meta.dirname, '..');
const SPECS = join(ROOT, 'src', 'content', 'articles');
const PAGES = join(ROOT, 'src', 'pages');
const write = process.argv.includes('--write');
const DATE_LINE = /(modified|updated|updatedLong|published|dateModified|modifiedTime|datePublished|publishedTime|lastmod|Last Updated|Updated)\b/i;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Newest real content change per file, from one pass over the patch log (newest commit first).
const log = execSync('git log -p --no-color --format=@@@%ad --date=short -- src/content/articles src/pages', { cwd: ROOT, encoding: 'utf8', maxBuffer: 1024e6 });
const lastReal = new Map();
let date = null, file = null, real = false;
const flush = () => { if (file && real && !lastReal.has(file)) lastReal.set(file, date); };
for (const line of log.split('\n')) {
  if (line.startsWith('@@@')) { flush(); file = null; real = false; date = line.slice(3).trim(); continue; }
  if (line.startsWith('diff --git ')) { flush(); file = line.split(' b/')[1]; real = false; continue; }
  if (!file || line.startsWith('+++') || line.startsWith('---')) continue;
  if ((line.startsWith('+') || line.startsWith('-')) && line.slice(1).trim() && !DATE_LINE.test(line)) real = true;
}
flush();

const changes = [];
const specSlugs = new Set();
for (const f of readdirSync(SPECS).filter((f) => f.endsWith('.mjs'))) {
  const path = join(SPECS, f);
  const src = readFileSync(path, 'utf8');
  const slug = (src.match(/slug:\s*'([^']+)'/) ?? [])[1];
  if (slug) specSlugs.add(slug);
  const real = lastReal.get(`src/content/articles/${f}`);
  const current = (src.match(/^\s{2}modified:\s*'(\d{4}-\d{2}-\d{2})'/m) ?? src.match(/^\s{2}published:\s*'(\d{4}-\d{2}-\d{2})'/m) ?? [])[1];
  if (!real || !current || real <= current) continue;
  changes.push({ kind: 'spec', file: f, slug, from: current, to: real });
  if (!write) continue;
  const [y, m, d] = real.split('-').map(Number);
  let out = src;
  out = /^\s{2}modified:\s*'/m.test(out)
    ? out.replace(/^(\s{2}modified:\s*)'[^']*'/m, `$1'${real}'`)
    : out.replace(/^(\s{2}published:\s*'[^']*',?)$/m, `$1\n  modified: '${real}',`);
  out = out.replace(/^(\s{2}updated:\s*)'[^']*'/m, `$1'${MONTHS[m - 1]} ${y}'`);
  out = out.replace(/^(\s{2}updatedLong:\s*)'[^']*'/m, `$1'${MONTHS[m - 1]} ${d}, ${y}'`);
  writeFileSync(path, out);
}

for (const f of readdirSync(PAGES).filter((f) => f.endsWith('.astro'))) {
  const slug = f.replace(/\.astro$/, '');
  if (specSlugs.has(slug)) continue; // generated from a spec
  const path = join(PAGES, f);
  const src = readFileSync(path, 'utf8');
  const real = lastReal.get(`src/pages/${f}`);
  const current = (src.match(/dateModified:\s*["'](\d{4}-\d{2}-\d{2})["']/) ?? [])[1];
  if (!real || !current || real <= current) continue;
  changes.push({ kind: 'page', file: f, slug, from: current, to: real });
  if (!write) continue;
  writeFileSync(path, src
    .replace(/(dateModified:\s*["'])\d{4}-\d{2}-\d{2}(["'])/g, `$1${real}$2`)
    .replace(/(modifiedTime:\s*["'])\d{4}-\d{2}-\d{2}(["'])/g, `$1${real}$2`));
}

for (const c of changes) console.log(`${c.kind === 'spec' ? 'spec' : 'page'}  /${c.slug}/  ${c.from} -> ${c.to}`);
console.log(`${changes.length} page(s) ${write ? 'updated' : 'would be updated'} (${changes.filter((c) => c.kind === 'spec').length} specs, ${changes.filter((c) => c.kind === 'page').length} hand-written).`);
if (write && changes.some((c) => c.kind === 'spec')) {
  for (const c of changes.filter((c) => c.kind === 'spec')) execSync(`node scripts/build-articles.mjs ${c.slug}`, { cwd: ROOT, stdio: 'ignore' });
  console.log('regenerated the changed spec pages');
}

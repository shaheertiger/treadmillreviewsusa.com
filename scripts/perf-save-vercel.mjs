#!/usr/bin/env node
/**
 * Saves a Vercel Web Analytics page breakdown, pulled in the daily run with the Vercel MCP tool
 * aggregate_pageviews (by: requestPath, filter: search-engine referrers), into the same format as a
 * "Top Pages" export, so perf-report.mjs treats it like any other export.
 *
 *   node scripts/perf-save-vercel.mjs --start 2026-11-14 --end 2026-11-21 --source search-all rows.txt
 *
 * rows.txt holds one "path visitors" pair per line, e.g. "/how-much-does-a-treadmill-cost 30".
 * The "Others" bucket is dropped. --source names the referrer set (search-all = every search engine
 * in SEARCH_REFERRERS below; or a single engine such as duckduckgo).
 *
 * The filter the daily run uses (keep in sync with PLAYBOOK §0):
 */
export const SEARCH_REFERRERS = ['duckduckgo.com', 'bing.com', 'cn.bing.com', 'search.yahoo.com', 'uk.search.yahoo.com', 'ca.search.yahoo.com', 'au.search.yahoo.com', 'google.com', 'ecosia.org', 'msn.com', 'search.brave.com', 'startpage.com', 'yandex.ru', 'alice.yandex.ru', 'm.baidu.com', 'sogou.com', 'kagi.com'];
import { createHash } from 'crypto';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args.splice(i, 2)[1] : null; };
  const start = opt('--start'), end = opt('--end'), source = opt('--source') ?? 'search-all';
  const file = args[0];
  if (!start || !end || !file) { console.error('usage: perf-save-vercel.mjs --start YYYY-MM-DD --end YYYY-MM-DD [--source search-all] rows.txt'); process.exit(1); }
  const rows = readFileSync(file, 'utf8').split('\n').map((l) => l.trim().split(/\s+/)).filter((r) => r.length >= 2 && r[0].startsWith('/') && !/^others$/i.test(r[0]));
  const csv = 'Page,Visitors,Total\n' + rows.map(([p, v, t]) => `"${p}",${Number(v)},${Number(t ?? v)}`).join('\n') + '\n';
  const ROOT = join(import.meta.dirname, '..');
  const DATA = join(ROOT, 'research', 'daily-publishing', 'data');
  const MANIFEST = join(DATA, 'manifest.json');
  const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, 'utf8')) : { files: [] };
  const sha1 = createHash('sha1').update(`${start}|${end}|${source}|${csv}`).digest('hex');
  if (manifest.files.some((f) => f.sha1 === sha1)) { console.log('already saved'); process.exit(0); }
  // A newer pull for the same window and source replaces the older one.
  manifest.files = manifest.files.filter((f) => !(f.kind === 'vercel-top-pages' && f.start === start && f.end === end && f.source === source));
  const days = Math.round((Date.parse(end) - Date.parse(start)) / 864e5) || 1;
  const out = `${end}_${days}d_${source}_${sha1.slice(0, 6)}.csv`;
  mkdirSync(join(DATA, 'vercel-top-pages'), { recursive: true });
  writeFileSync(join(DATA, 'vercel-top-pages', out), csv);
  manifest.files.push({ file: `vercel-top-pages/${out}`, kind: 'vercel-top-pages', start, end, days, source, sha1, original: 'vercel-mcp aggregate_pageviews', ingested: new Date().toISOString().slice(0, 10) });
  manifest.files.sort((a, b) => (a.end ?? '').localeCompare(b.end ?? '') || a.file.localeCompare(b.file));
  writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`saved vercel-top-pages/${out} (${rows.length} pages)`);
}

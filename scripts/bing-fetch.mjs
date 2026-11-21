#!/usr/bin/env node
/**
 * Pulls search data straight from the Bing Webmaster Tools API into research/daily-publishing/data/,
 * in the same formats as the manual exports, so the daily run no longer waits for an upload.
 *
 *   node scripts/bing-fetch.mjs            # needs BING_WEBMASTER_API_KEY in the environment
 *
 * Get the key in Bing Webmaster Tools: Settings (gear) > API access > API Key > Generate. Add it to
 * the cloud environment's settings as the environment variable BING_WEBMASTER_API_KEY (never paste it
 * into chat or commit it). The key is read-only for our purposes: this script only calls Get* methods.
 *
 * Writes:
 *   bing-keywords/  Keyword,Impressions,Clicks,CTR,Avg. Position   (GetQueryStats, last 28 days)
 *   bing-pages/     Page,Impressions,Clicks,CTR,Avg. Position      (GetPageStats, last 28 days)
 *   bing-overview/  Date,Clicks,Impressions,Avg. CTR               (GetRankAndTrafficStats, daily)
 */
import { createHash } from 'crypto';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

// The owner saved the key in the environment settings as `apikey` (21 Nov 2026); either name works.
const KEY = process.env.BING_WEBMASTER_API_KEY ?? process.env.apikey;
if (!KEY) {
  console.error('Neither BING_WEBMASTER_API_KEY nor apikey is set (environment variables load when a session starts or resumes). Bing Webmaster Tools > Settings > API access > Generate, then add it as an environment variable in the cloud environment settings.');
  process.exit(2);
}
const SITE = process.env.BING_SITE_URL ?? 'https://www.treadmillreviewsusa.com/';
const API = 'https://ssl.bing.com/webmaster/api.svc/json';
const ROOT = join(import.meta.dirname, '..');
const DATA = join(ROOT, 'research', 'daily-publishing', 'data');
const MANIFEST = join(DATA, 'manifest.json');
const today = new Date().toISOString().slice(0, 10);
const since = Date.now() - 28 * 864e5;

async function call(method) {
  const url = `${API}/${method}?siteUrl=${encodeURIComponent(SITE)}&apikey=${encodeURIComponent(KEY)}`;
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  const text = await res.text();
  if (!res.ok) throw new Error(`${method}: HTTP ${res.status} ${text.slice(0, 200)}`);
  const json = JSON.parse(text);
  return json.d ?? json;
}
const ms = (d) => Number(String(d).match(/\/Date\((\d+)/)?.[1] ?? Date.parse(d));
const q = (s) => `"${String(s).replace(/"/g, '""')}"`;

function rollup(rows, keyField) {
  const m = new Map();
  for (const r of rows) {
    if (ms(r.Date) < since) continue;
    const k = r[keyField];
    const a = m.get(k) ?? { k, imp: 0, clk: 0, posW: 0 };
    a.imp += r.Impressions || 0; a.clk += r.Clicks || 0; a.posW += (r.AvgImpressionPosition || 0) * (r.Impressions || 0);
    m.set(k, a);
  }
  return [...m.values()].sort((a, b) => b.imp - a.imp);
}

function save(kind, csv) {
  const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, 'utf8')) : { files: [] };
  const sha1 = createHash('sha1').update(csv).digest('hex');
  if (manifest.files.some((f) => f.sha1 === sha1)) return console.log(`${kind}: unchanged`);
  const out = `${today}_bing-api_${sha1.slice(0, 6)}.csv`;
  mkdirSync(join(DATA, kind), { recursive: true });
  writeFileSync(join(DATA, kind, out), csv);
  manifest.files.push({ file: `${kind}/${out}`, kind, start: kind === 'bing-overview' ? null : new Date(since).toISOString().slice(0, 10), end: today, days: kind === 'bing-overview' ? null : 28, source: 'bing', sha1, original: 'Bing Webmaster API', ingested: today });
  manifest.files.sort((a, b) => (a.end ?? '').localeCompare(b.end ?? '') || a.file.localeCompare(b.file));
  writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`saved ${kind}/${out}`);
}

const fmt = (a) => `${a.imp},${a.clk},${a.imp ? ((100 * a.clk) / a.imp).toFixed(2) : 0}%,${a.imp ? (a.posW / a.imp).toFixed(2) : ''}`;
const queries = rollup(await call('GetQueryStats'), 'Query');
save('bing-keywords', 'Keyword,Impressions,Clicks,CTR,Avg. Position\n' + queries.map((a) => `${q(a.k)},${fmt(a)}`).join('\n') + '\n');
const pages = rollup(await call('GetPageStats'), 'Query');
save('bing-pages', 'Page,Impressions,Clicks,CTR,Avg. Position\n' + pages.map((a) => `${q(a.k)},${fmt(a)}`).join('\n') + '\n');
const daily = (await call('GetRankAndTrafficStats')).map((r) => ({ d: new Date(ms(r.Date)).toISOString().slice(0, 10), c: r.Clicks || 0, i: r.Impressions || 0 })).sort((a, b) => a.d.localeCompare(b.d));
save('bing-overview', 'Date,Clicks,Impressions,Avg. CTR\n' + daily.map((r) => `${r.d},${r.c},${r.i},${r.i ? ((100 * r.c) / r.i).toFixed(2) : 0}`).join('\n') + '\n');
console.log(`Bing: ${queries.length} queries, ${pages.length} pages, ${daily.length} days`);

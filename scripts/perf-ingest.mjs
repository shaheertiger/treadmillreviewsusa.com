#!/usr/bin/env node
/**
 * Files analytics exports into research/daily-publishing/data/ so perf-report.mjs can read them.
 *
 *   node scripts/perf-ingest.mjs                      # scan /root/.claude/uploads/<session>/ folders
 *   node scripts/perf-ingest.mjs path/to/file.csv ... # or ingest specific files
 *   node scripts/perf-ingest.mjs --source duckduckgo path/to/file.csv   # tag the referrer filter
 *
 * Recognised by header:
 *   Page,Visitors,Total                        → vercel-top-pages (Vercel Web Analytics "Top Pages" export)
 *   "Keyword","Impressions","Clicks",...       → bing-keywords   (Bing Webmaster Tools keyword report)
 *   "Date","Clicks","Impressions","Avg. CTR"   → bing-overview   (Bing Webmaster Tools search performance)
 *   "Grounding Query","Intent","Topic",...     → ai-queries      (Bing Webmaster Tools AI Performance: Copilot grounding queries)
 *   "Page","Citations"                         → ai-pages        (Bing Webmaster Tools AI Performance: cited pages)
 *
 * Each file is copied once (by content hash) and recorded in data/manifest.json with its kind, date
 * range (parsed from the export's file name) and referrer source. A Vercel export does not say which
 * referrer filter was applied, so the source is "unknown" unless given with --source or edited in the
 * manifest; perf-report.mjs never adds two files from the same window unless their sources differ.
 */
import { createHash } from 'crypto';
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, statSync } from 'fs';
import { join, basename } from 'path';

const ROOT = join(import.meta.dirname, '..');
const DATA = join(ROOT, 'research', 'daily-publishing', 'data');
const MANIFEST = join(DATA, 'manifest.json');
const MONTHS = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };

const args = process.argv.slice(2);
let source = 'unknown';
const files = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--source') source = args[++i];
  else files.push(args[i]);
}
if (!files.length) {
  const up = '/root/.claude/uploads';
  if (existsSync(up)) for (const d of readdirSync(up)) {
    const dir = join(up, d);
    if (!statSync(dir).isDirectory()) continue;
    for (const f of readdirSync(dir)) if (f.toLowerCase().endsWith('.csv')) files.push(join(dir, f));
  }
}

const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, 'utf8')) : { files: [] };
const known = new Set(manifest.files.map((f) => f.sha1));
const pad = (n) => String(n).padStart(2, '0');
const year = new Date().getUTCFullYear();

function kindOf(header) {
  const h = header.replace(/^﻿/, '').replace(/"/g, '').toLowerCase();
  if (h.startsWith('page,visitors,total')) return 'vercel-top-pages';
  if (h.startsWith('keyword,impressions,clicks')) return 'bing-keywords';
  if (h.startsWith('date,clicks,impressions')) return 'bing-overview';
  if (h.startsWith('grounding query,')) return 'ai-queries';
  if (h.startsWith('page,citations')) return 'ai-pages';
  return null;
}

function rangeOf(name, kind) {
  // Vercel: Top_Pages_-_Nov_20_3pm_-_Nov_21_2_59pm
  const v = name.match(/([A-Za-z]{3})_(\d{1,2})_[^-]*-_([A-Za-z]{3})_(\d{1,2})_/);
  if (kind === 'vercel-top-pages' && v) {
    const s = `${year}-${pad(MONTHS[v[1].toLowerCase()])}-${pad(v[2])}`;
    const e = `${year}-${pad(MONTHS[v[3].toLowerCase()])}-${pad(v[4])}`;
    return { start: s, end: e };
  }
  // Bing: ..._11_20_2026.csv
  const b = name.match(/_(\d{1,2})_(\d{1,2})_(\d{4})/);
  if (b) { const d = `${b[3]}-${pad(b[1])}-${pad(b[2])}`; return { start: null, end: d }; }
  return { start: null, end: null };
}

let added = 0;
for (const f of files) {
  const buf = readFileSync(f);
  const sha1 = createHash('sha1').update(buf).digest('hex');
  if (known.has(sha1)) continue;
  const kind = kindOf(buf.toString('utf8').split(/\r?\n/)[0]);
  const src = kind && kind !== 'vercel-top-pages' ? 'bing' : source;
  if (!kind) { console.log(`skip (unrecognised header): ${basename(f)}`); continue; }
  const { start, end } = rangeOf(basename(f), kind);
  const days = start && end ? Math.round((Date.parse(end) - Date.parse(start)) / 864e5) || 1 : null;
  const dir = join(DATA, kind);
  mkdirSync(dir, { recursive: true });
  const out = `${end ?? 'undated'}${days ? `_${days}d` : ''}_${src}_${sha1.slice(0, 6)}.csv`;
  writeFileSync(join(dir, out), buf);
  manifest.files.push({ file: `${kind}/${out}`, kind, start, end, days, source: src, sha1, original: basename(f), ingested: new Date().toISOString().slice(0, 10) });
  known.add(sha1);
  added++;
  console.log(`added ${kind}/${out}  (${basename(f)})`);
}
manifest.files.sort((a, b) => (a.end ?? '').localeCompare(b.end ?? '') || a.file.localeCompare(b.file));
mkdirSync(DATA, { recursive: true });
writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
console.log(`${added} new file(s); ${manifest.files.length} in manifest`);

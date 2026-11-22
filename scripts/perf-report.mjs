#!/usr/bin/env node
/**
 * Turns the analytics exports in research/daily-publishing/data/ into research/daily-publishing/PERFORMANCE.md:
 * which page types win visitors and clicks, which do not, which pages are rising or falling, whether the
 * pages the daily run published are being found, which page-one keywords get no clicks, and which queue
 * items are eligible today. The daily publishing run reads PERFORMANCE.md before it writes anything.
 *
 *   node scripts/perf-ingest.mjs    # first: file any new exports
 *   node scripts/perf-report.mjs    # then: rebuild PERFORMANCE.md and performance.json
 *
 * Every page is classified by type (see typeOf). Type verdicts compare visitors per live page, counting
 * only pages old enough to have been indexed (14+ days), so a type is not judged on pages Bing has not
 * crawled yet. Sample sizes are printed next to every verdict; small samples are labelled as such.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

const ROOT = join(import.meta.dirname, '..');
const DP = join(ROOT, 'research', 'daily-publishing');
const DATA = join(DP, 'data');
const SPECS = join(ROOT, 'src', 'content', 'articles');
const PAGES = join(ROOT, 'src', 'pages');
const TODAY = process.env.PERF_TODAY ?? new Date().toISOString().slice(0, 10);
const days = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 864e5);

// ---------- CSV ----------
function parseCSV(text) {
  const rows = []; let row = [], cell = '', q = false;
  text = text.replace(/^﻿/, '');
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; } else if (c === '"') q = false; else cell += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') { if (c === '\r' && text[i + 1] === '\n') i++; row.push(cell); if (row.some((x) => x !== '')) rows.push(row); row = []; cell = ''; }
    else cell += c;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  const [h, ...rest] = rows;
  return rest.map((r) => Object.fromEntries(h.map((k, i) => [k.trim(), r[i]])));
}

// ---------- page inventory ----------
const LANDING = new Set(['index', 'best-of', 'contact-us', 'editorial-standards']);
function typeOf(slug, spec, hint = '') {
  const crumb = spec?.breadcrumb?.url ?? (hint.match(/\/(problems|maintenance|training|compare|reviews|brands|price|best|guides|home-gym)\//)?.[0] ?? '');
  if (/black-friday|cyber-monday|-deals$/.test(slug)) return 'deals';
  if (/^how-much-does|-cost$|-cost-|^treadmill-price|^how-much-should|financing/.test(slug) && !/costco/.test(slug)) return 'cost/price';
  if (crumb === '/problems/' || /troubleshoot|not-working|noise|squeak|shock|smell|wont|won-t|breaker|slipping|jerking|overheat|shaking|sensor|reset|repair|error|shuts-off|slows-down|cracked|water-damage|beeping|humming|clicking|recall|sticking|fraying/.test(slug)) return 'fix';
  if (crumb === '/maintenance/' || /lubricat|^how-to-(clean|adjust|replace|assemble|disassemble|move|fold|dispose|pack|store|take-apart|turn-on|start|vacuum|center)|maintenance|-belt-size|replacement/.test(slug)) return 'maintenance/how-to';
  if (/-vs-/.test(slug)) return 'compare';
  const question = /^(what|how|can|is|are|does|do|why|should|where|when|which|who)-/.test(slug);
  if (/senior|arthritis|diabet|knee|hip-replacement|pregnan|heart-rate-zones|stress-test|weight-loss|fat-loss|belly-fat|glutes|muscles|calories|mets|elderly/.test(slug) && !/^best-/.test(slug)) return 'health/fitness question';
  if (/speed|pace|incline|decline|degrees|percent|mph|steps|mile|how-fast|how-long-is/.test(slug) && !/^best-|workout/.test(slug)) return 'speed/incline explainer';
  if (crumb === '/training/' || /workout|training|couch-to|zone-2|interval|hiit|marathon|warm-up|running-form|how-long-should|walking-backwards|boring|cool/.test(slug) && !/^best-/.test(slug)) return 'workouts/training';
  if (question) return 'guide/question';
  if (crumb === '/brands/' && !/^best-/.test(slug)) return 'brand';
  if (/^best-/.test(slug) || (spec?.products?.length ?? 0) >= 3) return /treadmill|walking-pad|walking-machine|incline-trainer/.test(slug) ? 'roundup: treadmills & pads' : 'roundup: home gym & accessories';
  if (crumb === '/brands/' || /treadmills$|walking-pad$|^is-.*-(good|legit)|legit|-brand/.test(slug)) return 'brand';
  if (crumb === '/reviews/' || /-treadmill$|-review$|^(nordictrack|proform|sole|horizon|bowflex|life-fitness|matrix|peloton|walkingpad)-/.test(slug)) return 'model review';
  return 'guide/question';
}

let firstAdded = {};
try {
  const log = execSync('git log --diff-filter=A --format=@%ad --date=short --name-only -- src/pages', { cwd: ROOT, encoding: 'utf8', maxBuffer: 64e6 });
  let d = null;
  for (const line of log.split('\n')) {
    if (line.startsWith('@')) d = line.slice(1);
    else if (line.endsWith('.astro')) firstAdded[line.replace(/^src\/pages\//, '').replace(/\.astro$/, '').replace(/\/index$/, '')] ??= d;
  }
} catch { /* no git: published dates fall back to specs only */ }

const pages = new Map();
for (const f of readdirSync(SPECS).filter((f) => f.endsWith('.mjs'))) {
  const spec = (await import(join(SPECS, f))).default;
  if (spec.dataPending) continue;
  pages.set(spec.slug, { slug: spec.slug, type: typeOf(spec.slug, spec), published: spec.published ?? firstAdded[spec.slug] ?? null, title: spec.title });
}
for (const f of readdirSync(PAGES)) {
  if (!f.endsWith('.astro')) continue;
  const slug = f.replace(/\.astro$/, '');
  if (LANDING.has(slug) || pages.has(slug)) continue;
  const src = readFileSync(join(PAGES, f), 'utf8');
  if (/noindex/.test(src) && /DATA_PENDING|dataPending/.test(src)) continue;
  const title = (src.match(/const title\s*=\s*\n?\s*["'`](.*?)["'`]/) ?? [])[1] ?? slug;
  pages.set(slug, { slug, type: typeOf(slug, null), published: firstAdded[slug] ?? null, title });
}
const redirect = new Map();
try {
  const vj = JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf8'));
  for (const r of vj.redirects ?? []) {
    const a = r.source.replace(/^\/|\/$|\.md$/g, ''), b = r.destination.replace(/^\/|\/$/g, '');
    if (a && b && !a.includes(':') && !a.includes('*')) redirect.set(a, b);
  }
} catch { /* no vercel.json */ }
const canon = (raw) => {
  let slug = String(raw ?? '').replace(/^https?:\/\/[^/]+/, '').replace(/^\/|\/$/g, '').replace(/\.md$/, '') || 'index';
  for (let i = 0; i < 3 && redirect.has(slug); i++) slug = redirect.get(slug);
  return slug;
};
const age = (p) => (p.published ? days(p.published, TODAY) : 999);

// ---------- analytics ----------
const manifest = existsSync(join(DATA, 'manifest.json')) ? JSON.parse(readFileSync(join(DATA, 'manifest.json'), 'utf8')) : { files: [] };
const vercel = manifest.files.filter((f) => f.kind === 'vercel-top-pages' && f.end);
const windows = new Map(); // `${start}|${end}` -> { start, end, days, sources: {src: Map(slug -> visitors)} }
for (const f of vercel) {
  const key = `${f.start}|${f.end}`;
  const w = windows.get(key) ?? { start: f.start, end: f.end, days: f.days || 1, sources: {} };
  if (!w.sources[f.source]) {
    const m = new Map();
    for (const r of parseCSV(readFileSync(join(DATA, f.file), 'utf8'))) {
      const slug = canon(r.Page);
      m.set(slug, (m.get(slug) ?? 0) + Number(r.Visitors || 0));
    }
    w.sources[f.source] = m;
  }
  windows.set(key, w);
}
function windowTotals(w) {
  const tot = new Map();
  const srcs = Object.keys(w.sources);
  // Priority: the daily run's all-search-engine pull, then an unfiltered export, else the sum of
  // filtered exports (different referrers in one window are disjoint).
  const use = srcs.includes('search-all') ? ['search-all'] : srcs.includes('all') ? ['all'] : srcs;
  for (const s of use) for (const [k, v] of w.sources[s]) tot.set(k, (tot.get(k) ?? 0) + v);
  return { tot, sources: use };
}
const sortedW = [...windows.values()].sort((a, b) => a.end.localeCompare(b.end) || b.days - a.days);
const anySearchAll = sortedW.some((w) => w.sources['search-all']);
const weekly = sortedW.filter((w) => w.days >= 5 && (!anySearchAll || w.sources['search-all']));
const latestWeek = weekly.at(-1);
const prevWeek = weekly.length > 1 ? weekly.at(-2) : null;
const latestDay = sortedW.filter((w) => w.days < 5).at(-1);

// ---------- type verdicts (latest weekly window) ----------
const out = [];
const P = (s = '') => out.push(s);
var siteVpp = 0;
const typeRows = [];
if (latestWeek) {
  const { tot } = windowTotals(latestWeek);
  const byType = new Map();
  for (const p of pages.values()) {
    if (age(p) < 14) continue;
    const t = byType.get(p.type) ?? { type: p.type, live: 0, hit: 0, visitors: 0 };
    t.live++; const v = tot.get(p.slug) ?? 0; t.visitors += v; if (v > 0) t.hit++;
    byType.set(p.type, t);
  }
  for (const t of byType.values()) { t.vpp = t.visitors / t.live; t.hitRate = t.hit / t.live; typeRows.push(t); }
  typeRows.sort((a, b) => b.vpp - a.vpp);
  const liveAll = typeRows.reduce((a, t) => a + t.live, 0), visAll = typeRows.reduce((a, t) => a + t.visitors, 0);
  var siteVpp = liveAll ? visAll / liveAll : 0;
  for (const t of typeRows) {
    t.index = siteVpp ? t.vpp / siteVpp : 0;
  }
  
}

// ---------- page trends ----------
let risers = [], fallers = [];
if (latestWeek && prevWeek) {
  const a = windowTotals(prevWeek).tot, b = windowTotals(latestWeek).tot;
  const ka = 7 / (prevWeek.days || 7), kb = 7 / (latestWeek.days || 7); // compare per-7-day rates
  const slugs = new Set([...a.keys(), ...b.keys()]);
  const d = [...slugs].map((s) => ({ s, was: Math.round((a.get(s) ?? 0) * ka * 10) / 10, now: Math.round((b.get(s) ?? 0) * kb * 10) / 10 })).map((x) => ({ ...x, diff: x.now - x.was }));
  risers = d.filter((x) => x.diff >= 2).sort((x, y) => y.diff - x.diff).slice(0, 12);
  fallers = d.filter((x) => x.diff <= -2).sort((x, y) => x.diff - y.diff).slice(0, 12);
}

// A type judged DOESN'T on its older pages gets a reprieve when its pages are climbing now.
risers = risers.filter((r) => r.s !== 'index');
const risingByType = new Map();
for (const r of risers) if (r.diff >= 3) { const t = pages.get(r.s)?.type; if (t) risingByType.set(t, (risingByType.get(t) ?? 0) + 1); }

// ---------- new pages ----------
const recentAll = new Map();
for (const w of sortedW) for (const [k, v] of windowTotals(w).tot) recentAll.set(k, (recentAll.get(k) ?? 0) + v);
const newPages = [...pages.values()].filter((p) => age(p) <= 21 && age(p) >= 0).sort((a, b) => (b.published ?? '').localeCompare(a.published ?? ''));
const newByType = new Map();
for (const p of newPages) {
  const t = newByType.get(p.type) ?? { type: p.type, pages: 0, found: 0, visitors: 0 };
  const v = recentAll.get(p.slug) ?? 0; t.pages++; t.visitors += v; if (v > 0) t.found++;
  newByType.set(p.type, t);
}

// ---------- Bing keywords ----------
const kwFile = manifest.files.filter((f) => f.kind === 'bing-keywords').at(-1);
let kwThemes = [], ctrFixes = [];
if (kwFile) {
  const rows = parseCSV(readFileSync(join(DATA, kwFile.file), 'utf8')).map((r) => ({ k: (r.Keyword ?? '').toLowerCase(), i: +r.Impressions || 0, c: +r.Clicks || 0, p: +r['Avg. Position'] || 0 }));
  const themes = [
    ['cost/price', /cost|price|how much|cheap|\$|under \d|budget/], ['deals', /black friday|cyber|deal|sale/],
    ['fix/troubleshoot', /not working|won.?t|troubleshoot|reset|error|squeak|noise|thump|slip|shock|static|lubric|belt|motor|tripp|breaker|repair|sensor|key|console|wobbl|smell/],
    ['incline/decline', /incline|decline|degree|percent/], ['speed/pace', /speed|pace|mph|mile|steps|how fast|how long/],
    ['seniors/health', /senior|elderly|older|knee|arthritis|diabet|hip|heart|stress test|weight loss|belly/],
    ['brand/model', /nordictrack|nordic track|proform|sole|horizon|bowflex|peloton|wellfit|matrix|life ?fitness|yesoul|lifesmart|x22i|t101|f63|f65/],
    ['walking pad', /walking pad|under desk/], ['best roundup', /\bbest\b|\btop\b/],
  ];
  const agg = new Map();
  for (const r of rows) {
    const t = (themes.find(([, re]) => re.test(r.k)) ?? ['other'])[0];
    const a = agg.get(t) ?? { theme: t, kw: 0, imp: 0, clk: 0 }; a.kw++; a.imp += r.i; a.clk += r.c; agg.set(t, a);
  }
  kwThemes = [...agg.values()].map((a) => ({ ...a, ctr: a.imp ? a.clk / a.imp : 0 })).sort((a, b) => b.clk - a.clk);
  ctrFixes = rows.filter((r) => r.p <= 7 && r.i >= 5 && r.c === 0).sort((a, b) => b.i - a.i).slice(0, 15);
}

// ---------- Bing pages (API) ----------
const bingPagesFile = manifest.files.filter((f) => f.kind === 'bing-pages').at(-1);
let bingTypes = [], bingPageOne = [];
if (bingPagesFile) {
  const agg = new Map();
  for (const r of parseCSV(readFileSync(join(DATA, bingPagesFile.file), 'utf8'))) {
    const slug = canon(r.Page), t = pages.get(slug)?.type ?? 'not in inventory';
    const imp = +r.Impressions || 0, clk = +r.Clicks || 0, pos = +r['Avg. Position'] || 0;
    const a = agg.get(t) ?? { type: t, pages: 0, imp: 0, clk: 0 }; a.pages++; a.imp += imp; a.clk += clk; agg.set(t, a);
    if (pos && pos <= 7 && imp >= 20 && clk === 0) bingPageOne.push({ slug, imp, pos });
  }
  bingTypes = [...agg.values()].map((a) => ({ ...a, ctr: a.imp ? a.clk / a.imp : 0 })).sort((x, y) => y.clk - x.clk);
  bingPageOne.sort((x, y) => y.imp - x.imp); bingPageOne = bingPageOne.slice(0, 15);
}

// ---------- AI citations (Copilot) ----------
const aiPagesFile = manifest.files.filter((f) => f.kind === 'ai-pages').at(-1);
const aiQueriesFile = manifest.files.filter((f) => f.kind === 'ai-queries').at(-1);
let aiTypes = [], aiTopPages = [], aiQueries = [], aiGaps = [];
if (aiPagesFile) {
  const cit = new Map();
  for (const r of parseCSV(readFileSync(join(DATA, aiPagesFile.file), 'utf8'))) { const k = canon(r.Page); cit.set(k, (cit.get(k) ?? 0) + Number(r.Citations || 0)); }
  aiTopPages = [...cit.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15);
  const agg = new Map();
  for (const p of pages.values()) {
    const t = agg.get(p.type) ?? { type: p.type, pages: 0, cited: 0, citations: 0 };
    const c = cit.get(p.slug) ?? 0; t.pages++; t.citations += c; if (c > 0) t.cited++; agg.set(p.type, t);
  }
  aiTypes = [...agg.values()].map((t) => ({ ...t, perPage: t.citations / t.pages })).sort((a, b) => b.perPage - a.perPage);
}
if (aiQueriesFile) {
  aiQueries = parseCSV(readFileSync(join(DATA, aiQueriesFile.file), 'utf8')).map((r) => ({ q: r['Grounding Query'], intent: r.Intent, c: Number(r.Citations || 0), share: r['Citation Share'] })).sort((a, b) => b.c - a.c);
  const titles = [...pages.values()].map((p) => `${p.slug.replace(/-/g, ' ')} ${String(p.title).toLowerCase()}`);
  const stop = new Set(['the', 'a', 'an', 'of', 'for', 'to', 'and', 'on', 'in', 'is', 'vs', 'best', 'treadmill', 'treadmills', '2026', 'how', 'what', 'does', 'do', 'with', 'your', 'at', 'home']);
  aiGaps = aiQueries.filter((q) => {
    const words = String(q.q).toLowerCase().split(/[^a-z0-9]+/).filter((w) => w && !stop.has(w));
    if (!words.length) return false;
    return !titles.some((t) => words.every((w) => t.includes(w.length > 6 ? w.slice(0, 6) : w.replace(/s$/, ''))));
  }).slice(0, 15);
}

// ---------- combined verdicts: visitors (Vercel) + AI citations (Copilot) ----------
const aiAvg = aiTypes.length ? aiTypes.reduce((a, t) => a + t.citations, 0) / aiTypes.reduce((a, t) => a + t.pages, 0) : 0;
const aiIdx = new Map(aiTypes.map((t) => [t.type, aiAvg ? t.perPage / aiAvg : null]));
for (const t of typeRows) {
  t.aiIndex = aiIdx.get(t.type) ?? null;
  const v = t.index, a = t.aiIndex;
  if (v >= 1.25 || (a !== null && a >= 1.5 && v >= 0.6)) t.verdict = 'WORKS';
  else if (v <= 0.6 && (a === null || a <= 0.6)) t.verdict = "DOESN'T";
  else t.verdict = 'WATCH';
  if (t.verdict === "DOESN'T" && (risingByType.get(t.type) ?? 0) >= 2) t.verdict = 'WATCH (pages rising)';
  if (t.live < 8) t.verdict += ' (few pages)';
}

// ---------- queue eligibility ----------
const verdictOf = new Map(typeRows.map((t) => [t.type, t.verdict]));
function eligible(file, section) {
  const p = join(DP, file);
  if (!existsSync(p)) return [];
  const body = readFileSync(p, 'utf8').split(/\n## Parked/)[0];
  return [...body.matchAll(/^- \[ \] `([^`]+)`(.*)$/gm)].map((m) => {
    const type = typeOf(m[1], null, m[2]);
    return { slug: m[1], type, verdict: verdictOf.get(type) ?? 'NO DATA', exists: existsSync(join(PAGES, `${m[1]}.astro`)) };
  });
}
const lanes = [['Money lane', 'roundup-queue.md'], ['Traffic lane', 'queue.md']].map(([name, file]) => ({ name, items: eligible(file) }));

// ---------- engine lanes: 3 picks from Bing data, 3 from DuckDuckGo data ----------
// Each engine sends visitors to different kinds of page, so each gets its own type ranking (visitors
// per live page from that engine's own Vercel pull, plus Bing Webmaster click-through for Bing), and
// its own three picks from the Active queues. A DOESN'T type is never picked by either lane.
function engineIndex(source) {
  const w = [...windows.values()].filter((x) => x.sources[source] && x.days >= 5).sort((a, b) => a.end.localeCompare(b.end) || a.start.localeCompare(b.start)).at(-1);
  if (!w) return null;
  const tot = w.sources[source];
  const by = new Map();
  for (const p of pages.values()) {
    if (age(p) < 14) continue;
    const t = by.get(p.type) ?? { type: p.type, live: 0, visitors: 0 };
    t.live++; t.visitors += tot.get(p.slug) ?? 0; by.set(p.type, t);
  }
  const rows = [...by.values()];
  const avg = rows.reduce((a, t) => a + t.visitors, 0) / Math.max(1, rows.reduce((a, t) => a + t.live, 0));
  for (const t of rows) t.index = avg ? t.visitors / t.live / avg : 0;
  return { window: w, rows: rows.sort((a, b) => b.index - a.index), total: [...tot.values()].reduce((a, b) => a + b, 0) };
}
const engines = { bing: engineIndex('bing'), duckduckgo: engineIndex('duckduckgo') };
if (engines.bing && bingTypes.length) { // blend in Bing's own click-through by type
  const ctr = new Map(bingTypes.map((t) => [t.type, t.ctr]));
  const avgCtr = bingTypes.reduce((a, t) => a + t.clk, 0) / Math.max(1, bingTypes.reduce((a, t) => a + t.imp, 0));
  for (const t of engines.bing.rows) t.index = 0.5 * t.index + 0.5 * ((ctr.get(t.type) ?? 0) / (avgCtr || 1));
  engines.bing.rows.sort((a, b) => b.index - a.index);
}
const pool = lanes.flatMap((l) => l.items.map((x, i) => ({ ...x, lane: l.name, order: i }))).filter((x) => !x.exists && !String(x.verdict).startsWith("DOESN'T"));
const enginePicks = {};
const taken = new Set(), typeUse = new Map();
// Each engine lane: 1 pick from the money lane (roundups and brand pages, the affiliate pages) and 2 from
// the traffic lane, ranked by that engine's type index. No type is used more than twice across all six,
// so the day's output is not six versions of one page.
for (const eng of ['bing', 'duckduckgo']) {
  const e = engines[eng];
  if (!e) { enginePicks[eng] = []; continue; }
  const idx = new Map(e.rows.map((t) => [t.type, t.index]));
  const picks = [];
  for (const [laneName, n] of [['Money lane', 1], ['Traffic lane', 2]]) {
    const ranked = pool.filter((x) => x.lane === laneName && !taken.has(x.slug)).map((x) => ({ ...x, score: idx.get(x.type) ?? 0 })).sort((a, b) => b.score - a.score || a.order - b.order);
    let got = 0;
    for (const x of ranked) {
      if (got === n) break;
      if ((typeUse.get(x.type) ?? 0) >= 2) continue;
      picks.push(x); taken.add(x.slug); typeUse.set(x.type, (typeUse.get(x.type) ?? 0) + 1); got++;
    }
  }
  enginePicks[eng] = picks;
}

// ---------- write ----------
const pct = (x) => `${(100 * x).toFixed(1)}%`;
P('# Performance Report (auto-generated)');
P('');
P(`Built ${TODAY} by \`node scripts/perf-report.mjs\` from ${manifest.files.length} export(s) in \`research/daily-publishing/data/\`. Do not edit by hand; drop new exports in and re-run.`);
P('');
P('## Instructions for today\'s run');
P('');
const works = typeRows.filter((t) => t.verdict === 'WORKS').map((t) => t.type);
const doesnt = typeRows.filter((t) => t.verdict === "DOESN'T").map((t) => t.type);
P(`1. **Write more of:** ${works.length ? works.join(', ') : 'no clear winner yet (keep the current queue order)'}.`);
P(`2. **Do not write new:** ${doesnt.length ? doesnt.join(', ') : 'nothing flagged'}. A queue item of one of these types is deferred: mark it \`- [~] deferred: <type> is DOESN'T in PERFORMANCE.md (date)\` and take the next eligible item.`);
P('3. **Expand before adding siblings:** any page in "Rising" below that climbed again this export gets 2-4 new sections and FAQs (PLAYBOOK §1d).');
P('4. **CTR fixes:** if the "Page-one keywords with no clicks" list names a page that has not had a title/description change in the last 7 days, rewrite one title and one description per run so they lead with that query and give the answer with a number.');
P('5. **Sample size:** a verdict built on fewer than about 5 visitors per type is a hint, not a rule. Say so in the PR.');
P('');
P('### Today\'s six picks: 3 for Bing, 3 for DuckDuckGo');
P('');
P('The daily run writes these six. Each engine\'s picks come from the page types that engine rewards (its own visitors per page; for Bing also its click-through rate). If a pick turns out to be covered by an existing page, mark it skipped and take the next item in that engine\'s ranking.');
P('');
for (const [eng, label] of [['bing', 'Bing (also Yahoo, MSN, Copilot)'], ['duckduckgo', 'DuckDuckGo']]) {
  const e = engines[eng];
  P(`**${label}**${e ? ` (${e.total} visitors, ${e.window.start} to ${e.window.end}; top types: ${e.rows.slice(0, 4).map((t) => `${t.type} ${t.index.toFixed(2)}x`).join(', ')})` : ' (no per-engine pull on file: run the data step)'}`);
  P('');
  for (const x of enginePicks[eng] ?? []) P(`- **PICK** \`${x.slug}\`: ${x.type} (${x.lane === 'Money lane' ? 'roundup-queue.md' : 'queue.md'})`);
  P('');
}
P('### Queue order (for reference)');
P('');
for (const lane of lanes) {
  P(`**${lane.name}**`);
  P('');
  const firstOk = lane.items.find((x) => !x.exists && x.verdict !== "DOESN'T");
  for (const x of lane.items.slice(0, 8)) {
    const mark = x.exists ? 'already published (tick it)' : x.verdict === "DOESN'T" ? 'defer' : x === firstOk ? '**PICK**' : 'ok';
    P(`- \`${x.slug}\`: ${x.type}, ${x.verdict}, ${mark}`);
  }
  P('');
}
if (latestWeek) {
  const { tot, sources } = windowTotals(latestWeek);
  const totalV = [...tot.values()].reduce((a, b) => a + b, 0);
  P(`## What works and what doesn't, by page type (${latestWeek.start} to ${latestWeek.end}, sources: ${sources.join(' + ')}, ${totalV} visitors)`);
  P('');
  P('Only pages 14+ days old count, so new pages do not drag a type down before Bing has indexed them.');
  P('');
  P(`Site average: ${siteVpp.toFixed(2)} visitors per page. "Visits" and "AI" are each type's visitors and Copilot citations per page against the site average. WORKS = visits 1.25x or more, or AI 1.5x+ with visits at least 0.6x. DOESN'T = visits 0.6x or less and AI 0.6x or less (or no AI data).`);
  P('');
  P('| Type | Live pages (14d+) | Pages with visitors | Hit rate | Visitors | Per page | Visits | AI | Verdict |');
  P('|---|---:|---:|---:|---:|---:|---:|---:|---|');
  for (const t of typeRows) P(`| ${t.type} | ${t.live} | ${t.hit} | ${pct(t.hitRate)} | ${t.visitors} | ${t.vpp.toFixed(2)} | ${t.index.toFixed(2)}x | ${t.aiIndex === null ? 'n/a' : t.aiIndex.toFixed(2) + 'x'} | ${t.verdict} |`);
  P('');
  P('### Top pages this window');
  P('');
  for (const [s, v] of [...tot.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15)) P(`- /${s}/ ${v} visitors (${pages.get(s)?.type ?? 'not in inventory: redirected or removed'})`);
  P('');
}
if (risers.length || fallers.length) {
  P(`## Rising and falling pages (${prevWeek.start}→${prevWeek.end} vs ${latestWeek.start}→${latestWeek.end})`);
  P('');
  P('Rates are per 7 days. Each pull lists the top 100 pages, so a 0 can mean "below the top 100" rather than none.');
  P('');
  P('**Rising** (expand these first):');
  P('');
  for (const r of risers) P(`- /${r.s}/ ${r.was} → ${r.now}`);
  P('');
  P('**Falling** (check title, freshness and whether a newer page now competes for the same search):');
  P('');
  for (const r of fallers) P(`- /${r.s}/ ${r.was} → ${r.now}`);
  P('');
}
if (latestDay) {
  const { tot, sources } = windowTotals(latestDay);
  P(`## Last day (${latestDay.start} to ${latestDay.end}, sources: ${sources.join(' + ')})`);
  P('');
  P([...tot.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15).map(([s, v]) => `/${s}/ ${v}`).join(' · '));
  P('');
}
P('## Are the new pages being found? (published in the last 21 days)');
P('');
P('Visitors summed across every export in the data folder. A page under 7 days old with no visitors is normal; one over 14 days with none is a warning about its type or its title.');
P('');
P('| Type | New pages | Pages with any visitors | Visitors |');
P('|---|---:|---:|---:|');
for (const t of [...newByType.values()].sort((a, b) => b.visitors - a.visitors)) P(`| ${t.type} | ${t.pages} | ${t.found} | ${t.visitors} |`);
P('');
const silent = newPages.filter((p) => age(p) >= 14 && !(recentAll.get(p.slug) > 0));
if (silent.length) { P(`**Silent for 14+ days:** ${silent.map((p) => `/${p.slug}/`).join(', ')}`); P(''); }
const found = newPages.filter((p) => recentAll.get(p.slug) > 0).sort((a, b) => recentAll.get(b.slug) - recentAll.get(a.slug)).slice(0, 15);
if (found.length) { P(`**New pages already drawing visitors:** ${found.map((p) => `/${p.slug}/ (${recentAll.get(p.slug)})`).join(', ')}`); P(''); }
if (kwThemes.length) {
  P(`## Bing keywords by theme (${kwFile.end})`);
  P('');
  P('| Theme | Keywords | Impressions | Clicks | CTR |');
  P('|---|---:|---:|---:|---:|');
  for (const t of kwThemes) P(`| ${t.theme} | ${t.kw} | ${t.imp} | ${t.clk} | ${pct(t.ctr)} |`);
  P('');
  P('### Page-one keywords with no clicks (CTR fix candidates)');
  P('');
  for (const r of ctrFixes) P(`- "${r.k}": ${r.i} impressions, position ${r.p.toFixed(1)}`);
  P('');
}
if (bingTypes.length) {
  P(`## Bing clicks by page type (Bing Webmaster API, ${bingPagesFile.start} to ${bingPagesFile.end})`);
  P('');
  P('| Type | Pages with impressions | Impressions | Clicks | CTR |');
  P('|---|---:|---:|---:|---:|');
  for (const t of bingTypes) P(`| ${t.type} | ${t.pages} | ${t.imp} | ${t.clk} | ${pct(t.ctr)} |`);
  P('');
  if (bingPageOne.length) {
    P('**Pages on page one with impressions but no clicks** (fix the title and description first):');
    P('');
    for (const r of bingPageOne) P(`- /${r.slug}/: ${r.imp} impressions, position ${r.pos.toFixed(1)}`);
    P('');
  }
}
if (aiTypes.length) {
  P(`## AI search citations by page type (Copilot, ${aiPagesFile.end})`);
  P('');
  P('Citations are how often Copilot and partner AI answers cite the page. They predict which explainers Bing trusts, and every citation links to the page.');
  P('');
  P('| Type | Pages | Pages cited | Citations | Per page |');
  P('|---|---:|---:|---:|---:|');
  for (const t of aiTypes) P(`| ${t.type} | ${t.pages} | ${t.cited} | ${t.citations} | ${t.perPage.toFixed(1)} |`);
  P('');
  P('**Most-cited pages:** ' + aiTopPages.map(([s, c]) => `/${s}/ (${c})`).join(', '));
  P('');
}
if (aiQueries.length) {
  P(`## AI grounding queries (${aiQueriesFile.end})`);
  P('');
  P('Top queries Copilot answered with this site:');
  P('');
  for (const q of aiQueries.slice(0, 12)) P(`- "${q.q}": ${q.c} citations, ${q.share} share${q.intent ? `, ${q.intent}` : ''}`);
  P('');
  if (aiGaps.length) {
    P('**Queries with no page whose title covers every word** (candidate topics or title fixes; check before writing):');
    P('');
    for (const q of aiGaps) P(`- "${q.q}" (${q.c} citations)`);
    P('');
  }
}
P('## Data on file');
P('');
for (const f of manifest.files) P(`- ${f.file} (${f.kind}, ${f.start ?? ''}${f.start ? '→' : ''}${f.end ?? ''}, source: ${f.source})`);
P('');
writeFileSync(join(DP, 'PERFORMANCE.md'), out.join('\n'));
writeFileSync(join(DATA, 'performance.json'), JSON.stringify({ built: TODAY, enginePicks, engineTypes: Object.fromEntries(Object.entries(engines).map(([k, v]) => [k, v?.rows ?? null])), siteVpp, bingTypes, bingPageOne, types: typeRows, aiTypes, aiTopPages, aiGaps, risers, fallers, newByType: [...newByType.values()], kwThemes, ctrFixes, lanes }, null, 2) + '\n');
console.log(`PERFORMANCE.md written: ${typeRows.length} types, ${risers.length} risers, ${fallers.length} fallers, ${newPages.length} new pages, ${ctrFixes.length} CTR fixes`);

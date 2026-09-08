import { join } from 'path';
import { walkPages, routeFor, draftRoutes } from './lib/pages.mjs';
import { SECTIONS } from '../src/data/sections.ts';

const SITE = 'https://www.treadmillreviewsusa.com';
const KEY = '97943e49c69746038cbd774cb36165fd';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const PAGES_DIR = join(import.meta.dirname, '..', 'src', 'pages');

// Hubs that render `noindex` are excluded from the sitemap in astro.config.mjs
// and must be excluded here too — submitting a noindex URL to IndexNow asks a
// search engine to crawl a page that tells it not to index.
const excluded = new Set([
  ...SECTIONS.filter((section) => section.noindex).map((section) => `/${section.slug}/`),
  // Editorial drafts awaiting verified data are noindex; never submit them.
  ...draftRoutes(PAGES_DIR),
]);

const urlList = walkPages(PAGES_DIR)
  .map(routeFor)
  .filter((path) => !excluded.has(path))
  .map((path) => `${SITE}${path}`);

if (process.argv.includes('--dry-run')) {
  console.log(urlList.join('\n'));
  console.log(`\n${urlList.length} URLs would be submitted (${excluded.size} excluded as noindex or draft).`);
  process.exit(0);
}

// The shared endpoint forwards to every participating engine, so it is tried
// first. When it rejects the host — as Bing currently does for this site, see
// the note below — the engines are tried individually so a working one still
// receives the submission instead of the whole push being lost.
const SHARED = { name: 'IndexNow (shared)', url: 'https://api.indexnow.org/indexnow' };
const FALLBACKS = [
  { name: 'Bing', url: 'https://www.bing.com/indexnow' },
  { name: 'Yandex', url: 'https://yandex.com/indexnow' },
];

const body = JSON.stringify({
  host: new URL(SITE).host,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
});

async function submit({ name, url }) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body,
    });
    const text = res.ok ? '' : await res.text().catch(() => '');
    return { name, status: res.status, ok: res.ok, text };
  } catch (error) {
    return { name, status: 0, ok: false, text: error.message };
  }
}

console.log('Submitting %d URLs (%d excluded as noindex or draft)\n', urlList.length, excluded.size);

const results = [await submit(SHARED)];
if (!results[0].ok) {
  results.push(...(await Promise.all(FALLBACKS.map(submit))));
}

for (const r of results) {
  console.log('  %s %s — HTTP %d', r.ok ? 'OK  ' : 'FAIL', r.name.padEnd(18), r.status);
  if (!r.ok && r.text) console.log('       %s', r.text.slice(0, 200));
}

const accepted = results.filter((r) => r.ok);

if (results.some((r) => r.status === 403)) {
  console.log(
    [
      '',
      'A 403 UserForbiddedToAccessSite means the engine will not accept submissions',
      'for this host. It is not a key problem when the key file is reachable and',
      `returns its own name — verify with: curl ${KEY_LOCATION}`,
      '',
      'Bing currently rejects this host while Yandex accepts the identical payload,',
      'which points at site status rather than the key. Fix: add and verify the site',
      'in Bing Webmaster Tools (bing.com/webmasters), then re-run this script.',
    ].join('\n')
  );
}

if (accepted.length === 0) {
  console.error('\nNo endpoint accepted the submission.');
  process.exit(1);
}

console.log('\n%d of %d endpoint(s) accepted the submission.', accepted.length, results.length);

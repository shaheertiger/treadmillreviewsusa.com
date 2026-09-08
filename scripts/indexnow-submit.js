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

// The workflow fires on push to main, but the Vercel deploy takes a minute or
// two — so without this the submission races the deploy and reports URLs that
// are still 404. The live sitemap is generated at build time and shipped with
// the site, so it is a precise signal for "the new build is serving": once it
// lists everything we are about to submit, the deploy has landed.
const SITEMAP = `${SITE}/sitemap-0.xml`;
const LIVENESS_TIMEOUT_MS = 6 * 60 * 1000;
const POLL_INTERVAL_MS = 15 * 1000;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function deployedUrls() {
  try {
    const res = await fetch(SITEMAP, { headers: { 'Cache-Control': 'no-cache' } });
    if (!res.ok) return null;
    const xml = await res.text();
    return new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()));
  } catch {
    return null;
  }
}

async function waitForDeploy() {
  const deadline = Date.now() + LIVENESS_TIMEOUT_MS;
  let missing = urlList;

  while (Date.now() < deadline) {
    const live = await deployedUrls();
    if (live) {
      missing = urlList.filter((url) => !live.has(url));
      if (missing.length === 0) return { ok: true };
      console.log('  waiting for deploy — %d of %d URLs not yet in the live sitemap', missing.length, urlList.length);
    } else {
      console.log('  waiting for deploy — could not read the live sitemap');
    }
    await sleep(POLL_INTERVAL_MS);
  }

  return { ok: false, missing };
}

if (!process.argv.includes('--skip-liveness')) {
  console.log('Checking the deploy has landed before submitting...');
  const deploy = await waitForDeploy();
  if (!deploy.ok) {
    console.error(
      [
        '',
        `Gave up after ${LIVENESS_TIMEOUT_MS / 60000} minutes: ${deploy.missing.length} URL(s) are still absent`,
        'from the live sitemap, so the deploy has not finished (or has failed).',
        '',
        'Submitting now would report URLs that return 404, which is worse than not',
        'submitting at all. Re-run this job once the deploy is green, or run with',
        '--skip-liveness to submit anyway.',
        '',
        'Examples still missing:',
        ...deploy.missing.slice(0, 5).map((u) => `  ${u}`),
      ].join('\n')
    );
    process.exit(1);
  }
  console.log('Deploy confirmed — every URL is in the live sitemap.\n');
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

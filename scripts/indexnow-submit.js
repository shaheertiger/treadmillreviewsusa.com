import { join } from 'path';
import { walkPages, routeFor } from './lib/pages.mjs';
import { SECTIONS } from '../src/data/sections.ts';

const SITE = 'https://www.treadmillreviewsusa.com';
const KEY = '97943e49c69746038cbd774cb36165fd';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const PAGES_DIR = join(import.meta.dirname, '..', 'src', 'pages');

// Hubs that render `noindex` are excluded from the sitemap in astro.config.mjs
// and must be excluded here too — submitting a noindex URL to IndexNow asks a
// search engine to crawl a page that tells it not to index.
const excluded = new Set(
  SECTIONS.filter((section) => section.noindex).map((section) => `/${section.slug}/`)
);

const urlList = walkPages(PAGES_DIR)
  .map(routeFor)
  .filter((path) => !excluded.has(path))
  .map((path) => `${SITE}${path}`);

if (process.argv.includes('--dry-run')) {
  console.log(urlList.join('\n'));
  console.log(`\n${urlList.length} URLs would be submitted (${excluded.size} excluded as noindex).`);
  process.exit(0);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }),
});

console.log(`Submitted ${urlList.length} URLs to IndexNow — status ${res.status}`);

if (!res.ok) {
  const body = await res.text().catch(() => '');
  console.error(body);
  process.exit(1);
}

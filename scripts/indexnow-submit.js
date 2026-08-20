import { readdirSync } from 'fs';
import { join } from 'path';

const SITE = 'https://www.treadmillreviewsusa.com';
const KEY = '205f7bbc7f584a698ab8f36ac7d845b5';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const PAGES_DIR = join(import.meta.dirname, '..', 'src', 'pages');

function pathFromFile(file) {
  const name = file.replace(/\.astro$/, '');
  return name === 'index' ? '/' : `/${name}`;
}

const urlList = readdirSync(PAGES_DIR)
  .filter((f) => f.endsWith('.astro'))
  .map((f) => `${SITE}${pathFromFile(f)}`);

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

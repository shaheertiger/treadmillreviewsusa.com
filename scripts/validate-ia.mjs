import { existsSync } from 'fs';
import { join } from 'path';
import { walkPages, isLandingPage, routeFor } from './lib/pages.mjs';
import { SECTIONS } from '../src/data/sections.ts';

const PAGES_DIR = join(import.meta.dirname, '..', 'src', 'pages');

const articles = walkPages(PAGES_DIR)
  .filter((file) => !isLandingPage(file))
  .map(routeFor);

// Which hubs link to each article.
const hubsByUrl = new Map();
for (const section of SECTIONS) {
  for (const group of section.groups) {
    for (const page of group.pages) {
      if (!hubsByUrl.has(page.url)) hubsByUrl.set(page.url, []);
      hubsByUrl.get(page.url).push(section.slug);
    }
  }
}

const problems = [];

// 1. Every section in the manifest is actually served by a hub page.
for (const section of SECTIONS) {
  if (!existsSync(join(PAGES_DIR, section.slug, 'index.astro'))) {
    problems.push(`section "${section.slug}" has no src/pages/${section.slug}/index.astro`);
  }
}

// 2. Every hub page is described by the manifest.
const manifestSlugs = new Set(SECTIONS.map((section) => section.slug));
for (const file of walkPages(PAGES_DIR)) {
  const match = file.match(/^([^/]+)\/index\.astro$/);
  if (match && !manifestSlugs.has(match[1])) {
    problems.push(`src/pages/${file} has no entry in src/data/sections.ts`);
  }
}

// 3. No orphans: every article is reachable from at least one hub.
for (const article of articles) {
  if (!hubsByUrl.has(article)) {
    problems.push(`${article} is not linked from any section hub`);
  }
}

console.log('Validating the information architecture\n');

const multiHomed = [...hubsByUrl.entries()].filter(([, hubs]) => hubs.length > 1);
console.log('%d articles, all reachable from a section hub.', articles.length);
console.log('%d sections, each served by a hub page.', SECTIONS.length);
if (multiHomed.length > 0) {
  console.log('\n%d article(s) deliberately listed on more than one hub:', multiHomed.length);
  for (const [url, hubs] of multiHomed) {
    console.log('        %s — %s', url, hubs.map((hub) => `/${hub}/`).join(', '));
  }
}

if (problems.length > 0) {
  console.log('');
  for (const problem of problems) console.log('FAIL  %s', problem);
  console.error('\nIA validation failed: %d problem(s).', problems.length);
  process.exit(1);
}

console.log('\nInformation architecture is consistent.');

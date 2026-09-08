import { readFileSync } from 'fs';
import { join } from 'path';
import { walkFiles, walkPages, routeFor } from './lib/pages.mjs';

const SRC_DIR = join(import.meta.dirname, '..', 'src');
const PAGES_DIR = join(SRC_DIR, 'pages');

// Every directory whose files may contain internal links, and the extensions
// worth reading there. `data` carries the section manifest, so its URLs are
// held to the same standard as markup.
const SOURCES = [
  { label: 'pages', dir: PAGES_DIR, extensions: ['.astro'] },
  { label: 'components', dir: join(SRC_DIR, 'components'), extensions: ['.astro', '.tsx'] },
  { label: 'layouts', dir: join(SRC_DIR, 'layouts'), extensions: ['.astro'] },
  { label: 'data', dir: join(SRC_DIR, 'data'), extensions: ['.ts'] },
];

// The site root is a valid target that has no <slug> of its own.
const ROOT_ROUTE = '/';

const routes = new Set(walkPages(PAGES_DIR).map(routeFor));

function collectLinks(contents) {
  const links = [];

  // href="/..." in markup, plus url:/link:/href: string values in data
  // objects, single- or double-quoted.
  const hrefPattern = /href="(\/[^"]*)"/g;
  const dataPattern = /\b(?:url|link|href):\s*"(\/[^"]*)"/g;
  const singleQuotedPattern = /\b(?:url|link|href):\s*'(\/[^']*)'/g;

  for (const pattern of [hrefPattern, dataPattern, singleQuotedPattern]) {
    let match;
    while ((match = pattern.exec(contents)) !== null) {
      // Anchors travel with the link; only the path portion is resolved.
      const path = match[1].split('#')[0];
      // Static assets under public/ are served as-is and take no trailing slash.
      if (path === '' || /\.[a-z0-9]+$/i.test(path)) continue;
      links.push(path);
    }
  }

  return links;
}

const files = SOURCES.flatMap(({ dir, extensions }) =>
  walkFiles(dir, extensions).map((file) => ({ dir, file }))
);

let failures = 0;
let checked = 0;

console.log('Validating internal links (must resolve and end with a trailing slash)\n');

for (const { dir, file } of files) {
  const contents = readFileSync(join(dir, file), 'utf-8');
  const problems = [];

  for (const link of collectLinks(contents)) {
    checked += 1;

    if (link === ROOT_ROUTE) continue;

    if (!link.endsWith('/')) {
      problems.push(`${link} — missing trailing slash`);
      continue;
    }

    if (!routes.has(link)) {
      problems.push(`${link} — no page under src/pages serves this route`);
    }
  }

  if (problems.length > 0) {
    failures += problems.length;
    console.log('FAIL  %s', file);
    for (const problem of [...new Set(problems)]) {
      console.log('        %s', problem);
    }
  }
}

console.log('');

if (failures > 0) {
  console.error('Link validation failed: %d broken or slash-less internal links.', failures);
  process.exit(1);
} else {
  console.log('All %d internal links resolve and end with a trailing slash.', checked);
}

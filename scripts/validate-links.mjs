import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const PAGES_DIR = join(import.meta.dirname, '..', 'src', 'pages');
const COMPONENTS_DIR = join(import.meta.dirname, '..', 'src', 'components');
const LAYOUTS_DIR = join(import.meta.dirname, '..', 'src', 'layouts');

// The site root is a valid target that has no <slug> of its own.
const ROOT_ROUTE = '/';

const slugs = new Set(
  readdirSync(PAGES_DIR)
    .filter((f) => f.endsWith('.astro'))
    .map((f) => `/${f.replace(/\.astro$/, '')}/`)
);

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

const dirs = [PAGES_DIR, COMPONENTS_DIR, LAYOUTS_DIR];
const files = dirs.flatMap((dir) =>
  readdirSync(dir)
    .filter((f) => f.endsWith('.astro') || f.endsWith('.tsx'))
    .map((f) => ({ dir, file: f }))
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

    if (!slugs.has(link)) {
      problems.push(`${link} — no matching src/pages${link.replace(/\/$/, '')}.astro`);
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

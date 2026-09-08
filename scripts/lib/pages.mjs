import { readdirSync } from 'fs';
import { join } from 'path';

// Root-level pages that carry navigation rather than article prose. Section
// hubs are recognised structurally instead — see isLandingPage below.
const LANDING_PAGES = ['best-of.astro', 'contact-us.astro'];

/**
 * Every file under `dir` with one of `extensions`, as paths relative to `dir`
 * (e.g. 'best-of.astro', 'best/index.astro'), depth-first and sorted.
 */
export function walkFiles(dir, extensions, base = '') {
  const found = [];
  const entries = readdirSync(dir, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  for (const entry of entries) {
    const relPath = base ? `${base}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      found.push(...walkFiles(join(dir, entry.name), extensions, relPath));
    } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
      found.push(relPath);
    }
  }

  return found;
}

/** Every .astro page under src/pages, nested pages included. */
export function walkPages(pagesDir) {
  return walkFiles(pagesDir, ['.astro']);
}

/**
 * The public route a page file serves, carrying the trailing slash that
 * `trailingSlash: 'always'` requires. 'index.astro' → '/',
 * 'best/index.astro' → '/best/', 'best/running.astro' → '/best/running/'.
 */
export function routeFor(relPath) {
  const withoutIndex = relPath.replace(/\.astro$/, '').replace(/(^|\/)index$/, '');
  return withoutIndex === '' ? '/' : `/${withoutIndex}/`;
}

/**
 * Landing pages are exempt from the word-count minimum and the article format
 * audit: the home page, /best-of/, /contact-us/, and every section hub, which
 * is any index.astro inside a subdirectory.
 */
export function isLandingPage(relPath) {
  return (
    relPath === 'index.astro' ||
    relPath.endsWith('/index.astro') ||
    LANDING_PAGES.includes(relPath)
  );
}

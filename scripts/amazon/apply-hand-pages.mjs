#!/usr/bin/env node
/**
 * Points the product buttons on hand-written pages (the older .astro pages that are
 * not generated from a spec) at verified /dp/ links from src/data/product-asins.json.
 * Generated pages pick the ASINs up in scripts/build-articles.mjs instead.
 *
 *   node scripts/amazon/apply-hand-pages.mjs
 *
 * Only tagged *search* links are replaced, and only for products with a verified ASIN;
 * an existing /dp/ link is left alone. Needs no credentials and no network.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { PAGES_DIR, SPECS_DIR, ROOT, dpLink, loadAsins } from './lib.mjs';

const asins = loadAsins();
// Category searches for products Amazon US does not carry (see src/data/amazon-fallbacks.json).
const FALLBACK_PATH = join(ROOT, 'src', 'data', 'amazon-fallbacks.json');
const fallbacks = existsSync(FALLBACK_PATH) ? JSON.parse(readFileSync(FALLBACK_PATH, 'utf8')) : {};
const searchUrl = (q) => `https://www.amazon.com/s?k=${encodeURIComponent(q).replace(/%20/g, '+')}&tag=sktiger-20`;
let changed = 0;
for (const f of readdirSync(PAGES_DIR).filter((f) => f.endsWith('.astro'))) {
  if (existsSync(join(SPECS_DIR, f.replace(/\.astro$/, '.mjs')))) continue; // generated
  const path = join(PAGES_DIR, f);
  const src = readFileSync(path, 'utf8');
  // The gap between name and amazonUrl may not contain another product's name, so a
  // product whose link is already direct can't swallow the next product's search link.
  const out = src.replace(/(name:\s*"([^"]+)"(?:(?!name:\s*")[\s\S])*?amazonUrl:\s*)"(https:\/\/www\.amazon\.com\/s\?[^"]*)"/g, (whole, head, name, url) => {
    const hit = asins[name];
    if (hit) {
      changed++;
      return `${head}"${dpLink(hit.asin)}"`;
    }
    const q = fallbacks[name];
    if (!q || url === searchUrl(q)) return whole;
    changed++;
    return `${head}"${searchUrl(q)}"`;
  });
  if (out !== src) writeFileSync(path, out);
}
console.log(`Replaced ${changed} search link(s) with verified /dp/ or category-search links.`);

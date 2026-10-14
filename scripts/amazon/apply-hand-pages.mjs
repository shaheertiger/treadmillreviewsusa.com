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
import { PAGES_DIR, SPECS_DIR, dpLink, loadAsins } from './lib.mjs';

const asins = loadAsins();
let changed = 0;
for (const f of readdirSync(PAGES_DIR).filter((f) => f.endsWith('.astro'))) {
  if (existsSync(join(SPECS_DIR, f.replace(/\.astro$/, '.mjs')))) continue; // generated
  const path = join(PAGES_DIR, f);
  const src = readFileSync(path, 'utf8');
  const out = src.replace(/(name:\s*"([^"]+)"[\s\S]*?amazonUrl:\s*)"(https:\/\/www\.amazon\.com\/s\?[^"]*)"/g, (whole, head, name, url) => {
    if (/name:\s*"/.test(head.slice(5))) return whole; // matched across two products
    const hit = asins[name];
    if (!hit) return whole;
    changed++;
    return `${head}"${dpLink(hit.asin)}"`;
  });
  if (out !== src) writeFileSync(path, out);
}
console.log(`Replaced ${changed} search link(s) with verified /dp/ links.`);

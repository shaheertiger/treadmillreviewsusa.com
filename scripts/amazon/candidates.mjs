#!/usr/bin/env node
/**
 * For every product that has no verified ASIN and no category fallback, records the top
 * five Amazon search results (ASIN, title, image) to scripts/amazon/candidates.json, so a
 * near miss the strict matcher rejected can be accepted by hand. Writes nothing else.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { SearchItemsRequestContent } from 'amazon-creators-api';
import { allProducts, client, imageOf, loadAsins } from './lib.mjs';

const ROOT = join(import.meta.dirname, '..', '..');
const FALLBACKS = JSON.parse(readFileSync(join(ROOT, 'src/data/amazon-fallbacks.json'), 'utf8'));
const { api, marketplace } = client();
const asins = loadAsins();
const out = {};
const products = [...(await allProducts())].filter(([name]) => !asins[name] && !FALLBACKS[name]);
let i = 0;
for (const [name, files] of products) {
  i++;
  try {
    const req = new SearchItemsRequestContent();
    req.partnerTag = process.env.AMAZON_CREATORS_PARTNER_TAG;
    req.keywords = name;
    req.itemCount = 5;
    req.searchIndex = 'All';
    req.resources = ['itemInfo.title', 'images.primary.large'];
    const res = await api.searchItems(marketplace, req);
    out[name] = {
      files: [...files].map((f) => f.replace(ROOT + '/', '')),
      results: (res?.searchResult?.items ?? []).map((it) => ({
        asin: it.asin,
        title: it.itemInfo?.title?.displayValue ?? '',
        image: imageOf(it),
      })),
    };
  } catch (err) {
    out[name] = { files: [...files], error: String(err?.message ?? err) };
  }
  if (i % 25 === 0) console.log(`${i}/${products.length}...`);
  await new Promise((r) => setTimeout(r, 1100));
}
writeFileSync(join(ROOT, 'scripts/amazon/candidates.json'), JSON.stringify(out, null, 1) + '\n');
console.log(`Done: ${products.length} products.`);

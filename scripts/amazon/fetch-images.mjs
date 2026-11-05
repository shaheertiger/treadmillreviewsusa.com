#!/usr/bin/env node
/**
 * Records the primary Amazon listing image for every verified ASIN in
 * src/data/product-asins.json, so product cards can show the product itself.
 *
 *   node --env-file=.env scripts/amazon/fetch-images.mjs          # only entries without an image
 *   node --env-file=.env scripts/amazon/fetch-images.mjs --all    # refresh every image
 *
 * Images are hotlinked from Amazon's own CDN (m.media-amazon.com), never copied into
 * the repo, as the Associates terms require for API-sourced images. Re-run with --all
 * periodically: Amazon can retire an image URL when a listing changes.
 */
import { writeFileSync } from 'fs';
import { GetItemsRequestContent } from 'amazon-creators-api';
import { ASIN_PATH, client, imageOf, loadAsins } from './lib.mjs';

const all = process.argv.includes('--all');
const { api, marketplace } = client();
const asins = loadAsins();
const todo = Object.entries(asins).filter(([, v]) => all || !v.image);
const byAsin = new Map();
for (const [name, v] of todo) {
  if (!byAsin.has(v.asin)) byAsin.set(v.asin, []);
  byAsin.get(v.asin).push(name);
}
const ids = [...byAsin.keys()];
let found = 0;
const missing = [];

for (let i = 0; i < ids.length; i += 10) {
  const batch = ids.slice(i, i + 10);
  try {
    const req = new GetItemsRequestContent();
    req.partnerTag = process.env.AMAZON_CREATORS_PARTNER_TAG;
    req.itemIds = batch;
    req.resources = ['images.primary.large'];
    const res = await api.getItems(marketplace, req);
    const items = new Map((res?.itemsResult?.items ?? []).map((it) => [it.asin, imageOf(it)]));
    for (const asin of batch) {
      const img = items.get(asin);
      for (const name of byAsin.get(asin)) {
        if (img) {
          asins[name].image = img;
          found++;
        } else missing.push(name);
      }
    }
  } catch (err) {
    console.error(`Batch ${i / 10 + 1} failed: ${err?.message ?? err}`);
    for (const asin of batch) missing.push(...byAsin.get(asin));
  }
  await new Promise((r) => setTimeout(r, 1100));
}

writeFileSync(ASIN_PATH, JSON.stringify(asins, null, 2) + '\n');
console.log(`Images recorded for ${found}/${todo.length} product(s).`);
if (missing.length) console.log(`No image returned for: ${missing.join(', ')}`);

#!/usr/bin/env node
/**
 * Adds hand-chosen products to src/data/product-asins.json by ASIN, reading the exact Amazon
 * title and primary image from the Creators API.
 *   node scripts/amazon/add-asins.mjs picks.txt     # one "Product name | ASIN" per line
 * A name already in the file is left alone. Prints each title so it can be checked by hand.
 */
import { readFileSync, writeFileSync } from 'fs';
import { GetItemsRequestContent } from 'amazon-creators-api';
import { ASIN_PATH, client, imageOf, loadAsins } from './lib.mjs';

const lines = readFileSync(process.argv[2], 'utf8').split('\n').map((l) => l.trim()).filter(Boolean);
const picks = lines.map((l) => { const i = l.lastIndexOf('|'); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; });
const { api, marketplace } = client();
const asins = loadAsins();
const today = new Date().toISOString().slice(0, 10);
for (let i = 0; i < picks.length; i += 10) {
  const batch = picks.slice(i, i + 10);
  const req = new GetItemsRequestContent();
  req.partnerTag = process.env.AMAZON_CREATORS_PARTNER_TAG;
  req.itemIds = [...new Set(batch.map(([, a]) => a))];
  req.resources = ['itemInfo.title', 'images.primary.large'];
  const res = await api.getItems(marketplace, req);
  const got = new Map((res?.itemsResult?.items ?? []).map((it) => [it.asin, it]));
  for (const [name, asin] of batch) {
    const it = got.get(asin);
    if (!it) { console.log(`NOT FOUND  ${name} | ${asin}`); continue; }
    const title = it.itemInfo?.title?.displayValue ?? '';
    if (asins[name]) { console.log(`EXISTS     ${name}`); continue; }
    asins[name] = { asin, title, checked: today, image: imageOf(it) };
    console.log(`ADDED      ${name} | ${asin} | ${title.slice(0, 120)}`);
  }
  await new Promise((r) => setTimeout(r, 1100));
}
writeFileSync(ASIN_PATH, JSON.stringify(asins, null, 2) + '\n');

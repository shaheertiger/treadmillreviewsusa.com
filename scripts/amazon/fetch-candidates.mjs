#!/usr/bin/env node
/**
 * Lists the top five Amazon search results (ASIN, title, image) for each product, for a
 * person to review when matchScore() is too strict to accept a correct listing. Accepted
 * picks go into src/data/product-asins.json with "hand": true, which fetch-asins.mjs
 * then leaves alone even with --all.
 *
 *   node --env-file=.env scripts/amazon/fetch-candidates.mjs <in.json> <out.json>
 *
 * <in.json> is an array of { name, files } objects; write <out.json> outside the repo.
 */
import { readFileSync, writeFileSync } from 'fs';
import { SearchItemsRequestContent } from 'amazon-creators-api';
import { client, imageOf } from './lib.mjs';
const [, , inPath, outPath] = process.argv;
const open = JSON.parse(readFileSync(inPath, 'utf8'));
const { api, marketplace } = client();
const out = [];
for (const [i, p] of open.entries()) {
  try {
    const req = new SearchItemsRequestContent();
    req.partnerTag = process.env.AMAZON_CREATORS_PARTNER_TAG;
    req.keywords = p.name; req.itemCount = 5; req.searchIndex = 'All';
    req.resources = ['itemInfo.title', 'images.primary.large'];
    const res = await api.searchItems(marketplace, req);
    out.push({ name: p.name, files: p.files, cands: (res?.searchResult?.items ?? []).map((it) => ({ asin: it.asin, title: it.itemInfo?.title?.displayValue ?? '', image: imageOf(it) })) });
  } catch (e) { out.push({ name: p.name, files: p.files, error: String(e?.message ?? e), cands: [] }); }
  if (i % 40 === 0) console.log(i);
  await new Promise((r) => setTimeout(r, 1100));
}
writeFileSync(outPath, JSON.stringify(out, null, 1));
console.log('done', out.length);

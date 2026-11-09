#!/usr/bin/env node
/**
 * Look up Amazon listings by keyword through the Creators API, for choosing a product by hand.
 *   node scripts/amazon/search.mjs "walking pad 300 lb"
 * Prints ASIN, title and primary image URL for the top results. Writes nothing.
 */
import { SearchItemsRequestContent } from 'amazon-creators-api';
import { client, imageOf } from './lib.mjs';

const q = process.argv.slice(2).join(' ');
if (!q) { console.error('usage: node scripts/amazon/search.mjs "<keywords>"'); process.exit(1); }
const { api, marketplace } = client();
const req = new SearchItemsRequestContent();
req.partnerTag = process.env.AMAZON_CREATORS_PARTNER_TAG;
req.keywords = q;
req.itemCount = 10;
req.searchIndex = 'All';
req.resources = ['itemInfo.title', 'images.primary.large', 'offersV2.listings.price'];
const res = await api.searchItems(marketplace, req);
for (const it of res?.searchResult?.items ?? []) {
  const img = imageOf(it);
  const price = it.offersV2?.listings?.[0]?.price?.money?.displayAmount ?? it.offersV2?.listings?.[0]?.price?.displayAmount ?? '';
  console.log(JSON.stringify({ asin: it.asin, title: it.itemInfo?.title?.displayValue, price, image: img }));
}

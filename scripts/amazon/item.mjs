#!/usr/bin/env node
/**
 * Prints an Amazon listing's title, brand, price, feature bullets and image by ASIN, through
 * the Creators API, so a roundup card's specs can be taken from the listing itself.
 *   node scripts/amazon/item.mjs B0H6WZD58J [B0...]    # up to 10 ASINs
 * Writes nothing.
 */
import { GetItemsRequestContent } from 'amazon-creators-api';
import { client, imageOf } from './lib.mjs';

const ids = process.argv.slice(2);
if (!ids.length || ids.length > 10) { console.error('usage: node scripts/amazon/item.mjs <ASIN> [...up to 10]'); process.exit(1); }
const { api, marketplace } = client();
const req = new GetItemsRequestContent();
req.partnerTag = process.env.AMAZON_CREATORS_PARTNER_TAG;
req.itemIds = ids;
req.resources = ['itemInfo.title', 'itemInfo.byLineInfo', 'itemInfo.features', 'images.primary.large', 'offersV2.listings.price'];
const res = await api.getItems(marketplace, req);
for (const it of res?.itemsResult?.items ?? []) {
  const l = it.offersV2?.listings?.[0];
  console.log(JSON.stringify({
    asin: it.asin,
    title: it.itemInfo?.title?.displayValue,
    brand: it.itemInfo?.byLineInfo?.brand?.displayValue ?? null,
    price: l?.price?.money?.displayAmount ?? l?.price?.displayAmount ?? null,
    features: it.itemInfo?.features?.displayValues ?? [],
    image: imageOf(it)?.url ?? null,
  }, null, 2));
}
for (const e of res?.errors ?? []) console.error(`error: ${e.code ?? ''} ${e.message ?? JSON.stringify(e)}`);

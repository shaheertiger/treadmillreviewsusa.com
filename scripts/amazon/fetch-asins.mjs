#!/usr/bin/env node
/**
 * Finds the Amazon ASIN for every product on the site through the Amazon Creators
 * API and records it in src/data/product-asins.json, which turns the product's
 * tagged search link into a direct /dp/ link.
 *
 *   node --env-file=.env scripts/amazon/fetch-asins.mjs          # only unmatched products
 *   node --env-file=.env scripts/amazon/fetch-asins.mjs --all    # re-check everything
 *
 * Credentials come from the environment (.env is git-ignored); never hardcode them.
 * A product is only recorded when matchScore() accepts the Amazon title, so a
 * rejected product simply keeps its tagged search link. The full outcome, including
 * the top rejected title, goes to scripts/amazon/asin-report.json for review.
 */
import { writeFileSync } from 'fs';
import { join } from 'path';
import { SearchItemsRequestContent } from 'amazon-creators-api';
import { ASIN_PATH, allProducts, client, loadAsins, matchScore } from './lib.mjs';

const MIN_COVERAGE = 0.75;
const all = process.argv.includes('--all');
const { api, marketplace } = client();
const products = await allProducts();
const asins = loadAsins();
const report = [];
const today = new Date().toISOString().slice(0, 10);

let i = 0;
for (const [name, files] of products) {
  i++;
  if (!all && asins[name]) continue;
  try {
    const req = new SearchItemsRequestContent();
    req.partnerTag = process.env.AMAZON_CREATORS_PARTNER_TAG;
    req.keywords = name;
    req.itemCount = 5;
    req.searchIndex = 'All';
    req.resources = ['itemInfo.title'];
    const res = await api.searchItems(marketplace, req);
    const items = res?.searchResult?.items ?? [];
    const scored = items
      .map((it) => ({ asin: it.asin, title: it.itemInfo?.title?.displayValue ?? '', score: matchScore(name, it.itemInfo?.title?.displayValue) }))
      .sort((a, b) => b.score - a.score);
    const best = scored[0];
    if (best && best.score >= MIN_COVERAGE) {
      asins[name] = { asin: best.asin, title: best.title, checked: today };
      report.push({ name, status: 'accepted', asin: best.asin, title: best.title, score: +best.score.toFixed(2), files: [...files] });
    } else {
      if (all) delete asins[name];
      report.push({ name, status: 'rejected', topTitle: items[0]?.itemInfo?.title?.displayValue ?? null, files: [...files] });
    }
  } catch (err) {
    report.push({ name, status: 'error', error: err?.message ?? String(err), files: [...files] });
  }
  if (i % 20 === 0) console.log(`${i}/${products.size}...`);
  await new Promise((r) => setTimeout(r, 1100));
}

const sorted = Object.fromEntries(Object.entries(asins).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(ASIN_PATH, JSON.stringify(sorted, null, 2) + '\n');
writeFileSync(join(import.meta.dirname, 'asin-report.json'), JSON.stringify(report, null, 2) + '\n');
const count = (s) => report.filter((r) => r.status === s).length;
console.log(`Done. accepted=${count('accepted')} rejected=${count('rejected')} errors=${count('error')} stored=${Object.keys(sorted).length}/${products.size}`);

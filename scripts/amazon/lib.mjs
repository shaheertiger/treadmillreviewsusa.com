/**
 * Shared helpers for the Amazon product-link pipeline.
 *
 * Product names are the join key: the same machine appears on several pages under
 * different card ids, and one verified ASIN should serve all of them.
 */
import { readdirSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { ApiClient, TypedDefaultApi } from 'amazon-creators-api';

export const ROOT = join(import.meta.dirname, '..', '..');
export const SPECS_DIR = join(ROOT, 'src', 'content', 'articles');
export const PAGES_DIR = join(ROOT, 'src', 'pages');
export const ASIN_PATH = join(ROOT, 'src', 'data', 'product-asins.json');
export const AMAZON_TAG = 'sktiger-20';

export const dpLink = (asin) => `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}&linkCode=ll1`;

export function loadAsins() {
  return existsSync(ASIN_PATH) ? JSON.parse(readFileSync(ASIN_PATH, 'utf8')) : {};
}

export function client() {
  for (const name of ['AMAZON_CREATORS_CLIENT_ID', 'AMAZON_CREATORS_CLIENT_SECRET', 'AMAZON_CREATORS_PARTNER_TAG']) {
    if (!process.env[name]) {
      console.error(`Missing required environment variable: ${name} (put it in .env, which is git-ignored)`);
      process.exit(1);
    }
  }
  const c = new ApiClient();
  c.credentialId = process.env.AMAZON_CREATORS_CLIENT_ID;
  c.credentialSecret = process.env.AMAZON_CREATORS_CLIENT_SECRET;
  c.version = process.env.AMAZON_CREATORS_VERSION || '3.1';
  c.marketplace = process.env.AMAZON_CREATORS_MARKETPLACE || 'www.amazon.com';
  return { api: new TypedDefaultApi(c), marketplace: c.marketplace };
}

/** Every product name on the site, from article specs and hand-written pages. */
export async function allProducts() {
  const out = new Map();
  const add = (name, file) => {
    if (!out.has(name)) out.set(name, new Set());
    out.get(name).add(file);
  };
  const specSlugs = new Set();
  for (const f of readdirSync(SPECS_DIR).filter((f) => f.endsWith('.mjs'))) {
    const spec = (await import(join(SPECS_DIR, f))).default;
    specSlugs.add(spec.slug);
    for (const p of spec.products ?? []) add(p.name, `src/content/articles/${f}`);
  }
  for (const f of readdirSync(PAGES_DIR).filter((f) => f.endsWith('.astro'))) {
    if (specSlugs.has(f.replace(/\.astro$/, ''))) continue; // generated from a spec
    for (const { name } of handProducts(readFileSync(join(PAGES_DIR, f), 'utf8'))) add(name, `src/pages/${f}`);
  }
  return out;
}

/** name/amazonUrl pairs inside a hand-written page's product objects. */
export function handProducts(src) {
  const re = /name:\s*"([^"]+)"[\s\S]*?amazonUrl:\s*"([^"]+)"/g;
  const found = [];
  let m;
  while ((m = re.exec(src))) {
    // The lazy match must not swallow a second product's name.
    if (/name:\s*"/.test(src.slice(m.index + 5, re.lastIndex).replace(/^[\s\S]*?"/, ''))) continue;
    found.push({ name: m[1], url: m[2] });
  }
  return found;
}

const STOP = new Set(['the', 'a', 'an', 'for', 'and', 'with', 'of', 'in', 'to', 'by', 'new', 'treadmill', 'treadmills', '&']);
export const tokens = (s) =>
  String(s || '')
    .toLowerCase()
    .replace(/[™®©]/g, '')
    .replace(/[^a-z0-9.+ -]+/g, ' ')
    .split(/[\s-]+/)
    .map((t) => t.replace(/^\.+|\.+$/g, ''))
    .filter((t) => t && !STOP.has(t));

// Words that mark a part, accessory or different machine *for* the product rather
// than the product itself ("Treadmill Cover for …", "Belt Compatible with …",
// "… Exercise Bike"). A title carrying one is rejected unless the product's own name
// uses the word too, which is what lets a mat, a lubricant or a cloth still match.
const ACCESSORY = new Set([
  'cover', 'covers', 'compatible', 'replacement', 'belt', 'cord', 'remote', 'holder', 'lubricant',
  'roller', 'hood', 'motor', 'overlay', 'adapter', 'stylus', 'pouch', 'works', 'fits', 'console',
  'card', 'filter', 'supply', 'charger', 'part', 'parts', 'bike', 'elliptical', 'rower', 'mat',
  'case', 'kit', 'insoles', 'laces', 'battery', 'screen', 'protector', 'sticker', 'decal',
  'cross', 'wheel', 'wheels', 'pedal', 'pedals', 'seat', 'cushion', 'bracket', 'knob', 'key',
  // Used or refurbished stock is not the product a page recommends.
  'renewed', 'refurbished',
]);
// Words that distinguish one model from its sibling (Strol 2E vs Strol 2E Pro,
// W60 vs W60 Plus, Pro 2000 vs Carbon Pro 2000, MD2 vs MD2-AV). They must appear
// on both sides or neither.
const VARIANT = new Set(['pro', 'plus', 'max', 'lite', 'mini', 'ultra', 'elite', 'connect', 'carbon', 'av', 'se', 'xl']);
// Placeholder products on older pages that name no real model.
export const GENERIC = new Set(['Flat-Fold Walking Pad', '2-in-1 Walking Pad With Rail']);
// Names sold in several generations where an Amazon listing cannot be tied to the
// version a page describes; these keep their tagged search links until checked by hand.
export const VERSION_UNCLEAR = new Set(['Sole F80', 'Sole F85']);
// Products whose best Amazon match was checked by hand on 2026-10-16 and rejected:
// a book, a cement set for a cast-iron one, an older model, a coax variant, bundles,
// a refurbished or limited-edition listing, a different size or configuration from
// the one the page prices. They keep tagged search links until a clean listing exists.
export const HAND_REJECTED = new Set([
  'Life Fitness F3', 'Life Fitness Club Series+', 'CAP Strength Adjustable Cast Iron Dumbbell Set, 40 lb',
  'COROS POD 2', 'Beats Powerbeats Fit', 'Theragun Mini (3rd Gen)', 'Panamax MD2', 'Wahoo KICKR Headwind',
  "Mrs. Meyer's Clean Day Liquid Dish Soap", 'Bells of Steel Cable Tower (Plate-Loaded)',
  'REP Fitness Strata Weight Vest', 'PowerBlock Elite USA 90', 'Garmin Forerunner 170', 'PowerBlock Pro 100 EXP',
]);

/**
 * Strict match, 0 to 1. The brand (first word) and every token carrying a digit —
 * the model number — must appear in the Amazon title as whole tokens; variant words
 * must agree; accessory words must not appear unless the name has them. The score is
 * the share of the name's words found in the title. "Polar H10" never matches
 * "Polar H9"; "Commercial 1750" never matches "Commercial 1250".
 */
export function matchScore(name, title) {
  if (GENERIC.has(name) || VERSION_UNCLEAR.has(name) || HAND_REJECTED.has(name) || !title) return 0;
  const n = tokens(name);
  const nSet = new Set(n);
  const t = new Set(tokens(title));
  if (!n.length || !t.has(n[0])) return 0;
  for (const tok of n) if (/\d/.test(tok) && !t.has(tok)) return 0;
  for (const tok of t) {
    if (ACCESSORY.has(tok) && !nSet.has(tok)) return 0;
    if (VARIANT.has(tok) && !nSet.has(tok)) return 0;
  }
  for (const tok of n) if (VARIANT.has(tok) && !t.has(tok)) return 0;
  return n.filter((tok) => t.has(tok)).length / n.length;
}

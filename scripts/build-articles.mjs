/**
 * Scaffolds article pages from the content specs in src/content/articles/.
 *
 * Every article page must carry 13 structural elements with exact class
 * strings (see ARTICLEPAGESPEC.md §4) and scripts/format-audit.mjs checks the
 * page source, not the rendered HTML. Hand-copying that markup per page is how
 * drift gets in, so the boilerplate lives here once and the specs carry only
 * the content.
 *
 * The generated .astro files are committed and are what Astro builds. Edit the
 * spec and re-run `npm run articles` rather than editing a generated page —
 * regeneration overwrites it.
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';

const ROOT = join(import.meta.dirname, '..');
const SPECS_DIR = join(ROOT, 'src', 'content', 'articles');
const PAGES_DIR = join(ROOT, 'src', 'pages');
const SITE = 'https://www.treadmillreviewsusa.com';
const AUTHOR = 'Shaheer Ali Khan';
const AUTHOR_URL = 'https://www.linkedin.com/in/shaheer-ali-khan-data/';
const AUTHOR_ROLE = 'Exercise Physiology & Biomechanics Specialist · ACSM-EP, CSCS';
const AUTHOR_PAGE = '/editorial-standards/#who';

// Verified Amazon ASINs, keyed by product name, written by scripts/amazon/fetch-asins.mjs.
// A product with one links straight to its listing; any other keeps its tagged search link.
const ASIN_PATH = join(ROOT, 'src', 'data', 'product-asins.json');
const ASINS = existsSync(ASIN_PATH) ? JSON.parse(readFileSync(ASIN_PATH, 'utf8')) : {};
// Products Amazon US does not carry (sold direct or through dealers) get a tagged search for
// their category instead of their own name, which would return nothing useful. Their button
// says "Shop Similar" so the click is honest about where it goes.
const FALLBACK_PATH = join(ROOT, 'src', 'data', 'amazon-fallbacks.json');
const FALLBACKS = existsSync(FALLBACK_PATH) ? JSON.parse(readFileSync(FALLBACK_PATH, 'utf8')) : {};
const searchUrl = (q) => `https://www.amazon.com/s?k=${encodeURIComponent(q).replace(/%20/g, '+')}&tag=sktiger-20`;
const isFallback = (p) => !ASINS[p.name] && Boolean(FALLBACKS[p.name]);
// Every Amazon link carries the Associates tag, even if a spec's hand-written URL forgot it.
const withTag = (url) => {
  if (!/^https:\/\/(www\.)?amazon\.com\//.test(url) || /[?&]tag=sktiger-20(&|$)/.test(url)) return url;
  const clean = url.replace(/([?&])tag=[^&]*&?/, '$1').replace(/[?&]$/, '');
  return `${clean}${clean.includes('?') ? '&' : '?'}tag=sktiger-20`;
};
const amazonUrl = (p) => withTag(rawAmazonUrl(p));
// The Amazon listing's own photo, only for products with a verified ASIN: a "Shop Similar"
// fallback or an unmatched search link has no listing that is certainly this product.
const productImage = (p) => ASINS[p.name]?.image ?? null;
const rawAmazonUrl = (p) =>
  ASINS[p.name]
    ? `https://www.amazon.com/dp/${ASINS[p.name].asin}?tag=sktiger-20&linkCode=ll1`
    : FALLBACKS[p.name]
      ? searchUrl(FALLBACKS[p.name])
      : p.amazonUrl ?? `https://www.amazon.com/s?k=${encodeURIComponent(p.name)}+Treadmill&tag=sktiger-20`;

// Low and high prices for the Product AggregateOffer, read from the card's visible price range
// ("$999-$1,299", "About $2,700", "$148–$214 per case"). No price → no offer is published.
const priceBounds = (range) => {
  const nums = [...String(range ?? '').matchAll(/\$\s?([\d,]+(?:\.\d+)?)/g)].map((m) => Number(m[1].replace(/,/g, '')));
  return nums.length ? { low: Math.min(...nums), high: Math.max(...nums) } : null;
};

// Product JSON-LD brand: a spec's own `brand`, else a known multi-word brand the name starts
// with, else the first word ("Sunny Health & Fitness SF-T4400" is not a product of "Sunny").
const MULTIWORD_BRANDS = [
  'Sunny Health & Fitness', 'Life Fitness', 'REP Fitness', 'Titan Fitness', 'Matrix Fitness',
  'Bells of Steel', 'RHYTHM FUN', 'Fringe Sport', 'Force USA', 'PRx Performance', 'Star Trac',
  'True Fitness', 'TRUE Fitness', 'Spirit Fitness', 'Horizon Fitness', 'Sole Fitness',
  'Vision Fitness', 'Tru Grit', 'Dog Trotter', 'Dog Runner', 'CAP Barbell', 'Tractor Supply',
  'Ultimate Body Press', 'Bells of Steel USA',
];
// Generic product names ("100% Silicone Spray", "Universal Safety Key") have no brand to publish.
const GENERIC_FIRST_WORDS = new Set(['100%', 'Universal', 'Replacement', 'Treadmill', 'Generic', 'Silicone', 'Manufacturer-Specified', 'Isopropyl']);
const brandOf = (p) =>
  p.brand ??
  (GENERIC_FIRST_WORDS.has(p.name.split(' ')[0]) ? '' : null) ??
  MULTIWORD_BRANDS.filter((b) => p.name === b || p.name.startsWith(b + ' ')).sort((a, b) => b.length - a.length)[0] ??
  p.name.split(' ')[0];

const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
const jsStr = (s) => JSON.stringify(String(s));

/** Strip tags for the JSON-LD copy of an FAQ answer, which must be plain text. */
const plain = (html) =>
  String(html)
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&rarr;/g, '')
    .trim();

function productsBlock(products) {
  if (!products?.length) return '';
  return `const PRODUCTS = [
${products
  .map(
    (p) => `  {
    id: ${jsStr(p.id)},
    name: ${jsStr(p.name)},
    brand: ${jsStr(brandOf(p))},
    category: ${jsStr(p.category)},
    badge: ${jsStr(p.badge)},
    amazonUrl: ${jsStr(amazonUrl(p))},
    amazonLabel: ${jsStr(isFallback(p) ? 'Shop Similar on Amazon' : 'Check Price on Amazon')},
    image: ${productImage(p) ? JSON.stringify(productImage(p)) : 'null'},
    reviewUrl: ${p.reviewUrl ? jsStr(p.reviewUrl) : 'null'},
    priceRange: ${jsStr(p.priceRange)},
    priceBounds: ${JSON.stringify(priceBounds(p.priceRange))},
    specs: ${jsStr(p.specs)},
    pros: [
${p.pros.map((x) => `      ${jsStr(x)},`).join('\n')}
    ],
    cons: [
${p.cons.map((x) => `      ${jsStr(x)},`).join('\n')}
    ],
    bottomLine: ${jsStr(p.bottomLine)},
    description: ${jsStr(p.description)},
  },`
  )
  .join('\n')}
];

`;
}

// The ranked picks as an ItemList, the markup the top-ranking roundups use for a list of
// products: names and on-page anchors only, no ratings.
function itemListNode(spec) {
  if (!spec.products?.length) return '';
  return `    {
      "@type": "ItemList",
      name: title,
      numberOfItems: ${spec.products.length},
      itemListElement: PRODUCTS.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: \`${SITE}/${spec.slug}/#\${product.id}\`,
      })),
    },
`;
}

function schemaBlock(spec) {
  const crumb = spec.breadcrumb ?? { name: 'Best Lists', url: '/best-of/' };
  // Product nodes carry no aggregateRating: the site has no measured rating data
  // for these machines, and inventing one is a structured-data policy breach.
  const productNodes = spec.products?.length
    ? `    ...PRODUCTS.map((product) => ({
      "@type": "Product",
      name: product.name,
      description: product.description,
      ...(product.brand ? { brand: { "@type": "Brand", name: product.brand } } : {}),
      ...(product.image ? { image: product.image.url } : {}),
      ...(product.priceBounds
        ? {
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: product.priceBounds.low,
              highPrice: product.priceBounds.high,
              url: product.amazonUrl,
            },
          }
        : {}),
    })),
`
    : '';

  return `const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "${SITE}/" },
        { "@type": "ListItem", position: 2, name: ${jsStr(crumb.name)}, item: "${SITE}${crumb.url}" },
        { "@type": "ListItem", position: 3, name: ${jsStr(spec.crumbLabel ?? spec.shortTitle ?? spec.title)}, item: "${SITE}/${spec.slug}/" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
${spec.faqs
  .map(
    (f) => `        {
          "@type": "Question",
          name: ${jsStr(f.q)},
          acceptedAnswer: {
            "@type": "Answer",
            text: ${jsStr(plain(f.a))},
          },
        },`
  )
  .join('\n')}
      ],
    },
    {
      "@type": "Article",
      headline: title,
      description: description,
      author: { "@type": "Person", "@id": "${SITE}/editorial-standards/#shaheer-ali-khan", name: "${AUTHOR}", honorificSuffix: "PhD", jobTitle: "Exercise Physiology & Biomechanics Specialist", url: "${SITE}${AUTHOR_PAGE}", sameAs: ["${AUTHOR_URL}"], worksFor: { "@type": "Organization", name: "Treadmill Reviews USA" } },
      datePublished: ${jsStr(spec.published)},
      dateModified: ${jsStr(spec.modified ?? spec.published)},
      publisher: { "@type": "Organization", name: "Treadmill Reviews USA" },
    },
${productNodes}${itemListNode(spec)}  ],
};`;
}

function contentsNav(spec) {
  const entries = [...spec.sections.map((s) => ({ id: s.id, label: s.navLabel ?? s.heading })), { id: 'faq', label: 'Frequently asked questions' }];
  return entries.map((e) => `            <li><a href="#${e.id}">${e.label}</a></li>`).join('\n');
}

// The numbered product block: award, name, photo, buy button, pros and cons, why we picked it,
// a features-at-a-glance grid and the links out. Mirrors the editorial roundup format.
const PRODUCT_CARDS = `      <!-- Product blocks -->
      <div class="not-prose">
        {
          PRODUCTS.map((product, index) => (
            <section id={product.id} class="ed-product">
              <div class="ed-p-head">
                <div class="ed-p-num">{index + 1}</div>
                <div>
                  <div class="ed-p-award">{product.badge}</div>
                  <h3 class="ed-p-name">{product.name}</h3>
                  <p class="ed-p-cat">{product.category}</p>
                </div>
              </div>
              <div class={\`ed-p-media\${product.image ? " has-img" : ""}\`}>
                {product.image && (
                  <a href={product.amazonUrl} target="_blank" rel="sponsored nofollow noopener" class="ed-p-img">
                    <img src={product.image.url} alt={product.name} width={product.image.width} height={product.image.height} loading="lazy" decoding="async" />
                  </a>
                )}
                <div class="ed-p-buy">
                  <a href={product.amazonUrl} target="_blank" rel="sponsored nofollow noopener" class="buy">
                    <span>{product.amazonLabel.replace(/ on Amazon$/, "")}</span>
                    <span>Amazon &rarr;</span>
                  </a>
                  <span class="ed-buy-note">
                    {product.priceRange && <><strong>Typical price:</strong> {product.priceRange}. </>}
                    Prices and availability change often; Amazon shows today's price.
                  </span>
                </div>
              </div>
              <div class="ed-proscons">
                <div class="pros">
                  <h4>Pros</h4>
                  <ul>{product.pros.map((pro) => <li>{pro}</li>)}</ul>
                </div>
                <div class="cons">
                  <h4>Cons</h4>
                  <ul>{product.cons.map((con) => <li>{con}</li>)}</ul>
                </div>
              </div>
              <div class="ed-p-copy">
                <p><span class="ed-lbl">Why we picked it:</span> <Fragment set:html={product.description} /></p>
                <p><span class="ed-lbl">Bottom line:</span> {product.bottomLine}</p>
              </div>
              {product.specs && (
                <>
                  <div class="ed-glance-h">Features at a glance</div>
                  <div class="ed-glance">
                    {product.priceRange && <div><span class="g-k">Price</span>{product.priceRange}</div>}
                    {product.specs.split(/\\s+·\\s+/).filter(Boolean).map((s) => <div>{s}</div>)}
                  </div>
                </>
              )}
              <p class="ed-p-links">
                <a href={product.amazonUrl} target="_blank" rel="sponsored nofollow noopener">See the {product.name} on Amazon &rarr;</a>
                {product.reviewUrl && <a href={product.reviewUrl} class="ed-p-more">Read our full {product.name} review &rarr;</a>}
              </p>
            </section>
          ))
        }
      </div>
`;

/**
 * Pages awaiting verified product data render a visible editorial banner and
 * are marked noindex, so an unverified draft cannot be published by accident.
 * The DATA_PENDING constant is the marker the validators look for.
 */
function dataPendingBlock(spec) {
  if (!spec.dataPending?.length) return '';
  return `// This page is an editorial draft. The items below need verified product
// data before it is published; until DATA_PENDING is removed the page renders
// a banner and is excluded from search. See README, "Pages awaiting data".
const DATA_PENDING = [
${spec.dataPending.map((x) => `  ${jsStr(x)},`).join('\n')}
];

`;
}

const DATA_PENDING_BANNER = `      <!-- Editorial draft banner -->
      <div class="ed-draft">
        <p class="m-0 mb-2"><strong>Editorial draft — not yet published.</strong>
          The framing and analysis below are complete. The following need verified manufacturer data
          before this page goes live, and nothing on this page should be treated as factual until they
          are filled in:</p>
        <ul class="m-0 pl-5">
          {DATA_PENDING.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
`;

// Answer first: one line under the dek naming the picks, so Bing and Copilot find a short,
// self-contained answer where they read first. Only on roundups whose first pick carries a
// real "Best ..." award (not brand pages listing the closest Amazon alternatives), and only on
// pages that do not already open with a short-answer section.
const NOT_A_VERDICT = /amazon|closest|alternative|listing|claims/i;
function shortAnswer(spec) {
  if (spec.sections?.[0]?.id === 'short-answer' || spec.dataPending?.length) return '';
  const picks = (spec.products ?? []).filter((p) => p.badge && !NOT_A_VERDICT.test(p.badge));
  if (!picks.length || !/^best\b/i.test(spec.products[0].badge ?? '') || picks[0] !== spec.products[0]) return '';
  const parts = picks.slice(0, 3).map((p) => `${p.badge}: <a href="#${p.id}">${p.name}</a>`);
  return `      <p class="ed-answer"><strong>Short answer.</strong> ${parts.join('. ')}.</p>
`;
}

// "Our top picks" list near the top of a roundup: each pick's award, a jump link to its block
// and a direct Amazon button, so a reader (and a search snippet) gets the answer first.
function topPicksBox(spec) {
  if (!spec.products || spec.products.length < 3) return '';
  const items = spec.products
    .map(
      (p, i) => `            <li>
              <span class="tp-label"><span class="tp-award">${p.badge}:</span> <a href="#${p.id}">${p.name}</a></span>
              <a href={PRODUCTS[${i}].amazonUrl} target="_blank" rel="sponsored nofollow noopener" class="buy-pill">Amazon &rarr;</a>
            </li>`
    )
    .join('\n');
  return `
        <section id="top-picks" class="ed-toppicks not-prose">
          <h2>Our top picks:</h2>
          <ul>
${items}
          </ul>
        </section>
`;
}

// Hero collage: up to three product photos from verified Amazon listings.
function heroCollage(spec) {
  const withImg = (spec.products ?? []).filter((p) => productImage(p)).slice(0, 3);
  if (!withImg.length) return '';
  return `
      <figure class="ed-hero">
        <div class="ed-hero-collage">
${withImg
  .map((p) => {
    const img = productImage(p);
    const attr = (v) => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/[{}]/g, (c) => (c === '{' ? '&#123;' : '&#125;'));
    return `          <a href="#${p.id}"><img src="${attr(img.url)}" alt="${attr(p.name)}" width="${img.width}" height="${img.height}" decoding="async" /></a>`;
  })
  .join('\n')}
        </div>
        <figcaption>${withImg.map((p) => p.name.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/[{}]/g, '')).join(' · ')}</figcaption>
      </figure>
`;
}

// "Why trust us" box at the end of every article, with the author card.
const TRUST_BOX = `
        <!-- Why trust us -->
        <section id="why-trust-us" class="ed-trust not-prose">
          <h2>Why trust Treadmill Reviews USA?</h2>
          <p>
            Every recommendation is checked against the numbers that matter for a treadmill: the maker's own
            listing and manual, at least one independent source, the warranty terms and the CPSC recall
            database. Where sources disagree we say so rather than pick a number, we say plainly when a
            machine has not been tested hands-on, and we never accept payment for a placement.
            <a href="/editorial-standards/">Read our review process.</a>
          </p>
          <div class="author-card">
            <img src="/authors/shaheer-ali-khan.png" alt="Shaheer Ali Khan, PhD" width="56" height="56" loading="lazy" />
            <div>
              <div class="ac-k">Written by</div>
              <div class="ac-n"><a href="/editorial-standards/#who" rel="author">Shaheer Ali Khan, PhD</a></div>
              <p class="ac-b">
                Exercise Physiology &amp; Biomechanics Specialist · ACSM-EP, CSCS. PhD in Kinesiology
                (Biomechanics), University of Michigan. His evaluations look at motor performance, belt
                stability, shock absorption, incline accuracy, noise and long-term durability.
                <a href="https://www.linkedin.com/in/shaheer-ali-khan-data/" rel="noopener" target="_blank">LinkedIn</a>
              </p>
            </div>
          </div>
        </section>
`;

// Astro's HTML compression drops a line break between a word and an inline tag, so
// "explained in\n<a ...>" rendered as "explained in<a>". Turn those breaks into real spaces.
const keepInlineSpaces = (html) =>
  html
    .replace(/([^\s>])\n\s*<(a|strong|em|b|i|code|span)\b/g, '$1 <$2')
    .replace(/<\/(a|strong|em|b|i|code|span)>\n\s*([^\s<])/g, '</$1> $2');

function render(spec) {
  const page = renderPage(spec);
  const split = page.indexOf('\n---\n', 4) + 5;
  return page.slice(0, split) + keepInlineSpaces(page.slice(split));
}

function renderPage(spec) {
  const sections = spec.sections;
  const first = sections.findIndex((s) => s.products);
  const up = '../'.repeat((spec.slug.match(/\//g) ?? []).length);
  const crumb = spec.breadcrumb ?? { name: 'Best Lists', url: '/best-of/' };

  const renderSections = (list) =>
    list
      .map(
        (s) => `        <div id="${s.id}" class="scroll-mt-24">
          <h2>${s.heading}</h2>
${s.html.trim()}
        </div>`
      )
      .join('\n\n');

  const before = first === -1 ? sections : sections.slice(0, first + 1);
  const after = first === -1 ? [] : sections.slice(first + 1);
  const hasProducts = Boolean(spec.products?.length);
  const viewHref = spec.products?.length >= 3 ? '#top-picks' : hasProducts ? `#${spec.products[0].id}` : spec.ctas[0].href;
  const viewLabel = hasProducts ? 'View products' : spec.ctas[0].label;
  const sticky = hasProducts
    ? `{ text: ${jsStr(`${spec.products[0].badge}: ${spec.products[0].name}`)}, link: PRODUCTS[0].amazonUrl }`
    : `{ text: ${jsStr(spec.stickyCta.text)}, link: ${jsStr(spec.stickyCta.link)} }`;

  return `---
import Layout from "../${up}layouts/Layout.astro";
import { SECTIONS } from "../${up}data/sections";

const title = ${jsStr(spec.title)};
const description =
  ${jsStr(spec.description)};

${dataPendingBlock(spec)}${productsBlock(spec.products)}${schemaBlock(spec)}

// "More in" links: the other pages in this article's hub group.
const HERE = "/${spec.slug}/";
const HUB = SECTIONS.find((s) => s.slug === ${jsStr(crumb.url.replace(/\//g, ''))});
const GROUP = HUB?.groups.find((g) => g.pages.some((p) => p.url === HERE)) ?? HUB?.groups[0];
const MORE = (GROUP?.pages ?? []).filter((p) => p.url !== HERE).slice(0, 6);
---

<Layout
  title={\`\${title} | Treadmill Reviews USA\`}
  description={description}
  ogType="article"
  article={{
    publishedTime: ${jsStr(spec.published)},
    modifiedTime: ${jsStr(spec.modified ?? spec.published)},
    author: "${AUTHOR}",
    section: "Fitness Equipment",
    tags: [
${spec.tags.map((t) => `      ${jsStr(t)},`).join('\n')}
    ],
  }}
  jsonLd={schema}${spec.dataPending?.length ? '\n  noindex' : ''}
  stickyCta={${sticky}}
>
  <article class="ed-article" data-template="editorial">
    <div class="ed-col">
      <nav class="ed-crumbs" aria-label="Breadcrumb">
        <a href="${crumb.url}">${crumb.name}</a>
        <span aria-hidden="true">›</span>
        <span>${spec.kicker}</span>
      </nav>
      <h1 class="ed-title">${spec.h1.join(' ')}</h1>
      <p class="ed-dek">
        ${spec.standfirst}
      </p>
${shortAnswer(spec)}
      <!-- Byline -->
      <div class="ed-byline">
        <img src="/authors/shaheer-ali-khan.png" alt="${AUTHOR}, PhD" width="44" height="44" />
        <div class="ed-byline-text">
          By <a href="${AUTHOR_PAGE}" rel="author">${AUTHOR}, PhD</a><br />
          Updated ${spec.updatedLong} · ${AUTHOR_ROLE}
        </div>
        <a href="${viewHref}" class="btn-ghost">${viewLabel}</a>
      </div>
      <p class="ed-disclosure">
        We research every product on this page independently. If you buy through our links, we may earn a
        commission at no cost to you. <a href="/editorial-standards/">Learn more about how we review.</a>
      </p>
${heroCollage(spec)}${spec.dataPending?.length ? DATA_PENDING_BANNER : ''}
      <div class="ed-body prose prose-lg">
        <p class="ed-lead">
          ${spec.lead}
        </p>
${topPicksBox(spec)}${
  spec.note
    ? `
        <aside class="ed-note not-prose">
          <span class="ed-note-k">What we checked</span>
          ${spec.note}
        </aside>
`
    : ''
}
        <nav class="ed-toc not-prose" aria-label="In this guide">
          <h2>In this guide</h2>
          <ol>
${contentsNav(spec)}
          </ol>
        </nav>

${renderSections(before)}
${first === -1 ? '' : PRODUCT_CARDS}
${after.length ? renderSections(after) + '\n' : ''}
        <!-- Common mistakes -->
        <div id="common-mistakes" class="scroll-mt-24">
          <h2>${spec.mistakesHeading}</h2>
          <p>${spec.mistakesIntro}</p>
          <ol class="ed-mistakes not-prose">
${spec.mistakes
  .map(
    (m) => `            <li>
              <h3>${m.title}</h3>
              <p>${m.body}</p>
            </li>`
  )
  .join('\n')}
          </ol>
        </div>

        <!-- The bottom line -->
        <div id="bottom-line" class="ed-bottomline">
          <h2>The bottom line</h2>
${spec.bottomLine.map((p) => `          <p>\n            ${p}\n          </p>`).join('\n')}
        </div>

        <aside class="ed-more not-prose">
          <div class="ed-more-k">Keep reading</div>
          <ul>
${spec.related.slice(0, 2).map((r) => `            <li><a href="${r.url}">${r.title}</a></li>`).join('\n')}
          </ul>
        </aside>

        <!-- FAQ -->
        <section id="faq" class="ed-faq scroll-mt-24">
          <h2>Frequently asked questions</h2>
${spec.faqs
  .map(
    (f, i) => `          <details${i === 0 ? ' open' : ''}>
            <summary><h3>${f.q}</h3></summary>
            <p class="faq-a">
              ${f.a}
            </p>
          </details>`
  )
  .join('\n')}
        </section>
${TRUST_BOX}
      </div>
    </div>

    <div class="wrap">
      {MORE.length > 0 && (
        <nav class="more-in" aria-label="More in ${crumb.name}">
          <h2 class="section-title">More in ${crumb.name}</h2>
          <ul>
            {MORE.map((p) => <li><a href={p.url}>{p.title}</a></li>)}
          </ul>
          <a href="${crumb.url}" class="btn-ghost">See all ${crumb.name}</a>
        </nav>
      )}

      <!-- Related -->
      <section class="ed-related" aria-label="${spec.relatedHeading}">
        <h2 class="section-title">Readers also read</h2>
        <div class="card-grid">
${spec.related
  .map(
    (r) => `          <a href="${r.url}" class="card">
            <div class="c-kicker">${r.kicker}</div>
            <div class="c-title">${r.title}</div>
            <p class="c-blurb">${r.blurb}</p>
          </a>`
  )
  .join('\n')}
        </div>
      </section>
    </div>
  </article>
</Layout>
`;
}

const only = process.argv[2];
const files = readdirSync(SPECS_DIR).filter((f) => f.endsWith('.mjs') && (!only || f.includes(only)));
let written = 0;

for (const file of files) {
  const spec = (await import(join(SPECS_DIR, file))).default;
  const out = join(PAGES_DIR, `${spec.slug}.astro`);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, render(spec));
  written += 1;
  console.log('wrote  /%s/', spec.slug);
}

console.log('\n%d page(s) generated from %d spec(s).', written, files.length);

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
    category: ${jsStr(p.category)},
    badge: ${jsStr(p.badge)},
    amazonUrl: ${jsStr(amazonUrl(p))},
    amazonLabel: ${jsStr(isFallback(p) ? 'Shop Similar on Amazon' : 'Check Price on Amazon')},
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
      brand: { "@type": "Brand", name: product.name.split(" ")[0] },
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
  const entries = [...spec.sections.map((s) => ({ id: s.id, label: s.navLabel ?? s.heading })), { id: 'faq', label: 'Frequently Asked Questions' }];
  return entries
    .map(
      (e, i) =>
        `          <a href="#${e.id}" class="flex items-start gap-2 text-[#0F62FE] no-underline font-medium text-sm hover:underline">${i + 1}. ${e.label}</a>`
    )
    .join('\n');
}

const PRODUCT_CARDS = `      <!-- Product cards -->
      <div class="not-prose">
        {
          PRODUCTS.map((product, index) => (
            <div id={product.id} class="scroll-mt-24 mt-12 first:mt-8">
              <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div class="bg-gray-900 px-6 py-4 flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <h3 class="text-white font-black text-xl leading-tight m-0">
                      {index + 1}. {product.name}
                    </h3>
                    <p class="text-gray-400 text-xs">{product.category}</p>
                  </div>
                  <span class="bg-[#FF5A1F] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    {product.badge}
                  </span>
                </div>
                <div class="p-6">
                  <div class="flex items-center gap-2 mb-4 flex-wrap">
                    <span class="text-xs font-black uppercase tracking-widest text-gray-400">Typical street price</span>
                    <span class="ml-auto font-black text-gray-900">{product.priceRange}</span>
                  </div>
                  <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{product.specs}</p>
                  <p class="text-gray-700 leading-relaxed mb-6" set:html={product.description} />
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div class="bg-green-50 border border-green-100 rounded-xl p-4">
                      <h4 class="text-xs font-black uppercase tracking-widest text-green-700 mt-0 mb-2">What We Like</h4>
                      <ul class="space-y-2">
                        {product.pros.map((pro) => (
                          <li class="text-sm text-gray-700 leading-relaxed">{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div class="bg-red-50 border border-red-100 rounded-xl p-4">
                      <h4 class="text-xs font-black uppercase tracking-widest text-red-700 mt-0 mb-2">What We Don't Like</h4>
                      <ul class="space-y-2">
                        {product.cons.map((con) => (
                          <li class="text-sm text-gray-700 leading-relaxed">{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div class="border-t border-gray-100 pt-4">
                    <p class="text-gray-900 font-bold mb-4">{product.bottomLine}</p>
                    <div class="flex flex-wrap items-center gap-3">
                      <a href={product.amazonUrl} target="_blank" rel="sponsored nofollow noopener" class="bg-[#FF5A1F] hover:bg-[#E64F16] text-white px-6 py-3 rounded-xl font-black no-underline transition-colors uppercase tracking-widest text-sm">
                        {product.amazonLabel} &rarr;
                      </a>
                      {product.reviewUrl && (
                        <a href={product.reviewUrl} class="text-[#0F62FE] font-bold no-underline text-sm hover:underline">
                          Read our full {product.name} review &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      <div class="max-w-3xl mx-auto px-4">
        <div class="not-prose my-8 bg-amber-50 border-2 border-amber-300 rounded-2xl p-6">
          <p class="text-xs font-black uppercase tracking-widest text-amber-800 mb-2">
            Editorial draft — not yet published
          </p>
          <p class="text-sm text-gray-800 leading-relaxed m-0 mb-3">
            The framing and analysis below are complete. The following need verified
            manufacturer data before this page goes live, and nothing on this page should be
            treated as factual until they are filled in:
          </p>
          <ul class="text-sm text-gray-800 leading-relaxed m-0 pl-5">
            {DATA_PENDING.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
`;

// "Our top picks" box near the top of a roundup: each pick's award and a jump link to its
// card, so a reader (and a search snippet) gets the answer before the detail.
function topPicksBox(spec) {
  if (!spec.products || spec.products.length < 3) return '';
  const items = spec.products
    .slice(0, 5)
    .map(
      (p) => `          <li class="flex flex-wrap items-baseline gap-x-2 py-2 border-b border-orange-100 last:border-0">
            <span class="text-xs font-black uppercase tracking-widest text-[#FF5A1F]">${p.badge}:</span>
            <a href="#${p.id}" class="font-bold text-gray-900 no-underline hover:underline">${p.name}</a>
            <a href="#${p.id}" class="ml-auto text-xs font-bold text-[#0F62FE] no-underline hover:underline">Jump to review &darr;</a>
          </li>`
    )
    .join('\n');
  return `
    <div class="max-w-3xl mx-auto px-4 pt-8">
      <div class="not-prose bg-orange-50 border border-orange-100 rounded-2xl p-6">
        <h2 class="text-lg font-black text-gray-900 mt-0 mb-3">Our Top Picks</h2>
        <ul class="list-none m-0 p-0">
${items}
        </ul>
      </div>
    </div>
`;
}

// "Meet the author" box at the end of every article, linking the author's profile and the
// editorial standards page that explains how products are chosen and checked.
const AUTHOR_BOX = `
        <!-- Meet the Author -->
        <div class="not-prose mt-12 flex gap-4 items-start bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <img src="/authors/shaheer-ali-khan.png" alt="Shaheer Ali Khan, PhD" width="56" height="56" class="w-14 h-14 rounded-full flex-shrink-0" loading="lazy" />
          <div>
            <h2 class="text-lg font-black text-gray-900 mt-0 mb-1">Meet the Author</h2>
            <p class="text-sm font-bold text-gray-900 m-0">
              <a href="/editorial-standards/#who" rel="author" class="text-gray-900">Shaheer Ali Khan, PhD</a>
              <span class="font-normal text-gray-500"> · Exercise Physiology &amp; Biomechanics Specialist · ACSM-EP, CSCS</span>
            </p>
            <p class="text-sm text-gray-700 leading-relaxed mt-2 mb-0">
              Shaheer holds a PhD in Kinesiology (Biomechanics) from the University of Michigan and an MS in
              Exercise Physiology from the University of Florida, and is an ACSM Certified Exercise
              Physiologist and an NSCA Certified Strength and Conditioning Specialist. His treadmill
              evaluations look at motor performance, belt stability, shock absorption, incline accuracy,
              running ergonomics, noise and long-term durability. Every guide says what was checked and
              when, and says plainly when a product has not been tested hands-on.
              <a href="/editorial-standards/" class="text-[#0F62FE] font-medium">Editorial standards</a> ·
              <a href="https://www.linkedin.com/in/shaheer-ali-khan-data/" rel="noopener" target="_blank" class="text-[#0F62FE] font-medium">LinkedIn</a>
            </p>
          </div>
        </div>
`;

function render(spec) {
  const dot = `dot-pattern-${spec.slug.replace(/[^a-z0-9]/g, '')}`;
  const sections = spec.sections;
  const first = sections.findIndex((s) => s.products);

  const renderSections = (list, offset) =>
    list
      .map((s, i) => {
        const body = `        <div id="${s.id}" class="scroll-mt-24">
          <h2 class="text-3xl font-black text-gray-900 mt-16 mb-6">${offset + i + 1}. ${s.heading}</h2>
${s.html.trim()}
        </div>`;
        return body;
      })
      .join('\n\n');

  const before = first === -1 ? sections : sections.slice(0, first + 1);
  const after = first === -1 ? [] : sections.slice(first + 1);

  return `---
import Layout from "../${'../'.repeat((spec.slug.match(/\//g) ?? []).length)}layouts/Layout.astro";
import TrustBadge from "../${'../'.repeat((spec.slug.match(/\//g) ?? []).length)}components/TrustBadge.astro";
import SocialProof from "../${'../'.repeat((spec.slug.match(/\//g) ?? []).length)}components/SocialProof.astro";

const title = ${jsStr(spec.title)};
const description =
  ${jsStr(spec.description)};

${dataPendingBlock(spec)}${productsBlock(spec.products)}${schemaBlock(spec)}
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
  stickyCta={{ text: ${jsStr(spec.stickyCta.text)}, link: ${jsStr(spec.stickyCta.link)} }}
>
  <article class="relative overflow-hidden">
    <!-- Hero Section -->
    <div class="bg-gray-900 py-16 lg:py-24 relative overflow-hidden">
      <svg class="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <pattern id="${dot}" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="white"></circle>
        </pattern>
        <rect width="100%" height="100%" fill="url(#${dot})"></rect>
      </svg>
      <div class="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div class="flex justify-center mb-6">
          <TrustBadge />
        </div>
        <div class="flex items-center justify-center gap-3 mb-6 flex-wrap">
          <span class="bg-[#FF5A1F] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            ${spec.kicker}
          </span>
          <span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Updated ${spec.updated}
          </span>
        </div>
        <h1 class="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">
          ${spec.h1[0]} <span class="text-[#5AA9FF]">${spec.h1[1]}</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          ${spec.standfirst}
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a href="${spec.ctas[0].href}" class="bg-[#FF5A1F] hover:bg-[#E64F16] text-white px-8 py-4 rounded-xl font-black no-underline transition-colors uppercase tracking-widest text-sm">
            ${spec.ctas[0].label}
          </a>
          <a href="${spec.ctas[1].href}" class="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black no-underline transition-colors uppercase tracking-widest text-sm border border-white/20">
            ${spec.ctas[1].label}
          </a>
        </div>
      </div>
    </div>

${spec.dataPending?.length ? DATA_PENDING_BANNER : ''}
    <!-- Author & Meta -->
    <div class="max-w-3xl mx-auto px-4 pt-12">
      <div class="flex flex-wrap items-center gap-4 py-8 border-b border-gray-100">
        <img src="/authors/shaheer-ali-khan.png" alt="${AUTHOR}, PhD" width="48" height="48" class="w-12 h-12 rounded-full" />
        <div>
          <p class="font-bold text-gray-900 leading-tight"><a href="${AUTHOR_PAGE}" rel="author" class="text-gray-900 no-underline hover:underline">${AUTHOR}, PhD</a></p>
          <p class="text-gray-500 text-sm leading-tight">${AUTHOR_ROLE}</p>
        </div>
        <div class="hidden sm:block w-px h-8 bg-gray-200"></div>
        <p class="text-gray-500 text-sm">
          Last Updated: <strong class="text-gray-700">${spec.updatedLong}</strong>
        </p>
        <div class="ml-auto">
          <SocialProof users="${spec.socialProof}" />
        </div>
      </div>
${
  spec.note
    ? `
      <div class="not-prose my-10 bg-blue-50 border border-blue-100 rounded-2xl p-6">
        <p class="text-sm text-gray-700 m-0 leading-relaxed">
          ${spec.note}
        </p>
      </div>
`
    : ''
}    </div>

${topPicksBox(spec)}    <div class="max-w-3xl mx-auto px-4 py-10">
      <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6">
        <h2 class="flex items-center gap-2 text-lg font-black text-gray-900 mt-0 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#FF5A1F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7"></path></svg>
          In This Guide
        </h2>
        <nav class="grid grid-cols-1 sm:grid-cols-2 gap-2">
${contentsNav(spec)}
        </nav>
      </div>
    </div>

    <div class="max-w-3xl mx-auto px-4 pb-16 lg:pb-24">
      <div class="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
        <p class="text-2xl font-medium text-gray-900 mb-8 italic">
          ${spec.lead}
        </p>

${renderSections(before, 0)}
      </div>

${first === -1 ? '' : PRODUCT_CARDS}
      <div class="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
${after.length ? renderSections(after, before.length) + '\n' : ''}
        <!-- FAQ -->
        <div id="faq" class="scroll-mt-24">
          <h2 class="text-3xl font-black text-gray-900 mt-16 mb-6">${sections.length + 1}. Frequently Asked Questions</h2>
          <div class="space-y-6">
${spec.faqs
  .map(
    (f) => `            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 class="font-bold text-gray-900 mb-2">${f.q}</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                ${f.a}
              </p>
            </div>`
  )
  .join('\n')}
          </div>
        </div>

        <!-- Common Mistakes -->
        <div class="mt-16">
          <h2 class="text-3xl font-black text-gray-900 mt-16 mb-6">${spec.mistakesHeading}</h2>
          <p class="text-gray-700 leading-relaxed">${spec.mistakesIntro}</p>
          <div class="space-y-6 my-8">
${spec.mistakes
  .map(
    (m) => `            <div class="bg-red-50 border border-red-100 rounded-2xl p-6">
              <h3 class="text-lg font-bold text-red-900 mt-0 mb-2">${m.title}</h3>
              <p class="text-gray-700 text-sm m-0">${m.body}</p>
            </div>`
  )
  .join('\n')}
          </div>
        </div>

        <!-- Related Guides -->
        <div class="mt-16">
          <h2 class="text-2xl font-black text-gray-900 mb-6">${spec.relatedHeading}</h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
${spec.related
  .map(
    (r, i) => `            <a href="${r.url}" class="block bg-white border border-gray-200 rounded-2xl p-5 no-underline hover:shadow-md transition-shadow">
              <span class="text-xs font-black uppercase tracking-widest text-${['[#FF5A1F]', '[#0F62FE]', 'green-600'][i]}">${r.kicker}</span>
              <p class="font-bold text-gray-900 mt-2 mb-1">${r.title}</p>
              <p class="text-sm text-gray-500 leading-relaxed">${r.blurb}</p>
            </a>`
  )
  .join('\n')}
          </div>
        </div>

        <!-- Closing CTA -->
        <div class="mt-16 bg-gray-900 text-white rounded-2xl p-8">
          <h2 class="text-2xl font-black text-white mb-4">The Bottom Line</h2>
${spec.bottomLine.map((p) => `          <p class="text-gray-300 leading-relaxed mb-4">\n            ${p}\n          </p>`).join('\n')}
        </div>
${AUTHOR_BOX}
      </div>
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

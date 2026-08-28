# Treadmill Reviews USA — Article Page Spec

**How to use this file.** Paste it into a fresh Claude session that has no context on this
repo, or point Claude at this path. It describes exactly how an article page on
treadmillreviewsusa.com is built so a new page comes out matching the other 40.

The canonical reference implementation is **`src/pages/nordictrack-c-700-treadmill.astro`**
for a single-product review and **`src/pages/best-treadmills.astro`** for a roundup. When
anything here is ambiguous, open those files and copy what they do.

---

## 1. Stack and repo facts

- **Astro** + **Tailwind**, React only for interactive islands. Deployed on Vercel.
- **One file per URL.** `src/pages/<slug>.astro` → `https://www.treadmillreviewsusa.com/<slug>/`.
  There is no content collection and no markdown — every article is a hand-written `.astro` page.
- `trailingSlash: 'always'` in `astro.config.mjs`. Every internal link must end in `/`.
- Site URL is `https://www.treadmillreviewsusa.com`.
- Shared chrome (header, footer, mobile nav, ad slots, analytics) lives in
  `src/layouts/Layout.astro`. Article pages never render their own header or footer.

## 2. The build gates — read this before writing anything

`npm run build` runs three validators before Astro compiles. All three must pass or the
deploy fails. They are the fastest way to check your work:

| Command | Rule |
|---|---|
| `npm run validate:words` | **Every page needs ≥ 2,500 words.** Counted after stripping frontmatter, tags, class attributes and `{expressions}` — so only real prose counts. Excludes `index.astro`, `best-of.astro` and `contact-us.astro`. |
| `npm run validate:links` | Every internal `href="/..."`, and every `url:`/`link:`/`href:` string in a data object, must resolve to a real `src/pages/<slug>.astro` **and** end with a trailing slash. Anchors travel with the link (`/slug/#anchor`); files under `public/` are exempt. |
| `npm run validate:format` | Every article page must contain all 13 structural elements listed in §4. Implemented in `scripts/format-audit.mjs`; it prints exactly which pages are missing which elements. |

Run `npm run validate:format` after any structural edit. It is cheap and catches drift immediately.

## 3. Frontmatter contract

```astro
---
import Layout from "../layouts/Layout.astro";
import TrustBadge from "../components/TrustBadge.astro";
import SocialProof from "../components/SocialProof.astro";

const title = "NordicTrack C 700 Treadmill Review (2026): The Budget Entry Point";
const description =
  "We spent three weeks walking and light-jogging on NordicTrack's cheapest current treadmill.";

const PRODUCTS = [ /* see below — roundups only */ ];

const schema = { /* see §6 */ };
---
```

**`title`** — the `<title>` tag. Front-load the target keyword; include the year. Pages append
`" | Treadmill Reviews USA"` in the `Layout` call where the result stays under about 70 characters.

**`description`** — the meta description, ~150–160 characters. One concrete sentence about what
was tested and how. Not a summary of the article.

**`PRODUCTS`** — required for roundups ("best X"), omit for single reviews (which use a single
`PRODUCT` object) and for explainers. Each entry:

```js
{
  id: "nordictrack-commercial-1750",  // becomes the section anchor; kebab-case
  name: "NordicTrack Commercial 1750",
  category: "Best Overall Home Treadmill",
  badge: "Best Overall",               // "Best Budget", "Best Folding", …
  amazonUrl: "https://www.amazon.com/s?k=…&tag=sktiger-20",
  rating: 4.6,                         // feeds Product/aggregateRating
  reviewCount: 6284,
  pros: [ /* 4–5 specific strings */ ],
  cons: [ /* 2–3 honest strings */ ],
  bottomLine: "One or two sentences: who should buy this and why.",
  description: "150–250 words of real testing detail.",
}
```

## 4. Page skeleton — the 13 required elements

Everything lives inside one `<article class="relative overflow-hidden">` and appears in this
order. `validate:format` checks for each item marked ✅.

1. ✅ **Dark hero** — `<div class="bg-gray-900 py-16 lg:py-24 relative overflow-hidden">` with
   the SVG dot-pattern overlay, then `max-w-4xl mx-auto px-4 relative z-10 text-center` containing:
   - ✅ `<TrustBadge />`, centered
   - two pill badges: an orange category pill (`Buyer's Guide` / `Product Review` / `Brand Guide`)
     and a green `Updated <Month> <Year>` pill
   - `<h1 class="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">` with the key
     phrase wrapped in `<span class="text-[#5AA9FF]">`
   - a `text-xl text-gray-300` standfirst
   - two CTAs: solid `bg-[#FF5A1F]` anchored to the top pick, and `bg-white/10` anchored to a
     key section
2. ✅ **Byline strip** — `<!-- Author & Meta -->` then `<div class="max-w-3xl mx-auto px-4 pt-12">`:
   avatar (`https://i.pravatar.cc/150?img=48`), author name, role (`Fitness Equipment Editor`),
   a `Last Updated` date, and ✅ `<SocialProof users="3.9k" />` pushed right with `ml-auto`.
   A review's quick-verdict card sits in this same column, directly under the byline.
3. ✅ **Contents card** — `<div class="max-w-3xl mx-auto px-4 py-10">` wrapping a
   `bg-gray-50 border border-gray-200 rounded-2xl` card. Heading is the list icon SVG plus the
   exact words **"In This Guide"**. Links go in
   `<nav class="grid grid-cols-1 sm:grid-cols-2 gap-2">`, numbered `1.`, `2.`, … and every entry
   must point at a real anchor on the page. List **every** section, ending with the FAQ.
4. **Body** — `<div class="max-w-3xl mx-auto px-4 pb-16 lg:pb-24">` containing
   `<div class="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">`.
   First child is the lead: `<p class="text-2xl font-medium text-gray-900 mb-8 italic">`.
5. **Sections** — each is `<div id="<anchor>" class="scroll-mt-24">` with
   `<h2 class="text-3xl font-black text-gray-900 mt-16 mb-6">`. 6–10 of them, numbered in the
   heading text to match the contents card.
6. ✅ **FAQ** — `<div id="faq" class="scroll-mt-24">`, heading "Frequently Asked Questions",
   then `<div class="space-y-6">` of
   `<div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">` cards, each an `<h3>`
   question and a `<p class="text-gray-700 text-sm leading-relaxed">` answer. 5–7 questions.
   **These must match the FAQPage JSON-LD word for word.**
7. ✅ **Common Mistakes** — `<div class="mt-16">`, an `<h2>` containing the literal phrase
   "Common Mistakes", one intro `<p>`, then `<div class="space-y-6 my-8">` of exactly 4
   `<div class="bg-red-50 border border-red-100 rounded-2xl p-6">` cards, each with an
   `<h3 class="text-lg font-bold text-red-900 mt-0 mb-2">` and a `<p class="text-gray-700 text-sm m-0">`.
   Only cards inside this section are counted, so a red callout elsewhere in the body is fine.
8. ✅ **Related Guides** — `<div class="mt-16">` with an `<h2>` matching `Related … Guides`,
   then `grid grid-cols-1 sm:grid-cols-3 gap-4` of three cards linking to real pages. Kicker
   colours cycle `text-[#FF5A1F]` → `text-[#0F62FE]` → `text-green-600`.
9. ✅ **Closing** — `<div class="mt-16 bg-gray-900 text-white rounded-2xl p-8">` with
   `<h2 class="text-2xl font-black text-white mb-4">The Bottom Line</h2>` and two
   `text-gray-300` paragraphs. Bold the key recommendation with `<strong class="text-white">`.

Also checked by the validator: ✅ `jsonLd={schema}` passed to `<Layout>`, and ✅ `BreadcrumbList`,
✅ `FAQPage` and ✅ `Article` present in the JSON-LD.

## 5. Layout props

```astro
<Layout
  title={`${title} | Treadmill Reviews USA`}
  description={description}
  ogType="article"
  article={{
    publishedTime: "2026-04-22",   // ISO date
    modifiedTime: "2026-04-22",
    author: "Morgan Reyes",
    section: "Fitness Equipment",
    tags: ["nordictrack c 700", "budget treadmill", "home gym"],
  }}
  jsonLd={schema}
  stickyCta={{ text: "Check Price on Amazon", link: "#cta" }}  // optional
>
```

`Layout` → `SEO.astro` generates for free: `<title>`, meta description, **canonical URL**,
Open Graph, Twitter card, `article:*` meta from the `article` prop, and Organization + WebSite
JSON-LD. Do not hand-write any of those. `noindex` and `ogImage` props exist if needed.

`stickyCta` renders a persistent mobile CTA bar. Its `link` is checked by `validate:links`
whenever it points at an internal page rather than an on-page anchor.

## 6. JSON-LD

One `const schema` object using `@graph`. `SEO.astro` emits Organization and WebSite separately,
so **never** add those here.

```js
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",
          item: "https://www.treadmillreviewsusa.com/" },
        { "@type": "ListItem", position: 2, name: "Reviews",
          item: "https://www.treadmillreviewsusa.com/best-of/" },
        { "@type": "ListItem", position: 3, name: "NordicTrack C 700",
          item: "https://www.treadmillreviewsusa.com/nordictrack-c-700-treadmill/" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [ /* one Question per on-page FAQ, text identical */ ],
    },
    {
      "@type": "Article",
      headline: title,
      author: { "@type": "Person", name: "Morgan Reyes" },
      datePublished: "2026-04-22",
      dateModified: "2026-04-22",
      publisher: { "@type": "Organization", name: "Treadmill Reviews USA" },
    },
    // Reviews and roundups add one Product node per machine:
    ...PRODUCTS.map((product) => ({
      "@type": "Product",
      name: product.name,
      description: product.description,
      brand: { "@type": "Brand", name: product.name.split(" ")[0] },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: product.reviewCount,
      },
    })),
  ],
};
```

Breadcrumb position 2 is always `/best-of/`; only the label changes — `Best Lists`,
`Reviews`, `Brand Guides`, `Buying Guides`, or `Guides`.

## 7. Components

| Component | Props | Notes |
|---|---|---|
| `TrustBadge.astro` | none | Required, in the hero |
| `SocialProof.astro` | `users: string` (e.g. `"3.9k"`) | Required, in the byline strip |
| `MobileNav.tsx` | none | React island, rendered by `Layout` |
| `AdUnit.astro` | `variant?: "in-article" \| "display" \| "top"` | **Injected by `Layout` already** — do not add to a page |

## 8. Writing standards

- **≥ 2,500 words of real prose.** Most pages run 2,600–5,000.
- **Specific over generic.** Every claim should reference a tested condition, a measurement, a
  price band, or a named trade-off. "The motor laboured above 6 mph" beats "good for running".
- **Say what is bad.** Every product gets real `cons`. Every Common Mistakes card names a
  concrete failure mode and its fix. The site's positioning is honesty.
- **British-neutral, plain English.** No hype, no exclamation marks, no "unleash"/"game-changer".
- **Em dashes and real punctuation** are fine; the pages use `—` freely.
- Section headings are numbered in the body and mirrored in the contents card.

## 9. Internal linking

- Always `/slug/` with the trailing slash. `validate:links` fails the build otherwise, and it
  reads single-quoted data values too, so `url: '/slug'` in a `const` array will be caught.
- The target page must already exist in `src/pages/`. If you are writing a link to a page you
  plan to add later, add the page first or drop the link.
- 3 Related Guides cards minimum, plus 2–4 contextual in-body links to sibling articles.

## 10. After the page exists

1. `npm run build` — all three validators plus Astro.
2. Add a card for it in **`src/pages/best-of.astro`** so it is reachable from the hub
   (`{ title, description, badge, url: '/slug/' }`).
3. Optionally add the slug to a `PRIORITY_TIERS` entry in **`astro.config.mjs`** to raise its
   sitemap priority above the 0.5 default.
4. Ship it. `.github/workflows/indexnow.yml` submits every page URL to IndexNow on each push
   to `main`; run `node scripts/indexnow-submit.js` by hand only if you need to re-submit.

## 11. Mistakes that have actually happened here

- **Assuming a passing build means the page looks right.** It does not. Tailwind breakpoints are
  viewport-based, not container-based, so a `lg:grid-cols-12` split inside the `max-w-3xl` column
  still fires at 1280px and clips its content. If you add or move a wide component, load the page
  in a browser and check nothing overflows the content column.
- **Wide tables without a scroll wrapper.** Anything wider than the column needs
  `overflow-x-auto` on its wrapper and a `min-w-[…]` on the table.
- **FAQ copy drifting from the FAQPage schema.** They must match exactly, or the rich result is
  wrong. Edit both together.
- **Adding Organization/WebSite JSON-LD to a page.** `SEO.astro` already emits both; a second
  copy is a duplicate.
- **Linking without the trailing slash.** Instant build failure.
- **A contents entry with no matching anchor.** Add `id="…"` and `scroll-mt-24` to the section.

## 12. Caveat worth knowing

The `SocialProof` "Join 3.9k others who chose this" counts are **not measured figures** — they
are per-page values chosen to look plausible, and they exist on every article page. They are part
of the established format, so a new page carries one for consistency, but treat the number as
decoration rather than data. If the site ever wires up real analytics, this is the thing to
replace first.

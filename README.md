# Treadmill Reviews USA

An SEO-focused Astro + Tailwind affiliate review site for treadmill buying guides, structured after [The Honest Reviewers](https://github.com/shaheertiger/The-Honest-Reviewers).

## Stack

- [Astro](https://astro.build) (static site generation)
- [Tailwind CSS](https://tailwindcss.com)
- React islands (mobile nav)
- `@astrojs/sitemap` with custom per-page priorities
- Per-page JSON-LD (`BreadcrumbList`, `FAQPage`, `Article`, `Product`) via `src/components/SEO.astro`
- `@vercel/analytics`

## Structure

```
src/
  components/   SEO.astro, TrustBadge.astro, SocialProof.astro, AdUnit.astro, MobileNav.tsx
  layouts/      Layout.astro (shared header/footer/ad slots)
  data/         constants.ts (categories, brand colors, Amazon affiliate tag)
  pages/        index.astro, best-of.astro, and long-form review pages
scripts/
  validate-word-count.js   enforces a 2,500-word minimum on review pages before build
```

## Content

Flagship long-form review pages (2,500+ words each, tested via `npm run validate:words`):

- `/best-treadmill-for-home-reviews`
- `/best-folding-treadmill-reviews`
- `/best-treadmill-under-1000-reviews`

Long-form blog/editorial pages (also 2,500+ words, same validator):

- `/treadmill-reviews-2026` — testing methodology, scoring rubric, and category winners across all three flagship guides.
- `/treadmill-buying-guide-2026` — educational buying guide (motor power, deck size, folding vs. fixed, budget tiers) that funnels readers into the flagship guides.

All outbound product links use Amazon search URLs tagged with the `sktiger-20` Associates ID (`rel="sponsored nofollow noopener"`). Swap in real ASIN/product links and product photography as they become available.

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run validate:words
npm run build
```

## Notes

- `AdUnit.astro` is wired for Google AdSense but ships with a placeholder `ca-pub-0000000000000000` client ID — swap in a real AdSense publisher ID (and load the AdSense script in `Layout.astro`) once approved.
- Author byline ("Morgan Reyes") and testing claims are placeholder editorial content — replace with real testers/data as available.

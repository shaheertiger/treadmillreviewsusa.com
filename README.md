# Treadmill Reviews USA

An SEO-focused Astro + Tailwind affiliate review site for treadmill buying guides, structured after [The Honest Reviewers](https://github.com/shaheertiger/The-Honest-Reviewers).

Vercel's Production Branch should be `main`. `claude/seo-repo-structure-n1zh7s` is kept in sync with `main` during the migration off the old branch name.

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
- `/treadmill-buyers-guide` — a step-by-step purchase checklist, complementary to (and cross-linked with) the guide above.

Individual model reviews, brand hub pages, and category/price roundups (also 2,500+ words each, same validator) — recreated from prior-site page-performance data. Browse the full set from `/best-of`, or see below:

- **Brand hubs**: `/nordictrack`, `/proform-treadmill`, `/sole-fitness`, `/life-fitness`, `/matrix-fitness`, `/bowflex`
- **Model reviews**: NordicTrack (`/nordictrack-commercial-1750-treadmill`, `-2450-`, `-2950-`, `-new-commercial-1750-`, `-c-700-`, `-c-990-`, `-c-1650-`, `-x22i-incline-trainer-`, `-x9i-incline-trainer-`), ProForm (`/proform-pro-2000-treadmill`, `-power-995i-`, `-power-1295i-`), Sole (`/sole-f63-treadmill`, `/sole-f65-treadmill`), Life Fitness (`/life-fitness-t3-treadmill`, `/life-fitness-platinum-club-series-treadmill`), Matrix (`/matrix-fitness-t7xe-treadmill`), Bowflex (`/bowflex-max-trainer-m7`, `/bowflex-max-trainer-m5` — cardio machines, not treadmills, framed honestly as such)
- **Category/price roundups**: `/best-incline-treadmills`, `/commercial-treadmills`, `/best-treadmills`, `/best-folding-treadmills` (quick picks by use case, distinct from the flagship folding guide), `/folding-treadmills` (fold-mechanism primer), `/treadmills-under-1500`, `/treadmills-over-2500`, `/home-treadmills` (routing hub), `/best-treadmills-for-home`

All outbound product links use Amazon search URLs tagged with the `sktiger-20` Associates ID (`rel="sponsored nofollow noopener"`). Swap in real ASIN/product links and product photography as they become available. Product specs on the newly recreated pages are editorial approximations in the site's existing style (same convention as the original flagship guides) — verify against manufacturer data before treating any number as authoritative.

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

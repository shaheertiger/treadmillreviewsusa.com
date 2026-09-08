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
  layouts/      Layout.astro (shared header/footer/ad slots), SectionHub.astro (section hubs)
  data/         constants.ts (brand colors, Amazon tag), sections.ts (the site IA)
  pages/        index.astro, best-of.astro, long-form article pages, and
                <section>/index.astro for each of the nine section hubs
scripts/
  lib/pages.mjs            recursive page walk + route/landing-page rules, shared by all validators
  validate-word-count.js   enforces a 2,500-word minimum on article pages before build
  validate-links.mjs       every internal link must resolve and carry a trailing slash
  format-audit.mjs         every article page must carry the 13 structural elements
  validate-ia.mjs          every article belongs to a hub; every hub matches sections.ts
  build-articles.mjs       renders article pages from the content specs in src/content/articles/
```

## Article pipeline

Article pages carry 13 required structural elements with exact class strings, checked against
page *source* by `scripts/format-audit.mjs`. Hand-copying ~300 lines of that markup per page is
how drift gets in, so it lives once in `scripts/build-articles.mjs` and pages are rendered from
content specs:

```bash
npm run articles                 # regenerate every page from src/content/articles/
node scripts/build-articles.mjs best-treadmills-for-running   # or just one
```

Generated `.astro` files are committed and are what Astro builds. **Edit the spec and
regenerate — do not edit a generated page**, since regeneration overwrites it.

### Pages awaiting data

A spec may declare `dataPending: ['...']` for a page whose framing is complete but whose
product figures are not yet verified. Those pages:

- render a prominent amber "Editorial draft — not yet published" banner listing exactly what is
  outstanding,
- are served `noindex`,
- are excluded from the sitemap (`astro.config.mjs`) and from IndexNow submission,
- are exempt from the 2,500-word minimum and from the hub-coverage requirement,
- still have to pass the format audit and the link checker.

`npm run validate:ia` lists them on every build, and fails if a page declares `DATA_PENDING`
without being `noindex`. Removing the `dataPending` field re-imposes the word minimum and the
hub-coverage requirement, so a page cannot quietly go live incomplete or orphaned.

This exists because the site's positioning is honesty: a brand or comparison page asserting
unverified motor ratings, deck dimensions or warranty terms reads as authoritative while being
wrong, and fabricated `aggregateRating` in Product JSON-LD is a structured-data policy breach
that risks a manual action. New pages therefore carry no `aggregateRating` at all.

## Information architecture

Nine section hubs sit above the article pages and group them by the decision a reader is
making. **Articles keep their original flat URLs** — the hubs are a navigation and
topical-authority layer, not a URL migration, so nothing was redirected and no existing
ranking URL changed.

| Hub | Groups | Covers |
|---|---|---|
| `/best/` | 4 | Use-case roundups — home, folding, walking, incline |
| `/price/` | 3 | Budget tiers, premium, and spending less |
| `/brands/` | 3 | Consumer, commercial, and cross-shopped alternatives |
| `/reviews/` | 4 | Individual model reviews by brand |
| `/compare/` | 1 | Head-to-head format and machine-type decisions |
| `/guides/` | 4 | Buying guides and spec explainers |
| `/problems/` | 4 | Fault diagnosis by symptom |
| `/maintenance/` | 3 | The ownership schedule, lubrication, tension and tracking |
| `/tools/` | 1 | Planned calculators — `noindex` until they exist |

`src/data/sections.ts` is the single source of truth: it defines each hub's copy and the
articles it links to, and it drives the hub pages, the header "Browse" menu, the footer
section row, the `/best-of/` section grid and the sibling-hub grids. Each hub page is a
six-line file handing its section to `src/layouts/SectionHub.astro`. Sitemap priority (0.9)
is derived in `astro.config.mjs` from the subdirectories of `src/pages`, so it cannot drift.

All 66 article pages are reachable from a hub, and `npm run validate:ia` fails the build if one
is not. Each article sits in exactly one topical hub, with three deliberate exceptions:
`/tools/` also points at `/home-treadmills/`, `/treadmill-dimensions-space-requirements/` and
`/treadmill-electricity-usage/` as the interim answers to its three planned calculators. The
validator prints those three so the list stays intentional.

`/tools/` has no destinations of its own yet, so it renders `noindex` and is filtered out of the
sitemap; clear both flags together once the calculators ship.

### Not yet written

The IA names eleven pages that do not exist yet. They are deliberately absent rather than
stubbed — a hub linking to placeholder pages is worse than a hub that is honest about its size:

- **Roundups**: `/best/running/`, `/best/apartments/`, `/best/heavy-users/`, `/price/under-500/`
- **Brand hub**: `/brands/horizon/`
- **Review**: `/reviews/sole-f80/`
- **Comparisons**: `/compare/sole-f80-vs-f85/`, `/compare/nordictrack-1750-vs-2450/`
- **Tools**: space calculator, electricity-cost calculator, treadmill selector

Article pages nest exactly like flat ones (`src/pages/best/running.astro` → `/best/running/`)
and are held to the same three build gates.

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

### Walking & low-impact semantic cluster

A hub-and-spoke topic cluster covering the walking-first buyer, who was previously
unserved by the running-oriented guides above. The pillar links down to all five spokes;
every spoke links back up to the pillar and laterally to two or three siblings, and six
pre-existing pages (`/best-incline-treadmills/`, `/home-treadmills/`, `/folding-treadmills/`,
`/best-treadmill-under-1000-reviews/`, `/treadmill-buying-guide-2026/`, `/sole-f63-treadmill/`)
were given contextual links into it.

- **Pillar**: `/best-walking-treadmills/` — six machines re-scored at 2.5-4 mph (sitemap priority 0.8)
- **Spokes** (priority 0.7): `/under-desk-treadmills/` (walking pads), `/walking-pad-vs-treadmill/`
  (format decision), `/best-treadmills-for-seniors/` (step-up height, handrails, stopping distance),
  `/quiet-treadmills/` (airborne vs. structure-borne noise), `/12-3-30-treadmill-workout/`
  (incline-walking protocol, informational)

The cluster is reachable from `/best-of/` under the "Walking & Low-Impact" category. The two
health-adjacent pages (`/best-treadmills-for-seniors/`, `/12-3-30-treadmill-workout/`) carry an
explicit scope note stating that the site reviews equipment and does not give medical advice.

### Maintenance & ownership semantic cluster

The second hub-and-spoke cluster. Maintenance was referenced across ~20 existing pages but no
page owned the topic, so those references pointed nowhere. This cluster claims that space and
gives every model and brand page a natural post-purchase link target. Fifteen existing pages
now link into it, including three pages from the walking cluster.

- **Pillar**: `/treadmill-maintenance/` — the complete owner's schedule (sitemap priority 0.8)
- **Spokes** (priority 0.7): `/treadmill-belt-lubrication/` (the step-by-step),
  `/treadmill-belt-slipping/` (slipping vs. tracking, diagnosed in order),
  `/treadmill-troubleshooting/` (won't start, cuts out, error codes, noises),
  `/how-long-do-treadmills-last/` (lifespans by tier, repair-or-replace)

Reachable from `/best-of/` under "Maintenance & Ownership". Every page carries a safety callout:
unplug before servicing, the four symptoms that mean stop using the machine, and the manual as
the authority on lubrication intervals and deck type. Maintenance intervals, lifespan ranges and
repair costs are editorial estimates drawn from warranty terms and owner reports, not measured
data — the lifespan page states this explicitly on the page itself.

All outbound product links use Amazon search URLs tagged with the `sktiger-20` Associates ID (`rel="sponsored nofollow noopener"`). Swap in real ASIN/product links and product photography as they become available. Product specs on the newly recreated pages are editorial approximations in the site's existing style (same convention as the original flagship guides) — verify against manufacturer data before treating any number as authoritative.

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run validate:words
npm run build     # runs all three validators, then Astro
```

A green build does not mean a page renders correctly — Tailwind breakpoints are viewport-based,
so a wide element inside a narrow column still fires at large widths. After any layout change,
load the page and compare `document.documentElement.scrollWidth` against `clientWidth` at
390 / 768 / 1024 / 1280px. That check is what caught the header dropdown that had been giving
every page a horizontal scrollbar.

## Notes

- `AdUnit.astro` is wired for Google AdSense but ships with a placeholder `ca-pub-0000000000000000` client ID — swap in a real AdSense publisher ID (and load the AdSense script in `Layout.astro`) once approved.
- Author byline ("Morgan Reyes") and testing claims are placeholder editorial content — replace with real testers/data as available.

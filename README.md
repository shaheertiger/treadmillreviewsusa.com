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
- **Review**: `/reviews/sole-f80/` — the flat `/sole-f80-treadmill/` and `/sole-f85-treadmill/`
  pages now exist as editorial drafts (see "Pages awaiting data"); they join `/reviews/` when
  their specifications are confirmed
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
- `/treadmills-for-sale` — where to buy, what to pay, and what each sales channel costs you after checkout.
- `/horizon-t101-treadmill`, `/proform-pro-5000-treadmill`, `/proform-505-cst-treadmill`, `/nordictrack-t-6-5-s-treadmill`, `/weslo-cadence-g-5-9-treadmill` — model reviews with cross-checked published specifications (see "Verified model reviews").

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

### Workouts & training semantic cluster

The third hub-and-spoke cluster, and it exists for the same reason the maintenance one did.
Training concepts were referenced constantly across the site — 58 pages mention "workout", 56
"interval", 92 "pace" — while exactly one page owned any training topic, and it was an
incline-walking protocol absorbing 17 inbound links for a subject it is not about. "Weight loss"
and "couch to 5k" appeared on no page at all.

- **Pillar**: `/treadmill-workouts/` — the four session types (easy steady, intervals, incline,
  long), how to build a week, and how to progress (sitemap priority 0.9 as a section hub member)
- **Spokes**: `/treadmill-interval-workouts/` (five structures, and why a belt that does not slow
  as you tire changes how you set the pace), `/treadmill-pace-and-speed-chart/` (mph to pace to
  km/h, plus incline equivalents), `/treadmill-workout-for-weight-loss/`,
  `/couch-to-5k-treadmill/` (the nine-week progression), `/treadmill-heart-rate-zones/`, and the
  pre-existing `/12-3-30-treadmill-workout/`, which moved into this cluster from `/guides/`

The pillar links to all six spokes; every spoke links back up and laterally to at least two
siblings; and 16 pages outside the cluster link into it. The cluster has its own section hub at
**`/training/`**, since "what do I do on it" is a different reader intent from "which should I
buy".

Health-adjacent pages carry explicit scope notes stating that the site reviews equipment and is
not giving medical, coaching or nutrition advice. The weight-loss page is deliberately honest
that exercise is a weaker lever on body weight than the category usually implies, that console
calorie figures run optimistic, and that nutrition questions belong with a registered dietitian.
The heart-rate page states that 220-minus-age misses individuals by ten to twelve beats routinely
and that beta blockers invalidate the arithmetic entirely.


### Buy-intent cluster

`/treadmills-for-sale/` claims the "treadmill for sale" / "treadmills for sale" head term, which
the site had no page for despite owning most of the pages a reader needs after it. It is framed
around the four markets that sell the same machine at four different prices — new retail,
model-year clearance, open-box/refurbished and private used — and what each one is worth once
delivery, warranty and returns are priced in. It carries no product specifications, so nothing on
it needs verifying against a manufacturer.

It sits in `/price/` under "Deciding what to spend" and is linked contextually from eight
existing pages: `/best-time-of-year-to-buy-a-treadmill/`, `/new-vs-used-treadmill/`,
`/how-much-should-you-spend-on-a-treadmill/`, `/cheap-vs-premium-treadmill/`,
`/used-treadmill-buying-checklist/`, `/treadmill-buying-guide-2026/`, `/best-treadmills/` and
`/treadmills-over-2500/`, plus the `/best-of/` grid.

### Verified model reviews

Five model reviews written against the keyword gaps in `research/competitor-keywords/`:
`/horizon-t101-treadmill/`, `/proform-pro-5000-treadmill/`, `/proform-505-cst-treadmill/`,
`/nordictrack-t-6-5-s-treadmill/` and `/weslo-cadence-g-5-9-treadmill/`.

These differ from the older model pages in one respect that matters: their specification figures
were **cross-checked before publication** rather than estimated. Each page's `note` states what
was checked, against what, and on what date — the manufacturer or retailer listing plus
independent review coverage, with the figures agreeing across all of them. They are still
published figures rather than our own measurements, and each page says so.

Where sources disagreed, the page did not ship indexed. That rule is what separates these five
from the Sole pages below, and it is the only rule that keeps the distinction meaningful.

`/weslo-cadence-g-5-9-treadmill/` is a deliberate case: the machine is discontinued, so the page
is written around what a used one is worth, how long parts will realistically exist, and what
replaces it — rather than pretending it is still a purchase decision.

### October 2026 batch: problems, ownership and informational queries

Thirty-one pages written against supplied page-performance and keyword data. Each targets one
search intent; queries that an existing page already answers (lubrication, elliptical vs.
treadmill, where to buy, lifespan, 12-3-30) were folded into that page rather than given a
competing one. None carries product specifications or `products`, so none needs `dataPending`.

- **Fault diagnosis** (`/problems/`): shuts off by itself, trips the breaker, burning smell,
  thumping noise, incline not working, resetting a NordicTrack
- **Maintenance** (`/maintenance/`): adjusting the belt, replacing the belt, moving a treadmill,
  disposing of one
- **Buying guides** (`/guides/`): weight capacity, top speed, cushioning, machine weight, mats,
  surge protectors, plus a Background & tech group (history, Apple Watch/Strava)
- **Comparisons** (`/compare/`): manual vs. motorized, treadmill vs. running outside,
  stair climber vs. treadmill
- **Price** (`/price/`): how much a treadmill costs, is iFIT worth it
- **Training** (`/training/`): how to use a treadmill, what incline to walk on, walking
  backwards, belly fat, how long to walk, calorie accuracy, knees, the treadmill stress test

Health-adjacent pages carry the not-medical-advice scope note. Prices, weights, intervals and
costs are typical ranges, labelled as such; iFIT and Peloton prices are deliberately not quoted
as current. Not written: "are Deer Run treadmills good" (a model/brand page that needs verified
specifications first) and two queries with no editorial value.

### Second October batch: forty gap-filling guides

Forty more pages, chosen to fill intents the site linked around but did not answer. Like the
first batch, none carries product specifications, so none needs `dataPending`.

- **Fault diagnosis**: belt jerking, blank console, safety key, heart-rate sensors, shaking,
  static shock, speed accuracy (new "Console & sensors" group)
- **Maintenance**: cleaning, motor brushes, drive belt (new "Repairs" group); assembly, folding,
  storage, garage use (new "Setup & storage" group)
- **Buying guides & price**: AC vs. DC motors, smart vs. regular, safety tips, warranties,
  Costco, Black Friday, refurbished, rental, portable treadmills
- **Comparisons**: NordicTrack vs. ProForm, incline trainer, folding vs. non-folding, exercise
  bike, rowing machine, gym membership
- **Training**: hill workouts, warm-up and cool-down, marathon training, running form, zone 2,
  walking workouts, walking speed, steps per mile, boredom, benefits, treadmill desks

### Third October batch: twenty demand-led guides

Twenty pages chosen from a Semrush US keyword pull (2026-10-08) against the slugs the site
already had. Topics went in on volume and on whether an existing page already owned the intent:
"treadmill incline workout" (2,400/mo) was skipped because `/treadmill-hill-workout/` is that
page, and "nordictrack treadmill troubleshooting" because `/how-to-reset-nordictrack-treadmill/`
already absorbs it. None carries product specifications or `products`, so none needs
`dataPending`; subscription prices are deliberately not quoted anywhere.

- **Fault diagnosis**: speed sensor, overheating, ProForm troubleshooting and reset
- **Maintenance**: the repair decision guide (DIY vs. technician, typical costs, the motor
  control board, repair-or-replace), belt replacement cost, deck replacement and flipping
- **Buying guides**: extension cords and dedicated circuits, where to put a treadmill (room by
  room), Zwift with a treadmill, calibrating the belt and a watch, treadmills for dogs
- **Comparisons**: curved manual treadmills, iFIT vs. Peloton (new "Apps & subscriptions" group)
- **Training**: HIIT, sprints, incline walking vs. running, a beginner's first four weeks,
  treadmill before or after weights, calories-burned estimate tables, and mile / 5K /
  10,000-step times

Calorie and time tables are arithmetic from stated inputs (MET-style estimates, 60 ÷ mph), labelled
as estimates on the page. Health-adjacent pages, the dog page included, carry the not-medical-advice
scope note; the dog page says to consult a vet and never to tether a dog to a machine.

### Competitor-gap pages: Bowflex T6, Wellfit TM037, NordicTrack 1250 vs. 1750

Written against nine supplied treadmillreviews.net URLs (2026-10-08). Semrush page-level keyword
data showed three real gaps; the other six already have a page here (`/best-folding-treadmill-reviews/`,
`/nordictrack-t-6-5-s-treadmill/`, `/weslo-cadence-g-5-9-treadmill/`, `/proform-treadmill/`,
`/sole-f85-treadmill/` as a draft, and `/what-incline-should-i-walk-on-a-treadmill/`, whose
competitor equivalent earns almost no traffic).

- `/bowflex-t6-treadmill/` — **verified**: every figure matches Bowflex's listing and two
  independent sources. Bowflex states a 3.0 HP *test* rating, not CHP, and the page says so.
- `/wellfit-tm037-treadmill/` — built around the fact that only **listing claims** exist. The
  motor is disputed by one independent teardown and the warranty terms conflict; the page presents
  both as such and says we have not tested the machine.
- `/nordictrack-commercial-1250-vs-1750/` — states only what NordicTrack confirms (screen, motor
  warranty, identical speed and incline ranges, the 1250's 400 lb rating and warranty). Motor
  ratings, deck widths and the 1750's capacity conflict across sources and model years, so the
  page lists them as unconfirmed rather than picking a number.

The Bowflex brand page previously said Bowflex sells no treadmill and is owned by Nautilus. Both
were out of date: Bowflex sells the T6, T9 and T16, and Johnson Health Tech bought the brand out of
BowFlex Inc's Chapter 11 in April 2024. `/bowflex/`, its hub card and `/best-treadmill-brands/`
were corrected.

Two fixes found while writing these. Six model-review specs (the five verified reviews and the
Wellfit page) never rendered their product card, because the generator only places cards after a
section marked `products: true`; their top buttons pointed at an anchor that did not exist. And
`/sole-f63-treadmill/` gave a 10 mph top speed and a 10-year motor warranty, where independent
sources agree on 12 mph and lifetime frame-and-motor cover.

### Question-answer batch: twenty pages

Twenty pages written as direct answers to question queries from a Semrush US question pull
(2026-10-09) against the slugs the site already had. Each opens with a `short-answer` section whose
first paragraph is a bold, one-to-two-sentence answer, and most later headings are the follow-up
questions a reader asks next. They carry `kicker: 'Question Answered'`. Questions an existing page
already owns (is running on a treadmill easier, belly fat, lubrication intervals, carpet, Strava)
were linked to rather than given a competing page. None carries product specifications or
`products`, so none needs `dataPending`.

- **Walking pads** (new "Walking pads, answered" group in `/guides/`): what is a walking pad, are
  walking pads worth it, can you run on a walking pad; plus how to lubricate one (`/maintenance/`)
  and whether they help with weight loss (`/training/`)
- **Training** (new "Common questions, answered" group in `/training/`): what muscles a treadmill
  works, what incline walking does, does it build glutes, is treadmill running bad for you, is
  treadmill walking the same as outside, how long to run, daily use, holding the handrails, walking
  barefoot, METs, and whether trackers count treadmill steps
- **Ownership**: how to turn on a treadmill (`/guides/`), how to disassemble one (`/maintenance/`),
  water damage (`/problems/`), and whether treadmills are HSA/FSA eligible (`/price/`)

The METs page states the ACSM walking and running equations and computes its tables from them;
calorie figures elsewhere are the same MET arithmetic, labelled as estimates. Health-adjacent pages
carry the not-medical-advice scope note, the HSA/FSA page a not-tax-advice note that defers to IRS
Publication 502 and the plan administrator, and the water-damage page an electrical-safety note.
Eighteen existing specs gained contextual links into the batch.

### Affiliate roundups: ten "best" pages

Ten buyer-intent roundups (2026-10-13), each with 5–7 products, a quick-picks table, the product
cards, a "how we chose" section and a buyer's guide. Every product was confirmed as currently sold
and its figures cross-checked against the manufacturer or a major retailer plus independent
coverage on that date; any figure that conflicted between sources was **left out of the card**
rather than chosen. No page claims testing, and none carries `rating`, `reviewCount` or
`aggregateRating`. Each `note` says what was checked and when, that prices change, and carries the
affiliate disclosure. Buttons are tagged Amazon search links (`sktiger-20`); swapping them for
`/dp/ASIN` links is a separate, pending pass.

- `/best/`: smart treadmills, treadmills for Zwift, curved, manual and dog treadmills (new
  "Specialty & smart" group), and walking pads with incline (Walking & low-impact)
- `/brands/`: the current NordicTrack lineup
- `/guides/`: mats and accessories (new "Accessories" group)
- `/training/`: heart-rate monitors (Reference)

Two things found while checking. Sperax walking pads are deliberately absent: the CPSC told owners
to stop using them on 16 April 2026 after reports of uncontrolled speed, falls and fires, and the
importer refused a recall. And three existing NordicTrack pages no longer match NordicTrack's current
listings — `/nordictrack-commercial-2450-treadmill/` (speed, incline, capacity),
`/nordictrack-commercial-1750-treadmill/` (motor, screen, capacity) and `/nordictrack/` (built
around the discontinued C-Series and 2950); they are flagged here, not yet corrected.

Eleven existing specs gained contextual links into the batch, and `/treadmill-for-dogs/` no longer
says the site will not recommend a dog treadmill.

### Affiliate roundups, second batch: ten more "best" pages

Same rules as the first batch (2026-10-13): products confirmed as currently sold, figures
cross-checked and conflicting ones left off the cards, no testing claims or ratings, tagged
Amazon search links. This batch also searched cpsc.gov for every brand before listing a product.

- `/brands/`: ProForm (four cards — proform.com sells only four treadmills), Sole (contested
  2026 F-series figures stated as unconfirmed rather than chosen) and Horizon
- `/price/`: best treadmills on Amazon (Where to buy) and under $300 (Budget tiers)
- `/best/`: walking pads for heavy people, walking pads with handrail, treadmill desks and
  treadmills with decline
- `/guides/`: running shoes for treadmill (Accessories)

Ten existing specs gained contextual links; `/best-treadmill-brands/` no longer says its Horizon
coverage is unfinished. (An earlier note here said Sole's labour term was 90 days; that was a misreading of Sole's
warranty table, where 90 days is cosmetic cover. Labour is one year; corrected 2026-10-14.)

Found while checking, not yet corrected: `/sole-f65-treadmill/` disagrees with Sole's 2026 listing
on motor, deck, capacity, warranty and console; `/proform-pro-2000-treadmill/` and
`/proform-treadmill/` describe models no longer on proform.com; `/horizon-t101-treadmill/` (since corrected — see the second keyword batch); and
several older pages (`/best-treadmills-under-500/`, `/best-treadmills-under-800/`, both Sole model
pages, `/treadmill-desk-guide/`) carry first-person testing claims.

### Supporting articles: twenty companions to the roundups

One informational article per affiliate roundup (2026-10-13), written to answer a real query and pass
the reader to its money page. Each links its roundup four times (short answer, a closing "what to buy"
section, the first related card and the bottom line), and each roundup now links back from its
quick-picks intro. No supporting page carries `products` or model specifications beyond what its
roundup states; new brand, app or recall facts were checked against the manufacturer or cpsc.gov plus
an independent source.

| Supporting article | Money page |
|---|---|
| how-thick-should-a-treadmill-mat-be | best-treadmill-mats |
| how-to-stay-cool-on-a-treadmill | best-treadmill-accessories |
| chest-strap-vs-wrist-heart-rate | best-heart-rate-monitors-for-treadmill |
| how-to-use-a-manual-treadmill | best-manual-treadmills |
| curved-treadmill-workouts | best-curved-treadmills |
| can-you-use-nordictrack-without-ifit | best-smart-treadmills |
| nordictrack-t-series-vs-commercial | best-nordictrack-treadmills |
| dog-treadmill-vs-human-treadmill | best-dog-treadmills |
| how-long-do-walking-pads-last | best-walking-pads-with-incline |
| treadmill-foot-pod-guide | best-treadmills-for-zwift |
| is-proform-a-good-brand | best-proform-treadmills |
| sole-vs-nordictrack | best-sole-treadmills |
| is-horizon-a-good-treadmill-brand | best-horizon-treadmills |
| how-to-read-treadmill-reviews | best-treadmills-on-amazon |
| how-to-make-a-cheap-treadmill-last-longer | best-treadmills-under-300 |
| what-happens-if-you-exceed-treadmill-weight-limit | best-walking-pads-for-heavy-people |
| walking-pad-vs-folding-treadmill | best-walking-pads-with-handrail |
| standing-desk-height-for-walking-pad | best-treadmill-desks |
| how-often-to-replace-running-shoes | best-running-shoes-for-treadmill |
| what-is-treadmill-decline-good-for | best-treadmills-with-decline |

Two existing errors fixed while writing them: `/best-treadmill-desks/` said a keyboard tray helps when
a desk is too low (a tray lowers the keyboard; it cannot add height), and `/treadmill-desk-guide/`
said a walking pad raises you "a couple of inches" (typically 4 to 7).

### Keyword batch (2026-10-14): twenty-one pages and the 1750 rewrite

Written against a supplied keyword list. Keywords an existing page already owns were mapped to it
rather than given a competing page; everything else got one page each. All product facts were
checked on 14 October 2026 (manufacturer or official retailer plus an independent source, CPSC
searched per brand); conflicts are stated, not resolved by guessing.

- **Rewrite**: `/nordictrack-commercial-1750-treadmill/` (14,800/mo) is now a spec-generated verified
  review of the current NTL17125 — 4.25 CHP, 22 x 60 in., 400 lb, 16 in. screen, confirmed against
  NordicTrack and a retailer listing for the same model number. The old page's 3.75 CHP / 14 in. /
  300 lb figures, testing claims and aggregateRating are gone. URL unchanged.
- **Reviews**: AssaultRunner Pro, Bowflex T9, Reebok FR20z Floatride (sold in the UK and Australia;
  unavailable in the US on the day), Sole F89 (withdrawn from Sole's stores — written as such), SB
  Fitness CT550 (listing claims), TREAFLOW 3100W, Streamdale (a reseller with unbranded machines),
  and East Urban Home — no treadmill under that Wayfair label could be found; the listings carrying
  the searched title describe furniture, and the page says so.
- **Roundups**: highest-incline treadmills, cushioned (low-impact) treadmills, low-profile treadmills,
  walking pads for tall people, VR treadmills, walking shoes and women's running shoes for treadmill.
- **Guides**: treadmill settings for fat loss, types of treadmills, outdoor use (quoting ProForm's
  and Sole's manuals, both of which say indoors only), Trimline (a discontinued US brand), and
  where-to-buy pages for Wayfair and Scheels.

The Amazon pipeline matched 14 more products (62 stored). Fourteen existing specs gained contextual
links; `/walking-pad-buying-guide/` now gives pad belts as 34 to 48 in.

Found and not yet changed: `/nordictrack-new-commercial-1750-treadmill/` duplicates the 1750 page
with the old figures, testing claims and an invented aggregateRating (4.6 from 892 reviews); and 34
hand-written pages still emit `aggregateRating` from invented `rating`/`reviewCount` values in their
JSON-LD — the policy breach described under "Pages awaiting data".

### Second keyword batch (2026-10-14): thirty-three pages and three updates

Written against a second supplied keyword list, on the same rules as the first. Keywords an
existing page already owns were mapped to it.

- **Brand guides**: Landice, Spirit, Star Trac, LIVESTRONG (discontinued; the LS10.0T), Gold's Gym
  (no current treadmill could be found — the ICON licence ended in 2019), LifeSpan, Reebok (no
  treadmills on Reebok's US store), MaxKare and Famistar (marketplace brands; listing claims only).
- **Reviews**: NordicTrack Commercial 1250 (NTL14125: 3.6 CHP, 22 x 60 in., 400 lb, confirmed),
  T Series, EXP 7i (no longer in the US range), ProForm Carbon Pro 9000 and Carbon TLS, Horizon
  7.0 AT (with a dated sale-price section), Bowflex T16, Life Fitness Run CX and Integrity, Matrix
  T5x (sold remanufactured), iMovR Unsit, Redliro, Goplus 2-in-1 (the SuperFit behind the long
  listing title), Pro 6 Arcadia, TKO AirRaid (the 8CTM, now sold as the AirRaid Force), NOHrD
  Sprintbok and SB Fitness CT700.
- **Guides**: packing a treadmill, finding repair near you, anti-gravity (AlterG) treadmills,
  underwater treadmills for dogs, cracked decks, and a large-dog treadmill roundup.
- **Updates**: Sole F80 and F85 published (above); `/horizon-t101-treadmill/` re-verified — motor
  claim removed, the 2022 T101-05 recall and the August 2026 civil penalty added from cpsc.gov,
  and a manual section.

Also: Sole warranty wording corrected on three roundups (labour is one year, not 90 days);
`/best-treadmill-desks/` no longer calls WorkWhileWalking independent (it was founded by iMovR's
chief executive); `/matrix-fitness/` carries a notice of the January 2026 recall of Matrix T30,
TF30, T50, TF50 and T75 treadmills (power cord, fire hazard). Twenty roundup cards gained
`reviewUrl`s, sixteen pages gained contextual links, and four more products matched exact Amazon
listings (65 stored).

Found and not yet changed: `/best-dog-treadmills/`'s two top picks (dogPACER LF 3.1 and 4.0) appear
unavailable in the US, and its GoPet PR720F and Dog Trotter details are out of date;
`/nordictrack-commercial-1250-vs-1750/` and `/best-nordictrack-treadmills/` still list the 1250's and
1750's motor, deck and capacity as unconfirmed; `/matrix-fitness/` still describes the T7xe as the
only home model; `/life-fitness/` omits the Run CX and Integrity.

### Affiliate roundups, third batch: twenty "best" pages (2026-10-15)

Same rules as the first two batches: products confirmed as currently sold, every printed figure
cross-checked between the maker (or the Amazon listing) and an independent source, conflicting
figures left off the cards, a CPSC recall check per brand (via the saferproducts.gov recall API),
no testing claims, no ratings, tagged Amazon search links, and the affiliate disclosure in each note.
Semrush had no API units left, so topics were chosen on coverage gaps rather than fresh volumes.

- `/best/`: non-folding, garage, HIIT, marathon training, wide (22 in.) decks, Apple Watch / GymKit,
  quiet walking pads
- `/price/`: budget treadmills, one pick per realistic budget band, linking every tier page
- `/guides/` Accessories: foot pods, headphones, fans, surge protectors, tablet holders, covers,
  cleaning products, anti-vibration pads
- `/training/`: running watches, workout apps (no product cards — apps are not Amazon products),
  fitness trackers for a walking pad, weighted vests

The shared web-search allowance ran out partway through, so several writers finished by fetching
maker pages, manuals and spec sheets directly. Some pages list fewer than five products as a result
(surge protectors, covers, fans) and say why. Findings worth knowing:

- The 2026 Sole F80 manual and the Bowflex T6/T9 manuals void the warranty for garage use; the garage
  page quotes them and excludes those machines.
- `/best-treadmills-under-800/` listed the Sole F63 with a 55 in. deck; corrected to 20 x 60 in.
  That page still carries older "we tested" wording.
- `/nordictrack-commercial-2450-treadmill/` still describes the 12 mph version; NordicTrack now lists
  14 mph. Eight roundups link to it. It needs a rewrite.

### Home Gym hub: fourteen commercial pages (2026-10-16)

A new section hub, `/home-gym/`, for commercial-intent keywords beyond treadmills. Every treadmill
keyword on the supplied list already had a page, and informational queries ("how to set up a home
gym") and the protein-powder review (a nutrition product, outside this site's scope) were not
written.

- **Start here**: home workout equipment reviews (pillar: best pick per category, equipment types,
  how to read an equipment review), commercial gym equipment
- **Cardio machines**: best cardio machines for home, best ellipticals
- **Strength**: squat racks (with 2x3 vs 3x3 uprights), lifting platforms, cable machines, converging
  chest press machines, adjustable dumbbells (with a recall-check section)
- **Recovery, boxing & accessories**: recovery tools, boxing equipment, home gym accessories
- **Product reviews**: GymProLuxe (a verifiable UK seller; conflicting return terms reported as
  such), LifePro Waver vibration plate (health claims presented as the seller's)

Same product rules as the treadmill roundups. Strength pages cover anchoring, safeties and floor
loading; recovery, boxing and strength pages carry the not-medical-advice scope note. Recall checks
used the saferproducts.gov API: query by `RecallTitle=`, `Manufacturer=` or `RecallDescription=`
(with `RecallDateStart`), not `ProductName=`, which matches product names and misses brand recalls.
Exclusions on safety grounds include BowFlex SelectTech 552/1090 dumbbells (June 2025, stop using),
several other recalled adjustable dumbbell sets, the NordicTrack RW900 rower and the original Peloton
Bike+ (PL02). `/bowflex/` also had a leftover "No Treadmills in This Lineup" badge and a "0 treadmills"
stat from before its October correction; both fixed.

### Bing & DuckDuckGo compliance pass (2026-10-17)

DuckDuckGo sources traditional results largely from Bing and also runs DuckDuckBot, so the site was
audited against Bing's Webmaster Guidelines, whose abuse list includes misleading structured data,
thin affiliate pages and content that misrepresents the site. Changes:

- **Titles and descriptions** (`SEO.astro`): the " | Treadmill Reviews USA" suffix is dropped when
  it pushes a title past 65 characters; descriptions over 160 are trimmed at a sentence or word.
- **Structured data** (`SEO.astro` sanitiser, applied to every page): Product nodes never carry
  `aggregateRating`/`review`; an AggregateOffer without a price is dropped; Articles get an image,
  a publisher with a logo and `mainEntityOfPage`. Spec pages publish real `lowPrice`/`highPrice`
  read from the visible price range and an `ItemList` of the picks. The WebSite SearchAction (no
  search page exists) and the broken `/logo.png` reference were removed; `logo.png`,
  `og-default.png` and `publishingPrinciples` → `/editorial-standards/` added.
- **Trust signals**: the "Lab-Tested & Verified" badge became "Independent Buying Guide"; the
  invented "Join 3.9k others" line and stock avatars became a reader-supported disclosure; the
  placeholder author became Shaheer Ali Khan; the footer's "hands-on reviews" line and dead "About"
  link were fixed. A new `/editorial-standards/` page explains choosing, checking, testing,
  affiliate income and corrections.
- **Content honesty**: 123 files were reviewed; invented test protocols, tester stats, timings,
  decibel and temperature readings and "we tested" claims without a real test behind them were
  removed or reframed. Invented customer review counts were removed; the scores were kept as
  clearly labelled editorial scores ("Our editorial score: 4.6/5") with no review counts and no
  rating markup.
- **Crawling**: sitemap `<lastmod>` is each page's real `dateModified` instead of the build time;
  noindex pages use `noindex, follow`; indexable pages carry `max-snippet:-1,
  max-image-preview:large`; `vercel.json` redirects slash-less URLs to the canonical slash form.
- **From the #1-ranking Bob Vila roundup**: top-picks box with jump links, product names as H3 and
  "What We Like / What We Don't Like" as H4, ItemList markup, and a "Meet the Author" box.

Still for the owner: verify the site in Bing Webmaster Tools (import from Google Search Console or
add the `msvalidate.01` code), write a privacy policy for the footer link, and set the apex domain
to redirect straight to `https://www.` in Vercel (it currently takes two hops).

### Keyword batch (2026-10-18): twelve pages

Written against a supplied keyword list of 104 rows, stored with its page mapping in
`research/keyword-batches/2026-10-18.csv`. 81 rows already had an owning page (cost, best
treadmill, home use, brands, where to buy, buyer's guides, elliptical and bike comparisons,
turning on, dismantling, Best Buy, timing, Strava, fat-loss settings) and were mapped to it
rather than given a competing page. The other 23 rows became twelve pages:

- **Roundups** (`/best/`): best walking pads (six picks) and best portable treadmills (six
  picks sorted by checked unit weight). Products confirmed on sale and cross-checked on
  2026-10-18; conflicting figures, mostly motor ratings, left off the cards; CPSC checked per
  brand.
- **Where to buy** (`/price/`): Walmart (seller types and Walmart's 90-day / Marketplace 30-day
  return rules, read from its policy page), Home Depot (online only, budget vendors with one-
  to three-month warranties on the day), and where to buy a cheap treadmill (eight channels
  ranked by real cost).
- **Decisions** (`/guides/`): should I buy a treadmill (with a self-test) and what treadmill
  should I buy (a use-to-spec decision table consistent with the belt-size and horsepower
  guides).
- **Questions**: what treadmills gyms use (`/brands/`; no chain-specific brand claims, since no
  reliable source names them), how to start a Horizon treadmill (`/guides/`; from the T101-08,
  T202-06, 7.0AT-05 and 7.4AT-04 manuals), how to start running on a treadmill (`/training/`),
  what burns more calories, elliptical or treadmill (`/compare/`; 2024 Compendium METs), and how
  to build a dog treadmill (`/best/`; dog-powered slatmills and carpet mills at design level only,
  no motorized build, vet scope note).

Twenty-six existing pages gained contextual links into the batch.

Found while writing and not yet changed:

- Site-wide disagreements: weight-capacity margin (20–30 lb on `/treadmill-buying-guide-2026/`
  against at least 50 lb elsewhere), jogging deck size (18 x 50 in. in that page's FAQ against
  55 x 20 in. in the belt-size guide), the height at which runners need a 60 in. deck (5'8" on
  `/how-much-should-you-spend-on-a-treadmill/` against 5'10"), and typical return windows
  (30–90 days on `/treadmill-buyers-guide/` against 14–30 on `/treadmill-return-policies/`).
- `/treadmill-calories-burned/` uses the ACSM equations and gives running figures about 10%
  above the 2024 Compendium figures on `/elliptical-vs-treadmill-calories/`; the new page explains
  the gap.
- Stale walking pad details: `/best-quiet-walking-pads/` says the Z1 is on pre-order (in stock at
  $329 on 18 October); it and `/best-walking-pads-for-tall-people/` list a 230 lb A1 Pro that is no
  longer sold; `/best-walking-pads-with-handrail/` prices the Strol 2S Pro at $299.99 (UREVO
  showed $549.99).
- Remaining testing language: `/treadmill-buyers-guide/` ("We test and rank fold mechanisms"),
  `/commercial-treadmills/` ("We compared six…"), `/best-folding-treadmill-reviews/` ("We
  compared 7…", with unverified specs) and `/best-treadmills-for-small-spaces/` (a `how-we-tested`
  section, "around 250 lbs" figures, and walking pads put at 60–90 lb against 43–55 lb verified).
- `/life-fitness/` says its machines are in Equinox clubs, unsourced.
- `/horizon-fitness/` is still a `dataPending` draft and gives an unsourced 40–50 hour
  lubrication interval; Horizon's manuals say every 3 months or 150 miles.
- The Dog Trotter slatmill is priced differently on `/best-dog-treadmills/` and
  `/best-dog-treadmills-for-large-dogs/`.
- Breadcrumbs: `couch-to-5k-treadmill.mjs` has none (falls back to `/best-of/`);
  `/treadmill-belt-size-guide/` and `/treadmill-horsepower-guide/` point "Buying Guides" at
  `/best-of/`; `/treadmill-buying-guide-2026/` has a two-item trail ending in a slash-less URL.
- `scripts/build-articles.mjs <name>` matches spec names by substring, so building
  `best-walking-pads` also rebuilds its four siblings; pass `best-walking-pads.mjs` to build one.

### Home Gym roundups (2026-10-19): twenty "best" pages

Twenty buyer's guides for the highest-volume home gym and fitness product terms without an owning
page, chosen from a Semrush US pull on 2026-10-19 (`research/keyword-batches/2026-10-19-home-gym-roundups.csv`,
which also lists the high-volume terms deliberately skipped: supplements, general running and walking
shoes, workout headphones, compression socks). Every page sits in `/home-gym/`:

- **Cardio machines**: exercise bikes, recumbent bikes, rowing machines, under-desk ellipticals,
  rebounders, vibration plates (both added in a follow-up PR)
- **Strength**: home gym machines, weight benches, power towers, pull-up bars, resistance bands
- **Recovery, boxing & accessories**: massage guns, foam rollers, inversion tables, yoga mats,
  balance boards, jump ropes, gym flooring
- **Fitness tech** (new group): fitness trackers, smart scales

Same rules as the treadmill roundups: products confirmed as currently sold, figures cross-checked
between the maker (or the Amazon listing) and an independent source with conflicting figures left
off the cards, a CPSC check per brand and per category, no testing claims, no ratings, and the
affiliate disclosure in each note. Products were chosen for Amazon US availability. Health-adjacent
pages (massage guns, foam rollers, inversion tables, vibration plates, rebounders, balance boards,
smart scales, trackers, bands, jump ropes, recumbents) carry the not-medical-advice scope note, quote
contraindications from makers' manuals, and present health claims as the sellers'.

Research limits on the day, stated in each affected page's note: the shared web-search allowance ran
out partway through, after which writers fetched maker pages, manuals, review sites and the CPSC and
openFDA APIs directly; and Amazon pages were mostly unreadable (503s and bot checks), so Amazon
availability was often confirmed indirectly (maker links to Amazon, indexed listings, review sites'
Amazon links) and prices come from maker stores. Where an Amazon listing could not be confirmed, the
card says so. There are no Creators API credentials in the build environment, so buttons are tagged
searches; `npm run amazon:asins` can upgrade them to `/dp/` links later.

Exclusions on safety grounds include the Peloton Bike (PL01, May 2023) and Bike+ (PL02, November
2025) seat-post recalls, the NordicTrack RW900 rower (October 2025, console fire risk), and older
inversion table recalls (ICON 2007 and 2010, Stamina 2008, DICK'S Fitness Gear 2014–15). Two Sunny
seated ellipticals on `/best-under-desk-ellipticals/` are carded on Sunny's listing figures alone,
labelled as such, because no independent review exists.

Found while writing and not yet changed: `/best-cardio-machines-for-home/` prices the Schwinn IC4 at
$799 and the AirDyne AD7 at $999 (Schwinn showed $899 and $1,099 on 19 October);
`/best-boxing-equipment-for-home/` says Crossrope's Get Lean set is sold out (in stock on 19 October);
`/best-recovery-tools-for-weightlifters/` gives the Theragun Mini 150 min of battery where Therabody's
regional FAQ says about 120; `/best-home-gym-accessories/` links an REP AB-3000 2.0 Amazon listing
that shows unavailable (REP's own Amazon store listing B0BSNY8STP is buyable); `/treadmill-desk-guide/`
still carries "in our under-desk testing" claims. Fitbit Premium is now Google Health Premium.

### Premium-niche roundups (2026-10-19): thirty pages

Roundups for product niches where items usually sell for $100 or more, chosen from two Semrush US
pulls on 2026-10-19 for volume against keyword difficulty (mostly KD 35 or under;
`research/keyword-batches/2026-10-19-premium-niches.csv`, which also lists the high-volume terms
skipped for difficulty or price). All sit in `/home-gym/`:

- **Cardio machines**: exercise bikes for seniors, ellipticals for seniors, recumbent ellipticals,
  air bikes, compact ellipticals, folding exercise bikes, vertical climbers
- **Strength**: barbells, bumper plates, weight plates, trap bars, safety squat bars, folding squat
  racks, Smith machines, leg press, hack squat, leg extension and hip thrust machines, adjustable
  kettlebells, dumbbell sets, plyo boxes
- **Recovery, boxing & accessories**: compression boots, zero-gravity massage chairs, punching bags

The last six (smart home gyms in Strength; Peloton alternatives and smart bike trainers in Cardio
machines; home saunas, outdoor saunas and cold plunges in Recovery) followed in a second PR, which also
restored the two links repointed for the first. Sauna and cold plunge pages quote makers' manuals for
contraindications and electrical requirements (dedicated circuits, 240V/30A heaters, GFCI chillers);
exclusions include Amp (CPSC stop-use recall, December 2025), the Sauna360 infrared sauna recall
(September 2026) and Edge Theory Labs (out of business).

Same product rules as earlier roundups. Much of this category is sold direct (Rogue, REP, Kabuki,
Bells of Steel, Force USA, Steelflex, VersaClimber, CLMBR, Nautilus commercial): those products get
tagged category searches labelled "Shop Similar on Amazon" via `src/data/amazon-fallbacks.json`.
`scripts/build-articles.mjs` now appends `tag=sktiger-20` to any Amazon URL a spec gives without it,
so a generated page cannot carry an untagged Amazon link. Web searches were rationed to twelve per
writer; the rest of the checking used maker stores and product JSON, manuals, review-site sitemaps
and the CPSC API (which intermittently errors on short brand names; adding `RecallDateStart` or using
the full name works).

Found while writing and not yet changed: `/best-cardio-machines-for-home/` prices the AirDyne AD7 at
$999 and the Max Trainer M6 at $999 (Schwinn showed $1,099 and BowFlex $1,299 on 19 October), and now
could print the M6's 16 levels and 46 x 26 x 64.2 in.; `/best-squat-racks-for-home-gym/` says the PRx
Profile PRO is BarBend's best folding rack (BarBend's current guide names the REP PR-4100);
`/best-recovery-tools-for-weightlifters/` gives the Normatec 3 "up to 3 hr" of battery where the
operating instructions say 2+ hours; `/best-adjustable-dumbbells/` gives the BowFlex 552/1090 recall as
3.8 million units where the CPSC title says 3.7 million sold by Nautilus.

### Buyer's guides (2026-10-20): nine pages from a Search Console export

Nine buyer's guides written against a Search Console keyword export (2026-10-20). The full
keyword-to-page mapping, including what was skipped and why, is in
`research/keyword-batches/2026-10-20-buyer-guides.csv`; most of the 140 terms already had a page.

- `/brands/`: `/peloton-tread/` (the October 2026 Tread Flex, Tread Vision and Tread+ Vision range),
  `/deer-run-treadmill/`, `/echelon-treadmills/` (Cross-shopped alternatives); `/precor-treadmills/`,
  `/technogym-treadmills/`, `/true-fitness-treadmills/`, `/woodway-treadmills/` (Commercial brands)
- `/best/`: `/wooden-walking-pad/` (Walking & low-impact)
- `/home-gym/`: `/stepper-buying-guide/` (Cardio machines)

Same rules as the roundups: figures cross-checked against the maker plus an independent source on
20 October 2026, conflicting figures stated as conflicts and kept off cards, CPSC checked for every
brand, no testing claims or ratings. Four guides (Deer Run, Precor, Technogym, wooden walking pads)
carry no product cards because too few figures could be cross-checked or the machines are not sold
on Amazon. Fixes made along the way: TRUE's headquarters (now St. Charles, MO) on
`/what-treadmills-do-gyms-use/`, the Technogym Skillmill's US listing on `/best-curved-treadmills/`,
and the membership-dependent Echelon warranty on `/best-smart-treadmills/`. Still flagged, not
corrected: `/best-peloton-alternatives/` quotes All-Access at $44 and App+ at $24, which appear to
predate Peloton's October 2025 price rise; Peloton's site showed no current price to confirm against.

### Sole F80 and F85

Both were shipped first as `dataPending` editorial drafts because their published figures conflict
across generations. On 2026-10-14 both were re-verified against Sole's own 2026 listings (item
numbers F80-2026 and F85-2026) plus independent coverage, and **published**: every figure on each
page is now either confirmed by Sole and at least one independent source, or set out in a table of
conflicting figures with the source of each. Each page explains the three versions sold under the
name. `dataPending` is gone, so both are indexed, in the sitemap and linked from `/reviews/` and
`/best-sole-treadmills/`. Their Amazon buttons stay on tagged search links (`VERSION_UNCLEAR` in
`scripts/amazon/lib.mjs`) because no Amazon listing could be tied to the 2026 version.

All outbound product links use Amazon search URLs tagged with the `sktiger-20` Associates ID (`rel="sponsored nofollow noopener"`). Swap in real ASIN/product links and product photography as they become available. Product specs on the newly recreated pages are editorial approximations in the site's existing style (same convention as the original flagship guides) — verify against manufacturer data before treating any number as authoritative.

## Amazon product links

Product buttons link straight to the Amazon listing (`/dp/<ASIN>?tag=sktiger-20`) when the product
has a verified ASIN, and fall back to a tagged Amazon search otherwise, so every click is credited
either way. ASINs come from the Amazon Creators API, following the pipeline used on The Honest
Reviewers:

```bash
npm run amazon:asins   # search Amazon for each product name; record confident matches
npm run amazon:apply   # write /dp/ links into hand-written pages and regenerate spec pages
```

- **Credentials** live in a git-ignored `.env`: `AMAZON_CREATORS_CLIENT_ID`,
  `AMAZON_CREATORS_CLIENT_SECRET`, `AMAZON_CREATORS_VERSION` (3.1), `AMAZON_CREATORS_PARTNER_TAG`
  (`sktiger-20`). Never commit them; the build itself needs neither the credentials nor the network.
- **Matching is strict** (`scripts/amazon/lib.mjs`): the brand and every model-number token must
  appear in the Amazon title; variant words (Pro, Plus, Max, Lite, Connect, Carbon, AV…) must agree
  on both sides; and titles naming a part or a different machine (cover, belt, replacement,
  compatible, remote, bike, wheel…) are rejected unless the product name itself uses the word. The
  first unfiltered run matched replacement belts, covers and power cords to the machines they fit,
  and a Strol 2E to the Strol 2E Pro; each rule exists because of a real false match.
- `src/data/product-asins.json` holds name → ASIN, the Amazon title it was matched on and the date.
  `scripts/amazon/asin-report.json` lists every product with the outcome and, for rejections, the
  top Amazon title, so a near-miss can be checked by hand.
- First run (2026-10-13): 48 of 141 products matched, giving 120 direct links; the rest are mostly
  dealer-only machines (Woodway, TrueForm, dogPACER), discontinued models, or products Amazon lists
  under a name that does not carry the model number, and keep their search links.
- Second run (2026-10-16), over the 200 products added since: 55 matches accepted by the matcher,
  41 kept after a hand review of every accepted title. The 14 rejected were a book, a cement set
  matched to a cast-iron one, an older model, a coax variant, bundles, a refurbished and a
  limited-edition listing, and listings for a different size or configuration from the one the page
  prices. They are in `HAND_REJECTED` in `scripts/amazon/lib.mjs`, and renewed/refurbished titles
  are now rejected automatically. 106 of 320 products have a verified ASIN (194 direct links); the
  rest keep tagged search links, mostly because they are sold direct (Rogue, REP's own range,
  Nike Strength, Hammer Strength, FightCamp) or not on Amazon US at all.
- Products Amazon US does not carry get a tagged **category search** instead of a search for their
  own name, which returned nothing useful (`src/data/amazon-fallbacks.json`, 69 products: Rogue
  racks → "power rack", dealer chest presses → "plate loaded chest press machine", dog treadmills →
  "dog treadmill", and so on). Those cards say "Shop Similar on Amazon" rather than "Check Price",
  so the button is honest about where it goes. Products Amazon does carry under their brand keep
  their exact-name search.

- Third run (2026-10-17), over the 212 still unmatched: 2 new matches (Schwinn 810, Isolate It!
  Sorbothane 4 x 4 in. pad), both checked by hand. `apply-hand-pages.mjs` also had a bug where a
  product that already had a direct link hid the next product's search link from the swap; fixed,
  which also moved three Sole F65 cards onto their stored ASIN.
- Every "Check Price on Amazon" button goes to Amazon. The 18 single-product reviews that still
  pointed their hero button and mobile sticky bar at the page's `#cta` anchor now link to
  `PRODUCT.amazonUrl` directly, and the sticky bar gets `rel="sponsored nofollow noopener"` for
  Amazon links (in-page anchors no longer open a new tab).

## Keyword research

`research/competitor-keywords/` holds the supplied competitor exports verbatim, with a README
covering provenance, which columns are verified and which are assumed, and the gap analysis
against our current pages. It is data, not site content — nothing under `research/` is built,
linked or validated. New pages that exist because of a keyword gap should be traceable back to
a row in there.

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
- Author: Shaheer Ali Khan, PhD (Exercise Physiology & Biomechanics Specialist; PhD Kinesiology, University of Michigan; ACSM-EP, CSCS, ACSM-CPT). Bylines link to `/editorial-standards/#who`, which carries the full credentials and the Person JSON-LD (`hasCredential`, `alumniOf`); article Person nodes reference it by `@id` and list LinkedIn in `sameAs`. Pages only claim hands-on testing where a real test was done; publish real lab results (photos, method, figures) on a page before claiming them.

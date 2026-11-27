# Daily Publishing Playbook — 2 articles a day (1 Amazon roundup + 1 question page)

Written 2026-11-19 from the Bing Webmaster Tools "Search Performance" export (19 Aug – 17 Nov 2026)
and the git history. The scheduled daily run reads this file first and follows it exactly.

## 0. Data step: every run starts here (added 21 Nov 2026)

**Volume (from 22 Nov 2026): six articles a day, three for Bing and three for DuckDuckGo.** The owner asked for
three per engine. DuckDuckGo uses Bing's index but its visitors land on different page types (DDG: roundups,
model and brand reviews, deals; Bing: cost pages, explainers, deals, fixes), so each engine gets its own lane in
`PERFORMANCE.md` ("Today's six picks"): one money-lane page (roundup or brand, the affiliate pages) and two
traffic-lane pages per engine, ranked by that engine's type index, with no page type used more than twice in a day.
Write all six to the full standard in §2; if time runs short, ship fewer complete pages rather than six thin ones,
and say so in the PR.

The run decides what to write from fresh data, not from this file's older analysis. Before picking topics:

1. **Pull Vercel analytics for every search engine** with the Vercel MCP tool `aggregate_pageviews`
   (project `prj_aVSShsaH02dbYTHUoqcp35Uvz0I5`, team `team_pAoikpyeUpvHszE2JvWQKq7c`):
   - `by: ["referrerHostname"]`, last 7 days: record visitors per engine in the PR description.
   - `by: ["requestPath"]`, `limit: 100`, filter
     `referrerHostname in ('duckduckgo.com','bing.com','cn.bing.com','search.yahoo.com','uk.search.yahoo.com','ca.search.yahoo.com','au.search.yahoo.com','google.com','ecosia.org','msn.com','search.brave.com','startpage.com','yandex.ru','alice.yandex.ru','m.baidu.com','sogou.com','kagi.com','noai.duckduckgo.com')`
     (the list in `scripts/perf-save-vercel.mjs`), for the last 7 full days. Add any new search referrer that appears in the referrer breakdown.
   - Then the same `requestPath` pull twice more, once with `referrerHostname eq 'duckduckgo.com'` (save with
     `--source duckduckgo`) and once with `referrerHostname in ('bing.com','cn.bing.com','msn.com')` (save with
     `--source bing`). These per-engine pulls drive the two lanes.
   - Save it: write one `path visitors pageviews` line per row (skip "Others") to a scratch file and run
     `node scripts/perf-save-vercel.mjs --start <D-7> --end <D> --source search-all <file>`. On Mondays also pull the
     previous 7 days if that window is missing, so the week-on-week comparison always has two windows.
2. **Pull Bing**: if `BING_WEBMASTER_API_KEY` or `apikey` is set (the owner saved it as `apikey`), run `node scripts/bing-fetch.mjs` (keywords, page stats and daily
   totals from the Bing Webmaster API). If it is not set, say so in the PR; data then comes only from uploads.
3. **File uploads**: `node scripts/perf-ingest.mjs` picks up any CSV the owner uploaded (Vercel top pages, Bing keyword
   report, Bing overview, Bing AI queries and AI pages).
4. **Rebuild the report**: `node scripts/perf-report.mjs` writes `PERFORMANCE.md`. Read its "Instructions for today's run"
   and follow them: write the six **PICK**s under "Today's six picks" (3 Bing, 3 DuckDuckGo), defer queue items whose type is DOESN'T, expand rising pages,
   and make one CTR fix from the page-one-no-clicks lists.
5. **Keep dates honest**: `node scripts/sync-lastmod.mjs --write` before the build, so every changed page's
   `dateModified` and sitemap `<lastmod>` move with its content (Bing flagged stale lastmods on 21 Nov).
6. **Say what the data said** in the PR: visitors by engine, the type verdicts that drove today's picks, and anything
   deferred. Commit the data folder and `PERFORMANCE.md` with the articles.

IndexNow now submits only the pages changed in each push (Bing warned against batch mode). Put `[skip indexnow]` in the
message of any commit that only bulk-updates dates or templates.

## 0a. Double down / stop rules (27 Nov 2026, Bing API + Vercel; Google ignored)

Source: Bing Webmaster API (`apikey`) page and keyword stats to 20 Nov plus daily totals to 25 Nov; Vercel search
landings 28 Oct to 27 Nov from DuckDuckGo, Bing, Yahoo, Ecosia, Brave. These rules sit on top of `PERFORMANCE.md`:
when the report and this section disagree, the report's fresher type verdicts win, the STOP rules below still apply.

**What brings the clicks (30 days, non-Google search visitors):**
`/how-much-does-a-treadmill-cost/` 120 (Bing pos 2.2, 12.3% CTR on its query), `/treadmill-black-friday-deals/` 79,
`/proform-treadmill-troubleshooting/` 59, `/best-incline-treadmills/` 52, `/treadmill-incline-percent-vs-degrees/` 46,
`/best-walking-pads-with-incline/` 35, `/treadmill-reviews-2026/` 35, `/best-treadmills-without-subscriptions/` 34,
`/best-walking-treadmills/` 30, `/lifesmart-treadmills/` 30, `/wellfit-tm037-treadmill/` 25, deals siblings
(walking pad 22, under $1000 16), fixes (burning smell 20, belt adjust 19, static shock 18, safety key 10).

**Double down:**
1. **Cost pages:** "how much does a <brand> treadmill cost" for every brand with a brand page, plus walking pad cost,
   treadmill repair cost, treadmill moving cost, cost to run a treadmill. The parent page is the site's #1 earner.
2. **Deals while the season lasts:** Cyber Monday and brand deal pages until 2 Dec, then "best time to buy" and
   January/after-Christmas sale pages. Retire or redirect season pages into the evergreen deals page after the sale.
3. **Fixes by brand and symptom:** the ProForm troubleshooting format for NordicTrack, Sole, Horizon, Bowflex,
   walking pads (error codes, belt slipping, not turning on, incline not working, speed surging).
4. **Attribute roundups** ("best <type> treadmills with/without <feature>"): incline, decline, no subscription,
   walking, seniors, cushioned work; add the next attribute only if it has a Bing query.
5. **Budget brand pages** (LifeSmart, WellFit, Yesoul, Horizon T101): cheap Amazon/Walmart brands beat premium brands.

**Stop (do not repeat):**
- **T1. No new reviews of premium single models without a Bing query.** NordicTrack Commercial 1750 (32 impr),
  X24 (27), Matrix T7xe (28), ProForm Power 995i (20), Gymproluxe (22) all have 0 clicks. Model reviews average
  0.64 visitors per page against 0.90 site-wide. A model review needs the model's name in the Bing keyword report.
- **T2. No workouts/training, home-gym accessory roundups or health/fitness questions** (5%, 3% and 0% hit rates).
- **T3. CTR before volume.** Bing impressions tripled (week of 16 Nov: 8,204; 23-25 Nov alone: 8,419) but clicks
  stayed ~30 a day, so CTR fell from ~3% to ~1.2%. Each run rewrites titles/descriptions of up to 3 pages with
  200+ impressions and CTR under 2% before writing new pages: `/treadmill-pace-and-speed-chart/` (976 impr, 0.9%),
  `/history-of-the-treadmill/` (453, 2.0%), `/horizon-t101-treadmill/` (267, 1.5%), `/treadmill-dimensions-space-requirements/` (215, 2.3%).
  Lead the title with the exact query and put the answer with a number in the description.
- **T4. A format is "proven" only after 14 days and 5+ live pages.** Do not clone a type off one or two clicks.
- **T5. Ignore Google-only demand.** A topic needs a Bing query, a Vercel landing on a sibling, or a WORKS type.

## 1. What the data says

Weekly totals (Bing, all engines it powers):

| Week of | Clicks | Impressions | CTR | What shipped that week or just before |
|---|---:|---:|---:|---|
| 17 Aug | 0 | 16 | 0.0% | — |
| 24 Aug | 3 | 67 | 4.5% | — |
| 31 Aug | 1 | 77 | 1.3% | — |
| 7 Sep | 3 | 242 | 1.2% | Site IA, 24 articles, training cluster + `/training/` hub (8 Sep) |
| 14 Sep | 8 | 401 | 2.0% | Model reviews, buy-intent pillar (15 Sep) |
| 21 Sep | 6 | 254 | 2.4% | Nothing published, so impressions fell |
| 28 Sep | 14 | 395 | 3.5% | — |
| 5 Oct | 21 | 882 | 2.4% | ~125 question/guide pages in 4 days (6–9 Oct) |
| 12 Oct | 42 | 1,416 | 3.0% | ~150 keyword-led pages and roundups (13–20 Oct) |
| 19 Oct | 51 | 1,890 | 2.7% | Search Console gap pages (20 Oct) |
| 26 Oct | 82 | 2,696 | 3.0% | **Site-wide interlinking (24 Oct)**, Markdown/llms.txt (25 Oct) |
| 2 Nov | 101 | 3,539 | 2.9% | 60 buying guides (5–6 Nov) |
| 9 Nov | 114 | 4,515 | 2.5% | Amazon photos on every card, redesign (9 Nov) |
| 16 Nov (2 days) | 65 | 1,664 | **3.9%** | **Titles and answer-first rewrites (13–16 Nov)**, seniors cluster (17 Nov) |

What made it work, in order of effect:

1. **Publishing steadily grows impressions.** Every week with a batch of new pages grew impressions.
   The one week with nothing new (21 Sep) dropped 37%. Impressions went from ~35/day to ~830/day.
2. **Title and answer-first rewrites doubled clicks.** Through the first half of November, CTR
   slid from 3.0% to 2.5% as new pages entered at low positions. After the 13–16 Nov changes
   (query-first titles of 50–65 characters, year only where it matters, a Short Answer up top,
   question pages retitled to the exact searched question, competing URLs merged), clicks
   averaged **32.5/day at 3.9% CTR**, against 16.3/day at 2.5% the week before. 17 Nov set a
   record: 38 clicks at 4.5%.
3. **Interlinking.** The week after every article was linked to its related articles (24 Oct)
   had the biggest week-on-week click gain to that point (+61%).
4. **Clusters, not one-offs.** The 17 Nov seniors batch (ten linked pages around one audience,
   each with a hub entry and interlink anchors) is the current house pattern.

Caveat: the export is site-level only. When a Pages or Queries export is available, check which
URLs drove the 16–17 Nov jump and reorder `queue.md` toward the winning clusters.

## 1b. What turns impressions into visitors (Vercel top pages, Nov 12-19)

234 visitors across 108 pages in the week. Grouped by page type:

| Page type | Pages with traffic | Visitors | Share | Visitors per page |
|---|---:|---:|---:|---:|
| "Best" roundups | 23 | 64 | 27% | **2.8** |
| Fixes and troubleshooting | 14 | 39 | 17% | **2.8** |
| Deals (Black Friday) | 5 | 11 | 5% | 2.2 |
| Brand and model pages | 40 | 75 | **32%** | 1.9 |
| Comparisons | 4 | 7 | 3% | 1.8 |
| General questions and guides | 22 | 38 | 16% | 1.7 |

Top pages: /proform-treadmill-troubleshooting/ (11), /best-treadmills-with-decline/ (10), /best-incline-treadmills/ (9),
/nordictrack/ (8 visitors, 98 views), /wellfit-tm037-treadmill/ (6), then /best-treadmills-for-zwift/,
/best-treadmills-without-subscriptions/, /horizon-t101-treadmill/, /how-to-lubricate-a-walking-pad/ and
/treadmill-static-shock/ (5 each).

**Doubling down.** The two daily lanes now follow the winners:
- **Money lane (`roundup-queue.md`)** alternates feature roundups ("best treadmills with X", like decline, Zwift and
  no-subscription) with Amazon-brand pages ("is <brand> any good", like Wellfit, Famistar and OMA).
- **Traffic lane (`queue.md`)** leads with brand troubleshooting (the ProForm page's siblings: NordicTrack, Sole,
  Horizon, Bowflex, Peloton, XTERRA, Schwinn), walking pad fixes and noise and symptom fixes. General question and health pages
  move below them, because they convert worst. The 17 Nov seniors pages were too new to show in this export;
  re-check them in the next one before writing more of that cluster.
- **Link to the winners.** Every new page links, in the body, to the closest top-10 page of its type above
  (e.g. a brand troubleshooting page links /proform-treadmill-troubleshooting/; a feature roundup links
  /best-treadmills-with-decline/ or /best-incline-treadmills/). That passes the new page authority from a page Bing already favours.
- **Re-rank monthly.** When a new top-pages export arrives, regroup it by type and reorder both queues.

## 1c. Only what works (Bing keyword report + Vercel, Nov 13-20)

**Where visitors come from:** DuckDuckGo sent 245 visitors and Bing 142 in the week. Both run on Bing's index,
so the Bing rules in §2 apply to both.

**Keyword report (1,374 keywords, 3,273 impressions, 359 clicks), by theme:**

| Theme | Impressions | Clicks | CTR | Verdict |
|---|---:|---:|---:|---|
| Incline / decline | 143 | 35 | 24.5% | Winner |
| Black Friday / deals | 98 | 23 | 23.5% | Winner (seasonal) |
| "Best" roundups | 104 | 22 | 21.2% | Winner |
| Speed / pace / calories | 121 | 25 | 20.7% | Winner |
| Cost / price | 561 | 67 | 11.9% | **Biggest click source** |
| Troubleshooting / fixes | 421 | 49 | 11.6% | Winner |
| Brand / model | 488 | 46 | 9.4% | Steady |
| Seniors | 587 | 6 | 1.0% | Impressions only; fix CTR, write no more |
| Walking pad how-to | 28 | 1 | 3.6% | **Parked** |
| Health questions | 18 | 2 | n/a | **Parked** |

- "how much does a treadmill cost" alone: 354 impressions, **45 clicks**, position 2.3. It is the #1 Bing landing page
  (21 visitors). The traffic lane now leads with its siblings: cost by type and by brand.
- "best walking machines for seniors": 526 impressions at position 6.6 and 0 clicks. Its meta description was rewritten to
  give the answer (top pick and price) on 20 Nov. No more seniors or health pages until they show clicks.
- **Rule:** the daily run writes only from the Active lists. Parked topics wait until a later export shows that type winning.

## 1d. Consistent growers (Vercel, 30 days Oct 21 - Nov 20, by week)

30-day totals: 4,651 visitors (+69%), 5,925 views. Referrers: DuckDuckGo 688 (+305%, rising every week), Bing 441 (+341%),
Yahoo 114, Google 40, Ecosia 35. All Bing-index engines, so §2 still applies. Ranked by trend, not total, because a big
30-day total can hide a page that is falling. Visitors per week, weeks starting Oct 19, 26, Nov 2, 9, 16 (Nov 16 is 5 days, scaled up to 7 after the arrow):

| Page | Weekly visitors | Verdict |
|---|---|---|
| /best-treadmills-without-subscriptions/ | 6, 8, 9, 17, 15→21 | Cleanest steady climb. **Expanded 21 Nov** |
| /proform-treadmill-troubleshooting/ | 9, 10, 19, 17, 15→21 | Steady. **Expanded 21 Nov** |
| /how-much-does-a-treadmill-cost/ | 15, 30, 23, 42, 21→29 | Biggest page, rising. **Expanded 21 Nov** |
| /best-treadmills-with-decline/ | 1, 0, 4, 7, 8→11 | Up every week. **Expanded 21 Nov** |
| /treadmill-horsepower-guide/ | 6, 8, 6, 11, 9→13 | Slow, steady. **Expanded 21 Nov** |
| /lifesmart-treadmills/ | 0, 0, 0, 8, 19→27 | Fastest riser. **Expanded 21 Nov** |
| /best-incline-treadmills/ | 3, 1, 17, 17, 12→17 | Jumped up and held. DuckDuckGo's #1 page (30) |
| /treadmill-squeaking-noise/, /treadmill-maintenance/ | 11→15; 4→15 last week | Rising late. Watch next export |
| /treadmill-black-friday-deals/ | 4, 7, 15, 13, 19→27 | Seasonal; drops after Cyber Monday |
| /treadmill-reviews-2026/ | 10, 12, 12, 17, 7→10 | **Falling.** Check titles and freshness |
| /treadmill-pace-and-speed-chart/, /best-treadmills-for-seniors/ | flat, then down | Falling |
| /best-treadmill-for-home-reviews/ | 16, 19, 7, 7, 0 | Not a loss: redirected into /best-treadmills-for-home/ (vercel.json) |

**Rule from this:** when a page climbs three weeks or more in a row, expand it (3-4 new sections answering what the
searcher asks next, 2-3 new FAQs, a new table, links to its cluster, a fresh `updated` date) before writing new
siblings. Do this check with each new export.

## 2. The exact format (copy this for every article)

Reference implementation: `src/content/articles/treadmill-speed-for-seniors.mjs` (question page)
and `src/content/articles/is-a-treadmill-good-for-seniors.mjs`. Open one and copy its shape:
same fields, same table markup, same link classes. Edit the spec, then generate the page
(`node scripts/build-articles.mjs <slug>`). Never hand-edit a generated `.astro`.

Checklist, every item required:

- [ ] **One URL per search.** Before writing, grep `src/content/articles/` and `src/pages/` titles
      and slugs for the target query. If a page already answers it, skip the topic and log it.
- [ ] **Title** = the searched question or phrase, word for word, at the front. 50–65 characters.
      A colon tail can add the payoff ("…: Timing, Speed and Blood Sugar"). **No year** on how-to,
      health, training, fix or explainer pages. Year `(2026)` only on buying guides, reviews, prices, deals.
- [ ] **Meta description** 110–160 characters that *gives the answer*, with a number in it
      ("Most seniors should start at 1 to 1.5 mph and build toward 2 to 3 mph."). Not a teaser.
- [ ] **Standfirst** answers the question in one or two sentences.
- [ ] **First section** `id: 'short-answer'`, heading `The Short Answer`: one bolded answer sentence,
      a 3–5 item bullet list of concrete ranges or steps, the "ask your doctor if…" line where
      health-adjacent, and one link to the closest sibling page.
- [ ] **6–9 further sections**, each answering a sub-question a reader would ask next. At least one
      table (`not-prose overflow-x-auto` wrapper, `min-w-[520px]` table, the `th`/`td` constants).
- [ ] **Real, named sources** for any health or physiology claim: author, journal or body, year
      (e.g. CDC, ACSM, AHA, ADA, NIH, named meta-analyses). Never invent a study, figure or quote.
      If you cannot name the source, write the claim as general guidance or leave it out.
- [ ] **No testing claims.** We did not test anything. No "we tested", "in our testing", "we measured".
- [ ] **Health scope note** on health-adjacent pages: the site reviews equipment and is not giving
      medical advice; name who to ask (doctor, physical therapist, midwife, cardiac rehab team).
- [ ] **FAQ** 5–7 questions phrased as people search them; answers 2–4 sentences.
- [ ] **Common Mistakes**: 4 cards, each a concrete failure and its fix.
- [ ] **Related**: 3–6 cards to real pages, cluster siblings first.
- [ ] **Bottom line**: 2 paragraphs.
- [ ] **≥ 2,500 words** of prose (the build enforces it).
- [ ] **2–4 in-body links** to existing related pages, with `class="text-[#0F62FE] font-medium"`.
- [ ] `published`, `updated`, `updatedLong` set to the publish date.
- [ ] Product claims follow §2a. Never put a spec, price or capacity on a card that the Amazon
      listing (or the maker's own page) does not state.

## 2a. Amazon roundups (one a day)

Every day publishes **one roundup from `roundup-queue.md` and one question article from
`queue.md`**. Roundups earn the affiliate money; question pages bring the impressions.
Reference spec: `src/content/articles/best-walking-pads-on-amazon.mjs` (copy its `products` shape:
`id`, `name`, `category`, `badge`, `priceRange`, `specs`, `pros`, `cons`, `bottomLine`, `description`).

The Amazon Creators API credentials are in this environment (`AMAZON_CREATORS_*`). Use them:

1. `node scripts/amazon/search.mjs "<query>"`: shortlist 10–15 live listings with ASIN, title, price, photo.
2. `node scripts/amazon/item.mjs <ASIN> [...]`: read each candidate's brand, price and feature bullets.
   Pick 5–7 that are in stock, from a named brand, and genuinely different from each other
   (budget, best overall, heaviest capacity, with incline, and so on). Skip unbranded clones and
   listings with no clear specs.
3. Card `specs` and `pros` come **only** from the listing's title and bullets (or the maker's site).
   Write "per the Amazon listing" where it matters. `priceRange` is "About $X (Amazon, D Mon YYYY)",
   the price you saw today. Where sources conflict (motor HP is common), leave the figure off and say so.
4. Write the `name` of each product so it matches the listing (brand + model), then bind the ASINs:
   write a `picks.txt` with one `Product name | ASIN` per line and run
   `node scripts/amazon/add-asins.mjs picks.txt`. Check the titles it prints match your picks.
   Delete `picks.txt` afterwards. Then regenerate the page so cards get the photo and the `/dp/` link.
5. Still no testing claims: "Not tested hands-on; picked from listings, specs and owner reviews" is
   the honest method line. No `aggregateRating`, no star ratings, no invented review quotes.
6. Roundup title format: `Best <thing> (2026): <N> Picks <payoff>`, 50–65 characters. Open with the
   Short answer line naming the top three picks (the generator does this when the first pick has
   a real "Best ..." badge).

## 3. Publishing as a cluster

- Take the **next unchecked roundup** in `roundup-queue.md` and the **next unchecked topic** in
  `queue.md`. Link them to each other where it makes sense, and to their clusters.
- Add both to `src/data/sections.ts` in the hub group named in the queue. Create the group if the
  queue says "new group", following the seniors "Walking for older adults" group on `/training/`.
- Add an entry for each to `scripts/interlink-anchors.json` (1–5 specific phrases), then
  `node scripts/interlink.mjs --write`, so existing articles that mention the topic link in.
- Add a contextual link to each new page from the cluster's pillar page named in the queue.
  Edit the pillar's spec and regenerate it.

## 4. Gates before merging

```bash
npm run build
npm run audit:seo
```

The build must pass. Fix anything `audit:seo` reports for the two new pages. Then tick the two
topics in their queues with the date and slug, and add a line to `log.md`.

## 5. When the queue runs low

At 15 or fewer unchecked topics in either Active list, append 15–20 more (six are used a day) **of the winning types in §1c only**:
cost and price questions (by machine type and by brand), brand troubleshooting, noise and walking pad fixes, speed questions,
feature roundups and Amazon-brand pages. Check each against existing titles first. Never refill from a Parked list. When a
new Bing keyword report or Vercel export arrives, regroup it by theme as in §1c and re-rank both queues.

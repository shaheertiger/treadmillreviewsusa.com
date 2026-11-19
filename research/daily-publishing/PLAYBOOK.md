# Daily Publishing Playbook — 2 articles a day

Written 2026-11-19 from the Bing Webmaster Tools "Search Performance" export (19 Aug – 17 Nov 2026)
and the git history. The scheduled daily run reads this file first and follows it exactly.

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
- [ ] No product roundups or model reviews in the daily run. Those need verified specs and
      ASINs, which this run cannot check. Question and how-to pages only.

## 3. Publishing as a cluster

- Take the **next two unchecked topics** in `queue.md`. They are grouped by cluster, so a day's two
  articles usually share a cluster. Link them to each other.
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
topics in `queue.md` with the date and slug, and add a line to `log.md`.

## 5. When the queue runs low

At 10 or fewer unchecked topics, append a new cluster of 10–12 to `queue.md`. Use the same
selection rules: a question people search, no existing page targeting it, closest to the
clusters that performed best (walking, seniors and health-adjacent walking, walking pads,
treadmill problems).

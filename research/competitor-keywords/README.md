# Competitor keyword batches — treadmillreviews.net

Stored verbatim so the gap analysis behind new pages is auditable later, and so the same
batch is not re-pasted into a session to answer the same question twice.

## Source and provenance

- **Competitor**: `www.treadmillreviews.net`, the closest direct analogue to this site.
- **Export**: organic positions, supplied as two pasted batches (2026-09-15). Batch 1 is the
  19 highest-traffic rows; batch 2 is the next 71. The `batch` column preserves which is which.
- **Tool**: not stated in the paste. The column layout matches a Semrush organic-positions
  export, and the arithmetic is self-consistent (see below), but treat it as a supplied
  snapshot rather than a live pull.
- **Truncation**: batch 2 was cut off mid-row at the keyword `home treadmill reviews`, which
  carried no figures and is therefore not in the CSV. There are 90 rows.

## Columns

| Column | Meaning | Confidence |
|---|---|---|
| `batch` | Which paste the row came from (1 or 2) | Added here, not in the source |
| `keyword` | Query as exported | Certain |
| `position` | Competitor's ranking position for that keyword | Certain |
| `col_d` | Unlabelled numeric column, deliberately not named | **Unknown** |
| `traffic` | Estimated monthly visits from that keyword | Verified |
| `traffic_pct` | That keyword's share of the domain's organic traffic | Verified |
| `volume` | Estimated monthly search volume | Verified |
| `kd` | Keyword difficulty (0-100) | Assumed |
| `url` | Competitor page ranking for the keyword | Certain |

`traffic`, `traffic_pct` and `volume` are cross-checked rather than assumed: dividing traffic
by traffic share gives the same domain total (~354K/month) on every row tested, so those three
columns are correctly identified and internally consistent.

`col_d` is left unnamed on purpose. It is plausibly the previous position — it is worse than
the current position on nearly every row, which would read as across-the-board improvement —
but it could equally be a SERP-features count, and guessing wrong in a column heading is worse
than leaving it unlabelled. All figures are stored as plain integers (`1.3K` → `1300`), so the
CSV is sortable without parsing.

## What this batch says

The competitor's traffic is concentrated in two places, and they are not the same place.

**Head terms already covered.** `treadmill`, `folding treadmill`, `treadmill for home`,
`best treadmill`, `best treadmills for running`, `best treadmill for walking`,
`best cheap treadmill`, `best treadmill under 1000` — all of these resolve to pages we already
have. These rows are a ranking problem, not a content problem.

**Model and brand reviews are the real gap**, and they are the long tail that adds up: roughly
a third of the rows in batch 2 point at individual machines or brand hubs we have no page for.

### Gaps against our current pages

| Competitor page | Keywords in batch | Our coverage |
|---|---|---|
| `/horizon-t101-treadmill-review/` | 4 rows, ~3.8K traffic | None — `/horizon-fitness/` is a `dataPending` draft |
| `/sole-f80/`, `/sole-f85/` | 6 rows, ~8.0K traffic | Drafts, added this week, still `noindex` |
| `/proform-pro-5000/` | 3 rows | None — we have Pro 2000, 995i, 1295i |
| `/proform-505-cst/`, `/proform-smart-performance-800i/` | 2 rows | None |
| `/weslo-cadence-g5-9/` | 2 rows, ~2.1K traffic | No Weslo coverage at all |
| `/nordictrack-t-6-5-s/`, `/nordictrack-a2350-pro/`, `/nordictrack-c900-…/`, `/nordictrack-c950/` | 5 rows | None — we have C700/C990/C1650, 1750/2450/2950, X22i/X9i |
| `/bowflex-treadclimber-tc5000/`, `/…-tc100/` | 2 rows | None — we cover Max Trainer M5/M7 only |
| `/nautilus-t614/`, `/livestrong-…/`, `/epic-view-550/`, `/healthrider-…/`, `/woodway-…/`, `/smooth-fitness-…/`, `/trimline-…/` | 7 rows | Seven brands with no page |
| `/sole-f60-treadmill-folding/` | 1 row | None — we have F63, F65, and F80/F85 as drafts |
| `/buying-a-treadmill-from-costco/` | `treadmill costco`, 40.5K volume | None — a retailer-specific buying page |
| `/sales/black-friday/` | `treadmill black friday`, 9.9K volume | Partly: `/best-time-of-year-to-buy-a-treadmill/` and `/treadmills-for-sale/` |
| `/proform-treadmills-vs-nordictrack-treadmills-…/` | `nordictrack vs proform` | None — the IA already names this comparison as unwritten |
| `/portable-treadmill-reviews/` | `portable treadmill`, 14.8K volume | Partly: `/under-desk-treadmills/` |
| `/used-vs-new-treadmills/` | `used treadmill` | Covered: `/new-vs-used-treadmill/` |
| `/nordictrack-treadmill-reviews/`, `/proform-treadmill-review/`, `/sole-treadmill-reviews/` | 6 rows | Covered: `/nordictrack/`, `/proform-treadmill/`, `/sole-fitness/` |

**The caution that applies to every model-review row above**: these are exactly the pages that
cannot be written from search results. The Sole F80 and F85 drafts exist because published
specifications for those machines conflict across model years and sources, and the same will be
true of the Horizon T101, the ProForm 5000 and the NordicTrack C-series. A model review here
needs manufacturer data for a stated model year before it can ship indexed — see
"Pages awaiting data" in the root README.

**Two rows to ignore**: `perfect body girl` and `treadmill reviews 2020` / `best treadmill 2019`
are, respectively, off-topic and date-stamped legacy content. Neither is a target.

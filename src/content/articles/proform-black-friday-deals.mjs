const th = 'text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4';
const td = 'border-b border-gray-100 py-2 pr-4 text-gray-700';
const A = (href, text) => `<a href="${href}" class="text-[#0F62FE] font-medium">${text}</a>`;

export default {
  slug: 'proform-black-friday-deals',
  title: 'ProForm Black Friday Deals (2026): Treadmill Prices by Model',
  description:
    'ProForm on Amazon, 23 Nov 2026: Carbon TL $479, TLX $849, Carbon Pro 2000 $1,199, all unchanged from 22 Nov. Which prices beat October, plus iFIT at $15–$39/mo.',
  crumbLabel: 'ProForm Black Friday Deals',
  breadcrumb: { name: 'By Price', url: '/price/' },
  kicker: 'Black Friday 2026',
  updated: 'November 2026',
  updatedLong: 'November 23, 2026',
  published: '2026-11-23',
  socialProof: '1.2k',
  h1: ['ProForm Treadmill', 'Black Friday Deals 2026'],
  standfirst:
    'On Amazon on 23 November 2026 ProForm’s treadmills ran from $479 for the Carbon TL to $1,665.27 for the Pro 9000, every one the same price as the day before. None was labelled a Black Friday deal in the listing data we could see, but three of them, the Carbon TLS, Carbon TLX and Carbon Pro 2000, are well below what ProForm’s own site charged in October. Here is every price, which ones are real savings, and what iFIT adds on top.',
  ctas: [
    { label: 'Every ProForm Price', href: '#price-table' },
    { label: 'Is It a Real Deal?', href: '#real-deal' },
  ],
  tags: [
    'proform black friday',
    'proform black friday deals',
    'proform treadmill black friday',
    'proform carbon tlx black friday',
    'proform carbon pro 2000 black friday',
    'proform treadmill sale',
  ],
  stickyCta: { text: 'See Every ProForm Price', link: '#price-table' },
  lead: `ProForm is iFIT’s value brand, sister to NordicTrack, and its treadmills are among the cheapest folding
          machines with automatic incline and trainer-led classes. That makes it a natural Black Friday target, and
          also an easy brand to overpay for, because the sticker price is only half the cost: the classes need an
          iFIT membership of $15 or $39 a month. We checked every current ProForm treadmill on Amazon on 23 November
          2026 and compared each price with the one we recorded on 22 November and, where we have it, with what
          ProForm’s own site charged in October. ProForm’s site turned our request away with a security check on
          23 November, so the prices below are Amazon’s. Nothing here is a price we have guessed at, and every figure
          carries the date we saw it.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'The Short Answer',
      html: `          <p>
            <strong>On Amazon on 23 November 2026 the ProForm range cost $479 (Carbon TL), $559.30 (Carbon TLS), $849
            (Carbon TLX), $1,199 (Carbon Pro 2000), $1,599 (Carbon Pro 9000) and $1,665.27 (Pro 9000), exactly what each
            cost on 22 November.</strong> The listings did not label any of them a Black Friday deal in the data we
            could see, so treat these as today’s prices. The real savings are against ProForm’s own October prices.
          </p>
          <ul>
            <li><strong>Biggest saving we can show:</strong> the Carbon TLX at $849, against $1,299.99 on ProForm’s site
            on 13 October, about $451 less.</li>
            <li><strong>Best touchscreen value:</strong> the Carbon Pro 2000 at $1,199, about $101 under ProForm’s
            $1,299.99 on 13 October.</li>
            <li><strong>Cheapest:</strong> the Carbon TL at $479, a walking treadmill (10 mph, 10% incline on its
            listing).</li>
            <li><strong>Not a deal on our records:</strong> the Carbon Pro 9000 at $1,599, about what ProForm’s own site
            showed on 13 October.</li>
            <li><strong>Add iFIT:</strong> $15 a month (or $144 a year) for Train on the Carbon TL, TLS and TLX; $39 a
            month (or $396 a year) for Pro on the touchscreen models, per iFIT’s membership page on 23 November.</li>
          </ul>
          <p>
            For the model-by-model price guide outside sale weeks, see
            ${A('/how-much-does-a-proform-treadmill-cost/', 'how much a ProForm treadmill costs')}; for deals across
            every brand, our ${A('/treadmill-black-friday-deals/', 'Black Friday treadmill deals')} guide.
          </p>`,
    },
    {
      id: 'price-table',
      heading: 'Every ProForm Treadmill’s Price, 22 vs 23 November',
      navLabel: 'Price by model',
      html: `          <p>
            The table gives each model’s Amazon price on 22 November 2026, when we priced the range for our ProForm cost
            guide, and again on 23 November, four days before Black Friday. The October column is the price on
            ProForm’s own US site, or another named retailer, from our earlier checks; a dash means we had no earlier
            dated price.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[680px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Model</th>
                <th class="${th}">Amazon, 22 Nov</th>
                <th class="${th}">Amazon, 23 Nov</th>
                <th class="${th}">Change</th>
                <th class="${th}">Earlier dated price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">Carbon TL</td><td class="${td}">$479</td><td class="${td}">$479</td><td class="${td}">None</td><td class="${td}">–</td></tr>
              <tr><td class="${td}">Carbon TLS</td><td class="${td}">$559.30</td><td class="${td}">$559.30</td><td class="${td}">None</td><td class="${td}">$1,099.99 ProForm, 13 Oct; $799.99 Scheels, 14 Oct</td></tr>
              <tr><td class="${td}">Carbon TLX</td><td class="${td}">$849</td><td class="${td}">$849</td><td class="${td}">None</td><td class="${td}">$1,299.99 ProForm, 13 Oct</td></tr>
              <tr><td class="${td}">Carbon Pro 2000</td><td class="${td}">$1,199</td><td class="${td}">$1,199</td><td class="${td}">None</td><td class="${td}">$1,299.99 ProForm, 13 Oct</td></tr>
              <tr><td class="${td}">Pro 2000 (older model)</td><td class="${td}">$1,259.69</td><td class="${td}">$1,259.69</td><td class="${td}">None</td><td class="${td}">–</td></tr>
              <tr><td class="${td}">Carbon Pro 9000</td><td class="${td}">$1,599</td><td class="${td}">$1,599</td><td class="${td}">None</td><td class="${td}">About $1,600 ProForm, 13 Oct; $1,799 Nebraska Furniture Mart, 14 Oct</td></tr>
              <tr><td class="${td}">Pro 9000 (older model)</td><td class="${td}">$1,665.27</td><td class="${td}">$1,665.27</td><td class="${td}">None</td><td class="${td}">–</td></tr>
              <tr><td class="${td}">Carbon T7 (older model)</td><td class="${td}">Not checked</td><td class="${td}">$1,399.99</td><td class="${td}">n/a</td><td class="${td}">–</td></tr>
            </tbody>
          </table></div>
          <p>
            Prices from each model’s Amazon listing (ASINs in the cards below) on the dates shown. Not one price moved
            between 22 and 23 November, which tells you something on its own: whatever discount these prices contain was
            already in place before Black Friday week began. Amazon’s listing data did not carry a deal or Black Friday
            label for any of them when we checked. If a price drops between now and 27 November, judge it against this
            table, not against a list price on the listing.
          </p>`,
    },
    {
      id: 'ifit-cost',
      heading: 'The iFIT Cost on Top of the Price',
      navLabel: 'iFIT membership cost',
      html: `          <p>
            Every ProForm here works as a plain treadmill without a membership: you press start and set the speed and
            incline yourself. The membership is what unlocks the trainer-led classes that change the speed and incline
            for you, SmartAdjust, ActivePulse heart-rate control (with a Bluetooth strap sold separately) and, on the
            Carbon listings, iFIT’s AI Coach. Which tier you need depends on the screen.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[560px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">iFIT tier</th><th class="${th}">Monthly</th><th class="${th}">1 year / 2 years / 3 years</th><th class="${th}">ProForm models</th></tr></thead>
            <tbody>
              <tr><td class="${td}">iFIT Train</td><td class="${td}">$15</td><td class="${td}">$144 / $249 / $329</td><td class="${td}">Carbon TL, TLS, TLX (phone or tablet on the device shelf)</td></tr>
              <tr><td class="${td}">iFIT Pro</td><td class="${td}">$39</td><td class="${td}">$396 / $699 / $899</td><td class="${td}">Carbon Pro 2000, Carbon Pro 9000, Pro 2000, Pro 9000 (built-in touchscreen)</td></tr>
            </tbody>
          </table></div>
          <p>
            Monthly prices and the regular one-, two- and three-year prices are from iFIT’s membership page on 23
            November 2026. iFIT describes Train as working on your phone or tablet with iFIT-ready equipment that has no
            built-in screen, and Pro as made for equipment with built-in touchscreens. The Carbon Pro 2000 and 9000 Amazon
            listings repeat the $39 a month figure and say Pro covers the whole household. We saw no Black Friday offer on
            the membership itself on that page; a multi-year promotion it described had expired on 10 September 2026.
          </p>
          <p>
            <strong>Why this matters at Black Friday.</strong> A $100 saving on a touchscreen ProForm is worth less than
            three months of iFIT Pro. If you are buying a Carbon Pro 2000 to use the classes, the five-year cost is decided
            far more by the membership than by the discount, as the five-year table further down shows. Our
            ${A('/is-ifit-worth-it/', 'is iFIT worth it')} guide weighs what the membership gets you.
          </p>`,
    },
    {
      id: 'picks',
      heading: 'The 7 ProForm Treadmills on Amazon This Black Friday',
      products: true,
      html: `          <p>
            These are the seven ProForm treadmills Amazon listed under ProForm’s name on 23 November 2026, ordered by how
            good a buy each is at today’s price. The specification line on each card comes only from the Amazon listing’s
            title and feature bullets on that date; where we quote ProForm’s own figures (from its US site on 13 October
            2026), we say so. We have not tested these machines hands-on: they are chosen from the listings, ProForm’s
            published specifications and the price history we have recorded.
          </p>`,
    },
    {
      id: 'real-deal',
      heading: 'Is ProForm’s Black Friday Price a Real Deal?',
      html: `          <p>
            A real Black Friday deal is a price lower than the one the machine has actually been selling for, not just
            lower than a list price nobody pays. We hold every model to that test, using only prices we recorded on a
            known date.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[600px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Model</th><th class="${th}">Earlier price we recorded</th><th class="${th}">Amazon, 23 Nov</th><th class="${th}">Verdict</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Carbon TLX</td><td class="${td}">$1,299.99 at ProForm, 13 Oct</td><td class="${td}">$849</td><td class="${td}">About $451 lower; a genuine saving</td></tr>
              <tr><td class="${td}">Carbon TLS</td><td class="${td}">$1,099.99 at ProForm, 13 Oct; $799.99 at Scheels, 14 Oct</td><td class="${td}">$559.30</td><td class="${td}">About $241 below the cheaper October price; a genuine saving</td></tr>
              <tr><td class="${td}">Carbon Pro 2000</td><td class="${td}">$1,299.99 at ProForm, 13 Oct</td><td class="${td}">$1,199</td><td class="${td}">About $101 lower; a modest real saving</td></tr>
              <tr><td class="${td}">Carbon Pro 9000</td><td class="${td}">About $1,600 at ProForm, 13 Oct</td><td class="${td}">$1,599</td><td class="${td}">Essentially the same; a fair price, not a new low</td></tr>
              <tr><td class="${td}">Carbon TL, Pro 2000, Pro 9000</td><td class="${td}">Only 22 Nov, the same as today</td><td class="${td}">See table above</td><td class="${td}">No evidence either way; today’s price</td></tr>
            </tbody>
          </table></div>
          <p>
            <strong>Two honest caveats.</strong> First, the October prices are from ProForm’s own site and from other
            retailers, not from Amazon. We do not have an October Amazon price for these models, so we can say the
            Amazon price today is lower than the price ProForm itself was charging, but not when Amazon’s price fell or
            whether it is the lowest Amazon has ever charged. Second, prices on 22 and 23 November were identical, so
            none of this is a price that appeared for Black Friday week; it was already there.
          </p>
          <p>
            <strong>What we would treat as a good ProForm price.</strong> At or below the 23 November Amazon prices in
            the table for the Carbon TLS, TLX and Pro 2000, which already beat ProForm’s October prices by $100 to $450.
            For the Carbon Pro 9000, $1,599 is a fair price but not a reason to hurry; a real Black Friday cut would take
            it clearly below $1,600. We will not guess at what ProForm or Amazon will do on 27 or 30 November. Our
            ${A('/treadmill-black-friday-deals/', 'Black Friday method guide')} explains how inflated reference prices
            work across brands.
          </p>`,
    },
    {
      id: 'which-model',
      heading: 'Which ProForm to Buy at These Prices',
      html: `          <p>
            The October-to-November changes are not even across the range, and they change which ProForm is the value
            pick. In October, on ProForm’s own site, the screenless Carbon TLX and the touchscreen Carbon Pro 2000 cost
            the same $1,299.99, which made the Pro 2000 the obvious choice. On Amazon on 23 November the TLX is $350
            cheaper, and that changes the answer for a lot of buyers.
          </p>
          <ul>
            <li><strong>Walking only, lowest price: Carbon TL at $479.</strong> 0–10 mph, 0–10% incline, a 5-inch LCD
            and a device shelf, per its listing. A walking and light-jogging machine; the listing does not state deck size
            or user weight.</li>
            <li><strong>Incline walking: Carbon TLS at $559.30.</strong> $80.30 more than the TL for <a href="/what-is-12-incline-on-a-treadmill/" class="text-[#0F62FE] font-medium" data-autolink>12% incline</a> instead of
            10% and one-press speed and incline buttons. ProForm gives it an 18 by 55-inch belt and a 300 lb rating.</li>
            <li><strong>Running, with your own tablet: Carbon TLX at $849.</strong> The cheapest ProForm with 12 mph, plus
            12% incline and a 7-inch LCD, per the listing. ProForm gives it a 20 by <a href="/best-treadmills-with-60-inch-deck/" class="text-[#0F62FE] font-medium" data-autolink>60-inch belt</a>. The value pick this week
            for anyone who runs.</li>
            <li><strong>Classes on a built-in screen: Carbon Pro 2000 at $1,199.</strong> The same 12 mph and 12% as the
            TLX, plus a 10-inch pivoting touchscreen. ProForm gives it a 350 lb rating against the TLX’s 300 lb. Worth the
            $350 step only if you will pay for iFIT Pro or need the higher rating.</li>
            <li><strong>A bigger screen: Carbon Pro 9000 at $1,599.</strong> A 16-inch screen for $400 more than the
            Carbon Pro 2000, with the same speed and incline on the listings.</li>
            <li><strong>Decline: Pro 9000 at $1,665.27.</strong> The only ProForm on Amazon here that goes to -3%, with a
            22-inch tilting screen. The older Pro 2000 also lists -3% to 12% for $1,259.69.</li>
          </ul>
          <p>
            For a ranking of the current range on ProForm’s own specifications, see our
            ${A('/best-proform-treadmills/', 'best ProForm treadmills')}, and for the brand as a whole, our
            ${A('/proform-treadmill/', 'ProForm treadmills guide')}. Full reviews:
            ${A('/proform-carbon-tls-treadmill/', 'Carbon TLS')}, ${A('/proform-carbon-pro-9000-treadmill/', 'Carbon Pro 9000')}
            and ${A('/proform-pro-2000-treadmill/', 'Pro 2000')}.
          </p>`,
    },
    {
      id: 'five-year',
      heading: 'The Five-Year Cost at Black Friday Prices',
      html: `          <p>
            The cheapest way to judge a ProForm deal is to add the membership you will actually pay for. The table uses
            the 23 November Amazon prices and iFIT’s regular yearly prices on the same day, with no price rises assumed.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[560px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Setup</th><th class="${th}">Treadmill</th><th class="${th}">iFIT, 5 years</th><th class="${th}">5-year total</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Carbon TL, no membership</td><td class="${td}">$479</td><td class="${td}">$0</td><td class="${td}">$479</td></tr>
              <tr><td class="${td}">Carbon TL + iFIT Train yearly</td><td class="${td}">$479</td><td class="${td}">$720</td><td class="${td}">$1,199</td></tr>
              <tr><td class="${td}">Carbon TLX + iFIT Train yearly</td><td class="${td}">$849</td><td class="${td}">$720</td><td class="${td}">$1,569</td></tr>
              <tr><td class="${td}">Carbon Pro 2000 + iFIT Pro yearly</td><td class="${td}">$1,199</td><td class="${td}">$1,980</td><td class="${td}">$3,179</td></tr>
              <tr><td class="${td}">Carbon Pro 2000 + iFIT Pro monthly</td><td class="${td}">$1,199</td><td class="${td}">$2,340</td><td class="${td}">$3,539</td></tr>
              <tr><td class="${td}">Carbon Pro 9000 + iFIT Pro yearly</td><td class="${td}">$1,599</td><td class="${td}">$1,980</td><td class="${td}">$3,579</td></tr>
              <tr><td class="${td}">Pro 9000 + iFIT Pro yearly</td><td class="${td}">$1,665.27</td><td class="${td}">$1,980</td><td class="${td}">$3,645.27</td></tr>
            </tbody>
          </table></div>
          <p>
            Two things stand out. On a touchscreen ProForm, five years of iFIT Pro costs more than the treadmill, so the
            $101 you save on the Carbon Pro 2000 this week is small beside the $1,980 to $2,340 membership. And the Carbon
            TLX with iFIT Train costs $1,569 over five years, less than a Carbon Pro 2000 with one year of iFIT Pro at
            $1,595. If you mainly want the classes and already own a tablet, the TLX route is the cheaper one by a wide
            margin. If you will never subscribe, compare the TLX with machines that need no subscription in our
            ${A('/best-treadmills-without-subscriptions/', 'treadmills without subscriptions')} guide.
          </p>`,
    },
    {
      id: 'older-models',
      heading: 'The Older ProForm Models Still on Amazon',
      html: `          <p>
            ProForm renames and retires treadmills often, and older models stay on Amazon after they leave ProForm’s own
            site. On 13 October 2026 ProForm’s US site listed only four treadmills: the Carbon TLS, Carbon TLX, Carbon Pro
            2000 and Carbon Pro 9000. Four of the machines on Amazon this week were not among them.
          </p>
          <ul>
            <li><strong>Carbon TL ($479).</strong> Not on ProForm’s site in October but still sold new on Amazon, with
            the same iFIT Train features as the TLS. A reasonable walking machine at this price.</li>
            <li><strong>Pro 2000 ($1,259.69).</strong> The earlier touchscreen model, not to be confused with the Carbon Pro
            2000. Its listing gives -3% to 12% incline, 0–12 mph, a 20 by 60-inch belt, a 300 lb user capacity, a 10-year
            frame, 2-year parts and 1-year labour warranty, and a 30-day iFIT membership included. It costs $60.69 more
            than the Carbon Pro 2000; the decline is the reason to choose it.</li>
            <li><strong>Pro 9000 ($1,665.27).</strong> The earlier flagship with a 22-inch tilting screen and -3% to 12%
            incline. Its listing does not state the deck size or user capacity.</li>
            <li><strong>Carbon T7 ($1,399.99).</strong> A 7-inch touchscreen, 0–10 mph, 0–10% incline and a 20 by
            55-inch belt, per its listing. At $200 more than the Carbon Pro 2000, which has a bigger screen, 12 mph and 12%
            incline, it is poor value at this price, so we have left it out of the cards.</li>
          </ul>
          <p>
            Older models are not bad buys by definition, but check which console and software they run, that iFIT still
            supports them, and who honours the warranty before you buy one. Our
            ${A('/proform-treadmill-troubleshooting/', 'ProForm troubleshooting guide')} covers the faults that show up most
            on the older consoles.
          </p>`,
    },
    {
      id: 'amazon-or-proform',
      heading: 'Amazon or ProForm.com: Where to Buy',
      html: `          <p>
            We could not compare the two on 23 November: ProForm’s site returned a security checkpoint page instead of
            its prices when we tried. What we can say is that in October ProForm’s own prices for the Carbon TLS, TLX and
            Pro 2000 were $100 to $540 above Amazon’s prices today. Before you buy from either, compare these four things,
            not just the headline price.
          </p>
          <ul>
            <li><strong>The delivered price.</strong> A folding treadmill arrives in one heavy box. Check what delivery
            includes and whether assembly is offered, and add it to the price.</li>
            <li><strong>Return terms.</strong> Our Carbon TLS review found that returns under ProForm’s 30-day trial cost
            $249.99 in return shipping, with delivery not refunded. Read the terms for the seller you use; a heavy
            treadmill is expensive to send back.</li>
            <li><strong>Bundled membership.</strong> The older Pro 2000 listing includes 30 days of iFIT. A month of iFIT Pro
            is $39, so value a bundle at that, not at the headline.</li>
            <li><strong>Warranty registration.</strong> ProForm’s warranty usually applies whichever authorised seller
            you use; register the treadmill with ProForm and keep the receipt.</li>
          </ul>
          <p>
            Our ${A('/treadmill-delivery-guide/', 'treadmill delivery guide')} compares curbside, threshold and in-room
            options, and what each costs in practice.
          </p>`,
    },
    {
      id: 'vs-nordictrack',
      heading: 'ProForm or NordicTrack This Black Friday?',
      html: `          <p>
            ProForm and NordicTrack are both iFIT brands and share the same Train and Pro memberships, so the iFIT
            arithmetic above is identical for both. The difference is the machine. NordicTrack’s Commercial models add
            heavier frames and, on some, decline and wider decks; ProForm’s Carbon range is lighter and cheaper. On Amazon
            on 23 November a Carbon TLX was $849 and a Carbon Pro 2000 $1,199, against prices from about $1,600 for
            NordicTrack’s <a href="/nordictrack-commercial-1250-treadmill/" class="text-[#0F62FE] font-medium" data-autolink>Commercial 1250</a> when we last checked it in October.
          </p>
          <p>
            If you walk or jog and want iFIT at the lowest outlay, ProForm is the better Black Friday buy. If you run
            hard or weigh close to a machine’s limit, look at NordicTrack. Our
            ${A('/nordictrack-black-friday-deals/', 'NordicTrack Black Friday deals')} page sets out its prices and the
            price at which we would buy each model, and ${A('/nordictrack-vs-proform/', 'NordicTrack vs ProForm')} compares
            the two brands model by model.
          </p>`,
    },
    {
      id: 'when-to-buy',
      heading: 'When to Buy: Now, Black Friday or Cyber Monday?',
      html: `          <p>
            Black Friday is Friday 27 November 2026 and Cyber Monday is 30 November. ProForm’s Amazon prices were already
            the same on 22 and 23 November, so the question is whether to buy at today’s price or wait for a further cut.
          </p>
          <ol>
            <li><strong>Buy now if your model is one of the genuine savings</strong>: the Carbon TLX, Carbon TLS or Carbon
            Pro 2000. Each is already $100 to $450 below ProForm’s October price, and freight treadmills can sell out in
            Black Friday week.</li>
            <li><strong>Wait on the Carbon Pro 9000.</strong> At $1,599 it is about what ProForm charged in October, so
            there is no evidence this is a limited-time price.</li>
            <li><strong>If you wait, keep this page’s table.</strong> Judge any Black Friday or Cyber Monday price against
            the 23 November figures, not against a list price. Our
            ${A('/cyber-monday-treadmill-deals/', 'Cyber Monday treadmill deals')} page covers what usually changes between
            Friday and Monday.</li>
          </ol>
          <p>
            If you are in no hurry at all, our guide to the
            ${A('/best-time-of-year-to-buy-a-treadmill/', 'best time of year to buy a treadmill')} covers the other sale
            windows in the year, including the new-year fitness season.
          </p>`,
    },
    {
      id: 'checklist',
      heading: 'Before You Click Buy: A ProForm Checklist',
      html: `          <ul>
            <li><strong>Check the exact model name.</strong> The Carbon Pro 2000 and the older Pro 2000 are different
            machines $60.69 apart; so are the Carbon Pro 9000 and Pro 9000. Make sure the screen, speed and incline you
            want are on the model in your basket.</li>
            <li><strong>Decide on iFIT first.</strong> If you will not pay for iFIT Pro, a touchscreen adds $350 or more for
            little. A Carbon TLX with a tablet runs iFIT Train for $144 a year.</li>
            <li><strong>Check the speed you need.</strong> The Carbon TL and TLS top out at 10 mph on their listings; runners
            should start at the TLX.</li>
            <li><strong>Measure the space and the doorways.</strong> All of these fold, per the listings, but they arrive
            as full-size treadmills in a large box.</li>
            <li><strong>Plan the outlet.</strong> Put the treadmill on a grounded wall outlet near where it will stand. Our
            ${A('/proform-treadmill-repair/', 'ProForm repair guide')} covers what to check if it will not start.</li>
            <li><strong>Screenshot the price and date.</strong> If the price drops again inside the return window, ask the
            seller whether it will adjust.</li>
          </ul>`,
    },
  ],
  products: [
    {
      id: 'proform-carbon-tlx',
      name: 'ProForm Carbon TLX',
      category: 'Biggest confirmed saving, and the runner’s pick',
      badge: 'Best Value',
      priceRange: '$849 (Amazon, 23 Nov 2026; $1,299.99 at ProForm on 13 Oct)',
      specs: '0–12 mph · 0–12% incline · 7 in. LCD + device shelf · ProShox cushioning · folding with hydraulic foot bar (Amazon listing)',
      pros: [
        'About $451 below ProForm’s own price on 13 October',
        'The cheapest ProForm with a 12 mph top speed',
        'Runs iFIT Train classes from your own phone or tablet at $15 a month or $144 a year',
        'ActivePulse heart-rate control and Strava, Garmin and Apple Health sync with Train, per the listing',
      ],
      cons: [
        'No built-in touchscreen',
        'The listing does not state the deck size or user weight; ProForm gives 20 x 60 in. and 300 lb',
        'Most connected features need the paid membership',
      ],
      bottomLine: 'The ProForm we would buy this week if you run, now that it costs $350 less than the Carbon Pro 2000.',
      description:
        'On ProForm’s own site on 13 October 2026 the Carbon TLX cost $1,299.99, the same as the touchscreen Carbon Pro 2000. On Amazon on 22 and 23 November it was $849, a saving of about $451 against that October price and $350 below the Carbon Pro 2000. Its Amazon listing gives 0 to 12 mph, a 0–12% incline, a 7-inch LCD with a device shelf, ProShox cushioning and a folding frame with a hydraulic foot bar, plus iFIT Train features (classes that control speed and incline, SmartAdjust, ActivePulse and AI Coach) that need the $15 a month membership. ProForm’s site gave a 20 by 60-inch belt and a 300 lb user rating in October. We have no October Amazon price, so we cannot say when Amazon’s price fell.',
    },
    {
      id: 'proform-carbon-pro-2000',
      name: 'ProForm Carbon Pro 2000',
      category: 'Best touchscreen ProForm for the money',
      badge: 'Best Touchscreen',
      priceRange: '$1,199 (Amazon, 23 Nov 2026; $1,299.99 at ProForm on 13 Oct)',
      specs: '0–12 mph · 0–12% incline · 10 in. pivoting touchscreen · ProShox cushioning · folding (Amazon listing)',
      pros: [
        'About $101 below ProForm’s own price on 13 October',
        'A 10-inch touchscreen that pivots for off-treadmill workouts',
        'On-screen speed and incline shortcuts',
        'ProForm gives it a 350 lb rating, 50 lb more than the TLX',
      ],
      cons: [
        'Needs iFIT Pro at $39 a month for the classes and connected features',
        'The same speed and incline as the $849 Carbon TLX',
        'No decline',
      ],
      bottomLine: 'The touchscreen ProForm to buy, but only if you will pay for iFIT Pro or need the higher user rating.',
      description:
        'The Carbon Pro 2000 was $1,199 on Amazon on 22 and 23 November 2026, about $101 below the $1,299.99 ProForm’s own site charged on 13 October. Its Amazon listing gives 0 to 12 mph, a 0–12% incline, a 10-inch pivoting touchscreen, ProShox cushioning, on-screen speed and incline shortcuts and a folding frame, and says an iFIT Pro membership at $39 a month is required for iFIT content and connected features for the whole household. ProForm’s site gave a 20 by 60-inch belt and a 350 lb user capacity in October. It is $350 more than the Carbon TLX for a screen, the same speed and incline, and the higher user rating.',
    },
    {
      id: 'proform-carbon-tls',
      name: 'ProForm Carbon TLS',
      category: 'Incline walking for less',
      badge: 'Best for Walking',
      reviewUrl: '/proform-carbon-tls-treadmill/',
      priceRange: '$559.30 (Amazon, 23 Nov 2026; $799.99 at Scheels on 14 Oct)',
      specs: '0–10 mph · 0–12% incline · 5 in. LCD + device shelf · one-press speed and incline buttons · folding (Amazon listing)',
      pros: [
        'About $241 below the lowest October price we recorded, and $540 below ProForm’s',
        '12% incline for steep walking, the same ceiling as ProForm’s dearer models',
        'One-press speed and incline buttons',
        'Works without a membership; iFIT Train is optional',
      ],
      cons: [
        'Tops out at 10 mph; not a running treadmill',
        'ProForm gives an 18 x 55 in. belt, narrower and shorter than the TLX',
        'Only $80.30 more than the Carbon TL, so check you need the extra incline',
      ],
      bottomLine: 'A genuine saving for incline walkers who already own a tablet for iFIT.',
      description:
        'The Carbon TLS was $559.30 on Amazon on 22 and 23 November 2026. On 13 October ProForm’s own site listed it at $1,099.99 and on 14 October Scheels had it at $799.99, so today’s Amazon price is about $241 below the cheaper of those. Its Amazon listing gives 0 to 10 mph, a 0–12% incline, a 5-inch LCD with a device shelf, ProShox cushioning, one-press speed and incline buttons and a folding frame with a hydraulic foot bar, with iFIT Train features at $15 a month. ProForm gives it an 18 by 55-inch belt and a 300 lb rating. It is a walking and light-jogging machine; runners should spend $289.70 more on the TLX.',
    },
    {
      id: 'proform-carbon-tl',
      name: 'ProForm Carbon TL',
      category: 'The cheapest ProForm',
      badge: 'Best Budget',
      priceRange: '$479 (Amazon, 22 and 23 Nov 2026)',
      specs: '0–10 mph · 0–10% incline · 5 in. LCD + device shelf · ProShox cushioning · folding with hydraulic foot bar (Amazon listing)',
      pros: [
        'The lowest price on any ProForm treadmill on Amazon this week',
        'Automatic incline to 10%',
        'iFIT Train classes, ActivePulse and fitness-app sync available on your own device',
        'Folds and lowers with a hydraulic foot bar',
      ],
      cons: [
        'Same price on 22 and 23 November; no earlier dated price to show a saving',
        'Tops out at 10 mph and 10% incline',
        'The listing does not state deck size or user weight',
      ],
      bottomLine: 'A sound budget walking treadmill at today’s price, but not a proven Black Friday deal.',
      description:
        'The Carbon TL was $479 on Amazon on both 22 and 23 November 2026, and we have no earlier dated price for it, so this is today’s price rather than a confirmed Black Friday saving. It was not among the treadmills on ProForm’s own US site on 13 October. Its Amazon listing gives 0 to 10 mph, a 0–10% incline, a 5-inch LCD with a device shelf, ProShox cushioning and a folding frame with a hydraulic foot bar, with iFIT Train features (classes, SmartAdjust, ActivePulse, AI Coach and Strava, Garmin and Apple Health sync) at $15 a month. The listing does not state the deck size or the user weight limit. For $80.30 more the Carbon TLS adds 12% incline.',
    },
    {
      id: 'proform-carbon-pro-9000',
      name: 'ProForm Carbon Pro 9000',
      category: 'A 16-inch screen, at its usual price',
      badge: 'Big Screen',
      reviewUrl: '/proform-carbon-pro-9000-treadmill/',
      priceRange: '$1,599 (Amazon, 23 Nov 2026; about $1,600 at ProForm on 13 Oct)',
      specs: '0–12 mph · 0–12% incline · 16 in. pivoting touchscreen · ProShox cushioning · folding (Amazon listing)',
      pros: [
        'A 16-inch pivoting touchscreen',
        'ProForm gives it a 20 x 60 in. belt and a 350 lb rating',
        'On-screen speed and incline shortcuts',
        'Below the $1,799 Nebraska Furniture Mart showed on 14 October',
      ],
      cons: [
        'About the same as ProForm’s own price in October; not a new low',
        '$400 more than the Carbon Pro 2000 for a bigger screen and the same speed and incline',
        'Needs iFIT Pro at $39 a month for the classes',
      ],
      bottomLine: 'Buy it for the screen, not for the sale: $1,599 is its usual price on our records.',
      description:
        'The Carbon Pro 9000 was $1,599 on Amazon on 22 and 23 November 2026. ProForm’s own site showed about $1,600 when we checked on 13 October, and Nebraska Furniture Mart $1,799 on 14 October, so Amazon is not charging more than ProForm, but this is not a Black Friday low either. Its Amazon listing gives 0 to 12 mph, a 0–12% incline, a 16-inch pivoting touchscreen, ProShox cushioning and a folding frame, and says iFIT Pro at $39 a month is required for iFIT content. ProForm gives it a 20 by 60-inch belt, a 3.6 CHP motor and a 350 lb user rating. Against the Carbon Pro 2000, the extra $400 buys screen size only.',
    },
    {
      id: 'proform-pro-9000',
      name: 'ProForm Pro 9000',
      category: 'The ProForm with decline and a 22-inch screen',
      badge: 'Decline',
      priceRange: '$1,665.27 (Amazon, 22 and 23 Nov 2026)',
      specs: '0–12 mph · -3% to 12% incline · 22 in. tilting touchscreen · Rebound Pro cushioning · CoolAire fan · folding (Amazon listing)',
      pros: [
        'Decline to -3%, for downhill training',
        'The largest screen in the range, 22 inches, which tilts',
        'One-touch speed and incline controls',
        'Only $66.27 more than the Carbon Pro 9000',
      ],
      cons: [
        'An older model, not on ProForm’s site in October',
        'The listing does not state deck size, user weight or warranty',
        'Same price on 22 and 23 November; no earlier dated price',
      ],
      bottomLine: 'The ProForm for anyone who wants decline and the biggest screen, at today’s price rather than a proven deal.',
      description:
        'The Pro 9000 was $1,665.27 on Amazon on 22 and 23 November 2026; we have no earlier dated price, so we cannot call it a Black Friday saving. It is an older model that was not on ProForm’s US site on 13 October. Its Amazon listing gives 0 to 12 mph quick speed controls, -3% to 12% quick incline controls, a 22-inch tilting touchscreen, Rebound Pro cushioning, a three-speed CoolAire fan and a SpaceSaver folding frame, with iFIT Pro required for the classes and ActivePulse. The listing does not state the deck size, user capacity or warranty, so check them with the seller before buying. Its reason to exist is the decline.',
    },
    {
      id: 'proform-pro-2000',
      name: 'ProForm Pro 2000',
      category: 'Decline for less, with 30 days of iFIT',
      badge: 'Older Model',
      reviewUrl: '/proform-pro-2000-treadmill/',
      priceRange: '$1,259.69 (Amazon, 22 and 23 Nov 2026)',
      specs: '0–12 mph · -3% to 12% incline · 10 in. HD touchscreen · 20 x 60 in. belt · 300 lb capacity · folding (Amazon listing)',
      pros: [
        'Decline to -3% for about $406 less than the Pro 9000',
        'A 20 by 60-inch belt and 300 lb capacity stated on the listing',
        '10-year frame, 2-year parts and 1-year labour warranty per the listing',
        '30 days of iFIT included',
      ],
      cons: [
        'An older model, not on ProForm’s site in October',
        '$60.69 more than the newer Carbon Pro 2000',
        'Same price on 22 and 23 November; no earlier dated price',
      ],
      bottomLine: 'Worth the $60.69 over the Carbon Pro 2000 only if you want decline.',
      description:
        'The Pro 2000 is the earlier touchscreen model, not the Carbon Pro 2000, and was $1,259.69 on Amazon on 22 and 23 November 2026. Its Amazon listing gives a 10-inch HD touchscreen, 0 to 12 mph, -3% to 12% incline, a 20 by 60-inch tread belt with Rebound Pro cushioning, a folding SpaceSaver frame, a 300 lb user capacity, a 10-year frame, 2-year parts and 1-year labour warranty, and 30 days of iFIT included. Against the Carbon Pro 2000 at $1,199 it costs $60.69 more and has a 50 lb lower rating (on ProForm’s figure for the Carbon), but it adds decline. We have no earlier dated price, so this is today’s price.',
    },
  ],
  faqs: [
    {
      q: 'Does ProForm have Black Friday deals in 2026?',
      a: `On Amazon on 23 November 2026 none of the ProForm treadmill listings carried a Black Friday or deal label in the data we could see, and every price matched 22 November. But three, the Carbon TLS ($559.30), Carbon TLX ($849) and Carbon Pro 2000 ($1,199), were $100 to $540 below ProForm’s own October prices. ProForm’s own site blocked our check that day.`,
    },
    {
      q: 'What is a good Black Friday price for a ProForm Carbon TLX?',
      a: `$849 or less. That was its Amazon price on 22 and 23 November 2026, about $451 below the $1,299.99 ProForm’s site charged on 13 October. At that price it is $350 cheaper than the Carbon Pro 2000, with the same 12 mph and 12% incline on the listings.`,
    },
    {
      q: 'Is the ProForm Carbon Pro 2000 worth it at Black Friday prices?',
      a: `At $1,199 on Amazon on 23 November 2026, if you will pay for iFIT Pro at $39 a month or need its 350 lb rating. It is about $101 below ProForm’s October price. Without the membership, the $849 Carbon TLX has the same speed and incline for $350 less.`,
    },
    {
      q: 'How much is iFIT on a ProForm treadmill?',
      a: `iFIT Train, for the Carbon TL, TLS and TLX, is $15 a month or $144 a year. iFIT Pro, for models with a built-in touchscreen, is $39 a month or $396 a year. Those are the prices on iFIT’s membership page on 23 November 2026; we saw no Black Friday offer on the membership.`,
    },
    {
      q: 'Can you use a ProForm treadmill without iFIT?',
      a: `Yes. Every ProForm here works as a plain treadmill: you set speed and incline yourself. The membership adds classes that control the treadmill, SmartAdjust, ActivePulse and fitness-app sync. Our guide to using a NordicTrack without iFIT applies to ProForm’s consoles too.`,
    },
    {
      q: 'Will ProForm treadmills be cheaper on Cyber Monday?',
      a: `We do not know, and neither ProForm nor Amazon had said. Cyber Monday is 30 November 2026. If prices change, compare them with the 23 November Amazon prices on this page, not with a list price.`,
    },
  ],
  mistakesHeading: 'Common Mistakes When Buying a ProForm at Black Friday',
  mistakesIntro: `ProForm’s range is cheap and confusingly named, and these four mistakes cost buyers the most.`,
  mistakes: [
    {
      title: 'Ignoring the membership',
      body: `Five years of iFIT Pro is $1,980 to $2,340, more than any ProForm treadmill here. A $100 Black Friday saving disappears in three months of membership. Decide whether you will pay for iFIT before you choose a touchscreen model.`,
    },
    {
      title: 'Mixing up the Carbon and older models',
      body: `The Carbon Pro 2000 and the older Pro 2000 are different machines, and so are the Carbon Pro 9000 and Pro 9000. Check the screen size, incline range and user rating of the listing in your basket, not just the number in the name.`,
    },
    {
      title: 'Buying a 10 mph model to run',
      body: `The Carbon TL and TLS top out at 10 mph on their listings, and the older Carbon T7 does too. Runners should start at the Carbon TLX, which is the cheapest ProForm with 12 mph this week at $849.`,
    },
    {
      title: 'Treating every price as a Black Friday deal',
      body: `Every ProForm price on Amazon was the same on 22 and 23 November, and the Carbon Pro 9000 at $1,599 matches ProForm’s own October price. Judge a deal by a dated earlier price, not by the word “sale”.`,
    },
  ],
  relatedHeading: 'Related Black Friday and ProForm Guides',
  related: [
    {
      kicker: 'ProForm',
      title: 'How Much Does a ProForm Treadmill Cost?',
      blurb: 'Every model’s price, the iFIT tier each needs, and the five-year cost.',
      url: '/how-much-does-a-proform-treadmill-cost/',
    },
    {
      kicker: 'Black Friday',
      title: 'Black Friday Treadmill Deals 2026',
      blurb: 'Every tier, the method for spotting a real deal, and target prices.',
      url: '/treadmill-black-friday-deals/',
    },
    {
      kicker: 'Black Friday',
      title: 'NordicTrack Black Friday Deals 2026',
      blurb: 'ProForm’s sister brand: the models to watch and the price worth paying.',
      url: '/nordictrack-black-friday-deals/',
    },
    {
      kicker: 'iFIT',
      title: 'Is iFIT Worth It?',
      blurb: 'What the membership gets you, and what it costs over time.',
      url: '/is-ifit-worth-it/',
    },
    {
      kicker: 'ProForm',
      title: 'Best ProForm Treadmills',
      blurb: 'The current Carbon range ranked, and the older models to skip.',
      url: '/best-proform-treadmills/',
    },
    {
      kicker: 'Cyber Monday',
      title: 'Cyber Monday Treadmill Deals 2026',
      blurb: 'What changes between Friday and Monday, and Christmas delivery.',
      url: '/cyber-monday-treadmill-deals/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">ProForm’s Amazon prices did not move into Black Friday week, but three are real
            savings.</strong> On 23 November 2026 the Carbon TLS was $559.30, the Carbon TLX $849 and the Carbon Pro 2000
            $1,199, each $100 to $540 below ProForm’s own October prices. The Carbon Pro 9000 at $1,599 is its usual price,
            and the Carbon TL, Pro 2000 and Pro 9000 have no earlier price on our records to beat.`,
    `<strong class="text-white">Buy for the membership you will pay.</strong> If you run and own a tablet, the Carbon
            TLX at $849 with iFIT Train is the value pick this week; buy a touchscreen ProForm only if you will pay $39 a
            month for iFIT Pro. See our
            <a href="/how-much-does-a-proform-treadmill-cost/" class="text-[#5AA9FF] font-bold no-underline">ProForm price guide</a>
            for every model outside sale weeks.`,
  ],
};

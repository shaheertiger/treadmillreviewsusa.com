const th = (cells, extra = '') =>
  `<tr>${cells.map((c) => `<th class="text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4${extra}">${c}</th>`).join('')}</tr>`;
const tr = (cells) =>
  `<tr>${cells.map((c) => `<td class="border-b border-gray-100 py-2 pr-4 text-gray-700">${c}</td>`).join('')}</tr>`;
const table = (head, rows) => `<div class="not-prose overflow-x-auto my-8"><table class="min-w-[480px] w-full text-sm border-collapse">
            <thead>
              ${th(head)}
            </thead>
            <tbody>
              ${rows.join('\n              ')}
            </tbody>
          </table></div>`;

export default {
  slug: 'horizon-t202-treadmill',
  title: 'Horizon T202 Treadmill Review (2026): Specs, Price, Verdict',
  description:
    'The Horizon T202 treadmill checked against Horizon’s listing and two independent reviews on 5 November 2026: 20 x 60 in. deck, 12 mph, 325 lb, lifetime motor cover, the motor figure Horizon does not publish, and how it compares with the T101 and 7.0 AT.',
  crumbLabel: 'Horizon T202 Treadmill',
  kicker: 'Model Review',
  updated: 'November 2026',
  updatedLong: 'November 5, 2026',
  published: '2026-11-05',
  socialProof: '1.4k',
  h1: ['Horizon T202', 'Treadmill Review'],
  standfirst:
    'The T202 is the cheapest Horizon with a full 60-inch deck, and the larger of its two Go Series walking machines. This review sets out what Horizon and independent reviewers agree on, the figure Horizon leaves out, who the T202 suits, and when the T101 or 7.0 AT is the better buy.',
  ctas: [
    { label: 'The Specifications', href: '#specifications' },
    { label: 'T202 vs T101 vs 7.0 AT', href: '#alternatives' },
  ],
  tags: [
    'horizon t202 treadmill',
    'horizon t202 treadmill review',
    't202 treadmill',
    'horizon fitness t202',
    'horizon t202 vs t101',
  ],
  stickyCta: { text: 'See the Verdict', link: '#who-should-buy' },
  breadcrumb: { name: 'Reviews', url: '/reviews/' },
  lead: `The Horizon T202 treadmill is a folding walking-and-jogging machine with a full 20 by 60-inch
          deck, a 12 mph top speed, a 325 lb rating and a lifetime warranty on the frame and motor, for well
          under $1,000. Horizon and independent reviewers agree on those figures. What Horizon does not
          publish is a motor rating, and what it does publish is a $1,299 reference price that it does not
          sell at. On 5 November 2026 the T202 was $899 on Horizon’s store and expected to ship the week of
          16 November. This page reads the specifications properly, explains what the one-year parts
          warranty means, and shows where the T202 sits between Horizon’s T101 and 7.0 AT.`,
  note: `<strong class="text-gray-900">What we checked, and what we have not done.</strong> On
          5 November 2026 we read Horizon’s US product page for the T202 (SKU HTM1386-01), including its
          full machine and console specification table, warranty, electrical requirements, delivery and
          30-day guarantee, and Horizon’s pages for the T101 Connect and 7.0 AT for the comparison. We
          cross-checked the T202 figures against Treadmill Review Guru’s review (updated June 2024) and
          TreadmillReviews.com’s review (updated September 2023). Horizon and those reviews agree on the
          20 x 60 in. running area, 0.5-12 mph, the 325 lb maximum user weight, 187 lb weight, 76 x 34 x
          57 in. assembled size and the lifetime frame and motor, one-year parts and one-year labour
          warranty; Horizon and Treadmill Review Guru also agree on the 1.4 mm belt, 7.25 in. step-on
          height and 48 x 34 x 62 in. folded size. Horizon lists 12 incline levels, which both reviews give
          as 0-12%. Horizon does not publish a motor rating; both reviews give 2.75 HP or CHP, so it stays
          off the card. Regional versions sold outside the US (T202-05, T202-26, AtZone) have different
          specifications and are not covered here. We searched the US Consumer Product Safety
          Commission’s recall database for Horizon and found no T202 recall; Horizon’s one recent
          treadmill recall covers T101-05 units. We have not tested the T202, and none of these figures
          are our own measurements. Prices are those shown on horizonfitness.com on 5 November 2026 and
          change often. We earn a commission if you buy through an Amazon link on this page; it does not
          change what we say about the machine.`,
  products: [
    {
      id: 'horizon-t202',
      name: 'Horizon T202',
      category: 'Folding Walking and Jogging Treadmill',
      badge: 'The Model Reviewed',
      amazonUrl: 'https://www.amazon.com/s?k=Horizon+T202+Treadmill&tag=sktiger-20',
      priceRange: '$899 at Horizon (5 Nov 2026)',
      specs: '20 x 60 in. deck · 0.5-12 mph · 12 incline levels · 325 lb capacity · 187 lb · folds',
      pros: [
        'The cheapest Horizon with a full 60-inch deck',
        'Lifetime frame and motor warranty at under $1,000',
        'A 325 lb rating and a 7.25-inch step-on height',
        'No subscription: six built-in programs and Bluetooth FTMS for training apps',
      ],
      cons: [
        'One year of parts and labour, against three years of parts on the 7.0 AT',
        'A 1.4 mm belt that one reviewer notes is thinner than a standard two-ply belt',
        'Horizon does not publish a motor rating',
        'No Apple Watch or Samsung watch pairing and no JRNY adaptive workouts',
      ],
      bottomLine:
        'A good walking treadmill and an adequate one for occasional jogging at around $800 to $900. Regular runners should pay the extra for the 7.0 AT’s longer parts cover.',
      description:
        'The T202 has a 20 by 60-inch running area on Horizon’s three-zone cushioned deck, a 1.4 mm silicone belt, 60/42 mm tapered rollers and a 0.7-inch deck, with speed from 0.5 to 12 mph and 12 levels of motorised incline set by EasyDial controls on the handgrips. Maximum user weight is 325 lb. The console is a 5-inch LCD with three LED windows, six programs, a fan, Bluetooth speakers and a USB port, and it sends live data to training apps over Bluetooth FTMS. It weighs 187 lb, measures 76 by 34 by 57 inches and folds with hydraulic assist to 48 inches long. The warranty is lifetime on the frame and motor and one year on parts and labour. On 5 November 2026 horizonfitness.com listed it at $899 against a $1,299 reference price, shipping the week of 16 November.',
    },
    {
      id: 'horizon-t101-connect',
      name: 'Horizon T101 Connect',
      category: 'Smaller, Cheaper Walking Treadmill',
      badge: 'Cheaper Alternative',
      amazonUrl: 'https://www.amazon.com/s?k=Horizon+T101+Connect+Treadmill&tag=sktiger-20',
      reviewUrl: '/horizon-t101-treadmill/',
      priceRange: '$699 at Horizon (5 Nov 2026)',
      specs: '20 x 55 in. deck · 0.5-10 mph · 10 incline levels · 300 lb capacity · 180 lb · folds',
      pros: [
        'Same warranty structure as the T202 for $200 less',
        'Includes JRNY adaptive workouts, which the T202 lacks',
        'A shorter, slightly more compact frame',
      ],
      cons: [
        'A 55-inch deck that is short for running',
        'Lower 10 mph top speed and 300 lb rating',
        'LED windows only, with no LCD screen',
      ],
      bottomLine:
        'The better buy if you will only walk and want to save $200; the T202 if you might jog or are tall.',
      description:
        'The T101 Connect is the smaller Go Series model. Horizon’s comparison table lists a 20 by 55-inch running area, 0.5 to 10 mph, 10 incline levels, a 300 lb maximum user weight, 46/42 mm rollers, a 180 lb weight and a 70.5 by 33.5 by 59-inch footprint, with the same lifetime frame and motor and one-year parts and labour warranty as the T202. It adds JRNY adaptive workouts. On 5 November 2026 Horizon listed it at $699 against a $999 reference price.',
    },
    {
      id: 'horizon-7-0-at',
      name: 'Horizon 7.0 AT',
      category: 'Step-Up Running Treadmill',
      badge: 'Better for Runners',
      amazonUrl: 'https://www.amazon.com/s?k=Horizon+7.0+AT+Treadmill&tag=sktiger-20',
      reviewUrl: '/horizon-7-0-at-treadmill/',
      priceRange: '$1,099 at Horizon (5 Nov 2026)',
      specs: '20 x 60 in. deck · 0.5-12 mph · 0-15% incline · 325 lb capacity · lifetime frame and motor, 3 yr parts',
      pros: [
        'Three years of parts cover instead of one',
        'Incline to 15% and a faster-responding console, per independent reviews',
        'Apple Watch and Samsung Galaxy Watch pairing',
      ],
      cons: [
        '$200 more than the T202 at Horizon’s 5 November prices',
        'Heavier, at 277 lb',
        'Still one year of labour',
      ],
      bottomLine:
        'The Horizon to buy if you plan to run regularly; the extra parts cover is worth more than its price difference.',
      description:
        'The 7.0 AT is the entry to Horizon’s Studio Series. As set out in our full review, Horizon and independent reviewers agree on a 20 by 60-inch running area, 0.5 to 12 mph, 0 to 15% incline, a 325 lb rating and a warranty of lifetime frame and motor, three years of parts and one year of labour. On 5 November 2026 Horizon listed it at $1,099 against a $2,100 reference price.',
    },
  ],
  sections: [
    {
      id: 'short-answer',
      heading: 'Horizon T202 Treadmill: The Short Answer',
      products: true,
      html: `          <p>
            <strong>The Horizon T202 is a solid folding treadmill for walkers and occasional joggers, and at
            its sale price of $800 to $900 it is one of the cheaper ways to get a full 60-inch deck and a
            lifetime motor warranty.</strong> Its weak points are the one-year parts warranty and a thin belt,
            both of which matter more the more you run.
          </p>
          <p>
            The independent reviews we read agree on who it is for. Treadmill Review Guru recommends it for
            dedicated walkers and occasional joggers on a budget and points regular runners to the 7.0 AT;
            TreadmillReviews.com likes the deck size and price but finds the speakers and fan underpowered and
            the machine less stable at high incline.
          </p>
          <p>
            Buy it if you mainly walk, sometimes jog, and want room for a longer stride than a 55-inch deck
            allows. Buy the T101 Connect if you will only walk and want to save money, and the 7.0 AT if you
            will run several times a week. We have not tested the T202; what follows is what Horizon’s figures
            and independent coverage show.
          </p>`,
    },
    {
      id: 'specifications',
      heading: 'Horizon T202 Specifications, Checked',
      html: `          <p>
            The first part of this table lists figures that appear on Horizon’s current T202 page and in at
            least one independent review. The second lists what only Horizon gives, or what conflicts.
          </p>
          ${table(['Specification', 'Figure', 'Status'], [
            tr(['Running area', '20 x 60 in.', 'Horizon and two reviews']),
            tr(['Speed', '0.5-12 mph', 'Horizon and two reviews']),
            tr(['Incline', '12 levels (reviews: 0-12%), no decline', 'Horizon and two reviews']),
            tr(['Maximum user weight', '325 lb', 'Horizon and two reviews']),
            tr(['Weight', '187 lb', 'Horizon and two reviews']),
            tr(['Assembled size (L x W x H)', '76 x 34 x 57 in.', 'Horizon and two reviews']),
            tr(['Folded size (L x W x H)', '48 x 34 x 62 in.', 'Horizon and one review']),
            tr(['Belt', '1.4 mm, silicone', 'Horizon and one review']),
            tr(['Step-on height', '7 1/4 in.', 'Horizon and one review']),
            tr(['Warranty', 'Lifetime frame and motor; 1 yr parts; 1 yr labour', 'Horizon and two reviews']),
            tr(['Price seen', '$899 ($1,299 reference)', 'horizonfitness.com, 5 November 2026']),
            th(['Horizon only, or conflicting', 'Figure', 'Status'], ' pt-6'),
            tr(['Drive motor rating', 'Not published; both reviews say 2.75 HP or CHP', 'Unconfirmed']),
            tr(['Deck and rollers', '0.7 in. (18 mm) deck; 60/42 mm tapered rollers', 'Horizon only']),
            tr(['Console', '5 in. LCD, 3 LED windows, 6 programs, fan, Bluetooth speakers, USB-A', 'Horizon; reviews broadly agree']),
            tr(['Shipping box', '78 x 30 x 12 in., 231 lb', 'Horizon only']),
            tr(['Electrical', '120 V, 60 Hz; not compatible with GFCI outlets', 'Horizon only']),
          ])}
          <p>
            Two notes on the table. The T202 has been on sale for several years, and reviews from 2023 and
            2024 give the same figures as Horizon’s current page, which suggests the US machine has not
            changed in any way that matters. And search results for "T202 treadmill" also turn up versions
            sold in the UK, Australia, Malaysia and the UAE — the T202-05, T202-26, a <a href="/buying-a-treadmill-at-costco/" class="text-[#0F62FE] font-medium" data-autolink>Costco</a> UK "AtZone" and a
            "Special Edition" — with different consoles and figures. Those are regional machines; check the
            model number if you are reading a listing from outside the US.
          </p>`,
    },
    {
      id: 'motor-and-belt',
      heading: 'The Motor Horizon Does Not Rate, and the Thin Belt',
      html: `          <p>
            Horizon describes the T202’s drive as its Johnson Drive System, a motor that "recalibrates with
            each foot fall", but does not publish a horsepower figure for it or for any current Horizon. Both
            independent reviews give 2.75 HP, one calling it 2.75 CHP, and an Amazon listing mirror carries the
            same number. We cannot trace that figure to Horizon, so it is not on the card. The more useful
            signal is the warranty: Horizon covers the motor for life.
          </p>
          <p>
            The belt is a more concrete concern. Horizon lists a 1.4 mm silicone belt on both the T202 and
            the T101 Connect. Treadmill Review Guru points out that this is 0.6 mm short of a standard two-ply
            belt and may wear faster, while adding that this is unlikely to matter for walking or light
            jogging. That is the right reading: belt life depends on mileage, user weight and lubrication.
            Horizon’s manuals ask for lubrication every three months or 150 miles, and our guide to
            <a href="/how-often-to-lubricate-treadmill/" class="text-[#0F62FE] font-medium">how often to lubricate a treadmill</a>
            explains why that schedule matters on a thinner belt.
          </p>
          <p>
            Taken together, the T202’s published figures describe a machine built for walking, incline
            walking and some jogging by one user, which is how both reviews describe it. If you weigh close
            to 325 lb or plan regular runs, the 7.0 AT’s three years of parts cover is the better protection.
            Our <a href="/treadmill-horsepower-guide/" class="text-[#0F62FE] font-medium">horsepower guide</a>
            explains continuous and peak ratings if you are comparing brands.
          </p>`,
    },
    {
      id: 'deck-console',
      heading: 'Deck, Incline, Console and Apps',
      html: `          <p>
            The 20 by 60-inch running area is the T202’s main advantage over the T101 Connect. Five extra
            inches of length gives a taller walker or a jogger room for a full stride; our
            <a href="/treadmill-belt-size-guide/" class="text-[#0F62FE] font-medium">belt size guide</a>
            sets out when 55 inches is enough and when it is not. The deck uses Horizon’s three-zone
            Variable Response Cushioning, softer where the foot lands and firmer at push-off, the same system
            as on the Studio Series.
          </p>
          <p>
            Incline is motorised, with 12 levels controlled by the right-hand EasyDial; both reviews give the
            range as 0 to 12%. That is enough for steep <a href="/treadmill-walking-workouts/" class="text-[#0F62FE] font-medium" data-autolink>walking workouts</a>, including the
            <a href="/12-3-30-treadmill-workout/" class="text-[#0F62FE] font-medium">12-3-30 workout</a> at its
            top setting. TreadmillReviews.com found the machine less stable at the top of the range, and
            Treadmill Review Guru suggests a ceiling of at least eight feet for use at 12%, given the
            7.25-inch step-on height and the rise of the deck.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Console</h3>
          <p>
            The console has a 5-inch LCD with three LED windows, a tablet rack, Bluetooth speakers, an audio
            jack, a fan and a USB-A charging port. Horizon lists six programs: Calorie, Distance, Fat Burn,
            Hill Climb, Intervals and Manual. Treadmill Review Guru calls the console dated but easy to use;
            TreadmillReviews.com finds the speakers and fan underpowered. Heart rate comes from hand grips or
            a Bluetooth chest strap, which is not included.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Apps, and what it does not do</h3>
          <p>
            Nothing on the T202 needs a subscription. It sends live data over Bluetooth FTMS; Horizon’s page
            shows Peloton, Zwift and Kinomap among compatible apps and mentions Strava syncing. The apps read
            the treadmill’s data but do not control speed or incline. Horizon’s comparison table is clear about
            two things the T202 lacks: JRNY adaptive workouts, which the cheaper T101 Connect has, and <a href="/how-to-connect-apple-watch-to-treadmill/" class="text-[#0F62FE] font-medium" data-autolink>Apple
            GymKit</a> or Samsung watch pairing, which only the 7.0 AT offers in Horizon’s current range. If you
            want a machine that changes speed and incline for you, our
            <a href="/best-smart-treadmills/" class="text-[#0F62FE] font-medium">smart treadmill roundup</a>
            covers that trade-off.
          </p>`,
    },
    {
      id: 'space-power-delivery',
      heading: 'Folding, Space, Power and Delivery',
      html: `          <p>
            Assembled, the T202 is 76 inches long, 34 wide and 57 tall, about 18 square feet. Folded, with
            Horizon’s FeatherLight hydraulic-assisted fold, it is 48 inches long and 62 tall. At 187 lb it is
            90 lb lighter than the 7.0 AT, which makes it easier to roll on its wheels, though not something to
            move casually. Allow clearance behind the deck as well as the footprint; our
            <a href="/treadmill-dimensions-space-requirements/" class="text-[#0F62FE] font-medium">space guide</a>
            covers the numbers.
          </p>
          <p>
            Horizon specifies a 120 V, 60 Hz supply and says the T202 is not compatible with GFCI outlets,
            which are common in garages and basements. Use a dedicated circuit with no extension cord or
            surge strip; our <a href="/treadmill-extension-cord/" class="text-[#0F62FE] font-medium">circuit guide</a>
            explains why.
          </p>
          <p>
            On 5 November 2026 the T202 was expected to ship the week of 16 November. Horizon offers standard,
            room-of-choice and white-glove delivery with assembly, priced at checkout and not available
            everywhere, and the store’s free-shipping banner referred to its Studio Series rather than to the
            Go Series T202. Horizon offers a 30-day full-refund guarantee; read the return conditions,
            including who pays return shipping, before you rely on it. Our
            <a href="/how-to-start-a-horizon-treadmill/" class="text-[#0F62FE] font-medium">guide to starting a Horizon treadmill</a>
            covers first use from the manual.
          </p>`,
    },
    {
      id: 'price',
      heading: 'Horizon T202 Price and When to Buy',
      html: `          <p>
            Horizon shows $1,299 as the T202’s reference price, but that is not what it charges. On
            5 November 2026 it was $899. When we checked Horizon’s pricing for our 7.0 AT review on
            14 October 2026, the T202 was $799 with a promotional code; on 5 November we saw no live code on
            the T202 page. Horizon’s prices move in steps of $100 or so as promotions start and stop.
          </p>
          <ul>
            <li><strong>Compare against the best recent price, not the reference price.</strong> $799 with a code is the benchmark we saw this autumn.</li>
            <li><strong>Price it delivered.</strong> Delivery options are priced at checkout, and assembly matters on a 187 lb machine.</li>
            <li><strong>Check the ship date.</strong> A lower price with a ship date weeks out may or may not suit you.</li>
            <li><strong>Cross-shop the same day.</strong> The T101 Connect was $699 and the 7.0 AT $1,099 on 5 November, and sale events often narrow the gaps.</li>
          </ul>
          <p>
            Third-party listings, including on Amazon, can differ from Horizon’s store in price, seller and
            sometimes model version, so check the seller and the warranty before you buy. Our
            <a href="/treadmill-black-friday-deals/" class="text-[#0F62FE] font-medium">treadmill Black Friday guide</a>
            explains how to read a sale price.
          </p>`,
    },
    {
      id: 'warranty-recall',
      heading: 'Warranty and Safety Record',
      html: `          <p>
            The T202’s warranty is lifetime on the frame and motor and one year on parts and labour, for home
            use. Lifetime motor cover is generous at this price, but one year of parts is the term to plan
            around: from the second year, a console board, incline motor or belt is at your cost. That is the
            main thing the 7.0 AT buys you, with three years of parts. Our
            <a href="/treadmill-warranty-guide/" class="text-[#0F62FE] font-medium">warranty guide</a>
            explains how to read the split, and Horizon ties cover to home use, the right electrical supply
            and the <a href="/treadmill-maintenance-checklist/" class="text-[#0F62FE] font-medium" data-autolink>maintenance schedule</a> in its manuals.
          </p>
          <p>
            We searched the US Consumer Product Safety Commission’s recall database on 5 November 2026 and
            found no recall of the T202. Horizon’s only treadmill recall in recent years is the October 2022
            recall of T101-05 treadmills for a fall hazard, covered in our
            <a href="/horizon-t101-treadmill/" class="text-[#0F62FE] font-medium">Horizon T101 review</a>.
            Horizon’s parent company also expanded a recall of Matrix and Vision treadmills for a fire hazard
            in January 2026; those are different brands and the recall does not name Horizon models. Our
            <a href="/is-horizon-a-good-treadmill-brand/" class="text-[#0F62FE] font-medium">Horizon brand assessment</a>
            covers the company’s record more widely.
          </p>`,
    },
    {
      id: 'alternatives',
      heading: 'T202 vs T101 Connect vs 7.0 AT',
      html: `          <p>
            Figures from Horizon’s product pages and comparison table, and prices from horizonfitness.com,
            on 5 November 2026.
          </p>
          ${table(['Published figure', 'T101 Connect', 'T202', '7.0 AT'], [
            tr(['Running area', '20 x 55 in.', '20 x 60 in.', '20 x 60 in.']),
            tr(['Speed / incline', '10 mph / 10 levels', '12 mph / 12 levels', '12 mph / 15%']),
            tr(['Max user weight', '300 lb', '325 lb', '325 lb']),
            tr(['Weight', '180 lb', '187 lb', '277 lb']),
            tr(['Parts / labour', '1 yr / 1 yr', '1 yr / 1 yr', '3 yr / 1 yr']),
            tr(['Adaptive workouts or watch pairing', 'JRNY', 'Neither', 'Apple and Samsung watches']),
            tr(['Price at Horizon', '$699', '$899', '$1,099']),
          ])}
          <p>
            <strong>T101 Connect.</strong> $200 less, five inches shorter, slower and rated 25 lb lower, but
            with JRNY adaptive workouts included. For walking only, and for users of average height, it does
            the job. Note the 2022 recall applied to T101-05 units, not the current Connect version.
          </p>
          <p>
            <strong>7.0 AT.</strong> $200 more at the prices we saw, with 15% incline, a heavier frame, watch
            pairing and three years of parts. Our <a href="/horizon-7-0-at-treadmill/" class="text-[#0F62FE] font-medium">Horizon 7.0 AT review</a>
            covers it in full. For anyone who runs regularly, that is the better use of $200.
          </p>
          <p>
            <strong>Outside Horizon.</strong> The <a href="/bowflex-t6-treadmill/" class="text-[#0F62FE] font-medium">Bowflex T6</a>,
            from the same parent company, and the machines in our
            <a href="/best-treadmill-under-1000-reviews/" class="text-[#0F62FE] font-medium">under-$1,000 guide</a>
            are worth pricing on the same day. The whole Horizon range is ranked in our
            <a href="/best-horizon-treadmills/" class="text-[#0F62FE] font-medium">best Horizon treadmills</a> guide.
          </p>`,
    },
    {
      id: 'who-should-buy',
      heading: 'Who Should Buy the Horizon T202',
      html: `          <p>
            <strong>Buy it if you mainly walk and want a full-length deck.</strong> A 60-inch deck, 12 mph,
            a 325 lb rating and lifetime motor cover at $800 to $900 is the core case, and the 7.25-inch
            step-on height suits walkers who find taller decks awkward.
          </p>
          <p>
            <strong>Buy it if you jog occasionally.</strong> Both reviews treat light jogging as within its
            range.
          </p>
          <p>
            <strong>Step up to the 7.0 AT</strong> if you will run several times a week, are close to the
            weight limit, or want watch pairing; three years of parts is the reason.
          </p>
          <p>
            <strong>Step down to the T101 Connect</strong> if you will only walk, are of average height, and
            want JRNY or the lower price.
          </p>
          <p>
            <strong>Pay the sale price, never the reference price,</strong> and check the delivered total and
            ship date before you order.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'Is the Horizon T202 a good treadmill?',
      a: 'For walking and occasional jogging, yes, on its published figures and two independent reviews. It has a 20 by 60-inch deck, 0.5 to 12 mph, 12 incline levels, a 325 lb rating and lifetime frame and motor cover. Its weaker points are one year of parts cover and a 1.4 mm belt. We have not tested it.',
    },
    {
      q: 'What motor does the Horizon T202 have?',
      a: 'Horizon describes a Johnson Drive System motor but publishes no horsepower rating. Independent reviews give 2.75 HP or 2.75 CHP, which we cannot trace to Horizon. The motor is covered by a lifetime warranty.',
    },
    {
      q: 'How much does the Horizon T202 cost?',
      a: 'On 5 November 2026 Horizon listed it at $899 against a $1,299 reference price, expected to ship the week of 16 November. In mid-October it was $799 with a promotional code. Prices change with promotions, so compare against the best recent price rather than the reference price.',
    },
    {
      q: 'What is the difference between the Horizon T101 and T202?',
      a: 'The T202 has a 60-inch deck instead of 55 inches, reaches 12 mph instead of 10, has 12 incline levels instead of 10, a 325 lb rating instead of 300 lb, and a 5-inch LCD. The T101 Connect is $200 cheaper and includes JRNY adaptive workouts. Both carry lifetime frame and motor and one-year parts and labour cover.',
    },
    {
      q: 'Can you run on a Horizon T202?',
      a: 'You can jog and run on it; it reaches 12 mph on a 60-inch deck. Independent reviewers recommend it for walkers and occasional joggers and point regular runners to the Horizon 7.0 AT, which has three years of parts cover instead of one.',
    },
    {
      q: 'Does the Horizon T202 fold?',
      a: 'Yes. It folds with hydraulic assist from 76 inches long to 48 inches long and 62 inches tall, and it weighs 187 lb.',
    },
  ],
  mistakesHeading: 'Common Mistakes Buying a Horizon T202',
  mistakesIntro:
    'The T202 is a straightforward machine. These are the errors that cost buyers money or frustration.',
  mistakes: [
    {
      title: 'Measuring a deal against the $1,299 reference price',
      body: 'Horizon sold the T202 at $899 on 5 November 2026 and $799 with a code in October. A discount quoted from $1,299 is not a saving; compare with the best recent price and the delivered total.',
    },
    {
      title: 'Buying it for regular running to save $200',
      body: 'The T202 runs to 12 mph, but one year of parts cover and a thinner belt make the 7.0 AT the better buy for anyone running several times a week.',
    },
    {
      title: 'Reading a regional T202 listing',
      body: 'The T202-05, T202-26 and UK AtZone versions have different figures. Check that a listing or review describes the US T202, SKU HTM1386-01, before relying on it.',
    },
    {
      title: 'Plugging it into a GFCI outlet',
      body: 'Horizon says the T202 is not compatible with GFCI outlets, common in garages and basements. Check the outlet and use a dedicated circuit with no extension cord before delivery day.',
    },
  ],
  relatedHeading: 'Related Reviews &amp; Guides',
  related: [
    {
      kicker: 'Model Review',
      title: 'Horizon T101 Treadmill Review',
      blurb: 'The smaller Go Series model, with the 2022 T101-05 recall explained.',
      url: '/horizon-t101-treadmill/',
    },
    {
      kicker: 'Roundup',
      title: 'Best Horizon Treadmills',
      blurb: 'All five current Horizons ranked, from the T101 Connect to the 7.8 AT.',
      url: '/best-horizon-treadmills/',
    },
    {
      kicker: 'Step Up',
      title: 'Horizon 7.0 AT Review',
      blurb: 'The cheapest Studio Series Horizon, with three years of parts cover.',
      url: '/horizon-7-0-at-treadmill/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">The Horizon T202 is a good walking treadmill and an adequate jogging
            one</strong>: a 20 by 60-inch deck, 12 mph, a 325 lb rating and a lifetime frame and motor warranty
            at $899 on 5 November 2026. Horizon does not publish its motor rating, and parts cover lasts one
            year.`,
    `Buy it at the sale or code price if you mainly walk. If you will run regularly, the
            <a href="/horizon-7-0-at-treadmill/" class="text-[#5AA9FF] font-bold no-underline">Horizon 7.0 AT</a>
            is $200 more with three years of parts, and walkers on a tighter budget should look at the T101
            Connect.`,
  ],
};

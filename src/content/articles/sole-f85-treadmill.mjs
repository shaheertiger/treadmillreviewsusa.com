const TH = 'text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4';
const TD = 'border-b border-gray-100 py-2 pr-4 text-gray-700 align-top';
const row = (cells) => `<tr>${cells.map((c) => `<td class="${TD}">${c}</td>`).join('')}</tr>`;
const table = (head, rows) => `<div class="not-prose overflow-x-auto my-8"><table class="min-w-[480px] w-full text-sm border-collapse">
            <thead><tr>${head.map((h) => `<th class="${TH}">${h}</th>`).join('')}</tr></thead>
            <tbody>
              ${rows.map(row).join('\n              ')}
            </tbody>
          </table></div>`;

export default {
  slug: 'sole-f85-treadmill',
  title: 'Sole Treadmill F85 Review (2026): Specs, Changes and Verdict',
  description:
    'The 2026 Sole F85 has a 22 x 60 in. deck, a 3.5 HP brushless motor, a 15.6 in. touchscreen and a 350 lb rating, with no decline. What changed from the 4.0 HP F85, what still conflicts, and who should buy it.',
  crumbLabel: 'Sole F85 Treadmill',
  kicker: 'Model Review',
  updated: 'October 2026',
  updatedLong: 'October 14, 2026',
  published: '2026-10-14',
  socialProof: '2.2k',
  h1: ['Sole Treadmill F85', 'Review for 2026'],
  standfirst:
    'The F85 is still the top of Sole’s folding range, but the 2026 version is a different machine from the one most reviews describe: a 3.5 HP brushless motor instead of 4.0 HP, a 350 lb rating instead of 375 lb, and no decline. Here are the figures Sole and independent sources agree on, the ones that conflict, and who the new F85 suits.',
  ctas: [
    { label: 'The Short Answer', href: '#short-answer' },
    { label: 'Which F85 Is Which', href: '#generations' },
  ],
  tags: ['sole treadmill f85', 'treadmill f85', 'sole f85 treadmill', 'sole f85 review', 'sole f80 vs f85'],
  stickyCta: { text: 'See the Verdict', link: '#short-answer' },
  breadcrumb: { name: 'Reviews', url: '/reviews/' },
  lead: `Search for the Sole treadmill F85 and the specifications disagree with each other: a 4.0 HP
          or 4.0 CHP motor in most roundups, 3.5 HP on Sole's own product page; 350, 375 or 400 lb of
          user capacity; decline to -6% in some places and none in others. They are not all wrong.
          Sole has sold several machines as the F85, and the 2026 version it sells now changed the
          motor, the capacity rating, the decline and the weight while keeping the 22 by 60-inch deck
          and the 15.6-inch screen. This review covers that current machine, and states a figure only
          where Sole's listing and an independent source agree.`,
  note: `<strong class="text-gray-900">What we checked, and what we have not done.</strong> On
          14 October 2026 we read Sole's US product page and product feed for the F85 (listed as new
          for 2026, item F85-2026), including its specification, warranty and delivery tables. We
          cross-checked each figure against Garage Gym Reviews' F85 review, which describes the 2026
          brushless model and was last updated on 17 August 2026, and against the Flex Marks the Spot
          product listing, a third-party price-tracking site. We also read the Sole-branded
          specification sheet on the site of Dyaco, Sole's parent company, Sole's own F80 versus F85
          article (dated May 2024), and roundups from Home Gym Verdict, Big Guy Treadmill Review and
          Garage Gym Reviews' 2024 comparison to identify which figures belong to earlier F85s. Every
          figure on this page is one that Sole's current listing and at least one independent source
          agree on; where sources disagree, we state both figures and where each comes from rather
          than choosing. We have not tested the F85, and nothing here is our own measurement. Prices
          are those shown on 14 October 2026 and change often, so confirm the price, the
          specification and the warranty for the exact unit before you order. We earn a commission if
          you buy through the Amazon link on this page; it does not change what we say about the
          machine.`,
  products: [
    {
      id: 'sole-f85',
      name: 'Sole F85 (2026)',
      category: 'Folding Treadmill With a 22-Inch Deck',
      badge: '2026 Model',
      amazonUrl: 'https://www.amazon.com/s?k=Sole+F85+Treadmill&tag=sktiger-20',
      priceRange: 'Around $2,100–$2,200',
      specs: '22 x 60 in. deck · 3.5 HP brushless · 0.5-12 mph · 0-15% incline · 350 lb capacity · 15.6 in. touchscreen · folding',
      pros: [
        'A 22 by 60-inch running surface, two inches wider than the 2026 F80’s',
        'A 15.6-inch tilting and swivelling touchscreen with Wi-Fi, Bluetooth speakers and screen mirroring, and no subscription needed',
        'Lifetime frame and motor cover, three years on the deck, electronics and parts and one year of labour, on terms Sole and Garage Gym Reviews agree on',
        'Folds with a release lever and hydraulic assist',
      ],
      cons: [
        'No decline on the 2026 version, which earlier F85s offered',
        'A 350 lb user rating, the same as the cheaper F80 rather than the 375 lb many reviews quote',
        'Large and heavy: 78 by 38 inches set up and 243 lb on Sole’s listing',
        'Top speed is 12 mph, the same as the rest of Sole’s folding range',
      ],
      bottomLine:
        'The folding Sole to buy if you want the 22-inch deck and the biggest screen in the range; not the 4.0 HP, decline-equipped F85 older reviews describe.',
      description:
        "The 2026 F85 has a 22 by 60-inch running surface driven by a 3.5 HP brushless motor, with 0.5 to 12 mph and incline from 0 to 15% and no decline. Sole, Garage Gym Reviews and the Flex Marks the Spot listing all give a 350 lb maximum user weight and a machine weight of 243 lb, and Sole and Garage Gym Reviews give the set-up size as 78 by 38 by 60 inches. Sole and FMTS give the folded size as 48 by 38 by 66 inches. The console is a 15.6-inch touchscreen that tilts and swivels, with a secondary white LED window, Wi-Fi, Bluetooth speakers, screen mirroring and USB-C charging, and Sole's SOLE+ app is free. The warranty on Sole's listing is lifetime on the frame and motor, three years on the deck, electronics and wear parts, one year of labour and 90 days on cosmetic items. On 14 October 2026 Sole listed it at $2,099.99, down from $2,199.99.",
    },
  ],
  sections: [
    {
      id: 'short-answer',
      heading: 'Sole Treadmill F85: The Short Answer',
      products: true,
      html: `          <p>
            The 2026 Sole F85 is a well-built folding treadmill whose case rests on two things: a 22
            by 60-inch deck and a 15.6-inch touchscreen that needs no subscription. Both are confirmed
            by Sole and by independent coverage of the current model, as are the 350 lb user rating,
            incline to 15%, a 12 mph top speed and Sole's lifetime frame and motor warranty.
          </p>
          <p>
            What it is not, any more, is the F85 that most roundups describe. Sole's 2026 listing gives
            a 3.5 HP brushless motor where earlier F85s had 4.0 HP, a 350 lb rating where they had 375
            or 400 lb, and no decline where they went to -6%. It is also much lighter, at 243 lb. The
            result is a machine much closer to the
            <a href="/sole-f80-treadmill/" class="text-[#0F62FE] font-medium">2026 Sole F80</a> than
            the old F85 was to the old F80: the same user rating, speed, incline and warranty, with a
            wider deck, a slightly larger motor and a bigger screen for about $600 more.
          </p>
          <p>
            So the decision is simpler than it used to be. If you want the 22-inch deck, or the largest
            screen on a folding Sole, the F85 is the one to buy. If you were choosing it for decline or
            for extra user capacity, the 2026 version no longer offers either, and you should look at
            the alternatives further down this page.
          </p>`,
    },
    {
      id: 'specs',
      heading: 'The 2026 F85 Specifications, Checked',
      html: `          <p>
            These are the figures on Sole's US product page for the F85 marked new for 2026, checked on
            14 October 2026, with the independent sources that agree. Garage Gym Reviews' F85 review
            (GGR) describes the 2026 brushless model and was last updated on 17 August 2026; Flex Marks
            the Spot (FMTS) is a third-party product and price-tracking site. Figures only Sole
            publishes, such as roller diameters and deck thickness, are left out because we could not
            confirm them independently.
          </p>
          ${table(
            ['Specification', 'Sole’s 2026 listing', 'Also given by'],
            [
              ['Running surface', '22 x 60 in.', 'GGR, FMTS'],
              ['Drive motor', '3.5 HP, brushless', 'GGR, FMTS'],
              ['Speed', '0.5 to 12 mph', 'GGR, FMTS'],
              ['Incline', '0 to 15%, no decline', 'GGR, FMTS'],
              ['Maximum user weight', '350 lb', 'GGR, FMTS'],
              ['Console', '15.6 in. touchscreen plus white LED window, tilts and swivels', 'GGR, FMTS'],
              ['Connectivity', 'Wi-Fi, Bluetooth, screen mirroring, Bluetooth speakers, USB-C', 'FMTS; GGR (Wi-Fi, speakers)'],
              ['Folding', 'Release lever with hydraulic cylinder', 'GGR, FMTS'],
              ['Set-up size', '78 x 38 x 60 in.', 'GGR, FMTS'],
              ['Folded size', '48 x 38 x 66 in.', 'FMTS'],
              ['Machine weight', '243 lb', 'GGR, FMTS'],
              ['Warranty', 'Lifetime frame and motor; 3 years deck, electronics and parts; 1 year labour; 90 days cosmetic', 'GGR (all terms); FMTS (frame, parts, labour, cosmetic)'],
              ['Subscription', 'None required; SOLE+ app is free', 'GGR'],
            ],
          )}
          <p>
            Two notes on Sole's own page. Its specification table describes the incline as "0-15
            levels", while its product description and quick keys give 0, 5, 10 and 15%, and the
            independent sources give 15%; we use the percentage. And Sole quotes the motor as 3.5 HP
            without saying whether that is continuous-duty or peak, so compare it with other brands'
            figures carefully. Our
            <a href="/treadmill-horsepower-guide/" class="text-[#0F62FE] font-medium">horsepower guide</a>
            explains why.
          </p>
          <p>
            One Sole-branded source disagrees on capacity and weight. The F85 2026 specification sheet
            on the site of Dyaco, Sole's parent company, gives a maximum user weight of 330 lb (150 kg)
            and a net weight of 246 lb, while agreeing on the deck, motor, speed, incline, screen and
            set-up and folded dimensions. It names no market and may describe another regional version.
            For a US purchase we have used the US listing, which the independent sources match, but if
            you are near the user limit, ask Sole to confirm 350 lb for your unit.
          </p>`,
    },
    {
      id: 'generations',
      heading: 'Which Treadmill F85 Is Which: Three Versions, One Name',
      html: `          <p>
            Sole has kept the F85 name through several versions, and most of what is published about it
            describes an earlier one. If a review, a retailer listing or a used-machine advert gives
            figures that do not match the table above, this is usually why. Three broad specification
            sets are in circulation.
          </p>
          <p>
            <strong>The older F85.</strong> Garage Gym Reviews' F80 versus F85 comparison, last updated
            in August 2024, describes an F85 with a 4.0 CHP motor, a 400 lb user rating and a machine
            weight of 308 lb, with lifetime cover on the frame, motor and deck, five years on
            electronics and parts and two years of labour. Big Guy Treadmill Review's comparison chart
            (July 2026) still gives 4.0 CHP and 400 lb.
          </p>
          <p>
            <strong>The previous touchscreen F85.</strong> The version most roundups describe has a 4.0
            HP motor, a 375 lb rating, a 15.6-inch touchscreen and decline to -6%. Home Gym Verdict's
            Sole roundup (updated August 2026) gives 4.0 CHP, 375 lb and -6% decline, and Sole's own
            F80 versus F85 article, dated May 2024 though titled as a 2026 guide, gives 4.0 HP and 375
            lb with an assembled size of 82.5 by 38 by 66 inches. That article is not internally
            consistent either: it gives the F85's screen as 10.1 inches in one place and 15.6 inches in
            others.
          </p>
          <p>
            <strong>The 2026 F85.</strong> The machine on Sole's store now, added to its product feed in
            June 2026: 3.5 HP brushless, 22 by 60 inches, 350 lb, 243 lb, 0 to 15% incline and no
            decline. The FMTS listing notes the same thing we found: the 2026 version drops the old
            F85's decline.
          </p>
          ${table(
            ['Figure', 'Sole’s 2026 listing', 'Figure elsewhere', 'Where the other figure appears'],
            [
              ['Motor', '3.5 HP brushless', '4.0 HP; 4.0 CHP', 'Sole’s 2024 article; Home Gym Verdict, Big Guy Treadmill Review, Garage Gym Reviews (2024)'],
              ['Maximum user weight', '350 lb', '375 lb; 400 lb; 330 lb', 'Sole’s 2024 article, Home Gym Verdict; Garage Gym Reviews (2024), Big Guy Treadmill Review; Dyaco-hosted Sole sheet'],
              ['Decline', 'None', 'To -6%', 'Home Gym Verdict'],
              ['Machine weight', '243 lb', '308 lb; 246 lb', 'Garage Gym Reviews (2024); Dyaco-hosted Sole sheet'],
              ['Set-up size', '78 x 38 x 60 in.', '82.5 x 38 x 66 in.', 'Sole’s 2024 article'],
            ],
          )}
          <p>
            Three rules follow. Read the specification on Sole's current product page rather than a
            review, and keep a copy with your order. If you buy from a retailer, ask which version the
            unit is and get the motor rating, user rating and incline range in writing. And if a
            listing promises decline or a 4.0 HP motor, it is describing an earlier F85; that may be a
            machine you want, but it should be priced and warranted as what it is. Our guide to
            <a href="/how-to-read-treadmill-reviews/" class="text-[#0F62FE] font-medium">reading treadmill reviews</a>
            covers the wider problem of reviews that update their date but not their figures.
          </p>`,
    },
    {
      id: 'deck-motor-capacity',
      heading: 'The 22-Inch Deck, the Brushless Motor and the 350 lb Rating',
      html: `          <p>
            <strong>The deck is the reason to buy it.</strong> Sole lists two touchscreen folding
            models with a 22-inch belt in its current US range, the F85 and the new F83, and the F85 is
            the only one of the two with independent coverage of its 2026 version. Two extra inches over the
            20-inch decks on the F63, <a href="/sole-f65-treadmill/" class="text-[#0F62FE] font-medium" data-autolink>F65</a> and 2026 F80 give your stride room to wander at speed, more
            space for a wide gait or a long arm swing, and more margin for a moment of fatigue late in a
            session. Taller and heavier runners and anyone doing fast intervals notice it most. Our
            <a href="/treadmill-belt-size-guide/" class="text-[#0F62FE] font-medium">belt size guide</a>
            works out what length and width your height and pace call for.
          </p>
          <p>
            Sole describes the F85's deck as using its CushionFlex 3.0 cushioning and makes a
            joint-impact claim for it that Garage Gym Reviews notes it could not validate, and nor can we.
            Garage Gym Reviews describes the cushioning as decent but less soft than some comparable
            machines. Our
            <a href="/treadmill-cushioning-explained/" class="text-[#0F62FE] font-medium">cushioning explainer</a>
            covers what deck cushioning changes and what it does not.
          </p>
          <p>
            <strong>The motor is smaller than before, and different.</strong> A 3.5 HP brushless motor
            replaces the 4.0 HP motor of earlier F85s. Sole says its brushless motors run quieter, last
            longer and use less energy; those are Sole's claims, and the 2026 version is too new for
            long-term evidence. A brushless motor has no carbon brushes to wear, which removes one
            replacement part found on brushed DC motors. Our guides to
            <a href="/treadmill-motor-brushes/" class="text-[#0F62FE] font-medium">motor brushes</a>
            and <a href="/ac-vs-dc-treadmill-motor/" class="text-[#0F62FE] font-medium">AC versus DC motors</a>
            explain the trade-offs. For most home runners the rating is unlikely to be the limit; the
            point is that "the F85 has the bigger motor" is now a difference of 0.25 HP over the F80,
            not the 0.5 HP older comparisons describe.
          </p>
          <p>
            <strong>The capacity is the same as the F80's.</strong> Older reviews recommend the F85 to
            heavier users because it carried a higher user rating than the F80. On Sole's 2026 listings
            both are rated at 350 lb. A rating is a ceiling rather than a comfortable operating point,
            and we suggest leaving a margin of around a quarter of your body weight. If you weigh more
            than about 280 lb and run, our
            <a href="/best-treadmills-for-heavy-people/" class="text-[#0F62FE] font-medium">high-capacity treadmills</a>
            guide covers machines with more headroom.
          </p>`,
    },
    {
      id: 'decline',
      heading: 'No Decline on the 2026 F85',
      html: `          <p>
            Decline was one of the main reasons people chose the F85 over the F80, and it is the change
            most likely to catch a buyer out. Sole's 2026 listing gives an incline range of 0 to 15%
            only, Garage Gym Reviews lists the F85 as not recommended for people who want decline
            training, and the FMTS listing says the 2026 version drops the earlier -6% decline. Garage
            Gym Reviews' tester said she wished it had a decline option at this price.
          </p>
          <p>
            Decline matters for a specific group: runners training for hilly or downhill races, and
            people who want to vary the load on their legs beyond incline walking. For most home users
            incline is the more useful of the two, and 15% is a generous maximum. Our
            <a href="/what-is-treadmill-decline-good-for/" class="text-[#0F62FE] font-medium">guide to decline</a>
            explains who genuinely benefits.
          </p>
          <p>
            If you need it, there are three routes. Sole's non-folding TT8 lists decline, but it was shown as
            sold out on Sole's store when we checked. A used or older-stock F85 may have
            decline, but confirm it on the actual unit. Or look outside Sole: our
            <a href="/best-treadmills-with-decline/" class="text-[#0F62FE] font-medium">decline treadmill roundup</a>
            covers machines you can buy now. The
            <a href="/sole-f89-treadmill/" class="text-[#0F62FE] font-medium">Sole F89</a>, which had
            decline, is no longer on Sole's US store.
          </p>`,
    },
    {
      id: 'console',
      heading: 'The 15.6-Inch Screen and the No-Subscription Position',
      html: `          <p>
            The F85 has what Sole calls the largest display in its current lineup: a 15.6-inch touchscreen that
            tilts and swivels so you can turn it towards a floor mat, with a secondary white LED window
            that keeps speed, time and distance visible while the screen shows something else. Sole
            lists Wi-Fi, Bluetooth, screen mirroring, two Bluetooth speakers, built-in cooling fans and a
            USB-C charging port, with roller-style speed and incline controls and quick keys for set
            speeds and inclines.
          </p>
          <p>
            Nothing on the F85 needs a membership. Sole describes its SOLE+ app as free with no monthly
            subscription, Garage Gym Reviews describes the app as totally free, and the treadmill's
            speed, incline and built-in programs run from the console. Sole lists more than 20 built-in
            programs. That is the main practical difference from NordicTrack and ProForm, whose screens
            are built around a paid iFIT membership; our
            <a href="/sole-vs-nordictrack/" class="text-[#0F62FE] font-medium">Sole versus NordicTrack</a>
            comparison and
            <a href="/best-treadmills-without-subscriptions/" class="text-[#0F62FE] font-medium">treadmills without subscriptions</a>
            roundup set out what that is worth over five years.
          </p>
          <p>
            Be clear about what the screen buys. It runs streaming apps, mirroring and Sole's app; it
            does not unlock treadmill functions the cheaper models lack. If you already watch on a
            tablet, the screen is a convenience rather than a reason to buy. If you want a large,
            built-in screen that costs nothing after purchase, few folding treadmills at this price
            offer one.
          </p>`,
    },
    {
      id: 'warranty',
      heading: 'The Warranty, Read by Component',
      html: `          <p>
            Sole's warranty table for the 2026 F85 gives lifetime cover on the frame and motor, three
            years on the deck, three years on electronics, three years on wear items and parts, one
            year of labour and 90 days on cosmetic items. Garage Gym Reviews gives the same terms, and
            the FMTS listing agrees on the frame, parts, labour and cosmetic terms. Unlike the F80, we
            found no conflict on the F85's current warranty.
          </p>
          <p>
            The lifetime frame and motor cover is the strongest part of it and the main reason Sole is
            shortlisted against brands that cover motors for only a few years. The short term is labour:
            after the first year, a technician's visit is normally at your expense even when the part
            is covered. Earlier F85s carried a different warranty; Garage Gym Reviews' 2024 comparison
            gives lifetime cover on the deck, five years on electronics and parts and two years of
            labour. If you are buying older stock or a used machine, the terms that apply are the ones
            attached to that unit.
          </p>
          <p>
            Warranty terms usually assume residential use and can vary by retailer. Our
            <a href="/treadmill-warranty-guide/" class="text-[#0F62FE] font-medium">treadmill warranty guide</a>
            explains how to read each term. We found no CPSC recall or product safety warning for Sole
            treadmills when we searched on 14 October 2026.
          </p>`,
    },
    {
      id: 'space-and-delivery',
      heading: 'Size, Folding, Delivery and Assembly',
      html: `          <p>
            The F85 is a big machine. Sole lists it at 78 by 38 by 60 inches set up and 243 lb, and
            Garage Gym Reviews gives the same figures; it folds upright with a release lever and a
            hydraulic cylinder to 48 by 38 by 66 inches. That is lighter than earlier F85s, which
            Garage Gym Reviews' 2024 comparison put at 308 lb, but it is still 25 lb heavier and four inches
            wider than the 2026 F80.
          </p>
          <p>
            Two independent reviewers make the same point about folding treadmills of this size:
            Garage Gym Reviews lists a large footprint even when folded among the F85's cons, and
            OutdoorGearLab said of the F80 that folding does not gain much real estate. Folding saves
            floor length, not width or weight, and you still need clearance behind the deck when it is
            in use. Our
            <a href="/treadmill-dimensions-space-requirements/" class="text-[#0F62FE] font-medium">space requirements guide</a>
            covers run-off space and ceiling height, and remember to add the incline lift and your own
            height when checking a low ceiling.
          </p>
          <p>
            <strong>Delivery.</strong> Sole ships the F85 by LTL freight to your curb for $99.99, quoting
            10 to 14 business days, with two upgrades at checkout: delivery to the room of your choice
            for $200 more, or room of choice with assembly for $350 more. Garage Gym Reviews describes
            the same three tiers and prices. Sole also lists a 30-day satisfaction guarantee. Garage Gym
            Reviews lists difficult assembly as a con, and OutdoorGearLab found setting up the F80
            relatively challenging, so for a 243 lb machine the assembly upgrade is a reasonable
            purchase rather than an extravagance. Our
            <a href="/treadmill-delivery-guide/" class="text-[#0F62FE] font-medium">delivery guide</a>
            explains what each service level includes.
          </p>
          <p>
            Plug it into a grounded outlet on a circuit it does not share with a large appliance, avoid
            extension leads, and if it is going on carpet read
            <a href="/treadmill-on-carpet/" class="text-[#0F62FE] font-medium">treadmills on carpet</a>
            first. Then keep up the basics:
            <a href="/treadmill-belt-lubrication/" class="text-[#0F62FE] font-medium">lubrication</a>,
            belt tension and a clean motor compartment, all covered in
            <a href="/treadmill-maintenance/" class="text-[#0F62FE] font-medium">our maintenance schedule</a>.
          </p>`,
    },
    {
      id: 'f85-vs-alternatives',
      heading: 'Sole F80 vs F85, and the Alternatives',
      html: `          <p>
            <strong>F85 vs F80.</strong> On Sole's 2026 listings the two share the same 350 lb rating,
            0.5 to 12 mph, incline to 15% with no decline, and the same component warranty. The F85
            adds a 22-inch belt instead of 20 inches, a 3.5 HP motor instead of 3.25 HP and a 15.6-inch
            screen instead of 10.1 inches, on a frame Sole lists at 243 lb against the F80's 218 lb. On
            14 October 2026 the F85 cost $2,099.99 on Sole's store and the F80 $1,499.99, a $600 gap.
            Buy the F85 for the deck first and the screen second; if neither matters, the
            <a href="/sole-f80-treadmill/" class="text-[#0F62FE] font-medium">F80</a> does the same
            job for less.
          </p>
          <p>
            <strong>F85 vs F83.</strong> Sole's 2026 range also includes a new F83, which Sole lists with
            a 22-inch deck and the F80's smaller screen for less than the F85. We found no independent
            coverage of the 2026 F83 to confirm its figures, and an older, different F83 still appears
            in reseller listings, so if you consider it, check the specification and model year with
            Sole first.
          </p>
          <p>
            <strong>F85 vs the subscription brands.</strong> If you want instructor-led classes that
            adjust speed and incline for you, the
            <a href="/nordictrack-commercial-1750-treadmill/" class="text-[#0F62FE] font-medium">NordicTrack Commercial 1750</a>
            is the usual comparison, with an iFIT membership attached; price five years of it before
            comparing sticker prices.
          </p>
          <p>
            <strong>F85 vs a commercial-style machine.</strong> If you run high mileage every week and
            do not need a folding machine, a non-folding light-commercial treadmill is a different
            category, built for longer daily use. Our
            <a href="/commercial-treadmills/" class="text-[#0F62FE] font-medium">commercial treadmill guide</a>
            and <a href="/treadmills-over-2500/" class="text-[#0F62FE] font-medium">premium tier guide</a>
            cover where that extra spending starts to make sense. For the rest of Sole's range, see our
            <a href="/best-sole-treadmills/" class="text-[#0F62FE] font-medium">best Sole treadmills</a>
            guide.
          </p>`,
    },
    {
      id: 'price',
      heading: 'Price, Sales and Black Friday',
      html: `          <p>
            On 14 October 2026 Sole's store listed the 2026 F85 at $2,099.99, down from $2,199.99; the
            FMTS listing showed the same two prices, and Garage Gym Reviews gives $2,199.99 as the list
            price. Delivery upgrades and protection plans are extra. Sole's 2024 comparison article
            quoted a higher price for the earlier F85, which is one more sign of how much has changed
            under the name.
          </p>
          <p>
            We cannot say what the F85 will cost on Black Friday or in any other sale, and we do not
            promise future prices. What we can say is how to judge a deal when you see one: check that
            the listing is the 2026 version or knowingly an earlier one, compare the delivered price
            including any assembly, and check the price history rather than the claimed saving. Our
            <a href="/treadmill-black-friday-deals/" class="text-[#0F62FE] font-medium">Black Friday guide</a>
            explains how, and
            <a href="/best-time-of-year-to-buy-a-treadmill/" class="text-[#0F62FE] font-medium">the timing guide</a>
            covers when treadmill discounts tend to be real.
          </p>`,
    },
    {
      id: 'who-should-buy',
      heading: 'Who Should Buy the Sole F85, and Our Verdict',
      html: `          <p>
            <strong>Buy it if</strong> you want a folding treadmill with a 22-inch deck, you run often
            enough or fast enough for the extra width to matter, you want a large built-in screen with
            no subscription, and you have the floor space for a 38-inch-wide machine. It also suits a
            household whose users differ widely in height and stride.
          </p>
          <p>
            <strong>Look elsewhere if</strong> you need decline, which the 2026 F85 does not have; you
            need more than a 350 lb rating with a comfortable margin; you want classes that control the
            machine; or a 20-inch deck is enough for you, in which case the F80 or <a href="/sole-f63-treadmill/" class="text-[#0F62FE] font-medium" data-autolink>F63</a> does the job for
            less.
          </p>
          <p>
            <strong>Our verdict.</strong> The 2026 Sole treadmill F85 is a sound buy for the right
            person: the widest deck and largest screen in Sole's folding range, a free app, and lifetime
            frame and motor cover, at about $2,100. It is a narrower step up from the F80 than it used to
            be, because the 2026 versions share the same user rating, speed, incline and warranty, and
            the F85 has lost its decline. Buy it for the deck and the screen, not for the capacity or
            the decline that older reviews describe.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'Is the Sole F85 worth it over the F80?',
      a: 'On the 2026 versions, mainly if you want the wider deck. The F85 has a 22 by 60-inch belt, a 3.5 HP motor and a 15.6-inch screen; the F80 has 20 by 60 inches, 3.25 HP and 10.1 inches. Both are rated at 350 lb, reach 12 mph and 15% incline, and carry the same warranty. On 14 October 2026 the F85 cost $600 more on Sole’s store.',
    },
    {
      q: 'Does the Sole F85 have decline?',
      a: 'Not the 2026 version. Sole’s current listing gives an incline range of 0 to 15% only, and Garage Gym Reviews and the FMTS listing agree. Earlier F85s offered decline to -6%, which is why many reviews still mention it. If you need decline, confirm it on the specific unit or look at our decline treadmill roundup.',
    },
    {
      q: 'What motor does the treadmill F85 have?',
      a: 'The 2026 F85 has a 3.5 HP brushless motor on Sole’s listing, and Garage Gym Reviews agrees. Many roundups still give 4.0 HP or 4.0 CHP, which are the figures for earlier F85s. Sole does not say whether its 3.5 HP figure is continuous-duty or peak.',
    },
    {
      q: 'What is the Sole F85 weight capacity?',
      a: 'Sole’s US listing gives 350 lb for the 2026 F85, and Garage Gym Reviews and the FMTS listing agree. Older sources give 375 lb or 400 lb for earlier versions, and a Sole-branded sheet on the parent company Dyaco’s site gives 330 lb. Confirm the rating for your unit if you are near the limit.',
    },
    {
      q: 'Does the Sole F85 need a subscription?',
      a: 'No. Sole’s SOLE+ app is free with no monthly subscription, and the treadmill’s speed, incline and built-in programs run from the console. The 15.6-inch touchscreen adds streaming apps and screen mirroring rather than unlocking treadmill features.',
    },
    {
      q: 'How big and heavy is the Sole F85?',
      a: 'Sole and Garage Gym Reviews give 78 by 38 by 60 inches set up and 243 lb. Sole and the FMTS listing give the folded size as 48 by 38 by 66 inches. Earlier F85s were heavier, which is one way to tell the versions apart.',
    },
    {
      q: 'What is the Sole F85 warranty?',
      a: 'Sole’s 2026 listing and Garage Gym Reviews agree: lifetime on the frame and motor, three years on the deck, electronics and wear parts, one year of labour and 90 days on cosmetic items. Earlier F85s carried different terms, so if you buy older stock, check the warranty attached to that unit.',
    },
  ],
  mistakesHeading: 'Common Mistakes Buying a Sole F85',
  mistakesIntro:
    'Most of these come from buying the F85 on the strength of a version that is no longer on sale.',
  mistakes: [
    {
      title: 'Buying it for decline',
      body: 'Earlier F85s declined to -6%; the 2026 version does not decline at all. If downhill training is the reason you want an F85, confirm decline on the exact unit before ordering, or choose a different machine.',
    },
    {
      title: 'Buying it for extra capacity',
      body: 'Older comparisons rate the F85 higher than the F80. On Sole’s 2026 listings both are rated at 350 lb. If capacity is your concern, the F85 no longer solves it, and a high-capacity machine may be the better choice.',
    },
    {
      title: 'Trusting a listing’s specification block',
      body: 'Retailer and reseller listings often carry forward older figures, including 4.0 HP and 375 lb. Read Sole’s current product page, ask the seller which version the unit is, and keep a copy of the specification with your order.',
    },
    {
      title: 'Underestimating the delivery',
      body: 'At 243 lb and 38 inches wide, the F85 is delivered to the curb unless you pay for more. Measure doorways, stair turns and the room, and decide on the room-of-choice or assembly upgrade before ordering rather than on delivery day.',
    },
  ],
  relatedHeading: 'Related Sole Reviews &amp; Guides',
  related: [
    {
      kicker: 'Model Review',
      title: 'Sole F80 Treadmill Review',
      blurb: 'The 20-inch-deck alternative, and what changed for 2026.',
      url: '/sole-f80-treadmill/',
    },
    {
      kicker: 'Buying Guide',
      title: 'Best Sole Treadmills',
      blurb: 'The current Sole range ranked, with the conflicting figures flagged.',
      url: '/best-sole-treadmills/',
    },
    {
      kicker: 'Decline',
      title: 'Best Treadmills With Decline',
      blurb: 'Machines that still offer the decline the 2026 F85 dropped.',
      url: '/best-treadmills-with-decline/',
    },
  ],
  bottomLine: [
    `The 2026 <strong class="text-white">Sole F85</strong> is the folding Sole with the 22 by
            60-inch deck and the 15.6-inch screen, with a 3.5 HP brushless motor, a 350 lb rating, no
            subscription and lifetime frame and motor cover, at about $2,100.`,
    `It has no decline and the same user rating as the cheaper F80, so buy it for the deck and the
            screen. Confirm the version with the seller, and compare the
            <a href="/sole-f80-treadmill/" class="text-[#5AA9FF] font-bold no-underline">Sole F80</a>
            if 20 inches is wide enough for you.`,
  ],
};

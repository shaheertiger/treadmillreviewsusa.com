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
  slug: 'nordictrack-c950i-treadmill',
  title: 'NordicTrack C950i Treadmill (2026): Specs, iFIT, Buying Used',
  description:
    'The NordicTrack C950i is discontinued. What its published figures were, which ones only one source gives, what iFIT’s 2023 cut-off means for it, where parts come from, how to check a used one, and the current NordicTrack models that replaced it.',
  crumbLabel: 'NordicTrack C950i Treadmill',
  kicker: 'Model Review',
  updated: 'November 2026',
  updatedLong: 'November 5, 2026',
  published: '2026-11-05',
  socialProof: '1.1k',
  h1: ['NordicTrack C950i', 'Treadmill: Buying One Now'],
  standfirst:
    'The C950i was a mid-priced folding NordicTrack from the iFIT-compatible era, and it is no longer made. If you are looking at one secondhand, or own one and wonder what it is worth keeping, this page sets out what is known about it, what iFIT and parts support look like in 2026, and which current NordicTrack does the same job.',
  ctas: [
    { label: 'Buying a Used C950i', href: '#buying-used' },
    { label: 'What Replaced It', href: '#replacements' },
  ],
  tags: [
    'nordictrack c950i',
    'nordictrack c950i treadmill',
    'nordictrack c950i specs',
    'nordictrack c950i used',
    'nordictrack c950i ifit',
  ],
  stickyCta: { text: 'See the Verdict', link: '#verdict' },
  breadcrumb: { name: 'Reviews', url: '/reviews/' },
  lead: `The NordicTrack C950i is a folding treadmill that NordicTrack no longer makes or sells. It still
          turns up on local marketplaces, and people who search for it are usually deciding whether a used
          one is worth the asking price, or whether the one in their basement is worth repairing. The
          honest answer depends on three things this page covers: what the machine was when new, which is
          documented thinly; what iFIT’s decision to end support for older machines in 2023 means for its
          console; and whether the parts that wear out can still be found. We end with the current
          NordicTrack models that do the same job new.`,
  note: `<strong class="text-gray-900">What we checked, and what we have not done.</strong> On
          5 November 2026 we searched for the C950i on NordicTrack’s US site (which refused our automated
          requests on the day), in owner’s-manual archives, in parts retailers’ catalogues and in independent
          reviews. The only full independent specification we found is Garage Gym Reviews’ review (updated
          21 August 2024), which says the machine is no longer in production; we found no second source that
          confirms its weight capacity, incline range or motor rating, so those figures are presented as one
          review’s and kept off the product card. Manual archives give the model number 831.25044.0, and
          parts catalogues list 831.25044.2 and 831.25044.5 versions. We read iFIT’s own notice ending
          support for older machines on 30 April 2023. Parts prices quoted are from third-party listings
          that appeared in search results on 5 November 2026; we have not checked their fitment. The T Series
          10 and Commercial 1250 figures on their cards were checked for our NordicTrack reviews in October
          2026; we could not read current prices on nordictrack.com on 5 November, so their cards carry no
          price. We searched the US Consumer Product Safety Commission’s recall database for NordicTrack and
          found recalls of NordicTrack rowing machines (2025) and iSelect dumbbells (2024), and none of the
          C950i. We have not tested a C950i. We earn a commission if you buy through an Amazon link on this
          page; it does not change what we say.`,
  products: [
    {
      id: 'nordictrack-c950i',
      name: 'NordicTrack C950i',
      category: 'Discontinued Folding iFIT-Compatible Treadmill',
      badge: 'Used Only',
      amazonUrl: 'https://www.amazon.com/s?k=NordicTrack+C950i+Treadmill&tag=sktiger-20',
      priceRange: 'Discontinued: used only',
      specs: '20 x 60 in. belt · folding SpaceSaver frame · model no. 831.25044.x · iFIT-compatible console',
      pros: [
        'A full 20 by 60-inch belt on a folding frame',
        'Built-in programs that work without iFIT',
        'Common parts such as walking belts and drive belts are still listed by third-party sellers',
      ],
      cons: [
        'No longer made, so no new warranty',
        'iFIT ended support for older-generation machines in April 2023',
        'Weight capacity, incline and motor figures rest on a single review',
        'The one full independent review found it wobbly at incline for heavier runners',
      ],
      bottomLine:
        'Worth buying only cheaply, after a full test run, and only if you are happy to use it without iFIT. Otherwise a current T Series 10 is the safer buy.',
      description:
        'The C950i is a discontinued NordicTrack folding treadmill with a 20 by 60-inch belt, a SpaceSaver fold with assisted lift, FlexSelect adjustable cushioning and an iFIT-compatible console. Manual archives give its model number as 831.25044.0, and parts catalogues list later 831.25044.2 and 831.25044.5 versions. Garage Gym Reviews lists a 3.0 CHP motor, 0 to 12 mph, 0 to 15% incline, a 350 lb capacity, 32 workout programs, a 7-inch display and a 78 by 36 by 56-inch footprint, but we found no second source for those figures. It is only available used.',
    },
    {
      id: 'nordictrack-t-series-10',
      name: 'NordicTrack T Series 10',
      category: 'Closest Current Folding Equivalent',
      badge: 'Closest Replacement',
      amazonUrl: 'https://www.amazon.com/s?k=NordicTrack+T+Series+10+Treadmill&tag=sktiger-20',
      reviewUrl: '/nordictrack-t-series-treadmill/',
      priceRange: 'Check current price (not read on 5 Nov 2026)',
      specs: '20 x 60 in. belt · 3.0 CHP (NordicTrack rating) · 0-12% incline · 0-12 mph · 325 lb max user · 10 in. tilting touchscreen',
      pros: [
        'The same 20 by 60-inch folding format with a current warranty',
        'A 10-inch touchscreen with full current iFIT support',
        'A manual mode for use without a membership',
      ],
      cons: [
        'Incline tops out at 12%, below the 15% the C950i was reported to reach',
        'Many features need an iFIT membership',
        'Lower stated capacity than one review gives for the C950i',
      ],
      bottomLine:
        'The current NordicTrack closest to what the C950i was: a folding 60-inch iFIT treadmill at a mid-range price.',
      description:
        'The T Series 10 is NordicTrack’s current mid-range folding treadmill. In our October 2026 T Series review NordicTrack and independent sources agreed on a 20 by 60-inch belt, a 3.0 CHP motor (NordicTrack’s rating), 0 to 12 mph, 0 to 12% incline, a 325 lb rating and a 10-inch tilting touchscreen. It runs current iFIT software, which needs a paid membership for classes and automatic speed and incline control. We could not read NordicTrack’s price on 5 November 2026, so check it on the day.',
    },
    {
      id: 'nordictrack-commercial-1250',
      name: 'NordicTrack Commercial 1250',
      category: 'Sturdier Current Step-Up',
      badge: 'Step Up',
      amazonUrl: 'https://www.amazon.com/s?k=NordicTrack+Commercial+1250+Treadmill&tag=sktiger-20',
      reviewUrl: '/nordictrack-commercial-1250-treadmill/',
      priceRange: 'Check current price (not read on 5 Nov 2026)',
      specs: '22 x 60 in. belt · 3.6 CHP (NordicTrack lab rating) · -3% to 12% incline · 0-12 mph · 400 lb max user · 10 in. tilting touchscreen',
      pros: [
        'A wider 22-inch belt, 3% decline and a 400 lb rating',
        'A heavier frame than the T Series',
        'Full current iFIT support',
      ],
      cons: [
        'Costs more than the T Series 10',
        'Still 12% maximum incline',
        'iFIT membership needed for most of the console’s features',
      ],
      bottomLine:
        'The better choice if the reported wobble of the C950i at incline is what put you off it, or if you are a heavier runner.',
      description:
        'The Commercial 1250 sits above the T Series in NordicTrack’s range. Our October 2026 review confirmed a 22 by 60-inch belt, a 3.6 CHP motor (NordicTrack’s lab rating), 0 to 12 mph, incline from -3% to 12%, a 400 lb rating, a 10-inch tilting touchscreen and a folding frame. It runs current iFIT. We could not read NordicTrack’s price on 5 November 2026, so check it on the day.',
    },
  ],
  sections: [
    {
      id: 'short-answer',
      heading: 'NordicTrack C950i: The Short Answer',
      products: true,
      html: `          <p>
            <strong>The NordicTrack C950i is discontinued, so the only way to buy one is used, and a used one
            is only worth buying cheaply, after a proper test, and on the understanding that it is a manual
            treadmill now.</strong> iFIT ended support for older-generation machines on 30 April 2023; machines
            that lost support still run in manual mode with their preloaded workouts.
          </p>
          <p>
            What made the C950i appealing when new still holds: a full 20 by 60-inch belt on a folding frame,
            with built-in programs. What counts against it is age, a thinly documented specification, and the
            one full independent review we found, which judged it a decent walking treadmill with a powerful
            motor but a frame that felt wobbly at incline for heavier runners.
          </p>
          <p>
            If you want the same kind of machine new, NordicTrack’s T Series 10 is the closest current
            equivalent and the Commercial 1250 the sturdier step up. We have not tested any of them.
          </p>`,
    },
    {
      id: 'what-it-was',
      heading: 'What the C950i Was',
      html: `          <p>
            The C950i belonged to NordicTrack’s older "C" folding range, the family that also included the
            <a href="/nordictrack-c-990-treadmill/" class="text-[#0F62FE] font-medium">C 990</a> and that the
            current <a href="/nordictrack-c-700-treadmill/" class="text-[#0F62FE] font-medium">C 700</a> carries
            on. The "i" marked it as iFIT-compatible: it could connect to iFIT’s workouts, Google Maps routes and
            trainer-led sessions, which changed speed and incline automatically.
          </p>
          <p>
            NordicTrack no longer lists it, and we found no date for when it stopped being sold. An owner’s
            manual archive lists the model number 831.25044.0, and a manual revision code that suggests a
            2015 print. Parts catalogues list two later versions, 831.25044.2 and 831.25044.5. The manual
            refers to Bluetooth and to registering the machine on NordicTrack’s service site to activate the
            warranty. Garage Gym Reviews gave its original price as $1,799.
          </p>
          <p>
            Its features, as described by that review: a SpaceSaver folding frame with assisted lift,
            FlexSelect cushioning that could be set firmer or softer, an AutoBreeze fan, CardioGrip hand-grip
            heart-rate sensors, speakers with a music input, and 32 built-in workouts. Those are typical of
            mid-priced NordicTrack folding machines of the period.
          </p>`,
    },
    {
      id: 'specifications',
      heading: 'C950i Specifications: What Is Known',
      html: `          <p>
            NordicTrack no longer publishes a C950i page, and we found only one independent source with a full
            specification. The table shows what that source says and how far each figure is supported.
          </p>
          ${table(['Specification', 'Figure', 'Status'], [
            tr(['Walking belt', '20 x 60 in.', 'Review; consistent with belt listings for the model']),
            tr(['Folding', 'Yes, SpaceSaver with assisted lift', 'Review and manual']),
            tr(['Model numbers', '831.25044.0; .2 and .5 versions listed for parts', 'Manual archive and parts catalogues']),
            tr(['Motor', '3.0 CHP "DurX Commercial Pro"', 'One review only']),
            tr(['Speed', '0-12 mph', 'One review only']),
            tr(['Incline', '0-15%', 'One review only']),
            tr(['Maximum user weight', '350 lb', 'One review only; unconfirmed']),
            tr(['Display', '7 in. backlit display with touchscreen', 'One review only']),
            tr(['Programs', '32 built-in workouts, iFIT-compatible', 'One review only']),
            tr(['Footprint / weight', '78 x 36 x 56 in. / 216 lb', 'One review only']),
            tr(['Warranty when new', 'Lifetime frame and motor, 3 yr parts, 1 yr labour', 'One review only; no longer relevant to a used buyer']),
          ])}
          <p>
            Treat the 350 lb capacity with particular care. It is the figure that matters most for safety, and
            NordicTrack folding machines of that era were often rated lower; the manuals we saw for other models
            carried 300 lb limits. The manual’s warning decal on the machine itself states the maximum user
            weight, so read it on any C950i you look at, and use the lower of the decal and any listing.
          </p>`,
    },
    {
      id: 'ifit',
      heading: 'iFIT on a C950i in 2026',
      html: `          <p>
            iFIT announced that it was discontinuing support for older-generation machines on 30 April 2023.
            Its notice says affected machines lose access to all iFIT software updates and workouts, but can
            still be used in manual mode and for any workouts preloaded on the machine. It singles out machines
            that use an external iFIT Wifi Module as affected, and asks owners to compare their console with the
            pictures in the notice, or to contact iFIT by email (upgrade@ifit.com) or phone (844-867-4562) if
            unsure.
          </p>
          <p>
            We could not find a model-by-model list. A C950i belongs to the generation the notice describes,
            and the safe assumption when buying one is that iFIT will not work and you are buying a manual
            treadmill with built-in programs. If a seller says iFIT works on theirs, ask to see it run an iFIT
            workout during your visit.
          </p>
          <p>
            That is less of a loss than it sounds if you mostly walk or run at set speeds; a phone app or a
            watch can track the workout. Our guide to
            <a href="/can-you-use-nordictrack-without-ifit/" class="text-[#0F62FE] font-medium">using a NordicTrack without iFIT</a>
            covers what still works, and <a href="/is-ifit-worth-it/" class="text-[#0F62FE] font-medium">is iFIT worth it</a>
            covers the membership on a current machine.
          </p>`,
    },
    {
      id: 'parts',
      heading: 'Parts and Repairs',
      html: `          <p>
            The good news for a C950i owner is that the parts that wear most are still listed. In search results
            on 5 November 2026 we saw:
          </p>
          <ul>
            <li><strong>Walking belts</strong> listed for the C950i under two part numbers, 250440 ($119.99 at a Walmart marketplace seller) and 250445 ($129.99 on eBay). The numbers differ, so match the part to your model’s parts list before ordering.</li>
            <li><strong>A lower motor control board</strong> listed as fitting the 25044.2 version, at $199.99 on eBay.</li>
            <li><strong>A drive (motor) belt</strong> listed under the C950i at $38.06 by a fitness parts retailer, which also carries a parts list for the 831.25044.5 version.</li>
          </ul>
          <p>
            None of these come from NordicTrack, and we have not checked fitment. Start from the model number on
            the decal on the frame, since the .0, .2 and .5 versions may use different parts, and use the
            exploded drawing in your manual to identify the part. A walking belt is a reasonable home job with
            our <a href="/how-to-replace-treadmill-belt/" class="text-[#0F62FE] font-medium">belt replacement guide</a>;
            <a href="/treadmill-belt-replacement-cost/" class="text-[#0F62FE] font-medium">belt replacement cost</a>
            sets out what a technician charges.
          </p>
          <p>
            The harder failures are consoles and control boards. A console for an older iFIT machine can cost a
            large share of what a used C950i is worth, and a replacement board is only worthwhile if the motor
            and deck are sound. Our guide to <a href="/how-long-do-treadmill-motors-last/" class="text-[#0F62FE] font-medium">how long treadmill motors last</a>
            helps judge that, and <a href="/how-to-reset-nordictrack-treadmill/" class="text-[#0F62FE] font-medium">resetting a NordicTrack</a>
            is worth trying before you buy any electronics.
          </p>`,
    },
    {
      id: 'buying-used',
      heading: 'Buying a Used NordicTrack C950i',
      html: `          <p>
            A C950i on a local marketplace is likely to be several years old. Use our
            <a href="/where-to-buy-a-used-treadmill/" class="text-[#0F62FE] font-medium">guide to where to buy a used treadmill</a>
            to find one, and check these on the spot:
          </p>
          <ol>
            <li><strong>The decal.</strong> Note the model number (831.25044.0, .2 or .5) and the maximum user weight printed on the warning label.</li>
            <li><strong>Run it for ten minutes.</strong> Walk, then run at 6 mph or above, and take the incline to the top. Listen for grinding, clicking or a motor that labours, and watch for the belt hesitating under your foot.</li>
            <li><strong>Check the frame at incline.</strong> The review we read found it wobbly at incline under heavier runners; feel for flex at the top of the range.</li>
            <li><strong>Lift the belt edge.</strong> A dry, glazed or frayed belt and a scored deck mean a belt replacement soon. Our <a href="/used-treadmill-buying-checklist/" class="text-[#0F62FE] font-medium">used treadmill checklist</a> explains what to look for.</li>
            <li><strong>Fold and unfold it.</strong> The assisted lift should hold the deck and lower it smoothly.</li>
            <li><strong>Test the console fully.</strong> Every button, the display, the speed and incline keys and the safety key. Assume iFIT does not work.</li>
            <li><strong>Plan the move.</strong> At about 216 lb, by the review’s figure, it needs two people and a clear route; see our <a href="/how-to-move-a-treadmill/" class="text-[#0F62FE] font-medium">moving guide</a>.</li>
          </ol>
          <p>
            On price, we do not publish a figure because used prices vary so much by area. Measure it against a
            new machine: a used C950i has no warranty, no iFIT and an ageing belt and console, so it should cost
            a small fraction of a new T Series 10. Our <a href="/new-vs-used-treadmill/" class="text-[#0F62FE] font-medium">new vs used guide</a>
            sets out how much a used machine typically loses.
          </p>`,
    },
    {
      id: 'replacements',
      heading: 'What Replaced the C950i',
      html: `          <p>
            NordicTrack has not named a direct successor. Garage Gym Reviews pointed C950i readers to the EXP 10i,
            which has itself since been replaced by the T Series 10. Today the closest current models are:
          </p>
          ${table(['Figure', 'C950i (one review)', 'T Series 10', 'Commercial 1250'], [
            tr(['Belt', '20 x 60 in.', '20 x 60 in.', '22 x 60 in.']),
            tr(['Incline', '0-15%', '0-12%', '-3% to 12%']),
            tr(['Top speed', '12 mph', '12 mph', '12 mph']),
            tr(['Max user weight', '350 lb (unconfirmed)', '325 lb', '400 lb']),
            tr(['Screen', '7 in.', '10 in. tilting touchscreen', '10 in. tilting touchscreen']),
            tr(['iFIT', 'Support ended 2023', 'Current', 'Current']),
          ])}
          <p>
            <strong>T Series 10.</strong> The same idea in current form: a folding 60-inch iFIT treadmill at a
            mid-range price, with a bigger screen and a warranty. Our
            <a href="/nordictrack-t-series-treadmill/" class="text-[#0F62FE] font-medium">NordicTrack T Series review</a>
            covers it and the T Series 16.
          </p>
          <p>
            <strong>Commercial 1250.</strong> A sturdier folding frame with a wider 22-inch belt, decline and a 400 lb rating; our
            <a href="/nordictrack-commercial-1250-treadmill/" class="text-[#0F62FE] font-medium">Commercial 1250 review</a>
            covers it.
          </p>
          <p>
            One thing has been lost: neither current model reaches the 15% incline the review gives for the
            C950i. If steep walking is the point, NordicTrack’s incline trainers or the machines in our
            <a href="/best-incline-treadmills/" class="text-[#0F62FE] font-medium">incline treadmill roundup</a>
            go further. The whole current range is ranked in
            <a href="/best-nordictrack-treadmills/" class="text-[#0F62FE] font-medium">best NordicTrack treadmills</a>.
          </p>`,
    },
    {
      id: 'verdict',
      heading: 'Should You Buy a NordicTrack C950i?',
      html: `          <p>
            <strong>Buy one if it is cheap, runs cleanly at speed and incline, and you are happy to use it as a
            manual treadmill.</strong> For walking and moderate running, a sound C950i still does the basic job,
            and its common wear parts can still be found.
          </p>
          <p>
            <strong>Walk away</strong> if the console is faulty, the motor labours, the frame flexes at incline,
            or the seller cannot show you the weight decal. A console or board repair can cost more than the
            machine is worth.
          </p>
          <p>
            <strong>Buy new instead</strong> if you want iFIT classes, a warranty, or a frame for heavier or
            regular running. The T Series 10 is the closest replacement and the Commercial 1250 the sturdier one.
          </p>
          <p>
            <strong>If you already own one,</strong> keep it running with regular lubrication and belt checks
            and use it in manual mode; replace it when a major electronic part fails rather than chasing the
            repair.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'Is the NordicTrack C950i discontinued?',
      a: 'Yes. NordicTrack no longer lists it, and Garage Gym Reviews says it is no longer in production. It is only available used.',
    },
    {
      q: 'Does iFIT still work on the NordicTrack C950i?',
      a: 'Assume not. iFIT ended support for older-generation machines on 30 April 2023, including those using an external iFIT Wifi Module. Affected machines still work in manual mode and with their preloaded workouts. iFIT can confirm a specific machine at upgrade@ifit.com or 844-867-4562.',
    },
    {
      q: 'What is the weight limit of the NordicTrack C950i?',
      a: 'One independent review gives 350 lb, but we found no second source, and NordicTrack folding machines of that era were often rated lower. Read the maximum user weight on the warning decal on the machine and use the lower figure.',
    },
    {
      q: 'What is the model number of the NordicTrack C950i?',
      a: 'Manual archives list 831.25044.0, and parts catalogues also list 831.25044.2 and 831.25044.5 versions. Check the decal on the frame, since parts can differ between versions.',
    },
    {
      q: 'Can you still get parts for a NordicTrack C950i?',
      a: 'Common wear parts are listed by third-party sellers: on 5 November 2026 search results showed walking belts around $120 to $130, a drive belt around $38 and a lower motor control board around $200. Match part numbers to your exact model before ordering.',
    },
    {
      q: 'What replaced the NordicTrack C950i?',
      a: 'NordicTrack has not named a direct successor. The closest current models are the T Series 10, a folding 20 by 60-inch iFIT treadmill, and the sturdier Commercial 1250, which adds decline and a 400 lb rating. Neither reaches the 15% incline one review gives for the C950i.',
    },
  ],
  mistakesHeading: 'Common Mistakes Buying a Used C950i',
  mistakesIntro:
    'A discontinued machine is only a bargain if nothing expensive is about to fail. These are the errors to avoid.',
  mistakes: [
    {
      title: 'Paying extra for iFIT',
      body: 'iFIT ended support for older-generation machines in 2023. Price a C950i as a manual treadmill, and do not pay more because a listing says "iFIT compatible".',
    },
    {
      title: 'Trusting a listing’s weight capacity',
      body: 'The 350 lb figure rests on one review. Read the maximum user weight on the machine’s own decal and stay well inside it.',
    },
    {
      title: 'Not testing at speed and incline',
      body: 'A treadmill that walks smoothly can still labour or flex at running pace or full incline. Run it at 6 mph or more and at the top incline before paying.',
    },
    {
      title: 'Ordering parts by name instead of number',
      body: 'Walking belts are listed under two different part numbers, and there are at least three model versions. Order by your model number and the part number in its parts list.',
    },
  ],
  relatedHeading: 'Related Reviews &amp; Guides',
  related: [
    {
      kicker: 'Roundup',
      title: 'Best NordicTrack Treadmills',
      blurb: 'The current NordicTrack range ranked, from the T Series to the X24.',
      url: '/best-nordictrack-treadmills/',
    },
    {
      kicker: 'Replacement',
      title: 'NordicTrack T Series Review',
      blurb: 'The current folding 60-inch NordicTrack closest to the C950i.',
      url: '/nordictrack-t-series-treadmill/',
    },
    {
      kicker: 'Buying Used',
      title: 'Where to Buy a Used Treadmill',
      blurb: 'Marketplaces, dealers and refurbishers, and what each is good for.',
      url: '/where-to-buy-a-used-treadmill/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">The NordicTrack C950i is discontinued and only worth buying used, cheaply,
            and as a manual treadmill</strong>: iFIT ended support for machines of its generation in 2023, and
            its capacity, incline and motor figures rest on a single review. Common wear parts are still listed.`,
    `Test any used one at speed and full incline, read the weight decal, and compare its price with a new
            <a href="/nordictrack-t-series-treadmill/" class="text-[#5AA9FF] font-bold no-underline">NordicTrack T Series 10</a>,
            the closest current replacement.`,
  ],
};

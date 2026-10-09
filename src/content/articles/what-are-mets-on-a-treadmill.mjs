export default {
  slug: 'what-are-mets-on-a-treadmill',
  title: 'What Are METs on a Treadmill? (2026): Meaning, Table and Calories',
  description:
    'A MET is a multiple of resting energy use. How treadmill consoles estimate METs from speed and incline, a MET table, converting METs to calories, and MET-minutes.',
  crumbLabel: 'What Are METs on a Treadmill',
  breadcrumb: { name: 'Workouts & Training', url: '/training/' },
  kicker: 'Question Answered',
  updated: 'October 2026',
  updatedLong: 'October 9, 2026',
  published: '2026-10-09',
  socialProof: '1.4k',
  h1: ['What Are METs', 'on a Treadmill?'],
  standfirst:
    'METs are the number on the console that nobody explains. A MET is a multiple of the energy you use sitting still, so 6 METs means roughly six times your resting rate. Here is what it means, the standard equations consoles are typically based on, a table of estimates by speed and incline, how to turn METs into calories and MET-minutes, and why every figure is an estimate.',
  ctas: [
    { label: 'Treadmill MET Table', href: '#met-table' },
    { label: 'METs to Calories', href: '#mets-to-calories' },
  ],
  tags: ['what are mets on a treadmill', 'what is mets in treadmill', 'treadmill mets', 'met minutes', 'mets to calories'],
  stickyCta: { text: 'See the MET Table', link: '#met-table' },
  note: `<strong class="text-gray-900">What this page is, and is not.</strong> We review treadmills.
          This is an explanation of a number on the console, built from published standard
          equations and simple arithmetic — it is not medical, coaching or nutrition advice, and we
          are not qualified to give any of those. If you have a heart, lung, metabolic, joint or
          other condition, are recovering from illness or injury, or have been given a MET or
          heart-rate limit by a clinician, follow their advice on intensity rather than anything
          here, and talk to a doctor before starting or stepping up an exercise programme.
          <strong class="text-gray-900">On the figures below:</strong> MET values are estimates
          calculated from the ACSM walking and running metabolic equations for an average person at
          the stated speed and grade; calorie figures are arithmetic from those estimates. They
          assume hands-free walking or running and an accurate speed and incline display, and real
          individuals can differ from them meaningfully.`,
  lead: `If your treadmill console shows a figure labelled METs, it is telling you how hard the
          current speed and incline are, expressed as a multiple of the energy a person uses at
          rest. One MET is sitting quietly; three METs is roughly an easy walk; ten METs is a
          steady run. The number is useful because it does not depend on your body weight, so it
          lets you compare sessions and settings directly, and it converts easily into calories and
          into the weekly activity framing used in US physical activity guidelines. This page
          explains what a MET is, how a console arrives at its figure, what the figure is at common
          speeds and inclines, how to use it, and where it stops being trustworthy.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'What Are METs on a Treadmill? The Short Answer',
      html: `          <p>
            <strong>METs (metabolic equivalents) on a treadmill show how hard you are working as a
            multiple of your resting energy use: 1 MET is sitting quietly, so 4 METs means roughly
            four times your resting rate.</strong> The console typically estimates the figure from
            the belt speed and incline using standard equations, not from anything it measures about
            you.
          </p>
          <p>
            As rough landmarks, the standard equations put a 3 mph walk on the flat at about 3.3
            METs, a 3.5 mph walk at a 5% incline at about 6 METs, and a 6 mph run on the flat at
            about 10 METs. The full table is below. Activities between about 3 and 6 METs are
            conventionally classed as moderate intensity, and 6 METs and above as vigorous.
          </p>
          <p>
            Because a MET is defined per kilogram of body weight, the figure on the display is the
            same for a light person and a heavy person at the same settings. That is what makes it
            handy: it describes the settings, not the person. It is also what makes it a rough
            guide, because two people at 6 METs may find the session very different depending on
            their fitness.
          </p>
          <p>
            To turn METs into calories, multiply by your weight in kilograms and the time in hours:
            6 METs for 30 minutes at 160 lb (about 72.6 kg) is roughly 6 × 72.6 × 0.5, or about 220
            calories. The sections below show where all of these numbers come from.
          </p>`,
    },
    {
      id: 'what-is-a-met',
      heading: 'What Exactly Is a MET?',
      html: `          <p>
            A MET is a unit of energy use equal to the rate at which an average adult uses oxygen
            sitting quietly at rest, conventionally set at 3.5 millilitres of oxygen per kilogram of
            body weight per minute. That works out at roughly one kilocalorie per kilogram of body
            weight per hour.
          </p>
          <p>
            The idea is to describe activities as multiples of rest. If an activity is rated at 5
            METs, it uses about five times as much oxygen, and therefore about five times as much
            energy, as sitting still. Writing it that way has two useful consequences:
          </p>
          <ul>
            <li><strong>It is independent of body size.</strong> Because the unit is per kilogram,
            a walk at a given speed and grade has roughly the same MET value for anyone, and body
            weight comes back in only when you convert to calories.</li>
            <li><strong>It is comparable across activities.</strong> A MET value for a treadmill walk
            can be compared with one for cycling, gardening or climbing stairs, which is why
            physical activity guidelines and research use it.</li>
          </ul>
          <p>
            <strong>Where the "1 kcal per kg per hour" comes from.</strong> Using oxygen releases
            energy at roughly 5 kilocalories per litre of oxygen. At 3.5 ml/kg/min, one hour is 210
            ml per kilogram, or 0.21 litres, and 0.21 × 5 is about 1.05 kilocalories per kilogram per
            hour. Rounding that to 1 is a convenient approximation, and it is why the two common
            calorie formulas below give slightly different answers.
          </p>
          <p>
            <strong>The 3.5 is a convention, not a measurement of you.</strong> Real resting
            energy use varies from person to person with body composition, age, sex and other
            factors, and for many people it sits somewhat below the conventional figure. That does
            not make METs useless — they are a standard scale, like a ruler — but it is one reason
            that converting METs into calories for a particular person is an estimate.
          </p>`,
    },
    {
      id: 'why-consoles',
      heading: 'Why Does My Treadmill Show METs?',
      html: `          <p>
            Treadmills show METs because it is a standard, weight-independent way of describing
            exercise intensity, used in exercise physiology, clinical exercise testing, cardiac
            rehabilitation and public health guidelines — and because the console can calculate it
            from the two things it knows, speed and incline.
          </p>
          <p>
            The treadmill is where much of the science of exercise intensity was worked out, and
            treadmill exercise tests often express a person's capacity in METs. Rehabilitation
            programmes sometimes give patients a MET range to work within. If someone has been told
            by their clinical team to exercise at, say, 3 to 4 METs, a treadmill that displays METs
            makes that instruction easy to follow — with the caveat that the console figure is an
            estimate, and the clinical team's advice on how to use it comes first.
          </p>
          <p>
            For everyone else, the MET display is mostly a convenient intensity readout. It answers
            the question "how much harder is this setting than that one?" in a way that speed alone
            cannot, because it combines speed and incline into a single number. A 3 mph walk at a
            10% grade and a 5 mph jog on the flat look very different on the speed display; the MET
            figures show they are in the same broad range of effort for an average person.
          </p>
          <p>
            Not every console shows METs, and those that do may label the field differently or show
            it only in certain modes. Your manual will say whether it is there and how it is
            calculated, though many manuals do not explain the calculation at all.
          </p>`,
    },
    {
      id: 'how-calculated',
      heading: 'How Are Treadmill METs Calculated?',
      html: `          <p>
            Treadmill METs are typically calculated from belt speed and incline using metabolic
            equations like the American College of Sports Medicine (ACSM) walking and running
            equations, which estimate oxygen use per kilogram from speed and grade and then divide
            by 3.5 to give METs. We cannot see inside any particular console, but these published
            equations are the standard approach and are the basis for every figure on this page.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">The two equations</h3>
          <p>
            Both equations give oxygen use (VO<sub>2</sub>) in millilitres per kilogram per minute.
            Speed is in metres per minute (1 mph is 26.8 m/min) and grade is the incline as a
            decimal (5% is 0.05).
          </p>
          <ul>
            <li><strong>Walking:</strong> VO<sub>2</sub> = 0.1 × speed + 1.8 × speed × grade + 3.5</li>
            <li><strong>Running:</strong> VO<sub>2</sub> = 0.2 × speed + 0.9 × speed × grade + 3.5</li>
            <li><strong>METs</strong> = VO<sub>2</sub> ÷ 3.5</li>
          </ul>
          <p>
            Each equation has three parts. The first term is the cost of moving horizontally — and
            running costs about twice as much per metre as walking in this model. The second term is
            the cost of climbing, which depends on how fast you are rising. The final 3.5 is the
            resting component, the one MET you would use anyway.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">A worked example: 3.5 mph at 5%</h3>
          <ul>
            <li><strong>Speed:</strong> 3.5 mph × 26.8 = 93.9 m/min.</li>
            <li><strong>Horizontal:</strong> 0.1 × 93.9 = 9.4.</li>
            <li><strong>Vertical:</strong> 1.8 × 93.9 × 0.05 = 8.4.</li>
            <li><strong>Resting:</strong> 3.5.</li>
            <li><strong>Total:</strong> 9.4 + 8.4 + 3.5 = 21.3 ml/kg/min.</li>
            <li><strong>METs:</strong> 21.3 ÷ 3.5 = about 6.1.</li>
          </ul>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">A worked example: 6 mph on the flat</h3>
          <ul>
            <li><strong>Speed:</strong> 6 mph × 26.8 = 160.9 m/min.</li>
            <li><strong>Horizontal:</strong> 0.2 × 160.9 = 32.2.</li>
            <li><strong>Vertical:</strong> 0.9 × 160.9 × 0 = 0.</li>
            <li><strong>Total:</strong> 32.2 + 3.5 = 35.7 ml/kg/min.</li>
            <li><strong>METs:</strong> 35.7 ÷ 3.5 = about 10.2.</li>
          </ul>
          <p>
            Notice that body weight appears nowhere. The console does not need to know it to show
            METs; it only needs your weight for the calorie field. That is why the MET display can
            be roughly right even when the calorie display is badly off because nobody entered a
            weight.
          </p>`,
    },
    {
      id: 'met-table',
      heading: 'Treadmill METs by Speed and Incline: An Estimate Table',
      html: `          <p>
            The tables below are calculated from the ACSM equations above, rounded to one decimal
            place. They are estimates for an average person walking or running hands-free at the
            stated settings, not measurements. Use the walking table for walking and the running
            table for running, whatever the speed — the next section explains why that matters
            between 4 and 5 mph.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Walking (estimated METs)</h3>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[480px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4">Speed (mph)</th>
                <th class="text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4">0%</th>
                <th class="text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4">3%</th>
                <th class="text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4">5%</th>
                <th class="text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4">10%</th>
                <th class="text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4">15%</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">2.0</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">2.5</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">3.4</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">3.9</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">5.3</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">6.7</td></tr>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">2.5</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">2.9</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">4.0</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">4.6</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">6.4</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">8.1</td></tr>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">3.0</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">3.3</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">4.5</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">5.4</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">7.4</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">9.5</td></tr>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">3.5</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">3.7</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">5.1</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">6.1</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">8.5</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">10.9</td></tr>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">4.0</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">4.1</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">5.7</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">6.8</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">9.6</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">12.3</td></tr>
            </tbody>
          </table></div>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Running (estimated METs)</h3>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[480px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4">Speed (mph)</th>
                <th class="text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4">0%</th>
                <th class="text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4">1%</th>
                <th class="text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4">3%</th>
                <th class="text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4">5%</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">5.0</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">8.7</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">9.0</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">9.7</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">10.4</td></tr>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">5.5</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">9.4</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">9.8</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">10.6</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">11.3</td></tr>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">6.0</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">10.2</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">10.6</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">11.4</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">12.3</td></tr>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">7.0</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">11.7</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">12.2</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">13.2</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">14.1</td></tr>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">8.0</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">13.3</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">13.8</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">14.9</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">16.0</td></tr>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">9.0</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">14.8</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">15.4</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">16.7</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">17.9</td></tr>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">10.0</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">16.3</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">17.0</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">18.4</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">19.8</td></tr>
            </tbody>
          </table></div>
          <p>
            Two patterns stand out. First, incline moves the number much more for walkers than
            speed does: going from 3.0 to 3.5 mph on the flat adds about 0.4 METs, while raising the
            grade from 0% to 5% at 3.0 mph adds about 2.1. That is the arithmetic behind the
            popularity of incline walking, which our guide to
            <a href="/what-incline-should-i-walk-on-a-treadmill/" class="text-[#0F62FE] font-medium">what incline to walk on</a>
            puts into practice. Second, in the running equation each percent of grade adds
            relatively little — the climbing coefficient is half the walking one — so for runners,
            speed is the bigger lever.
          </p>
          <p>
            Treat the extreme corners of the tables with extra caution. Steep grades at the faster
            walking speeds and fast running speeds are where the equations are furthest from the
            conditions they were built for, and where individual differences are largest.
          </p>`,
    },
    {
      id: 'walk-or-run-equation',
      heading: 'Which Equation Applies Between 4 and 5 mph?',
      html: `          <p>
            Between about 4 and 5 mph, use the equation that matches what you are actually doing —
            the walking one if you are walking, the running one if you are jogging — because the two
            give very different answers at the same speed.
          </p>
          <p>
            At 4.5 mph on the flat, for example, the walking equation gives about 4.4 METs and the
            running equation about 7.9. Neither is wrong; they describe different movements. Running
            involves a flight phase and more vertical bounce, and the running equation's horizontal
            term is twice the walking one to reflect that. A fast walk at 4.5 mph is awkward and
            hard for many people, and the walking equation probably understates it; a slow jog at
            the same speed is comfortable for many runners.
          </p>
          <p>
            The equations are usually described as most accurate within certain ranges: the walking
            equation for speeds of roughly 1.9 to 3.7 mph, and the running equation for speeds above
            about 5 mph, or lower if the person is genuinely jogging rather than walking. Our 4.0 mph
            row sits just outside the walking range and should be read with that in mind.
          </p>
          <p>
            This creates a practical problem for consoles. A treadmill cannot see whether you are
            walking or running at 4.5 mph, so a console that uses equations like these has to make
            an assumption — for example, switching from one equation to the other at a fixed speed.
            If yours does, its MET figure can jump noticeably as you cross that threshold even
            though your effort barely changed. If your console's MET reading leaps between two
            adjacent speeds, this is a plausible explanation. For walkers who want a harder session, the cleaner
            route is usually to add incline at a comfortable walking speed rather than pushing into
            the awkward zone; see our guide to
            <a href="/what-speed-should-i-walk-on-a-treadmill/" class="text-[#0F62FE] font-medium">what speed to walk on a treadmill</a>.
          </p>`,
    },
    {
      id: 'mets-to-calories',
      heading: 'How Do You Convert METs to Calories?',
      html: `          <p>
            To convert METs to calories, multiply METs by your body weight in kilograms and by the
            time in hours: calories ≈ METs × kg × hours. For weight in pounds, divide by 2.2 first.
            This is the same arithmetic behind most calorie estimates, including many console
            figures.
          </p>
          <p>
            <strong>Example.</strong> A 160 lb person (about 72.6 kg) walking at 3.5 mph and 5% for
            30 minutes: 6.1 × 72.6 × 0.5 ≈ 221, so roughly 220 calories. The same session for a 200 lb
            person (about 90.7 kg): 6.1 × 90.7 × 0.5 ≈ 277, so roughly 275 calories. A 6 mph run on the
            flat for 30 minutes at 160 lb: 10.2 × 72.6 × 0.5 ≈ 370 calories.
          </p>
          <p>
            <strong>The per-minute version.</strong> Another common form is calories per minute =
            METs × 3.5 × kg ÷ 200. It gives figures about 5% higher than the simple version, because
            it uses roughly 5 kilocalories per litre of oxygen instead of rounding to 1 kcal per kg
            per hour. For the 3.5 mph, 5% example it gives about 7.7 calories a minute, or roughly
            230 for half an hour. The difference is a reminder of how much precision these numbers
            really have: two respectable versions of the same formula disagree by more than ten
            calories on a half-hour walk.
          </p>
          <p>
            <strong>Gross versus net.</strong> Both versions give gross calories, which include the
            one MET you would have used sitting on the sofa anyway. If you want the extra calories
            the session cost, use METs minus one: (6.1 − 1) × 72.6 × 0.5 ≈ 185 calories for the
            example above. The difference matters most at walking intensities, where the resting
            component is a larger share of the total.
          </p>
          <p>
            For tables of calorie estimates across speeds, inclines and body weights, see our
            reference on
            <a href="/treadmill-calories-burned/" class="text-[#0F62FE] font-medium">treadmill calories burned</a>;
            for why the console figure often runs high, see whether
            <a href="/are-treadmill-calories-accurate/" class="text-[#0F62FE] font-medium">treadmill calories are accurate</a>.
          </p>`,
    },
    {
      id: 'met-minutes',
      heading: 'What Are MET-Minutes, and How Many Do You Need a Week?',
      html: `          <p>
            MET-minutes are METs multiplied by minutes of activity, and the US physical activity
            guidelines' recommendation of 150 to 300 minutes of moderate activity a week is commonly
            expressed as roughly 500 to 1,000 MET-minutes a week.
          </p>
          <p>
            The arithmetic is simple. Thirty minutes at 3.3 METs is 99 MET-minutes. Thirty minutes at
            6.1 METs is about 183. The point of the unit is that it combines intensity and time into
            one number, so a shorter, harder session and a longer, easier one can be compared.
          </p>
          <p>
            <strong>Where 500 to 1,000 comes from.</strong> The Physical Activity Guidelines for
            Americans recommend that adults get at least 150 to 300 minutes of moderate-intensity
            aerobic activity a week, or 75 to 150 minutes of vigorous activity, or an equivalent
            mix. Moderate activity is conventionally 3 to just under 6 METs. One hundred and fifty
            minutes at 3 to 6 METs is 450 to 900 MET-minutes, which is why the weekly target is often
            framed as roughly 500 to 1,000 MET-minutes. Vigorous minutes count roughly double, which
            the MET arithmetic captures naturally.
          </p>
          <p>
            <strong>Treadmill examples.</strong> Using the table estimates:
          </p>
          <ul>
            <li><strong>Five 30-minute walks at 3.0 mph, flat:</strong> 5 × 30 × 3.3 ≈ 495
            MET-minutes — right at the lower end.</li>
            <li><strong>Five 30-minute walks at 3.5 mph, 5%:</strong> 5 × 30 × 6.1 ≈ 915
            MET-minutes.</li>
            <li><strong>Three 25-minute runs at 6 mph, flat:</strong> 3 × 25 × 10.2 ≈ 765
            MET-minutes.</li>
          </ul>
          <p>
            Two cautions. The guidelines are about the total amount of activity across the week,
            and the MET-minute figure is only as good as the MET estimate underneath it. And the
            guidelines are written for the general adult population; if you have a medical
            condition, how much and how hard you should exercise is a question for your doctor. For
            planning a week around the number, our guide to
            <a href="/can-you-use-a-treadmill-every-day/" class="text-[#0F62FE] font-medium">using a treadmill every day</a>
            covers spreading sessions and recovery.
          </p>`,
    },
    {
      id: 'good-mets',
      heading: 'What Is a Good MET Number on a Treadmill?',
      html: `          <p>
            There is no single good MET number on a treadmill; the right figure depends on your
            fitness and what the session is for. As a broad guide, about 3 to 6 METs is moderate
            intensity and 6 or more is vigorous, but the same MET figure can be easy for one person
            and very hard for another.
          </p>
          <p>
            That is the main limitation of METs as an intensity guide. They measure the absolute
            cost of the settings, not how hard that cost is for you. A 6-MET incline walk may be a
            comfortable conversational effort for a trained runner and close to the limit for
            someone who has been inactive for years. Both are using roughly the same oxygen per
            kilogram; what differs is how close that is to their maximum.
          </p>
          <p>
            For deciding how hard to work, relative measures usually serve better:
          </p>
          <ul>
            <li><strong>The talk test.</strong> At moderate intensity you can talk in full sentences
            but not sing; at vigorous intensity you can only manage a few words at a time.</li>
            <li><strong>Heart rate,</strong> measured with a chest strap or a reasonably fitted
            watch, interpreted against your own zones. Our guide to
            <a href="/treadmill-heart-rate-zones/" class="text-[#0F62FE] font-medium">treadmill heart rate zones</a>
            explains how to set them and their limits.</li>
            <li><strong>Perceived effort,</strong> rated honestly on a simple scale.</li>
          </ul>
          <p>
            METs are best used alongside these: as a way of seeing that a session got harder or
            easier, of comparing settings, and of adding up weekly totals. If a clinician has given
            you a MET range, use it as they instructed, remembering that the console figure is an
            estimate for an average person and that your heart rate and symptoms come first.
          </p>`,
    },
    {
      id: 'limitations',
      heading: 'How Accurate Are Treadmill METs?',
      html: `          <p>
            Treadmill METs are reasonable estimates for an average person, but they are not a
            measurement of you: they assume average movement efficiency, a conventional resting
            rate, hands-free walking and an accurate speed and incline display, and any of those can
            be off.
          </p>
          <ul>
            <li><strong>Individual efficiency.</strong> People differ in how economically they walk
            and run. Two people at the same settings can use noticeably different amounts of oxygen,
            and the equations give both the same figure.</li>
            <li><strong>The resting convention.</strong> The 3.5 ml/kg/min definition of one MET is a
            standard value, not your resting rate, which affects any conversion into calories.</li>
            <li><strong>Holding the rails.</strong> The equations assume you support your own weight.
            Gripping the rails, especially on an incline, reduces the real cost while the MET display
            stays the same. Our guide to
            <a href="/should-you-hold-the-handrails-on-a-treadmill/" class="text-[#0F62FE] font-medium">holding the handrails</a>
            explains the effect.</li>
            <li><strong>Display accuracy.</strong> The console calculates METs from the speed and
            incline it thinks it is running at. If the belt is slow or the incline is off, the MET
            figure is off with them; our guide to
            <a href="/treadmill-calibration/" class="text-[#0F62FE] font-medium">treadmill calibration</a>
            covers checking both.</li>
            <li><strong>The walk-run switch.</strong> As explained above, the equations differ
            sharply between walking and running, and the console has to guess which you are
            doing.</li>
            <li><strong>Steady state.</strong> The equations describe steady effort. In the first
            minutes of a session, or during short intervals, the displayed figure changes instantly
            while your body takes time to catch up.</li>
          </ul>
          <p>
            None of this makes the figure useless. A MET display that consistently describes the
            settings is a good way to compare sessions on the same machine and to see the effect of
            incline. It becomes less trustworthy when you compare across machines, convert to
            precise calorie counts, or treat it as a personal measurement.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'What does METs mean on a treadmill?',
      a: `METs stands for metabolic equivalents. It shows how hard the current speed and incline are as a multiple of the energy an average person uses at rest. One MET is sitting quietly, so a reading of 5 means roughly five times your resting energy use. The console typically estimates it from speed and incline, not from anything measured on you.`,
    },
    {
      q: 'How many METs is walking on a treadmill?',
      a: `Using the standard ACSM walking equation, a 2.5 mph walk on the flat is about 2.9 METs, 3 mph is about 3.3, 3.5 mph is about 3.7 and 4 mph is about 4.1. Incline raises it quickly: 3 mph at 5% is about 5.4 METs and at 10% about 7.4. These are estimates for an average person walking hands-free.`,
    },
    {
      q: 'How do you convert treadmill METs to calories?',
      a: `Multiply METs by your weight in kilograms and the time in hours. For example, 6 METs for 30 minutes at 160 lb, which is about 72.6 kg, is 6 times 72.6 times 0.5, or roughly 220 calories. Subtract one MET first if you want only the extra calories above resting. Treat the result as an estimate.`,
    },
    {
      q: 'What is a good MET level on a treadmill?',
      a: `It depends on your fitness and goal. Around 3 to 6 METs is conventionally moderate intensity and 6 or more is vigorous, but the same figure can be easy for a fit person and very hard for a beginner. The talk test, heart rate and perceived effort are better guides to how hard a session is for you.`,
    },
    {
      q: 'What are MET-minutes?',
      a: `MET-minutes are METs multiplied by minutes of activity, combining intensity and time into one number. Thirty minutes at 4 METs is 120 MET-minutes. The US guideline of 150 to 300 minutes of moderate activity a week is commonly framed as roughly 500 to 1,000 MET-minutes, since 150 minutes at 3 to 6 METs is 450 to 900.`,
    },
    {
      q: 'Are treadmill METs accurate?',
      a: `They are reasonable estimates for an average person, not measurements of you. They assume typical movement efficiency, a conventional resting rate, hands-free walking and accurate speed and incline readings. Holding the rails, an inaccurate belt speed or the console guessing wrongly between walking and running can all push the figure off. Use it to compare sessions on one machine.`,
    },
  ],
  mistakesHeading: 'Common Mistakes With Treadmill METs',
  mistakesIntro:
    'METs are a useful scale. The mistakes come from reading them as a personal measurement or forgetting what they assume.',
  mistakes: [
    {
      title: 'Treating METs as a measure of how hard it is for you',
      body: `METs describe the absolute cost of the settings for an average person, not your relative effort. A 6-MET walk can be easy for one person and near-maximal for another. Use the talk test, heart rate or perceived effort to judge intensity, and METs to compare settings and add up weekly totals.`,
    },
    {
      title: 'Holding the rails and trusting the reading',
      body: `The equations assume you carry your own weight. Gripping the front rail on an incline can take a large share of the climbing work away while the MET figure stays the same. If you want the display to mean anything, walk hands-free at a setting you can manage, even if it is lower.`,
    },
    {
      title: 'Comparing MET figures across machines',
      body: `Each console calculates METs from the speed and incline it believes it is running at, and many home machines are a few percent off on either. Consoles may also switch between walking and running equations at different speeds. Compare sessions on the same treadmill rather than across a gym machine and a home one.`,
    },
    {
      title: 'Using gross calories as calories earned',
      body: `Converting METs to calories gives a gross figure that includes the energy you would have used at rest anyway. For the extra calories the session cost, subtract one MET first. Either way the result is an estimate with a margin of error, not a precise allowance for food.`,
    },
  ],
  relatedHeading: 'Related Guides',
  related: [
    {
      kicker: 'Calories',
      title: 'Treadmill Calories Burned',
      blurb: 'Estimates by speed, incline and weight, and how they are calculated.',
      url: '/treadmill-calories-burned/',
    },
    {
      kicker: 'Accuracy',
      title: 'Are Treadmill Calories Accurate?',
      blurb: 'Why console calorie counts usually run high, and how to get a better number.',
      url: '/are-treadmill-calories-accurate/',
    },
    {
      kicker: 'Heart Rate',
      title: 'Treadmill Heart Rate Zones',
      blurb: 'How to set zones, what they are worth, and why grip sensors mislead.',
      url: '/treadmill-heart-rate-zones/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">METs on a treadmill show how hard the current speed and incline
            are, as a multiple of resting energy use.</strong> A 3 mph walk is about 3.3 METs, 3.5 mph
            at 5% about 6, and a 6 mph run about 10, by the standard ACSM equations the console
            typically relies on.`,
    `Multiply METs by kilograms and hours for an estimate of calories, or by minutes for
            MET-minutes, with roughly 500 to 1,000 a week matching the US activity guidelines. Treat
            every figure as an estimate for an average person, not a measurement of you. For calorie
            tables by speed and weight, see our reference on
            <a href="/treadmill-calories-burned/" class="text-[#5AA9FF] font-bold no-underline">treadmill calories burned</a>.`,
  ],
};

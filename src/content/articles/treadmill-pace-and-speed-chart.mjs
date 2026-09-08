export default {
  slug: 'treadmill-pace-and-speed-chart',
  title: 'Treadmill Pace & Speed Chart (2026): mph, Pace and Incline',
  description:
    'Convert treadmill mph to minutes per mile and km/h, see what each speed actually feels like, and what an incline grade is worth in equivalent flat effort.',
  crumbLabel: 'Treadmill Pace & Speed Chart',
  kicker: 'Reference',
  updated: 'September 2026',
  updatedLong: 'September 8, 2026',
  published: '2026-09-08',
  socialProof: '4.5k',
  h1: ['Treadmill Pace &', 'Speed Chart'],
  standfirst:
    'Your machine speaks mph. Your training plan speaks minutes per mile. Your running app speaks km/h. Here is the conversion, plus what each speed and grade actually demands.',
  ctas: [
    { label: 'The Conversion Chart', href: '#the-chart' },
    { label: 'What Incline Is Worth', href: '#incline-equivalents' },
  ],
  tags: ['treadmill pace chart', 'treadmill speed conversion', 'mph to minutes per mile', 'treadmill km/h', 'running pace'],
  stickyCta: { text: 'See the Chart', link: '#the-chart' },
  lead: `Treadmills in the US display miles per hour. Training plans are written in minutes per
          mile. Most running apps and anyone outside the US think in kilometres. Three units for
          one thing, and the arithmetic is the reason plenty of good sessions get run at the
          wrong intensity.`,
  sections: [
    {
      id: 'the-maths',
      heading: 'The Conversion, and How to Do It in Your Head',
      html: `          <p>
            <strong>Minutes per mile = 60 ÷ mph.</strong> That is the whole formula. At 6 mph you
            are covering a mile every 10 minutes; at 4 mph, every 15.
          </p>
          <p>
            <strong>km/h = mph × 1.61.</strong> Close enough to multiply by 1.6 mentally, which is
            accurate to within a rounding error at any treadmill speed.
          </p>
          <p>
            Two anchors worth memorising, because everything else can be estimated from them:
            <strong>6 mph is a 10-minute mile</strong> and <strong>4 mph is a 15-minute
            mile</strong>. From there, each 0.5 mph above 6 takes roughly 45 seconds off the mile,
            and the increments get smaller as speed rises — which is why the difference between
            9 and 9.5 mph feels smaller on the clock than the difference between 4 and 4.5.
          </p>
          <p>
            That non-linearity catches people out when following a plan. Adding 0.5 mph at
            walking pace changes your mile time by nearly two minutes; adding 0.5 mph at 9 mph
            changes it by about twenty seconds. The dial moves evenly and the effect does not.
          </p>`,
    },
    {
      id: 'the-chart',
      heading: 'Speed, Pace and km/h',
      html: `          <div class="overflow-x-auto my-8 not-prose">
            <table class="min-w-[520px] w-full text-sm border-collapse">
              <thead>
                <tr class="bg-gray-900 text-white text-left">
                  <th class="px-4 py-3 font-black">mph</th>
                  <th class="px-4 py-3 font-black">Min / mile</th>
                  <th class="px-4 py-3 font-black">km/h</th>
                  <th class="px-4 py-3 font-black">Typically</th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                <tr class="border-b border-gray-100"><td class="px-4 py-2 font-bold">2.0</td><td class="px-4 py-2">30:00</td><td class="px-4 py-2">3.2</td><td class="px-4 py-2">Slow walk, recovery</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50"><td class="px-4 py-2 font-bold">2.5</td><td class="px-4 py-2">24:00</td><td class="px-4 py-2">4.0</td><td class="px-4 py-2">Comfortable walk</td></tr>
                <tr class="border-b border-gray-100"><td class="px-4 py-2 font-bold">3.0</td><td class="px-4 py-2">20:00</td><td class="px-4 py-2">4.8</td><td class="px-4 py-2">Standard walking pace</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50"><td class="px-4 py-2 font-bold">3.5</td><td class="px-4 py-2">17:09</td><td class="px-4 py-2">5.6</td><td class="px-4 py-2">Brisk walk</td></tr>
                <tr class="border-b border-gray-100"><td class="px-4 py-2 font-bold">4.0</td><td class="px-4 py-2">15:00</td><td class="px-4 py-2">6.4</td><td class="px-4 py-2">Fast walk / power walk</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50"><td class="px-4 py-2 font-bold">4.5</td><td class="px-4 py-2">13:20</td><td class="px-4 py-2">7.2</td><td class="px-4 py-2">Walk-jog transition</td></tr>
                <tr class="border-b border-gray-100"><td class="px-4 py-2 font-bold">5.0</td><td class="px-4 py-2">12:00</td><td class="px-4 py-2">8.0</td><td class="px-4 py-2">Easy jog</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50"><td class="px-4 py-2 font-bold">5.5</td><td class="px-4 py-2">10:55</td><td class="px-4 py-2">8.9</td><td class="px-4 py-2">Steady jog</td></tr>
                <tr class="border-b border-gray-100"><td class="px-4 py-2 font-bold">6.0</td><td class="px-4 py-2">10:00</td><td class="px-4 py-2">9.7</td><td class="px-4 py-2">Comfortable run</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50"><td class="px-4 py-2 font-bold">6.5</td><td class="px-4 py-2">9:14</td><td class="px-4 py-2">10.5</td><td class="px-4 py-2">Steady run</td></tr>
                <tr class="border-b border-gray-100"><td class="px-4 py-2 font-bold">7.0</td><td class="px-4 py-2">8:34</td><td class="px-4 py-2">11.3</td><td class="px-4 py-2">Moderate effort</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50"><td class="px-4 py-2 font-bold">7.5</td><td class="px-4 py-2">8:00</td><td class="px-4 py-2">12.1</td><td class="px-4 py-2">Tempo for many</td></tr>
                <tr class="border-b border-gray-100"><td class="px-4 py-2 font-bold">8.0</td><td class="px-4 py-2">7:30</td><td class="px-4 py-2">12.9</td><td class="px-4 py-2">Hard steady</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50"><td class="px-4 py-2 font-bold">8.5</td><td class="px-4 py-2">7:04</td><td class="px-4 py-2">13.7</td><td class="px-4 py-2">Threshold / intervals</td></tr>
                <tr class="border-b border-gray-100"><td class="px-4 py-2 font-bold">9.0</td><td class="px-4 py-2">6:40</td><td class="px-4 py-2">14.5</td><td class="px-4 py-2">Interval pace</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50"><td class="px-4 py-2 font-bold">9.5</td><td class="px-4 py-2">6:19</td><td class="px-4 py-2">15.3</td><td class="px-4 py-2">Fast intervals</td></tr>
                <tr class="border-b border-gray-100"><td class="px-4 py-2 font-bold">10.0</td><td class="px-4 py-2">6:00</td><td class="px-4 py-2">16.1</td><td class="px-4 py-2">Short reps</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50"><td class="px-4 py-2 font-bold">11.0</td><td class="px-4 py-2">5:27</td><td class="px-4 py-2">17.7</td><td class="px-4 py-2">Sprint reps</td></tr>
                <tr><td class="px-4 py-2 font-bold">12.0</td><td class="px-4 py-2">5:00</td><td class="px-4 py-2">19.3</td><td class="px-4 py-2">Top speed on most machines</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            The "typically" column describes what a given speed usually represents for a
            reasonably fit adult, and it is a rough guide rather than a prescription. An easy jog
            for one person is a hard effort for another, and the effort labels that matter are the
            ones in the next section.
          </p>`,
    },
    {
      id: 'what-it-feels-like',
      heading: 'The Only Calibration That Travels',
      html: `          <p>
            Numbers are useful for repeating a session; they are useless for judging whether the
            intensity is right for you today. For that, use breathing, which needs no calibration
            and does not flatter you.
          </p>
          <p>
            <strong>Easy.</strong> Full sentences without effort. You could keep going much
            longer than you plan to. Most of your training should be here.
          </p>
          <p>
            <strong>Steady.</strong> Short sentences. Comfortable but clearly working. This is
            where most people spend too much of their week.
          </p>
          <p>
            <strong>Threshold.</strong> A few words at a time. Sustainable for perhaps 20 to 40
            minutes and no longer.
          </p>
          <p>
            <strong>Hard.</strong> Single words. Interval territory, sustainable for a few
            minutes at most.
          </p>
          <p>
            The same mph will sit in different rows on different days depending on sleep, heat,
            fatigue and how recently you ate. When the chart and your breathing disagree, believe
            your breathing. Our
            <a href="/treadmill-workouts/" class="text-[#0F62FE] font-medium">training guide</a>
            covers how to distribute those intensities across a week.
          </p>`,
    },
    {
      id: 'incline-equivalents',
      heading: 'What an Incline Is Worth',
      html: `          <p>
            Raising the grade increases cardiovascular demand without increasing speed, which is
            the treadmill's most useful trick. A rough working guide for walking:
          </p>
          <div class="overflow-x-auto my-8 not-prose">
            <table class="min-w-[460px] w-full text-sm border-collapse">
              <thead>
                <tr class="bg-gray-900 text-white text-left">
                  <th class="px-4 py-3 font-black">Grade</th>
                  <th class="px-4 py-3 font-black">In degrees</th>
                  <th class="px-4 py-3 font-black">3 mph walk feels roughly like</th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                <tr class="border-b border-gray-100"><td class="px-4 py-2 font-bold">0%</td><td class="px-4 py-2">0.0&deg;</td><td class="px-4 py-2">A 3 mph flat walk</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50"><td class="px-4 py-2 font-bold">2%</td><td class="px-4 py-2">1.1&deg;</td><td class="px-4 py-2">A slightly brisker walk</td></tr>
                <tr class="border-b border-gray-100"><td class="px-4 py-2 font-bold">5%</td><td class="px-4 py-2">2.9&deg;</td><td class="px-4 py-2">A fast 4 mph walk</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50"><td class="px-4 py-2 font-bold">8%</td><td class="px-4 py-2">4.6&deg;</td><td class="px-4 py-2">A gentle jog</td></tr>
                <tr class="border-b border-gray-100"><td class="px-4 py-2 font-bold">10%</td><td class="px-4 py-2">5.7&deg;</td><td class="px-4 py-2">Around a 5 mph jog</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50"><td class="px-4 py-2 font-bold">12%</td><td class="px-4 py-2">6.8&deg;</td><td class="px-4 py-2">A steady run, without the impact</td></tr>
                <tr><td class="px-4 py-2 font-bold">15%</td><td class="px-4 py-2">8.5&deg;</td><td class="px-4 py-2">Genuinely demanding for most people</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            These are approximations rather than measured equivalences — actual energy cost varies
            with body weight, gait and fitness — but the shape is reliable: incline buys a large
            increase in effort for no increase in impact per footfall.
          </p>
          <p>
            Note how modest the angles are. Fifteen per cent is only 8.5 degrees, which is why a
            grade that looks trivial on a protractor is punishing underfoot. Our
            <a href="/treadmill-incline-percent-vs-degrees/" class="text-[#0F62FE] font-medium">grade conversion guide</a>
            covers that in full, and one caveat applies throughout: these figures assume you are
            not holding the handrails. Leaning transfers work to your arms and the numbers stop
            meaning anything.
          </p>`,
    },
    {
      id: 'one-percent',
      heading: 'The 1% Incline Convention',
      html: `          <p>
            The advice to set 1% incline to "simulate outdoor running" comes from a 1996 study
            that found the energy cost of treadmill running matched outdoor running at around 1%
            grade — but specifically at faster paces, roughly 7 mph and above, where air
            resistance outdoors becomes a meaningful factor.
          </p>
          <p>
            At easier paces the difference is small enough to ignore. A walker or an easy jogger
            setting 1% is not doing anything wrong, and is not correcting for much either.
          </p>
          <p>
            Our view: 1% is a harmless default and a reasonable habit, particularly if you are
            training for outdoor races and want your treadmill paces to correspond to your road
            paces. It is not the meaningful variable it is often presented as, and it is not worth
            worrying about if your machine starts at 0%.
          </p>
          <p>
            What matters considerably more is the absence of wind, weather and terrain variation,
            none of which 1% addresses. Treadmill running is easier than road running in ways a
            single grade setting does not capture.
          </p>`,
    },
    {
      id: 'treadmill-vs-outdoor',
      heading: 'Why Treadmill Pace and Road Pace Differ',
      html: `          <p>
            Runners frequently find their treadmill pace does not match their outdoor pace, in
            either direction, and there are several reasons that have nothing to do with fitness.
          </p>
          <p>
            <strong>No air resistance.</strong> Indoors you are not pushing through air, which at
            faster paces is a real saving — this is what the 1% convention addresses.
          </p>
          <p>
            <strong>No terrain variation.</strong> A flat belt has no camber, no kerbs, no
            surface changes and no gradient unless you add one. Outdoor "flat" almost never is.
          </p>
          <p>
            <strong>No heat dissipation.</strong> Running indoors without moving air means body
            heat builds faster, which makes a given pace feel harder — often the reason a
            treadmill session feels tougher than the equivalent road run.
          </p>
          <p>
            <strong>Console calibration drift.</strong> Belt speed is generally accurate but can
            drift with belt wear and tension. If your treadmill pace and your GPS watch disagree
            consistently, the machine may need attention — our
            <a href="/how-tight-should-treadmill-belt-be/" class="text-[#0F62FE] font-medium">belt tension guide</a>
            covers the most common cause.
          </p>
          <p>
            The practical takeaway: treat treadmill pace as its own scale. Compare treadmill
            sessions to treadmill sessions and road runs to road runs, rather than expecting them
            to be interchangeable.
          </p>`,
    },
    {
      id: 'using-the-chart',
      heading: 'Using This to Set Up a Session',
      html: `          <p>
            <strong>Following a plan written in minutes per mile.</strong> Find your target pace
            in the chart and read across to mph. A plan asking for 9:14 miles is 6.5 mph. If it
            falls between rows, round down rather than up.
          </p>
          <p>
            <strong>Setting interval pace.</strong> Take a pace you could hold for 30 minutes and
            go 20 to 40 seconds per mile faster — in mph terms, roughly 0.3 to 0.6 faster. Set it
            for the final rep, not the first. Our
            <a href="/treadmill-interval-workouts/" class="text-[#0F62FE] font-medium">interval guide</a>
            covers the structures.
          </p>
          <p>
            <strong>Setting easy pace.</strong> Take the pace you would naturally choose and go
            slower. Most people's "easy" is steady, which is the single most common training
            error.
          </p>
          <p>
            <strong>Substituting incline for speed.</strong> If a plan calls for a hard effort and
            you would rather protect your joints, hold your usual pace and add grade using the
            incline table. Not identical, and close enough to be genuinely useful.
          </p>`,
    },
    {
      id: 'walking-pace',
      heading: 'Walking Pace, Steps and Distance',
      html: `          <p>
            Most treadmill use happens between 2.5 and 4 mph, and walkers are usually thinking in
            steps or minutes rather than in pace. A few conversions make the chart more useful.
          </p>
          <p>
            <strong>Steps per mile</strong> average roughly 2,000 for an adult walking, though it
            varies considerably with height — a shorter walker may take 2,300 and a taller one
            1,800. At 3 mph you are covering a mile every 20 minutes, so a 30-minute walk is about
            1.5 miles and roughly 3,000 steps. A 45-minute walk at that pace lands near 4,500.
          </p>
          <p>
            <strong>Reaching 10,000 steps</strong> on a treadmill alone would take around 100
            minutes at 3 mph. That is why the target is better treated as a daily total including
            ordinary movement rather than something to achieve in one session. A 30-minute
            treadmill walk contributing 3,000 to 3,500 of them is a substantial share of a day.
          </p>
          <p>
            <strong>Raising pace versus raising time.</strong> For step count, time matters more
            than speed — walking faster covers more ground per step but does not add many steps
            per minute. If your goal is a step target, add minutes. If your goal is
            cardiovascular, add incline. Our
            <a href="/best-walking-treadmills/" class="text-[#0F62FE] font-medium">walking treadmill guide</a>
            covers the machines built for exactly this range, most of which are used far below
            their top speed.
          </p>`,
    },
    {
      id: 'pace-by-goal',
      heading: 'Target Paces by Goal',
      html: `          <p>
            A rough orientation for where to sit on the chart depending on what you are training
            for. These are starting points to adjust by feel, not prescriptions.
          </p>
          <p>
            <strong>General health and fitness.</strong> Most of your time between 3 and 3.5 mph
            with some incline, or 5 to 6 mph if you run. The intensity that matters is
            conversational, and the speed that produces it will change as you get fitter — which
            is the point.
          </p>
          <p>
            <strong>Building an aerobic base.</strong> Slower than feels satisfying. If you can
            hold full sentences you are in the right place. For most runners this is 5 to 6 mph
            even if they can run considerably faster, and resisting the urge to push is most of
            the skill.
          </p>
          <p>
            <strong>Training toward a 5K.</strong> Easy running at 5 to 6 mph for most sessions,
            with intervals around 7 to 8 mph once a week. The race itself is likely to be run
            somewhere between those, and the mistake is training at race pace all the time.
          </p>
          <p>
            <strong>Training toward a 10K or longer.</strong> The same easy range for the bulk of
            the work, one longer session, and threshold efforts around 7 to 7.5 mph rather than
            short fast intervals. Endurance is built by time on feet at a manageable intensity.
          </p>
          <p>
            <strong>Weight management.</strong> Duration and consistency beat intensity here, and
            incline beats speed. Longer sessions at a pace you can sustain and repeat several
            times a week do more than short hard ones you dread. Our
            <a href="/treadmill-workout-for-weight-loss/" class="text-[#0F62FE] font-medium">guide to that</a>
            covers the reasoning, including why the console's calorie figure is not the number to
            optimise.
          </p>
          <p>
            <strong>Returning from a break or an injury.</strong> Start below where you think you
            should be and add time before pace. The chart is useful here mainly as a record —
            knowing you walked 30 minutes at 3.2 mph this week makes next week's small increase
            deliberate rather than accidental.
          </p>`,
    },
    {
      id: 'metric-plans',
      heading: 'If Your Plan Is in Kilometres',
      html: `          <p>
            Plenty of training plans, apps and race distances are metric while US treadmills are
            not, which adds a second conversion. The arithmetic is the same shape.
          </p>
          <p>
            <strong>Minutes per kilometre = 60 ÷ km/h</strong>, and km/h is mph × 1.6. So 6 mph is
            9.7 km/h, which is a touch over 6:11 per kilometre. A useful anchor:
            <strong>10 km/h — about 6.2 mph — is a 6-minute kilometre</strong>, which is the
            metric equivalent of the 10-minute mile as a mental reference point.
          </p>
          <p>
            The other conversion worth having is distance. A 5K is 3.11 miles and a 10K is 6.21
            miles, so a treadmill reporting miles will show 3.1 and 6.2 respectively. A half
            marathon is 13.1 miles and a marathon 26.2. If your machine displays only miles and
            your goal is metric, those four numbers cover almost every case.
          </p>
          <p>
            Where this matters most is interval sessions written as distances — "6 × 400m", for
            instance. Four hundred metres is a quarter mile, so on a mile-reporting treadmill you
            are looking for 0.25 on the distance readout, and at 8 mph that takes about 1 minute
            52 seconds. Working in time rather than distance is usually easier on a treadmill, and
            converting the session once in advance saves doing arithmetic mid-effort.
          </p>`,
    },
    {
      id: 'verdict',
      heading: 'The Two Numbers to Remember',
      html: `          <p>
            <strong>6 mph is a 10-minute mile. 4 mph is a 15-minute mile.</strong> Everything else
            can be estimated from those two, and <strong>mph × 1.6 gives km/h</strong>.
          </p>
          <p>
            Use the chart to translate a plan into machine settings, and use your breathing to
            decide whether the setting is right today. When they disagree, breathing wins —
            the chart does not know you slept badly.
          </p>
          <p>
            And if you want a session to be harder, reach for the incline column rather than the
            speed column. Same cardiovascular gain, considerably less impact.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'How do I convert treadmill mph to minutes per mile?',
      a: `Divide 60 by the speed in mph. At 6 mph that is a 10-minute mile; at 4 mph, a 15-minute mile. Those two are worth memorising because everything else can be estimated from them. To get km/h, multiply mph by 1.61 — or just 1.6, which is accurate enough at any treadmill speed.`,
    },
    {
      q: 'What speed is a 10-minute mile on a treadmill?',
      a: `6.0 mph, which is 9.7 km/h. A 9-minute mile is about 6.7 mph, an 8-minute mile is 7.5 mph, and a 12-minute mile is 5.0 mph. If your target pace falls between the speeds your machine offers, round down rather than up.`,
    },
    {
      q: 'What incline equals running on a treadmill?',
      a: `Roughly, walking at 3 mph on a 10% grade is comparable in cardiovascular effort to jogging at about 5 mph on the flat, at a fraction of the impact per footfall. These are approximations that vary with body weight and fitness, and they assume you are not holding the handrails.`,
    },
    {
      q: 'Should I set the treadmill to 1% incline?',
      a: `It is a harmless default and a reasonable habit, particularly if you race outdoors. The 1996 study behind it found the energy cost matched outdoor running at 1% specifically at faster paces, around 7 mph and up. At walking and easy jogging paces the difference is small enough to ignore.`,
    },
    {
      q: 'Why is my treadmill pace different from my outdoor pace?',
      a: `Several reasons unrelated to fitness: no air resistance to push through, no camber or terrain variation, and poorer heat dissipation indoors, which makes a given pace feel harder. Console calibration can also drift with belt wear. Treat treadmill pace as its own scale rather than expecting the two to match.`,
    },
    {
      q: 'Is treadmill speed accurate?',
      a: `Generally yes — the machine controls belt speed directly, so it is among the more reliable numbers on the console. It can drift with belt wear and incorrect tension. If your treadmill consistently disagrees with a GPS watch, check belt tension before assuming either device is wrong.`,
    },
  ],
  mistakesHeading: 'Common Mistakes Reading Treadmill Speeds',
  mistakesIntro:
    'Three of these come from treating a number on a console as though it meant the same thing every day.',
  mistakes: [
    {
      title: 'Assuming 0.5 mph means the same thing at every speed',
      body: 'The dial moves evenly and the effect does not. Adding 0.5 mph at walking pace changes your mile time by nearly two minutes; adding it at 9 mph changes it by about twenty seconds. Plans written in pace do not increment the way a speed dial does, which is why converting matters.',
    },
    {
      title: 'Running every session by the number rather than by feel',
      body: 'The same mph sits at a different effort on different days depending on sleep, heat, fatigue and food. Use the chart to translate a plan into settings and your breathing to judge whether it is right today. Full sentences means easy; single words means hard. When they disagree, believe your breathing.',
    },
    {
      title: 'Holding the rails while using the incline equivalents',
      body: 'Every incline comparison on this page assumes your hands are off the handrails, or resting lightly at most. Leaning transfers work to your arms and the frame while the console keeps reporting the same grade, so the equivalence stops holding. If you cannot walk the grade without gripping, lower it.',
    },
    {
      title: 'Expecting treadmill and road paces to match',
      body: 'No air resistance, no terrain variation and poorer heat dissipation mean the two are genuinely different. Compare treadmill sessions to treadmill sessions and road runs to road runs. A 1% grade addresses part of the difference at faster paces and does not make them interchangeable.',
    },
  ],
  relatedHeading: 'Related Training Guides',
  related: [
    {
      kicker: 'Pillar Guide',
      title: 'Treadmill Workouts',
      blurb: 'The four session types, and how to distribute intensity across a week.',
      url: '/treadmill-workouts/',
    },
    {
      kicker: 'Intervals',
      title: 'Treadmill Interval Workouts',
      blurb: 'Five session structures and how to pick a pace you can finish.',
      url: '/treadmill-interval-workouts/',
    },
    {
      kicker: 'Grade',
      title: 'Incline: Percentage vs. Degrees',
      blurb: 'Why 15% is only 8.5 degrees, and what each grade demands.',
      url: '/treadmill-incline-percent-vs-degrees/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">6 mph is a 10-minute mile, 4 mph is a 15-minute mile, and
            mph × 1.6 gives km/h.</strong> Everything else follows from those three.`,
    `Use the chart to translate a plan into machine settings, and your breathing to judge
            whether it suits you today. When you want a session harder, reach for the
            <a href="/treadmill-incline-percent-vs-degrees/" class="text-[#5AA9FF] font-bold no-underline">incline column</a>
            rather than the speed column.`,
  ],
};

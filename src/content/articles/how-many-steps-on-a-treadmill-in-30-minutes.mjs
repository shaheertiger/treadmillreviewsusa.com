const th = 'text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4';
const td = 'border-b border-gray-100 py-2 pr-4 text-gray-700';

export default {
  slug: 'how-many-steps-on-a-treadmill-in-30-minutes',
  title: 'How Many Steps on a Treadmill in 30 Minutes? By Speed (2-4 mph)',
  description:
    'About 2,900 steps at 2 mph, 3,400 at 3 mph and 3,900 at 4 mph in 30 minutes on a treadmill, based on walking-cadence research. Full table by speed and height.',
  crumbLabel: 'Steps in 30 Minutes',
  breadcrumb: { name: 'Workouts & Training', url: '/training/' },
  kicker: 'Training',
  updated: 'November 2026',
  updatedLong: 'November 21, 2026',
  published: '2026-11-21',
  socialProof: '1.2k',
  h1: ['How Many Steps on a Treadmill', 'in 30 Minutes?'],
  standfirst:
    'Roughly 2,900 steps at 2 mph, 3,400 at 3 mph and 3,900 at 4 mph for most adults walking for 30 minutes, with a few hundred either way depending on your height and stride. Jogging at 5 to 6 mph typically lands somewhere around 4,500 to 5,000.',
  ctas: [
    { label: 'Steps by Speed', href: '#steps-by-speed' },
    { label: '15, 45 & 60 Minutes', href: '#other-durations' },
  ],
  tags: ['steps in 30 minutes', 'treadmill steps by speed', 'steps at 3 mph', 'steps at 4 mph', 'walking cadence'],
  stickyCta: { text: 'See Steps by Speed', link: '#steps-by-speed' },
  lead: `Thirty minutes is the most common treadmill session there is, and the step count at the
          end of it is one of the most common numbers people want to check. The answer depends on
          two things: how fast the belt is moving and how long your steps are. The first you set on
          the console; the second depends on your height and how you walk. Fortunately there is
          good research on how many steps per minute adults actually take at each treadmill speed,
          so the estimates below are anchored to measured data rather than guesswork.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'The Short Answer',
      html: `          <p>
            <strong>Most adults take about 3,400 steps in 30 minutes at 3 mph on a treadmill, and
            about 3,900 at 4 mph.</strong> Slower walking produces fewer steps per session but more
            steps per mile, and taller people take fewer steps than shorter people at the same speed.
          </p>
          <ul>
            <li><strong>2 mph for 30 minutes (1 mile):</strong> about 2,900 steps, typically 2,700 to 3,100.</li>
            <li><strong>3 mph for 30 minutes (1.5 miles):</strong> about 3,400 steps, typically 3,200 to 3,600.</li>
            <li><strong>3.5 mph for 30 minutes (1.75 miles):</strong> about 3,650 steps, typically 3,450 to 3,850.</li>
            <li><strong>4 mph for 30 minutes (2 miles):</strong> about 3,900 steps, typically 3,650 to 4,100.</li>
            <li><strong>Jogging at 5 to 6 mph (2.5 to 3 miles):</strong> roughly 4,500 to 5,000 steps.</li>
          </ul>
          <p>
            The walking figures multiply the average steps per minute measured at each speed in a
            treadmill study of adults (more on it below) by 30. They agree with the steps-per-mile
            ranges on our page about
            <a href="/how-many-steps-in-a-mile-on-a-treadmill/" class="text-[#0F62FE] font-medium">how many steps are in a mile on a treadmill</a>,
            which is the other way of getting to the same answer. Your own count can sit outside these
            ranges; the section on <a href="#count-your-own" class="text-[#0F62FE] font-medium">counting your own</a>
            shows how to check it in one minute.
          </p>`,
    },
    {
      id: 'steps-by-speed',
      heading: 'Steps in 30 Minutes by Treadmill Speed',
      html: `          <p>
            The table below covers every common walking speed from 2.0 to 4.5 mph, plus an easy jog.
            Distance is plain arithmetic: speed multiplied by half an hour. The step figures come from
            the cadence (steps per minute) measured at each speed in the CADENCE-Adults study, which
            is described in the next section.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Speed</th>
                <th class="${th}">Distance in 30 min</th>
                <th class="${th}">Average cadence</th>
                <th class="${th}">Steps in 30 min (average)</th>
                <th class="${th}">Typical range</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">2.0 mph</td><td class="${td}">1.0 mile</td><td class="${td}">96 steps/min</td><td class="${td}">about 2,880</td><td class="${td}">2,700 to 3,100</td></tr>
              <tr><td class="${td}">2.5 mph</td><td class="${td}">1.25 miles</td><td class="${td}">106 steps/min</td><td class="${td}">about 3,170</td><td class="${td}">3,000 to 3,350</td></tr>
              <tr><td class="${td}">3.0 mph</td><td class="${td}">1.5 miles</td><td class="${td}">114 steps/min</td><td class="${td}">about 3,410</td><td class="${td}">3,200 to 3,600</td></tr>
              <tr><td class="${td}">3.5 mph</td><td class="${td}">1.75 miles</td><td class="${td}">122 steps/min</td><td class="${td}">about 3,650</td><td class="${td}">3,450 to 3,850</td></tr>
              <tr><td class="${td}">4.0 mph</td><td class="${td}">2.0 miles</td><td class="${td}">129 steps/min</td><td class="${td}">about 3,870</td><td class="${td}">3,650 to 4,100</td></tr>
              <tr><td class="${td}">4.5 mph</td><td class="${td}">2.25 miles</td><td class="${td}">140 steps/min</td><td class="${td}">about 4,200</td><td class="${td}">3,900 to 4,500</td></tr>
              <tr><td class="${td}">5.0 mph (jog)</td><td class="${td}">2.5 miles</td><td class="${td}">about 155 steps/min*</td><td class="${td}">about 4,650</td><td class="${td}">roughly 4,400 to 4,900</td></tr>
              <tr><td class="${td}">6.0 mph (jog)</td><td class="${td}">3.0 miles</td><td class="${td}">about 160 steps/min*</td><td class="${td}">about 4,800</td><td class="${td}">roughly 4,500 to 5,100</td></tr>
            </tbody>
          </table></div>
          <p>
            <strong>How to read it.</strong> The "average" column is the study's mean cadence at that
            speed multiplied by 30 minutes. The "typical range" is that mean plus or minus one
            standard deviation, also multiplied by 30, which covers roughly two in three people.
            Rows marked with an asterisk are illustrative running cadences, the same mid-range values
            used on our steps-per-mile page, because the study measured walking only. Treat those
            two rows as looser estimates than the walking rows.
          </p>
          <p>
            <strong>The two searches people make most.</strong> At <strong>speed 3</strong> (3 mph),
            30 minutes is about 3,400 steps: 113.6 steps per minute multiplied by 30 is 3,408. At
            <strong>speed 4</strong> (4 mph), it is about 3,900: 129 steps per minute multiplied by
            30 is 3,870. The difference between those two sessions is only around 450 steps, even
            though the 4 mph walk covers a third more ground. That is because most of the extra speed
            comes from longer steps rather than more of them.
          </p>
          <p>
            <strong>Cross-check against steps per mile.</strong> Dividing each 30-minute figure by the
            distance gives steps per mile: about 2,270 at 3 mph and about 1,940 at 4 mph. Both sit
            inside the 2,000 to 2,400 (brisk) and 1,800 to 2,100 (fast) ranges on our
            steps-per-mile page. At 2 mph the study's figure works out to about 2,880 steps per mile,
            a little above the 2,300 to 2,700 slow-walk range on that page. Very slow walking
            shortens the step more than people expect, so at 2 mph and below the higher number is the
            safer assumption.
          </p>`,
    },
    {
      id: 'where-numbers-come-from',
      heading: 'Where the Cadence Figures Come From',
      html: `          <p>
            The walking cadences in the table come from the CADENCE-Adults study by Catrine
            Tudor-Locke and colleagues, published in the <em>International Journal of Behavioral
            Nutrition and Physical Activity</em> in 2019. Seventy-six adults aged 21 to 40, equal
            numbers of men and women, walked on a level treadmill in five-minute bouts starting at
            0.5 mph and rising in 0.5 mph steps, while researchers counted their steps directly and
            measured their oxygen use.
          </p>
          <p>
            Their reported average cadences at the speeds on this page were 96.1 steps per minute at
            2.0 mph, 105.8 at 2.5 mph, 113.6 at 3.0 mph, 121.5 at 3.5 mph, 129.0 at 4.0 mph and
            139.9 at 4.5 mph. Fewer participants were still walking at the top speeds: 62 of the 76
            at 4.0 mph and 34 at 4.5 mph, because people who chose to break into a run stopped
            walking bouts. Only seven walked at 5.0 mph, and running bouts were excluded altogether,
            which is why the jogging rows above use illustrative figures instead.
          </p>
          <p>
            The study's main purpose was to link cadence to exercise intensity. Its headline finding
            was that about <strong>100 steps per minute</strong> is a reasonable marker of moderate
            intensity and about <strong>130 steps per minute</strong> of vigorous intensity for
            adults in that age group. A follow-up in 41 to 60 year olds reported the same 100 and 130
            thresholds. That gives the table a second use: if your cadence at a given speed is at or
            above 100, you are very likely walking at a moderate effort, which is what most activity
            guidelines ask for.
          </p>
          <p>
            Two limits are worth keeping in mind. The participants were relatively young adults, and
            a separate CADENCE study in people aged 61 to 85 found that the cadence-to-intensity link
            shifts somewhat with age. And every figure is an average across a group; individuals
            ranged widely. At 3.0 mph, for example, the slowest and fastest cadences recorded were
            101 and 127 steps per minute, which over 30 minutes is the difference between about 3,030
            and 3,810 steps.
          </p>`,
    },
    {
      id: 'short-vs-tall',
      heading: 'Short vs Tall: How Height Changes 30-Minute Steps',
      html: `          <p>
            At the same belt speed, a shorter person has to take more, quicker steps to keep up,
            while a taller person covers the same ground with fewer, longer ones. That is the main
            reason two people walking side by side at 3 mph can finish with step counts several
            hundred apart, with neither tracker at fault.
          </p>
          <p>
            Our steps-per-mile page uses a common rough estimate that walking step length is about 41
            to 42% of height. Applying the same assumption to a 30-minute walk at 3 mph, which covers
            1.5 miles, gives the following:
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Height</th>
                <th class="${th}">Estimated step length</th>
                <th class="${th}">Steps per mile</th>
                <th class="${th}">Steps in 30 min at 3 mph</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">5 ft 0 in</td><td class="${td}">about 25 in</td><td class="${td}">about 2,530</td><td class="${td}">about 3,800</td></tr>
              <tr><td class="${td}">5 ft 4 in</td><td class="${td}">about 26.5 in</td><td class="${td}">about 2,390</td><td class="${td}">about 3,590</td></tr>
              <tr><td class="${td}">5 ft 8 in</td><td class="${td}">about 28 in</td><td class="${td}">about 2,260</td><td class="${td}">about 3,390</td></tr>
              <tr><td class="${td}">6 ft 0 in</td><td class="${td}">about 30 in</td><td class="${td}">about 2,110</td><td class="${td}">about 3,170</td></tr>
              <tr><td class="${td}">6 ft 4 in</td><td class="${td}">about 31.5 in</td><td class="${td}">about 2,010</td><td class="${td}">about 3,020</td></tr>
            </tbody>
          </table></div>
          <p>
            The middle row, about 3,390 steps for someone of 5 ft 8 in, lands almost exactly on the
            study's average of about 3,410 at 3 mph, which is a useful sign that the two methods
            agree. The spread from 5 ft 0 in to 6 ft 4 in is roughly 800 steps over half an hour.
          </p>
          <p>
            <strong>Why this table stops at 3 mph.</strong> The height rule describes an ordinary
            walking step. As you speed up, you lengthen your step, so applying the same step length
            at 4 mph would overstate the count, especially for shorter walkers. At 4 mph, the more
            reliable approach is to start from the 3,870 average in the speed table and adjust: a
            shorter walker will typically land toward the top of the 3,650 to 4,100 range and a taller
            walker toward the bottom. At 2 mph, the reverse problem applies, since steps shorten at
            a stroll, so expect a little more than the height rule suggests.
          </p>
          <p>
            Leg length matters more than overall height, and walking style matters too. Some people
            naturally take quick, short steps; others take long, loping ones. If you want a number
            that actually describes you, count it, as described further down.
          </p>`,
    },
    {
      id: 'km-h-display',
      heading: 'If Your Treadmill Shows Speed 3 or 4 in km/h',
      html: `          <p>
            Many people searching for "speed 3" or "speed 4" are reading the number straight off the
            console without knowing which unit it uses. Most treadmills sold in the US display miles
            per hour, but some machines, particularly compact walking pads and imported models, can be
            set to kilometres per hour. The difference is large.
          </p>
          <ul>
            <li><strong>Speed 3 in km/h</strong> is about 1.9 mph (3 ÷ 1.609). That is a slow
            stroll, and 30 minutes would come to roughly 2,800 steps and about 0.9 miles.</li>
            <li><strong>Speed 4 in km/h</strong> is about 2.5 mph (4 ÷ 1.609). That is an easy walk,
            and 30 minutes would come to about 3,170 steps and about 1.25 miles.</li>
            <li><strong>Speed 3 in mph</strong> is about 4.8 km/h: a steady, purposeful walk.</li>
            <li><strong>Speed 4 in mph</strong> is about 6.4 km/h: a fast walk that some people find
            more comfortable as a slow jog.</li>
          </ul>
          <p>
            A quick way to tell which you have: at 4 mph most people are walking hard and breathing
            noticeably faster, while 4 km/h feels like walking around a shop. The console or manual
            will usually say which unit is active, and many machines let you switch between them.
            Our <a href="/treadmill-pace-and-speed-chart/" class="text-[#0F62FE] font-medium">treadmill pace and speed chart</a>
            lists mph, km/h and minutes per mile side by side.
          </p>`,
    },
    {
      id: 'other-durations',
      heading: 'Quick Conversions: 15, 45 and 60 Minutes',
      html: `          <p>
            Because step rate at a fixed speed stays fairly steady, scaling to a different session
            length is simple multiplication: steps per minute times minutes. The figures below use
            the same average cadences as the main table, rounded to the nearest 10.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Speed</th>
                <th class="${th}">15 minutes</th>
                <th class="${th}">30 minutes</th>
                <th class="${th}">45 minutes</th>
                <th class="${th}">60 minutes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">2.0 mph</td><td class="${td}">about 1,440</td><td class="${td}">about 2,880</td><td class="${td}">about 4,320</td><td class="${td}">about 5,770</td></tr>
              <tr><td class="${td}">2.5 mph</td><td class="${td}">about 1,590</td><td class="${td}">about 3,170</td><td class="${td}">about 4,760</td><td class="${td}">about 6,350</td></tr>
              <tr><td class="${td}">3.0 mph</td><td class="${td}">about 1,700</td><td class="${td}">about 3,410</td><td class="${td}">about 5,110</td><td class="${td}">about 6,820</td></tr>
              <tr><td class="${td}">3.5 mph</td><td class="${td}">about 1,820</td><td class="${td}">about 3,650</td><td class="${td}">about 5,470</td><td class="${td}">about 7,290</td></tr>
              <tr><td class="${td}">4.0 mph</td><td class="${td}">about 1,940</td><td class="${td}">about 3,870</td><td class="${td}">about 5,810</td><td class="${td}">about 7,740</td></tr>
              <tr><td class="${td}">4.5 mph</td><td class="${td}">about 2,100</td><td class="${td}">about 4,200</td><td class="${td}">about 6,300</td><td class="${td}">about 8,390</td></tr>
            </tbody>
          </table></div>
          <p>
            In practice, longer sessions tend to come in slightly lower than straight multiplication
            suggests, because most people include a slower warm-up and cool-down. Ten minutes of
            warming up at 2.5 mph inside a 45-minute session at 3.5 mph, for example, trims the total
            by a few hundred steps compared with the table.
          </p>
          <p>
            The distance side of the calculation is even simpler: speed in mph multiplied by hours.
            Fifteen minutes is a quarter of the speed, 45 minutes three quarters, and an hour the full
            figure. So an hour at 3 mph is 3 miles, and 45 minutes at 4 mph is also 3 miles. For full
            mile and 5K times at each speed, see
            <a href="/how-long-is-a-mile-on-a-treadmill/" class="text-[#0F62FE] font-medium">how long a mile takes on a treadmill</a>.
          </p>`,
    },
    {
      id: 'ten-thousand',
      heading: 'How a 30-Minute Walk Fits Into 10,000 Steps',
      html: `          <p>
            At 3 to 4 mph, a 30-minute treadmill walk contributes roughly 3,400 to 3,900 steps, a
            bit over a third of 10,000. Reaching 10,000 in treadmill time alone would take around 80
            minutes at 4 mph or close to 90 minutes at 3 mph. Very few people need to do that, and
            the 10,000 figure is not as firm a target as its popularity suggests.
          </p>
          <p>
            The largest pooled analysis on the question is a 2022 meta-analysis led by Amanda Paluch
            and published in <em>The Lancet Public Health</em>, which combined data from 15 cohorts
            in which participants wore step-counting devices. It found that the risk of death from
            any cause fell as daily steps rose, then levelled off at around 6,000 to 8,000 steps a day
            for adults aged 60 and over, and around 8,000 to 10,000 steps a day for adults under 60.
            The authors noted that the 10,000 target is widely promoted despite little evidence
            behind that specific number.
          </p>
          <p>
            Put together with the table above, that suggests a practical plan. A 30-minute walk at 3
            to 4 mph covers a meaningful share of a 6,000 to 8,000 day; the ordinary walking you do
            around the house, at work and running errands usually supplies much of the rest. Our page
            on <a href="/how-long-should-i-walk-on-a-treadmill/" class="text-[#0F62FE] font-medium">how long you should walk on a treadmill</a>
            covers session length by goal, and why minutes at a brisk effort are a better measure of a
            workout than step count alone.
          </p>
          <p>
            One more reason to favour the faster end of your comfortable range: at 3 mph and above,
            the study's average cadence sits above 100 steps per minute, the marker of moderate
            intensity. A 30-minute walk at 3.5 mph is therefore both a useful step contribution and
            a session that counts toward weekly activity guidelines. Our guide to
            <a href="/what-speed-should-i-walk-on-a-treadmill/" class="text-[#0F62FE] font-medium">what speed to walk on a treadmill</a>
            shows how to find a brisk pace that suits you.
          </p>`,
    },
    {
      id: 'tracker-counts',
      heading: 'Why Your Tracker Says Something Different',
      html: `          <p>
            Finish a 30-minute session and compare your watch with this table, and you may see a
            gap of hundreds of steps in either direction. Several things cause it, and most of them
            are under your control.
          </p>
          <p>
            <strong>Undercounting from handrails.</strong> A wrist-worn tracker detects steps
            largely from arm swing. Hold the rails, rest your forearms on a desk shelf or carry a phone
            in one hand, and it can miss a large share of your steps. This is the single most common
            reason a treadmill session reads low. Walking hands-free with a natural swing fixes most
            of it. Our page on whether a
            <a href="/does-a-fitness-tracker-count-steps-on-a-treadmill/" class="text-[#0F62FE] font-medium">fitness tracker counts steps on a treadmill</a>
            compares watches, phones and clip-on counters in detail.
          </p>
          <p>
            <strong>Undercounting at very slow speeds.</strong> At a gentle stroll the movement
            signal is small and irregular, and step counters in general are less accurate at slow
            walking speeds than at normal ones. If you walk at 1 to 2 mph, for example at a desk,
            expect your tracker to be less reliable than it is on a brisk walk.
          </p>
          <p>
            <strong>Overcounting from extra arm movement.</strong> The opposite can happen too.
            Exaggerated arm swing, gesturing while on a call or adjusting the console can register
            as steps that never happened. These errors are usually smaller than the handrail
            undercount, but they explain a tracker that reads higher than expected.
          </p>
          <p>
            <strong>Distance is not the same thing as steps.</strong> Your tracker counts steps
            directly but has to estimate indoor distance from those steps and a stored step length,
            while the treadmill calculates distance from belt speed and time. If the two distances
            disagree, it does not mean the step count is wrong. Treadmill speed readouts can also
            drift with calibration; our guide to
            <a href="/is-my-treadmill-speed-accurate/" class="text-[#0F62FE] font-medium">checking whether your treadmill speed is accurate</a>
            explains a simple test.
          </p>
          <p>
            Where the device is worn changes things too. A phone in a pocket or a clip on the
            waistband senses hip movement, so it usually copes better with handrails or desk walking.
            A phone resting on the console counts nothing.
          </p>`,
    },
    {
      id: 'count-your-own',
      heading: 'How to Count Your Own 30-Minute Steps (and What Changes Them)',
      html: `          <p>
            You do not need to walk for 30 minutes to find your number. One minute at a steady speed
            is enough, because cadence stays fairly constant once you are warmed up.
          </p>
          <ul>
            <li><strong>Warm up</strong> for three to five minutes, then set the speed you plan to
            use for the session.</li>
            <li><strong>Count your steps for 60 seconds</strong>, walking naturally and hands-free.
            Counting for 15 seconds and multiplying by four, the method suggested in coverage of the
            CADENCE research, also works but is less precise.</li>
            <li><strong>Multiply by 30</strong> to get your 30-minute total, or by any other number
            of minutes.</li>
            <li><strong>Repeat at each speed</strong> you use regularly, since the figure changes
            with pace.</li>
          </ul>
          <p>
            Worked example: at 3.2 mph you count 112 steps in a minute. Over 30 minutes that is
            112 × 30 = <strong>3,360 steps</strong>. The session covers 3.2 × 0.5 = 1.6 miles, so your
            steps per mile are 3,360 ÷ 1.6 = 2,100, and your step length is 63,360 ÷ 2,100, or about
            30 inches.
          </p>
          <p>
            That one count also tells you your intensity. If you are at or above roughly 100 steps a
            minute, you are very likely walking at a moderate effort. If you are well under it at
            your usual speed, nudging the belt up by a few tenths of a mile per hour is an easy way
            to make the same half hour more productive.
          </p>
          <p>
            Once you have your own figure, it is worth entering your step length into any tracker that
            allows it. That makes indoor distance estimates far closer to what the treadmill shows.
          </p>
          <p>
            <strong>Incline.</strong> Every figure on this page assumes a level belt. Walking uphill tends to shorten your
            step and quicken your cadence slightly, so a 30-minute session at the same speed on a
            noticeable incline will usually produce somewhat more steps than the table shows, while
            also being considerably harder work. Step count is therefore a poor way to compare an
            incline walk with a flat one; minutes at a given effort is fairer.
          </p>
          <p>
            Holding the rails changes your gait as well as confusing wrist trackers. If you need
            the rails for balance, use them: safety comes first, and a hip-worn counter will give you
            a better count than a watch. If you hold on only out of habit, try walking a little
            slower without them, which usually produces a more natural stride.
          </p>
          <p>
            <strong>A note on health.</strong> This site reviews treadmills and walking equipment and is not giving medical advice.
            If you have a heart, lung, joint or balance condition, are pregnant, or are returning
            to exercise after illness or surgery, ask your doctor, physical therapist or cardiac
            rehab team what speed and session length suit you before using step targets or the
            cadence thresholds on this page.
          </p>`,
    },
    {
      id: 'verdict',
      heading: 'The Verdict',
      html: `          <p>
            <strong>A 30-minute treadmill walk produces about 2,900 steps at 2 mph, 3,400 at 3 mph
            and 3,900 at 4 mph</strong> for a typical adult, with a range of a few hundred either way.
            Jogging at 5 to 6 mph adds roughly another 800 to 900 on top of a 4 mph walk.
          </p>
          <p>
            Shorter walkers land toward the top of each range and taller walkers toward the bottom.
            Count your steps for one minute at your usual speed and multiply by 30 for your own
            figure, walk hands-free so your tracker can keep up, and treat each session as one part
            of a daily step total rather than the whole of it.
          </p>
        `,
    },
  ],
  faqs: [
    {
      q: 'How many steps on a treadmill for 30 minutes at speed 3?',
      a: `At 3 mph, about 3,400 steps for a typical adult, based on an average cadence of about 114 steps per minute measured on a treadmill in the CADENCE-Adults study. Most people land between about 3,200 and 3,600. If your treadmill shows km/h, speed 3 is only about 1.9 mph and works out nearer 2,800 steps.`,
    },
    {
      q: 'How many steps on a treadmill for 30 minutes at speed 4?',
      a: `At 4 mph, about 3,900 steps for a typical adult, from an average of about 129 steps per minute. Most people land between about 3,650 and 4,100, with shorter walkers at the higher end. If the console is in km/h, speed 4 is about 2.5 mph and works out to roughly 3,170 steps.`,
    },
    {
      q: 'How many steps is 30 minutes of walking at 2 mph?',
      a: `About 2,900 steps, covering 1 mile. Slow walking uses short steps, so steps per mile are higher than at a brisk pace even though the 30-minute total is lower. Most people fall between about 2,700 and 3,100.`,
    },
    {
      q: 'How many miles is 30 minutes on a treadmill?',
      a: `Distance is speed multiplied by half an hour: 1 mile at 2 mph, 1.5 miles at 3 mph, 2 miles at 4 mph and 3 miles at 6 mph. The treadmill console calculates this from belt speed, so it is a good guide on a level, well-calibrated machine.`,
    },
    {
      q: 'Is 30 minutes on a treadmill enough steps for the day?',
      a: `On its own, no: it contributes about 3,400 to 3,900 steps at 3 to 4 mph. A 2022 meta-analysis in The Lancet Public Health found mortality benefits levelled off at about 6,000 to 8,000 daily steps in adults 60 and over and 8,000 to 10,000 in younger adults, so a 30-minute walk plus ordinary daily movement often gets most people there.`,
    },
    {
      q: 'Why does my watch show fewer steps than this after 30 minutes?',
      a: `Usually because your arms were not swinging. Wrist trackers count steps mostly from arm movement, so holding the handrails or resting on a desk can make them miss many steps. Walk hands-free, or wear a phone or clip-on counter at your hip if you need the rails.`,
    },
  ],
  mistakesHeading: 'Common Mistakes With 30-Minute Step Counts',
  mistakesIntro:
    'Most mismatches between this table and a tracker come from the unit on the console, the way the tracker is worn, or treating an average as a personal target.',
  mistakes: [
    {
      title: 'Confusing km/h with mph',
      body: 'Speed 4 in km/h is about 2.5 mph, not 4 mph, so the expected 30-minute count drops from about 3,900 to about 3,170. Check which unit your console is using before comparing your steps with any chart, including this one.',
    },
    {
      title: 'Holding the rails with a wrist tracker',
      body: 'A watch counts steps from arm swing and can miss a large share of them if your hands are on the rails or a desk. Walk hands-free if you can do so safely, or move the counter to your hip with a phone in a pocket or a clip-on device.',
    },
    {
      title: 'Treating the average as your number',
      body: 'The table gives group averages. Height, leg length and walking style can move your 30-minute total by several hundred steps at the same speed. Count your steps for one minute at your usual speed and multiply by 30 to get a figure that actually describes you.',
    },
    {
      title: 'Counting steps instead of effort',
      body: 'A slow 30-minute stroll and a brisk 30-minute walk differ by under 1,000 steps but by a lot in effort. Aim for a pace where your cadence is around 100 steps a minute or more and your breathing is quicker, rather than chasing the step total alone.',
    },
  ],
  relatedHeading: 'Related Training Guides',
  related: [
    {
      kicker: 'Reference',
      title: 'How Many Steps in a Mile on a Treadmill?',
      blurb: 'Steps per mile walking vs running, by height and speed.',
      url: '/how-many-steps-in-a-mile-on-a-treadmill/',
    },
    {
      kicker: 'Speed',
      title: 'What Speed Should I Walk On?',
      blurb: 'Typical walking speeds and how to find a brisk pace with the talk test.',
      url: '/what-speed-should-i-walk-on-a-treadmill/',
    },
    {
      kicker: 'Trackers',
      title: 'Does a Fitness Tracker Count Steps on a Treadmill?',
      blurb: 'Why watches miss steps indoors and how to get a better count.',
      url: '/does-a-fitness-tracker-count-steps-on-a-treadmill/',
    },
    {
      kicker: 'Duration',
      title: 'How Long Should I Walk on a Treadmill?',
      blurb: 'Session length by goal, and what step-count research suggests.',
      url: '/how-long-should-i-walk-on-a-treadmill/',
    },
    {
      kicker: 'Reference',
      title: 'Treadmill Pace & Speed Chart',
      blurb: 'Convert mph, km/h and minutes per mile at a glance.',
      url: '/treadmill-pace-and-speed-chart/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">Thirty minutes on a treadmill is about 3,400 steps at 3 mph and
            about 3,900 at 4 mph</strong> for a typical adult, based on measured walking cadences.
            Shorter people take a few hundred more, taller people a few hundred fewer, and a 5 to 6
            mph jog lands around 4,500 to 5,000.`,
    `For your own figure, count one minute at your usual speed and multiply by 30. Check whether
            your console reads mph or km/h, walk hands-free so your tracker keeps up, and see our
            <a href="/how-many-steps-in-a-mile-on-a-treadmill/" class="text-[#5AA9FF] font-bold no-underline">steps-per-mile guide</a>
            to convert between steps and distance.`,
  ],
};

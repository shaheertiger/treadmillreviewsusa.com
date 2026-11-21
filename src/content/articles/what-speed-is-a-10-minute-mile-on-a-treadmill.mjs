const th = 'text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4';
const td = 'border-b border-gray-100 py-2 pr-4 text-gray-700';

export default {
  slug: 'what-speed-is-a-10-minute-mile-on-a-treadmill',
  title: 'What Speed Is a 10-Minute Mile on a Treadmill? (6 mph) + Chart',
  description:
    'A 10-minute mile is 6.0 mph (9.7 km/h). A 9-minute mile is 6.7 mph, an 8-minute mile 7.5 mph and a 12-minute mile 5.0 mph. Chart with 5K and 10K times.',
  crumbLabel: 'What Speed Is a 10-Minute Mile?',
  breadcrumb: { name: 'Workouts & Training', url: '/training/' },
  kicker: 'Training',
  updated: 'November 2026',
  updatedLong: 'November 21, 2026',
  published: '2026-11-21',
  socialProof: '1.0k',
  h1: ['What Speed Is a 10-Minute Mile', 'On a Treadmill?'],
  standfirst:
    'A 10-minute mile is 6.0 mph on a treadmill, or about 9.7 km/h. A 9-minute mile is 6.7 mph, an 8-minute mile is 7.5 mph and a 12-minute mile is 5.0 mph — the chart below covers every pace from 6:00 to 15:00.',
  ctas: [
    { label: 'The Short Answer', href: '#short-answer' },
    { label: 'Pace to Speed Chart', href: '#pace-chart' },
  ],
  tags: ['10 minute mile treadmill speed', '9 minute mile mph', '8 minute mile mph', 'treadmill running speed', 'pace to mph'],
  stickyCta: { text: 'See the Pace Chart', link: '#pace-chart' },
  lead: `Running plans, race goals and running apps all talk in minutes per mile. The treadmill
          console talks in miles per hour. Translating one into the other is simple arithmetic, but
          it is the kind of arithmetic nobody wants to do while the belt is already moving. Here are
          the answers worked out, plus what to set when your target pace does not land on a round
          number.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'The Short Answer',
      html: `          <p>
            <strong>A 10-minute mile is exactly 6.0 mph on a treadmill (about 9.7 km/h).</strong>
            Every other pace follows from one formula: <strong>mph = 60 ÷ minutes per mile.</strong>
          </p>
          <ul>
            <li><strong>8-minute mile:</strong> 7.5 mph (about 12.1 km/h)</li>
            <li><strong>9-minute mile:</strong> 6.67 mph — set 6.7 mph, which works out to an
            8:57 mile (about 10.7 km/h)</li>
            <li><strong>10-minute mile:</strong> 6.0 mph (about 9.7 km/h)</li>
            <li><strong>11-minute mile:</strong> 5.45 mph — set 5.5 mph for a 10:55 mile</li>
            <li><strong>12-minute mile:</strong> 5.0 mph (about 8.0 km/h)</li>
          </ul>
          <p>
            Hold 6.0 mph for 10 minutes and the console should read 1.00 mile; hold it for 31
            minutes and you have covered roughly a 5K. If you are new to running, or have a heart,
            lung or joint condition, check with your doctor before you start running at any of
            these speeds. For every speed from walking to sprinting, including incline equivalents,
            see our full
            <a href="/treadmill-pace-and-speed-chart/" class="text-[#0F62FE] font-medium">treadmill pace and speed chart</a>.
          </p>`,
    },
    {
      id: 'the-math',
      heading: 'How to Convert Any Pace to Treadmill Speed',
      html: `          <p>
            There are 60 minutes in an hour, so the number of miles you cover in an hour is 60
            divided by the number of minutes each mile takes. That is the whole conversion:
          </p>
          <ul>
            <li><strong>Pace to speed:</strong> mph = 60 ÷ minutes per mile</li>
            <li><strong>Speed to pace:</strong> minutes per mile = 60 ÷ mph</li>
          </ul>
          <p>
            The only catch is the seconds. A pace of 9:30 is not 9.30 minutes, it is 9.5 minutes,
            because 30 seconds is half a minute. Convert the seconds to a decimal first by dividing
            by 60: 9:15 is 9.25 minutes, 9:45 is 9.75 minutes, 8:20 is about 8.33 minutes. Then
            divide 60 by that figure. So a 9:30 mile is 60 ÷ 9.5 = 6.32 mph, and an 8:20 mile is
            60 ÷ 8.33 = 7.2 mph.
          </p>
          <p>
            Going the other way works the same. If the console says 6.5 mph, 60 ÷ 6.5 = 9.23
            minutes. The 0.23 of a minute is 0.23 × 60, about 14 seconds, so 6.5 mph is a 9:14
            mile.
          </p>
          <p>
            <strong>Rounding to what the console can do.</strong> Most home treadmills adjust in
            steps of 0.1 mph, so a pace that converts to 6.67 mph or 5.45 mph cannot be set exactly.
            Round to the nearest tenth and you will be within a few seconds per mile of the target,
            which is closer than most people can hold a pace outdoors. Round up if you want to be
            sure of hitting the time; round down if the session is meant to be easy.
          </p>
          <p>
            A useful mental anchor: at 6 mph each tenth of a mile takes one minute. That makes
            6.0 mph the easiest speed on the machine to check in your head, and the reason the
            10-minute mile is such a popular reference pace.
          </p>`,
    },
    {
      id: 'pace-chart',
      heading: 'Treadmill Speed Chart: 6:00 to 15:00 per Mile',
      html: `          <p>
            The table converts every half-minute pace from a 6-minute mile to a 15-minute mile. The
            mph column is the exact figure; the "set the console to" column is the nearest 0.1 mph
            and the pace that setting actually produces. Finish times assume you hold the pace for
            the full distance (5K = 3.107 miles, 10K = 6.214 miles).
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Pace per mile</th>
                <th class="${th}">Exact mph</th>
                <th class="${th}">Set the console to</th>
                <th class="${th}">km/h</th>
                <th class="${th}">5K time</th>
                <th class="${th}">10K time</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">6:00</td><td class="${td}">10.0</td><td class="${td}">10.0 mph (6:00)</td><td class="${td}">16.1</td><td class="${td}">18:38</td><td class="${td}">37:17</td></tr>
              <tr><td class="${td}">6:30</td><td class="${td}">9.23</td><td class="${td}">9.2 mph (6:31)</td><td class="${td}">14.9</td><td class="${td}">20:12</td><td class="${td}">40:23</td></tr>
              <tr><td class="${td}">7:00</td><td class="${td}">8.57</td><td class="${td}">8.6 mph (6:59)</td><td class="${td}">13.8</td><td class="${td}">21:45</td><td class="${td}">43:30</td></tr>
              <tr><td class="${td}">7:30</td><td class="${td}">8.0</td><td class="${td}">8.0 mph (7:30)</td><td class="${td}">12.9</td><td class="${td}">23:18</td><td class="${td}">46:36</td></tr>
              <tr><td class="${td}">8:00</td><td class="${td}">7.5</td><td class="${td}">7.5 mph (8:00)</td><td class="${td}">12.1</td><td class="${td}">24:51</td><td class="${td}">49:43</td></tr>
              <tr><td class="${td}">8:30</td><td class="${td}">7.06</td><td class="${td}">7.1 mph (8:27)</td><td class="${td}">11.4</td><td class="${td}">26:24</td><td class="${td}">52:49</td></tr>
              <tr><td class="${td}">9:00</td><td class="${td}">6.67</td><td class="${td}">6.7 mph (8:57)</td><td class="${td}">10.7</td><td class="${td}">27:58</td><td class="${td}">55:55</td></tr>
              <tr><td class="${td}">9:30</td><td class="${td}">6.32</td><td class="${td}">6.3 mph (9:31)</td><td class="${td}">10.2</td><td class="${td}">29:31</td><td class="${td}">59:02</td></tr>
              <tr><td class="${td}"><strong>10:00</strong></td><td class="${td}"><strong>6.0</strong></td><td class="${td}"><strong>6.0 mph (10:00)</strong></td><td class="${td}"><strong>9.7</strong></td><td class="${td}"><strong>31:04</strong></td><td class="${td}"><strong>1:02:08</strong></td></tr>
              <tr><td class="${td}">10:30</td><td class="${td}">5.71</td><td class="${td}">5.7 mph (10:32)</td><td class="${td}">9.2</td><td class="${td}">32:37</td><td class="${td}">1:05:15</td></tr>
              <tr><td class="${td}">11:00</td><td class="${td}">5.45</td><td class="${td}">5.5 mph (10:55)</td><td class="${td}">8.8</td><td class="${td}">34:11</td><td class="${td}">1:08:21</td></tr>
              <tr><td class="${td}">11:30</td><td class="${td}">5.22</td><td class="${td}">5.2 mph (11:32)</td><td class="${td}">8.4</td><td class="${td}">35:44</td><td class="${td}">1:11:27</td></tr>
              <tr><td class="${td}">12:00</td><td class="${td}">5.0</td><td class="${td}">5.0 mph (12:00)</td><td class="${td}">8.0</td><td class="${td}">37:17</td><td class="${td}">1:14:34</td></tr>
              <tr><td class="${td}">12:30</td><td class="${td}">4.8</td><td class="${td}">4.8 mph (12:30)</td><td class="${td}">7.7</td><td class="${td}">38:50</td><td class="${td}">1:17:40</td></tr>
              <tr><td class="${td}">13:00</td><td class="${td}">4.62</td><td class="${td}">4.6 mph (13:03)</td><td class="${td}">7.4</td><td class="${td}">40:23</td><td class="${td}">1:20:47</td></tr>
              <tr><td class="${td}">13:30</td><td class="${td}">4.44</td><td class="${td}">4.4 mph (13:38)</td><td class="${td}">7.2</td><td class="${td}">41:57</td><td class="${td}">1:23:53</td></tr>
              <tr><td class="${td}">14:00</td><td class="${td}">4.29</td><td class="${td}">4.3 mph (13:57)</td><td class="${td}">6.9</td><td class="${td}">43:30</td><td class="${td}">1:27:00</td></tr>
              <tr><td class="${td}">14:30</td><td class="${td}">4.14</td><td class="${td}">4.1 mph (14:38)</td><td class="${td}">6.7</td><td class="${td}">45:03</td><td class="${td}">1:30:06</td></tr>
              <tr><td class="${td}">15:00</td><td class="${td}">4.0</td><td class="${td}">4.0 mph (15:00)</td><td class="${td}">6.4</td><td class="${td}">46:36</td><td class="${td}">1:33:12</td></tr>
            </tbody>
          </table></div>
          <p>
            Two patterns are worth noticing. First, the paces that convert to tidy speeds are the
            ones that divide evenly into 60: 6, 7.5, 8, 10, 12 and 15 minutes. Those are the paces
            you can hit exactly on any console. Second, the gap in mph between neighbouring paces
            shrinks as you slow down. Going from an 8:00 to a 7:30 mile means adding half a mile
            per hour; going from a 12:00 to an 11:30 mile needs only about a quarter. Small speed
            changes matter a lot more at the slow end of the chart than they look.
          </p>
          <p>
            The finish times are pure arithmetic. They tell you what holding a pace would produce,
            not what a particular runner can hold, and they assume the treadmill's speed readout is
            accurate (more on that below).
          </p>`,
    },
    {
      id: 'common-paces',
      heading: 'What Speed Is a 9-Minute, 8-Minute or 12-Minute Mile?',
      html: `          <p>
            These are the paces people search for most often after the 10-minute mile, so here they
            are one at a time, with what to actually set.
          </p>
          <p>
            <strong>8-minute mile: 7.5 mph.</strong> 60 ÷ 8 = 7.5 exactly, so this is one of the
            paces any console can hit. At 7.5 mph a 5K takes about 24:51 and a 10K about 49:43. In
            km/h it is 12.07, which most metric consoles will show as 12.1.
          </p>
          <p>
            <strong>9-minute mile: 6.67 mph.</strong> 60 ÷ 9 = 6.666…, which no 0.1 mph console
            can set. At 6.7 mph you run an 8:57 mile, three seconds per mile quick; at 6.6 mph you
            run about a 9:05 mile, five seconds slow. For a 9:00 target, 6.7 is the closer setting.
            If you want to average exactly 9:00 over a longer run, alternating a few minutes at
            each setting will get you there, though in practice nobody needs that level of
            precision.
          </p>
          <p>
            <strong>10-minute mile: 6.0 mph.</strong> Exact, easy to check, and the reason this pace
            is the default reference point. A 10:00 mile is 6:13 per kilometre, and 6.0 mph is
            about 9.66 km/h.
          </p>
          <p>
            <strong>11-minute mile: 5.45 mph.</strong> Set 5.5 mph for a 10:55 mile or 5.4 mph for
            about 11:07. Either is close enough for a training run.
          </p>
          <p>
            <strong>12-minute mile: 5.0 mph.</strong> Another exact one. A 12-minute mile is a
            comfortable jog for many beginners and a fast walk for some taller walkers — at around
            5 mph the line between the two gaits gets blurry.
          </p>
          <p>
            <strong>15-minute mile: 4.0 mph.</strong> For most people this is a brisk to fast walk
            rather than a run. If you are curious how long a mile takes at walking speeds, our guide
            to
            <a href="/how-long-is-a-mile-on-a-treadmill/" class="text-[#0F62FE] font-medium">how long a mile takes on a treadmill</a>
            works through those times.
          </p>`,
    },
    {
      id: 'kmh-consoles',
      heading: 'If Your Treadmill Shows km/h',
      html: `          <p>
            Some treadmills display kilometres per hour, either because they were built for a
            metric market or because the console has been switched to metric units. Many consoles
            let you choose between miles and kilometres in a settings or maintenance menu; how you
            get there varies by model, so check your owner's manual rather than pressing buttons at
            random.
          </p>
          <p>
            If you want to keep the console in km/h, the conversion is: <strong>km/h = mph ×
            1.609.</strong> So the 10-minute mile becomes 6.0 × 1.609 = 9.66 km/h. Metric consoles
            usually step in 0.1 km/h, which is finer than 0.1 mph, so you can get very close to any
            target:
          </p>
          <ul>
            <li><strong>8-minute mile:</strong> set 12.1 km/h (works out to about 7:59 per mile)</li>
            <li><strong>9-minute mile:</strong> set 10.7 km/h (about 9:01 per mile)</li>
            <li><strong>10-minute mile:</strong> set 9.7 km/h (about 9:57 per mile) or 9.6 km/h
            (about 10:04)</li>
            <li><strong>12-minute mile:</strong> set 8.0 km/h (about 12:04 per mile)</li>
          </ul>
          <p>
            Metric runners think in minutes per kilometre instead. The formula is the same shape:
            <strong>km/h = 60 ÷ minutes per kilometre.</strong> A 6:00 per km pace is exactly
            10.0 km/h, which is about a 9:39 mile; a 5:00 per km pace is 12.0 km/h, about an 8:03
            mile. A 10-minute mile is 6:13 per kilometre.
          </p>
          <p>
            One thing to watch: if the speed is in km/h, the distance readout is almost always in
            kilometres too. A "5.0" on the distance display after a metric session is 5 km (about
            3.1 miles), not 5 miles. That mix-up accounts for a good share of the "my treadmill says
            I ran a 6-minute mile" surprises.
          </p>`,
    },
    {
      id: 'one-percent-incline',
      heading: 'Should You Set 1% Incline?',
      html: `          <p>
            You will often see the advice to set the treadmill to 1% when running, so that a
            treadmill pace matches the same pace outdoors. The usual source is a 1996 study by
            Andrew Jones and Jonathan Doust, "A 1% treadmill grade most accurately reflects the
            energetic cost of outdoor running", published in the <em>Journal of Sports
            Sciences</em> (vol. 14, pp. 321–327).
          </p>
          <p>
            In that study, nine trained male runners ran six-minute bouts at six speeds on a
            treadmill at 0%, 1%, 2% and 3% grade, and on a flat outdoor road, while their oxygen
            use was measured. The authors concluded that a 1% grade best matched the energy cost of
            running outdoors across the speeds they tested. The reason is air resistance: outdoors
            you push air out of the way, and on a treadmill you do not, so flat treadmill running
            at the same speed costs slightly less energy.
          </p>
          <p>
            <strong>The detail that matters for a 10-minute mile:</strong> the speeds tested ran
            from 2.92 to 5.0 metres per second, which is roughly 6.5 to 11.2 mph, or about a 9:11
            mile down to a 5:22 mile. A 10-minute mile at 6.0 mph sits just below the slowest speed
            in the study. Air resistance grows sharply with speed, so at 6 mph its effect is small,
            and the case for adding 1% is weaker than it is at 8 or 9 mph.
          </p>
          <p>
            <strong>Our take:</strong> 1% is a harmless habit and a reasonable default if you race
            outdoors and want treadmill paces that feel comparable. At a 10-minute mile or slower,
            leaving the belt flat is fine too. What matters more is consistency: pick one and stick
            with it, so your sessions compare with each other. Our comparison of
            <a href="/treadmill-vs-running-outside/" class="text-[#0F62FE] font-medium">treadmill and outdoor running</a>
            covers the other differences — wind, terrain and heat — that 1% does not address.
          </p>`,
    },
    {
      id: 'is-10-minute-mile-good',
      heading: 'Is a 10-Minute Mile Good?',
      html: `          <p>
            For a recreational runner, a 10-minute mile is a respectable, steady pace. It is
            faster than a walk for almost everyone, comfortably below the effort of racing for
            many regular runners, and a common goal for people in their first months of running.
            Whether it is "good" for you depends on your age, sex, body weight, running history and
            what the run is for — so the honest answer is a set of reference points rather than a
            ranking.
          </p>
          <p>
            <strong>As an easy pace:</strong> plenty of experienced runners do their easy runs
            somewhere around 9:30 to 11:00 per mile. If you can hold 6.0 mph while talking in
            sentences, it is a sensible easy pace for you.
          </p>
          <p>
            <strong>As a goal pace:</strong> for a beginner, running a continuous mile at 10:00 is
            a meaningful milestone. Running a whole 5K at that pace (about 31 minutes) is a bigger
            one, and a 10K at that pace (just over an hour) bigger again. Holding a pace for a mile
            and holding it for an hour are very different tasks.
          </p>
          <p>
            <strong>If 6.0 mph feels hard:</strong> that is normal for many new runners, and there
            is nothing wrong with running 12- or 13-minute miles. The health benefits of running
            come from doing it regularly, not from the number on the console. A slower pace you can
            sustain three times a week beats a fast one you abandon.
          </p>
          <p>
            Comparisons with other people are less useful than comparisons with yourself. Note
            your pace and effort today, and measure progress against that in six weeks. Pace charts
            that claim to rank you by age often rest on thin data; we would rather not repeat
            figures we cannot source.
          </p>`,
    },
    {
      id: 'what-speed-to-run',
      heading: 'What Speed Should You Run on a Treadmill?',
      html: `          <p>
            The right running speed depends on what the session is for, and the most reliable way
            to set it is by effort rather than by a number from a chart. A simple scale:
          </p>
          <ul>
            <li><strong>Easy runs:</strong> you can talk in full sentences. This is where most of
            your running should be, especially as a beginner. For many new runners it lands
            somewhere between 4.5 and 6 mph (13:20 to 10:00 per mile).</li>
            <li><strong>Steady or tempo runs:</strong> comfortably hard, a few words at a time.
            Usually a minute or more per mile quicker than easy pace.</li>
            <li><strong>Intervals:</strong> short repeats at a hard effort you could not hold for
            more than a few minutes, with walking or easy jogging between them.</li>
          </ul>
          <p>
            <strong>To find your easy speed,</strong> warm up with five minutes of walking, then
            start jogging at about 5 mph and raise the speed by 0.2 mph every minute. The last
            speed at which you can still say a couple of sentences comfortably is your easy pace
            for now. Write it down and retest every month or two.
          </p>
          <p>
            Running a 10-minute mile does not mean every run should be at 6.0 mph. A common pattern
            is to do most runs at an easy speed and only one session a week faster. If your easy
            pace is 5.3 mph, a few short intervals at 6.0 mph are a perfectly good way to start
            practising the 10-minute mile.
          </p>
          <p>
            If you are deciding between walking and running, our guide to
            <a href="/what-speed-should-i-walk-on-a-treadmill/" class="text-[#0F62FE] font-medium">what speed to walk on a treadmill</a>
            covers the walking range and where most people switch to a jog.
          </p>`,
    },
    {
      id: 'build-up',
      heading: 'How to Build Up to a 10-Minute Mile',
      html: `          <p>
            If 6.0 mph is currently beyond you, the route there is gradual and fairly predictable.
            The main idea is to change one thing at a time and give your legs time to catch up with
            your lungs.
          </p>
          <p>
            <strong>1. Run continuously first, then speed up.</strong> Being able to jog for 20 to
            30 minutes without stopping, at whatever speed that takes, is the foundation. Walk-run
            intervals are the usual way in: our guide on
            <a href="/how-to-start-running-on-a-treadmill/" class="text-[#0F62FE] font-medium">how to start running on a treadmill</a>
            sets out a first few weeks, and the
            <a href="/couch-to-5k-treadmill/" class="text-[#0F62FE] font-medium">Couch to 5K treadmill plan</a>
            builds from walking to a continuous 5K.
          </p>
          <p>
            <strong>2. Add short blocks at 6.0 mph.</strong> Once you can jog continuously, put
            three to five one-minute blocks at 6.0 mph into a run, with two minutes easy between
            them. Over the following weeks, lengthen the blocks before adding more of them: one
            minute, then two, then three, then five.
          </p>
          <p>
            <strong>3. Nudge the easy pace up slowly.</strong> Raise your easy speed by 0.1 or
            0.2 mph only when the current speed feels comfortably easy across several runs. Small
            steps add up: going from 5.2 to 6.0 mph is eight steps of 0.1 mph.
          </p>
          <p>
            <strong>4. Test it.</strong> Every few weeks, after a warm-up, run one mile at 6.0 mph.
            If you can finish it in control, you have a 10-minute mile. The next goal is holding it
            for longer.
          </p>
          <p>
            <strong>5. Keep most runs easy.</strong> Bones, tendons and joints adapt to running
            more slowly than the heart and lungs do. Aches that build from run to run are a sign to
            back off for a few days. If pain persists, or you have a medical condition, ask a doctor
            or physical therapist before pushing on.
          </p>`,
    },
    {
      id: 'is-the-speed-right',
      heading: 'Is Your Treadmill\'s 6 mph Really 6 mph?',
      html: `          <p>
            Every number on this page assumes the console's speed reading is true. On most
            treadmills it is close, but not always exact. Belts stretch, rollers wear and sensors
            drift, and a machine that has been running for years can be off by enough to notice.
          </p>
          <p>
            You can check it at home with a stopwatch and a tape measure: measure the belt's full
            length, mark it with a piece of tape, run the belt at a set speed, and count how many
            times the mark passes in a minute. Belt length times revolutions per minute gives the
            real speed. Our guide to
            <a href="/is-my-treadmill-speed-accurate/" class="text-[#0F62FE] font-medium">checking treadmill speed accuracy</a>
            walks through the test step by step, and if your machine is well out, our page on
            <a href="/treadmill-calibration/" class="text-[#0F62FE] font-medium">treadmill calibration</a>
            explains what can be adjusted and what cannot.
          </p>
          <p>
            Do not use a GPS watch to check treadmill speed. Without satellite movement to track,
            the watch estimates pace from your arm swing or a foot pod, and those estimates are
            calibrated for outdoor running. A disagreement between the watch and the treadmill tells
            you little about which one is right.
          </p>
          <p>
            For training, a small, consistent error matters less than you would think. If your
            treadmill reads 6.0 mph but is really running 5.9, every session you do on it is off by
            the same amount, so your progress from week to week is still real. It mostly matters
            when you compare your treadmill pace with a race or an outdoor run.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'What speed on the treadmill is a 10-minute mile?',
      a: `6.0 mph, exactly. That is about 9.7 km/h on a metric console. At 6.0 mph you cover a tenth of a mile every minute, so the distance readout should show 1.00 mile after 10 minutes.`,
    },
    {
      q: 'What speed on a treadmill is a 9-minute mile?',
      a: `6.67 mph. Most consoles adjust in 0.1 mph steps, so set 6.7 mph, which gives an 8:57 mile. 6.6 mph gives about a 9:05 mile. On a km/h console, 10.7 km/h is very close to a 9:00 mile.`,
    },
    {
      q: 'What speed on a treadmill is an 8-minute mile?',
      a: `7.5 mph, which is about 12.1 km/h. Because 8 divides evenly into 60, any treadmill can hit an 8-minute mile exactly. Holding 7.5 mph gives a 5K of about 24:51 and a 10K of about 49:43.`,
    },
    {
      q: 'What speed should I run on a treadmill?',
      a: `Set it by effort. Easy runs, which should be most of your running, are at a speed where you can talk in full sentences; for many beginners that is 4.5 to 6 mph. Harder sessions go faster for shorter periods. Find your easy speed by raising the belt 0.2 mph a minute until talking starts to get difficult.`,
    },
    {
      q: 'Is a 10-minute mile good for a beginner?',
      a: `Yes. Running a continuous mile at 10:00 is a solid milestone for a new runner, and many experienced runners use a similar pace for easy runs. If 6.0 mph feels hard, run slower: 12- or 13-minute miles are completely normal while you build up.`,
    },
    {
      q: 'Should I put the treadmill on 1% incline for a 10-minute mile?',
      a: `It is optional. The 1% advice comes from a 1996 study by Jones and Doust in the Journal of Sports Sciences, which tested speeds of roughly 6.5 mph and up. At 6.0 mph air resistance is small, so a flat belt is fine; 1% is a harmless habit if you want treadmill paces to feel closer to outdoor ones.`,
    },
    {
      q: 'How long does a 5K take at a 10-minute mile pace?',
      a: `About 31 minutes 4 seconds, since a 5K is 3.107 miles. A 10K at the same pace takes about 1 hour 2 minutes. These are arithmetic totals for holding 6.0 mph the whole way.`,
    },
  ],
  mistakesHeading: 'Common Mistakes Setting a Treadmill Pace',
  mistakesIntro:
    'Most pace mistakes on a treadmill are arithmetic or units, not fitness.',
  mistakes: [
    {
      title: 'Treating 9:30 as 9.3 minutes',
      body: 'Seconds are sixtieths of a minute, not hundredths. A 9:30 mile is 9.5 minutes, which is 6.32 mph, not the 6.45 mph you get from dividing 60 by 9.3. Convert the seconds by dividing by 60 before you work out the speed.',
    },
    {
      title: 'Reading km/h as mph',
      body: 'A metric console set to 10 is running at 10 km/h, about 6.2 mph, not 10 mph. The distance will be in kilometres too. If your pace looks impossibly fast or slow, check the units in the console settings or the manual before anything else.',
    },
    {
      title: 'Running every session at goal pace',
      body: 'If 6.0 mph is your target, running every session at 6.0 mph is the slow way to get there and the fast way to get sore. Keep most runs easy and put the goal pace into short blocks once or twice a week, lengthening them over time.',
    },
    {
      title: 'Trusting a GPS watch over the belt',
      body: 'Indoors, a watch estimates pace from arm swing or a foot pod, not satellites, so it often disagrees with the treadmill. If you want to know the true speed, check the belt with a stopwatch and tape measure instead.',
    },
  ],
  relatedHeading: 'Related Training Guides',
  related: [
    {
      kicker: 'Reference',
      title: 'Treadmill Pace & Speed Chart',
      blurb: 'Every speed from walking to sprinting, in mph, pace and km/h, plus incline equivalents.',
      url: '/treadmill-pace-and-speed-chart/',
    },
    {
      kicker: 'Walking',
      title: 'What Speed Should I Walk On?',
      blurb: 'Easy, brisk and fast walking speeds, and how to find yours.',
      url: '/what-speed-should-i-walk-on-a-treadmill/',
    },
    {
      kicker: 'Reference',
      title: 'How Long Is a Mile on a Treadmill?',
      blurb: 'Mile times at walking and running speeds, and why the readout can differ.',
      url: '/how-long-is-a-mile-on-a-treadmill/',
    },
    {
      kicker: 'Beginners',
      title: 'How to Start Running on a Treadmill',
      blurb: 'A first few weeks of walk-run sessions and the habits that prevent injury.',
      url: '/how-to-start-running-on-a-treadmill/',
    },
    {
      kicker: 'Accuracy',
      title: 'Is My Treadmill Speed Accurate?',
      blurb: 'Check the real belt speed at home with a stopwatch and a tape measure.',
      url: '/is-my-treadmill-speed-accurate/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">A 10-minute mile is 6.0 mph on a treadmill</strong>, or about
            9.7 km/h. An 8-minute mile is 7.5 mph, a 9-minute mile is 6.67 mph (set 6.7), and a
            12-minute mile is 5.0 mph. For any other pace, divide 60 by the minutes per mile, after
            converting the seconds to a decimal.`,
    `Set most of your runs by effort rather than by the chart, add 1% incline if you want
            treadmill paces to feel closer to outdoor ones, and build toward 6.0 mph in short
            blocks. For the full range of speeds, see the
            <a href="/treadmill-pace-and-speed-chart/" class="text-[#5AA9FF] font-bold no-underline">treadmill pace and speed chart</a>.`,
  ],
};

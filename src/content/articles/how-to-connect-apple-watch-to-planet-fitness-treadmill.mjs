const th = 'text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4';
const td = 'border-b border-gray-100 py-2 pr-4 text-gray-700';

export default {
  slug: 'how-to-connect-apple-watch-to-planet-fitness-treadmill',
  title: 'How to Connect Apple Watch to a Planet Fitness Treadmill',
  description:
    '4 steps: find the "Connects to Apple Watch" logo, turn on Detect Gym Equipment, hold the watch to the reader, press Start. No logo? Record an Indoor Run.',
  crumbLabel: 'Apple Watch at Planet Fitness',
  kicker: 'How-To',
  breadcrumb: { name: 'Buying Guides', url: '/guides/' },
  updated: 'November 2026',
  updatedLong: 'November 21, 2026',
  published: '2026-11-21',
  socialProof: '1.1k',
  h1: ['How to Connect Apple Watch', 'to a Planet Fitness Treadmill'],
  standfirst:
    'If the treadmill console carries a "Connects to Apple Watch" logo, turn on Detect Gym Equipment in your watch\'s Workout settings, hold the watch face within a few centimeters of the reader until it taps and beeps, then press Start. If there is no logo, that machine cannot pair, so start an Indoor Run or Indoor Walk on the watch instead.',
  ctas: [
    { label: 'Step by Step', href: '#step-by-step' },
    { label: 'Tap Not Working?', href: '#troubleshooting' },
  ],
  tags: ['apple watch planet fitness', 'planet fitness treadmill', 'apple gymkit', 'detect gym equipment', 'indoor run apple watch'],
  stickyCta: { text: 'Connect in 4 Steps', link: '#step-by-step' },
  lead: `Planet Fitness is the gym many Apple Watch owners walk into first, and its treadmills are
          where the question comes up most: can the watch talk to the machine, or do you just start a
          workout and hope the distance comes out right? The answer depends on the treadmill in front
          of you, not on the gym chain, and this page shows how to tell in a few seconds and what to
          do either way.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'The Short Answer',
      html: `          <p>
            <strong>You can connect an Apple Watch to a Planet Fitness treadmill only if that particular
            treadmill's console supports Apple GymKit, which it shows with a "Connects to Apple Watch"
            logo near a contactless reader.</strong> Support varies from club to club and even from one
            row of treadmills to the next, because consoles differ by model and age.
          </p>
          <ul>
            <li><strong>Check the console</strong> for the "Connects to Apple Watch" logo before you
            step on. No logo means no pairing on that machine.</li>
            <li><strong>Turn on Detect Gym Equipment</strong>: on the watch, open Settings, tap
            Workout, and switch it on.</li>
            <li><strong>Hold the watch within a few centimeters of the reader</strong>, display facing
            the console, until you feel a tap and hear a beep.</li>
            <li><strong>Press Start on the treadmill</strong> and run as normal; press Stop on the
            treadmill to end, and the watch saves the session with the treadmill's distance.</li>
            <li><strong>No logo?</strong> Start an Indoor Run or Indoor Walk in the Workout app and
            note the console's distance at the end.</li>
          </ul>
          <p>
            Those steps come from Apple's own guide to using gym equipment with Apple Watch (checked
            November 2026). For the general picture of GymKit, why watch and treadmill distances
            disagree, and getting treadmill runs onto Strava, see our main guide to
            <a href="/how-to-connect-apple-watch-to-treadmill/" class="text-[#0F62FE] font-medium">connecting an Apple Watch to a treadmill</a>.
            This page sticks to what is different at Planet Fitness: which machines you are likely to
            meet, what the Planet Fitness app does and does not do with your watch, and how to fix a
            tap that will not connect.
          </p>`,
    },
    {
      id: 'which-treadmills',
      heading: 'What Treadmills Does Planet Fitness Use?',
      navLabel: 'Which Treadmills PF Uses',
      html: `          <p>
            There is no single answer, and that is the root of most confusion about Apple Watch at
            Planet Fitness.
          </p>
          <p>
            Planet Fitness describes the equipment in its clubs as "Planet Fitness-branded" cardio
            and strength equipment. Its annual reports say franchisees are required to buy their
            fitness equipment from the company, that the company sources it from third-party
            manufacturers, and that franchisees replace it every five to nine years depending on club
            volume (checked November 2026). The reports we read do not name the manufacturers. Because
            the equipment carries the club's branding, the maker's name is often small or absent on
            the machine, and because clubs refresh on their own schedules, two clubs a few miles apart
            can have different generations of treadmill.
          </p>
          <p>
            What can be checked is the equipment makers' own documentation. <a href="/life-fitness/" class="text-[#0F62FE] font-medium" data-autolink>Life Fitness</a>'s support
            site has an article comparing two consoles it supplies for Planet Fitness, the "Planet
            Fitness C-Console" and the newer "SL-Console" on its Integrity treadmills, and lists
            "Apple Watch Connectivity via Apple GymKit" among the SL-Console's new features, alongside
            Bluetooth for audio and heart rate and quick speed keys for 3, 5 and 7 mph (checked
            November 2026). Members also report Matrix treadmills in Planet Fitness clubs, and Matrix
            lists "Connects to Apple Watch" as standard on some of its consoles and optional or absent
            on others. Websites that name one brand as "the" Planet Fitness treadmill disagree with
            each other, so we are not repeating any of them.
          </p>
          <p>
            The practical upshot: the gym's name tells you little. The console in front of you tells
            you everything. If you want the longer story of who makes <a href="/commercial-treadmills/" class="text-[#0F62FE] font-medium" data-autolink>commercial treadmills</a> and how
            to read the badge on one, our guide to
            <a href="/what-treadmills-do-gyms-use/" class="text-[#0F62FE] font-medium">what treadmills gyms use</a>
            covers the makers and their owners.
          </p>`,
    },
    {
      id: 'gymkit-support',
      heading: 'Do Planet Fitness Treadmills Support Apple GymKit?',
      navLabel: 'Which Consoles Support GymKit',
      html: `          <p>
            <strong>Some do and some do not.</strong> GymKit is a hardware feature: the console needs
            a contactless (NFC) reader and the software to go with it. Life Fitness's support pages
            put it bluntly for one of its consoles: if the GymKit version is not fitted, "there is no
            hardware or software on-board to allow connectivity" (checked November 2026). No setting on
            your watch can change that.
          </p>
          <p>
            In 2023, 9to5Mac reported readers seeing their Planet Fitness clubs upgrade to
            GymKit-compatible Life Fitness cardio equipment, and noted that Planet Fitness itself had
            not announced a chain-wide GymKit plan. We could not find a Planet Fitness statement since
            that says every club has GymKit treadmills, and given the five-to-nine-year replacement
            cycle, it would be surprising if every club did. The table below sums up what the makers
            say about the consoles you are most likely to see.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Console</th>
                <th class="${th}">Apple Watch (GymKit)</th>
                <th class="${th}">Source (checked November 2026)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">Life Fitness SL-Console (Planet Fitness version)</td><td class="${td}">Yes, listed as a feature</td><td class="${td}">Life Fitness support: Planet Fitness C vs SL console comparison</td></tr>
              <tr><td class="${td}">Life Fitness C-Console (Planet Fitness version)</td><td class="${td}">Not listed; GymKit is named as an SL-Console addition</td><td class="${td}">Same Life Fitness comparison</td></tr>
              <tr><td class="${td}">Matrix Touch XL and Touch consoles</td><td class="${td}">Yes</td><td class="${td}">Matrix console comparison page</td></tr>
              <tr><td class="${td}">Matrix Premium LED console</td><td class="${td}">Optional, depends on how it was ordered</td><td class="${td}">Matrix console comparison page</td></tr>
              <tr><td class="${td}">Matrix LED console</td><td class="${td}">No</td><td class="${td}">Matrix console comparison page</td></tr>
              <tr><td class="${td}">Any console without the logo</td><td class="${td}">Treat as no</td><td class="${td}">Apple: look for "Connects to Apple Watch"</td></tr>
            </tbody>
          </table></div>
          <p>
            Two points make the table less tidy than it looks. First, an "optional" feature means two
            identical-looking consoles can differ, so the logo, not the model name, is the test.
            Second, the table covers the makers we could check; a club may run older or different
            equipment. Apple's guidance applies to all of them: look for "Connects to Apple Watch" or
            "Connect to Apple Watch" on the machine.
          </p>
          <p>
            Where is the logo? Usually close to a small printed tap symbol or the letters NFC, often
            near the bottom or side of the display. Life Fitness tells owners of one console family to
            look in the lower right corner. If you cannot find it after a quick look, ask the front
            desk; staff generally know which rows have it.
          </p>`,
    },
    {
      id: 'step-by-step',
      heading: 'How to Connect Your Apple Watch, Step by Step',
      navLabel: 'Step by Step',
      html: `          <p>
            These steps follow Apple's guide, "Use gym equipment with Apple Watch" (checked November
            2026). They take less time to do than to read.
          </p>
          <ol>
            <li><strong>Pick a treadmill with the logo.</strong> Confirm "Connects to Apple Watch" is
            printed on the console. If the machine is still showing someone else's finished workout,
            let it return to its start screen.</li>
            <li><strong>Check the watch setting once.</strong> On the watch, open the Settings app, tap
            Workout, and make sure Detect Gym Equipment is on. You only need to do this the first time;
            it stays on.</li>
            <li><strong>Tap.</strong> With the watch display facing the console, hold it within a few
            centimeters of the contactless reader. A gentle tap on your wrist and a beep confirm the
            pairing, and the console usually shows a connection screen.</li>
            <li><strong>Start on the treadmill.</strong> Press Start on the console. The watch begins
            the workout with it. Use the treadmill's own buttons for speed and incline as normal.</li>
            <li><strong>Stop on the treadmill.</strong> Apple's instruction is to press Stop on the
            equipment to end the workout. The watch ends too and saves the session.</li>
          </ol>
          <p>
            If you would rather not leave Detect Gym Equipment switched on all the time, Apple
            describes a second route: open the Workout app on the watch first, then hold the watch
            near the reader. Life Fitness's support team recommends the same thing as a fallback when
            the automatic tap does not respond.
          </p>
          <p>
            You do not need to choose Indoor Run on the watch when you pair. The treadmill tells the
            watch what kind of machine it is. If you have already started an Indoor Run by habit, end
            or discard it before tapping, or you may end up with two workouts covering the same
            session.
          </p>`,
    },
    {
      id: 'during-and-after',
      heading: 'What the Watch and the Treadmill Share',
      navLabel: 'What Gets Shared',
      html: `          <p>
            Once paired, the two devices split the job according to what each measures best. Matrix
            describes it as a two-way sync: the console shows your heart rate and calories from the
            watch, and the machine sends distance, incline and speed back to the watch (checked
            November 2026). Life Fitness describes the same split on its consoles.
          </p>
          <p>
            The practical benefit is the distance. Without GymKit the watch estimates treadmill
            distance from arm motion, and that estimate is the most common complaint about tracking
            treadmill runs. With GymKit, the saved workout carries the treadmill's belt distance
            instead, so the numbers in your Fitness app, in Apple Health and in any app that reads from
            Health match what the console showed.
          </p>
          <p>
            Heart rate on the console is the other gain. Many gym treadmills offer <a href="/treadmill-heart-rate-not-working/" class="text-[#0F62FE] font-medium" data-autolink>pulse grips</a> on the
            handrails, which only read while you hold on. With the watch paired, the console shows
            a continuous figure from your wrist, which is handy if you train to heart-rate zones.
          </p>
          <p>
            The treadmill's distance is not perfect either; commercial treadmills are calibrated on a
            schedule, and a machine can drift between services. If you want to sanity-check the belt,
            our guide on whether
            <a href="/is-my-treadmill-speed-accurate/" class="text-[#0F62FE] font-medium">treadmill speed is accurate</a>
            explains how. But for most people, matching the console is exactly what they want.
          </p>`,
    },
    {
      id: 'pf-app',
      heading: 'Does the Planet Fitness App Work With Apple Watch?',
      navLabel: 'The Planet Fitness App',
      html: `          <p>
            <strong>Not as a watch app.</strong> The Planet Fitness app's App Store listing shows it
            as an iPhone app ("Only for iPhone"), with no Apple Watch app listed (checked November
            2026). The pairing with the treadmill is done by Apple's GymKit, not by the Planet Fitness
            app, so you do not need the app open, or installed, to tap your watch on a compatible
            treadmill.
          </p>
          <p>
            What the app does offer, per the same listing, is a digital Club Pass for checking in at
            your home club, an <a href="/best-fitness-trackers/" class="text-[#0F62FE] font-medium" data-autolink>Activity Tracker</a> for logging workouts, and a connection to Apple Health
            ("Connect your PF App to Apple Health / Health Connect to sync your activity"). That
            Health connection is the bridge between the two worlds: a GymKit treadmill session saved by
            your watch lands in Apple Health, and apps you have allowed to read Health data can pick it
            up from there.
          </p>
          <p>
            Two practical notes. The Club Pass lives in the phone app, so bring your phone for
            check-in rather than relying on the watch; we could not find a Planet Fitness membership
            card for Apple Wallet or the watch. And if you log the same treadmill session by hand in
            the app's tracker as well as with the watch, you may count it twice in Health, so pick one
            record.
          </p>
          <p>
            App features change with updates, so if a newer version adds a watch app or a direct
            equipment link, the listing in the App Store is where it will show first.
          </p>`,
    },
    {
      id: 'no-gymkit',
      heading: 'No Logo? Record an Indoor Run or Walk Instead',
      navLabel: 'No GymKit on the Machine',
      html: `          <p>
            If your club's treadmills do not have the logo, or the GymKit rows are taken, you lose
            very little. The watch can record the session on its own; it simply estimates the distance
            instead of being told it.
          </p>
          <ol>
            <li><strong>Start the watch workout as you start the belt.</strong> Open the Workout app
            and choose Indoor Run or Indoor Walk to match what you are doing. Apple's own advice is to
            choose Indoor Run when you are running on a treadmill.</li>
            <li><strong>Let your arms move.</strong> Indoors, the watch measures with its
            accelerometer, which relies on your arm swing. <a href="/should-you-hold-the-handrails-on-a-treadmill/" class="text-[#0F62FE] font-medium">Holding the handrails</a>
            or resting a hand on the console can make the distance estimate far too low.</li>
            <li><strong>Note the console's numbers before you step off.</strong> Planet Fitness
            treadmills reset between members, so photograph or remember the distance and time on the
            console as you finish.</li>
            <li><strong>End both together.</strong> Stop the watch workout as the belt stops so the two
            totals cover the same session.</li>
            <li><strong>Correct the distance where you can.</strong> Depending on your watchOS version,
            you may be offered a chance to adjust the distance of an indoor run or walk at the end. If
            not, the workout keeps the watch's estimate; some third-party apps can edit it afterwards,
            and Strava lets you correct a treadmill activity's distance after upload.</li>
          </ol>
          <p>
            <strong>Calibrate outdoors to improve indoor estimates.</strong> Apple's calibration guide
            says to make sure Location Services and Motion Calibration &amp; Distance are on in your
            iPhone's privacy settings, then do an Outdoor Walk or Outdoor Run for about 20 minutes at
            your normal pace on flat, open ground with good GPS reception, and repeat at each speed you
            usually use (checked November 2026). The watch learns your stride length, and that is what
            it falls back on when you are on a treadmill.
          </p>
          <p>
            If you are comparing the watch with the console, remember the console displays speed in
            miles per hour while the watch shows pace per mile. Our
            <a href="/treadmill-pace-and-speed-chart/" class="text-[#0F62FE] font-medium">treadmill pace and speed chart</a>
            converts between the two.
          </p>`,
    },
    {
      id: 'troubleshooting',
      heading: 'When the Tap Will Not Connect',
      navLabel: 'Troubleshooting the Tap',
      html: `          <p>
            Most failed taps come down to a handful of causes. Work through them in order; the first
            two fix most problems.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">What happens</th>
                <th class="${th}">Likely cause</th>
                <th class="${th}">What to try</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">Nothing at all, on any machine</td><td class="${td}">Detect Gym Equipment off, or "asleep" after a long gap</td><td class="${td}">Settings &gt; Workout on the watch: switch Detect Gym Equipment off, then on</td></tr>
              <tr><td class="${td}">Nothing, and the watch battery is low</td><td class="${td}">Low Power Mode on</td><td class="${td}">Turn Low Power Mode off, then tap again</td></tr>
              <tr><td class="${td}">Nothing on one machine, fine on another</td><td class="${td}">That console has no GymKit, or a fault</td><td class="${td}">Check for the logo; move to another treadmill and tell staff</td></tr>
              <tr><td class="${td}">Worked before a watchOS update, not after</td><td class="${td}">Reported widely after updates</td><td class="${td}">Toggle Detect Gym Equipment; update again when a fix arrives; use Indoor Run meanwhile</td></tr>
              <tr><td class="${td}">Treadmill mid-workout or showing a summary</td><td class="${td}">Console not in its ready state</td><td class="${td}">Let it return to the start screen, then tap</td></tr>
              <tr><td class="${td}">Automatic tap never responds</td><td class="${td}">Detection not triggering</td><td class="${td}">Open the Workout app first, then hold the watch near the reader</td></tr>
            </tbody>
          </table></div>
          <p>
            <strong>Toggle Detect Gym Equipment.</strong> Life Fitness's support article on Apple
            Watches that stop connecting (updated October 2026) says the most likely cause is that the
            watch's gym-equipment connection has gone into what it calls a sleep mode after a long
            period of not being used, even with Detect Gym Equipment switched on. Its fix is to turn the
            setting off and back on, either on the watch (Settings, Workout) or in the Apple Watch app
            on your iPhone under My Watch. The same article notes many users reporting the problem with
            equipment from several brands after updating to watchOS 26, sometimes returning within a
            day (checked November 2026).
          </p>
          <p>
            <strong>Check Bluetooth and Low Power Mode.</strong> The same Life Fitness article says to
            make sure the watch's Bluetooth is on and that it is not in Low Power Mode.
          </p>
          <p>
            <strong>Hold it properly.</strong> Apple's instruction is display facing the reader,
            within a few centimeters. A watch held at an angle or several inches away may not register.
            Wait a second or two for the tap and beep before pulling away.
          </p>
          <p>
            <strong>Try the manual route.</strong> Open the Workout app on the watch, then hold it near
            the reader. Both Apple and Life Fitness describe this as an alternative to automatic
            detection.
          </p>
          <p>
            <strong>Report the machine.</strong> If one treadmill never connects while its neighbours
            do, the reader or its settings may need attention, which only the club can arrange. Mention
            it at the desk rather than assuming your watch is at fault. If the problem follows you to
            every machine and every gym, an Apple Store or Apple Support is the next stop.
          </p>`,
    },
    {
      id: 'heart-rate',
      heading: 'Heart Rate on the Console Without GymKit',
      navLabel: 'Heart Rate Without GymKit',
      html: `          <p>
            If your watch will not pair, it will still record your heart rate on its own workout, but
            the console will not see it. Out of the box, the Apple Watch does not generally act as a
            standard Bluetooth heart-rate sensor that any console can pick up.
          </p>
          <p>
            Some newer consoles accept a Bluetooth heart-rate strap instead. Life Fitness lists
            "Bluetooth Connectivity for audio and heart rate connections" as a feature of the
            SL-Console it supplies for Planet Fitness (checked November 2026); older consoles may only
            have the handrail grips. A chest strap is also the more accurate choice for intervals,
            where wrist sensors can lag behind fast changes. Our guide to
            <a href="/chest-strap-vs-wrist-heart-rate/" class="text-[#0F62FE] font-medium">chest strap vs wrist heart rate</a>
            explains the trade-off, and the
            <a href="/treadmill-heart-rate-zones/" class="text-[#0F62FE] font-medium">heart rate zones guide</a>
            covers what to do with the numbers.
          </p>
          <p>
            Whichever sensor you use, the console's calorie figure is an estimate. With a paired
            watch or strap it has your real heart rate to work from, which helps, but it is still not
            a lab measurement.
          </p>`,
    },
    {
      id: 'at-home',
      heading: 'Want the Same Tap-to-Pair at Home?',
      navLabel: 'GymKit at Home',
      html: `          <p>
            GymKit has mostly lived on commercial equipment of the kind found in gyms. A small number
            of home treadmills now support it, but most home machines, including many from the largest
            consumer brands, use their own apps instead. Bluetooth on a home console does not mean
            Apple Watch pairing; many consoles use Bluetooth only for their own app, audio or a chest
            strap.
          </p>
          <p>
            If watch integration is on your list, our roundup of the
            <a href="/best-treadmills-for-apple-watch/" class="text-[#0F62FE] font-medium">best treadmills for Apple Watch</a>
            covers the home machines that support it and how to confirm it for an exact model. If you
            are weighing a home treadmill against keeping your membership, the honest answer is that
            the Indoor Run method works on any treadmill, so GymKit should be a pleasant extra rather
            than a deciding feature. Motor, deck, <a href="/treadmill-belt-size-guide/" class="text-[#0F62FE] font-medium" data-autolink>belt size</a> and build quality matter more.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'How do I connect my Apple Watch to a Planet Fitness treadmill?',
      a: `Find a treadmill whose console shows "Connects to Apple Watch". On the watch, go to Settings, then Workout, and turn on Detect Gym Equipment. Hold the watch display within a few centimeters of the console's reader until it taps and beeps, then press Start on the treadmill, and press Stop on the treadmill to end.`,
    },
    {
      q: 'Do all Planet Fitness treadmills have Apple GymKit?',
      a: `No. GymKit depends on the console, and Planet Fitness clubs replace equipment on their own five-to-nine-year cycles, so support varies by club and by machine. Life Fitness names GymKit as one of the additions on the SL-Console it supplies for Planet Fitness, compared with the older C-Console. The logo on the console is the reliable test.`,
    },
    {
      q: 'Why won\'t my Apple Watch connect to the treadmill at Planet Fitness?',
      a: `First check the console has the "Connects to Apple Watch" logo. Then switch Detect Gym Equipment off and on in the watch's Workout settings, make sure Low Power Mode is off and Bluetooth is on, and hold the watch display close to the reader. If it still fails, open the Workout app first and tap again, or try another machine and tell staff.`,
    },
    {
      q: 'Does the Planet Fitness app work on Apple Watch?',
      a: `Its App Store listing shows it as an iPhone-only app, with no Apple Watch app (checked November 2026). It can sync your activity with Apple Health, and its digital Club Pass for check-in is on the phone. Pairing your watch with a treadmill is handled by Apple's GymKit, not the Planet Fitness app.`,
    },
    {
      q: 'What brand of treadmill does Planet Fitness use?',
      a: `Planet Fitness sells "Planet Fitness-branded" equipment to its franchisees and says it buys it from third-party manufacturers it does not name in its annual report. Life Fitness's support site documents consoles made for Planet Fitness, and members report Matrix machines too. Clubs differ, so check the badge on the machine.`,
    },
    {
      q: 'How do I track a Planet Fitness treadmill run without GymKit?',
      a: `Start an Indoor Run or Indoor Walk in the watch's Workout app as you start the belt, let your arms swing naturally, and note the console's distance before it resets. Correct the distance afterwards where your watchOS version or Strava allows. Calibrating the watch with about 20 minutes of outdoor walking or running improves its indoor estimates.`,
    },
  ],
  mistakesHeading: 'Common Mistakes With Apple Watch at Planet Fitness',
  mistakesIntro:
    'Each of these turns a ten-second job into a frustrating one, and each has a simple fix.',
  mistakes: [
    {
      title: 'Assuming every machine in the club pairs',
      body: 'GymKit is a console feature, and clubs mix older and newer equipment. Look for the "Connects to Apple Watch" logo before you set up, and if your favourite row lacks it, either move to a row that has it or plan on an Indoor Run.',
    },
    {
      title: 'Starting an Indoor Run and then tapping',
      body: 'A watch workout already running plus a GymKit session can leave you with two overlapping workouts and different distances. If you are going to tap, do it before starting anything on the watch, and let the treadmill start the workout.',
    },
    {
      title: 'Blaming the watch when the setting has gone to sleep',
      body: 'Detect Gym Equipment can stop responding after a long gap or a watchOS update even though it shows as on. Switch it off and on in Settings, then Workout, before concluding the watch or the machine is broken.',
    },
    {
      title: 'Walking off before noting the console numbers',
      body: 'Without GymKit, the console is your only check on the watch\'s distance estimate, and gym treadmills reset quickly for the next member. Glance at, or photograph, the distance and time before you step off.',
    },
  ],
  relatedHeading: 'Related Apple Watch and Gym Guides',
  related: [
    {
      kicker: 'How-To',
      title: 'Connect an Apple Watch to Any Treadmill',
      blurb: 'GymKit, Indoor Run workouts, distance accuracy and Strava.',
      url: '/how-to-connect-apple-watch-to-treadmill/',
    },
    {
      kicker: 'Question',
      title: 'What Treadmills Do Gyms Use?',
      blurb: 'The commercial brands in US gyms and how to read the badge on yours.',
      url: '/what-treadmills-do-gyms-use/',
    },
    {
      kicker: 'Buying Guide',
      title: 'Best Treadmills for Apple Watch',
      blurb: 'Home treadmills that pair with the watch, and how to confirm it.',
      url: '/best-treadmills-for-apple-watch/',
    },
    {
      kicker: 'Heart Rate',
      title: 'Chest Strap vs Wrist Heart Rate',
      blurb: 'When a strap beats the watch, and why it matters for intervals.',
      url: '/chest-strap-vs-wrist-heart-rate/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">Look for the "Connects to Apple Watch" logo first.</strong> If the
            Planet Fitness treadmill has it, turn on Detect Gym Equipment, hold the watch display close
            to the reader until it taps and beeps, and press Start on the machine; the saved workout
            carries the treadmill's distance. Support varies by club and console, so the logo, not the
            gym, is the test.`,
    `No logo means no pairing, but you can still <strong class="text-white">record an Indoor Run or
            Walk</strong>, keep your arms moving and note the console's distance before it resets. If a
            tap stops working, toggling Detect Gym Equipment off and on fixes most cases. For everything
            else about watches and treadmills, see our
            <a href="/how-to-connect-apple-watch-to-treadmill/" class="text-[#5AA9FF] font-bold no-underline">main Apple Watch treadmill guide</a>.`,
  ],
};

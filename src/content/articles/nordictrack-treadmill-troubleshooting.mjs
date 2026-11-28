const th = 'text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4';
const td = 'border-b border-gray-100 py-2 pr-4 text-gray-700';

export default {
  slug: 'nordictrack-treadmill-troubleshooting',
  title: 'NordicTrack Treadmill Troubleshooting: Reset, Belt and iFIT Fixes',
  description:
    "Most NordicTrack faults are 1 of 5 things: the safety key or reset breaker, a frozen iFIT screen, a workout changing speed on purpose, the belt, or the incline.",
  crumbLabel: 'NordicTrack Treadmill Troubleshooting',
  breadcrumb: { name: 'Fault Diagnosis', url: '/problems/' },
  kicker: 'Troubleshooting',
  updated: 'November 2026',
  updatedLong: 'November 28, 2026',
  published: '2026-11-20',
  modified: '2026-11-28',
  socialProof: '1.8k',
  h1: ['NordicTrack Treadmill Troubleshooting:', 'Reset, Belt, Incline and iFIT Problems'],
  standfirst:
    'Most NordicTrack problems come down to a short list: a safety key or reset breaker, an iFIT console that needs a clean restart, a workout that is changing speed and incline on purpose, a belt that needs lubricant or tension, or an incline that has lost its place. Here is the order to check them in, and what to have ready before you call support.',
  ctas: [
    { label: 'Find Your Symptom', href: '#short-answer' },
    { label: 'Speed or Incline Changing on Its Own', href: '#changes-by-itself' },
  ],
  tags: [
    'nordictrack treadmill troubleshooting',
    'nordictrack treadmill not working',
    'nordictrack treadmill problems',
    'nordictrack treadmill speed changing by itself',
    'nordictrack incline not working',
    'nordictrack ifit screen frozen',
  ],
  stickyCta: { text: 'Find Your Symptom', link: '#short-answer' },
  lead: `NordicTrack treadmills are made by iFIT Health and Fitness, which also makes ProForm, and the
          two brands share much of their electronics and most of their troubleshooting. What sets
          NordicTrack apart is the hardware at the top of its range: large iFIT touchscreens, decline
          below zero on the Commercial series, and incline trainers such as the X22i and X24 that run
          from -6% to 40%. Those bring their own symptoms, and owners also run into one
          &ldquo;fault&rdquo; that is really a feature: an iFIT workout changing the speed and incline
          for you. This guide covers all of it, in the order worth checking. Where a step differs by
          model, we say so and point you to the manual rather than guessing at a button sequence.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'NordicTrack Treadmill Not Working? The Short Answer',
      html: `          <p>
            <strong>Start with the safety key, the power switch and the reset breaker on the front of the
            base, then do a clean power cycle: key out, switch off, unplug for a minute, plug back in,
            switch on and let the console boot fully.</strong> That clears most frozen screens and odd
            behaviour. If the problem survives a power cycle, find your symptom below.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Symptom</th>
                <th class="${th}">Most likely cause</th>
                <th class="${th}">First fix</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">Completely dead</td><td class="${td}">Outlet, reset breaker, safety key</td><td class="${td}">Check outlet with a lamp; press the reset button in</td></tr>
              <tr><td class="${td}">Speed or incline changes by itself</td><td class="${td}">An iFIT workout adjusting the machine</td><td class="${td}">Use manual mode, or override with the controls</td></tr>
              <tr><td class="${td}">Touchscreen frozen or stuck updating</td><td class="${td}">Software or Wi-Fi</td><td class="${td}">Clean power cycle; stronger Wi-Fi; let updates finish</td></tr>
              <tr><td class="${td}">Console on, belt will not move</td><td class="${td}">Safety key, drive belt, controller</td><td class="${td}">Reseat key; check the drive belt under the hood</td></tr>
              <tr><td class="${td}">Belt slips or jerks</td><td class="${td}">Dry deck, then loose belt</td><td class="${td}">Lubricate per the manual before tightening</td></tr>
              <tr><td class="${td}">Incline or decline stuck or wrong</td><td class="${td}">Lost calibration, connector</td><td class="${td}">Run the incline calibration for your model</td></tr>
              <tr><td class="${td}">New noise</td><td class="${td}">Dry deck, loose bolts, rollers</td><td class="${td}">Lubricate, tighten frame bolts, time the noise</td></tr>
            </tbody>
          </table></div>
          <p>
            If anything smells hot, a breaker trips as soon as the belt starts, or the belt does not stop
            when you pull the key, stop using the treadmill and call support. For a plain reset, see our
            step-by-step guide to
            <a href="/how-to-reset-nordictrack-treadmill/" class="text-[#0F62FE] font-medium">how to reset a NordicTrack treadmill</a>.
            NordicTrack&rsquo;s sister brand has its own guide too:
            <a href="/proform-treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">ProForm treadmill troubleshooting</a>
            covers many of the same consoles.
          </p>`,
    },
    {
      id: 'safety-key',
      heading: 'Start With the Safety Key and Reset Breaker',
      html: `          <p>
            Two small parts cause a large share of &ldquo;my NordicTrack is broken&rdquo; searches.
          </p>
          <p>
            <strong>The safety key.</strong> The magnetic or clip key on the console has to be fully
            seated. On some consoles a missing key leaves the screen dark; on others the screen works
            but the belt will not start, sometimes with a prompt on the screen. Keys get pulled half out
            by the lanyard, lost, or swapped with another treadmill&rsquo;s key, which may not work.
            Push it firmly home and try again. If it still is not recognised, our guide to a
            <a href="/treadmill-safety-key-not-working/" class="text-[#0F62FE] font-medium">safety key that is not working</a>
            covers the switch behind it.
          </p>
          <p>
            <strong>The reset breaker.</strong> Many NordicTrack treadmills have a small circuit breaker
            or reset button beside the <a href="/how-to-turn-on-a-treadmill/" class="text-[#0F62FE] font-medium" data-autolink>power switch</a> at the front of the base, near where the cord enters
            the frame. When it trips it usually sits slightly proud of its normal position. Unplug, press
            it firmly in until it clicks, plug in and switch on. One trip is not alarming. A breaker that
            trips again and again is telling you the motor is drawing too much current, most often from a
            dry deck or a shared circuit; see our guide to a
            <a href="/treadmill-trips-breaker/" class="text-[#0F62FE] font-medium">treadmill that trips the breaker</a>.
          </p>
          <p>
            <strong>Then the outlet.</strong> Plug a lamp into the same socket. GFCI outlets in basements
            and garages trip silently. NordicTrack, like most treadmill makers, asks for a grounded wall
            outlet rather than an extension cord; the manual for your model gives the circuit
            requirement. If the treadmill is still dark after all of this, our
            <a href="/treadmill-wont-turn-on/" class="text-[#0F62FE] font-medium">treadmill won&rsquo;t turn on</a>
            guide works through the cord, fuse and controller.
          </p>`,
    },
    {
      id: 'changes-by-itself',
      heading: 'Speed or Incline Changing by Itself',
      html: `          <p>
            <strong>On a NordicTrack with an iFIT console, a speed or incline change you did not ask for is
            usually the workout doing it on purpose.</strong> iFIT classes and map routes control the
            treadmill to follow the trainer or the terrain, and newer iFIT features adjust further: NordicTrack&rsquo;s
            product listings describe SmartAdjust as scaling a workout to your history and ActivePulse as
            changing speed and incline to keep your heart rate in a target zone. To the person on the belt, either can
            feel like the machine acting on its own.
          </p>
          <ul>
            <li><strong>Check what is running.</strong> If a class, route or programme is on screen, the
            changes are part of it. Use the speed and incline controls to override; on iFIT consoles a
            manual change generally takes priority, and the workout carries on from your setting.</li>
            <li><strong>Turn off the adaptive features</strong> in the iFIT settings or the workout options
            if you do not want them. The exact menu names change between iFIT versions, so look for
            settings named after SmartAdjust or ActivePulse, or ask iFIT support.</li>
            <li><strong>Use manual mode</strong> for a session where you want full control. Our guide to
            <a href="/can-you-use-nordictrack-without-ifit/" class="text-[#0F62FE] font-medium">using a NordicTrack without iFIT</a>
            explains what manual mode does and does not offer.</li>
          </ul>
          <p>
            <strong>When it is a fault.</strong> If the speed surges or drops with no workout running, in
            manual mode, the cause is mechanical or electrical. The usual suspects are a dirty or loose
            speed sensor on the front roller, a dry deck that makes the belt drag under your foot, or a
            motor controller problem. A belt that speeds up and will not slow down, or does not stop when
            you pull the key, is a safety issue: stop using the treadmill and call support. Our
            <a href="/treadmill-speed-sensor/" class="text-[#0F62FE] font-medium">treadmill speed sensor guide</a>
            covers the sensor checks.
          </p>
          <p>
            The same logic applies to incline. A deck that moves during a route is the route; a deck that
            creeps or hunts with no workout running needs the calibration described below.
          </p>`,
    },
    {
      id: 'ifit-console',
      heading: 'iFIT Touchscreen Problems: Frozen, Stuck Updating, No Wi-Fi',
      html: `          <p>
            NordicTrack&rsquo;s touchscreen consoles are small computers, and most of their problems are
            software and network problems rather than broken hardware.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">A frozen or black screen</h3>
          <p>
            Do a full power cycle, not a tap on the screen: key out, power switch off, unplugged for at
            least a minute, then back on and left to boot completely. A large touchscreen can take a
            minute or more to start. If it freezes at the same point every time, write down what is on the
            screen and contact support; a console that never finishes booting may need a software
            recovery that support walks you through. A screen that freezes only while streaming is more
            often a weak network than a fault.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Stuck on an update</h3>
          <p>
            iFIT consoles download updates, and a stalled one can leave the screen looping or sitting on a
            progress bar. Give it longer than feels reasonable on a good connection. Switching off during
            an update is one of the few ways to cause a real software problem, so only power cycle after
            it has made no progress for a long time. If it fails repeatedly, support can usually push the
            update or recover the console.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Wi-Fi and login</h3>
          <p>
            Check the signal with your phone standing on the deck; treadmills often live in basements and
            garages where Wi-Fi is weak. Move the router, add an extender, forget the network on the
            console and reconnect, and restart the router. If the console connects but will not sign in,
            the issue is the iFIT account or subscription, which is an account question for iFIT rather
            than a treadmill fault. Whether the subscription is worth keeping is a separate question; see
            <a href="/is-ifit-worth-it/" class="text-[#0F62FE] font-medium">is iFIT worth it</a>.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Apps that are not iFIT</h3>
          <p>
            Many owners want Netflix or other apps on the screen. What a NordicTrack console allows depends
            on the model and the iFIT software version; our guide to
            <a href="/can-you-watch-netflix-on-nordictrack/" class="text-[#0F62FE] font-medium">watching Netflix on a NordicTrack</a>
            covers what is allowed and the risks of workarounds, which can affect support. Our <a href="/best-treadmills-with-netflix/" class="text-[#0F62FE] font-medium">treadmills with Netflix</a> roundup compares machines that stream it officially, from about $949.
          </p>`,
    },
    {
      id: 'belt',
      heading: 'Belt Will Not Move, Slips or Jerks',
      html: `          <p>
            <strong>Console on, belt not moving.</strong> Reseat the safety key first. Then, with the
            treadmill unplugged, check that nothing is jammed under the belt and that you can move the belt
            by hand. If the motor spins up when you press start but the belt does not move, the short drive
            belt between the motor and the front roller has slipped off or broken; it sits under the motor
            hood and is a replaceable part. If the motor makes no attempt to run, the controller is not
            powering it: a tripped breaker, a blown fuse on the board, a loose connector or a failed board.
            Scorch marks or a burnt smell mean stop and call support. Our guide to a
            <a href="/treadmill-turns-on-but-belt-wont-move/" class="text-[#0F62FE] font-medium">treadmill that turns on but the belt won&rsquo;t move</a>
            covers each check.
          </p>
          <p>
            <strong>Belt slips, hesitates or jerks.</strong> On a NordicTrack this is almost always
            maintenance. In order:
          </p>
          <ol>
            <li><strong>Lubricate the deck</strong> with the silicone lubricant and amount the manual
            specifies, at the interval it gives. A dry deck makes the belt drag so the motor briefly loses
            to your foot. Always do this before touching tension. See
            <a href="/treadmill-belt-lubrication/" class="text-[#0F62FE] font-medium">treadmill belt lubrication</a>.</li>
            <li><strong>Check tension.</strong> If it still slips under a firm foot plant, tighten the two
            rear roller bolts equally, a quarter turn at a time, testing between turns. Stop when the slip
            stops; an over-tight belt overheats the motor. See
            <a href="/how-to-adjust-treadmill-belt/" class="text-[#0F62FE] font-medium">how to tighten a treadmill belt</a>.</li>
            <li><strong>Check tracking.</strong> A belt drifting to one side is corrected with the rear
            bolts turned individually, with the belt running slowly and nobody on it.</li>
          </ol>
          <p>
            A belt that still slips with the deck lubricated and tension right is worn, or the deck is.
            Our guide to a
            <a href="/treadmill-belt-slipping/" class="text-[#0F62FE] font-medium">treadmill belt slipping</a>
            explains how to tell, and what replacement costs.
          </p>`,
    },
    {
      id: 'incline-decline',
      heading: 'Incline and Decline Problems, Including the X-Series',
      html: `          <p>
            NordicTrack inclines are driven by a motor with a position sensor that tells the console where
            the deck is. Its ranges are wider than most brands&rsquo;, which matters for troubleshooting.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Range (examples)</th>
                <th class="${th}">Models</th>
                <th class="${th}">What to know</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">0% to 12%</td><td class="${td}">Many T Series models</td><td class="${td}">Incline only; zero is the floor</td></tr>
              <tr><td class="${td}">-3% to 12%</td><td class="${td}">Commercial 1250, 1750, 2450</td><td class="${td}">Below-zero decline; calibration includes the low end</td></tr>
              <tr><td class="${td}">-6% to 40%</td><td class="${td}">X22i, X24 incline trainers</td><td class="${td}">Large travel; needs clearance and a longer calibration</td></tr>
            </tbody>
          </table></div>
          <p>
            Ranges are as given in our reviews of each model; check your own model&rsquo;s manual.
          </p>
          <ul>
            <li><strong>Incline will not move at all.</strong> Check the safety key, that nothing is under
            the deck or in the path of the lift mechanism, and, with the machine unplugged, the incline
            motor&rsquo;s connector at the front of the base. A loose connector after a move is common. A
            motor that hums without moving, or is silent when called for, is a motor or controller
            fault.</li>
            <li><strong>Incline reads wrong or will not return to zero.</strong> The console has lost track
            of the deck&rsquo;s position, typically after a power cut mid-change or a move. The fix is
            calibration.</li>
            <li><strong>Decline does not go below zero.</strong> On a Commercial model, confirm decline is
            supported by your model and enabled in the workout, then calibrate; the calibration routine
            sets both ends of the range.</li>
            <li><strong>An X-series trainer stops partway up.</strong> Check overhead and rear clearance,
            and that nothing is under the rear of the deck. A trainer that travels to 40% needs far more
            room around it than a normal treadmill; the manual gives the clearances.</li>
          </ul>
          <p>
            <strong>Calibration.</strong> Most NordicTrack consoles have a routine that drives the incline
            through its full range and back, relearning the end points. It is reached through a settings or
            maintenance menu on touchscreens or a button sequence on simpler consoles, and it differs by
            model, so use the procedure in your manual or on NordicTrack&rsquo;s support site for your exact
            model number. Nobody should be on the deck while it runs. Our guide to a
            <a href="/treadmill-incline-not-working/" class="text-[#0F62FE] font-medium">treadmill incline not working</a>
            covers the motor, sensor and wiring in the general case.
          </p>`,
    },
    {
      id: 'noise',
      heading: 'Noises, Static Shocks and Shaking',
      html: `          <p>
            A new noise on a NordicTrack is usually the same thing as on any treadmill, and the timing of
            the noise tells you where it is.
          </p>
          <ul>
            <li><strong>Squeak with each footstep:</strong> a dry deck, or a frame bolt working loose. Lubricate,
            then tighten the upright and base bolts. See
            <a href="/treadmill-squeaking-noise/" class="text-[#0F62FE] font-medium">treadmill squeaking noise</a>.</li>
            <li><strong>Thump once per belt revolution:</strong> a seam or a damaged spot on the belt, or a
            flat spot on a roller. See
            <a href="/treadmill-thumping-noise/" class="text-[#0F62FE] font-medium">treadmill thumping noise</a>.</li>
            <li><strong>Grinding or a rising whine with speed:</strong> roller bearings or the motor. Stop and
            have it checked.</li>
            <li><strong>Static shocks from the console or rails:</strong> very common in dry winter air on
            carpet. A grounded outlet, an anti-static mat and humidity help; see
            <a href="/treadmill-static-shock/" class="text-[#0F62FE] font-medium">treadmill static shock</a>.</li>
            <li><strong>Shaking or wobble:</strong> an uneven floor or loose levelling feet more often than
            a frame fault. See
            <a href="/treadmill-shaking-or-wobbling/" class="text-[#0F62FE] font-medium">treadmill shaking or wobbling</a>.</li>
          </ul>
          <p>
            Most <a href="/nordictrack/" class="text-[#0F62FE] font-medium" data-autolink>NordicTrack treadmills</a> fold. If the deck will not latch upright or drops too fast, check
            the latch and the gas shock that slows the fold; our guide to
            <a href="/how-to-fold-a-treadmill/" class="text-[#0F62FE] font-medium">how to fold a treadmill</a>
            covers a deck that will not latch. Never stand under or beside a folded deck that is not
            latched.
          </p>`,
    },
    {
      id: 'error-messages',
      heading: 'Error Messages on a NordicTrack Console',
      html: `          <p>
            We do not list NordicTrack error codes and meanings here, on purpose. NordicTrack has made many
            console designs over many years, and the same code does not mean the same thing on all of them.
            A table compiled for one model can send the owner of another to replace a part that was never at
            fault. Look the message up for your model number in the manual or on the support site.
          </p>
          <p>
            What does hold across models is the timing:
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">When the message appears</th>
                <th class="${th}">Part of the machine it usually points to</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">At power-up, before anything moves</td><td class="${td}">Console to controller communication: a cable or the controller</td></tr>
              <tr><td class="${td}">The moment you press start</td><td class="${td}">Safety key, or the controller&rsquo;s self-check</td></tr>
              <tr><td class="${td}">A few seconds after the belt starts</td><td class="${td}">No speed signal: the sensor on the front roller or its magnet</td></tr>
              <tr><td class="${td}">After minutes of normal running</td><td class="${td}">Overheating or overcurrent: dry deck, tight belt, shared circuit</td></tr>
              <tr><td class="${td}">During an incline or decline change</td><td class="${td}">The incline motor, sensor or calibration</td></tr>
            </tbody>
          </table></div>
          <p>
            Clear a message with a proper power cycle first. Many are one-off events, such as a voltage dip
            or a key that lost contact. A message that returns every time is a fault, and the table tells
            you where to look. Our general
            <a href="/treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">treadmill troubleshooting guide</a>
            works through every symptom in order.
          </p>`,
    },
    {
      id: 'support',
      heading: 'When to Call NordicTrack Support and What to Have Ready',
      html: `          <p>
            Call NordicTrack or iFIT support, rather than carrying on yourself, when:
          </p>
          <ul>
            <li>The part involved may be under warranty. Warranty terms differ by model and by part (frame,
            motor, parts, labour), so read your warranty document first.</li>
            <li>The console stays dark with power confirmed at the outlet and the reset breaker in.</li>
            <li>The motor makes no attempt to run with the key in and the drive belt intact.</li>
            <li>There is a burning smell, scorching, or a breaker that trips on start.</li>
            <li>A touchscreen will not boot, or is stuck updating after a long wait and a restart.</li>
            <li>The incline or decline will not calibrate.</li>
            <li>The belt surges, or does not stop when the key is pulled. Stop using the treadmill.</li>
          </ul>
          <p><strong>Have this ready:</strong></p>
          <ul>
            <li>The <strong>model number and serial number</strong> from the sticker on the frame, not the
            name on the console. Model names are reused across years.</li>
            <li><strong>Proof of purchase</strong> with the date.</li>
            <li>The <strong>exact error message</strong> and when it appears.</li>
            <li>A <strong>short phone video</strong> of the fault happening. Support can often diagnose
            directly from it.</li>
            <li>What you have already tried, and your iFIT account email for a touchscreen model.</li>
          </ul>
          <p>
            Out of warranty, support can still sell the right part for your model number, which matters
            for controller boards and incline motors. Whether an older machine is worth repairing is
            arithmetic: part plus technician visit against the treadmill&rsquo;s value. Our
            <a href="/treadmill-repair-guide/" class="text-[#0F62FE] font-medium">treadmill repair guide</a>
            and guide to
            <a href="/how-long-do-treadmills-last/" class="text-[#0F62FE] font-medium">how long treadmills last</a>
            help with that decision.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'Why is my NordicTrack treadmill not working?',
      a: `Most often it is the safety key, a tripped reset breaker beside the power switch on the front of the base, or a console that needs a clean power cycle. Reseat the key, press the reset button in, then switch off, unplug for a minute and restart. If the problem returns, match your symptom to the fixes on this page.`,
    },
    {
      q: 'Why does my NordicTrack change speed and incline by itself?',
      a: `Usually because an iFIT workout is controlling it. Classes and routes adjust the treadmill, and iFIT's SmartAdjust and ActivePulse features can scale effort to your history or heart rate. Override with the controls, switch the features off in the settings, or use manual mode. If it happens in manual mode with nothing running, suspect the speed sensor, a dry deck or the controller.`,
    },
    {
      q: 'How do I reset my NordicTrack treadmill?',
      a: `Remove the safety key, switch off at the power switch on the base, unplug for about a minute, then plug in, switch on and let the console boot fully. If it is completely dead, press in the reset breaker beside the power switch. A factory reset of the touchscreen is a bigger step; follow your model's manual or NordicTrack support for it.`,
    },
    {
      q: 'Why is my NordicTrack iFIT screen frozen?',
      a: `Most frozen screens clear with a full power cycle and a complete boot. A screen stuck on an update usually needs more time on a stronger Wi-Fi signal; avoid switching off mid-update. If it freezes at the same point every time, note what is on screen and contact support, which can recover the console.`,
    },
    {
      q: 'Why is my NordicTrack incline not working?',
      a: `Check the safety key, look for anything under the deck, and with the machine unplugged check the incline motor connector at the front of the base. If the incline moves but reads wrong or will not return to zero, run the incline calibration for your model, with nobody on the deck.`,
    },
    {
      q: 'Why is my NordicTrack belt slipping?',
      a: `Usually a dry deck. Lubricate with the silicone and amount your manual specifies before touching the tension bolts. If it still slips under a firm foot plant, tighten both rear bolts equally a quarter turn at a time, stopping as soon as the slip goes. A belt that slips after both is worn.`,
    },
  ],
  mistakesHeading: 'Common Mistakes Troubleshooting a NordicTrack',
  mistakesIntro: 'Most NordicTrack faults are simple. These four make them take longer or cost more.',
  mistakes: [
    {
      title: 'Treating an iFIT workout as a fault',
      body: 'A class, route or adaptive feature changing speed and incline is the software doing its job. Check what is running before assuming a sensor or controller has failed, and use manual mode when you want full control.',
    },
    {
      title: 'Using an error-code table for another model',
      body: 'NordicTrack consoles do not all use codes the same way. Acting on a generic table can mean replacing a good part. Look up the message for your model number, and note when it appears, which tells you more than the code alone.',
    },
    {
      title: 'Tightening the belt before lubricating',
      body: 'Most slipping is a dry deck. Cranking the tension bolts on a dry deck overloads the motor and wears the rollers. Lubricate first, test, and only then adjust tension a quarter turn at a time.',
    },
    {
      title: 'Switching off during an update',
      body: 'Cutting power while an iFIT console is installing software is one of the few ways to cause a real software fault. Give updates time on a good connection, and power cycle only after a long wait with no progress.',
    },
  ],
  relatedHeading: 'Related Fault Diagnosis Guides',
  related: [
    {
      kicker: 'Fixes',
      title: 'Sole Treadmill Troubleshooting',
      blurb: 'Safety key and front breaker, the 90-hour lube, belt tracking and error codes.',
      url: '/sole-treadmill-troubleshooting/',
    },
    {
      kicker: 'Fixes',
      title: 'Bowflex Treadmill Troubleshooting',
      blurb: 'SAFETY KEY OFF, the no-GFCI outlet rule, belt tension and JRNY fixes.',
      url: '/bowflex-treadmill-troubleshooting/',
    },
    {
      kicker: 'Reset',
      title: 'How to Reset a NordicTrack Treadmill',
      blurb: 'Turning it on in order, the reset breaker, and a safe console reset.',
      url: '/how-to-reset-nordictrack-treadmill/',
    },
    {
      kicker: 'Sister brand',
      title: 'ProForm Treadmill Troubleshooting',
      blurb: 'The same iFIT consoles and controllers, with ProForm-specific fixes.',
      url: '/proform-treadmill-troubleshooting/',
    },
    {
      kicker: 'All brands',
      title: 'Treadmill Troubleshooting by Symptom',
      blurb: 'Every common treadmill fault, diagnosed in the order worth checking.',
      url: '/treadmill-troubleshooting/',
    },
    {
      kicker: 'Belt',
      title: 'Treadmill Turns On but the Belt Won’t Move',
      blurb: 'Safety key, drive belt, controller and motor, checked in order.',
      url: '/treadmill-turns-on-but-belt-wont-move/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">Check the safety key, the reset breaker and the outlet, then do a clean
            power cycle.</strong> Most NordicTrack problems end there. If the speed or incline is changing
            on its own, check whether an iFIT workout is running before suspecting a fault.`,
    `For belt problems, lubricate before you tighten; for incline problems, calibrate for your exact
            model; and for error messages, note when they appear and look them up for your model number.
            Call support for anything that smells hot, trips on start or will not stop. Our
            <a href="/how-to-reset-nordictrack-treadmill/" class="text-[#5AA9FF] font-bold no-underline">NordicTrack reset guide</a>
            and
            <a href="/proform-treadmill-troubleshooting/" class="text-[#5AA9FF] font-bold no-underline">ProForm troubleshooting guide</a>
            cover the shared iFIT consoles in more detail.`,
  ],
};

const th = 'text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4';
const td = 'border-b border-gray-100 py-2 pr-4 text-gray-700';

export default {
  slug: 'walking-pad-not-working',
  title: 'Walking Pad Not Working? Belt, Remote and Power Fixes',
  description:
    'Most walking pad faults are one of 5 things: the safety key or magnet, the remote, a dry or loose belt, overheating, or power. Fixes in order, and when to call support.',
  crumbLabel: 'Walking Pad Not Working',
  breadcrumb: { name: 'Fault Diagnosis', url: '/problems/' },
  kicker: 'Troubleshooting',
  updated: 'November 2026',
  updatedLong: 'November 27, 2026',
  published: '2026-11-22',
  modified: '2026-11-27',
  socialProof: '1.3k',
  h1: ['Walking Pad Not Working?', 'Belt, Remote and Power Fixes'],
  standfirst:
    'A walking pad that will not start, stops on its own, or has a belt that slips is usually not broken. Most faults come down to five things: the safety key or magnet, the remote, the belt, heat, or power. Here is the order to check them, what you can fix at home, and when it is a warranty call.',
  ctas: [
    { label: 'Find Your Symptom', href: '#short-answer' },
    { label: 'Belt Slipping or Off-Centre', href: '#belt' },
  ],
  tags: ['walking pad not working', 'walking pad wont turn on', 'walking pad remote not working', 'walking pad stops', 'walking pad belt slipping', 'walking pad troubleshooting', 'under desk treadmill not working'],
  stickyCta: { text: 'Find Your Symptom', link: '#short-answer' },
  lead: `Walking pads are simpler than full treadmills: a small motor, a short belt, a basic controller and, usually, a
          remote instead of a console. That simplicity means most problems are quick to find. The catch is that brands
          and models differ, so where a step depends on your model (a reset sequence, a remote pairing routine, an error
          message) we point you to the manual rather than guess. Everything here applies to the common under-desk pads
          from brands such as UREVO, WalkingPad, Goplus, MERACH and Superun, and to 2-in-1 folding pads. If your pad is
          new, remember that most problems in the first weeks are warranty or return matters, not repairs.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'Walking Pad Not Working? The Short Answer',
      html: `          <p>
            <strong>Check, in order: the power switch and outlet, the safety key or magnet, the remote&rsquo;s battery and
            pairing, then the belt. Then do a clean restart: switch off, unplug for a minute, plug back in.</strong> That
            clears most pads that will not start or respond. If the belt slips or drifts, lubricate and adjust it as the
            manual says. If the pad stops on its own after a while, suspect heat or overload.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Symptom</th><th class="${th}">Most likely cause</th><th class="${th}">First fix</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Completely dead</td><td class="${td}">Outlet, power switch, cord</td><td class="${td}">Test the outlet with a lamp; check the switch at the pad</td></tr>
              <tr><td class="${td}">Lights on, belt will not start</td><td class="${td}">Safety key/magnet, remote, standby mode</td><td class="${td}">Reseat the key; use the pad&rsquo;s own button</td></tr>
              <tr><td class="${td}">Remote does nothing</td><td class="${td}">Battery, pairing, range</td><td class="${td}">New battery; re-pair per the manual</td></tr>
              <tr><td class="${td}">Belt slips or hesitates</td><td class="${td}">Dry deck, then loose belt</td><td class="${td}">Lubricate per the manual, then tension</td></tr>
              <tr><td class="${td}">Belt drifts to one side</td><td class="${td}">Tracking</td><td class="${td}">Adjust the rear bolts a little at a time</td></tr>
              <tr><td class="${td}">Stops after a while</td><td class="${td}">Heat, overload, auto-stop timer</td><td class="${td}">Let it cool; check weight limit and session length</td></tr>
            </tbody>
          </table></div>
          <p>
            Many walking pads have a short belt and a motor meant for walking pace, so some &ldquo;faults&rdquo; are limits:
            see <a href="/can-you-run-on-a-walking-pad/" class="text-[#0F62FE] font-medium">can you run on a walking pad</a>.
            Our most-read walking pad fix is <a href="/how-to-lubricate-a-walking-pad/" class="text-[#0F62FE] font-medium">how to lubricate a walking pad</a>,
            because a dry belt causes more problems than anything else.
          </p>`,
    },
    {
      id: 'wont-turn-on',
      heading: 'Walking Pad Will Not Turn On',
      html: `          <ol>
            <li><strong>The outlet.</strong> Plug a lamp into the same socket. If it is on a GFCI outlet or a power strip,
            reset or bypass it. Many makers advise plugging a <a href="/best-walking-pads/" class="text-[#0F62FE] font-medium" data-autolink>walking pad</a> straight into the wall rather than an extension
            lead; see <a href="/treadmill-extension-cord/" class="text-[#0F62FE] font-medium">treadmill extension cords</a>.</li>
            <li><strong>The power switch.</strong> Most pads have a rocker switch near the cord at the front or side, separate
            from the start button. It is easy to knock off when moving the pad.</li>
            <li><strong>The cord and inlet.</strong> Unplugged, check the cord for damage and that it is pushed fully into the
            pad if it is detachable.</li>
            <li><strong>Overload protection.</strong> Some pads have a reset button or breaker near the switch; the manual
            shows where. Press it in if it has popped out.</li>
          </ol>
          <p>
            If it is still dead after these four, the fault is inside (fuse, power board or controller), and on a pad
            under warranty that is a call to the brand, not a screwdriver job. Our general
            <a href="/treadmill-wont-turn-on/" class="text-[#0F62FE] font-medium">treadmill won&rsquo;t turn on</a>
            guide covers the same checks in more depth.
          </p>`,
    },
    {
      id: 'wont-start',
      heading: 'Lights On but the Belt Will Not Move',
      html: `          <ul>
            <li><strong>Safety key or magnet.</strong> Many pads have a clip-on safety key or a magnet that must be in place.
            Reseat it firmly. If yours has none, check whether the pad needs a start command from the remote or app rather
            than the button.</li>
            <li><strong>Standby or child lock.</strong> Some pads go into a sleep or lock mode after a period of inactivity.
            The manual gives the wake or unlock step; it is often a long press of the pad&rsquo;s own button.</li>
            <li><strong>Mode setting.</strong> On 2-in-1 pads with a fold-up handle, some models only allow higher speeds
            with the handle raised, and some only start in the mode the handle position allows.</li>
            <li><strong>Something blocking the belt.</strong> Unplug and check underneath and around the rollers for a sock,
            cable or toy. Try to move the belt by hand.</li>
            <li><strong>Motor hums, belt does not move.</strong> A belt so tight the motor cannot turn it, or a drive fault.
            Loosen the belt to the manual&rsquo;s tension; if it still hums, stop and call support.</li>
          </ul>
          <p>
            For full treadmills with the same symptom, see
            <a href="/treadmill-turns-on-but-belt-wont-move/" class="text-[#0F62FE] font-medium">treadmill turns on but the belt won&rsquo;t move</a>.
          </p>`,
    },
    {
      id: 'remote',
      heading: 'Walking Pad Remote Not Working',
      html: `          <p>
            The remote is the most common thing to stop working on a walking pad, and it is rarely the pad&rsquo;s fault.
          </p>
          <ol>
            <li><strong>Replace the battery,</strong> even if it is new; some remotes ship with a pull tab still in, or a
            weak battery.</li>
            <li><strong>Re-pair it.</strong> Most pad remotes are paired to the pad, and pairing is lost after a power cut or
            battery change. The manual gives the sequence; it usually involves holding a button on the remote within a few
            seconds of switching the pad on.</li>
            <li><strong>Check the range and line of sight.</strong> Some remotes use infrared, which needs a clear line to the
            sensor, often at the front of the pad.</li>
            <li><strong>Use the app or the pad&rsquo;s button</strong> to confirm the pad itself works. If it does, the
            remote is the problem, and a replacement is usually available from the brand.</li>
          </ol>`,
    },
    {
      id: 'belt',
      heading: 'Belt Slipping, Hesitating or Off-Centre',
      html: `          <p>
            Belt problems on a walking pad are almost always maintenance, and the order matters.
          </p>
          <ol>
            <li><strong>Lubricate first.</strong> A dry deck makes the belt drag, so it hesitates with each step. Use the
            lubricant and amount your manual specifies, at the interval it gives; some pads are sold as needing little or
            none, so check before adding any. Our
            <a href="/how-to-lubricate-a-walking-pad/" class="text-[#0F62FE] font-medium">walking pad lubrication guide</a>
            walks through it.</li>
            <li><strong>Then tension.</strong> If it still slips under your foot, tighten the two rear bolts equally, a quarter
            turn at a time, testing between turns. Stop when the slip stops; an over-tight belt overloads a small motor.</li>
            <li><strong>Then tracking.</strong> If the belt drifts to one side, run it slowly with nobody on it and turn the
            bolt on the side it drifts towards a quarter turn, then wait and watch. Some pads advertise auto-centring belts,
            but they still drift if the pad is not level.</li>
          </ol>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Belt does this</th><th class="${th}">Adjust</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Slips under a firm step</td><td class="${td}">Lubricate, then both bolts tighter, equally</td></tr>
              <tr><td class="${td}">Drifts left</td><td class="${td}">Left bolt, a quarter turn clockwise (check your manual)</td></tr>
              <tr><td class="${td}">Drifts right</td><td class="${td}">Right bolt, a quarter turn clockwise (check your manual)</td></tr>
              <tr><td class="${td}">Rubs the side</td><td class="${td}">Stop; re-centre before using again</td></tr>
            </tbody>
          </table></div>
          <p>
            Direction conventions vary by brand, so confirm in the manual. Our
            <a href="/how-to-center-treadmill-belt/" class="text-[#0F62FE] font-medium">how to center a treadmill belt</a>
            and <a href="/treadmill-belt-slipping/" class="text-[#0F62FE] font-medium">treadmill belt slipping</a>
            guides go into more detail.
          </p>`,
    },
    {
      id: 'stops',
      heading: 'Walking Pad Stops by Itself',
      html: `          <ul>
            <li><strong>An auto-stop or session timer.</strong> Many pads stop after a set time or distance, or if they sense
            no one on the belt. Check the manual for the default and whether it can be changed.</li>
            <li><strong>Heat.</strong> Walking pads are built for walking pace and long desk sessions, but a small motor
            working against a dry belt or a heavy user can overheat and cut out. Let it cool, lubricate, and check you are
            under the weight limit. Our
            <a href="/treadmill-overheating/" class="text-[#0F62FE] font-medium">treadmill overheating</a>
            guide explains the signs.</li>
            <li><strong>Overload.</strong> Running on a walking pad, or a user above the rated capacity, can trip the
            overload protection. See
            <a href="/what-happens-if-you-exceed-treadmill-weight-limit/" class="text-[#0F62FE] font-medium">what happens if you exceed a treadmill&rsquo;s weight limit</a>.</li>
            <li><strong>Power.</strong> A pad sharing a circuit with a space heater or printer may lose power at start-up.</li>
          </ul>`,
    },
    {
      id: 'noise',
      heading: 'New Noises',
      html: `          <p>
            A squeak with each step usually means a dry belt or a loose screw; a rhythmic thump once per belt revolution
            means a belt seam or damaged spot; grinding means a roller bearing. Lubricate and tighten first, then listen
            again. Our <a href="/treadmill-squeaking-noise/" class="text-[#0F62FE] font-medium">squeaking</a>,
            <a href="/treadmill-thumping-noise/" class="text-[#0F62FE] font-medium">thumping</a> and
            <a href="/treadmill-clicking-noise/" class="text-[#0F62FE] font-medium">clicking noise</a>
            guides help you find the source by when it happens.
          </p>`,
    },
    {
      id: 'error',
      heading: 'If the Display Shows an Error',
      html: `          <p>
            Many walking pads show a short error code on the display or in the app when something is wrong. Codes are
            not standard: the same letters and numbers can mean different things on different brands, so look yours up
            in the manual or on the brand&rsquo;s support page rather than a generic list. Then:
          </p>
          <ol>
            <li>Note the exact code and when it appeared (at start, under load, after a while).</li>
            <li>Switch off, unplug for a minute and restart.</li>
            <li>If it returns, do the check the manual gives for that code, usually the safety key, the belt or the
            connection to the controller.</li>
            <li>If it still returns, send the code, the model and a short video to the brand.</li>
          </ol>
          <p>
            Two brands publish their codes in full, and we have collected them: see our
            <a href="/walkingpad-troubleshooting/" class="text-[#0F62FE] font-medium">WalkingPad troubleshooting</a> guide (E01 to E11, SAFE, Press and
            Rest) and our <a href="/urevo-walking-pad-troubleshooting/" class="text-[#0F62FE] font-medium">UREVO walking pad troubleshooting</a> guide
            (safety-key and wiring codes, belt turns and remote fixes).
          </p>`,
    },
    {
      id: 'setup',
      heading: 'Set It Up to Avoid Problems',
      html: `          <ul>
            <li><strong>Put it on a hard, flat floor or a firm mat.</strong> Thick carpet blocks airflow to the motor and
            can let the belt drift; see <a href="/best-treadmill-mats/" class="text-[#0F62FE] font-medium">best treadmill mats</a>.</li>
            <li><strong>Plug it straight into the wall</strong> where the manual says so, on a circuit without heavy loads.</li>
            <li><strong>Run it in before heavy use.</strong> Many manuals suggest a short, easy first session to let the belt
            settle, then a centring check.</li>
            <li><strong>Keep it clean underneath.</strong> Under a desk, dust and hair collect fast; vacuum around it
            weekly.</li>
            <li><strong>Store it flat or as the manual says.</strong> Standing some pads on end, or sliding them under a sofa
            where the frame flexes, can knock the belt out of line.</li>
          </ul>
          <p>
            If you are choosing a new pad, our
            <a href="/best-walking-pads/" class="text-[#0F62FE] font-medium">best walking pads</a>
            guide notes capacity, speed and warranty for each.
          </p>`,
    },
    {
      id: 'repair-or-replace',
      heading: 'Repair or Replace?',
      html: `          <p>
            Inside the warranty, always contact the brand first: parts are often sent free. Outside it, compare the cost of
            the part and your time against the price of a new pad. Belts, remotes and safety keys are usually worth
            replacing; a failed motor or controller on an old, cheap pad often is not.
          </p>`,
    },
    {
      id: 'support',
      heading: 'When to Call Support, and What to Have Ready',
      html: `          <p>
            Contact the brand when the pad is dead after the power checks, the motor hums without moving, there is a <a href="/treadmill-burning-smell/" class="text-[#0F62FE] font-medium" data-autolink>burning
            smell</a>, the belt will not stop, or an error message returns after a restart. Most walking pads carry a one-year
            warranty, and some brands require purchase from an authorised seller and registration.
          </p>
          <ul>
            <li>The model and serial number from the label on the pad</li>
            <li>Proof of purchase and the seller</li>
            <li>A short phone video of the fault</li>
            <li>What you have tried already</li>
          </ul>
          <p>
            If your pad is old and out of warranty, our
            <a href="/how-long-do-walking-pads-last/" class="text-[#0F62FE] font-medium">how long do walking pads last</a>
            guide helps with the repair-or-replace decision.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'Why is my walking pad not turning on?',
      a: `Usually the outlet, the pad's own power switch, or the cord. Test the socket with a lamp, check the rocker switch near the cord, and press in any reset button the manual shows. If it is still dead, it needs the brand's support.`,
    },
    {
      q: 'Why will my walking pad not start?',
      a: `Check the safety key or magnet, whether the pad is in standby or child lock, and whether the remote or app is needed to start it. Unplug and check nothing is blocking the belt. A motor that hums without moving the belt needs support.`,
    },
    {
      q: 'Why is my walking pad remote not working?',
      a: `Replace the battery first, then re-pair the remote using the sequence in the manual, since pairing is often lost after a power cut. Check line of sight for infrared remotes, and test the pad with its own button or app.`,
    },
    {
      q: 'How do I fix a walking pad belt that slips?',
      a: `Lubricate it as the manual says first, because a dry deck is the usual cause. If it still slips, tighten both rear bolts equally a quarter turn at a time, stopping as soon as the slip stops.`,
    },
    {
      q: 'Why does my walking pad stop by itself?',
      a: `An auto-stop timer, heat from a dry belt or long heavy use, overload from running or exceeding the weight limit, or a shared circuit. Let it cool, lubricate, and check the manual for timer settings.`,
    },
    {
      q: 'How do I reset a walking pad?',
      a: `Switch it off, unplug it for about a minute, plug it back in and switch on. Some models have a reset button or a factory-reset button sequence; follow the manual for yours rather than a generic sequence.`,
    },
  ],
  mistakesHeading: 'Common Mistakes Fixing a Walking Pad',
  mistakesIntro: 'Most of these make a small problem bigger.',
  mistakes: [
    {
      title: 'Tightening before lubricating',
      body: 'A dry belt slips; tightening it overloads the small motor. Lubricate as the manual says first, then tension.',
    },
    {
      title: 'Using the wrong lubricant',
      body: 'Use the silicone lubricant the maker specifies. Household oils and sprays can damage the belt and deck.',
    },
    {
      title: 'Running on a walking pad',
      body: 'Many pads are built for walking pace. Running can trip overload protection and wear the motor and belt fast.',
    },
    {
      title: 'Opening it under warranty',
      body: 'Opening the motor cover can affect warranty cover. On a newer pad, contact the brand before taking anything apart.',
    },
  ],
  relatedHeading: 'Related Walking Pad Guides',
  related: [
    {
      kicker: 'Maintenance',
      title: 'How to Lubricate a Walking Pad',
      blurb: 'Steps, timing and what to use.',
      url: '/how-to-lubricate-a-walking-pad/',
    },
    {
      kicker: 'Lifespan',
      title: 'How Long Do Walking Pads Last?',
      blurb: 'Lifespan, wear and when to repair or replace.',
      url: '/how-long-do-walking-pads-last/',
    },
    {
      kicker: 'Running',
      title: 'Can You Run on a Walking Pad?',
      blurb: 'Speeds, limits and what breaks.',
      url: '/can-you-run-on-a-walking-pad/',
    },
    {
      kicker: 'All brands',
      title: 'Treadmill Troubleshooting',
      blurb: 'Every common fault, diagnosed in order.',
      url: '/treadmill-troubleshooting/',
    },
    {
      kicker: 'Belt',
      title: 'Walking Pad Belt Slipping or Off-Center',
      blurb: 'Lubricate, tension and track a walking pad belt.',
      url: '/walking-pad-belt-slipping/',
    },
    {
      kicker: 'Safety',
      title: 'Sperax Walking Pad Recall?',
      blurb: 'The CPSC warning on four Sperax models, explained.',
      url: '/sperax-walking-pad-recall/',
    },
    {
      kicker: 'Walking pad',
      title: 'Walking Pad Making Noise?',
      blurb: 'Squeak, click and hum fixes.',
      url: '/walking-pad-making-noise/',
    },
    {
      kicker: 'Walking pad',
      title: 'Walking Pad Overheating',
      blurb: 'Why it stops and how to cool it.',
      url: '/walking-pad-overheating/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">Check the outlet, the power switch, the safety key and the remote, then restart the pad
            cleanly.</strong> That fixes most walking pads that will not start or respond.`,
    `For belt problems, lubricate before you tighten; for a pad that stops on its own, think heat, overload or a timer.
            Call the brand for anything that smells hot, hums without moving or will not stop. Our
            <a href="/how-to-lubricate-a-walking-pad/" class="text-[#5AA9FF] font-bold no-underline">lubrication guide</a>
            is the place to start.`,
  ],
};

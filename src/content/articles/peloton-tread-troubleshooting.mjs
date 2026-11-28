const th = 'text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4';
const td = 'border-b border-gray-100 py-2 pr-4 text-gray-700';

export default {
  slug: 'peloton-tread-troubleshooting',
  title: 'Peloton Tread Troubleshooting: Belt, Screen and Speed Fixes',
  description:
    'Peloton Tread not working? Check these 3 first: the safety key, the outlet and power cord, then a full restart. Fixes for a frozen screen, Tread Lock and belt.',
  crumbLabel: 'Peloton Tread Troubleshooting',
  breadcrumb: { name: 'Fault Diagnosis', url: '/problems/' },
  kicker: 'Troubleshooting',
  updated: 'November 2026',
  updatedLong: 'November 28, 2026',
  published: '2026-11-24',
  modified: '2026-11-28',
  socialProof: '1.2k',
  h1: ['Peloton Tread Troubleshooting:', 'Power, Safety Key, Screen, Knobs and Belt'],
  standfirst:
    'Most Peloton Tread faults come back to four things: the safety key, the outlet the Tread is plugged into, a touchscreen that needs a proper restart, and belt tension or tracking. Here is the order to check them in, using the steps Peloton itself publishes, and what to have ready before you contact Peloton Member Support.',
  ctas: [
    { label: 'Find Your Symptom', href: '#short-answer' },
    { label: 'Tread Stops or Won’t Turn On', href: '#power' },
  ],
  tags: [
    'peloton tread troubleshooting',
    'peloton tread not working',
    'peloton tread wont turn on',
    'peloton tread belt not moving',
    'peloton tread screen frozen',
    'peloton tread lock passcode',
    'peloton tread blinking red light',
  ],
  stickyCta: { text: 'Find Your Symptom', link: '#short-answer' },
  lead: `A Peloton Tread is a treadmill with a tablet bolted to it, and it fails like both. The
          treadmill half has a safety key, a power cord, a belt and two tensioning screws; the
          tablet half has software, Wi-Fi, Bluetooth and a passcode lock. Peloton is also stricter
          than most treadmill makers about one thing that causes a large share of
          &ldquo;it just stopped&rdquo; complaints: the electrical outlet. This guide works through
          each part in the order that finds the cause fastest. The Peloton-specific steps come from
          Peloton&rsquo;s own support articles, named in each section. Where Peloton does not publish a
          step for a symptom, we keep to general treadmill checks and say so, rather than inventing a
          menu path or an error code.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'Peloton Tread Not Working? The Short Answer',
      navLabel: 'The Short Answer',
      html: `          <p>
            <strong>Reseat the safety key and dry it if it is damp, make sure the Tread is plugged straight
            into a dedicated outlet that is not a GFCI or AFCI outlet, then switch it off at the power
            switch on the base and restart it.</strong> Peloton lists a disconnected power cord, an
            installation that does not meet its power requirements and a disconnected safety key as the
            three main reasons a Tread stops unexpectedly. If the problem survives all three checks, find
            your symptom below.
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
              <tr><td class="${td}">Completely dead</td><td class="${td}">Power switch, cord, outlet</td><td class="${td}">Cord seated at both ends; dedicated outlet, no extension cord</td></tr>
              <tr><td class="${td}">Stops in the middle of a run</td><td class="${td}">Outlet type, cord, safety key</td><td class="${td}">Move off a GFCI or AFCI outlet; reseat and dry the key</td></tr>
              <tr><td class="${td}">Blinking red light</td><td class="${td}">An error, often the safety key</td><td class="${td}">Detach and reattach the key; restart at the base switch</td></tr>
              <tr><td class="${td}">Screen dark, base has power</td><td class="${td}">Screen cable or a screen that is off</td><td class="${td}">Check the cable behind the screen; hold the screen&rsquo;s power button</td></tr>
              <tr><td class="${td}">Screen frozen</td><td class="${td}">Software</td><td class="${td}">Full restart; give a fresh update time to settle</td></tr>
              <tr><td class="${td}">Asks for a passcode</td><td class="${td}">Tread Lock, a safety feature</td><td class="${td}">Enter the four-digit code, or reset it with your account password</td></tr>
              <tr><td class="${td}">Belt slips, sticks or drifts</td><td class="${td}">Tension or tracking</td><td class="${td}">Quarter turns on the rear tensioning screws, power off first</td></tr>
            </tbody>
          </table></div>
          <ul>
            <li><strong>Safety first:</strong> if anything smells hot, the belt will not stop when you pull
            the key, or a part is broken or missing, stop using the Tread and contact Peloton.</li>
            <li><strong>Older models:</strong> if you own a Tread+ (model TR01) or a Tread (model TR02)
            from the 2020&ndash;2021 recall window, confirm the recall remedy has been done before you
            troubleshoot anything else. See <a href="#recalls" class="text-[#0F62FE] font-medium">the recall section</a>.</li>
            <li><strong>Belt that will not move:</strong> our general guide to a
            <a href="/treadmill-turns-on-but-belt-wont-move/" class="text-[#0F62FE] font-medium">treadmill that turns on but the belt won&rsquo;t move</a>
            covers the mechanical side.</li>
          </ul>
          <p>
            Peloton is not the only brand with its own quirks. Our
            <a href="/treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">treadmill troubleshooting guide</a>
            covers every common symptom for any make, and our
            <a href="/peloton-tread/" class="text-[#0F62FE] font-medium">Peloton Tread review</a>
            explains how the current models differ. If you are weighing the closest connected rival, our
            <a href="/echelon-treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">Echelon troubleshooting guide</a> covers the Stride&rsquo;s common faults.
          </p>`,
    },
    {
      id: 'which-model',
      heading: 'First, Which Peloton Tread Do You Have?',
      navLabel: 'Which Model You Have',
      html: `          <p>
            The name &ldquo;Peloton Tread&rdquo; has been used for several different machines, and the
            right fix sometimes depends on which one is in front of you. The model number on the sticker
            on the frame settles it; the name on the screen may not.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Machine</th>
                <th class="${th}">Running surface</th>
                <th class="${th}">Troubleshooting notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">Tread+ (model TR01), sold from 2018, renamed Tread+ in 2020</td><td class="${td}">Slat belt</td><td class="${td}">Recalled in May 2021; confirm the rear guard is fitted. Some slat sag underneath is normal</td></tr>
              <tr><td class="${td}">Tread (model TR02), sold from late 2020</td><td class="${td}">Conventional belt on a deck</td><td class="${td}">Units sold Nov 2020 to Mar 2021 were recalled for the screen; confirm the fix</td></tr>
              <tr><td class="${td}">Tread Flex (from October 2026)</td><td class="${td}">Conventional belt, folds</td><td class="${td}">New; use its own manual where it differs from older articles</td></tr>
              <tr><td class="${td}">Tread Vision (from October 2026)</td><td class="${td}">Conventional belt</td><td class="${td}">New; adds a movement-tracking camera</td></tr>
              <tr><td class="${td}">Tread+ Vision (from October 2026)</td><td class="${td}">Slat belt</td><td class="${td}">New; slat-belt advice applies, but check its manual</td></tr>
            </tbody>
          </table></div>
          <p>
            Model history and recall details are from the CPSC&rsquo;s recall notices; the 2026 range is
            as set out in our <a href="/peloton-tread/" class="text-[#0F62FE] font-medium">Peloton Tread review</a>.
          </p>
          <p>
            Most of Peloton&rsquo;s published troubleshooting articles were written for the Tread and Tread+
            that were on sale before the October 2026 range change. The basics they describe, such as the
            safety key, the outlet rules and belt tensioning, are treadmill fundamentals and are likely to
            carry over. Menu names, button positions and screen layouts on the new Tread Flex, Tread Vision
            and Tread+ Vision may not. Where your machine does not match a step on this page, follow the
            manual for your model, which Peloton publishes on its support site, or ask Member Support. We
            have not seen Peloton troubleshooting articles specific to the 2026 models, so we do not guess
            at them.
          </p>
          <p>
            If you are looking at a second-hand machine rather than fixing your own, our
            <a href="/used-peloton-tread/" class="text-[#0F62FE] font-medium">used Peloton Tread guide</a>
            explains how to check the model, the recall remedy and the account release before you pay.
          </p>`,
    },
    {
      id: 'power',
      heading: 'Tread Won’t Turn On or Stops in the Middle of a Run',
      navLabel: 'Won’t Turn On or Stops',
      html: `          <p>
            <strong>On a Peloton Tread, the outlet is a more common culprit than on most treadmills,
            because Peloton&rsquo;s requirements are strict.</strong> Peloton&rsquo;s support article
            <em>Tread Unexpectedly Stops</em> names three main reasons for a Tread to stop: the power cord
            is disconnected, the installation does not meet the electrical requirements, or the safety key
            is disconnected. The same three explain most Treads that will not start at all.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Check the power switch and cord</h3>
          <p>
            Peloton&rsquo;s <em>Peloton Tread No Power Troubleshooting</em> article starts with the
            obvious: make sure the power switch on the base is on, and that the power cord is fully seated
            at both ends, in the wall and in the Tread. Cords get knocked loose when a Tread is moved or
            when the cord runs across a walkway. Peloton says not to use a power strip, power adapter or
            extension cord.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Check the outlet</h3>
          <p>
            Peloton&rsquo;s dimensions and power requirements page lists a dedicated 120-volt, 60 Hz,
            15-amp circuit for the US Tread. A dedicated circuit means that outlet is the only thing on its
            breaker; a Tread sharing a circuit with a freezer, a space heater or a garage door opener can
            trip it under load. If you are not sure what else is on the circuit, switch the breaker off at
            the panel and see what goes dark, or ask an electrician.
          </p>
          <p>
            Peloton also says <strong>not</strong> to use a GFCI or AFCI outlet. GFCI outlets, the kind
            with test and reset buttons, are standard in basements, garages and bathrooms, which is exactly
            where many Treads end up. Peloton&rsquo;s explanation is that the Tread uses the outlet&rsquo;s
            ground to discharge static, which a GFCI outlet can read as a fault and trip, shutting the
            Tread down mid-run. If yours stops at random and is on a GFCI outlet, Peloton&rsquo;s fix is to
            move it to a different outlet, not to keep resetting the GFCI. This is the single most
            Peloton-specific step on this page, and it surprises owners who have run other treadmills on
            the same outlet without trouble.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Peloton says</th>
                <th class="${th}">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">Dedicated 120V, 15A circuit (US)</td><td class="${td}">Other appliances on the circuit can trip the breaker under load</td></tr>
              <tr><td class="${td}">No GFCI or AFCI outlets</td><td class="${td}">They can trip and shut the Tread down mid-run</td></tr>
              <tr><td class="${td}">No extension cord, power strip or adapter</td><td class="${td}">Voltage drop and loose connections cause stops</td></tr>
              <tr><td class="${td}">Cord seated at the wall and at the Tread</td><td class="${td}">A half-seated cord is the simplest cause of a dead Tread</td></tr>
            </tbody>
          </table></div>
          <p>
            If the breaker in your panel trips rather than the outlet, our guide to a
            <a href="/treadmill-trips-breaker/" class="text-[#0F62FE] font-medium">treadmill that trips the breaker</a>
            explains the difference between a shared circuit and a motor drawing too much current. If the
            Tread is still completely dead with the switch on, the cord seated and a dedicated outlet
            confirmed with a lamp, Peloton&rsquo;s guidance is to contact Member Support; the fault is then
            inside the machine. Our general guide to a
            <a href="/treadmill-wont-turn-on/" class="text-[#0F62FE] font-medium">treadmill that won&rsquo;t turn on</a>
            explains what those internal faults usually are, but on a Tread under warranty, let Peloton
            open it.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Static shocks</h3>
          <p>
            Because the Tread discharges static through the outlet&rsquo;s ground, an ungrounded or
            poorly grounded outlet can also show up as shocks from the rails or screen, especially in dry
            winter air on carpet. Our guide to
            <a href="/treadmill-static-shock/" class="text-[#0F62FE] font-medium">treadmill static shock</a>
            covers mats and humidity; the outlet comes first.
          </p>`,
    },
    {
      id: 'safety-key',
      heading: 'Safety Key Problems and a Blinking Red Light',
      navLabel: 'Safety Key and Red Light',
      html: `          <p>
            <strong>A blinking red light on a Peloton Tread usually means an error has occurred, and
            Peloton&rsquo;s first fix is the safety key.</strong> Its article <em>Blinking Red Lights On The
            Peloton Tread</em> says to detach the key and reattach it. A correctly attached key sits closest
            to the handrail with the silver side facing up. A key that is upside down, half seated or pulled
            slightly out by the lanyard can leave the Tread refusing to start.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Keep the key dry</h3>
          <p>
            Peloton is specific about moisture. If the safety key, its opening or the area around it is
            exposed to liquid, including cleaning spray, sweat or a spilled drink, or looks wet, Peloton
            says to dry the key and the surrounding area straight away and to keep liquid cleaners away
            from it. Sweat dripping from the face onto the console during a hard run is the usual way it
            happens. Wipe the area with a dry cloth rather than spraying near it.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Test it after it has been wet</h3>
          <p>
            After drying, Peloton asks owners to test the key by pulling it out while walking on the Tread,
            to confirm the belt still stops. If it does not, Peloton says to contact Member Support
            immediately for a replacement. Do not keep using a Tread whose key no longer stops it. On the
            Tread+, Peloton&rsquo;s safety page notes that pulling the key slows the belt to a stop rather
            than stopping it instantly, so hold the handrails while you test.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">If the red light keeps blinking</h3>
          <p>
            If a message appears on the touchscreen, follow it first. If not, Peloton&rsquo;s next step is
            to switch the Tread off with the power switch at the base of the deck and restart it. If the
            red light is still blinking after a restart, contact Member Support. We do not list codes or
            light patterns beyond this, because Peloton does not publish a code table for the Tread in the
            articles we read, and a guessed meaning is worse than none. Our general guide to a
            <a href="/treadmill-safety-key-not-working/" class="text-[#0F62FE] font-medium">treadmill safety key that is not working</a>
            explains how the key&rsquo;s switch works on any machine.
          </p>`,
    },
    {
      id: 'tread-lock',
      heading: 'Tread Lock and the Four-Digit Passcode',
      navLabel: 'Tread Lock and Passcode',
      html: `          <p>
            <strong>If your Tread is asking for a passcode, nothing is broken: that is Tread Lock.</strong>
            Peloton added it after the 2021 recalls. Peloton describes it as a safety feature that locks
            the Tread automatically after you put it to sleep, or after 45 seconds of inactivity outside a
            class, and it unlocks once the four-digit passcode is entered. Some 2021 coverage reported 30
            seconds; go by what your Tread does now.
          </p>
          <ul>
            <li><strong>Forgotten passcode.</strong> Peloton says to select the forgotten passcode option
            on the lock screen; you then enter your Peloton account password and set a new code. If you
            do not know the account password, reset that first through Peloton&rsquo;s normal account
            recovery.</li>
            <li><strong>Several people use the Tread.</strong> Peloton&rsquo;s set-up guidance says every
            profile on the machine shares the same code, so changing it changes it for everyone in the
            house. Tell the others.</li>
            <li><strong>It locks between intervals.</strong> If you step off for a drink or a strength set
            outside a class, the Tread can lock behind you. That is the design working; keep the session
            inside a class, or re-enter the code.</li>
            <li><strong>Knobs do nothing while locked.</strong> Peloton says speed and incline can be
            adjusted at any time when the Tread is unlocked and the safety key is inserted. A locked Tread
            ignores them.</li>
          </ul>
          <p>
            Do not look for a way to disable Tread Lock in a house with children or pets. It exists because
            of the Tread+ pull-under incidents described in the recall section below, and together with
            removing the safety key after every session it is the simplest protection you have. Our guide to
            <a href="/kids-treadmill/" class="text-[#0F62FE] font-medium">children and treadmills</a>
            covers the other habits that matter.
          </p>`,
    },
    {
      id: 'touchscreen',
      heading: 'Touchscreen Frozen, Black or Acting Up After an Update',
      navLabel: 'Touchscreen Problems',
      html: `          <p>
            The Peloton touchscreen is a separate computer from the treadmill base, and most of its
            problems are software rather than hardware. The first question is whether the base has power.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Screen is black</h3>
          <p>
            Peloton&rsquo;s article <em>Peloton Tread Touchscreen Not Powering On</em> suggests pressing
            the stop button to check whether the knobs and centre buttons have power. If they do, the base
            is fine and the screen is either off or not connected. Check the cable behind the screen; Peloton
            says it should be fully seated in its port. Then hold the power button on the back of the
            touchscreen for about five seconds and wait for the Peloton logo. If the base has no power
            either, go back to <a href="#power" class="text-[#0F62FE] font-medium">the power checks</a>.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Screen is frozen</h3>
          <p>
            Tap the screen first; it may simply be asleep. If it is genuinely frozen, do a full restart:
            shut the Tread down at the power switch on the base, wait, and turn it back on, or hold the
            power button on the back of the touchscreen to restart the screen on its own. Let it boot
            completely before touching anything. A screen that freezes only while streaming a class is
            more often a weak Wi-Fi signal than a fault; see the next section.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Odd behaviour straight after a software update</h3>
          <p>
            Peloton has published an article, <em>Difficulty With Peloton Tread+ After Software Update</em>,
            saying an issue it describes there resolves on its own roughly 30 minutes after an update
            completes. That article was about a specific Tread+ update, so do not read it as a rule for
            every model, but the general lesson holds: after an update, leave the Tread on and connected
            for a while before deciding something is wrong, and never switch it off while an update is
            installing.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Wrong speed or incline on screen</h3>
          <p>
            If the screen shows a speed or incline that does not match what the belt is doing, Peloton&rsquo;s
            <em>Delayed or Incorrect Metrics On The Tread+</em> article says the machine may need a restart:
            power it off, wait about 30 seconds, and turn it on again. If the numbers are still wrong after a
            restart, the sensor that reads belt speed or incline position may need attention, which is a
            Member Support job on a Peloton. Our guide to the
            <a href="/treadmill-speed-sensor/" class="text-[#0F62FE] font-medium">treadmill speed sensor</a>
            explains what that part does.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Factory reset: the last resort</h3>
          <p>
            Peloton&rsquo;s <em>Factory Reset Your Peloton Product</em> article says a factory reset does not
            erase your personal data, but it returns the touchscreen to factory settings and you will have
            to reactivate the product afterwards. Only do it when restarts have failed, ideally with Member
            Support on the line, and have your account details ready. Follow the steps in that article for
            your machine rather than a button sequence from a forum.
          </p>`,
    },
    {
      id: 'knobs',
      heading: 'Speed and Incline Knobs Not Responding',
      navLabel: 'Speed and Incline Knobs',
      html: `          <p>
            Peloton&rsquo;s Tread uses two knobs on the handlebar rather than a row of buttons. Per
            Peloton&rsquo;s <em>Activating Shortcuts On The Tread</em> article, the speed knob is on the right
            and the incline knob on the left, and pressing the button in the middle of each knob jumps to the
            next whole number: the next whole mph on speed, the next whole percent on incline. Owners who are
            used to other treadmills sometimes read that jump as the Tread &ldquo;surging&rdquo;.
          </p>
          <p>
            <strong>If neither knob does anything,</strong> check the obvious before the electronics:
          </p>
          <ol>
            <li><strong>Is the Tread locked?</strong> Peloton says speed and incline can be changed whenever
            the Tread is unlocked and the safety key is in. Unlock it with the passcode.</li>
            <li><strong>Is the safety key fully seated and dry?</strong> See the safety key section above.</li>
            <li><strong>Does the stop button light?</strong> If the knobs and stop button have no power at
            all, the base is not powering the controls; go back to the power checks.</li>
            <li><strong>Restart.</strong> Power off at the base switch, wait about 30 seconds and restart.</li>
          </ol>
          <p>
            <strong>If one knob works and the other does not,</strong> or a knob turns but the change
            happens late or in jumps, the knob or its connection may be faulty. Peloton does not publish a
            repair procedure for the knobs in the articles we read, so contact Member Support with a short
            video showing the problem. Do not open the handlebar yourself on a machine under warranty.
          </p>
          <p>
            <strong>If the incline will not move at all,</strong> look for anything under the deck or in the
            path of the lift, then restart. A deck that hums but does not move, or will not return to zero,
            needs Member Support; our guide to a
            <a href="/treadmill-incline-not-working/" class="text-[#0F62FE] font-medium">treadmill incline not working</a>
            explains the motor and sensor involved. Peloton&rsquo;s <em>Leveling Your Peloton Tread and
            Tread+</em> article covers the <a href="/treadmill-shaking-or-wobbling/" class="text-[#0F62FE] font-medium" data-autolink>levelling feet</a>, which are worth checking if the deck rocks.
          </p>`,
    },
    {
      id: 'belt',
      heading: 'Belt Won’t Move, Slips, Sticks or Drifts',
      navLabel: 'Belt Problems',
      html: `          <p>
            Peloton&rsquo;s <em>Peloton Tread Belt Maintenance</em> article covers tension and centring for the
            belt-and-deck Tread. Always power the Tread down and unplug it before making an adjustment, and
            use the 6 mm Allen key from the Tread&rsquo;s toolkit on the two tensioning screws at the rear.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Belt will not move</h3>
          <p>
            With the screen and controls working but the belt still, check in this order: the Tread is
            unlocked, the safety key is seated and dry, and nothing is jammed under the belt. A belt that
            starts and then stops is usually the outlet or key problem described above. If the motor runs
            but the belt does not, or the motor makes no attempt to run with everything else right, contact
            Member Support. Our guide to a
            <a href="/treadmill-turns-on-but-belt-wont-move/" class="text-[#0F62FE] font-medium">treadmill that turns on but the belt won&rsquo;t move</a>
            explains the drive parts involved.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Belt slips or sticks: tension</h3>
          <p>
            Peloton says a loose belt can stick or slip while you walk or run. Its fix, with the Tread
            unplugged, is to tighten both tensioning screws a quarter turn clockwise, then test by walking
            and running briefly. Repeat in quarter turns only as needed, keeping the two sides equal. An
            over-tight belt strains the motor and rollers, so stop as soon as the slip stops. Peloton
            suggests checking belt tension and centring monthly. Our guide to a
            <a href="/treadmill-belt-slipping/" class="text-[#0F62FE] font-medium">treadmill belt slipping</a>
            explains how to tell a loose belt from a worn one.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Belt drifts to one side: tracking</h3>
          <p>
            Peloton&rsquo;s centring method uses marks on the machine: a red centre line on the belt that
            should sit between two red centring dots at the front of the deck. To move the belt to the right,
            tighten the <em>left</em> screw a quarter turn clockwise; to move it to the left, tighten the
            <em>right</em> screw a quarter turn clockwise. Then let the belt run for about 30 seconds to
            settle, with nobody on it, and check again. Small turns and patience beat big corrections. A belt
            that rubs the side can also be the source of a new noise, so centre it before chasing sounds
            elsewhere.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Lubrication</h3>
          <p>
            This is where Peloton differs from many brands. Peloton&rsquo;s belt maintenance article says the
            Tread belt is lubricated at the factory and should not need more lubricant for three years, and it
            notes that this is an updated position, so older guides may say otherwise. Do not apply a generic
            <a href="/best-treadmill-lubricant/" class="text-[#0F62FE] font-medium" data-autolink>treadmill lubricant</a> on a schedule copied from another brand; if your Tread is past that point,
            follow the lubrication section of Peloton&rsquo;s article or ask Member Support which product to
            use. Our <a href="/treadmill-belt-lubrication/" class="text-[#0F62FE] font-medium">treadmill belt lubrication guide</a>
            explains why the right product matters.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Tread+ slat belts</h3>
          <p>
            The slat-belt Tread+ is a different mechanism with no tensioning screws in the same sense.
            Peloton&rsquo;s <em>Normal Slat Sag Underneath The Tread+</em> article says every Tread+ slat belt
            has some slack or sag that can be seen from underneath the deck, and that this alone is not a
            fault. What is a fault is a broken, cracked or missing part: Peloton&rsquo;s <em>Broken Piece On A
            Peloton Tread or Tread+</em> article says to stop using the machine immediately and contact Member
            Support. Never reach under a slat belt, or let anyone else near the rear of it, while it can move.
          </p>`,
    },
    {
      id: 'noise',
      heading: 'New Noises and Wobble',
      html: `          <p>
            Peloton has an article titled <em>Peloton Tread Normal Operating Noises</em>, and its existence is
            the first lesson: some motor and belt sound is normal, especially at speed and during incline
            changes. What matters is a noise that is new, or that changes.
          </p>
          <ul>
            <li><strong>A rubbing or scraping sound:</strong> often a belt that has drifted against the side.
            Centre it as above.</li>
            <li><strong>A squeak with each footstep:</strong> a frame bolt or levelling foot working loose
            more often than a dry deck on a Peloton, given its lubrication guidance. Check the levelling feet
            and that the Tread does not rock. See
            <a href="/treadmill-squeaking-noise/" class="text-[#0F62FE] font-medium">treadmill squeaking noise</a>.</li>
            <li><strong>A thump once per revolution:</strong> a seam or damaged spot on the belt, or on a
            Tread+ a damaged slat. Stop and inspect with the Tread unplugged. See
            <a href="/treadmill-thumping-noise/" class="text-[#0F62FE] font-medium">treadmill thumping noise</a>.</li>
            <li><strong>Grinding, or a whine that rises with speed:</strong> bearings or the motor. Stop and
            contact Member Support.</li>
          </ul>
          <p>
            A short phone video with the sound is the most useful thing you can send support. Note when it
            happens: at every speed, only above a certain speed, only on incline, or only with someone on the
            belt.
          </p>`,
    },
    {
      id: 'wifi-bluetooth',
      heading: 'Wi-Fi, Classes and Bluetooth Heart Rate Monitors',
      navLabel: 'Wi-Fi and Bluetooth',
      html: `          <p>
            A Peloton Tread runs its classes over the internet, so a weak connection shows up as buffering,
            classes that will not load or a screen that seems to freeze mid-class. Treads often live in
            basements and garages, the worst-covered rooms in a house.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Wi-Fi</h3>
          <p>
            Peloton&rsquo;s <em>Network Connection: Setup &amp; Troubleshooting</em> article covers the
            touchscreen in general. Its advice for a weak signal is the usual: bring the router closer or
            add coverage, use a wired connection if your model supports one, and keep the signal path clear
            of walls and appliances where you can. Check the signal on your phone while standing on the
            deck. Peloton also notes that after a power cycle you should check the touchscreen&rsquo;s date and
            time are correct, since a wrong clock can stop a connection, and then reselect your network.
            Restarting the router as well as the Tread clears a surprising number of connection faults.
          </p>
          <p>
            If the Tread connects but classes will not play, the problem may be the account or membership
            rather than the machine. Peloton says the All-Access Membership is required for its content and
            features on the Tread; our guide to
            <a href="/how-much-does-a-peloton-tread-cost/" class="text-[#0F62FE] font-medium">what a Peloton Tread costs</a>
            sets out the membership. Peloton says its Just Run mode, with manual speed and incline, works
            on the Tread Vision without a membership; if classes will not load, Just Run is a quick way to
            tell a network or account problem from a treadmill fault.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Bluetooth heart rate monitors</h3>
          <p>
            Peloton&rsquo;s <em>Pairing A Heart Rate Monitor With Peloton Bikes and Treads</em> article says
            Bluetooth must be on at the touchscreen, the monitor should be on and worn before you pair, and
            pairing is done from the heart rate monitor screen in the Peloton software, not from the
            system&rsquo;s Bluetooth settings. If the monitor does not appear, refresh the list. The two most
            common fixes Peloton gives are making sure the monitor is not still connected to another device,
            such as your phone, and replacing the monitor&rsquo;s battery.
          </p>`,
    },
    {
      id: 'recalls',
      heading: 'The 2021 Tread and Tread+ Recalls: Check Before You Troubleshoot',
      navLabel: 'The 2021 Recalls',
      html: `          <p>
            If you own an older Peloton treadmill, confirm its recall status before anything else, because a
            recalled machine without its remedy should not be used at all.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Tread+ (model TR01)</h3>
          <p>
            On 5 May 2021 the CPSC and Peloton announced a recall of the Tread+ because adult users, children,
            pets and objects could be pulled underneath the rear of the treadmill. A child died. On 18 May
            2023 the CPSC announced an approved repair: a rear guard with a breakaway design that pivots away
            when a person or object touches it, cutting power to the treadmill and slowing the belt. The guard
            and its installation are free to owners. By then the CPSC reported 351 pull-under incident reports,
            including the child&rsquo;s death and 90 reports of injuries. Full refunds ran until 6 November 2023,
            with prorated refunds after that. Separately, in January 2023 Peloton agreed to pay a $19,065,000
            civil penalty over its failure to report the hazard immediately and its distribution of recalled
            treadmills.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Tread (model TR02)</h3>
          <p>
            The same day, Peloton recalled Tread treadmills sold in the US from November 2020 to March 2021,
            because the touchscreen could loosen and fall. The remedy was a refund or a free service visit to
            secure the screen. A Tread from that window whose screen moves on its mount should not be used
            until Peloton has inspected it.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">What to do</h3>
          <ul>
            <li>Find the model and serial number on the sticker on the frame.</li>
            <li>Contact Peloton through its Product Recalls page at onepeloton.com or the toll-free number
            the CPSC lists for the recall, 866-679-9129, and ask whether the remedy has been completed for
            that serial number.</li>
            <li>On a TR01, check the rear guard is fitted across the back of the deck.</li>
          </ul>
          <p>
            Recall facts are from the CPSC&rsquo;s news releases of 5 May 2021, January 2023 and 18 May 2023.
            Whatever the model, keep children and pets away from a running treadmill, remove the safety key
            after every session and use Tread Lock. Our
            <a href="/treadmill-safety-tips/" class="text-[#0F62FE] font-medium">treadmill safety guide</a>
            covers the rest.
          </p>`,
    },
    {
      id: 'support',
      heading: 'When to Contact Peloton Member Support and What to Have Ready',
      navLabel: 'Contacting Support',
      html: `          <p>
            Contact Peloton Member Support rather than carrying on yourself when:
          </p>
          <ul>
            <li>The Tread is dead with the switch on, the cord seated and a dedicated, non-GFCI outlet
            confirmed working.</li>
            <li>A red light keeps blinking after reseating the key and restarting at the base switch.</li>
            <li>The safety key no longer stops the belt. Stop using the Tread.</li>
            <li>The touchscreen will not boot, or a factory reset looks necessary.</li>
            <li>A knob, the incline or the speed reading is still wrong after a restart.</li>
            <li>A part is broken or missing, there is a burning smell, or there is grinding from the rollers
            or motor.</li>
            <li>The machine may be covered by the recall, or by its warranty.</li>
          </ul>
          <p><strong>Have this ready:</strong></p>
          <ul>
            <li>The <strong>model and serial number</strong> from the sticker on the frame.</li>
            <li>The <strong>account email</strong> the Tread is registered to.</li>
            <li>What is on the screen, and exactly <strong>when the fault happens</strong>: at power-up, on
            pressing start, after some minutes, or only during incline changes.</li>
            <li>A <strong>short phone video</strong> of the fault, with sound.</li>
            <li>What you have already tried, including the outlet type, so support does not start from
            the beginning.</li>
          </ul>
          <p>
            Warranty terms differ by component and Peloton&rsquo;s own pages are not always consistent, as our
            <a href="/peloton-tread/" class="text-[#0F62FE] font-medium">Peloton Tread review</a>
            notes, so check the warranty document for your machine and date of purchase before paying for a
            repair. Out of warranty, whether a repair is worth it is a matter of the quote against the
            machine&rsquo;s value; our
            <a href="/treadmill-repair-guide/" class="text-[#0F62FE] font-medium">treadmill repair guide</a>
            helps with that decision.
          </p>
          <p>
            <strong>Sources for this page.</strong> Peloton support articles read on 24 November 2026:
            <em>Tread Unexpectedly Stops</em>; <em>Peloton Tread No Power Troubleshooting</em>; <em>Peloton Tread
            and Tread+ Dimensions, Specifications, and Power Requirements</em>; <em>Blinking Red Lights On The
            Peloton Tread</em>; <em>Tread+ Safety Features</em>; <em>Peloton Tread Touchscreen Not Powering
            On</em>; <em>Difficulty With Peloton Tread+ After Software Update</em>; <em>Delayed or Incorrect
            Metrics On The Tread+</em>; <em>Factory Reset Your Peloton Product</em>; <em>Activating Shortcuts On
            The Tread</em>; <em>Peloton Tread Belt Maintenance</em>; <em>Normal Slat Sag Underneath The
            Tread+</em>; <em>Broken Piece On A Peloton Tread or Tread+</em>; <em>Network Connection: Setup &amp;
            Troubleshooting</em>; and <em>Pairing A Heart Rate Monitor With Peloton Bikes and Treads</em>.
            Peloton&rsquo;s support pages did not display a last-updated date when we read them, and Peloton may
            revise them; follow the current version if it differs. Recall details are from CPSC news releases.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'Why does my Peloton Tread keep stopping?',
      a: `Peloton names three main causes: a disconnected power cord, an outlet that does not meet its requirements, and a disconnected safety key. The outlet is the one owners miss: Peloton asks for a dedicated 15-amp circuit and says not to use GFCI or AFCI outlets or an extension cord. Move the Tread off a GFCI outlet, and reseat and dry the safety key.`,
    },
    {
      q: 'Why is there a blinking red light on my Peloton Tread?',
      a: `Peloton says a blinking red light usually means an error has occurred. Detach and reattach the safety key, silver side up and nearest the handrail, and dry it if it is damp. If a message appears on screen, follow it; otherwise restart with the power switch at the base. If it keeps blinking, contact Member Support.`,
    },
    {
      q: 'How do I reset a frozen Peloton Tread screen?',
      a: `Tap the screen in case it is asleep, then restart: switch off at the power switch on the base and back on, or hold the power button on the back of the touchscreen. If the screen is black but the stop button lights, check the cable behind the screen is fully seated. A factory reset is a last resort and means reactivating the Tread afterwards.`,
    },
    {
      q: 'What if I forgot my Peloton Tread Lock passcode?',
      a: `Select the forgotten passcode option on the lock screen, enter your Peloton account password and set a new four-digit code. The code is shared by every profile on the Tread, so tell everyone who uses it. Tread Lock is a safety feature and engages after the Tread sleeps or after 45 seconds of inactivity outside a class.`,
    },
    {
      q: 'How do I tighten or center a Peloton Tread belt?',
      a: `Unplug the Tread and use the 6 mm Allen key on the two rear tensioning screws. For slipping, turn both a quarter turn clockwise and test. For a belt that drifts, tighten the left screw to move the belt right or the right screw to move it left, a quarter turn at a time, until the red centre line sits between the red dots on the deck.`,
    },
    {
      q: 'Do I need to lubricate my Peloton Tread belt?',
      a: `Not for a long time. Peloton says the Tread belt is lubricated at the factory and should not need more for three years, and notes this is an updated position. Do not follow another brand's lubrication schedule; when the time comes, use the method and product in Peloton's belt maintenance article.`,
    },
    {
      q: 'Why won’t my Peloton Tread speed or incline knobs work?',
      a: `The knobs only work when the Tread is unlocked and the safety key is in, so unlock it and reseat the key first. If the stop button does not light either, the controls have no power: check the outlet and cord. If one knob still fails after a restart, contact Member Support with a video.`,
    },
  ],
  mistakesHeading: 'Common Mistakes Troubleshooting a Peloton Tread',
  mistakesIntro: 'Most Peloton Tread faults are simple. These four make them take longer or cost more.',
  mistakes: [
    {
      title: 'Plugging into a GFCI outlet or an extension cord',
      body: 'Peloton asks for a dedicated outlet and says not to use GFCI or AFCI outlets, power strips or extension cords. Resetting a tripped GFCI over and over will not fix a Tread that stops mid-run; moving it to a suitable outlet will.',
    },
    {
      title: 'Spraying cleaner near the safety key',
      body: 'Peloton warns that liquid, including cleaner and sweat, around the safety key can cause problems. Wipe the console with a cloth instead, dry the key if it gets wet, and test that pulling it still stops the belt.',
    },
    {
      title: 'Lubricating on another brand’s schedule',
      body: 'Peloton says its Tread belt comes lubricated and should not need more for three years. Adding a generic lubricant early can make things worse. Fix slipping with quarter turns on the tensioning screws first.',
    },
    {
      title: 'Troubleshooting a recalled machine',
      body: 'A Tread+ TR01 without its rear guard, or a TR02 from the recall window without its screen fix, should not be used at all. Check the serial number with Peloton before fixing anything else on an older machine.',
    },
  ],
  relatedHeading: 'Related Fault Diagnosis Guides',
  related: [
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
    {
      kicker: 'Belt',
      title: 'Treadmill Belt Slipping',
      blurb: 'Tension, lubrication and wear: how to tell which one you have.',
      url: '/treadmill-belt-slipping/',
    },
    {
      kicker: 'Safety key',
      title: 'Treadmill Safety Key Not Working',
      blurb: 'How the key switch works and what to do when it is not recognised.',
      url: '/treadmill-safety-key-not-working/',
    },
    {
      kicker: 'Review',
      title: 'Peloton Tread Review',
      blurb: 'The Tread Flex, Tread Vision and Tread+ Vision, the membership and the recalls.',
      url: '/peloton-tread/',
    },
    {
      kicker: 'Fixes',
      title: 'NordicTrack Treadmill Troubleshooting',
      blurb: 'Safety key, reset breaker, iFIT screens, belt and incline faults.',
      url: '/nordictrack-treadmill-troubleshooting/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">Reseat and dry the safety key, put the Tread on a dedicated outlet that is
            not a GFCI or AFCI outlet and has no extension cord, then restart at the base switch.</strong>
            That clears most Peloton Tread problems, including the ones that look like a broken machine. A
            passcode prompt is Tread Lock, and a frozen screen usually needs a proper restart, not a repair.`,
    `For the belt, use quarter turns on the tensioning screws with the Tread unplugged, and do not
            lubricate on another brand&rsquo;s schedule. On an older Tread or Tread+, confirm the recall remedy
            first. Anything involving a key that no longer stops the belt, a broken part or a burning smell is a
            call to Peloton Member Support. Our
            <a href="/treadmill-troubleshooting/" class="text-[#5AA9FF] font-bold no-underline">treadmill troubleshooting guide</a>
            and
            <a href="/peloton-tread/" class="text-[#5AA9FF] font-bold no-underline">Peloton Tread review</a>
            cover the rest.`,
  ],
};

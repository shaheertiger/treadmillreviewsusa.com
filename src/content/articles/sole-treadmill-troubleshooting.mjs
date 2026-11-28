const th = 'text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4';
const td = 'border-b border-gray-100 py-2 pr-4 text-gray-700';

export default {
  slug: 'sole-treadmill-troubleshooting',
  title: 'Sole Treadmill Troubleshooting: Console, Belt and Speed Fixes',
  description: `Sole treadmill not working? Check the safety key and front breaker, lube the deck every 90 hours, adjust belt bolts a quarter-turn at a time, then call Sole.`,
  crumbLabel: 'Sole Treadmill Troubleshooting',
  breadcrumb: { name: 'Fault Diagnosis', url: '/problems/' },
  kicker: 'Troubleshooting',
  updated: 'November 2026',
  updatedLong: 'November 28, 2026',
  published: '2026-11-21',
  modified: '2026-11-28',
  h1: ['Sole Treadmill Troubleshooting:', 'Console, Belt, Speed and Error Codes'],
  standfirst: `Most Sole faults come down to five things: a safety key that is not in, a tripped breaker on the front of the frame, a deck that is due its 90-hour lube, a belt that needs a quarter-turn of tension or tracking, or a circuit shared with something else. Here is the order to check them in, what Sole's own manuals say to do, and what to have ready before you call Sole on 866-780-7653.`,
  ctas: [
    { label: 'Reset the Console', href: '#reset' },
    { label: 'Call Sole: What to Have Ready', href: '#support' },
  ],
  tags: [
    'sole treadmill troubleshooting',
    'sole treadmill not working',
    'sole treadmill reset',
    'sole treadmill error codes',
    'sole treadmill belt slipping',
  ],
  stickyCta: { text: 'Reset Your Sole', link: '#reset' },
  lead: `Sole treadmills are simpler machines than the iFIT-based brands they are usually compared
          with: there is no subscription console that has to boot, no trainer-led class changing the
          speed, and the touchscreen on the newer models is optional rather than the whole machine.
          That makes most Sole problems mechanical or electrical rather than software. Sole's owner's
          manuals are also unusually direct about what the owner is expected to do: lubricate the
          deck, track and tension the belt and vacuum under the motor cover. Skip those and some of
          the resulting faults are not covered by the warranty. This page works through the common
          faults in the order that finds the cause fastest, using what Sole itself publishes.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'The Short Answer',
      html: `          <p>
            <strong>When a Sole treadmill is not working, check the safety key, the power switch
            and the circuit breaker on the front of the frame, the wall outlet, and the deck
            lubrication, in that order; most faults end there.</strong> Sole's service checklist
            in its 2026 <a href="/sole-f80-treadmill/" class="text-[#0F62FE] font-medium" data-autolink>F80</a> owner's manual (checked November 2026) lists exactly those causes for
            a display that will not light, and lists high belt-to-deck friction, meaning a dry
            deck, as the cause of a belt that stops abruptly or a machine that trips its own
            breaker.
          </p>
          <ul>
            <li><strong>Safety key in and seated.</strong> Sole's manual says the treadmill will
            not power on or run without it.</li>
            <li><strong>Breaker on the front grill pushed in</strong> until it locks, and the
            <a href="/how-to-turn-on-a-treadmill/" class="text-[#0F62FE] font-medium" data-autolink>power switch</a> at the front, below the motor hood, switched on.</li>
            <li><strong>Its own 120-volt, 15-amp grounded outlet</strong>, with nothing else on
            the circuit and no ordinary extension cord.</li>
            <li><strong>Deck lubricated every 90 hours or 90 days</strong>, with Sole's
            silicone lubricant, 2 to 3 ounces per application.</li>
            <li><strong>Belt adjustments a quarter-turn at a time</strong>: both rear bolts
            equally for tension, the left bolt only for tracking.</li>
          </ul>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Sole symptom</th>
                <th class="${th}">Most likely cause</th>
                <th class="${th}">First fix</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">Display will not light at all</td><td class="${td}">Safety key, front breaker, plug, house breaker</td><td class="${td}">Reseat the key; push the front breaker in until it locks</td></tr>
              <tr><td class="${td}">Console shows LUBE</td><td class="${td}">The 90-hour lubrication reminder</td><td class="${td}">Lubricate the deck, then power the treadmill on three times to clear it</td></tr>
              <tr><td class="${td}">Console shows an E code</td><td class="${td}">Overload, motor wiring, voltage, incline or console cable</td><td class="${td}">Look the code up in your model's manual; power off and on</td></tr>
              <tr><td class="${td}">Belt slips or hesitates with each step</td><td class="${td}">Dry deck, then low tension, then the drive belt</td><td class="${td}">Lubricate; then a quarter-turn on both rear bolts</td></tr>
              <tr><td class="${td}">Belt drifts to one side</td><td class="${td}">Tracking, or the user's gait</td><td class="${td}">Quarter-turn on the left rear bolt at 3 mph</td></tr>
              <tr><td class="${td}">Tops out near 7 mph but shows more</td><td class="${td}">Low voltage at the treadmill</td><td class="${td}">Remove the extension cord; have the voltage checked</td></tr>
              <tr><td class="${td}">Trips its own breaker</td><td class="${td}">High belt/deck friction</td><td class="${td}">Lubricate the deck</td></tr>
              <tr><td class="${td}">Trips the house breaker</td><td class="${td}">Shared circuit, AFCI or GFCI breaker</td><td class="${td}">Make the treadmill the only thing on the circuit</td></tr>
              <tr><td class="${td}">SOLE+ app will not connect</td><td class="${td}">Pairing from the wrong place, Bluetooth off</td><td class="${td}">Pair from inside the app; look for the console's Bluetooth icon</td></tr>
            </tbody>
          </table></div>
          <p>
            If you own a ProForm or NordicTrack as well, or are comparing brands, our
            <a href="/proform-treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">ProForm treadmill troubleshooting</a>
            and
            <a href="/nordictrack-treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">NordicTrack treadmill troubleshooting</a>
            guides cover the iFIT machines. Several of the instructions differ in ways that matter:
            current ProForm manuals tell owners not to lubricate the belt at all, while Sole's
            manuals make regular lubrication part of the warranty, and our
            <a href="/echelon-treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">Echelon treadmill troubleshooting</a> guide notes that the original Echelon Stride&rsquo;s manual
            does not call for lubrication. Do not carry advice from one
            brand to the other without checking your own manual.
          </p>`,
    },
    {
      id: 'wont-turn-on',
      heading: 'Sole Treadmill Will Not Turn On: Key, Breaker and Outlet',
      html: `          <p>
            A Sole with a completely dark display has either lost power somewhere between the wall
            and the console or is being told not to run. Sole's own diagnosis guide, in the 2026
            F80 owner's manual (checked November 2026), gives the causes for "display does not
            light" in this order: tether cord not in position; circuit breaker on the front grill
            tripped; plug disconnected; household circuit breaker tripped; and only then a
            treadmill defect, at which point you contact your Sole dealer. That order is the right
            one to follow.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">The safety key</h3>
          <p>
            Sole calls it both the safety key and the tether cord. The 2026 F80 manual says to
            place the key in its position on the console and that the treadmill will not start and
            operate without it; the getting-started section adds that it will not power on without
            it. Pulling the key stops the belt with what the manual describes as a one to two step
            coast, depending on speed. On touchscreen consoles a message saying the safety key has
            been removed and the machine stopped appears, and putting the key back lets you carry
            on. On the simpler LED consoles, Sole's 2026 <a href="/sole-f63-treadmill/" class="text-[#0F62FE] font-medium" data-autolink>F63</a> manual notes that removing the key is
            similar to entering sleep mode, so a missing key can look exactly like a dead machine. Replacement keys that fit Sole machines are covered in our <a href="/best-treadmill-safety-keys/" class="text-[#0F62FE] font-medium">best treadmill safety keys</a>, along with a two-minute test that the key really stops the belt.
          </p>
          <p>
            Check the key is in, push it fully home, and make sure it is the key that came with the
            machine. Keys get taken out to keep children off the treadmill and put somewhere
            sensible, which is the commonest reason a working Sole looks broken. Our guide to a
            <a href="/treadmill-safety-key-not-working/" class="text-[#0F62FE] font-medium">treadmill safety key that is not working</a>
            covers a key that is in but not registering, including a dirty recess and a weakened
            magnet.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">The power switch and the front breaker</h3>
          <p>
            Sole puts the power switch at the front of the treadmill, below the motor hood, next to
            a circuit breaker. If that breaker has tripped, the manual's instruction is to push it in
            until it locks. A breaker that trips again as soon as the belt is loaded is telling you
            something; the manual's listed cause for "treadmill trips on board 15 amp circuit" is
            high belt and deck friction, so the next step is the lubrication section below rather
            than pressing the breaker in again and again.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">The outlet and the cord</h3>
          <p>
            Sole asks for a 120-volt, 15-amp grounded outlet with only the treadmill plugged into
            the circuit. Its electrical instructions say not to use an extension cord unless it is
            14 AWG or heavier with only one outlet on the end, and never to defeat the grounding
            plug. Test the outlet with a lamp, check the house panel, and look at any GFCI outlet on
            the same run. Confirm the power cord is fully seated where it enters the treadmill; it
            can work loose after the deck is folded or the machine is moved.
          </p>
          <p>
            If power reaches the machine but the console still stays dark, our general guide to a
            <a href="/treadmill-wont-turn-on/" class="text-[#0F62FE] font-medium">treadmill that won't turn on</a>
            covers the console cable and controller in more depth. On a Sole that is still in its
            parts warranty, a dark console with confirmed power is the point to call Sole rather
            than open anything, for the reasons set out in the warranty section.
          </p>`,
    },
    {
      id: 'reset',
      heading: 'How to Reset a Sole Treadmill',
      html: `          <p>
            Owners searching for a Sole reset are usually after one of four different things, and
            Sole's manuals describe each of them.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Resetting the console during or after a workout</h3>
          <p>
            On the LED-console models, Sole's 2026 F63 manual and its 2020 <a href="/sole-f85-treadmill/" class="text-[#0F62FE] font-medium" data-autolink>F85</a> manual (both
            checked November 2026) describe the Stop key as a three-stage control: press it once to
            pause, a second time to end the program and see the workout summary, and a third time
            to return to the start-up screen. Holding Stop down for more than three seconds resets
            the console. A paused workout also resets itself after five minutes and returns to the
            start-up screen, which is why a treadmill left paused while you answer the door comes
            back with its numbers cleared.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">A full power cycle</h3>
          <p>
            For a console that has frozen, will not respond to its keys or shows an error, the
            reset that works is a proper power-down. Remove the safety key, switch off at the power
            switch on the front, unplug the cord at the wall and wait. For two of the console
            communication codes, Sole's 2026 manuals specify the wait: after two minutes without
            power, power it on again. Waiting two minutes is a sensible minimum for any console
            fault, because a ten-second unplug often does not clear it. Plug back in, switch on,
            let the console start up and then insert the key.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Clearing the LUBE message</h3>
          <p>
            The LUBE message is a reminder, not a fault. Sole's 2026 manuals say the console shows
            it after 90 hours of use, and that once you have lubricated the deck you clear it by
            powering the treadmill on three times. The 2026 F63 manual also lists a lube message
            reset inside the console's engineering menu.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Sleep mode, which looks like a fault</h3>
          <p>
            Sole consoles go to sleep after a period of inactivity: 15 minutes in the 2026 manuals,
            30 minutes in the 2020 F85 manual. A sleeping console draws very little power and wakes
            on a key press, so press a key before assuming the machine has died. The 2026 F80
            manual gives three sleep settings: On, Off (the console stays lit while the power is on)
            and Retail, which runs a demonstration video after three minutes. On LED displays you
            switch between On and Off by holding Stop and Display for five seconds; on LCD displays
            by holding Stop, Enter and Display for five seconds; on the touchscreen through Sleep
            Mode in the settings. A new machine that keeps playing a demo has simply been left in
            the retail setting.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Calibration and the engineering menu</h3>
          <p>
            Sole's manuals also describe a calibration procedure and an engineering or maintenance
            menu, both entered by holding particular keys while the safety key is inserted. The
            key combination differs between models and years: the 2026 F63 manual uses Start and
            the Speed 3 key, the 2020 F85 manual uses Start and Speed up. The F63 routine also asks
            you to confirm roller, motor and pulley sizes, and the F85 manual warns that the belt
            starts without warning during calibration, so nobody should be standing on it. Use only
            the sequence in the manual for your model, and keep the default values it lists unless
            Sole tells you otherwise.
          </p>`,
    },
    {
      id: 'error-codes',
      heading: 'Sole Treadmill Error Codes: What the Manual Says',
      html: `          <p>
            Sole error codes are not universal. The same letters have meant different things on
            different consoles: the 2020 F85 manual uses a single E1 code for a belt that stops
            (run calibration if the belt moved first, contact service if it never moved), while
            the 2026 manuals use a numbered set from E01 upward. Look the code up in the manual for
            your model and year before acting on it. Sole publishes current manuals on its website
            under Support.
          </p>
          <p>
            For reference, this is the table in Sole's 2026 F80 owner's manual (checked November
            2026); the 2026 F63 manual lists the same codes except E23, which applies to the F80's
            touchscreen. The explanations are summarised from the manual. Several of the remedies it
            lists, such as replacing the motor or controller, are work for Sole's service team,
            not the owner.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Code (2026 F80)</th>
                <th class="${th}">Meaning in the manual</th>
                <th class="${th}">Owner's first step</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">LUBE</td><td class="${td}">Reminder to check lubrication under the belt</td><td class="${td}">Lubricate; power on three times to clear</td></tr>
              <tr><td class="${td}">E01</td><td class="${td}">Over-current protection: overloaded or something stuck</td><td class="${td}">Power off and on; check nothing is jammed; lubricate</td></tr>
              <tr><td class="${td}">E02</td><td class="${td}">Hall sensor fault: motor not properly connected</td><td class="${td}">Call Sole service</td></tr>
              <tr><td class="${td}">E03</td><td class="${td}">Hardware current too large</td><td class="${td}">Power off and on; call service if it returns</td></tr>
              <tr><td class="${td}">E04</td><td class="${td}">Phase loss: motor not properly connected</td><td class="${td}">Call Sole service</td></tr>
              <tr><td class="${td}">E05</td><td class="${td}">Undervoltage</td><td class="${td}">Check the outlet voltage and that the plug is firmly in</td></tr>
              <tr><td class="${td}">E06</td><td class="${td}">Overvoltage</td><td class="${td}">Have the supply voltage checked</td></tr>
              <tr><td class="${td}">E3</td><td class="${td}">Incline adjustment error</td><td class="${td}">Check the incline cable; recalibrate</td></tr>
              <tr><td class="${td}">E22</td><td class="${td}">Console and control board not communicating</td><td class="${td}">Two minutes without power, then on; check the console cable</td></tr>
              <tr><td class="${td}">E23</td><td class="${td}">Touchscreen not communicating with LED console</td><td class="${td}">Two minutes without power, then on</td></tr>
              <tr><td class="${td}">E31</td><td class="${td}">Over temperature</td><td class="${td}">Let the machine cool before running</td></tr>
            </tbody>
          </table></div>
          <p>
            Two patterns are worth noticing. First, the overload codes come back to friction: the
            manual's own suggestions for E01 include checking that nothing is stuck and adding
            lubricant. A dry deck makes the motor work harder at every footstrike, and a controller
            that protects itself by stopping is doing its job. Second, the communication and
            voltage codes are often cured by the outlet and a clean power cycle rather than a part.
            The manual also says to check for a <a href="/treadmill-burning-smell/" class="text-[#0F62FE] font-medium" data-autolink>burning smell</a> when the motor runs; if you notice
            one, stop and call Sole rather than resetting the code again.
          </p>
          <p>
            Write down the exact code, when it appeared (at power-up, the moment you pressed Start,
            a few seconds in, or well into a session) and what the belt and incline were doing. That
            is the information Sole's service team will ask for.
          </p>`,
    },
    {
      id: 'belt',
      heading: 'Sole Belt Slipping, Hesitating or Off-Centre',
      html: `          <p>
            Sole treats belt tension and tracking as the owner's job. Its 2026 F80 manual says
            proper belt tracking is an owner responsibility common to all treadmills, and states in
            capitals that damage to the running belt from improper tracking or tension adjustments
            is not covered by the Sole warranty. So it pays to do these adjustments the way Sole
            describes, and to stop as soon as the problem is gone.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Slipping: lubricate first, then tension</h3>
          <p>
            Before touching the bolts, rule out a dry deck. A belt that drags on an unlubricated
            deck can feel just like a loose belt, and tightening it only adds load. If the deck is
            due its lube, do that first. If it is not, and the belt still slips or hesitates under
            a firm step, adjust the tension.
          </p>
          <ol>
            <li>Switch off, remove the safety key and unplug. Sole's belt-adjustment guide on
            soletreadmills.com (checked November 2026) says never to make a mechanical adjustment
            with the treadmill running.</li>
            <li>Use the 6 mm L-shaped Allen wrench supplied with the machine. The two tension bolts
            are at the rear roller, at the end of the step rails, reached through a small hole in
            each end cap.</li>
            <li>Turn each bolt a quarter-turn clockwise, by the same amount on both sides. If the
            sides are turned unevenly the belt will start to track to one side.</li>
            <li>Plug back in, walk on the belt at 2 to 3 mph for 30 to 60 seconds and check whether
            it still slips or hesitates.</li>
            <li>Repeat in equal quarter-turns only if needed, and stop once the slipping stops.</li>
          </ol>
          <p>
            The manual's guidance is to tighten the rear roller only enough to prevent slippage at
            the front roller, and it warns that overtightening causes belt damage and premature
            bearing failure. It also notes that if you have tightened the belt a lot and it still
            slips, the problem may be the drive belt under the motor cover, which connects the
            motor to the front roller, and that tightening it should be done by a trained service
            person. Our guide to a
            <a href="/treadmill-belt-slipping/" class="text-[#0F62FE] font-medium">treadmill belt that slips</a>
            goes through how to tell the walking belt, the deck and the drive belt apart.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Off-centre: the left bolt only</h3>
          <p>
            Sole's tracking procedure differs from the generic advice to turn whichever bolt is on
            the side the belt has drifted towards. Both the 2026 F80 manual and Sole's belt guide
            make tracking adjustments on the left rear bolt only, with the belt running at 3 mph:
          </p>
          <ul>
            <li>If the belt is too close to the <strong>left</strong> side, turn the left bolt a
            quarter-turn <strong>clockwise</strong>.</li>
            <li>If it is too close to the <strong>right</strong> side, turn the left bolt
            <strong>counter-clockwise</strong>.</li>
            <li>Wait a few minutes after each quarter-turn; the manual warns that a small
            adjustment can make a dramatic difference that is not apparent straight away.</li>
            <li>Continue in quarter-turns until the belt settles in the centre of the deck.</li>
          </ul>
          <p>
            Keep fingers, loose clothing and the Allen wrench well clear of the rear roller while
            the belt is moving. Sole also points out that some drift is normal and depends on the
            user: someone who favours one leg will push the belt to one side. If that is your
            natural gait, its diagnosis guide suggests tracking the belt slightly off-centre to the
            side opposite the direction it drifts, so it settles in the middle when you are on it.
            Our step-by-step guide on
            <a href="/how-to-center-treadmill-belt/" class="text-[#0F62FE] font-medium">how to center a treadmill belt</a>
            explains why a belt moves the way it does and how to avoid chasing it from side to side.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Thumping and squeaking</h3>
          <p>
            A rhythmic thump on a brand-new Sole is usually not a fault. The 2026 F80 manual
            explains that a new belt that has sat in its box for a few months takes on the shape of
            the rollers where it wraps around them, causing a thump each time that section passes
            the rollers, and that it wears in and goes away after a few workouts with no need to
            contact service. A thump that persists, or starts on an older machine, is worth
            investigating: a damaged belt, a seam or a roller. A squeak in time with your steps is
            more often a frame or upright bolt that has worked loose after assembly or a move. Our
            guide to a
            <a href="/treadmill-squeaking-noise/" class="text-[#0F62FE] font-medium">treadmill squeaking noise</a>
            goes through the likely sources one at a time; always unplug before checking bolts.
          </p>`,
    },
    {
      id: 'lubrication',
      heading: 'How to Lubricate a Sole Treadmill (and When)',
      html: `          <p>
            Lubrication is where Sole differs most from some other brands, and where the most Sole
            faults start. Sole's 2026 F80 manual (checked November 2026) is clear that the belt and
            deck come pre-lubricated, and that subsequent lubrication should be done every 90 hours
            of use or every 90 days, whichever comes first, because the lubricant can dry out even
            on a machine that is rarely used. It adds that failure to lubricate the deck at regular
            intervals may void the warranty, and that a dried-out deck puts undue stress on the
            motor, drive belt and motor control board.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Task (2026 F80 manual)</th>
                <th class="${th}">How often</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">Wipe the belt edges and under the belt edge</td><td class="${td}">Monthly</td></tr>
              <tr><td class="${td}">Vacuum under the treadmill</td><td class="${td}">Monthly</td></tr>
              <tr><td class="${td}">Inspect belt tracking, adjust if necessary</td><td class="${td}">Monthly</td></tr>
              <tr><td class="${td}">Reach under the belt to check lubricant is present</td><td class="${td}">Every other month</td></tr>
              <tr><td class="${td}">Remove the motor cover (unplugged) and vacuum inside</td><td class="${td}">Every other month</td></tr>
              <tr><td class="${td}">Lubricate the deck</td><td class="${td}">Every 90 hours or 90 days, or sooner if dry</td></tr>
            </tbody>
          </table></div>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">What to use</h3>
          <p>
            Sole's manual says not to use anything other than Sole-approved lubricant, which it
            describes as 100% food-grade silicone lubricant for treadmills, and specifically not
            silicone caulk or a spray or foam product. One tube comes with the treadmill; more can
            be ordered from Sole or an authorised dealer, along with a Lube-n-Walk kit. Each
            application uses 2 to 3 ounces.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">The procedure</h3>
          <ol>
            <li>Clean between the belt and deck first. Push a clean, non-fraying rag or old T-shirt
            under the belt halfway between the motor cover and the rear, grip it on both sides and
            drag it the length of the belt once or twice.</li>
            <li>Switch off and unplug the treadmill.</li>
            <li>Measure 18 inches back from the edge of the motor cover. Reach under the belt about
            4 to 6 inches in from one edge and squirt a line of lubricant about 1/8 inch wide and 15
            inches long, in an S pattern running perpendicular to the motor cover.</li>
            <li>Repeat on the other side.</li>
            <li>Plug in, switch on, and walk on the belt at a moderate speed for five minutes to
            spread the lubricant.</li>
            <li>If the LUBE message is showing, power the treadmill on three times to clear it.</li>
          </ol>
          <p>
            Sole's manual says to check for lubricant every other month and to lubricate if there
            is none, even if the LUBE indicator has not come on. That matters for a machine that
            gets light use, because the reminder counts hours and the lubricant dries out with
            time. For a brand-neutral explanation of why a dry deck causes slipping, overheating
            and breaker trips, see our guides on how often to lubricate a treadmill and treadmill
            belt lubrication in the related guides below.
          </p>`,
    },
    {
      id: 'speed-power',
      heading: 'Speed Capped, Breaker Trips, Static Shut-Offs and Incline',
      html: `          <p>
            Several Sole symptoms look like a failing motor or board but trace back to the
            electricity supply or the deck. Sole's diagnosis guide covers each of them.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Only reaches about 7 mph but shows more</h3>
          <p>
            Sole's diagnosis guide says this means the motor is getting power but the AC voltage at
            the treadmill is too low. Its remedy is not to use an extension cord, or if one is
            unavoidable to keep it as short and heavy as possible, and to contact an electrician or
            your Sole dealer about low household voltage. The 2026 F80 manual asks for a minimum of
            120 volts AC and notes that a voltage variation of 10% or more can affect performance
            and is not covered by the warranty.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">The belt stops suddenly when the key is pulled</h3>
          <p>
            Pulling the key should bring the belt to a stop within a step or two, but a belt that
            stops abruptly is, according to Sole, a sign of high belt and deck friction. The fix is
            lubrication, not an adjustment to the console.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Trips the treadmill breaker or the house breaker</h3>
          <p>
            If the treadmill's own 15-amp breaker trips, Sole's guide again points to belt and deck
            friction. If the house breaker trips but the treadmill breaker does not, check that the
            treadmill is the only appliance on that circuit. Sole's 2026 manual explains that AFCI
            and GFCI breakers may trip occasionally because of the high inrush current of a
            treadmill's motor and drive electronics, which it says affects all brands. It lists
            devices that can add to the problem on the same circuit, including fluorescent lights
            with electronic ballasts, a coffee maker, a space heater and a hair dryer. It also
            says its treadmills have built-in surge suppressors to reduce nuisance tripping, and
            that AFCI and GFCI breakers from Eaton, Leviton and Schneider Electric did not trip in
            Sole's testing with nothing else on the circuit. Changing a breaker is a job for an
            electrician.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">The console shuts off when touched on a cold day</h3>
          <p>
            Sole lists this one specifically: <a href="/treadmill-static-shock/" class="text-[#0F62FE] font-medium" data-autolink>static electricity</a> discharging through you into the
            console can crash the computer if the treadmill is not grounded. The fix is a properly
            grounded outlet, as described in the grounding instructions at the front of the
            manual, not a new console. In very dry winter air an anti-static mat under the
            treadmill can also help.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Incline stuck or wrong</h3>
          <p>
            On the 2026 models, an incline fault shows as E3, and the manual's steps are to check
            the incline cable is properly connected, reconnect it and power on, then recalibrate.
            With the machine unplugged, look for anything under the deck in the incline's path
            before running anything. Calibration uses the model-specific key sequence described in
            the reset section, with nobody on the belt. If the incline motor does not respond after
            a calibration, contact Sole service.
          </p>`,
    },
    {
      id: 'app-bluetooth',
      heading: 'SOLE+ App and Bluetooth Not Connecting',
      html: `          <p>
            Sole treadmills connect to the free SOLE+ app over Bluetooth, and most connection
            problems come from pairing in the wrong place. Sole's 2026 F80 and F63 manuals (checked
            November 2026) describe the steps: download SOLE+ from the Apple App Store or Google
            Play, make sure Bluetooth is turned on on the phone or tablet, then, inside the app,
            tap the icon at the top right to search for Sole equipment and tap Connect when it
            appears. When the app and treadmill are synced, the Bluetooth icon on the console
            lights up. Pair from the app, not from the phone's Bluetooth settings menu.
          </p>
          <p>
            The manuals say SOLE+ can sync workout data to Apple Health, Google Health Connect,
            Strava and MapMyFitness. If workouts are not appearing in one of those, check the link
            inside the SOLE+ app before suspecting the treadmill.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Linking a touchscreen profile</h3>
          <p>
            On touchscreen consoles such as the 2026 F80, each user profile (up to nine, each with
            an optional passcode) can be linked to a SOLE+ account by scanning QR codes on the
            console: the first to download the app, the second from the scanner inside the app.
            The manual says a console profile cannot be linked to more than one SOLE+ account at a
            time, which is the usual reason a second family member cannot link the same profile.
            Give each person their own profile. Some features, such as virtual events, need the
            profile to be linked.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Music and heart rate</h3>
          <p>
            Sole consoles with speakers appear in a phone's ordinary Bluetooth menu under the name
            "BT-Speaker", and the 2026 manual says that is where you connect for music, separately
            from the app. Bluetooth heart rate wearables connect to the console as well, and the
            manual notes they can work while the app is in use; put the strap or band on first,
            then connect. Its heart rate programs are intended for Bluetooth wearables only. If no
            pulse shows, check the strap's battery, make sure it is not paired to another device,
            and wet the sensors.
          </p>
          <p>
            For an app that will not find the treadmill at all: close SOLE+ fully and reopen it,
            keep the phone close to the console, turn the phone's Bluetooth off and on, and power
            cycle the treadmill. A phone already connected to the console through another fitness
            app may be holding the connection. The console's USB port, incidentally, is for
            charging only; the 2026 F80 manual says it supplies up to 5 volts at 1.5 amps and cannot
            save workout data to a USB drive.
          </p>`,
    },
    {
      id: 'warranty-serial',
      heading: 'Sole Warranty and Finding Your Serial Number',
      html: `          <p>
            Before you buy a part or book a technician, find your serial number and check your
            warranty. Both decide what happens next.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Where the serial number is</h3>
          <p>
            Sole's support FAQ (checked November 2026) says the serial number is a 16-digit number
            printed on a burgundy sticker just above the barcode, and that on treadmills it is on the
            front of the lower base. Sole's manuals include a space at the front to write it down,
            which is worth doing on the day you assemble the machine. Sole's service request form
            asks for the serial number, and the warranty excludes products whose original serial
            numbers have been removed or altered.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">What the warranty covers</h3>
          <p>
            Sole's warranty depends on the model and on when it was made, so the document with your
            machine is the one that counts. Three of Sole's own manuals, all checked in November
            2026, show how much the terms vary:
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Manual</th>
                <th class="${th}">Frame and motor</th>
                <th class="${th}">Parts</th>
                <th class="${th}">Labour</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">2026 F80 (effective February 1, 2026)</td><td class="${td}">Lifetime</td><td class="${td}">3 years</td><td class="${td}">1 year</td></tr>
              <tr><td class="${td}">2026 F63</td><td class="${td}">Lifetime</td><td class="${td}">2 years</td><td class="${td}">1 year</td></tr>
              <tr><td class="${td}">2020 F85</td><td class="${td}">Lifetime (deck lifetime too)</td><td class="${td}">5 years, other components</td><td class="${td}">2 years</td></tr>
            </tbody>
          </table></div>
          <p>
            Cosmetic items such as grips and console overlays have 90 days in all three. The 2026
            F80 warranty also sets out conditions that matter when you are troubleshooting:
          </p>
          <ul>
            <li><strong>Original purchaser only.</strong> Warranties do not transfer, so a
            second-hand Sole has none. Sole's FAQ says the same.</li>
            <li><strong>Registration.</strong> The card is meant to be returned within 10 days of
            purchase, but a warranty can still be registered later with proof of purchase such as
            a receipt, bank statement or order email.</li>
            <li><strong>Maintenance is your job.</strong> Belt tracking, tension, vacuuming under
            the motor cover and lubrication are listed as the owner's responsibilities, and lack
            of consistent deck lubrication is an exclusion.</li>
            <li><strong>Where it lives.</strong> The warranty is void if the treadmill is not in a
            climate-controlled, insulated space; the manual gives a garage, a carport and outdoors
            as examples. Coverage is limited to residential use in the continental United States.</li>
            <li><strong>Power and parts.</strong> Damage from power surges, inadequate power
            supply, non-Sole parts or service by anyone other than an authorised Sole service
            company is excluded.</li>
          </ul>
          <p>
            Our overview of
            <a href="/sole-fitness/" class="text-[#0F62FE] font-medium">Sole Fitness treadmills</a>
            sets the warranty against the range and the brand's strengths and weaknesses, which
            helps if a repair has you wondering whether to replace the machine instead.
          </p>`,
    },
    {
      id: 'support',
      heading: 'When to Call Sole Support and What to Have Ready',
      html: `          <p>
            Call Sole once the simple checks are done and the fault is still there, and
            straightaway for anything that looks unsafe. In particular:
          </p>
          <ul>
            <li>The machine is within its parts or labour warranty and the fault involves the
            motor, controller, drive belt or console.</li>
            <li>Power is confirmed at the treadmill but the console stays dark.</li>
            <li>An E02 or E04 code, which the 2026 manuals tie to the motor connection, or any
            code that returns after a full power cycle.</li>
            <li>The belt still slips after lubrication and careful tensioning, which Sole says may
            be the drive belt, a service-person job.</li>
            <li>Any burning smell, scorching, or a breaker that trips the moment the belt starts on
            a freshly lubricated deck.</li>
            <li>The belt does not stop when the safety key is pulled. Stop using the treadmill
            until it is fixed.</li>
          </ul>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">How to contact Sole</h3>
          <p>
            Sole's 2026 manuals and its support pages (checked November 2026) give the phone number
            866-780-7653 for technical support and service questions, and its FAQ gives
            info@soletreadmills.com as the email address. The warranty's service steps are, in
            order: contact the authorised Sole dealer you bought from, or submit a service request
            online through the Service and Parts Request page under Support on soletreadmills.com
            with your serial number, contact details and a short description; if you are unsure
            where to get service, call the service department. Sole's manuals also ask owners to
            call before returning a treadmill to a retailer. Never ship anything to Sole without a
            return authorisation number; the warranty says units arriving without one are
            refused.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Have this ready</h3>
          <ul>
            <li><strong>The serial number</strong> from the burgundy sticker on the front of the
            lower base, and the model name.</li>
            <li><strong>Proof of purchase</strong> with the date, and the dealer you bought it
            from.</li>
            <li><strong>The exact error code</strong> and when it appears.</li>
            <li><strong>Photos or a short video</strong> of the fault. The 2026 warranty says the
            service department troubleshoots before sending a field technician, that Sole may ask
            for pictures or video by email, and that providing them and helping with diagnosis is
            part of the owner's responsibilities.</li>
            <li><strong>Your maintenance history</strong>: when the deck was last lubricated and any
            belt adjustments you have made, since both bear on warranty cover.</li>
          </ul>
          <p>
            Out of warranty, Sole can still sell the correct part for your serial number. Whether
            it is worth fitting comes down to the cost of the part and a technician visit against
            the value of the machine; a Sole with a lifetime frame and motor is often worth
            repairing where a cheaper treadmill would not be.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'How do I reset my Sole treadmill?',
      a: `For a frozen console or an error, remove the safety key, switch off at the front power switch, unplug at the wall and wait at least two minutes before powering back on. On LED consoles, holding Stop for more than three seconds resets the console. To clear the LUBE message after lubricating, Sole's manuals say to power the treadmill on three times.`,
    },
    {
      q: 'Why won\'t my Sole treadmill turn on?',
      a: `Sole's diagnosis guide lists the causes in order: the safety key or tether is not in position, the circuit breaker on the front grill has tripped (push it in until it locks), the plug is out, or the house breaker has tripped. Only after those does it suggest a treadmill defect. Also check the power switch at the front, below the motor hood.`,
    },
    {
      q: 'How often should I lubricate a Sole treadmill?',
      a: `Sole's 2026 manuals say every 90 hours of use or every 90 days, whichever comes first, using 2 to 3 ounces of Sole-approved 100% silicone lubricant. Check under the belt every other month and lubricate if it is dry, even if the LUBE light has not come on. Failing to lubricate regularly may void the warranty.`,
    },
    {
      q: 'What does E01 mean on a Sole treadmill?',
      a: `In Sole's 2026 F80 and F63 manuals, E01 is over-current protection: the treadmill is overloaded or something is stopping the motor turning. Power off and on, check nothing is jammed and that the deck is lubricated. If it returns or you smell burning, contact Sole service. Codes differ between model years, so check your own manual.`,
    },
    {
      q: 'How do I fix a Sole treadmill belt that drifts to one side?',
      a: `Sole adjusts tracking on the left rear bolt only, with the belt running at 3 mph. If the belt is too close to the left, turn that bolt a quarter-turn clockwise; if too close to the right, counter-clockwise. Wait a few minutes after each turn, and keep hands away from the rear roller.`,
    },
    {
      q: 'Where is the serial number on a Sole treadmill?',
      a: `Sole's support FAQ says it is a 16-digit number on a burgundy sticker just above the barcode, on the front of the lower base of the treadmill. You need it for warranty registration and for a service request.`,
    },
    {
      q: 'Is my Sole treadmill warranty transferable?',
      a: `No. Sole's warranty and its support FAQ both say warranties apply to the original purchaser only and do not transfer, so a second-hand Sole has no warranty. Terms also vary by model and year: the 2026 F80 manual lists lifetime frame and motor, 3 years parts and 1 year labour.`,
    },
  ],
  mistakesHeading: 'Common Mistakes With Sole Treadmill Troubleshooting',
  mistakesIntro: `Sole faults are usually simple. These four are how owners turn a simple one into a repair bill or a voided warranty.`,
  mistakes: [
    {
      title: 'Skipping the 90-hour lube because the light has not come on',
      body: `The LUBE reminder counts hours, but the lubricant also dries with time. Sole's manual asks for lubrication every 90 hours or 90 days and a check under the belt every other month. A dry deck causes slipping, E01 overloads and breaker trips, and the warranty excludes damage from a lack of consistent lubrication.`,
    },
    {
      title: 'Cranking the tension bolts to stop a slip',
      body: `Sole says to tighten only enough to stop slippage, a quarter-turn on each side at a time, and warns that overtightening damages the belt and bearings. Damage from improper tension is not covered. If the belt still slips after a few turns, the drive belt under the hood may be the cause, and that is a job for a service technician.`,
    },
    {
      title: 'Turning both bolts to fix tracking',
      body: `Sole's procedure for a belt that drifts uses the left rear bolt only, a quarter-turn at a time at 3 mph, waiting a few minutes between turns. Turning the bolt on whichever side the belt has drifted to, as generic guides suggest, can leave you chasing the belt from side to side.`,
    },
    {
      title: 'Running it in the garage or on a shared circuit',
      body: `Sole's warranty is void if the treadmill is not in a climate-controlled, insulated space, and a garage is the example it gives. It also wants a 120-volt, 15-amp grounded outlet with nothing else on the circuit. Space heaters, coffee makers and long extension cords cause many of the breaker trips and low-speed faults owners blame on the treadmill.`,
    },
  ],
  relatedHeading: 'Related Fault Diagnosis Guides',
  related: [
    {
      kicker: 'Maintenance',
      title: 'How Often to Lubricate a Treadmill',
      blurb: 'Hours, months and the signs a deck has run dry.',
      url: '/how-often-to-lubricate-treadmill/',
    },
    {
      kicker: 'Electrical',
      title: 'Treadmill Tripping the Breaker',
      blurb: 'Shared circuits, AFCI and GFCI breakers, and real faults.',
      url: '/treadmill-trips-breaker/',
    },
    {
      kicker: 'Diagnosis',
      title: 'Treadmill Console Not Working',
      blurb: 'A blank display or dead buttons, power or console.',
      url: '/treadmill-console-not-working/',
    },
    {
      kicker: 'Lubrication',
      title: 'Treadmill Belt Lubrication',
      blurb: 'How to lube a treadmill deck, step by step.',
      url: '/treadmill-belt-lubrication/',
    },
    {
      kicker: 'Warranty',
      title: 'Treadmill Warranty Guide',
      blurb: 'Frame, motor, parts and labour cover compared across brands.',
      url: '/treadmill-warranty-guide/',
    },
    {
      kicker: 'Sole',
      title: 'Best Sole Treadmills',
      blurb: 'The current range, model by model.',
      url: '/best-sole-treadmills/',
    },
    {
      kicker: 'Fixes',
      title: 'XTERRA Treadmill Troubleshooting',
      blurb: 'Power, belt, console and error codes.',
      url: '/xterra-treadmill-troubleshooting/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">Key, front breaker, its own outlet, then the deck.</strong>
            Most Sole problems are a safety key that is out, a tripped breaker on the front grill,
            a circuit shared with something else, or a deck that has gone past its 90-hour lube.
            None of them needs a part, and Sole's own diagnosis guide lists them first.`,
    `<strong class="text-white">Adjust the belt the way Sole says, and call before you open it.</strong>
            Tension is a quarter-turn on both rear bolts, tracking a quarter-turn on the left bolt
            at 3 mph, and both stop as soon as the problem does. Look up error codes in the manual
            for your model and year, have your serial number and a video ready, and call Sole on
            866-780-7653. Our
            <a href="/proform-treadmill-troubleshooting/" class="text-[#5AA9FF] font-bold no-underline">ProForm troubleshooting guide</a>
            shows how differently the iFIT brands handle the same faults.`,
  ],
};

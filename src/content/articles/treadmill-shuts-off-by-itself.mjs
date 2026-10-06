export default {
  slug: 'treadmill-shuts-off-by-itself',
  title: 'Treadmill Shuts Off by Itself? (2026): Diagnose It by When It Stops',
  description:
    'A treadmill that keeps stopping is usually telling you when and why. Sort the fault by timing — at start, after minutes, under load, at speed — and check the cheap causes first.',
  crumbLabel: 'Treadmill Shuts Off by Itself',
  breadcrumb: { name: 'Fault Diagnosis', url: '/problems/' },
  kicker: 'Troubleshooting',
  updated: 'October 2026',
  updatedLong: 'October 6, 2026',
  published: '2026-10-06',
  socialProof: '2.4k',
  h1: ['Treadmill Shuts Off', 'by Itself?'],
  standfirst:
    'When a treadmill stops on its own matters more than the fact that it stops. Immediately, after twenty minutes, only with you on it, only at the top of the speed range — each points somewhere different, and most of the answers are cheap.',
  ctas: [
    { label: 'Sort It by Timing', href: '#when-it-stops' },
    { label: 'Is It the Board?', href: '#controller-board' },
  ],
  tags: ['treadmill shuts off by itself', 'treadmill keeps stopping', 'treadmill stops after a few minutes', 'treadmill thermal cut-out', 'treadmill troubleshooting'],
  stickyCta: { text: 'Sort It by Timing', link: '#when-it-stops' },
  lead: `A treadmill that cuts out mid-session is the most misdiagnosed fault in home fitness
          equipment, mainly because it works perfectly the moment you go to look at it. The way
          through is to stop asking what is broken and start asking when it stops — because the
          timing narrows a dozen candidates down to two or three.`,
  note: `<strong class="text-gray-900">Before anything else.</strong> Unplug the treadmill at the
          wall before removing the motor hood, touching the belt or reaching under the deck. The
          safety key is not an isolator, and controller boards can hold a charge after
          disconnection. If you smell burning, see sparking, notice smoke, or the belt moves when
          the machine is off, stop using it and get it looked at — those are not things to
          troubleshoot.`,
  sections: [
    {
      id: 'when-it-stops',
      heading: 'Start With When It Stops',
      html: `          <p>
            Before you touch anything, run the machine through a normal session and pay attention
            to two things: what the console does when the belt stops, and how long into the
            session it happens. Those two observations do most of the diagnostic work for you.
          </p>
          <p>
            <strong>What the console does.</strong> There are three distinct patterns, and they
            point in different directions. If the whole machine goes dark — console and belt
            together — power is being lost, and the cause is upstream of the electronics: the
            safety key, the machine's own reset switch, the outlet, the household breaker or the
            cord. If the belt stops but the console stays lit, usually with an error code or a
            message, the controller has decided to stop the motor, which means it detected
            something it did not like. If the console resets itself and comes back to its start
            screen, the supply voltage dipped far enough for the electronics to reboot.
          </p>
          <p>
            <strong>When it happens.</strong> Then match the timing:
          </p>
          <ul>
            <li><strong>Within seconds of starting</strong> — safety key, supply sag at start-up,
            an extension cord, a speed-sensor fault, or a deck so dry the motor cannot get the
            belt moving under you.</li>
            <li><strong>After a fairly consistent number of minutes</strong> — heat. Thermal
            protection on the motor or controller, usually caused by friction and helped along by
            dust. Occasionally an idle or program timer.</li>
            <li><strong>Only with you on it, never empty</strong> — load. Deck friction, belt
            tension, user weight against the machine's rating, or worn motor brushes.</li>
            <li><strong>Only at high speed or steep incline</strong> — peak current demand. The
            supply, the circuit, the incline motor, or a controller near the end of its life.</li>
            <li><strong>Randomly, or when you touch the console</strong> — a connection. The safety
            key clip, the wiring at the base of the upright, or the power cord inlet.</li>
          </ul>
          <p>
            Write the pattern down, including any error code, before you unplug anything — many
            codes clear on a power cycle and you will want them later. Then work through the
            sections below in order, because they run from free to expensive.
          </p>`,
    },
    {
      id: 'safety-key',
      heading: 'The Safety Key and Its Clip',
      html: `          <p>
            The safety key is the cheapest explanation for a treadmill that stops by itself, and
            it is the one people rule out too quickly because the key is visibly in place.
          </p>
          <p>
            On most home machines the key is a magnet in a plastic housing that sits against a
            switch behind the console. The magnetic field holds the switch closed, and the
            moment it weakens the machine stops the belt. That is the design working as intended:
            the key exists so the belt stops when someone comes off the back. The problem is that
            a key can sit right on the edge of its working range, and then anything that moves it
            a millimetre — vibration from your stride, the console flexing as you grab the
            handrails, the lanyard tugging as your hips rotate — breaks the circuit.
          </p>
          <p>
            The signature is a stop that seems random but correlates with movement: it happens
            when you reach for a water bottle, when you swing your arms harder, when you lean on
            the console to change speed. Check three things. Is the recess clean, or is there lint
            and dust stopping the key seating fully? Has the magnet come loose inside its housing,
            so it rattles? And is the clip on your clothing tugging the key when you are running
            in a normal position — clip it to a firm waistband, not a loose shirt hem, and give
            the lanyard enough slack for your natural stride.
          </p>
          <p>
            Magnets weaken with age, and a key that is several years old can look perfect while
            being marginal. Replacement keys are inexpensive for most mainstream machines and are
            the obvious first purchase if everything else in this section checks out.
          </p>
          <p>
            What not to do: stick a spare magnet over the switch or tape the key in. A machine
            that stops when the key moves is annoying. A machine that cannot stop when you fall
            is dangerous, and the interlock is the one safety feature that acts at the moment
            something goes wrong.
          </p>`,
    },
    {
      id: 'power-supply',
      heading: 'The Outlet, the Circuit and the Extension Cord',
      html: `          <p>
            Power problems account for a large share of treadmills that cut out, and they are
            frequently blamed on the machine. The tell is a shutdown where the console goes dark
            or reboots, especially at start-up, when you step on, or when the speed goes up.
          </p>
          <p>
            A treadmill draws a large surge of current when the belt starts moving and a
            substantial steady current after that, and both rise when there is a person on the
            belt. If that current has to pass through a long or thin extension cord, a power
            strip, a loose outlet or a circuit already carrying another heavy load, the voltage at
            the machine drops. Controllers are designed to shut down rather than run on a sagging
            supply, so the machine stops — and when you check it later with nothing else running,
            it works.
          </p>
          <p>
            The fix costs nothing. Unplug the extension cord or power strip and plug the treadmill
            directly into a grounded wall outlet, which is what most owner's manuals tell you to do
            anyway. If that outlet shares a circuit with a space heater, a dehumidifier, a freezer
            or a window air conditioner — common company in basements and garages — try a
            different circuit, or run the treadmill when the other appliance is off. Our guide to
            <a href="/treadmill-electricity-usage/" class="text-[#0F62FE] font-medium">treadmill electricity use</a>
            covers the circuit side in more detail.
          </p>
          <p>
            Check the outlet itself, too. An outlet that grips a plug loosely, feels warm after a
            session, or shows any discoloration around the slots is a connection that heats and
            drops voltage under load, and it should be looked at by an electrician rather than
            tolerated. And check the cord inlet on the machine: the socket at the front of the
            frame gets vibrated every session for years and works loose, producing exactly the
            random cut-out people describe as the machine having a mind of its own.
          </p>
          <p>
            If the household breaker or a GFCI outlet is actually tripping — rather than the
            machine simply stopping — that is a separate problem with its own causes, covered in
            <a href="/treadmill-trips-breaker/" class="text-[#0F62FE] font-medium">treadmill tripping the breaker</a>.
          </p>`,
    },
    {
      id: 'auto-stop-features',
      heading: 'Features That Stop the Belt on Purpose',
      html: `          <p>
            Before suspecting a fault, rule out the machine doing exactly what it was programmed
            to do. Modern consoles carry several features that stop the belt deliberately, and
            they are easy to trigger without realizing.
          </p>
          <p>
            <strong>Program and session limits.</strong> A preset workout ends when its time or
            distance is up, and the belt slows to a stop. Some consoles also cap a single manual
            session at a maximum duration, after which the belt stops and the session summary
            appears. If your stops happen at a suspiciously round number of minutes, check the
            program settings and the manual before anything else.
          </p>
          <p>
            <strong>Idle and sleep timers.</strong> Many machines power the console down or end the
            session after a period of inactivity. If you paused to stretch or answer the door and
            came back to a dead console, that is a timer, not a fault.
          </p>
          <p>
            <strong>Heart-rate programs.</strong> On machines with heart-rate-controlled workouts,
            the console adjusts speed or incline to keep you near a target. If the chest strap or
            grip sensors lose your signal, or the reading crosses the program's ceiling, some
            machines slow or stop the belt rather than carry on blind. A strap that needs moistening
            or a fresh battery can look a great deal like a motor fault.
          </p>
          <p>
            <strong>Child lock and console lock.</strong> Some machines have a lock mode that
            disables the controls. If it engages mid-session — usually from a long press of a
            button combination — the console can appear to freeze and the belt stops. The manual
            will give the sequence to release it.
          </p>
          <p>
            <strong>App-connected sessions.</strong> On machines that run classes through an app,
            the class ending, a lost network connection, or a subscription lapse can end the
            session. Try the machine in its basic manual mode: if manual speed and incline run
            indefinitely, the hardware is fine and the stop is a software or account question.
          </p>
          <p>
            None of these should be disabled to "fix" the problem. If one triggers when you do
            not expect it, the answer is to understand its settings, not to defeat it.
          </p>`,
    },
    {
      id: 'under-load',
      heading: 'Stops Under Load: Friction and Overload Protection',
      html: `          <p>
            If the machine runs happily empty but stops when you are on it — or stops more often
            the faster you walk — the controller is almost certainly protecting itself from an
            overcurrent condition. This is the most common genuine mechanical cause of a treadmill
            that keeps stopping, and the usual culprit is friction between the belt and the deck.
          </p>
          <p>
            Every time your foot lands, the belt is pressed onto the deck, and the motor has to
            drag it across that surface while carrying your weight. A well-lubricated deck makes
            that easy. A dry, glazed or contaminated deck makes it much harder, and the motor
            responds by drawing more current to hold the set speed. Controllers watch that current
            continuously. When it crosses a threshold, they cut the motor, show an overload or
            motor error, or — on some machines — trip the small resettable breaker on the frame
            near the power inlet, which takes the whole machine down.
          </p>
          <p>
            The sign that friction is the problem is a belt that hesitates or slows as each foot
            lands, a dull rubbing noise, and a deck that feels dry when you reach under the edge of
            the belt. If you see the speed sag noticeably with each stride before the machine
            stops, our guide to a
            <a href="/treadmill-belt-slows-down-when-i-step-on-it/" class="text-[#0F62FE] font-medium">belt that slows down when you step on it</a>
            covers that symptom specifically.
          </p>
          <p>
            Weight matters too. Every treadmill carries a maximum user weight, and a user near or
            above it puts the motor and controller close to their limits on every stride, which
            leaves no headroom for a slightly dry deck or a warm room. If the stops started when a
            heavier household member began using the machine, that is worth taking seriously
            rather than assuming the machine has failed.
          </p>`,
    },
    {
      id: 'lubrication-tension',
      heading: 'Lubrication and Belt Tension',
      html: `          <p>
            The two adjustments that change friction are lubrication and belt tension, and both
            are owner jobs on most machines — check your manual and warranty terms first.
          </p>
          <p>
            <strong>Lubrication.</strong> Most decks need 100% silicone treadmill lubricant at an
            interval the manual specifies, commonly somewhere in the region of every 40 to 50 hours
            of use or every few months, whichever arrives first. Some decks are pre-waxed or
            maintenance-free and must not be given silicone, so read the manual before buying
            anything. If your deck does take lubricant and you cannot remember when it last had
            any, that is your first suspect for a machine that stops under load. The full procedure
            is in our
            <a href="/treadmill-belt-lubrication/" class="text-[#0F62FE] font-medium">belt lubrication guide</a>.
          </p>
          <p>
            <strong>Belt tension.</strong> An over-tightened belt clamps the rollers together,
            loads the bearings and raises the force the motor needs to turn everything over.
            People over-tighten belts to cure slipping, and the result can be a machine that no
            longer slips but now stops on overload. A belt that is too loose causes a different
            problem — slipping and hesitation rather than shutdowns. Our guide to
            <a href="/how-tight-should-treadmill-belt-be/" class="text-[#0F62FE] font-medium">how tight a treadmill belt should be</a>
            covers the standard lift test.
          </p>
          <p>
            One warning about timing: a deck that has run dry for a long time can be worn past the
            point where lubricant helps. If a freshly lubricated, correctly tensioned machine still
            stops under load within a few sessions, the belt and deck surfaces may be glazed or
            worn, and replacement of the belt — sometimes with the deck flipped or replaced — is
            the actual repair.
          </p>`,
    },
    {
      id: 'after-minutes',
      heading: 'Stops After a Set Number of Minutes: Heat',
      html: `          <p>
            A machine that runs perfectly for the first fifteen or twenty minutes and then stops,
            reliably, at around the same point in each session is almost always protecting itself
            from heat. Motors and controller boards both carry thermal protection, and when a
            component reaches its limit the controller cuts the motor until it cools. Often the
            machine will start again after a rest, which is a useful confirmation.
          </p>
          <p>
            Heat comes from two places. The first is friction, as above: a dry deck makes the motor
            work harder, and working harder means running hotter. The second is ventilation. The
            motor compartment under the front hood is cooled by air drawn through vents, and over
            months it fills with dust, belt debris, pet hair and — on carpet — fibres pulled up
            from the floor. That layer insulates the motor and the controller board and blocks the
            airflow they rely on. A machine pushed against a wall, boxed in by furniture or
            standing on deep-pile carpet that blocks underside vents loses cooling the same way.
          </p>
          <p>
            The cheapest fix in this whole guide is often here. Unplug the machine, wait several
            minutes, remove the motor hood if your manual allows owners to, and vacuum the
            compartment carefully without touching the board. Our guide to
            <a href="/how-to-vacuum-treadmill-motor-compartment/" class="text-[#0F62FE] font-medium">vacuuming the motor compartment</a>
            covers what to avoid. Then give the machine clearance from walls, and if it sits on
            carpet, consider a firm equipment mat; our page on
            <a href="/treadmill-on-carpet/" class="text-[#0F62FE] font-medium">using a treadmill on carpet</a>
            explains why.
          </p>
          <p>
            Room temperature plays a part. A machine in a hot garage in summer starts every session
            closer to its thermal limit than the same machine in an air-conditioned spare room. If
            the shutdowns are seasonal, that is your clue.
          </p>
          <p>
            Feel the motor hood after a session. Warm is normal. Too hot to keep your hand on is
            not, and a hot-plastic or burning smell alongside it means stop — see our guide to a
            <a href="/treadmill-burning-smell/" class="text-[#0F62FE] font-medium">treadmill burning smell</a>
            before running it again.
          </p>`,
    },
    {
      id: 'high-speed-incline',
      heading: 'Stops Only at High Speed or Steep Incline',
      html: `          <p>
            A machine that is fine at walking pace but cuts out when you push towards the top of
            the speed range or the steepest incline is running into a ceiling. Current draw peaks
            at high speed with a person on the belt, and anything marginal in the chain — the
            supply, the cord, the motor, the controller — shows itself there first.
          </p>
          <p>
            Work through it in order. First, the supply: everything in the outlet and extension
            cord section applies with extra force at high speed, so rule it out properly. Second,
            friction: a slightly dry deck that gets away with it at 3 mph will not at 8 mph. Third,
            the incline: if the stop happens specifically when the incline changes, the incline
            motor may be stalling or failing to reach the position the console expects, which on
            many machines throws an incline error and halts the belt. Most machines have a
            calibration routine that re-teaches the incline its limits, and the manual gives the
            button sequence. Running it is worth trying, particularly after the machine has been
            moved or folded.
          </p>
          <p>
            If the supply is clean, the deck is lubricated, the incline calibrates and the stops
            continue at the top of the range, the motor or the controller is struggling to deliver
            peak output. That is not unusual on budget machines used harder than their rating
            suggests, and it is often the first sign of a motor or board approaching the end of its
            life. Our guide to
            <a href="/how-long-do-treadmill-motors-last/" class="text-[#0F62FE] font-medium">how long treadmill motors last</a>
            covers the realistic lifespans and what shortens them.
          </p>`,
    },
    {
      id: 'console-wiring',
      heading: 'Loose Console Wiring at the Upright',
      html: `          <p>
            If the stops are random and seem connected to movement of the console — grabbing the
            handrails hard, the machine being bumped, a fold and unfold before the session — the
            wiring between the console and the controller is a strong suspect.
          </p>
          <p>
            On most treadmills a single wiring harness runs from the console down one of the
            uprights to the motor controller in the base. Where the upright meets the base, that
            harness passes through a joint that flexes every time the machine vibrates, and on a
            folding machine it flexes properly every time the deck is raised. Connectors there can
            work partially loose, and a partly connected plug produces a classic intermittent fault:
            the console loses contact with the controller, and the controller stops the belt
            because it no longer has instructions. Sometimes there is a communication error code;
            sometimes the console simply resets.
          </p>
          <p>
            Checking it usually means removing a cover at the base of the upright and, on many
            machines, the motor hood. Unplug the machine first. Look for connectors that are not
            fully seated, wires pinched between the upright and the frame, or insulation chafed
            through. Reseat connectors firmly and secure the harness so it does not get trapped.
          </p>
          <p>
            If the machine is under warranty, stop at the external checks and call support
            instead. Opening covers can void cover on some machines, and a pinched harness is a
            known failure that manufacturers will often fix at no charge.
          </p>`,
    },
    {
      id: 'motor-brushes',
      heading: 'Worn Motor Brushes',
      html: `          <p>
            Most home treadmills use a DC motor with carbon brushes, which press against the
            rotating commutator to carry current into the motor. Brushes are designed to wear,
            slowly, and on a machine with a lot of hours on it they can wear short enough to lose
            consistent contact.
          </p>
          <p>
            Worn brushes typically produce intermittent loss of drive under load: the belt
            hesitates, surges, or stops while the console stays on, sometimes with a motor error.
            The fault tends to get gradually worse over weeks rather than appearing overnight, and
            it often comes with a change in motor sound. It is more likely on an older machine with
            heavy use than on a two-year-old one.
          </p>
          <p>
            On some motors the brushes sit under screw caps on the motor body and can be inspected
            and replaced with the machine unplugged; on others the motor must come out. Brushes are
            inexpensive parts when they are available for your motor, and a technician can check
            them quickly. If they are badly worn, the commutator they ride on may also need
            attention, which is a motor-shop job.
          </p>
          <p>
            One firm rule: some tiny sparking inside a brushed motor is normal, but if you can see
            sparks from outside the machine, or smell burning, stop using it. That is not a brush
            replacement you do between sessions.
          </p>`,
    },
    {
      id: 'controller-board',
      heading: 'When It Is the Controller Board',
      html: `          <p>
            The motor controller board — the electronics under the motor hood that turn the
            console's instructions into motor power — is the most expensive common answer, and it
            should be the last one you reach. It earns that place by elimination.
          </p>
          <p>
            It becomes the likely suspect when the machine is on a clean, direct supply, the safety
            key is good, the deck is lubricated and the belt correctly tensioned, the motor
            compartment is clean, the console wiring is sound — and the machine still stops, often
            with a motor or controller error, often more frequently over time. Boards fail from
            cumulative heat, which is why years of running on a dry deck matter, and from mains
            surges. A board that took a surge sometimes works intermittently for a while before it
            stops entirely.
          </p>
          <p>
            This is not a hand-tools diagnosis. Boards are model-specific, and without the service
            documentation and a meter, owners tend to replace parts speculatively. If the machine
            is under warranty, call the manufacturer with your model, serial number, the error code
            and the timing pattern you wrote down. If it is not, get a quote. A fitted board on a
            mid-range home treadmill frequently costs a third to a half of a comparable new machine,
            which is where the repair-or-replace arithmetic starts to bite; our
            <a href="/treadmill-maintenance-cost/" class="text-[#0F62FE] font-medium">maintenance cost guide</a>
            and the
            <a href="/treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">troubleshooting pillar</a>
            cover that decision.
          </p>
          <p>
            Whatever you decide, fix the cause as well as the part. A new board on a machine with a
            dry deck and a dust-packed compartment is a board that is already on its way to the
            same end.
          </p>`,
    },
    {
      id: 'before-you-call',
      heading: 'What to Write Down Before You Call Support',
      html: `          <p>
            Intermittent faults are hard to diagnose over the phone, and a support agent or
            technician will get to the answer much faster with a clear record. Before calling,
            note down the following.
          </p>
          <ul>
            <li>The model and serial number, usually on a label at the front of the frame.</li>
            <li>Whether the whole machine goes dark, the belt stops with the console lit, or the
            console reboots.</li>
            <li>Any error code, exactly as shown.</li>
            <li>When it happens: seconds in, after a consistent number of minutes, only under load,
            or only at high speed or incline.</li>
            <li>What you have already ruled out — direct wall outlet, key, lubrication date, a
            vacuumed compartment.</li>
          </ul>
          <p>
            That list turns a vague "it keeps stopping" into a diagnosis a technician can act on,
            and it is also the evidence a warranty claim needs. It costs five minutes and saves
            paying for a call-out to rediscover what you already knew.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'Why does my treadmill shut off by itself?',
      a: `The most common causes are a safety key that is not seating firmly, a supply that sags under load because of an extension cord or shared circuit, and thermal or overload protection triggered by a dry deck or a dust-packed motor compartment. Built-in timers and heart-rate programs can also stop the belt deliberately. Diagnose by when it stops before assuming the controller board has failed.`,
    },
    {
      q: 'Why does my treadmill stop after a few minutes?',
      a: `A machine that stops after a fairly consistent number of minutes is usually protecting itself from heat. Friction from a dry deck makes the motor work harder, and dust in the motor compartment traps the heat. Lubricate the deck if your manual calls for it, vacuum the compartment with the machine unplugged, and give it clearance from walls and deep carpet.`,
    },
    {
      q: 'Why does my treadmill stop when I step on it?',
      a: `If the machine runs empty but stops under your weight, the controller is usually cutting the motor because current draw is too high. A dry or worn deck, an over-tightened belt, or a user close to the weight limit are the usual causes. Lubricate, check belt tension, and plug directly into a wall outlet before suspecting the electronics.`,
    },
    {
      q: 'Can a treadmill safety key cause it to stop randomly?',
      a: `Yes. The key is a magnet holding a switch closed, and a weak magnet or a key not fully seated can lose contact when the console flexes or the lanyard tugs. Clean the recess, clip the lanyard to a firm waistband with enough slack, and replace an old key. Never tape or bypass it, because it is the emergency stop.`,
    },
    {
      q: 'Can an extension cord make a treadmill shut off?',
      a: `Yes. A treadmill draws a large current at start-up and under load, and a long or thin extension cord drops the voltage enough for the controller to shut down protectively. Most manuals say to plug directly into a grounded wall outlet. Doing that, on a circuit not shared with another heavy appliance, resolves a surprising number of cut-outs.`,
    },
    {
      q: 'How do I know if my treadmill controller board is bad?',
      a: `By elimination. If the supply, safety key, lubrication, belt tension, ventilation and console wiring are all ruled out and the machine still stops — often with a motor or controller error that becomes more frequent over time — the board is the likely cause. It is a technician diagnosis, and on a warrantied machine a call to the manufacturer.`,
    },
  ],
  mistakesHeading: 'Common Mistakes With a Treadmill That Keeps Stopping',
  mistakesIntro:
    'Each of these either sends money toward the wrong part or removes a protection the machine needs.',
  mistakes: [
    {
      title: 'Testing it with nothing else running',
      body: 'A treadmill that cuts out because of a shared circuit or an extension cord will run perfectly when you test it on a quiet evening with the heater off. Reproduce the real conditions — the same outlet, the same cord, someone on the belt at the usual speed — or you will conclude the machine is fine and the fault will come straight back.',
    },
    {
      title: 'Bypassing the safety key',
      body: 'Taping a key in or placing a loose magnet over the switch stops the random cut-outs, and it also removes the emergency stop. A treadmill that cannot stop when someone falls is far more dangerous than one that stops occasionally for no reason. Clean the recess, fix the lanyard, and replace the key.',
    },
    {
      title: 'Over-tightening the belt to cure hesitation',
      body: 'A belt that hesitates under load is often a dry deck, not a loose belt. Cranking the tension bolts makes the hesitation feel better for a while and raises the load on the motor and rear roller bearings, which can turn a hesitation into an overload shutdown. Lubricate first, then set tension to the manual figure.',
    },
    {
      title: 'Replacing the board without fixing the cause',
      body: 'Controller boards usually die of cumulative heat and current, and the commonest source of both is a dry deck under a dusty motor hood. Fitting a new board without lubricating the deck and cleaning the compartment buys a new board the same life as the old one, at a third to a half of the price of a new machine.',
    },
  ],
  relatedHeading: 'Related Fault Guides',
  related: [
    {
      kicker: 'Electrical',
      title: 'Treadmill Tripping the Breaker',
      blurb: 'Start-up surges, shared circuits, GFCI trips and when it is a real fault.',
      url: '/treadmill-trips-breaker/',
    },
    {
      kicker: 'Stop Symptom',
      title: 'Treadmill Burning Smell',
      blurb: 'Rubber, hot plastic or dust — which smells mean stop now.',
      url: '/treadmill-burning-smell/',
    },
    {
      kicker: 'Diagnosis',
      title: 'Belt Slows When You Step On It',
      blurb: 'Friction, tension and motor causes of a belt that hesitates under load.',
      url: '/treadmill-belt-slows-down-when-i-step-on-it/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">Diagnose by timing.</strong> Stops within seconds point at the
            key or the supply; after a set number of minutes, heat; only with you on it, friction;
            only at the top of the range, peak demand. Plug directly into a wall outlet, check the
            key, lubricate the deck and clean the motor compartment before suspecting electronics.`,
    `The <strong class="text-white">controller board</strong> is the last candidate, reached by
            elimination. If you get there, fix the friction and heat that killed it as well, and
            work the repair-or-replace numbers in our
            <a href="/treadmill-troubleshooting/" class="text-[#5AA9FF] font-bold no-underline">troubleshooting guide</a>.`,
  ],
};

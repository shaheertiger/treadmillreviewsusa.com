export default {
  slug: 'treadmill-trips-breaker',
  title: 'Treadmill Tripping the Breaker? (2026): Circuit, GFCI or Machine Fault',
  description:
    'A treadmill that trips a breaker or GFCI is either sharing a circuit, fighting friction, or reporting a real fault. How to tell which safely — and what never to do at the panel.',
  crumbLabel: 'Treadmill Tripping the Breaker',
  breadcrumb: { name: 'Fault Diagnosis', url: '/problems/' },
  kicker: 'Troubleshooting',
  updated: 'October 2026',
  updatedLong: 'October 6, 2026',
  published: '2026-10-06',
  socialProof: '1.9k',
  h1: ['Treadmill Tripping', 'the Breaker?'],
  standfirst:
    'A tripped breaker is a protective device doing its job. The question is whether it is protecting a crowded circuit from an innocent start-up surge, or protecting your house from a treadmill with a fault. Here is how to tell, without opening the panel.',
  ctas: [
    { label: 'Circuit or Machine?', href: '#follow-the-fault' },
    { label: 'When to Call an Electrician', href: '#electrician' },
  ],
  tags: ['treadmill tripping breaker', 'treadmill trips gfci', 'treadmill dedicated circuit', 'treadmill electrical', 'treadmill troubleshooting'],
  stickyCta: { text: 'Circuit or Machine?', link: '#follow-the-fault' },
  lead: `A treadmill is one of the heaviest electrical loads most people run in a living space,
          and it is often plugged into a circuit that was never planned for it — a basement
          outlet shared with a freezer, a spare-room circuit with a space heater on it. Sometimes
          a trip is just arithmetic. Sometimes it is the only warning you will get. The work is
          telling the two apart.`,
  note: `<strong class="text-gray-900">Safety first.</strong> Unplug the treadmill before
          touching the cord, the inlet or anything under the motor hood. Do not open your
          electrical panel or replace breakers or outlets yourself — that is work for a licensed
          electrician. If you smell burning, see sparking, notice smoke, or the belt moves when
          the machine is off, stop using it and get it looked at. And never reset a breaker
          repeatedly into a fault to finish a workout.`,
  sections: [
    {
      id: 'what-tripped',
      heading: 'First: What Actually Tripped?',
      html: `          <p>
            "The treadmill trips the breaker" covers four different events, and they have
            different causes. Before anything else, work out which one you have.
          </p>
          <ul>
            <li><strong>The household breaker in the panel.</strong> Other outlets and lights on
            the same circuit go off too. The breaker handle sits in the off or middle position.</li>
            <li><strong>A GFCI outlet.</strong> The outlet with test and reset buttons — or another
            one upstream on the same circuit — pops, and its reset button needs pressing. Common in
            garages, basements, laundry rooms and outdoor-adjacent spaces.</li>
            <li><strong>An AFCI or combination breaker.</strong> A breaker in the panel with a test
            button on it, often protecting bedroom and living-area circuits in newer homes.</li>
            <li><strong>The treadmill's own circuit breaker.</strong> A small reset button near the
            power inlet on the machine's frame. The machine goes dead but nothing else in the house
            does.</li>
          </ul>
          <p>
            The last one is easy to confuse with the others, and it points somewhere quite
            different: it means the machine's own overload protection has decided the treadmill is
            drawing too much current, which usually traces back to friction rather than to your
            house wiring. Our guide to a
            <a href="/treadmill-wont-turn-on/" class="text-[#0F62FE] font-medium">treadmill that won't turn on</a>
            shows where that reset usually lives.
          </p>
          <p>
            If none of them tripped and the machine simply stopped, you are looking at a different
            problem — see
            <a href="/treadmill-shuts-off-by-itself/" class="text-[#0F62FE] font-medium">treadmill shuts off by itself</a>.
          </p>`,
    },
    {
      id: 'when-it-trips',
      heading: 'When It Trips Tells You Why',
      html: `          <p>
            Breakers respond to two different kinds of excess current, and knowing that makes the
            timing of a trip informative. A standard household breaker has a fast-acting element
            that responds almost instantly to a very large current — the kind produced by a short
            circuit — and a slower element that responds to a moderate overload sustained for
            seconds or minutes. So:
          </p>
          <ul>
            <li><strong>Trips the instant you flip the machine's power switch</strong>, before the
            belt moves: suspicious. Nothing mechanical is happening yet, so this points at a fault
            in the cord, the inlet, the machine's input filtering or the controller. Treat it as a
            machine fault until proven otherwise.</li>
            <li><strong>Trips when the belt starts</strong>, especially with someone standing on
            it: often start-up inrush current on a circuit that is already loaded. Potentially
            innocent, but test it as described below.</li>
            <li><strong>Trips after several minutes of running</strong>: a sustained overload.
            Either the circuit is carrying too much in total, or the treadmill is drawing more than
            it should — usually because of deck friction.</li>
            <li><strong>Trips only on a GFCI outlet, never on a plain one</strong>: current leaking
            to ground. Sometimes small and normal for the electronics, sometimes moisture,
            sometimes failing insulation.</li>
            <li><strong>Trips at random, or when the cord is moved</strong>: a damaged cord, a loose
            inlet or a poor connection at the outlet. Stop and inspect before using it again.</li>
          </ul>
          <p>
            Note which pattern you see, and how many times it has happened. One trip on a crowded
            circuit is information. Repeated trips are a warning.
          </p>`,
    },
    {
      id: 'inrush',
      heading: 'Start-Up Inrush Current',
      html: `          <p>
            Every electric motor draws much more current for a moment as it starts than it does
            once it is running, and treadmills are no exception. Getting a stationary belt moving —
            particularly with a person standing on it — is the single largest demand the machine
            makes. Controllers soften this with a gradual ramp, but the start is still a spike.
          </p>
          <p>
            On a circuit with nothing else running, that spike is well within what the breaker is
            designed to tolerate. On a circuit already carrying a few amps for a space heater or a
            freezer compressor that happens to kick in at the same moment, the total can briefly
            exceed the breaker's limit, and it trips. That is the breaker doing exactly what it is
            for, and the machine is not necessarily at fault.
          </p>
          <p>
            Two habits reduce the start-up load. First, start the belt with your feet on the side
            rails and step on once it is moving at walking speed, as most manuals instruct anyway.
            Second, do not start the machine at a high speed or steep incline — let the program
            ramp up. Our guide to
            <a href="/treadmill-electricity-usage/" class="text-[#0F62FE] font-medium">treadmill electricity use</a>
            covers start-up current against running current in more detail.
          </p>
          <p>
            What inrush does not explain is a breaker that trips the instant the power switch is
            turned on, or one that trips on a circuit with nothing else connected. Those need the
            test in the next section.
          </p>`,
    },
    {
      id: 'follow-the-fault',
      heading: 'Circuit or Machine? Follow the Fault',
      html: `          <p>
            The single most useful test needs no tools and no panel access. Plug the treadmill,
            directly and without an extension cord, into an outlet on a different circuit — one you
            know works and that has nothing heavy on it — and run a normal session.
          </p>
          <p>
            <strong>If it runs cleanly on the other circuit</strong>, the treadmill is probably
            fine and the original circuit is the issue: it is shared with too much, or the outlet
            or wiring has a problem. Find out what else is on it. Turning breakers off one at a
            time and seeing which outlets and lights go dead is a reasonable way for a homeowner to
            map circuits; working inside the panel is not.
          </p>
          <p>
            <strong>If it trips on the other circuit too</strong>, the fault travels with the
            treadmill. Stop using it. Do not keep trying other outlets in the hope of finding one
            that holds, and do not keep resetting. A treadmill that trips breakers on more than one
            healthy circuit is drawing current it should not, and that is a job for the
            manufacturer's support line or a treadmill technician.
          </p>
          <p>
            If you do not have a second suitable circuit to try, that is itself useful
            information: an electrician can check the circuit, and the manufacturer can advise on
            the machine.
          </p>`,
    },
    {
      id: 'shared-circuits',
      heading: 'Shared Circuits and What Shares Them',
      html: `          <p>
            Household circuits in living spaces commonly feed several outlets and sometimes the
            lights as well. A treadmill on such a circuit shares its capacity with everything else
            plugged in — and the worst neighbors are exactly the appliances that tend to live in
            the same rooms as treadmills.
          </p>
          <p>
            Space heaters are the classic one, because a heater alone can take up most of a
            standard circuit's capacity. Dehumidifiers, freezers and refrigerators cycle their
            compressors on and off unpredictably, so a trip that only happens occasionally may line
            up with a compressor starting. Window air conditioners, hair dryers, vacuum cleaners
            and laundry equipment are the others to look for. A TV, a fan and a phone charger are
            not a meaningful load.
          </p>
          <p>
            The fix is either moving the treadmill to a circuit with less on it, or not running the
            other load at the same time. Neither involves touching the wiring. If the room has no
            circuit that can carry the treadmill alone, that is the point to talk to an electrician
            about a dedicated circuit.
          </p>`,
    },
    {
      id: 'dedicated-circuit',
      heading: 'Dedicated 15A or 20A Circuit: What Manuals Ask For',
      html: `          <p>
            Read the electrical section of your owner's manual before anything else, because it
            states what the manufacturer considers adequate. Home treadmill manuals commonly
            specify a properly grounded outlet on a 15-amp or 20-amp circuit, and many specify that
            the circuit be dedicated — meaning the treadmill is the only significant load on it.
            Larger machines, and commercial-grade machines with AC motors, are more likely to call
            for a dedicated 20-amp circuit, and some need a specific outlet type. Your rating plate
            and manual are the authority, not a general figure from the internet, including this
            page.
          </p>
          <p>
            In practice, most home treadmills run happily on a standard grounded 15-amp household
            circuit provided nothing else substantial shares it. If your machine's manual asks for
            a dedicated circuit and yours is shared, that alone may explain the trips, and it is
            also the kind of detail a warranty claim can turn on.
          </p>
          <p>
            Installing a new dedicated circuit is electrician work: it involves the panel, the
            right wire gauge for the breaker, and local code requirements including where GFCI or
            AFCI protection is required. The cost varies widely with how far the panel is from the
            room and how accessible the route is, so get a quote rather than relying on a typical
            figure. If you are planning where a new treadmill will live, it is worth checking the
            circuit before it arrives rather than after.
          </p>`,
    },
    {
      id: 'gfci-afci',
      heading: 'GFCI and AFCI Trips: Nuisance or Real?',
      html: `          <p>
            Ground-fault and arc-fault protection are life-safety devices, and the starting
            assumption with either should be that a trip is real until shown otherwise.
          </p>
          <p>
            <strong>GFCI outlets and breakers</strong> compare the current going out on the hot
            conductor with the current coming back on the neutral. If a small amount goes missing —
            leaking to ground through a person, through water, or through damaged insulation — they
            cut the power very quickly. That is what protects someone touching a faulty appliance in
            a damp basement. Treadmill electronics can leak a small amount of current to ground by
            design, through the filtering that keeps electrical noise off your wiring, and on some
            machine-and-GFCI combinations that is enough to cause occasional trips. Moisture makes
            it worse: humidity in a basement or garage, sweat dripping into the motor hood, or a
            cleaning spray that found its way inside.
          </p>
          <p>
            So a GFCI trip can be a nuisance — but it can also be exactly the fault it exists to
            catch, such as insulation breaking down in the motor or the cord. You cannot tell which
            from the outside, and the response is the same either way: do not remove, bypass or
            replace GFCI protection where code requires it, and do not run the treadmill through
            an extension cord from a non-GFCI outlet to dodge it. Contact the manufacturer, who may
            have specific guidance on GFCI compatibility for your model, and ask an electrician
            whether a dedicated circuit with appropriate protection is an option.
          </p>
          <p>
            <strong>AFCI breakers</strong> look for the electrical signature of arcing — the kind
            produced by a damaged cord, a loose connection or a nail through a cable — because
            arcing starts fires. Brushed motors produce some electrical noise of their own, and
            certain older AFCI breakers have been known to react to motor loads. Newer designs are
            generally better at distinguishing the two. But a loose outlet, a cord crushed under the
            frame or a burned inlet produces real arcing, and an AFCI trip is your cue to inspect
            the cord and outlet first. Persistent AFCI trips are a question for an electrician.
          </p>`,
    },
    {
      id: 'cords-surge',
      heading: 'Extension Cords, Power Strips and Surge Protectors',
      html: `          <p>
            Most treadmill manuals tell you to plug directly into a grounded wall outlet, and many
            say specifically not to use an extension cord, a power strip or an adapter that defeats
            the ground pin. There are sound reasons for all three.
          </p>
          <p>
            <strong>Extension cords</strong> add resistance. Under a treadmill's start-up and
            running current, a long or thin cord drops voltage at the machine, which can make the
            motor draw harder, and it heats the cord itself — a fire risk, particularly if the cord
            is coiled or runs under a rug. Poor connections where the cord joins can also arc,
            which is one way to end up with AFCI trips. If the outlet is in the wrong place, move
            the treadmill or have an outlet installed; do not bridge the gap with a cord.
          </p>
          <p>
            <strong>Power strips</strong> are usually rated for the combined load of light
            electronics and often have their own small breaker, which can trip on the treadmill's
            start-up surge. They also invite plugging other things in alongside it.
          </p>
          <p>
            <strong>Surge protectors</strong> are a judgment call, and the manual decides it. The
            controller board is vulnerable to mains surges, which is why this site generally
            recommends some form of surge protection or unplugging the machine between uses. But
            many manuals specify a direct wall connection, and some manufacturers recommend only a
            particular type of protector. If your manual permits one, use a single-outlet unit
            rated for the treadmill's current, plugged straight into the wall — not a multi-outlet
            strip. If your manual says direct connection only, follow it, and unplug the treadmill
            during storms or long periods of disuse instead.
          </p>
          <p>
            <strong>Two-prong adapters</strong> that bypass the ground pin should never be used.
            The ground is part of the machine's safety design.
          </p>`,
    },
    {
      id: 'deck-friction',
      heading: 'Deck Friction Raises Current Draw',
      html: `          <p>
            A treadmill on a perfectly good circuit can still trip a breaker, or its own reset, by
            drawing more current than it was designed to. The most common reason is friction
            between the belt and the deck.
          </p>
          <p>
            Each stride presses the belt onto the deck and the motor must drag it across that
            surface under your weight. When the deck is dry, glazed or contaminated with the wrong
            product, that drag rises, and the motor draws more current to hold the set speed. Run
            that way for a full session and the sustained overload can be enough to trip a breaker
            that is already near its limit, or the machine's own overload protection. The trips
            tend to come later in a session and with heavier users or faster speeds.
          </p>
          <p>
            If your deck takes lubricant, lubricate it as the manual specifies — commonly every 40
            to 50 hours of use or every few months, but the manual's interval wins — using 100%
            silicone unless it says otherwise. Our
            <a href="/treadmill-belt-lubrication/" class="text-[#0F62FE] font-medium">lubrication guide</a>
            covers the procedure. Check that the belt is not over-tightened, since an over-tight
            belt adds load in the same way; the
            <a href="/how-tight-should-treadmill-belt-be/" class="text-[#0F62FE] font-medium">belt tension guide</a>
            covers the check. Then vacuum the motor compartment with the machine unplugged, because
            a motor smothered in dust runs hotter and less efficiently.
          </p>
          <p>
            If friction was the cause, the trips should stop after these steps. If they do not, or
            if the breaker was tripping at start-up with an empty belt all along, friction was not
            the whole story.
          </p>`,
    },
    {
      id: 'machine-faults',
      heading: 'When the Treadmill Is the Fault',
      html: `          <p>
            If the trips follow the treadmill to a healthy circuit, persist after lubrication, or
            happen the moment the power switch is turned on, the fault is inside the machine. A few
            components account for most of these, and none is an owner repair.
          </p>
          <p>
            <strong>The cord and inlet.</strong> Check these first, with the machine unplugged.
            Look for crushing where the cord runs under the frame, a cut or chafed jacket, and
            discoloration or pitting on the plug pins or the machine-end socket. Damage here is a
            cheap fix, and a known-good replacement cord of the correct rating rules it out.
          </p>
          <p>
            <strong>Surge-suppression components.</strong> Many treadmills have components on the
            input side or the controller board whose job is to absorb voltage spikes — metal oxide
            varistors are a common type. Each surge they absorb can degrade them, and one that
            fails can short, tripping the breaker as soon as the machine is switched on. A
            treadmill that started tripping at switch-on after a storm fits this pattern.
          </p>
          <p>
            <strong>The motor.</strong> Insulation in the motor windings can break down with age
            and heat, letting current leak to the frame (GFCI trips) or short between windings
            (breaker trips, often with a burning smell). Worn brushes and a damaged commutator
            can also produce heavy current draw.
          </p>
          <p>
            <strong>The controller board.</strong> A failing power stage on the board can draw
            excessive current or short outright. Boards are model-specific and expensive; a fitted
            replacement on a mid-range machine frequently costs a third to a half of a comparable
            new treadmill.
          </p>
          <p>
            On a machine under warranty, call the manufacturer before anything else — opening the
            motor hood can void cover on some machines. Out of warranty, a treadmill technician can
            diagnose it; our guides to
            <a href="/how-long-do-treadmill-motors-last/" class="text-[#0F62FE] font-medium">motor lifespan</a>
            and
            <a href="/treadmill-maintenance-cost/" class="text-[#0F62FE] font-medium">repair costs</a>
            help with the repair-or-replace decision.
          </p>`,
    },
    {
      id: 'never-upsize',
      heading: 'Never Fit a Bigger Breaker',
      html: `          <p>
            This deserves its own section because it is the most dangerous "fix" people reach for,
            and it can sound reasonable: the breaker keeps tripping, so fit one that trips less.
          </p>
          <p>
            A breaker is not sized for the appliance. It is sized to protect the wire in the walls.
            The wiring on a circuit can carry a certain current safely, and the breaker is chosen
            to cut power before that wire overheats. Fit a larger breaker on the same wire and the
            treadmill will stop tripping it — because the wire can now be pushed past its safe
            limit, heating inside a wall where nobody can see it, with nothing to stop it. That is
            how electrical fires start.
          </p>
          <p>
            The same logic applies to the treadmill's own fuse or reset: never replace a fuse with a
            higher rating, and never hold a reset button in or jam it. And it applies to protective
            outlets: never swap a GFCI outlet for a standard one to make the treadmill work.
          </p>
          <p>
            If a circuit genuinely cannot carry the treadmill, the correct answer is a properly
            installed circuit sized for the load, by a licensed electrician, to local code. That is
            the only legitimate way to get more capacity.
          </p>`,
    },
    {
      id: 'electrician',
      heading: 'When to Call an Electrician — and When to Call the Manufacturer',
      html: `          <p>
            The follow-the-fault test usually tells you which professional you need.
          </p>
          <p>
            <strong>Call a licensed electrician</strong> if the trips happen on one circuit but not
            others; if the breaker trips with only the treadmill connected and the treadmill runs
            cleanly elsewhere; if a breaker or outlet feels warm, buzzes, crackles or shows
            discoloration; if lights dim noticeably when the treadmill starts; if a GFCI or AFCI
            trips persistently and you need advice on protection; or if you want a dedicated
            circuit installed. Anything inside the panel is their territory, not yours.
          </p>
          <p>
            <strong>Call the manufacturer or a treadmill technician</strong> if the treadmill trips
            breakers on more than one healthy circuit, trips the instant it is switched on, trips
            its own reset repeatedly after lubrication and cleaning, or trips with any burning
            smell. Have your model and serial number ready, along with when it trips and what you
            have ruled out.
          </p>
          <p>
            <strong>Stop using it immediately</strong> if you see sparking, smell burning or hot
            plastic, see smoke, or find scorch marks on the plug, cord or outlet. Unplug it if you
            can do so safely, and do not plug it back in until it has been inspected. A burning
            smell has its own guide —
            <a href="/treadmill-burning-smell/" class="text-[#0F62FE] font-medium">treadmill burning smell</a>
            — and the full list of stop symptoms is in our
            <a href="/treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">troubleshooting guide</a>.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'Why does my treadmill keep tripping the breaker?',
      a: `The usual causes are a circuit shared with another heavy load, start-up inrush current with someone standing on the belt, an extension cord or power strip, and deck friction raising the motor's current draw. If it trips on more than one healthy circuit, or the instant it is switched on, the fault is in the treadmill and it should not be used until inspected.`,
    },
    {
      q: 'Does a treadmill need a dedicated circuit?',
      a: `Many manufacturers specify one, so check your manual. Home treadmill manuals commonly ask for a grounded outlet on a 15-amp or 20-amp circuit, often dedicated, and larger or commercial-grade machines are more likely to require a dedicated 20-amp circuit. Most home machines run fine on a 15-amp circuit with nothing else heavy on it.`,
    },
    {
      q: 'Why does my treadmill trip the GFCI outlet?',
      a: `A GFCI trips when current leaks to ground. Treadmill electronics can leak a small amount by design, and moisture in a basement or garage makes it worse, but a GFCI trip can also be genuine insulation failure in the motor or cord. Do not remove or bypass GFCI protection; contact the manufacturer and ask an electrician about options.`,
    },
    {
      q: 'Can I plug a treadmill into a surge protector or extension cord?',
      a: `Not an extension cord or power strip — most manuals say to plug directly into a grounded wall outlet. Surge protectors depend on the manual: if it permits one, use a single-outlet unit rated for the treadmill's current, plugged straight into the wall. If the manual says direct connection only, follow it and unplug during storms instead.`,
    },
    {
      q: 'Can I replace my breaker with a bigger one so the treadmill stops tripping it?',
      a: `No, never. A breaker is sized to protect the wiring in your walls, not the appliance. A larger breaker on the same wire lets that wire overheat without tripping, which is a fire risk. If a circuit cannot carry the treadmill, a licensed electrician should install a properly sized circuit to local code.`,
    },
    {
      q: 'Is it safe to keep resetting the breaker?',
      a: `Once, after removing other loads from the circuit, is reasonable. Repeatedly is not. A breaker that keeps tripping is reporting either an overloaded circuit or a fault, and each reset sends the fault current through the wiring and the machine again. Stop, run the different-circuit test, and call an electrician or the manufacturer.`,
    },
  ],
  mistakesHeading: 'Common Mistakes When a Treadmill Trips the Breaker',
  mistakesIntro:
    'Two of these waste money. The other two are genuine fire risks, and they are the ones to remember.',
  mistakes: [
    {
      title: 'Fitting a larger breaker or fuse',
      body: 'The breaker protects the wire, not the treadmill. Upsizing it means the wiring can overheat inside the wall without anything cutting the power. The same applies to the machine’s own fuse and to swapping a GFCI outlet for a standard one. If the circuit cannot carry the load, a licensed electrician installs one that can.',
    },
    {
      title: 'Running it from an extension cord to reach another outlet',
      body: 'Moving to a different circuit is a good test, but bridging the distance with an extension cord adds resistance, drops voltage and heats the cord — and dodging a GFCI by running a cord from an unprotected outlet removes a protection that exists for a reason. Move the treadmill, or have an outlet installed.',
    },
    {
      title: 'Resetting into a fault, again and again',
      body: 'One trip on a crowded circuit is unremarkable. A treadmill that trips every time, or trips on more than one circuit, is drawing current it should not, and each reset puts that current through the wiring and the machine again. Stop after the different-circuit test and call the right professional.',
    },
    {
      title: 'Blaming the house when the deck is dry',
      body: 'A treadmill fighting a dry or glazed deck draws noticeably more current, and a sustained overload late in a session can trip a breaker or the machine’s own reset on a perfectly good circuit. Lubricate per the manual, check belt tension and vacuum the motor compartment before paying for an electrician.',
    },
  ],
  relatedHeading: 'Related Fault Guides',
  related: [
    {
      kicker: 'Diagnosis',
      title: 'Treadmill Shuts Off by Itself',
      blurb: 'Stops with no tripped breaker — diagnosed by when it happens.',
      url: '/treadmill-shuts-off-by-itself/',
    },
    {
      kicker: 'Stop Symptom',
      title: 'Treadmill Burning Smell',
      blurb: 'Rubber, hot plastic or dust — which smells mean stop now.',
      url: '/treadmill-burning-smell/',
    },
    {
      kicker: 'Electrical',
      title: 'Treadmill Won’t Turn On',
      blurb: 'Safety key, reset switch, outlet and fuse, checked in order.',
      url: '/treadmill-wont-turn-on/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">Follow the fault.</strong> Plug directly into a healthy circuit
            with nothing else on it. If the trips stop, the circuit was overloaded or faulty — an
            electrician's question. If they follow the treadmill, or it trips at switch-on, stop
            using it and call the manufacturer or a technician.`,
    `Never fit a bigger breaker, never bypass a GFCI, never use an extension cord to dodge
            the problem. Rule out
            <a href="/treadmill-belt-lubrication/" class="text-[#5AA9FF] font-bold no-underline">deck friction</a>
            first, and leave anything inside the panel to a
            <strong class="text-white">licensed electrician</strong>.`,
  ],
};

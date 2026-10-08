export default {
  slug: 'zwift-treadmill-guide',
  title: 'Zwift Treadmill Guide (2026): How Zwift Run Works With Any Treadmill',
  description:
    'How Zwift Run works with a treadmill: where the speed signal comes from, foot pods vs connected machines, calibration, Bluetooth vs ANT+ set-up and fixes.',
  crumbLabel: 'Zwift Treadmill Guide',
  breadcrumb: { name: 'Buying Guides', url: '/guides/' },
  kicker: 'Buying Guide',
  updated: 'October 2026',
  updatedLong: 'October 8, 2026',
  published: '2026-10-08',
  socialProof: '1.7k',
  h1: ['Using Zwift With a Treadmill:', 'What You Need and What to Expect'],
  standfirst:
    'Zwift turns a treadmill session into a run through a virtual world with other people in it. It needs one thing from you: a speed signal. Here is where that signal comes from, how to make it honest, and what Zwift Run can and cannot do compared with the cycling side of the app.',
  ctas: [
    { label: 'The Three Speed Sources', href: '#speed-sources' },
    { label: 'Fixing Connection Problems', href: '#connection-problems' },
  ],
  tags: ['zwift treadmill', 'zwift run', 'zwift compatible treadmill', 'foot pod', 'connected treadmill'],
  stickyCta: { text: 'See the Set-Up Steps', link: '#setup' },
  lead: `Zwift works with almost any treadmill, including one with no connectivity at all, because
          the app does not need to talk to the machine. It needs to know how fast you are running,
          and that number can come from the treadmill, from a small sensor on your shoe, or from a
          watch or phone. The treadmill keeps doing what it always did; Zwift just draws your avatar
          at whatever speed it is told. Getting that speed right, and keeping the connection stable,
          is most of what this guide is about.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'How Zwift Works With a Treadmill: The Short Answer',
      html: `          <p>
            <strong>Zwift Run</strong> is the running side of the Zwift app. You run on your
            treadmill, a device tells Zwift your speed, and your avatar moves through a virtual
            world at that pace alongside other runners and riders. You can follow a structured
            workout, join a group run or an event, or simply run a route. The treadmill itself is
            not required to do anything new.
          </p>
          <p>
            The speed signal is the whole question. It comes from one of three places: a
            <strong>treadmill that broadcasts its belt speed</strong> over Bluetooth or ANT+, a
            <strong>foot pod</strong> clipped to your shoe, or a <strong>watch or phone</strong>
            that estimates your running speed and passes it on. Any of the three works. A connected
            treadmill is the tidiest; a foot pod is the universal answer for every other machine;
            the wrist-based route is the cheapest to try if you already own the hardware.
          </p>
          <p>
            Two things surprise people. First, on most treadmills Zwift reads speed but does not set
            it — when a workout asks you to speed up or a virtual hill arrives, you press the buttons
            yourself. Second, the number Zwift shows is only as honest as the sensor feeding it, and
            treadmill consoles are not always honest either. Calibration, covered further down, is
            not optional if you care about the pace on screen matching the pace on the belt. If you
            are deciding between a connected machine and a plain one, our comparison of
            <a href="/smart-treadmill-vs-regular/" class="text-[#0F62FE] font-medium">smart and regular treadmills</a>
            is the place to start; Zwift does not need you to buy the smart one.
          </p>`,
    },
    {
      id: 'what-zwift-needs',
      heading: 'What Zwift Actually Needs From Your Treadmill',
      html: `          <p>
            It helps to separate what the app needs from what people assume it needs. Zwift Run
            needs a running speed, updated several times a second, delivered over a wireless
            protocol it understands. That is the entire requirement. From speed it derives
            distance, pace and the movement of your avatar. Cadence is a welcome extra that some
            sensors provide. Heart rate is optional and comes from a separate strap or watch.
          </p>
          <p>
            What Zwift does not need is any control over the machine. It does not need to change
            the belt speed, raise the incline, read the console or know which brand of treadmill
            you own. That is why a basic treadmill with a mechanical console and no wireless
            anything is a perfectly good Zwift treadmill once a sensor is added. It is also why the
            phrase "Zwift compatible treadmill" is slightly misleading: the compatibility that
            matters is the sensor's, not the machine's.
          </p>
          <p>
            There is one honest caveat. Because Zwift cannot see the belt, it cannot verify
            anything. If a foot pod is badly calibrated, Zwift will cheerfully record a run at a
            pace you did not do. If a treadmill's own speed is off, a connected machine will
            broadcast the wrong number with total confidence. Our guide to
            <a href="/is-my-treadmill-speed-accurate/" class="text-[#0F62FE] font-medium">whether your treadmill speed is accurate</a>
            explains why consoles drift; the short version is that belt speed under load often
            differs from the displayed figure, and nothing in Zwift corrects for that.
          </p>
          <p>
            The protocols involved are <strong>Bluetooth</strong> (specifically Bluetooth Low
            Energy, which phones, tablets, laptops and TV streaming boxes already have) and
            <strong>ANT+</strong>, a low-power sports protocol that most computers and phones do
            not have built in and that usually needs a small USB dongle. A sensor or treadmill may
            support one or both. Which you use affects reliability more than most people expect,
            and the set-up section below goes into it.
          </p>`,
    },
    {
      id: 'speed-sources',
      heading: 'The Three Ways to Get a Speed Signal Into Zwift',
      html: `          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">1. A treadmill that broadcasts its speed</h3>
          <p>
            Some connected treadmills transmit belt speed over Bluetooth or ANT+ using a standard
            fitness-machine profile, and Zwift can pair to them directly as a running speed source.
            Some also send incline, which Zwift can use to inform the on-screen gradient. The appeal
            is obvious: nothing on your shoe, no calibration of a separate device, and the speed on
            the console is the speed on screen.
          </p>
          <p>
            We deliberately do not name models here. Which treadmills pair with Zwift changes with
            firmware updates on both sides, and a machine that worked last year can need a firmware
            update, a different pairing mode or a workaround this year. Zwift publishes and updates
            a compatibility list; check it for the exact model and firmware you are considering
            before you buy on the strength of this feature. Also check <em>how</em> a machine
            connects — some broadcast on Bluetooth only, which matters if the rest of your set-up is
            ANT+.
          </p>
          <p>
            The honest drawback: a connected treadmill broadcasts whatever its controller believes
            the belt speed to be. If the console reads 6.0 mph and the belt is actually turning at
            5.7 mph under your weight, Zwift records 6.0. You gain convenience, not accuracy.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">2. A foot pod or stride sensor</h3>
          <p>
            A foot pod is a small sensor that clips to your laces or slots into a pocket in the
            insole. It uses an accelerometer to measure each stride and converts that into speed and
            cadence, then broadcasts over Bluetooth, ANT+ or both. It works on every treadmill ever
            made, because it measures you, not the machine.
          </p>
          <p>
            Pods range from inexpensive units designed specifically for Zwift to more sophisticated
            sensors that also report running power and ground-contact metrics. The cheaper ones
            typically need calibrating against a known speed to be accurate and can be sensitive to
            where exactly they sit on the shoe; the more expensive ones tend to be more accurate out
            of the box and more consistent as your form changes with fatigue. All of them need a
            battery — a coin cell on most, rechargeable on some — and all of them need to be on the
            shoe you are actually wearing, which is easier to forget than you would think.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">3. A watch or phone</h3>
          <p>
            Some running watches can broadcast an estimated running speed over Bluetooth from their
            own wrist-based motion sensing, and Zwift has at various points offered a route for
            Apple Watch users through its companion app. These are the cheapest options to try if
            you already own the device, and the least accurate of the three: a wrist moves in a far
            more complicated way than a foot, and the estimate drifts noticeably with arm swing,
            handrail use and pace changes. They are fine for joining a social run or a casual route.
            For workouts with precise pace targets, a foot pod is the better tool. If a watch is your
            main training device, our guide to
            <a href="/how-to-connect-apple-watch-to-treadmill/" class="text-[#0F62FE] font-medium">connecting an Apple Watch to a treadmill</a>
            covers what the watch can and cannot do on its own.
          </p>`,
    },
    {
      id: 'no-connectivity',
      heading: 'Can You Use Zwift With a Treadmill That Has No Connectivity?',
      html: `          <p>
            Yes, and this is the question most people searching for a "Zwift compatible treadmill"
            actually want answered. A treadmill with no Bluetooth, no ANT+, no app and no screen
            beyond a basic LCD is entirely usable with Zwift. Add a foot pod, pair it to the device
            running Zwift, calibrate it, and the treadmill becomes a Zwift treadmill in every way
            that matters.
          </p>
          <p>
            In practice, many experienced Zwift runners prefer this arrangement even when they own a
            connected machine, for three reasons. A good foot pod measures what your body is doing,
            so it travels with you to a gym or hotel treadmill. It is independent of the treadmill's
            own speed error, so a calibrated pod can be more truthful than the console. And it
            sidesteps the pairing quirks that connected treadmills sometimes develop after a
            firmware update.
          </p>
          <p>
            What a non-connected machine cannot give Zwift is incline. On a connected treadmill that
            broadcasts grade, Zwift can reflect what you have set. With a foot pod, Zwift does not
            know your incline, and most people simply ignore the virtual terrain or set a modest
            fixed grade. This is an honest limitation, but it is a limitation of information
            rather than of training: your legs still feel whatever grade you set on the console.
          </p>
          <p>
            The implication for buyers is useful. If Zwift is the reason you are shopping, you do
            not need to pay for a connected treadmill or a bundled subscription machine to get it.
            Spend the money on a solid deck, a decent motor and a frame that does not shake, then add
            a pod. Our list of
            <a href="/best-treadmills-without-subscriptions/" class="text-[#0F62FE] font-medium">treadmills without subscriptions</a>
            covers machines built on exactly that philosophy.
          </p>`,
    },
    {
      id: 'calibration',
      heading: 'Calibration: Why the Pod and the Treadmill Both Need Checking',
      html: `          <p>
            There are two separate accuracy problems here, and they stack. The first is whether your
            sensor reports your true speed. The second is whether the treadmill's displayed speed is
            your true speed. People usually calibrate the first against the second without checking
            the second, which simply transfers the treadmill's error into the pod.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Calibrating a foot pod</h3>
          <p>
            A foot pod infers speed from stride motion using a model of how a human leg moves. Your
            leg is not exactly the model, so most pods allow a calibration factor. The usual flow is
            to run at a steady, known treadmill speed for a minute or two, compare what the pod
            reports with what the treadmill says, and adjust until they agree. Some pods calibrate
            inside Zwift itself, some in their own app, and some do it automatically from a GPS run
            outdoors. Follow the sensor's instructions rather than ours; the details differ.
          </p>
          <p>
            Two practical points. Calibrate at the pace you will actually run most — a pod
            calibrated at an easy jog will often read differently at threshold pace, because your
            stride changes shape as you speed up. And if your form changes when you are tired, the
            pod's reading can drift within a single session. Higher-end sensors handle this better,
            but none of them are immune.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Checking the treadmill itself</h3>
          <p>
            Before you trust the console as your reference, verify it. The low-tech method is to
            mark the belt, measure its full length, count revolutions over a timed interval at a set
            speed with your weight on the belt, and work out the real speed. Belt stretch, roller
            wear and a dry deck all make the belt run slower under load than the display claims,
            and the error is often larger at higher speeds. Our full
            <a href="/treadmill-calibration/" class="text-[#0F62FE] font-medium">treadmill calibration guide</a>
            walks through the arithmetic, the service-mode route on consoles that have one, and when
            an error points to a fault rather than a setting.
          </p>
          <p>
            Once you know the treadmill's true speed, calibrate the pod to that rather than to the
            console. If the console says 6.0 mph and you have measured 5.8 mph, calibrate the pod to
            read 5.8. The number on the console is then wrong and Zwift is right, which is the
            correct way round.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Connected treadmills</h3>
          <p>
            A treadmill that broadcasts speed cannot be calibrated within Zwift; the app takes what
            it is given. The fix for a connected machine that reads high or low is on the treadmill
            side — its own calibration or service mode, if it has one — or accepting the error and
            treating Zwift pace as relative rather than absolute. For racing on Zwift, that is a
            fairness problem as much as a training one, and it is why some events ask runners to use
            specific sensor types.
          </p>`,
    },
    {
      id: 'what-zwift-can-do',
      heading: 'What Zwift Run Can and Cannot Do',
      html: `          <p>
            It is worth being clear-eyed here, because the cycling side of Zwift sets expectations
            that the running side does not fully meet.
          </p>
          <p>
            <strong>What it does well.</strong> Free runs on a variety of routes through several
            virtual worlds. Structured workouts with pace targets, shown on screen with a prompt
            when the next block is coming. Training plans that string workouts together over weeks.
            Group runs and events where you run with other people in real time, with a pace-partner
            style option on some routes to help you hold a steady effort. Recording of distance,
            pace, cadence and heart rate, exportable to the usual training platforms. For a lot of
            people, the simple fact of other runners on screen is enough to make a forty-minute
            treadmill run pass without the clock-watching that our guide to
            <a href="/how-to-make-treadmill-running-less-boring/" class="text-[#0F62FE] font-medium">making treadmill running less boring</a>
            is written to solve.
          </p>
          <p>
            <strong>What it does not do on most machines.</strong> Zwift does not control your
            treadmill. When a workout moves from an easy block to a hard one, Zwift tells you the
            target pace and you press the speed buttons to get there. When the virtual road tilts
            up, your belt does not. The exceptions are rare and change over time; assume you will be
            operating the console yourself, and plan your button presses accordingly. In an
            interval session this means the first few seconds of each block are spent adjusting
            speed, which is slightly annoying and quickly becomes habit.
          </p>
          <p>
            <strong>Incline.</strong> With a foot pod, Zwift has no idea what grade you are on. With
            a treadmill that broadcasts incline, Zwift can reflect what you have set on the console,
            but it still does not set it. Some runners match the virtual terrain by hand; most
            do not bother.
          </p>
          <p>
            <strong>The subscription.</strong> Zwift is a subscription service. How running-only use
            is treated — whether it is included in the standard membership, offered differently, or
            free — has changed over time and may change again, so check the current price and terms
            directly rather than relying on anything written here. Factor it in against any
            treadmill subscription you already pay for; running two fitness subscriptions for one
            treadmill is a common and easily avoided expense.
          </p>`,
    },
    {
      id: 'setup',
      heading: 'Setting Up: Screen, Device Placement and Bluetooth vs ANT+',
      html: `          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Choosing a screen</h3>
          <p>
            Zwift runs on phones, tablets, laptops, desktop computers and a popular TV streaming
            box. On a treadmill, the choice is about where your eyes are. A phone on the console
            tray is the easiest to set up and the hardest to see at speed. A tablet on the console
            or a stand is a good middle ground. A television in front of the treadmill is the most
            immersive and the most effort, and if the device driving it is a streaming box, be
            aware that these have a limited number of simultaneous Bluetooth connections — the
            remote takes one, a foot pod another, a heart-rate strap a third — and that is
            typically the ceiling. Zwift's companion app on a phone can act as a bridge for extra
            sensors, which solves the limit at the cost of one more thing to keep running.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Where to put the device</h3>
          <p>
            Bluetooth and ANT+ are both short-range, and the human body is a surprisingly effective
            barrier to both. A foot pod on your shoe talking to a laptop behind you, through your
            legs and torso, will drop more packets than one talking to a tablet on the console in
            front of you. Keep the receiving device in front of you and within a couple of metres,
            with as little body between it and the sensor as possible. If you use an ANT+ dongle on
            a laptop, a short USB extension cable that lets you position the dongle closer to the
            treadmill often fixes dropouts entirely.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Bluetooth or ANT+</h3>
          <p>
            Bluetooth is built into everything and needs no extra hardware, which makes it the
            default. Its weakness is that a Bluetooth sensor generally connects to one app at a
            time, so a pod paired to Zwift on your tablet cannot simultaneously feed your watch.
            ANT+ broadcasts to any number of listeners at once — Zwift, a watch and a bike computer
            can all read the same pod — but needs a dongle on most computers and is not available on
            most phones or streaming boxes at all. Both share the crowded 2.4 GHz band with Wi-Fi,
            microwave ovens and the treadmill's own motor electronics, which is where interference
            comes from.
          </p>
          <p>
            A reasonable rule: use Bluetooth if you have one device and one app, and ANT+ with a
            well-placed dongle if you want several devices reading the same sensor. Do not pair the
            same sensor over both protocols to the same device; pick one.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Pairing order</h3>
          <p>
            Open the pairing screen, wake the sensor (a few steps for a foot pod, or starting the
            belt for a connected treadmill), and pair the run speed source first, then cadence if it
            is separate, then heart rate. Put the device in the position you will actually run with
            <em>before</em> pairing, not after, so that you are testing the real set-up.
          </p>`,
    },
    {
      id: 'connection-problems',
      heading: 'Common Connection Problems and How to Fix Them',
      html: `          <p>
            Most Zwift Run frustration is connectivity rather than the app. Work through these in
            order; the early ones solve the large majority of cases.
          </p>
          <ul>
            <li><strong>The sensor does not appear in the pairing screen.</strong> It is asleep,
            its battery is flat, or it is already connected to something else. Walk a few steps to
            wake a foot pod, replace the coin cell if the pod is more than a few months old, and
            close any other app that might have grabbed it — a watch app, the sensor's own app, a
            previous Zwift session still running in the background.</li>
            <li><strong>Speed reads zero or freezes mid-run.</strong> Usually a dropout from
            distance or body blocking. Move the device in front of you and closer. On a laptop with
            an ANT+ dongle, add an extension cable. On a phone, make sure a case is not covering
            the antenna area and that the phone is not in a low-power mode that throttles
            Bluetooth.</li>
            <li><strong>Speed is wildly wrong.</strong> On a foot pod, the calibration factor is
            off or the pod has moved to a different position on the shoe. Re-run the calibration.
            On a connected treadmill, the machine's own speed reporting is wrong or the pairing has
            picked up a different device in the house.</li>
            <li><strong>The avatar stutters even though the speed looks fine.</strong> Often a
            rendering or network issue rather than a sensor one. Zwift needs a stable internet
            connection for the shared world; a weak Wi-Fi signal in a garage or basement, which is
            where treadmills tend to live, shows up as stuttering and delayed events.</li>
            <li><strong>Heart rate pairs but speed will not.</strong> On a streaming box, this is
            the Bluetooth connection limit. Use the companion app as a bridge or drop a device.</li>
            <li><strong>The connected treadmill paired last month and will not now.</strong> One
            side has updated. Check the treadmill's firmware and Zwift's release notes, and try a
            full power cycle of the treadmill — off at the wall for a minute, not just the console
            sleep — before assuming the worst.</li>
            <li><strong>Everything drops when the belt starts.</strong> Electrical interference from
            the treadmill motor can disrupt a weak wireless link. Moving the receiving device away
            from the motor hood and controller area, which is at the front under the deck, often
            helps, as does a different USB port for a dongle.</li>
          </ul>
          <p>
            If none of this works, the sensor's own app will usually show whether it is broadcasting
            at all, which separates a sensor fault from a Zwift one. A pod that will not appear in
            its own app is a pod problem; one that appears there but not in Zwift is a pairing or
            permissions problem on the device.
          </p>`,
    },
    {
      id: 'zwift-run-vs-cycling',
      heading: 'The Honest Comparison With Zwift Cycling',
      html: `          <p>
            Many people arrive at Zwift Run having used, or watched someone use, Zwift on a bike. The
            running experience is good, but it is not the same, and it is better to know why before
            you set expectations.
          </p>
          <p>
            <strong>No resistance control.</strong> On a smart bike trainer, Zwift sets the
            resistance to match the virtual road, so a climb feels like a climb and a workout block
            arrives at the right effort without you touching anything. On a treadmill, Zwift sets
            nothing. You are the control loop. The immersion is correspondingly thinner: the hill on
            screen is scenery unless you raise the incline yourself.
          </p>
          <p>
            <strong>Speed is not power.</strong> Cycling on Zwift is built around measured power
            from the trainer, which is objective and comparable between riders. Running on Zwift is
            built around speed from a sensor that may or may not be calibrated, on a treadmill that
            may or may not be accurate. Running results are therefore less comparable, and the
            running race scene is smaller and more casual as a result. Treat the leaderboard with a
            pinch of salt.
          </p>
          <p>
            <strong>A smaller community and fewer events.</strong> Zwift is primarily a cycling
            platform. There are running events and group runs, and some are well attended, but at
            most hours the running world is quieter than the cycling one. If the social side is the
            main draw, check the event calendar at the times you would actually run.
          </p>
          <p>
            <strong>Where running wins.</strong> The set-up is cheaper and simpler. A foot pod is a
            fraction of the cost of a smart trainer, works on any treadmill, and takes a minute to
            attach. There is no calibration spin-down, no tyre pressure, no drivetrain to maintain.
            And the basic value — a reason to look up from the console clock, structured workouts
            with prompts, other people moving on screen — is real on a treadmill even without
            automatic control.
          </p>`,
    },
    {
      id: 'is-it-worth-it',
      heading: 'Is Zwift Worth It for Treadmill Running, and What Are the Alternatives?',
      html: `          <p>
            Zwift suits a particular kind of treadmill runner: someone who does regular structured
            sessions, likes the idea of other people on screen, and is comfortable operating the
            console while following prompts. For that person, a foot pod and the subscription
            transform the treadmill from an endurance test into something close to a training
            partner.
          </p>
          <p>
            It suits less well someone who mainly walks, someone who wants the machine to change
            pace and grade for them, or someone who already pays for a treadmill subscription. For
            walkers, the virtual world moves slowly and the structured content is thin. For the
            automatic-adjust crowd, platforms built around specific hardware do that job and Zwift
            does not; our guide to
            <a href="/is-ifit-worth-it/" class="text-[#0F62FE] font-medium">whether iFIT is worth it</a>
            covers the main one. For the already-subscribed, adding Zwift is a second monthly cost
            for a treadmill that is already connected to something, and it is worth asking whether
            the first subscription is the one to drop.
          </p>
          <p>
            A sensible way to decide is to try it with the hardware you have. A phone on the console
            tray, a watch or inexpensive pod, and whatever trial Zwift currently offers will tell
            you within a fortnight whether the format holds your attention. If it does, upgrade the
            screen and the sensor. If it does not, you have spent very little finding out.
          </p>
          <p>
            Whatever you decide, do not let Zwift drive the treadmill purchase. The things that make
            a treadmill good — a stable frame, a deck long enough for your stride, a motor that holds
            speed under your weight, a warranty that means something — are exactly the things that
            make it a good Zwift treadmill, and none of them involve a Bluetooth chip. Buy the
            machine first and the connectivity second.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'Can you use Zwift with any treadmill?',
      a: `Yes. Zwift needs a running speed signal, not a connection to the treadmill, so any machine works once you add a source of speed. A foot pod clipped to your shoe is the universal option and works on treadmills with no connectivity at all. Some connected treadmills can broadcast speed directly, and some watches can provide an estimate.`,
    },
    {
      q: 'Does Zwift control treadmill speed and incline?',
      a: `On most treadmills, no. Zwift reads your speed and shows pace targets or virtual terrain, but you change the belt speed and incline yourself using the console. A few machines broadcast incline so Zwift can display it, and exceptions change over time, but assume you will be pressing the buttons during workouts.`,
    },
    {
      q: 'Do I need a foot pod for Zwift running?',
      a: `You need one unless your treadmill broadcasts speed over Bluetooth or ANT+ or you use a watch that can send an estimated running speed. A foot pod is the most reliable and portable choice for most people. It measures your stride, so it works on any treadmill and travels with you, but it needs calibrating against a known speed to be accurate.`,
    },
    {
      q: 'How do I calibrate a foot pod for Zwift?',
      a: `Run at a steady, known treadmill speed for a minute or two, compare what the pod reports with the real belt speed, and adjust the calibration factor until they agree. Calibrate at the pace you run most. Verify the treadmill's own speed first, because consoles often read high under load, otherwise you copy the treadmill's error into the pod.`,
    },
    {
      q: 'Why does my Zwift foot pod keep disconnecting?',
      a: `Usually distance or body blocking. Bluetooth and ANT+ are short range and your legs and torso absorb the signal, so keep the receiving device in front of you and close. Check the pod battery, close other apps that may have grabbed the sensor, move an ANT+ dongle on an extension cable, and keep the device away from the treadmill motor area.`,
    },
    {
      q: 'Is Zwift free for running?',
      a: `It has been treated differently from cycling at various points, and the terms can change, so check Zwift's current pricing and whether running-only use is included, offered separately or free. If you already pay for a treadmill subscription, weigh the cost of running two memberships for one machine before adding Zwift.`,
    },
  ],
  mistakesHeading: 'Common Mistakes With Zwift on a Treadmill',
  mistakesIntro:
    'Nearly every disappointing Zwift Run session comes back to one of these four, and all of them are fixable in an afternoon.',
  mistakes: [
    {
      title: 'Calibrating the pod to an unverified console',
      body: `A foot pod calibrated to the treadmill display inherits whatever error the display has, and belts commonly run slower under load than the console claims. Measure the real belt speed first with the mark-and-time method, then calibrate the pod to that figure rather than to the number on the screen.`,
    },
    {
      title: 'Putting the device behind or beside you',
      body: `A laptop on a table behind the treadmill has to receive the pod's signal through your body, and dropouts follow. Put the receiving device in front of you on the console or a stand, within a couple of metres, and on a laptop use a short USB extension to bring an ANT+ dongle closer.`,
    },
    {
      title: 'Buying a connected treadmill just for Zwift',
      body: `A treadmill that broadcasts speed is convenient, but it broadcasts the console's figure, errors included, and pairing can break with firmware changes. A good basic treadmill plus a decent foot pod is cheaper, more portable and often more accurate. Buy the machine on deck, motor and frame, then add the sensor.`,
    },
    {
      title: 'Expecting the cycling experience',
      body: `Zwift sets the resistance on a smart bike trainer; it sets nothing on a treadmill. Hills are scenery unless you raise the incline, workout blocks need you to press the speed buttons, and the running race scene is smaller and less comparable. Go in expecting prompts and company rather than automation.`,
    },
  ],
  relatedHeading: 'Related Buying Guides',
  related: [
    {
      kicker: 'Accuracy',
      title: 'Treadmill Calibration',
      blurb: 'Checking belt speed, incline and your watch against reality.',
      url: '/treadmill-calibration/',
    },
    {
      kicker: 'Comparison',
      title: 'Smart Treadmill vs Regular',
      blurb: 'What connectivity actually buys you, and what it does not.',
      url: '/smart-treadmill-vs-regular/',
    },
    {
      kicker: 'Subscriptions',
      title: 'Is iFIT Worth It?',
      blurb: 'The main auto-adjust platform, weighed honestly.',
      url: '/is-ifit-worth-it/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">Any treadmill is a Zwift treadmill once it has a speed source.</strong>
            A calibrated foot pod is the universal answer, works on machines with no connectivity,
            and is often more truthful than a console. A connected treadmill is tidier but
            broadcasts its own errors, and on most machines Zwift still does not control speed or
            incline.`,
    `Verify the belt speed before calibrating anything, put the device in front of you, and
            expect prompts rather than automation. If you want the machine to change pace and grade
            for you, that is a different platform, and our guide to
            <a href="/is-ifit-worth-it/" class="text-[#5AA9FF] font-bold no-underline">whether iFIT is worth it</a>
            covers the trade-offs.`,
  ],
};

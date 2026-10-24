export default {
  slug: 'treadmill-foot-pod-guide',
  title: 'Treadmill Foot Pod Guide (2026): How They Work and Calibrate',
  description:
    'What a running foot pod is, how it turns stride motion into pace, how to calibrate it against a checked belt, pairing with Zwift and watches, and when an FTMS treadmill makes one unnecessary.',
  crumbLabel: 'Treadmill Foot Pod Guide',
  breadcrumb: { name: 'Workouts & Training', url: '/training/' },
  kicker: 'Guide',
  updated: 'October 2026',
  updatedLong: 'October 13, 2026',
  published: '2026-10-13',
  socialProof: '1.3k',
  h1: ['Treadmill Foot Pod Guide:', 'How They Work'],
  standfirst:
    'A foot pod is a small sensor on your shoe that tells a watch or an app how fast you are running, on any treadmill, whether the machine is connected or not. It is also only as good as its calibration. Here is what a pod measures, how to calibrate it against a belt speed you have actually checked, how pairing works, and when a treadmill that broadcasts its own speed makes a pod unnecessary.',
  ctas: [
    { label: 'Calibrating a Foot Pod', href: '#calibration' },
    { label: 'Pod or FTMS Treadmill?', href: '#pod-or-ftms' },
  ],
  tags: ['treadmill foot pod', 'foot pod calibration', 'foot pod for zwift', 'running foot pod', 'treadmill pace sensor'],
  stickyCta: { text: 'Calibrate Your Pod', link: '#calibration' },
  note: `<strong class="text-gray-900">On the claims below.</strong> We have not tested foot pods
          ourselves. How a pod works and how to calibrate one are described in general terms
          that apply across brands; where we name a specific device, app or menu, the detail
          comes from the maker's own documentation — Zwift's support articles on compatible
          running hardware and footpod calibration, and Garmin's watch manuals — or from figures
          already published in our own roundups. Menus, compatibility lists and firmware change,
          so check your device's current manual and Zwift's current hardware list for the exact
          model you own. Worked calibration examples are arithmetic, not measurements.`,
  lead: `A treadmill foot pod is a small motion sensor that clips to your laces or sits in a
          pocket under the insole. It measures how your foot moves with each stride, turns that
          into pace, distance and cadence, and broadcasts the result to a watch, a phone or a
          training app such as Zwift. Because it measures you rather than the machine, it works on
          any treadmill — a basic folding machine with no Bluetooth, a hotel gym, the one you
          already own. This guide explains how pods measure, how to calibrate one properly, how
          pairing works, and when you need one at all.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'What Is a Treadmill Foot Pod? The Short Answer',
      html: `          <p>
            <strong>A foot pod is a shoe-mounted sensor that estimates your running speed from the
            motion of your foot, so a watch or app can record treadmill pace without any
            connection to the treadmill.</strong> It contains motion sensors, a small processor
            and a radio. It works out speed from your stride, then sends speed, distance and
            usually cadence over Bluetooth, ANT+ or both.
          </p>
          <p>
            You need one if you want accurate treadmill pace in an app or on a watch and your
            treadmill cannot broadcast its own speed. That covers most treadmills, including many
            that have Bluetooth for their maker's own app but do not speak the open fitness-machine
            standard that apps like Zwift use. You do not need one if your treadmill already
            broadcasts speed over Bluetooth FTMS to the app you use, or if you only walk and are
            happy reading the console.
          </p>
          <p>
            The catch is calibration. A pod's pace is an estimate built on a model of how a human
            leg moves, and your leg is not exactly the model. Calibrated against a belt speed you
            have checked, a good pod is a reliable source of pace. Calibrated against a console you
            have not checked, it faithfully copies the console's error. If you are deciding
            between a pod and a new treadmill for Zwift, our guide to the
            <a href="/best-treadmills-for-zwift/" class="text-[#0F62FE] font-medium">best treadmills for Zwift</a>
            compares both routes, and recommends the pod for anyone who already owns a treadmill
            they like.
          </p>`,
    },
    {
      id: 'how-it-measures',
      heading: 'How a Foot Pod Measures Pace',
      html: `          <p>
            A foot pod has no idea how fast the belt is turning. Everything it reports is
            inferred from how your foot moves through each stride.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">The sensors</h3>
          <p>
            Inside the pod is an accelerometer, which measures acceleration along several axes,
            and in some designs a gyroscope, which measures rotation. Together they are
            often called an inertial measurement unit. Sampled many times a second, they record
            the shape of each footstep: the push-off, the swing forward, the moment of landing
            and the stance phase when the foot is on the ground.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">From stride to speed</h3>
          <p>
            Cadence is the easy part: each footstrike is a distinctive spike, and counting them
            over time gives steps per minute. Speed is harder. The pod estimates how far each
            stride carried you from the motion it recorded, using a model of foot movement, and
            multiplies stride length by stride rate. Conceptually, speed equals cadence multiplied
            by stride length; in practice the pod's estimate of stride length is the bit that can
            be wrong, and it is the bit calibration corrects.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Why your stride affects accuracy</h3>
          <p>
            Two runners at the same speed can move their feet quite differently: one with a long,
            low stride, another with short, quick steps and more vertical bounce. A pod's model
            makes assumptions about that relationship, and the further your stride is from them,
            the more correction it needs. Stride also changes with speed and with fatigue, which
            is why a pod calibrated at an easy jog can read differently at threshold pace, and
            why late-session readings can drift as form breaks down. Better pods handle this more
            gracefully; independent reviewers have reported that Stryd pods, for example, give
            steadier pace across a range of speeds than cheaper pods that need recalibrating at
            each pace.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Extra metrics</h3>
          <p>
            Some pods report more than pace and cadence: ground contact time, vertical
            oscillation, and in Stryd's case running power. These are interesting to runners who
            want them and irrelevant to the basic job of getting your treadmill pace into an app.
            Do not pay for them unless you will use them.
          </p>`,
    },
    {
      id: 'pod-vs-belt',
      heading: 'Pod Pace vs Belt Speed: Which Is the Truth?',
      html: `          <p>
            On a treadmill your average speed is, by definition, the belt's speed: you stay in
            the same place in the room, so over a minute you have covered exactly as much belt as
            went under you. A perfectly calibrated pod and a perfectly accurate console should
            therefore agree. In practice neither is perfect, and they fail in different ways.
          </p>
          <ul>
            <li><strong>The console</strong> usually infers belt speed from the motor or a roller
            sensor. <a href="/treadmill-belt-slipping/" class="text-[#0F62FE] font-medium" data-autolink>Belt slip</a>, a dry deck, a heavy runner slowing the belt at each footstrike, and
            roller wear can all make the belt run slower than the display says, typically by a
            small percentage that grows with speed and load. Our guide to whether
            <a href="/is-my-treadmill-speed-accurate/" class="text-[#0F62FE] font-medium">your treadmill speed is accurate</a>
            explains why.</li>
            <li><strong>The pod</strong> infers speed from your stride. Its error comes from its
            model and its calibration, and it varies with pace, fatigue, shoe and how firmly it is
            mounted.</li>
          </ul>
          <p>
            Neither is automatically better. The pod's advantage is that once it is calibrated,
            its error is about you, so it travels: the same pod gives comparable numbers on your
            treadmill, a gym treadmill and, with care, outdoors. The console's advantage is that
            it does not care how you run. The only real truth on the day is the belt's measured
            speed, which you can find with a tape measure and a stopwatch.
          </p>
          <p>
            One more subtlety. Running on a moving belt is mechanically a little different from
            running over the ground, and many runners report that a pod calibrated outdoors reads
            slightly differently on a treadmill, or the other way round. If most of your running
            with the pod is on the treadmill, calibrate it on the treadmill.
          </p>`,
    },
    {
      id: 'check-the-belt',
      heading: 'Step One: Check the Belt Before You Calibrate the Pod',
      html: `          <p>
            The most common foot pod mistake is calibrating it to the treadmill console without
            checking the console. If the belt is actually turning at 5.7 mph while the display
            says 6.0, a pod calibrated to the display will read 6.0 at 5.7 from then on, on every
            treadmill and outdoors. You have not calibrated the pod; you have copied the
            treadmill's error into it.
          </p>
          <p>
            Checking the belt takes about ten minutes and needs a tape measure, a piece of masking
            tape and a stopwatch:
          </p>
          <ol>
            <li>With the treadmill unplugged, mark the edge of the belt and measure its full
            length by rotating it by hand until the mark comes back round.</li>
            <li>Plug in, set the speed you run at most, and get on. Ideally have someone else
            time how long ten revolutions of the mark take while you run, because the belt runs
            faster with nobody on it.</li>
            <li>True speed is <a href="/treadmill-belt-size-guide/" class="text-[#0F62FE] font-medium" data-autolink>belt length</a> times revolutions divided by time. With the belt length
            in feet and time in seconds, feet per second multiplied by 0.6818 gives miles per
            hour.</li>
          </ol>
          <p>
            Our
            <a href="/treadmill-calibration/" class="text-[#0F62FE] font-medium">treadmill calibration guide</a>
            walks through the method in full, with a worked example and the console's own
            calibration modes. Do it once at the speed you will calibrate the pod at, and note the
            result. That number, not the display, is your reference.
          </p>`,
    },
    {
      id: 'calibration',
      heading: 'Calibrating a Foot Pod Against the Belt',
      html: `          <p>
            Calibration means telling the pod, or the device it reports to, how far its estimate
            is from the truth, so it can scale every future reading by the same amount. The exact
            steps depend on where the calibration lives: in the pod's own app, in the watch, or in
            the training app.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">The general method</h3>
          <ol>
            <li>Mount the pod firmly on the shoe you will run in, in the position the maker
            recommends.</li>
            <li>Warm up, then run steadily at a speed you have measured with the belt check, for
            at least a few minutes.</li>
            <li>Compare the pod's pace or distance with the measured truth.</li>
            <li>Adjust the calibration so they agree, by whatever method your device uses.</li>
            <li>Run again at the same speed and confirm.</li>
          </ol>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">The arithmetic of a calibration factor</h3>
          <p>
            Many devices express calibration as a scaling factor, often shown as a percentage
            where 100 means no correction. The correction is a ratio: multiply the current factor
            by the true distance divided by the pod's distance. As a worked example in pure
            arithmetic: you run 20 minutes on a belt you have measured at 6.0 mph, which is 2.00
            miles. The pod records 1.90 miles, so it is reading 5% low. The new factor is the old
            one multiplied by 2.00 ÷ 1.90, or about 1.053. A factor of 100 becomes about 105.3. If
            the pod had recorded 2.10 miles instead, the factor would go down, to about 95.2.
          </p>
          <p>
            Garmin's watch manuals describe exactly this direction of adjustment for a foot pod's
            "Cal. Factor" setting, found under the watch's sensor settings: increase it if your
            distance is too low, decrease it if too high. Garmin also describes its foot pod as
            self-calibrating from outdoor runs recorded with GPS. Other watches and apps use
            different names and menus, so follow your device's manual for where the setting
            lives.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Calibrate at the pace you run most</h3>
          <p>
            Because stride changes shape with speed, a single calibration is most accurate near
            the pace it was done at. Calibrate at the speed you spend most time at. Zwift's own
            support article makes the same recommendation for its in-app calibration: pick a speed
            you would be comfortable holding for most of a run. If you also do a lot of fast
            work, check the pod at a faster measured speed as well; if it drifts a long way, you
            will have to decide which pace matters more, or use a pod that holds calibration
            across speeds better.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">When to recalibrate</h3>
          <p>
            After changing to a noticeably different shoe, after moving the pod to a different
            position, after a firmware update to the pod or the app, and whenever the numbers
            start disagreeing with a belt check. Otherwise, leave it alone. Once a pod agrees with
            a measured belt, stop adjusting it to match whatever console you happen to be on,
            which is often the less accurate of the two.
          </p>`,
    },
    {
      id: 'pairing',
      heading: 'Pairing a Foot Pod With Zwift, Watches and Apps',
      html: `          <p>
            Foot pods talk to other devices over two wireless standards, and which one you use
            decides what the pod can connect to.
          </p>
          <ul>
            <li><strong>Bluetooth Low Energy.</strong> Pods that use it typically broadcast
            through the standard Running Speed and Cadence profile, which phones, tablets, many
            watches and training apps understand. A Bluetooth sensor generally connects to one
            app or device at a time.</li>
            <li><strong>ANT+.</strong> Pods use the Stride-Based Speed and Distance profile. Many
            sports watches, particularly Garmin's, receive ANT+, and an ANT+ pod can be read by
            any number of receivers at once. Most phones and computers do not have ANT+ built in
            and need a USB adapter.</li>
          </ul>
          <p>
            Many pods broadcast both, which is the most flexible arrangement: the pod can feed
            Zwift on a tablet over Bluetooth and a watch over ANT+ in the same session.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Zwift</h3>
          <p>
            Zwift's list of compatible running hardware names the Zwift RunPod, Stryd footpods,
            the Polar Stride Sensor, and Garmin's foot pod, which is ANT+ only and so needs an
            ANT+ adapter or bridge. Zwift recommends calibrating a footpod before using it, and
            its support documentation describes doing so from the pairing screen: a wrench icon
            under the Run Speed tile opens a calibration screen where you choose a speed and
            follow the prompts. Because that calibration takes the treadmill's displayed speed as
            the truth, set the belt to a speed you have already measured.
          </p>
          <p>
            Most Zwift connection problems with pods are range and body blocking, a pod already
            grabbed by another app, or a flat battery. Our
            <a href="/zwift-treadmill-guide/" class="text-[#0F62FE] font-medium">Zwift treadmill guide</a>
            covers where to put the screen, Bluetooth versus ANT+ on different devices, and the
            common fixes in order, so we will not repeat them here.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Watches</h3>
          <p>
            Most sports watches from the major running brands can pair an external foot pod as a
            speed and cadence sensor, usually from a sensors or accessories menu. Pair it at home
            with the pod on your shoe, walking a few steps to wake it. On many watches, once the
            pod is paired, it supplies speed for indoor runs without further setting. Some watches let you choose
            whether the pod or GPS supplies speed outdoors; the option and its name vary by brand
            and model, so check your manual rather than assuming.
          </p>`,
    },
    {
      id: 'daily-use',
      heading: 'Mounting, Shoes and Battery: Living With a Pod',
      html: `          <p>
            A pod's accuracy depends as much on how it is worn as on how it is calibrated. A few
            habits keep it consistent.
          </p>
          <ul>
            <li><strong>Mount it firmly.</strong> A pod that wobbles on loose laces records the
            wobble as motion. Clip it tight, in the position the maker specifies, and in the same
            place every time.</li>
            <li><strong>Same shoe, or recalibrate.</strong> The pod has to be on the shoe you are
            wearing, and a very different shoe can change both the mount and your stride. If you
            alternate between two pairs, check the pod in each.</li>
            <li><strong>One pod, one foot.</strong> Pods are designed for one foot at a time.
            Moving it from left to right does not usually matter, but moving it between laces and
            an insole pocket can.</li>
            <li><strong>Know your battery.</strong> Some pods run on a coin cell for months;
            others are rechargeable. Our accessories guide notes that independent coverage puts
            the Stryd 5.0's battery life at around 20 hours, which means charging every week or
            two for a regular runner. A coin cell tends to fail with little warning, so a spare is
            sensible.</li>
            <li><strong>Wake it before pairing.</strong> Most pods sleep when still. A few steps
            wakes them; if the app cannot find the pod, that is the first thing to try.</li>
          </ul>
          <p>
            Keep the receiving device in front of you and close. Your legs and torso absorb
            Bluetooth and ANT+ signals, so a pod talking to a laptop behind the treadmill drops
            out far more than one talking to a tablet on the console.
          </p>`,
    },
    {
      id: 'pod-or-ftms',
      heading: 'When You Need a Foot Pod, and When an FTMS Treadmill Is Enough',
      html: `          <p>
            The alternative to a pod is a treadmill that broadcasts its own speed over Bluetooth
            FTMS, the open Fitness Machine Service standard. Zwift can pair to a compatible FTMS
            treadmill directly as its speed source, with nothing on your shoe. Which you need
            depends mostly on what you already own.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[480px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4">Your situation</th>
                <th class="text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4">Better route</th>
                <th class="text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">You own a treadmill you like with no FTMS</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">Foot pod</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">A fraction of the cost of a new machine</td></tr>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">Your treadmill broadcasts FTMS to your app</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">No pod needed</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">Check the belt speed once, then use it</td></tr>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">Buying a treadmill anyway, Zwift in the plan</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">FTMS treadmill</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">Nothing to charge, mount or calibrate separately</td></tr>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">You run on several treadmills or outdoors</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">Foot pod</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">Measures you, so it travels</td></tr>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">Treadmill has Bluetooth, but only for its own app</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">Foot pod</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">"Bluetooth" is not the same as FTMS</td></tr>
              <tr><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">You mostly walk and read the console</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">Neither</td><td class="border-b border-gray-100 py-2 pr-4 text-gray-700">The console is enough</td></tr>
            </tbody>
          </table></div>
          <p>
            Two points from our Zwift roundup are worth repeating. First, Zwift's own support
            article says not every Bluetooth-enabled treadmill is compatible; a machine can have
            Bluetooth for its maker's platform and still not broadcast the open standard. NordicTrack
            and ProForm, for example, do not appear on Zwift's list of manufacturers with
            confirmed compatible treadmills, so a pod is the reliable way to run Zwift on one.
            Second, an FTMS treadmill gives you convenience, not accuracy: it broadcasts what its
            controller believes the belt speed to be, and if the console reads high, the app
            records the same error with total confidence. Check the belt either way.
          </p>
          <p>
            Neither route lets Zwift change your speed. According to Zwift's support
            documentation, automatic incline control works on one treadmill, the Wahoo KICKR RUN;
            on everything else, including with a pod, you press the buttons yourself.
          </p>`,
    },
    {
      id: 'alternatives',
      heading: 'Other Ways to Get Treadmill Pace Into an App',
      html: `          <p>
            A foot pod and an FTMS treadmill are the two main routes, but not the only ones.
          </p>
          <ul>
            <li><strong>Your watch's own estimate.</strong> In indoor-run mode, a watch estimates
            pace from arm motion and a learned stride model. Some can pass that estimate to an
            app. It is the cheapest route to try, and generally less precise than a pod; <a href="/should-you-hold-the-handrails-on-a-treadmill/" class="text-[#0F62FE] font-medium" data-autolink>holding
            the handrails</a> or keeping one arm still for a screen makes it worse. Calibrating the
            watch against a measured belt helps, and our calibration guide covers how.</li>
            <li><strong>A chest strap with running metrics.</strong> Some straps measure body
            movement as well as heart rate. Garmin says its HRM 600 sends treadmill pace and
            distance to compatible Garmin watches. If you were going to buy a strap anyway and
            use a Garmin watch, that may be enough. Our comparison of
            <a href="/chest-strap-vs-wrist-heart-rate/" class="text-[#0F62FE] font-medium">chest straps and wrist heart rate</a>
            covers the heart rate side of that decision.</li>
            <li><strong>A belt-speed sensor.</strong> Zwift's compatible hardware list includes a
            treadmill sensor, the Runn, which reads belt speed on compatible machines and
            broadcasts it over Bluetooth. It measures the machine rather than you, so it does not
            travel the way a pod does.</li>
            <li><strong>Shoes with built-in sensors.</strong> A few have existed; check current
            availability and app support before relying on one.</li>
          </ul>
          <p>
            For most treadmill runners without an FTMS machine, a foot pod remains the most
            flexible of these: it works on any treadmill, with any app on its compatible list, and
            outdoors.
          </p>`,
    },
    {
      id: 'what-to-buy',
      heading: 'If You Are Shopping for a Foot Pod or a Zwift Treadmill',
      html: `          <p>
            What to look for, in order of importance:
          </p>
          <ul>
            <li><strong>Compatibility with your app and watch.</strong> If Zwift is the goal,
            choose a pod on Zwift's compatible list. Check whether it broadcasts Bluetooth, ANT+ or
            both, and whether your devices can receive it.</li>
            <li><strong>Consistency across speeds.</strong> A pod that holds its calibration from
            easy pace to intervals saves a lot of fiddling, and this is where more expensive pods
            tend to earn their price.</li>
            <li><strong>Battery type.</strong> Coin cell for months between changes, or
            rechargeable with a charge every week or two.</li>
            <li><strong>Mounting.</strong> A secure lace clip, or an insole pocket if your shoes
            have one.</li>
            <li><strong>Extras only if you will use them.</strong> Running power and form metrics
            add cost.</li>
          </ul>
          <p>
            If you are weighing a pod against a new machine, our
            <a href="/best-treadmills-for-zwift/" class="text-[#0F62FE] font-medium">roundup of Zwift-ready treadmills and the pod that works on any machine</a>
            covers four treadmills whose makers state Zwift support, alongside the Stryd 5.0
            for adding Zwift to a treadmill you already own. Our
            <a href="/best-treadmill-accessories/" class="text-[#0F62FE] font-medium">treadmill accessories guide</a>
            puts the foot pod alongside the heart rate strap, fan and mat if you are kitting out a
            treadmill more broadly.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'What is a foot pod for a treadmill?',
      a: `A foot pod is a small sensor that clips to your shoe or sits under the insole. It measures the motion of your foot with each stride, estimates your pace, distance and cadence, and broadcasts them to a watch or app over Bluetooth, ANT+ or both. Because it measures you rather than the machine, it works on any treadmill.`,
    },
    {
      q: 'How accurate is a foot pod on a treadmill?',
      a: `A well-calibrated pod can be a reliable pace source, but only once it has been calibrated against a belt speed you have checked. Uncalibrated, it can be several percent off, and accuracy can shift with pace, fatigue, shoe and mounting. Better pods hold their calibration across a wider range of speeds than cheaper ones.`,
    },
    {
      q: 'How do I calibrate a foot pod on a treadmill?',
      a: `First measure the belt's real speed with a mark, a tape measure and a stopwatch. Then run steadily at that speed, compare the pod's pace or distance with the truth, and adjust the calibration factor in the pod's app, your watch or the training app until they agree. Calibrate at the pace you run most often.`,
    },
    {
      q: 'Do I need a foot pod if my treadmill has Bluetooth?',
      a: `Not if the treadmill broadcasts its speed over the open Bluetooth FTMS standard and your app supports it. Many treadmills use Bluetooth only for their maker's own app, though, and those cannot feed Zwift directly. Check for FTMS or a manufacturer statement naming your app; if neither exists, a foot pod is the reliable route.`,
    },
    {
      q: 'Which foot pods work with Zwift?',
      a: `Zwift's compatible running hardware list names the Zwift RunPod, Stryd footpods, the Polar Stride Sensor and Garmin's foot pod, which is ANT+ only and needs an ANT+ adapter or bridge. Zwift recommends calibrating a footpod before using it. Lists change, so check Zwift's current support page for the exact model before buying.`,
    },
    {
      q: 'Is a foot pod more accurate than the treadmill console?',
      a: `Not automatically. The console infers belt speed from the motor or a roller and can read high when the belt slows under load. The pod infers speed from your stride and depends on its calibration. A pod calibrated against a measured belt can be more truthful than an unchecked console; a pod calibrated to that console simply copies its error.`,
    },
  ],
  mistakesHeading: 'Common Mistakes With Treadmill Foot Pods',
  mistakesIntro:
    'Foot pods are simple devices, and almost every bad reading traces back to calibration, mounting or a connection the pod was never going to make.',
  mistakes: [
    {
      title: 'Calibrating the pod to an unchecked console',
      body: `If the console reads 6.0 mph while the belt turns at 5.7, a pod calibrated to the display will over-read by the same margin everywhere, including outdoors. Measure the belt's real speed with a mark and a stopwatch first, then calibrate the pod to that figure rather than to the number on the screen.`,
    },
    {
      title: 'Calibrating at one pace and trusting it at all paces',
      body: `Your stride changes shape as you speed up, so a calibration done at an easy jog can drift at interval pace. Calibrate at the speed you run most, then check the pod at a faster measured speed. If it drifts a long way, decide which pace matters more or consider a pod that holds calibration better.`,
    },
    {
      title: 'Wearing it loose or on a different shoe',
      body: `A pod that wobbles on loose laces records the wobble as stride motion, and a very different shoe changes both the mount and your gait. Clip it tight in the same position every time, and recheck the calibration whenever you change shoes or move the pod between the laces and an insole pocket.`,
    },
    {
      title: 'Buying a pod you do not need',
      body: `If your treadmill already broadcasts its speed over Bluetooth FTMS to the app you use, a pod mainly adds a second opinion. If you only walk and read the console, it adds nothing. Check what your machine and app already support before spending money on a sensor.`,
    },
  ],
  relatedHeading: 'Related Treadmill Tech Guides',
  related: [
    {
      kicker: 'Roundup',
      title: 'Best Treadmills for Zwift',
      blurb: 'Four treadmills with maker-stated Zwift support, plus a pod for any machine.',
      url: '/best-treadmills-for-zwift/',
    },
    {
      kicker: 'Set-up',
      title: 'Zwift Treadmill Guide',
      blurb: 'How Zwift Run works, screen placement, Bluetooth vs ANT+ and connection fixes.',
      url: '/zwift-treadmill-guide/',
    },
    {
      kicker: 'Accuracy',
      title: 'Treadmill Calibration',
      blurb: 'Check belt speed and incline, and calibrate a watch or pod to the result.',
      url: '/treadmill-calibration/',
    },
    {
      kicker: 'Foot pod',
      title: 'Best Foot Pods for Treadmill',
      blurb: 'Foot pods for accurate treadmill pace and Zwift, with the watches and apps each one pairs with.',
      url: '/best-foot-pods-for-treadmill/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">A foot pod turns your stride into pace on any treadmill, and it is
            only as accurate as its calibration.</strong> Measure the belt's real speed first, then
            calibrate the pod to that figure at the pace you run most, and wear it firmly on the
            same shoe.`,
    `If your treadmill already broadcasts speed over Bluetooth FTMS to your app, you may not
            need a pod at all; if it does not, a pod is far cheaper than a new machine. To compare
            the two routes, see our
            <a href="/best-treadmills-for-zwift/" class="text-[#5AA9FF] font-bold no-underline">guide to the best treadmills and foot pod for Zwift</a>.`,
  ],
};

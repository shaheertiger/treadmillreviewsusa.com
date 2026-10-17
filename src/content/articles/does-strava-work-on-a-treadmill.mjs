export default {
  slug: 'does-strava-work-on-a-treadmill',
  title: 'Does Strava Work on a Treadmill? (2026): How to Record Indoor Runs',
  description:
    'Yes, but not from the phone app alone. How to log a treadmill run on Strava by watch, manual entry, Zwift, iFIT or Peloton, and why maps and segments differ.',
  crumbLabel: 'Strava on a Treadmill',
  breadcrumb: { name: 'Buying Guides', url: '/guides/' },
  kicker: 'How-To',
  updated: 'October 2026',
  updatedLong: 'October 17, 2026',
  published: '2026-10-17',
  socialProof: '1.8k',
  h1: ['Does Strava Work on a Treadmill?', 'How to Record a Treadmill Run'],
  standfirst:
    'Strava will happily store a treadmill run, but it cannot measure one through your phone. The distance has to come from a watch, a connected treadmill app or a number you type in. Here is each route, checked against Strava’s own help pages, and how to keep the record honest.',
  ctas: [
    { label: 'The Short Answer', href: '#short-answer' },
    { label: 'Which Method to Use', href: '#which-method' },
  ],
  tags: ['strava treadmill', 'does strava work on treadmill', 'strava treadmill run', 'strava indoor run', 'record treadmill run on strava'],
  stickyCta: { text: 'Pick the Right Method', link: '#which-method' },
  note: `<strong class="text-gray-900">What we checked, and what we could not.</strong> On 17 October
          2026 we checked Strava’s help centre articles on indoor, treadmill and trainer activities;
          manual activities; how distance is calculated; changing activity type; virtual trainer
          activities; getting activities to Strava; Apple Health, Health Connect and Google Health;
          the Strava Apple Watch app; and the Garmin, Zwift, iFIT and Peloton integrations. We also
          checked Apple’s support pages on Apple Watch accuracy and calibration, Garmin’s owner’s
          manuals on treadmill calibration, and Zwift’s own page on uploading runs. Independent
          coverage we found was older and contradicted Strava’s current help pages in places, so
          where they disagree we follow Strava. We could not find a Strava help article describing
          a way to edit the distance of a treadmill run recorded by a device, so we do not claim one
          exists. Strava changes its features often; its help centre is the authority. We have not
          tested these integrations ourselves.`,
  lead: `Strava was built around GPS, and a treadmill gives GPS nothing to work with: you run for
          an hour and end up exactly where you started. That does not stop Strava recording the
          session, but it changes where the numbers come from. Depending on how you record it, the
          distance comes from your watch’s motion sensors, from a treadmill platform that knows the
          belt speed, or from the console figure you type in afterwards. This guide covers each
          route as Strava describes it in October 2026, what does and does not appear on an indoor
          activity, and how to make the distance close enough to trust.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'Does Strava Work on a Treadmill? The Short Answer',
      html: `          <p>
            <strong>Yes, Strava records treadmill runs, but not through the Strava phone app on its
            own.</strong> Strava’s help centre says that in the mobile app it is not currently
            possible to record indoor runs or to measure distance using a pedometer or other sensors.
            The practical routes are:
          </p>
          <ul>
            <li><strong>A watch.</strong> Record with the Strava Apple Watch app, which uses the
            watch’s pedometer indoors, or with a watch’s own indoor or treadmill run mode (Apple
            Workout, Garmin and others) and let it sync to Strava.</li>
            <li><strong>A connected platform.</strong> Zwift, iFIT and Peloton can each send
            completed sessions to Strava once you link the accounts.</li>
            <li><strong>A manual entry.</strong> Type in the time and the console distance after the
            run.</li>
          </ul>
          <p>
            Whichever you use, the activity will not have a map, will not compete on real-world
            segment leaderboards, and will only be as accurate as the source of its distance. If your
            watch and the treadmill disagree, our guide to
            <a href="/treadmill-calibration/" class="text-[#0F62FE] font-medium">treadmill calibration</a>
            explains which one is more likely to be wrong.
          </p>`,
    },
    {
      id: 'phone-app',
      heading: 'Can You Record a Treadmill Run in the Strava Phone App?',
      html: `          <p>
            Not as a run with distance. Strava’s help article on indoor, treadmill and trainer
            activities, dated 16 September 2026, says the mobile app can record a short list of
            indoor sport types — CrossFit, elliptical, stair stepper, weight training, yoga and
            workout — showing elapsed time, start time and heart rate from a paired monitor. It then
            states plainly that recording indoor runs or rides, or measuring distance with a
            pedometer or other sensors, is not currently possible in the mobile app.
          </p>
          <p>
            This catches people out because older articles, and plenty of forum advice, describe
            starting a run on the phone with GPS off and letting it estimate distance. That is not
            what Strava’s current help says. If you start an ordinary outdoor run in the phone app
            on a treadmill, it will try to use GPS, and the result is likely to be a near-zero
            distance or a scribble of GPS drift rather than a useful record.
          </p>
          <p>
            <strong>The indoor sport types it can record.</strong> If what you want is a timed session
            with heart rate rather than a distance, the phone app can record one of its supported
            indoor types, such as Workout, with a paired heart rate strap. That logs the effort, but
            it will not appear as a run, will not carry a distance and will not add to your running
            totals. For most treadmill runners that is the wrong compromise; a manual run entry or a
            watch recording is better.
          </p>
          <p>
            <strong>What the phone app is still good for.</strong> Adding a manual activity
            afterwards (covered below), editing an activity’s sport type, and linking the accounts
            that bring treadmill sessions in from elsewhere. If you only have a phone, a manual entry
            with the console distance is the honest option. Our guide to whether
            <a href="/does-a-fitness-tracker-count-steps-on-a-treadmill/" class="text-[#0F62FE] font-medium">a fitness tracker counts steps on a treadmill</a>
            explains why a phone in a pocket or a console tray is a poor distance estimator anyway.
          </p>`,
    },
    {
      id: 'apple-watch',
      heading: 'Recording on Apple Watch: the Strava App or Apple Workout',
      html: `          <p>
            Apple Watch owners have two good routes, and the choice mainly decides which app holds
            the original recording.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">The Strava Apple Watch app</h3>
          <p>
            Strava says you can record indoor runs with its Apple Watch app, using the watch’s
            pedometer to measure distance. Its setup article lists support for watchOS 10 or later
            with iOS 17 or later, and says Apple Watch Series 4 or later can record without your
            iPhone. Strava needs permission to read heart rate from Apple Health to show it. The
            activity uploads when the phone is in range or the watch has a network connection.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Apple’s Workout app, synced to Strava</h3>
          <p>
            Apple’s guidance is to choose the workout type that matches what you are doing — for a
            treadmill, Indoor Run — and it says the watch uses its accelerometer when you run
            indoors. To get that workout into Strava, connect Apple Health in the Strava app under
            Settings, Manage Apps and Devices, Health, and turn on Automatic Uploads. Strava’s help
            sets two limits: only workouts recorded with Apple’s own Workout app sync, and only those
            from the past 30 days. Workouts another company’s app wrote into Apple Health will not
            come across this way.
          </p>
          <p>
            <strong>Calibration matters more than the app.</strong> Apple says the watch learns your
            stride from outdoor walks and runs with good GPS, and suggests about 20 minutes at your
            normal pace, repeated at each speed you commonly use. A watch that has never been
            calibrated outdoors will tend to be further off on a treadmill. If your treadmill
            supports Apple GymKit, the treadmill can share its own data with the watch; our guide on
            <a href="/how-to-connect-apple-watch-to-treadmill/" class="text-[#0F62FE] font-medium">connecting an Apple Watch to a treadmill</a>
            covers that pairing.
          </p>
          <p>
            <strong>Which of the two to choose.</strong> The Strava watch app puts the recording
            straight into Strava, which suits people who live in Strava and want its own pace and
            split screens on the wrist. Apple Workout keeps the original in Apple Health and Apple’s
            Activity rings, and Strava picks it up from there, which suits people who already use
            Apple Workout for everything else. The distance estimate comes from the same watch
            sensors either way; what changes is the app on your wrist and where the master copy lives.
            Just remember the 30-day window if you plan to import older Apple workouts.
          </p>
          <p>
            Record with one app, not both. Strava does not allow duplicate activities, and running
            the Strava watch app and Apple Workout at the same time simply gives you two estimates of
            the same run to reconcile.
          </p>`,
    },
    {
      id: 'garmin-and-other-watches',
      heading: 'Garmin and Other Watches',
      html: `          <p>
            Most running watches have a treadmill or indoor run profile that switches off GPS and
            estimates distance from wrist motion or a foot pod. The workout then reaches Strava
            through the watch maker’s own account.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Garmin</h3>
          <p>
            Connect Garmin Connect to Strava once — from the Strava app under Settings, Connect an App
            or Device, Garmin, or from Strava’s website settings — and activities sync automatically
            after that. Strava notes that Garmin will only sync to the most recently created Strava
            account if you have more than one, and that you can upload the original FIT file by hand
            if an activity goes missing.
          </p>
          <p>
            Garmin’s owner’s manuals describe treadmill distance calibration on supported watches:
            after a long enough treadmill run, you enter the distance from the treadmill display, and
            later you can use the Calibrate and Save option to adjust it again. The minimum run
            distance and button names vary by model, so check your watch’s manual. Garmin also
            suggests recalibrating when you change treadmills. Calibrate on the watch, before the
            activity is saved and synced, because the number Strava receives is the one the watch
            saved.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Other watches and trackers</h3>
          <p>
            Strava lists COROS, Polar, Suunto and Wahoo among the devices that commonly sync
            automatically, and its integration directory covers many more. For Fitbit trackers and
            Pixel Watch, Strava’s help describes an updated Google Health integration that can send
            any activity type to Strava, with or without GPS, once you update the connection. On
            Android, note that Strava’s Health Connect integration works the other way: Strava sends
            GPS-based activities to Health Connect, so Health Connect is not a route for getting a
            treadmill run into Strava.
          </p>
          <p>
            If you are choosing a watch partly for treadmill work, our roundup of
            <a href="/best-running-watches-for-treadmill/" class="text-[#0F62FE] font-medium">running watches for the treadmill</a>
            covers indoor accuracy and foot pod support.
          </p>`,
    },
    {
      id: 'manual-entry',
      heading: 'How to Add a Treadmill Run to Strava by Hand',
      html: `          <p>
            A manual activity is the simplest way to log a treadmill run with the treadmill’s own
            distance, and for someone without a watch it is often the most accurate one, provided the
            treadmill is reasonably calibrated. Strava describes the steps as follows:
          </p>
          <ol>
            <li><strong>On the web:</strong> select the plus icon at the top right and choose Add
            manual entry.</li>
            <li><strong>On iPhone:</strong> on the You tab, tap the plus icon at the top right, then
            Manual Activity.</li>
            <li><strong>On Android:</strong> on the Home tab, tap the plus icon at the bottom right of
            your feed, then Manual Activity.</li>
            <li>Choose the sport (Run or Walk), enter the time, duration and distance from the
            console, and save.</li>
          </ol>
          <p>
            <strong>Editing it later.</strong> Strava says you can edit a manual activity’s start
            time, distance and duration in the mobile app, but not its elevation. On the website you
            cannot edit those values; you would have to delete the activity and create a new one,
            which removes its kudos, comments and photos. So if you mistype the distance, fix it in
            the app.
          </p>
          <p>
            <strong>The trade-off.</strong> A manual entry has no heart rate, pace graph or splits —
            just the totals you typed. Before relying on the console distance, it is worth checking
            the belt once with the method in our guide to whether
            <a href="/is-my-treadmill-speed-accurate/" class="text-[#0F62FE] font-medium">your treadmill speed is accurate</a>.
          </p>`,
    },
    {
      id: 'connected-platforms',
      heading: 'Zwift, iFIT, Peloton and Other Platforms That Upload to Strava',
      html: `          <p>
            If you run with a training platform, it usually knows the belt speed — from the treadmill
            itself or from a foot pod — and can send the session to Strava with that distance. These
            are the integrations we checked on 17 October 2026.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Zwift</h3>
          <p>
            Zwift says your activity uploads automatically to Strava or Garmin Connect once you
            finish, after you connect the accounts. Strava’s help describes the connection from your
            Zwift profile under Settings, Connections, Connect to Strava, and a manual route if an
            upload fails: download the activity’s FIT file from your Zwift account and upload it on
            Strava’s website. Past activities do not sync retroactively. Our
            <a href="/zwift-treadmill-guide/" class="text-[#0F62FE] font-medium">Zwift treadmill guide</a>
            covers getting a reliable speed signal into Zwift in the first place.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">iFIT</h3>
          <p>
            Strava’s iFIT article says you connect from the iFIT app under Settings, Connected Apps,
            Strava, after which activities from iFIT-enabled equipment signed in to your account sync
            to Strava when you open the iFIT app on your phone. Only activities recorded after the
            connection sync. Strava also warns that calories and distance can be displayed
            differently on the two platforms for the same session.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Peloton</h3>
          <p>
            Strava’s Peloton article says that on a Peloton Tread you connect Strava from your
            profile settings under Connected Apps, then share individual workouts from your workout
            history or turn on automatic posting. Peloton App members connect through Peloton’s
            members website instead.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">When more than one source sends the same run</h3>
          <p>
            It is easy to end up with two routes into Strava for one session — say, a Garmin watch
            recording the treadmill run while iFIT or Zwift also posts it. Strava does not accept
            duplicate activities, but two recordings with slightly different start times or
            distances can both arrive. Decide which source you trust more for treadmill distance,
            usually the platform reading the belt or a calibrated foot pod, and switch off automatic
            posting from the other. Strava also notes that iFIT and Strava can display different
            calories and distance for the same session, so pick one place to look at the numbers.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">File uploads</h3>
          <p>
            For anything without a direct link, Strava accepts GPX, TCX and FIT files up to 25 MB,
            uploaded on its website, as long as the file contains workout data.
          </p>`,
    },
    {
      id: 'fixing-distance',
      heading: 'Fixing the Distance on a Treadmill Activity',
      html: `          <p>
            This is the question most treadmill runners on Strava end up asking, and the honest
            answer in October 2026 is that it depends on how the activity was created.
          </p>
          <ul>
            <li><strong>Manual activities</strong> can have their distance edited in the Strava
            mobile app.</li>
            <li><strong>Activities recorded by a watch or platform</strong> are harder. Strava’s
            website has a Correct Distance option, but Strava describes it as recalculating distance
            from the activity’s GPS points after upload. A treadmill run recorded with GPS off has no
            useful GPS track, so this option is not a fix for treadmill distance. We could not find
            a Strava help article describing another way to edit the distance of a device-recorded
            treadmill run.</li>
          </ul>
          <p>
            That leaves three practical approaches:
          </p>
          <ol>
            <li><strong>Fix it at the source, before it syncs.</strong> On watches that support
            treadmill calibration, such as many Garmin models, enter the console distance on the
            watch when you finish so the saved activity carries the corrected figure.</li>
            <li><strong>Improve the source over time.</strong> Calibrate an Apple Watch outdoors, or
            use a foot pod, so future indoor runs start closer to the belt distance. Our
            <a href="/treadmill-foot-pod-guide/" class="text-[#0F62FE] font-medium">foot pod guide</a>
            explains how pods are calibrated.</li>
            <li><strong>Replace it with a manual entry.</strong> If one run is badly wrong and the
            total matters to you, delete it and add a manual activity with the console distance,
            accepting that you lose the heart rate data and any kudos.</li>
          </ol>
          <p>
            <strong>Is it worth fixing?</strong> For a training log, consistency matters more than a
            perfect number. If your watch reads a little short on every treadmill run, your trends
            are still meaningful, and calibrating once is a better use of time than editing every
            activity. It is worth correcting when a run is clearly wrong — a watch that lost contact,
            a pod that dropped out — or when the distance feeds something you care about, such as a
            training plan or a challenge.
          </p>
          <p>
            Pace on Strava is calculated from distance over moving time, so whichever distance is
            saved also sets the pace. A short distance makes the run look slow; it does not mean you
            ran slowly.
          </p>`,
    },
    {
      id: 'maps-segments',
      heading: 'Maps, Segments and Leaderboards on Indoor Runs',
      html: `          <p>
            An indoor run on Strava looks different from an outdoor one, and that is by design.
          </p>
          <p>
            <strong>No map.</strong> Strava says the indoor activity page will not show a map, unless
            you are recording and uploading virtual GPS data, as platforms such as Zwift do. Instead
            the page highlights the performance graph — heart rate, speed, cadence or power, where
            available. With no sensor data at all there may be no graph, but you still get credit for
            your elapsed time.
          </p>
          <p>
            <strong>No real-world segments.</strong> Segment times are based on when you cross a
            segment’s start and end points, and Strava says distance does not contribute to segments
            at all. A treadmill run with no GPS track never crosses one. Virtual activities that do
            carry GPS data can match segments, but Strava does not allow those times on public
            real-world leaderboards, and its help lists ways to keep them off: flagging the activity,
            making it private, or tagging it as Indoor, which removes it from segment leaderboards and
            hides the map.
          </p>
          <p>
            <strong>Totals still count.</strong> Distance from indoor activities contributes to your
            training totals and profile stats. Whether a treadmill run counts toward a particular
            distance challenge depends on that challenge’s rules, so read its eligibility details
            before relying on it.
          </p>`,
    },
    {
      id: 'activity-type',
      heading: 'Labelling the Activity Correctly',
      html: `          <p>
            Strava lets you change an activity’s sport type at any time: on the website, through the
            pencil icon on the activity page and the Sport menu; in the app, through the ellipsis
            menu, Edit and the sport type list. Strava notes that changing the type can change which
            segments an activity is matched to.
          </p>
          <p>
            <strong>Virtual Run is not a label you can choose.</strong> Strava says a virtual sport
            type can only be applied if the activity was originally recorded as a virtual activity on
            a supported virtual trainer or treadmill, and that athletes cannot classify activities as
            virtual by hand. Once an activity is a Virtual Run, its type cannot be changed to anything
            else without a support ticket. A treadmill run from your watch will normally arrive as an
            ordinary run.
          </p>
          <p>
            <strong>Why it is worth getting right.</strong> Clear labelling keeps your treadmill runs
            off outdoor leaderboards, makes your training log easier to read, and stops a short,
            under-counted indoor run being mistaken for a slow outdoor one by the people who follow
            you.
          </p>`,
    },
    {
      id: 'accurate-data',
      heading: 'Getting Cleaner Treadmill Data Into Strava',
      html: `          <p>
            Strava can only show what it was given, so accuracy is decided before the upload. In
            rough order of impact:
          </p>
          <ul>
            <li><strong>Check the treadmill first.</strong> If you are going to calibrate a watch to
            the console, the console needs to be right. A quick belt-speed check tells you whether it
            is.</li>
            <li><strong>Calibrate the watch.</strong> Outdoors with GPS for Apple Watch; with the
            treadmill calibration option on watches that have one.</li>
            <li><strong>Let your arms swing.</strong> Wrist-based estimates rely on arm motion. Apple
            notes that for walks the arm wearing the watch should swing naturally. Holding the
            handrails undercounts badly; our guide on
            <a href="/should-you-hold-the-handrails-on-a-treadmill/" class="text-[#0F62FE] font-medium">holding the handrails</a>
            covers why that also changes the workout.</li>
            <li><strong>Consider a foot pod.</strong> A pod on the shoe measures foot motion
            directly, so it does not depend on how your arms move. Our list of the
            <a href="/best-foot-pods-for-treadmill/" class="text-[#0F62FE] font-medium">best foot pods for treadmill running</a>
            covers compatible options.</li>
            <li><strong>Switch GPS off.</strong> Strava advises disabling GPS when recording indoors,
            especially with speed, cadence or power sensors, to keep distance and speed analysis
            clean.</li>
            <li><strong>Use one recorder.</strong> Pick one app or device per run, and link only the
            accounts you need, so the same session does not arrive twice.</li>
          </ul>`,
    },
    {
      id: 'which-method',
      heading: 'Which Method Should You Use?',
      html: `          <p>
            Match the method to what you already own:
          </p>
          <ul>
            <li><strong>Phone only, no watch:</strong> add a manual activity with the console
            distance and time after each run. It is quick, and it uses the most accurate distance
            you have.</li>
            <li><strong>Apple Watch:</strong> record an Indoor Run in Apple Workout with Automatic
            Uploads on, or use the Strava watch app. Calibrate the watch outdoors first.</li>
            <li><strong>Garmin or another running watch:</strong> use its treadmill or indoor run
            profile, calibrate to the console when you finish if it offers that, and let Garmin
            Connect or the maker’s app sync to Strava.</li>
            <li><strong>Zwift, iFIT or Peloton:</strong> link the platform to Strava once, and let it
            send each session with the platform’s distance.</li>
          </ul>
          <p>
            <strong>A worked example.</strong> Someone who runs outdoors at weekends with a Garmin
            and on a gym treadmill twice a week might use the watch’s treadmill profile for the gym
            runs, enter the console distance at the end of each one using the watch’s calibration
            prompt, and let Garmin Connect sync everything. Their Strava log then shows outdoor runs
            with maps and segments, treadmill runs without them, and weekly totals that include both.
            Someone with only a phone would add each treadmill run as a manual activity in the Strava
            app straight after the session, while the console figures are in front of them.
          </p>
          <p>
            Whatever you choose, think of a treadmill run on Strava as a training log entry rather
            than a measured route. It will be consistent if you record it the same way every time,
            and that consistency is more useful for tracking progress than any single run being
            exactly right.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'Does Strava work on a treadmill?',
      a: `Yes, but not from the Strava phone app alone. Strava's help centre says the mobile app cannot currently record indoor runs or measure distance with a pedometer. Record with the Strava Apple Watch app, a watch's own indoor run mode that syncs to Strava, a connected platform such as Zwift, iFIT or Peloton, or add a manual activity with the console distance.`,
    },
    {
      q: 'Does Strava track treadmill runs?',
      a: `Strava stores and analyses treadmill runs, but it does not measure them itself. The distance comes from a watch's motion sensors, a foot pod, a treadmill platform that knows the belt speed, or a figure you type in. The activity will have no map and will not appear on real-world segment leaderboards, but it counts toward your training totals.`,
    },
    {
      q: 'How do I record a treadmill run on Strava?',
      a: `The simplest routes are an Indoor Run on Apple Watch synced through Apple Health, the Strava Apple Watch app, a Garmin or other watch's treadmill profile synced to Strava, or a manual entry. For a manual entry, tap the plus icon in the Strava app, choose Manual Activity, pick Run, and enter the time and console distance.`,
    },
    {
      q: 'Can you edit the distance of a treadmill run on Strava?',
      a: `For a manual activity, yes: Strava says you can edit its distance in the mobile app. For a run recorded by a watch or platform, the website's Correct Distance option recalculates from GPS, which does not help indoors. The practical fix is to calibrate on the watch before the activity syncs, or replace a badly wrong run with a manual entry.`,
    },
    {
      q: 'Do treadmill runs count for Strava segments?',
      a: `No. Segment times depend on crossing a segment's start and end points on a GPS track, and a treadmill run has no route. Virtual runs that carry GPS data can match segments, but Strava does not allow those times on public real-world leaderboards. Tagging an activity as Indoor removes it from segment leaderboards and hides the map.`,
    },
    {
      q: 'Why does Strava show no map for my treadmill run?',
      a: `Because there is no GPS route to draw. Strava says indoor activities do not show a map unless virtual GPS data was recorded and uploaded, as platforms like Zwift do. Instead, the activity page highlights the performance graph, showing heart rate, speed or cadence if your device recorded them. You still get credit for your elapsed time.`,
    },
  ],
  mistakesHeading: 'Common Mistakes When Recording Treadmill Runs on Strava',
  mistakesIntro:
    'Most bad treadmill data on Strava comes from one of these four habits, and each is easy to fix.',
  mistakes: [
    {
      title: 'Starting an outdoor run on the phone',
      body: `The Strava phone app cannot record an indoor run with distance, so an outdoor run started on a treadmill relies on GPS that has nothing to measure. The result is a near-zero distance or random drift. Use a watch's indoor mode, a connected platform, or add a manual activity with the console figures once you finish.`,
    },
    {
      title: 'Recording the same run twice',
      body: `Running the Strava watch app and Apple Workout together, or linking both a watch and a treadmill platform, can send two versions of one session. Strava rejects exact duplicates, but near-duplicates still muddle your log. Choose one recorder per run and switch off automatic uploads from the sources you do not use.`,
    },
    {
      title: 'Expecting Correct Distance to fix it',
      body: `Strava's Correct Distance option recalculates from GPS points after upload. A treadmill run with GPS off has no meaningful track, so it cannot help. Correct the distance on the watch before saving if your watch supports treadmill calibration, or replace a badly wrong run with a manual entry using the console distance.`,
    },
    {
      title: 'Calibrating to an unchecked console',
      body: `Matching your watch to the treadmill display only helps if the display is right. Belt speed drifts with wear, slipping and set-up. Check the belt speed once with a simple mark-and-time test, then calibrate the watch or foot pod to the figure you trust, and recalibrate when you switch treadmills.`,
    },
  ],
  relatedHeading: 'Related Buying Guides',
  related: [
    {
      kicker: 'Apple Watch',
      title: 'How to Connect Apple Watch to a Treadmill',
      blurb: 'GymKit pairing, Indoor Run and why the numbers disagree.',
      url: '/how-to-connect-apple-watch-to-treadmill/',
    },
    {
      kicker: 'Zwift',
      title: 'Zwift Treadmill Guide',
      blurb: 'How Zwift Run works with almost any treadmill.',
      url: '/zwift-treadmill-guide/',
    },
    {
      kicker: 'Accuracy',
      title: 'Treadmill Calibration',
      blurb: 'Checking belt speed, incline and your watch against each other.',
      url: '/treadmill-calibration/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">Strava works on a treadmill, as long as something else measures the run.</strong>
            Record with a watch’s indoor mode or the Strava Apple Watch app, link Zwift, iFIT or
            Peloton, or type in the console distance as a manual activity. The phone app alone cannot
            record an indoor run with distance.`,
    `Expect no map and no segments, and fix distance at the source rather than after upload. A
            calibrated watch, a foot pod or a checked console makes the biggest difference, and our
            guide to whether a
            <a href="/does-a-fitness-tracker-count-steps-on-a-treadmill/" class="text-[#5AA9FF] font-bold no-underline">fitness tracker counts treadmill steps</a>
            explains why wrist data drifts indoors.`,
  ],
};

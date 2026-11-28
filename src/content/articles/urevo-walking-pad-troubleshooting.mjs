const th = 'text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4';
const td = 'border-b border-gray-100 py-2 pr-4 text-gray-700';
const a = 'text-[#0F62FE] font-medium';

export default {
  slug: 'urevo-walking-pad-troubleshooting',
  title: 'UREVO Walking Pad Troubleshooting: Error Codes, Belt and Remote',
  description:
    'Most UREVO faults are the safety key (E0, E7, E10), a loose wire (E1 to E13), a dry belt or a remote. UREVO’s fixes, belt turns of 1/4 to 1/2 and 5–10 ml lube.',
  crumbLabel: 'UREVO Walking Pad Troubleshooting',
  breadcrumb: { name: 'Fault Diagnosis', url: '/problems/' },
  kicker: 'Troubleshooting',
  updated: 'November 2026',
  updatedLong: 'November 28, 2026',
  published: '2026-11-27',
  modified: '2026-11-28',
  socialProof: '1.0k',
  h1: ['UREVO Walking Pad', 'Troubleshooting'],
  standfirst:
    'Most UREVO walking pad problems have one of five causes: the magnetic safety key, a loose control wire under the motor cover, a slipping or drifting belt, a dry deck, or the remote. Here is what UREVO’s own FAQ, support pages and manual say to do for each, which error codes mean what, and when to stop and contact UREVO instead.',
  ctas: [
    { label: 'Error Codes', href: '#error-codes' },
    { label: 'Belt Slipping or Drifting', href: '#belt' },
  ],
  tags: [
    'urevo walking pad troubleshooting',
    'urevo treadmill error codes',
    'urevo walking pad not working',
    'urevo remote not working',
    'urevo e10 error',
    'urevo belt slipping',
    'urevo child lock',
  ],
  stickyCta: { text: 'Look Up a UREVO Error Code', link: '#error-codes' },
  lead: `UREVO sells more than a dozen walking pads and folding treadmills, from the flat Strol 2E to the 14% CyberPad, and
          most share the same small set of faults. We did not test these machines; this guide is built from UREVO’s own
          sources, read on 27 November 2026: the troubleshooting FAQ on urevo.com, its product support pages for the Strol
          2E and SpaceWalk 3S, its warranty and return policies, and the Foldi 3S user manual UREVO publishes, which has
          the most complete error-code table. Where UREVO’s pages disagree, we say so. For pads from any brand, our
          <a href="/walking-pad-not-working/" class="${a}">walking pad not working</a> guide covers the general checks.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'The Short Answer',
      html: `          <p>
            <strong>Unplug the pad, reseat the magnetic safety key, check that the control wires under the motor cover are
            plugged in firmly, and lubricate the belt; UREVO’s own FAQ gives one of those four steps for almost every
            fault.</strong> If an error code returns after that, contact UREVO with the code and your model number.
          </p>
          <ul>
            <li><strong>E0, E7 or E10:</strong> UREVO’s FAQ says reinstall the safety lock magnet and adjust its position.</li>
            <li><strong>E1, E02, E04, E5, E6, E8, U01, E11, E12 or E13:</strong> open the motor cover and check the control
            wire is installed correctly, per the FAQ.</li>
            <li><strong>Belt slipping:</strong> tighten both rear roller screws; UREVO’s Foldi 3S manual says 1/2 turn
            clockwise, then test at 2 to 3 mph.</li>
            <li><strong>Belt drifting:</strong> turn the screw on the side the belt has moved towards 1/4 turn clockwise.</li>
            <li><strong>Burning smell or noise:</strong> lubricate under the belt and idle the pad; a smell that persists
            may mean the motor needs replacing.</li>
          </ul>
          <p>
            Our <a href="/proform-treadmill-troubleshooting/" class="${a}">ProForm treadmill troubleshooting</a> guide uses the
            same order of checks for a full-size treadmill, and our <a href="/lifespan-treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">LifeSpan treadmill troubleshooting</a> guide
            covers office desk treadmills.
          </p>`,
    },
    {
      id: 'first-checks',
      heading: 'First Checks Before Anything Else',
      html: `          <p>
            Most “dead” UREVO pads are not broken. Work through these in order, with the pad unplugged for anything that
            involves the belt or the motor cover.
          </p>
          <ol>
            <li><strong>Outlet and cord.</strong> UREVO’s Foldi 3S manual lists three causes when the pad will not work at
            all: a faulty power rocker switch, an interrupted power supply and a damaged power cord. Plug the pad straight
            into a grounded wall outlet, not a power strip, and look along the cord for damage.</li>
            <li><strong>Power switch.</strong> Many UREVO pads have a rocker switch near the cord. The manual says to replace
            the switch if it does not light; UREVO’s support pages say that if the switch is stuck on or off, contact
            customer service to replace it.</li>
            <li><strong>Safety key.</strong> The magnetic key must sit squarely in its place. A key that has fallen off or is
            weak stops the pad; UREVO says it will send a new safety lock if the magnet is detached or weak.</li>
            <li><strong>The “E” on the screen.</strong> UREVO’s FAQ says a flashing letter “E” is its standby symbol, not a
            fault, and you can use the pad normally.</li>
            <li><strong>Control wires.</strong> UREVO’s FAQ says that when the pad is not working or the switch misbehaves,
            check that the upper and lower control lines are connected properly, and inspect the belt for an obstruction
            or jam.</li>
          </ol>
          <p>
            If none of that helps, note the model number and the production code on the white label on the back of the pad;
            UREVO asks for both, with a video or photo of the fault, before it will diagnose a problem.
          </p>`,
    },
    {
      id: 'error-codes',
      heading: 'UREVO Error Codes and What to Do',
      html: `          <p>
            UREVO’s codes are not identical across models, and its FAQ groups them loosely. The FAQ, read on 27 November
            2026, gives two groups:
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[560px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Codes (UREVO FAQ)</th><th class="${th}">UREVO’s advice</th><th class="${th}">What it usually means</th></tr></thead>
            <tbody>
              <tr><td class="${td}">E0, E7, E10</td><td class="${td}">Reinstall the safety lock magnet and adjust its position; contact support if it persists</td><td class="${td}">The pad cannot detect the safety key</td></tr>
              <tr><td class="${td}">E1, E02, E04, E5, E6, E8, U01, E11, E12, E13</td><td class="${td}">Open the motor cover and make sure the wire control is installed correctly; contact support if it persists</td><td class="${td}">Communication, wiring or motor-protection faults</td></tr>
            </tbody>
          </table></div>
          <p>
            The Foldi 3S manual on UREVO’s site gives a fuller table for that model. It is the most detailed UREVO source we
            found, but treat it as a guide for other models, not a rule:
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[620px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Code (Foldi 3S manual)</th><th class="${th}">Fault, per UREVO</th><th class="${th}">What the manual says to do</th></tr></thead>
            <tbody>
              <tr><td class="${td}">E01</td><td class="${td}">Communication interrupted between controller and display</td><td class="${td}">Unplug, open the motor hood, check the controller-to-display connection; contact after-sales if it remains</td></tr>
              <tr><td class="${td}">E02</td><td class="${td}">Open circuit of the motor</td><td class="${td}">Check the motor wires are firmly plugged into the lower control board; reseat a loose terminal</td></tr>
              <tr><td class="${td}">E03</td><td class="${td}">“Flame protection”</td><td class="${td}">Check the controller-to-motor connection and for a loose power connector under the hood</td></tr>
              <tr><td class="${td}">E04</td><td class="${td}">Over-current protection</td><td class="${td}">Check user weight against the limit (120 kg on the Foldi 3S), foreign objects in the rollers or motor, and an over-tight or dry belt</td></tr>
              <tr><td class="${td}">E05</td><td class="${td}">Communication fault between upper meter and upper control</td><td class="${td}">Check the wire between them</td></tr>
              <tr><td class="${td}">E06</td><td class="${td}">Controller self-check error</td><td class="${td}">Replace the lower control board</td></tr>
              <tr><td class="${td}">E07</td><td class="${td}">Parameter loss</td><td class="${td}">Reprogram or replace the control board</td></tr>
              <tr><td class="${td}">E08</td><td class="${td}">EEPROM damage</td><td class="${td}">Change the control panel</td></tr>
              <tr><td class="${td}">E10</td><td class="${td}">Safety lock has fallen off; no signal for 1 second</td><td class="${td}">Reinsert the safety lock or replace it</td></tr>
              <tr><td class="${td}">E12</td><td class="${td}">Gyroscope fault</td><td class="${td}">A part only UREVO or a technician should replace</td></tr>
            </tbody>
          </table></div>
          <p>
            Note the conflict: the FAQ groups E7 with the safety-key codes, while the Foldi 3S manual calls E07 parameter
            loss. If reseating the key does not clear an E7 on your pad, treat it as a control-board fault. The manual’s own
            rule is the one to follow for any code: stop the workout immediately, restart, and contact after-sales if the
            code comes back. Board and EEPROM codes (E06 to E08) are not owner repairs; while the pad is under warranty,
            opening it further than UREVO asks may complicate a claim.
          </p>`,
    },
    {
      id: 'belt',
      heading: 'Belt Slipping, Drifting or Stopping Under Load',
      html: `          <p>
            Belt problems are the most common UREVO fault after the safety key, and UREVO’s support pages link to its own
            videos for both. The Foldi 3S manual gives the turns:
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[560px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Symptom</th><th class="${th}">Adjustment (UREVO Foldi 3S manual)</th><th class="${th}">Then</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Belt has moved to the left</td><td class="${td}">Turn the left rear roller screw 1/4 turn clockwise</td><td class="${td}">Run 1–2 minutes, repeat until centred</td></tr>
              <tr><td class="${td}">Belt has moved to the right</td><td class="${td}">Turn the right rear roller screw 1/4 turn clockwise</td><td class="${td}">Run 1–2 minutes, repeat until centred</td></tr>
              <tr><td class="${td}">Belt slips or hesitates</td><td class="${td}">Turn both screws 1/2 turn clockwise (the troubleshooting table says 1/4)</td><td class="${td}">Walk 1–2 minutes at 2–3 mph, repeat as needed</td></tr>
            </tbody>
          </table></div>
          <p>
            Power off and unplug before turning anything, use the hex key supplied with the pad, and make the same number
            of turns on both sides when tightening so you do not create a drift. UREVO warns that the belt should not be
            adjusted too tightly or it will be damaged; an over-tight belt is also one of the causes the manual gives for an
            E04 over-current code.
          </p>
          <p>
            UREVO’s FAQ adds two related answers. If the belt stops when you step on it, tightening it usually solves it.
            If the belt is shaking, add lubricant and see if it improves; if it does not, contact after-sales. A large mark
            across the belt is not a fault: UREVO says it is the belt’s joint, which every treadmill has. For a step-by-step
            walk-through with photos, see our <a href="/walking-pad-belt-slipping/" class="${a}">walking pad belt slipping</a>
            guide.
          </p>`,
    },
    {
      id: 'lubrication',
      heading: 'Lubrication, Burning Smell and Noise',
      html: `          <p>
            UREVO’s answer to a burning smell and to most noise is the same: lubricate. Its support pages for the Strol 2E
            and SpaceWalk 3S say to add lubricant under the belt on both sides, let the pad idle for 5 to 10 minutes so the
            lubricant soaks into the deck, and let it sit for a day before using it again.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Step (Foldi 3S manual)</th><th class="${th}">Detail</th></tr></thead>
            <tbody>
              <tr><td class="${td}">1. Power off and unplug</td><td class="${td}">Always before touching the belt</td></tr>
              <tr><td class="${td}">2. Loosen both roller screws</td><td class="${td}">Count the turns so you can restore the tension</td></tr>
              <tr><td class="${td}">3. Lift the belt edges</td><td class="${td}">Spray at the centre of the deck; not the whole deck</td></tr>
              <tr><td class="${td}">4. Amount</td><td class="${td}">5–10 ml per application; too much makes the belt slip</td></tr>
              <tr><td class="${td}">5. Re-tighten</td><td class="${td}">Same number of turns clockwise on both screws</td></tr>
              <tr><td class="${td}">6. Spread it</td><td class="${td}">Walk a few minutes, holding the rail, at about 4 mph</td></tr>
              <tr><td class="${td}">How often</td><td class="${td}">UREVO recommends about every 100 miles</td></tr>
            </tbody>
          </table></div>
          <p>
            <strong>Burning smell.</strong> UREVO’s FAQ says to lubricate first, then check the motor head, the small drive
            belt and the fan for anything sucked in. If all of that looks normal and the smell persists, UREVO says the
            motor may need replacing and to contact it. Stop using a pad that smells of burning plastic or shows smoke; our
            <a href="/treadmill-burning-smell/" class="${a}">treadmill burning smell</a> guide explains the difference between
            a dry belt and an electrical fault.
          </p>
          <p>
            <strong>Noise.</strong> UREVO’s support pages say to check first whether the noise only happens when you walk;
            if so, it is your feet on the deck and normal. If the pad is loud with no one on it, add oil under the belt and
            run it for 15 minutes unloaded, then open the motor cover to look for anything caught in the motor. The Foldi 3S
            manual adds that friction noise usually means the belt is off centre. Our
            <a href="/walking-pad-making-noise/" class="${a}">walking pad making noise</a> guide sorts noises by sound. UREVO
            also notes that a little black powder under a pad after long use is normal.
          </p>`,
    },
    {
      id: 'remote',
      heading: 'Remote, Child Lock and Mode Problems',
      html: `          <p>
            Many UREVO pads are run mainly from the remote or app, so a remote fault looks like a dead pad. UREVO’s FAQ and
            manual give these fixes:
          </p>
          <ul>
            <li><strong>Remote not responding.</strong> The Foldi 3S manual lists three causes: not aiming it at the receiver,
            a weak battery and a faulty remote. Point it straight at the pad and fit a new battery.</li>
            <li><strong>Battery cover will not open.</strong> UREVO says to lift the edge of the gap with a fingernail, or
            carefully with a small tool.</li>
            <li><strong>Battery drains quickly or buttons fail.</strong> UREVO says to contact it and it will send a
            replacement remote.</li>
            <li><strong>Remote needs pairing, or two pads interfere.</strong> UREVO asks for your model number and pairs the
            remote for that model; it does not publish one pairing method for all pads.</li>
            <li><strong>Lost remote.</strong> UREVO’s store sold replacements for $39.99 to $49.99 on 27 November 2026.</li>
            <li><strong>Child lock on.</strong> With the pad in standby, hold the remote’s speed-up button for more than 5
            seconds until it beeps and the child-lock light goes off.</li>
            <li><strong>Mode will not change.</strong> UREVO says the pad cannot switch modes while running: stop it, change
            the mode, then press start.</li>
          </ul>
          <p>
            If the pad works from its own buttons or the app but not the remote, the remote is the problem, not the pad. Our
            <a href="/walking-pad-not-working/" class="${a}">walking pad not working</a> guide covers remotes on other brands.
          </p>`,
    },
    {
      id: 'app-incline',
      heading: 'App, Bluetooth, Incline and Handrail Fixes',
      html: `          <p>
            <strong>App and Bluetooth.</strong> UREVO’s FAQ says only some models connect to the UREVO app over Bluetooth: the
            Strol 2E, Strol 2S Pro, Foldi 3S, CyberPad for Home, SpaceWalk 3S, SpaceWalk E1L and SpaceWalk E4W, and some of
            those are also sold in non-Bluetooth versions. If your pad never appears in the app, check which version you
            bought before troubleshooting the phone. Binding the pad in the app is also how you register the extra 180
            days of warranty.
          </p>
          <p>
            <strong>Incline not lifting.</strong> UREVO’s FAQ says to turn off the power and restart; if the lift still fails,
            contact customer service. On manual-incline models such as the Strol 2E Pro, the incline is set by hand before
            you walk, so it will not move from the remote at all.
          </p>
          <p>
            <strong>Handrail or column.</strong> If the handrail post will not lift, UREVO suggests slightly loosening the
            screws on both sides of the column. If the handrail is loose, reinstall it following UREVO’s video. If the column
            shakes, tighten the screws on both sides. Fold-up bars take a lot of leverage, so recheck those screws every few
            weeks.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Symptom</th><th class="${th}">Most likely cause</th><th class="${th}">Owner fix?</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Pad not in the app</td><td class="${td}">Non-Bluetooth version or unsupported model</td><td class="${td}">Check the model and version</td></tr>
              <tr><td class="${td}">Incline will not rise</td><td class="${td}">Lift motor fault or a glitch</td><td class="${td}">Restart, then contact UREVO</td></tr>
              <tr><td class="${td}">Handrail post stuck</td><td class="${td}">Column screws too tight</td><td class="${td}">Loosen slightly</td></tr>
              <tr><td class="${td}">Handrail or column wobbles</td><td class="${td}">Loose screws</td><td class="${td}">Tighten both sides</td></tr>
            </tbody>
          </table></div>`,
    },
    {
      id: 'when-to-stop',
      heading: 'When to Stop and Contact UREVO',
      html: `          <p>
            Stop using the pad and contact UREVO, rather than continuing to troubleshoot, if any of these happen:
          </p>
          <ul>
            <li>A burning smell that lubrication does not cure, smoke, or a <a href="/treadmill-trips-breaker/" class="text-[#0F62FE] font-medium" data-autolink>tripped breaker</a>.</li>
            <li>Any board-level code (E06, E07 or E08 on the Foldi 3S table) or a code that returns after a restart.</li>
            <li>The <a href="/how-to-turn-on-a-treadmill/" class="text-[#0F62FE] font-medium" data-autolink>power switch</a> is stuck on or off.</li>
            <li>The belt still slips or drifts after the adjustments above, or rubs the frame.</li>
            <li>The pad speeds up, slows or stops without input.</li>
          </ul>
          <p>
            UREVO listed these contacts on 27 November 2026: email contact@urevo.com, live chat Monday to Friday 8 am to
            5 pm Pacific, and a US phone line. Send the order number, the platform you bought from, a video or photo of the
            fault and the production code from the white label on the back of the pad. UREVO says a prepaid return label is
            provided for quality problems if needed.
          </p>
          <p>
            <strong>Warranty.</strong> UREVO’s store and warranty policy give one year plus 180 days if you bind the pad in
            its app and register a 22–23 character serial number (for purchases on or after 20 March 2026); its FAQ also
            says UREVO.com orders get two years by default. Our
            <a href="/how-much-does-a-urevo-walking-pad-cost/" class="${a}">UREVO walking pad cost</a> page sets out the
            differences, and our <a href="/treadmill-warranty-guide/" class="${a}">treadmill warranty guide</a> explains
            what to keep for a claim.
          </p>`,
    },
    {
      id: 'prevent',
      heading: 'How to Keep a UREVO Pad Out of Trouble',
      html: `          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">How often</th><th class="${th}">Task</th><th class="${th}">Why</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Every session</td><td class="${td}">Stay within the pad’s weight limit and speed range</td><td class="${td}">Over-limit use is a listed cause of E04</td></tr>
              <tr><td class="${td}">Weekly</td><td class="${td}">Wipe with a damp cloth, no acidic or caustic cleaners</td><td class="${td}">UREVO’s cleaning instruction</td></tr>
              <tr><td class="${td}">About every 100 miles</td><td class="${td}">Lubricate 5–10 ml under the belt</td><td class="${td}">Prevents smell, noise and slipping</td></tr>
              <tr><td class="${td}">Monthly</td><td class="${td}">Check belt centring and column screws</td><td class="${td}">Small drift is easy to correct early</td></tr>
              <tr><td class="${td}">On arrival</td><td class="${td}">Bind the pad in the app and register the serial number</td><td class="${td}">Activates the extra 180 days of warranty</td></tr>
            </tbody>
          </table></div>
          <p>
            Put the pad on a firm, level surface or a mat rather than thick carpet, which lets fibres into the deck and holds
            heat. Our <a href="/walking-pad-overheating/" class="${a}">walking pad overheating</a> guide explains run-time
            limits, and our <a href="/how-to-lubricate-a-walking-pad/" class="${a}">walking pad lubrication guide</a> covers
            which lubricant to buy. A pad that gets ten minutes of care a month avoids most of the faults on this page.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'What does E10 mean on a UREVO walking pad?',
      a: `UREVO’s FAQ and its Foldi 3S manual both tie E10 to the safety lock: the pad has not detected the magnetic key for a second. Reseat or reposition the key; UREVO will send a new one if the magnet is weak or detached.`,
    },
    {
      q: 'Why does my UREVO walking pad keep showing E?',
      a: `A flashing letter “E” on its own is UREVO’s standby symbol, according to its FAQ, and the pad can be used normally. A code with a number, such as E01 or E10, is a fault.`,
    },
    {
      q: 'How do I tighten a UREVO walking pad belt?',
      a: `Unplug the pad and turn both rear roller screws clockwise by the same amount with the hex key; UREVO’s Foldi 3S manual says 1/2 turn, then walk 1–2 minutes at 2–3 mph and repeat if needed. Do not over-tighten it.`,
    },
    {
      q: 'How do I turn off child lock on a UREVO walking pad?',
      a: `With the pad in standby, hold the speed-up button on the remote for more than 5 seconds. UREVO says you will hear a beep and the child-lock light will go off.`,
    },
    {
      q: 'Why does my UREVO walking pad smell like burning?',
      a: `UREVO says to lubricate under the belt, idle it for 5 to 10 minutes and let it sit for a day, then check the motor head, drive belt and fan for debris. If the smell persists, the motor may need replacing; contact UREVO.`,
    },
    {
      q: 'How do I pair a UREVO remote?',
      a: `UREVO does not publish one pairing method for every pad. Its FAQ asks you to send the model number so it can pair the remote for that model, and it sells replacement remotes for $39.99 to $49.99.`,
    },
  ],
  mistakesHeading: 'Common Mistakes When Fixing a UREVO Walking Pad',
  mistakesIntro: `Most UREVO repairs are small, but a few habits turn a five-minute fix into a warranty claim.`,
  mistakes: [
    {
      title: 'Opening the motor cover with the pad plugged in',
      body: `UREVO’s manual says to power off and unplug before any check under the hood. Unplug it, wait, and only then check the wires.`,
    },
    {
      title: 'Over-tightening a slipping belt',
      body: `An over-tight belt damages the belt and is a listed cause of E04. Turn both screws by the same small amount and test before turning again.`,
    },
    {
      title: 'Using too much lubricant',
      body: `UREVO gives 5 to 10 ml per application and warns that too much makes the belt slip. Apply it to the centre of the deck, not everywhere.`,
    },
    {
      title: 'Not registering the pad in the app',
      body: `UREVO’s extra 180 days of warranty depends on binding the pad and its serial number in the app. Do it before you need it.`,
    },
  ],
  relatedHeading: 'Related UREVO and Walking Pad Fix Guides',
  related: [
    {
      kicker: 'Fix',
      title: 'Walking Pad Not Working',
      blurb: 'Power, belt and remote checks for every brand.',
      url: '/walking-pad-not-working/',
    },
    {
      kicker: 'Fix',
      title: 'WalkingPad Troubleshooting',
      blurb: 'Error codes, SAFE and Rest messages and remote pairing on WalkingPad.',
      url: '/walkingpad-troubleshooting/',
    },
    {
      kicker: 'Brand',
      title: 'UREVO Treadmill Guide',
      blurb: 'The range, conflicting figures, warranty and returns.',
      url: '/urevo-treadmills/',
    },
    {
      kicker: 'Fix',
      title: 'Walking Pad Belt Slipping',
      blurb: 'Tension and centring, step by step.',
      url: '/walking-pad-belt-slipping/',
    },
    {
      kicker: 'Price',
      title: 'How Much Does a UREVO Walking Pad Cost?',
      blurb: 'Every model priced, parts and the warranty terms.',
      url: '/how-much-does-a-urevo-walking-pad-cost/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">Most UREVO faults are the safety key, a loose wire, the belt or the remote.</strong> Reseat the
            magnetic key for E0, E7 or E10, check the control wire under the cover for the E1 to E13 group, tighten or centre
            the belt with small, equal turns, and lubricate 5 to 10 ml about every 100 miles.`,
    `<strong class="text-white">Stop and contact UREVO for smoke, board codes or a stuck switch.</strong> Send the model
            number, production code and a video, and register the pad in the app for the extra warranty. For other brands,
            start with our
            <a href="/walking-pad-not-working/" class="text-[#5AA9FF] font-bold no-underline">walking pad not working</a> guide.`,
  ],
};

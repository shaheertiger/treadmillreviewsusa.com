const th = 'text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4';
const td = 'border-b border-gray-100 py-2 pr-4 text-gray-700';
const a = 'text-[#0F62FE] font-medium';

export default {
  slug: 'walking-pad-belt-slipping',
  title: 'Walking Pad Belt Slipping or Off-Center: How to Fix It',
  description:
    'A slipping walking pad belt usually needs lubricant first, then equal 1/4 turns on both rear bolts. Off-center? Turn one bolt 1/4 turn and wait. Full steps.',
  crumbLabel: 'Walking Pad Belt Slipping',
  breadcrumb: { name: 'Fault Diagnosis', url: '/problems/' },
  kicker: 'Troubleshooting',
  updated: 'November 2026',
  updatedLong: 'November 23, 2026',
  published: '2026-11-23',
  socialProof: '1.1k',
  h1: ['Walking Pad Belt Slipping or Off-Center?', 'How to Fix It'],
  standfirst:
    'A walking pad belt that slips is usually dry before it is loose, and a belt that wanders to one side usually needs one small turn of one rear bolt, plus a level floor. Work out which of the three belt faults you have, then fix it in order: lubricate, tension, track.',
  ctas: [
    { label: 'Which Belt Fault Is It?', href: '#diagnose' },
    { label: 'Fix an Off-Center Belt', href: '#tracking' },
  ],
  tags: [
    'walking pad belt slipping',
    'walking pad belt off center',
    'walking pad belt not centered',
    'walking pad belt moving to one side',
    'how to tighten walking pad belt',
    'walking pad belt adjustment',
    'under desk treadmill belt slipping',
  ],
  stickyCta: { text: 'Which Belt Fault Is It?', link: '#diagnose' },
  lead: `Walking pads are hard on their belts in ways a full treadmill is not. The belt is short, so every point on it
          passes under your foot far more often. The rollers are small and the deck is low, so there is little margin for a
          belt that is a touch dry or a touch loose. And because most people use them under a desk, they walk for long,
          steady sessions, often standing slightly to one side of centre because that is where the keyboard is. None of
          that means walking pads are fragile; it means belt care matters more and shows up sooner. This page goes deeper
          than the short belt section in our <a href="/walking-pad-not-working/" class="${a}">walking pad not working</a>
          guide. It covers how to tell a slip from a drift from a hesitation, why the order of the fixes matters, how to
          use the hex key on the rear roller bolts without making things worse, and when the belt is a warranty claim
          rather than an adjustment. Where a step depends on your model, we say so and point you to the manual, because
          adjustment directions and maintenance rules differ between brands.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'The Short Answer',
      html: `          <p>
            <strong>If the belt slips or stalls under your foot, lubricate the deck as your manual says before you touch
            tension; if it still slips, tighten both rear bolts equally a quarter turn at a time. If it drifts to one side,
            level the pad, then turn only the bolt the manual names for that side, a quarter turn, and wait a minute before
            judging.</strong>
          </p>
          <ul>
            <li><strong>Slipping</strong> (the belt stops or lurches when you plant a foot): dry deck first, loose belt second.</li>
            <li><strong>Drifting</strong> (the belt creeps toward one side rail): tracking, floor level, or where you walk.</li>
            <li><strong>Hesitating</strong> (the belt slows with each step but does not slip): dryness, load or the drive side.</li>
            <li><strong>Adjust in quarter turns,</strong> unplugged for tension, and from beside the pad, never standing on it, for tracking.</li>
            <li><strong>On a new pad,</strong> one or two re-tension and re-centre jobs in the first weeks are normal; constant re-adjustment is not.</li>
          </ul>
          <p>
            Unplug at the wall before you put a tool near the rollers or reach under the belt. If you smell burning, the
            motor hums without moving the belt, or the belt keeps moving after you pull the safety key, stop: that is a
            fault, not an adjustment. For the same symptoms on a full-size machine, see
            <a href="/treadmill-belt-slipping/" class="${a}">treadmill belt slipping</a>.
          </p>`,
    },
    {
      id: 'diagnose',
      heading: 'Slipping, Drifting or Hesitating? Work Out Which One First',
      html: `          <p>
            Owners describe all three faults as &ldquo;the belt is slipping&rdquo;, but they have different causes and,
            crucially, different fixes. Tightening a belt that is actually drifting does nothing useful. Tightening a belt
            that is actually dry makes the motor work harder against more friction. So spend two minutes watching before
            you pick up the hex key.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">What you notice</th><th class="${th}">What it usually is</th><th class="${th}">Check this first</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Belt stops or jumps for a split second as your heel lands; the motor keeps running</td><td class="${td}">True slip: belt losing grip on the rear or front roller</td><td class="${td}">Deck lubrication, then belt tension</td></tr>
              <tr><td class="${td}">Belt slows with each step, then recovers; may be noisier than usual</td><td class="${td}">Hesitation: too much drag for the motor</td><td class="${td}">Dry deck, user weight versus rated capacity, then the drive side</td></tr>
              <tr><td class="${td}">Belt creeps steadily toward one side rail when running empty</td><td class="${td}">Tracking out of adjustment</td><td class="${td}">Floor level, then the rear bolt on the side it runs toward</td></tr>
              <tr><td class="${td}">Belt is centred when empty but drifts when you walk on it</td><td class="${td}">Footstrike bias or a stretched belt</td><td class="${td}">Where you stand relative to the desk; belt condition</td></tr>
              <tr><td class="${td}">Belt re-centres, then drifts again within a day</td><td class="${td}">Floor, mat or frame, not the bolts</td><td class="${td}">Level the pad on a hard surface</td></tr>
              <tr><td class="${td}">Motor whirs, belt barely moves, possibly a squeal</td><td class="${td}">Very loose running belt or a slipping drive belt inside</td><td class="${td}">Stop; check tension; contact support if it persists</td></tr>
            </tbody>
          </table></div>
          <p>
            <strong>A simple test for true slip.</strong> Run the pad at a slow walking speed and stand with one foot
            planted, as if braking gently. A belt that is slipping on the roller will stop under your foot while you can
            still hear the motor and see the roller turning (or hear it spin). A belt that is only hesitating slows
            everything down together, motor included, which points to drag or load rather than grip.
          </p>
          <p>
            <strong>A simple test for drift.</strong> Clear the belt, start it with the remote or the pad&rsquo;s button at
            the low end of its speed range, step off to the side, and watch the gap between the belt edge and each side
            cover for a minute. Some pads stop automatically when nobody is on the belt; if yours does, follow the
            manual&rsquo;s adjustment procedure, which will say how it wants you to run the belt during tracking.
          </p>
          <p>
            Also notice <em>when</em> it started. A fault that appeared after you moved the pad, stored it on its side or
            put it on a new rug is almost always mechanical alignment. A fault that crept in over weeks of daily use is
            usually the deck drying out or the belt bedding in.
          </p>`,
    },
    {
      id: 'lubricate',
      heading: 'Step 1: Lubricate Before You Tighten',
      html: `          <p>
            On a walking pad, the belt runs over a flat deck, and the underside of the belt rubs that deck with every step.
            When the lubricant between them wears thin, friction rises. Under a foot, that friction holds the belt back while
            the rear roller keeps turning, which feels exactly like a loose belt. Tightening it at this point increases the
            pressure on the rollers and their bearings and adds more load for a small motor that was already struggling.
            That is why the order is always lubrication first.
          </p>
          <p>
            Signs that dryness is the cause rather than tension:
          </p>
          <ul>
            <li>The slip or hesitation is worse after long sessions and better after a rest.</li>
            <li>The underside of the belt, felt at the edge with the pad unplugged, is dry and slightly grabby rather than smooth.</li>
            <li>The pad has become louder, or squeaks with each step.</li>
            <li>The pad is warm to the touch around the motor cover after shorter sessions than it used to manage.</li>
            <li>It has been longer than the manual&rsquo;s lubrication interval, or you have never done it.</li>
          </ul>
          <p>
            Check the manual before adding anything. Many pads ship with a small bottle of silicone lubricant and give an
            interval, but some are sold with a pre-treated or maintenance-free deck, and adding lubricant to those can cause
            slipping rather than cure it. Use only the 100% silicone treadmill lubricant the maker specifies, never household
            oil or general-purpose sprays. Because a walking pad has no frame to lift the belt against, the method differs
            from a full treadmill; our step-by-step
            <a href="/how-to-lubricate-a-walking-pad/" class="${a}">how to lubricate a walking pad</a> guide covers
            loosening the rear roller just enough to reach under the belt and putting the tension back exactly. If you
            need to buy lubricant, see <a href="/best-treadmill-lubricant/" class="${a}">best treadmill lubricant</a>.
          </p>
          <p>
            After lubricating, walk at a slow speed for a few minutes to spread it, then re-test. Quite often the slip has
            gone and no tension change is needed at all. Only if it has not should you move on to the bolts.
          </p>`,
    },
    {
      id: 'tension',
      heading: 'Step 2: Tighten the Belt, a Quarter Turn at a Time',
      html: `          <p>
            Most walking pads adjust the running belt at the rear roller. At the back of the pad, usually through a hole in
            each end cap, there is a bolt on the left and one on the right. Turning both by the same amount moves the rear
            roller backwards or forwards, which tightens or loosens the belt. Turning one only steers it, which is the
            tracking adjustment covered next. Most pads come with a hex key that fits these bolts; if yours did not, the
            manual will give the size.
          </p>
          <ol>
            <li><strong>Unplug the pad</strong> and remove the safety key or magnet if it has one.</li>
            <li><strong>Mark both bolt heads</strong> with a pencil or tape so you can count exactly how far you have turned
            each one. If you ever need to undo the change, you will know the starting point.</li>
            <li><strong>Turn both bolts a quarter turn</strong> in the tightening direction your manual gives. On many pads
            that is clockwise, but do not assume it: the convention depends on how the roller mount is built.</li>
            <li><strong>Plug in and re-test</strong> with the one-foot braking test at a slow walking speed.</li>
            <li><strong>Repeat</strong> another equal quarter turn only if it still slips. Stop as soon as the slip stops.</li>
            <li><strong>Check tracking</strong> afterwards, because even a careful tension change can nudge the belt sideways.</li>
          </ol>
          <p>
            <strong>How tight is right?</strong> Many manuals describe a check, such as how far the belt edge should lift at
            the middle of the deck. Use your manual&rsquo;s check if it gives one. Without it, the rule is: just tight enough
            not to slip under a firm step, and no tighter. A belt that is over-tightened puts constant load on the roller
            bearings, stretches faster, and makes the motor and controller work harder, which on a compact pad can show up
            as overheating or cut-outs.
          </p>
          <p>
            <strong>If several turns do not cure it,</strong> stop adding more. A belt that needs a lot of extra tension to
            stop slipping is telling you something else is wrong: the deck is still dry, the belt has stretched beyond its
            adjustment range, the belt underside is glazed, or the drive side is slipping. Those are covered further down.
            For a wider explanation of tension on full treadmills, see
            <a href="/how-to-adjust-treadmill-belt/" class="${a}">how to adjust a treadmill belt</a>.
          </p>`,
    },
    {
      id: 'tracking',
      heading: 'Step 3: Re-Center a Walking Pad Belt That Drifts',
      html: `          <p>
            Tracking is a one-bolt job. Moving one end of the rear roller slightly forward or back changes the angle of the
            roller, and the belt steers across it. The adjustment is small and the belt responds slowly, which is why most
            people over-correct.
          </p>
          <ol>
            <li><strong>Level the pad first</strong> (see the floor section below). Tracking a pad that is not level is
            wasted effort.</li>
            <li><strong>Run the belt empty</strong> at a slow speed, standing beside the pad with the safety key or remote
            in reach. Keep fingers, hair, cords and loose clothing clear of the rear roller.</li>
            <li><strong>Note which side it drifts toward</strong> and how fast.</li>
            <li><strong>Turn only the bolt your manual names for that side, a quarter turn,</strong> in the direction it
            gives. On many pads the rule is to tighten the bolt on the side the belt is drifting toward, but some manuals
            describe it the other way or use different hardware, so check yours.</li>
            <li><strong>Wait at least a minute</strong> before judging. A short belt responds faster than a long one, but
            not instantly.</li>
            <li><strong>Repeat or stop.</strong> If it now drifts the other way, you went too far: undo half the last turn.
            Stop when the belt runs with roughly equal gaps either side and is not touching anything.</li>
          </ol>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Belt does this</th><th class="${th}">Usual adjustment (confirm in your manual)</th><th class="${th}">Then</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Drifts toward the left side cover</td><td class="${td}">Left rear bolt, a quarter turn</td><td class="${td}">Wait a minute, re-check</td></tr>
              <tr><td class="${td}">Drifts toward the right side cover</td><td class="${td}">Right rear bolt, a quarter turn</td><td class="${td}">Wait a minute, re-check</td></tr>
              <tr><td class="${td}">Overshoots to the other side</td><td class="${td}">Undo half your last turn on the same bolt</td><td class="${td}">Smaller steps from here</td></tr>
              <tr><td class="${td}">Edge is rubbing or riding up on a side cover</td><td class="${td}">Stop the pad now; re-centre before any use</td><td class="${td}">Inspect the edge for fraying</td></tr>
              <tr><td class="${td}">Centred empty, drifts under you</td><td class="${td}">Do not chase it with the bolts yet</td><td class="${td}">Check where you walk, then belt wear</td></tr>
            </tbody>
          </table></div>
          <p>
            <strong>The under-desk effect.</strong> Walking pads have a particular drift that has nothing to do with the
            bolts. If the pad is not centred under your desk, or your keyboard sits off to one side, you tend to walk on one
            half of the belt, and the push from that foot slowly steers the belt toward the other. Before you adjust anything
            for a belt that only drifts while you walk on it, centre the pad under your work area and walk in the middle for
            a session. Our guide to
            <a href="/standing-desk-height-for-walking-pad/" class="${a}">standing desk height for a walking pad</a>
            helps with the set-up. The full quarter-turn method, with the reasoning behind each step, is in
            <a href="/how-to-center-treadmill-belt/" class="${a}">how to center a treadmill belt</a>.
          </p>`,
    },
    {
      id: 'new-pad',
      heading: 'Why New Walking Pad Belts Loosen and Wander',
      html: `          <p>
            A new belt bedding in is the single most common reason for a slip or drift in the first weeks. The belt is a
            woven, coated loop, and in its first hours of use under load it settles and lengthens slightly. The pad may
            also have been shaken about in shipping and stored on its side or end in a warehouse. So a brand-new pad that
            needs one or two small tension and tracking corrections early on is behaving normally, and many manuals include
            a run-in check for exactly this reason.
          </p>
          <ul>
            <li><strong>Before first use,</strong> lay the pad flat on its final spot for a while, check it is level, and
            run it empty to confirm it tracks centrally.</li>
            <li><strong>Start with easy sessions.</strong> Short, slow walks first let the belt settle before long desk
            sessions.</li>
            <li><strong>Re-check tension and centring</strong> after the first few sessions and again after the first couple
            of weeks.</li>
            <li><strong>Lubricate only as the manual says.</strong> Many new pads have lubricant already applied at the
            factory, and adding more straight away can cause slipping.</li>
          </ul>
          <p>
            What is <em>not</em> normal on a new pad: needing re-tensioning every few days, a belt that keeps drifting no
            matter how it is adjusted on a level floor, visible damage to the belt edge, or a slip that stays after
            lubrication and a moderate tension change. Those point to a defective belt, roller or frame and are worth
            raising with the seller while you are inside the return window, not just the warranty.
          </p>`,
    },
    {
      id: 'auto-centering',
      heading: 'What &ldquo;Auto-Centering&rdquo; and &ldquo;Maintenance-Free&rdquo; Really Mean',
      html: `          <p>
            Some walking pads are marketed with an auto-centering, self-aligning or anti-deviation belt, and some with a
            maintenance-free or pre-lubricated deck. These are real design features, but read them as &ldquo;needs
            adjusting less often&rdquo;, not &ldquo;never needs adjusting&rdquo;.
          </p>
          <ul>
            <li><strong>Auto-centering</strong> generally relies on the shape of the rollers or guides at the belt edges to
            nudge the belt back toward the middle. That helps with small, everyday wander. It cannot overcome a pad sitting
            on an uneven floor, a soft rug that compresses on one side, a frame that has been twisted in storage, or a rear
            roller that is clearly out of square. If the belt on an auto-centering pad drifts steadily to one side, treat it
            like any other pad: level first, then a small tracking correction per the manual.</li>
            <li><strong>Maintenance-free decks</strong> are designed to need less or no added lubricant. If yours is sold
            that way, follow that instruction, and if it starts slipping, contact the seller before lubricating it
            yourself, particularly while it is under warranty.</li>
            <li><strong>No adjustment bolts visible?</strong> A few compact designs hide them behind end caps or covers.
            Check the manual or the brand&rsquo;s support pages for how to reach them before prising anything off.</li>
          </ul>
          <p>
            We do not list brand-by-brand procedures here because they are not published consistently and they change
            between models. The manual that came with your pad, or the brand&rsquo;s support page for your exact model
            number, is the authority.
          </p>`,
    },
    {
      id: 'floor',
      heading: 'Levelling and Floor Surface: The Fix People Skip',
      html: `          <p>
            A full treadmill has a heavy frame that resists twisting. A walking pad is light and flat, so it takes the shape
            of whatever it sits on. If one rear corner is a few millimetres lower than the other, the frame flexes slightly,
            the rear roller is no longer square to the front one, and the belt walks toward the low side. No amount of bolt
            turning will hold it for long, because the frame changes shape again every time the floor compresses.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Surface</th><th class="${th}">Effect on the belt</th><th class="${th}">What to do</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Hard floor (wood, tile, laminate, concrete)</td><td class="${td}">Most stable, if the floor itself is flat</td><td class="${td}">A thin, firm mat to protect the floor and reduce dust</td></tr>
              <tr><td class="${td}">Firm equipment mat</td><td class="${td}">Stable; stops creeping on smooth floors</td><td class="${td}">Ideal; make sure the whole pad sits on it</td></tr>
              <tr><td class="${td}">Low-pile carpet</td><td class="${td}">Usually workable; can compress unevenly over time</td><td class="${td}">Put a firm mat on top; re-check level after a week</td></tr>
              <tr><td class="${td}">Thick carpet or plush rug</td><td class="${td}">Compresses unevenly; frame flexes; motor airflow blocked</td><td class="${td}">Avoid; use a rigid board or firm mat on top at minimum</td></tr>
              <tr><td class="${td}">Floor with a dip, seam or threshold strip</td><td class="${td}">Twists the frame; belt drifts toward the low side</td><td class="${td}">Move the pad, or shim the low corner as the manual allows</td></tr>
            </tbody>
          </table></div>
          <p>
            <strong>How to check.</strong> Put a spirit level (or a level app on your phone) across the pad from side to
            side at the front and at the rear, with the pad switched off. Press down on each corner in turn; a pad that rocks
            is not sitting flat. Some pads have adjustable feet; most simply have fixed feet or pads, so you fix the floor
            rather than the pad. Then re-centre the belt.
          </p>
          <p>
            Storage matters too. Sliding a pad under a sofa or bed where the frame can bend, or standing it on end against
            a wall when the manual does not say that is fine, can knock the rollers out of line. If the belt drifts only
            after the pad has been stored, that is the likely reason. Our
            <a href="/best-treadmill-mats/" class="${a}">best treadmill mats</a> guide covers firm mats suitable for
            walking pads.
          </p>`,
    },
    {
      id: 'worn-belt',
      heading: 'Signs the Belt, Roller or Drive Belt Is Worn',
      html: `          <p>
            Lubrication, tension and tracking fix the large majority of belt complaints. When they do not, the hardware is
            usually worn or damaged. Unplug the pad and look closely along the full length of the belt, moving it round by
            hand.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Sign</th><th class="${th}">What it suggests</th><th class="${th}">Next step</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Frayed, curled or melted belt edge</td><td class="${td}">The belt has been rubbing a side cover</td><td class="${td}">Re-centre; replace the belt if the damage is more than cosmetic</td></tr>
              <tr><td class="${td}">Shiny, glazed or smooth underside</td><td class="${td}">The belt has lost grip on the roller or worn against a dry deck</td><td class="${td}">Belt replacement; tensioning harder will not hold</td></tr>
              <tr><td class="${td}">Cracks, bumps or a lifting seam</td><td class="${td}">Belt failing; often causes a thump once per revolution</td><td class="${td}">Stop using; replace the belt</td></tr>
              <tr><td class="${td}">Needs re-tensioning every few weeks, bolts near the end of travel</td><td class="${td}">Belt stretched beyond its adjustment range</td><td class="${td}">Belt replacement</td></tr>
              <tr><td class="${td}">Grinding or rumble from a roller end; roller wobbles</td><td class="${td}">Worn roller bearing</td><td class="${td}">Roller replacement; contact the brand for the part</td></tr>
              <tr><td class="${td}">Motor whirs but belt lags, squeal from the motor end</td><td class="${td}">Slipping drive belt inside the motor cover (on pads that use one)</td><td class="${td}">Support or a technician, especially under warranty</td></tr>
            </tbody>
          </table></div>
          <p>
            <strong>The running belt and the drive belt are different parts.</strong> The running belt is what you walk on.
            Many treadmills, and many walking pads, also have a small drive belt under the motor cover that links the motor
            to the front roller; some compact designs are built differently. If the running belt is properly tensioned and
            lubricated but the pad still loses speed under a footstep, and you hear the motor spin up, the drive side may be
            slipping. Opening the motor cover on a pad under warranty can affect cover, so contact the brand first. Our
            <a href="/treadmill-drive-belt/" class="${a}">treadmill drive belt</a> guide explains the difference in more
            detail.
          </p>
          <p>
            Replacement belts for walking pads are usually specific to the model, so get the part from the brand where
            possible, quoting the model and serial number. For general belt lifespan, see
            <a href="/how-often-should-a-treadmill-belt-be-replaced/" class="${a}">how often a treadmill belt should be replaced</a>,
            and for the pad as a whole, <a href="/how-long-do-walking-pads-last/" class="${a}">how long walking pads last</a>.
          </p>`,
    },
    {
      id: 'warranty',
      heading: 'When a Slipping or Drifting Belt Is a Warranty Claim',
      html: `          <p>
            Adjusting the belt is routine owner maintenance, and most manuals expect you to do it. But some belt problems
            are defects, and on a pad that is still inside its return window or warranty you should not keep adjusting your
            way around them. Contact the seller or brand when:
          </p>
          <ul>
            <li>The belt still slips after lubrication (or after confirming the deck is maintenance-free) and a moderate,
            equal tension change within what the manual allows.</li>
            <li>The belt will not stay centred on a level, hard floor despite careful quarter-turn tracking.</li>
            <li>The belt edge is frayed, the seam is lifting, or there is visible damage on a pad that is only weeks old.</li>
            <li>A roller grinds or wobbles, the adjustment bolt will not turn or is stripped, or an end cap is cracked.</li>
            <li>The motor hums, whirs or squeals while the belt lags, or there is any burning smell.</li>
          </ul>
          <p>
            Warranty length and what it covers vary by brand, model and seller, and some brands require registration or
            purchase from an authorised seller, so check the terms in your manual or on the listing. Have this ready:
          </p>
          <ul>
            <li>The model and serial number from the label on the pad</li>
            <li>Proof of purchase and where you bought it</li>
            <li>A short video of the belt running empty and with you walking, showing the slip or drift</li>
            <li>What you have already done: lubrication, the number of quarter turns on each bolt, levelling</li>
            <li>The surface the pad sits on and how it has been stored</li>
          </ul>
          <p>
            Keeping a note of your adjustments matters: it shows the support team you followed the manual and helps them
            decide quickly whether to send a part. For faults beyond the belt, our
            <a href="/treadmill-troubleshooting/" class="${a}">treadmill troubleshooting</a> hub lists every common
            problem in order.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'Why is my walking pad belt slipping?',
      a: `Most often because the deck has dried out, which drags on the belt under your foot so it feels loose. Lubricate as the manual says first. If it still slips, tighten both rear bolts equally, a quarter turn at a time, stopping as soon as the slip stops.`,
    },
    {
      q: 'How do I tighten a walking pad belt?',
      a: `Unplug it, mark both rear bolt heads, and turn each by the same quarter turn in the tightening direction your manual gives. Plug in and test with a firm step at a slow speed. Repeat only if it still slips, then check the belt is still centred.`,
    },
    {
      q: 'Why does my walking pad belt keep moving to one side?',
      a: `Usually the tracking needs a small adjustment, the pad is not level, or you walk to one side of the belt because of where your desk is. Level the pad on a hard surface, centre it under your work area, then make a quarter-turn tracking correction on one bolt as the manual describes.`,
    },
    {
      q: 'Which way do I turn the bolt to center a walking pad belt?',
      a: `On many pads you turn the bolt on the side the belt is drifting toward, a quarter turn, but direction conventions vary between brands. Check your manual, make one small turn, and wait at least a minute before judging the result.`,
    },
    {
      q: 'Do auto-centering walking pad belts need adjusting?',
      a: `Less often, but yes. Auto-centering helps with small wander, but it cannot correct a pad on an uneven floor or soft rug, a twisted frame, or a rear roller well out of line. Level the pad first, then adjust as the manual says.`,
    },
    {
      q: 'Is it normal for a new walking pad belt to loosen?',
      a: `A little, yes. New belts settle and lengthen slightly in their first hours of use, so one or two small tension and centring checks early on are normal. Needing re-tensioning every few days, or a belt that will not stay centred on a level floor, is worth raising with the seller.`,
    },
    {
      q: 'When should I replace a walking pad belt?',
      a: `When the edges are frayed, the underside is glazed or smooth, there are cracks or a lifting seam, or it has stretched so far the bolts are near the end of their travel. Order the model-specific belt from the brand where possible.`,
    },
  ],
  mistakesHeading: 'Common Mistakes Fixing a Walking Pad Belt',
  mistakesIntro: 'Each of these turns a quick adjustment into a bigger job.',
  mistakes: [
    {
      title: 'Tightening a dry belt',
      body: 'Extra tension on a dry deck adds friction and load for a small motor. Lubricate per the manual, re-test, and only then tighten.',
    },
    {
      title: 'Turning both bolts to fix a drift',
      body: 'Both bolts changes tension, not direction. Tracking is a one-bolt job: a quarter turn on the side the manual names, then wait.',
    },
    {
      title: 'Chasing the belt on a soft rug',
      body: 'A pad on thick carpet or an uneven floor flexes and drifts again. Level it on a hard surface or firm mat before adjusting.',
    },
    {
      title: 'Adjusting while standing on it',
      body: 'Never stand on a moving belt while turning bolts. Run it empty, stand beside it, and keep hands and cords clear of the rear roller.',
    },
  ],
  relatedHeading: 'Related Walking Pad and Belt Guides',
  related: [
    {
      kicker: 'Walking pads',
      title: 'Walking Pad Not Working?',
      blurb: 'Power, remote, belt and stopping faults, in order.',
      url: '/walking-pad-not-working/',
    },
    {
      kicker: 'Maintenance',
      title: 'How to Lubricate a Walking Pad',
      blurb: 'The low-deck method, timing and what to use.',
      url: '/how-to-lubricate-a-walking-pad/',
    },
    {
      kicker: 'Belt tracking',
      title: 'How to Center a Treadmill Belt',
      blurb: 'The quarter-turn method, step by step.',
      url: '/how-to-center-treadmill-belt/',
    },
    {
      kicker: 'Belt slip',
      title: 'Treadmill Belt Slipping or Drifting?',
      blurb: 'Diagnose slip on full-size treadmills.',
      url: '/treadmill-belt-slipping/',
    },
    {
      kicker: 'All faults',
      title: 'Treadmill Troubleshooting',
      blurb: 'Every common fault, diagnosed in order.',
      url: '/treadmill-troubleshooting/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">Work out whether the belt is slipping, drifting or hesitating, then fix it in order:
            lubricate, then tension both bolts equally, then track with one bolt.</strong> Small quarter turns and a minute of
            patience between them fix most walking pad belts in a few minutes.`,
    `If the belt keeps wandering, look down before you reach for the hex key: a level, hard floor and a pad centred under
            your desk solve more drift than any bolt. If it still slips or drifts after all that, or the belt is visibly
            damaged, it is a warranty call, not another adjustment. Start with our
            <a href="/how-to-lubricate-a-walking-pad/" class="text-[#5AA9FF] font-bold no-underline">walking pad lubrication guide</a>.`,
  ],
};

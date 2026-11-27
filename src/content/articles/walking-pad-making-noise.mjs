const th = 'text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4';
const td = 'border-b border-gray-100 py-2 pr-4 text-gray-700';
const a = 'text-[#0F62FE] font-medium';

export default {
  slug: 'walking-pad-making-noise',
  title: 'Walking Pad Making Noise? Squeak, Click and Hum Fixes',
  description:
    'Most walking pad noise is a dry deck, a loose screw, a belt edge rubbing or the floor. Time the sound against 3 things: empty, each step, each belt loop.',
  crumbLabel: 'Walking Pad Making Noise',
  breadcrumb: { name: 'Fault Diagnosis', url: '/problems/' },
  kicker: 'Troubleshooting',
  updated: 'November 2026',
  updatedLong: 'November 27, 2026',
  published: '2026-11-27',
  socialProof: '1.1k',
  h1: ['Walking Pad Making Noise?', 'Squeak, Click and Hum Fixes'],
  standfirst:
    'A walking pad that has started squeaking, clicking, humming or slapping is usually telling you about one of four things: a dry deck, something loose, a belt touching where it should not, or the floor underneath. Work out when the sound happens and you will usually know which.',
  ctas: [
    { label: 'Find It by When It Happens', href: '#when' },
    { label: 'The Fix Routine, in Order', href: '#routine' },
  ],
  tags: [
    'walking pad making noise',
    'walking pad squeaking',
    'walking pad clicking noise',
    'walking pad humming',
    'walking pad loud',
    'under desk treadmill noise',
    'walking pad thumping noise',
    'how to make walking pad quieter',
  ],
  stickyCta: { text: 'Find the Noise by When It Happens', link: '#when' },
  lead: `A walking pad is a full treadmill squeezed into a shallow box. The motor, the front roller, the rear roller and
          the deck all sit within a few centimetres of each other and of the floor, with a thin plastic shell over the top
          and no side rails or tall frame to absorb anything. That packaging is why pads are pleasant to use under a desk,
          and it is also why a new sound is so easy to hear: there is very little between the source and your ears, and
          the floor acts as a sounding board. The good news is that the same closeness makes most noises easy to trace.
          This page is about finding a noise and fixing it on a walking pad specifically. It adapts the &ldquo;find it by
          when it happens&rdquo; method from our full-size treadmill noise guides to the things that make pads different:
          short rollers, a small motor tucked in the front, a belt with no rails beside it, long under-desk sessions, carpet
          and rugs, and storage on end or under furniture. Where a brand has published advice on noise, we quote what it
          says and when we read it; everything else is general guidance, and your model&rsquo;s manual wins wherever the
          two disagree.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'The Short Answer',
      html: `          <p>
            <strong>Unplug the pad, check nothing is caught under the belt, then listen again with the belt running empty and
            with you walking: a squeak with each step is usually a dry deck or a loose screw, a tick once per belt loop is the
            belt seam or debris, a scraping hiss is the belt edge touching a cover, and a slap or boom is your footfall
            travelling into the floor.</strong>
          </p>
          <ul>
            <li><strong>Squeak or creak with each step:</strong> lubricate as your manual says, then snug every screw you can
            reach on the shell, end caps and handle.</li>
            <li><strong>Click or tick once per belt loop:</strong> look for the seam, a foreign object or a damaged patch on the
            belt; check the belt is not brushing a side cover.</li>
            <li><strong>Hum or whine that has changed:</strong> a steady motor note is normal; a sharp whistle, a grind from
            a roller end or a hum with no belt movement is a support call.</li>
            <li><strong>Slap, thud or boom:</strong> mostly impact noise; a firm mat and a softer, shorter stride do more than
            any adjustment.</li>
            <li><strong>Hot smell, or the pad cuts out:</strong> stop and see
            <a href="/walking-pad-overheating/" class="${a}">walking pad overheating</a> before using it again.</li>
          </ul>
          <p>
            If the noise came with a belt that slips or wanders, the belt is the real fault and the noise is a symptom: see
            <a href="/walking-pad-belt-slipping/" class="${a}">walking pad belt slipping</a>. For faults beyond noise, start at
            <a href="/walking-pad-not-working/" class="${a}">walking pad not working</a>.
          </p>`,
    },
    {
      id: 'normal',
      heading: 'What a Healthy Walking Pad Sounds Like',
      html: `          <p>
            No <a href="/best-walking-pads/" class="text-[#0F62FE] font-medium" data-autolink>walking pad</a> is silent, so before chasing a noise it helps to know what you are comparing against. A pad that
            is working properly makes three kinds of sound, and all three are steady and predictable: they rise and fall with
            speed and with your footsteps, and they do not change from one week to the next.
          </p>
          <ul>
            <li><strong>A motor note.</strong> A smooth whirr or soft hum from the front of the pad that climbs in pitch as the
            speed goes up. It should be the same every time you use the pad at the same speed.</li>
            <li><strong>A belt sound.</strong> A light, even swish or rustle as the belt passes over the deck and rollers.</li>
            <li><strong>Your footsteps.</strong> Soft, regular pats. Heavier walkers, harder shoes and faster speeds all make
            these louder, and on a hard floor they carry into the room below.</li>
          </ul>
          <p>
            Most makers do not publish a noise figure, and those that do measure in their own conditions, so we do not give
            a decibel target here. The one maker statement we could read is from WalkingPad: its FAQ (read 27 November 2026)
            says walking-focused models &ldquo;generally operate at under 65 dB&rdquo; and that noise &ldquo;may vary depending
            on the model, speed, user weight, flooring, and maintenance condition.&rdquo; That list is useful in itself,
            because it names the four things you can actually change.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Usually normal</th><th class="${th}">Worth investigating</th><th class="${th}">Stop and contact support</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Even motor hum that rises with speed</td><td class="${td}">Hum that has become louder or rougher at the same speed</td><td class="${td}">Motor hums but the belt does not move</td></tr>
              <tr><td class="${td}">Soft swish of the belt</td><td class="${td}">Squeak or creak that keeps time with your steps</td><td class="${td}">Sharp metallic whistle that persists for days</td></tr>
              <tr><td class="${td}">Footstep pats on a firm mat</td><td class="${td}">Tick once per belt loop</td><td class="${td}">Grinding from a roller end, or the belt scraping the motor cover</td></tr>
              <tr><td class="${td}">A beep from the display or remote</td><td class="${td}">Rattle from the shell or handle</td><td class="${td}">Any noise with a hot or burning smell</td></tr>
              <tr><td class="${td}">Slightly more noise on a brand-new pad as the belt beds in</td><td class="${td}">A new noise after moving or storing the pad</td><td class="${td}">Speed surges or sudden stops along with the noise</td></tr>
            </tbody>
          </table></div>
          <p>
            The test that matters most is change. A pad that has always made a particular sound and still does is probably
            fine. A sound that is new, that is getting worse, or that changes the way the belt feels under your feet is the
            one to chase.
          </p>`,
    },
    {
      id: 'when',
      heading: 'Find the Noise by When It Happens',
      html: `          <p>
            Owners often describe a noise by what it sounds like, but &ldquo;squeak&rdquo; and &ldquo;click&rdquo; mean
            different things to different ears. Timing is more reliable. Three short checks narrow almost any walking pad
            noise down to one area, and none of them needs a tool.
          </p>
          <ol>
            <li><strong>Run it empty.</strong> Start the belt at a low walking speed and stand beside the pad, safety key or
            remote in hand. If the noise is there with nobody on the belt, it comes from the motor, the rollers, the belt
            itself or something touching the belt. If it disappears, it needs your weight to happen.</li>
            <li><strong>Walk and count.</strong> Step on and walk normally. Does the noise land with each of your steps, or
            does it come at a steady beat that has nothing to do with your stride? Your steps point to the deck, the shell
            and the floor. A steady beat points to one spot on the belt passing round.</li>
            <li><strong>Change one thing.</strong> Change the speed, then move the pad onto a different patch of floor or a
            firm mat. A noise that follows the speed is mechanical. A noise that changes with the floor is the floor.</li>
          </ol>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">When you hear it</th><th class="${th}">Most likely source on a walking pad</th><th class="${th}">First check</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Only when you step on, in time with each step</td><td class="${td}">Dry deck, loose shell screw, flexing end cap, floor or mat</td><td class="${td}">Lubrication, then screws, then the floor</td></tr>
              <tr><td class="${td}">At a steady beat, empty or loaded</td><td class="${td}">Belt seam, a stone or crumb under the belt, a damaged belt patch</td><td class="${td}">Unplug and turn the belt by hand, looking underneath</td></tr>
              <tr><td class="${td}">Constant hiss or scrape, worse on one side</td><td class="${td}">Belt edge touching a side cover or the motor cover</td><td class="${td}">Belt centring and the gap at each edge</td></tr>
              <tr><td class="${td}">Constant, from the front, rising with speed</td><td class="${td}">Motor, front roller, drive belt where fitted</td><td class="${td}">Compare with how it sounded when new; vents clear</td></tr>
              <tr><td class="${td}">Constant, from one rear corner</td><td class="${td}">Rear roller bearing, or the roller rubbing its end cap</td><td class="${td}">Listen close with the pad running empty; then support</td></tr>
              <tr><td class="${td}">Only on carpet or a rug</td><td class="${td}">Frame flexing; shell touching the floor; dust being drawn in</td><td class="${td}">Move it to a hard surface or firm mat</td></tr>
              <tr><td class="${td}">Started after storing it on end or under furniture</td><td class="${td}">Slightly twisted frame, a shifted cover or a knocked belt</td><td class="${td}">Lay flat on a level floor, re-centre the belt</td></tr>
              <tr><td class="${td}">Click when you start, stop or change speed</td><td class="${td}">Electronics switching, belt taking up slack, a loose part settling</td><td class="${td}">Usually harmless if it is a single soft click every time</td></tr>
            </tbody>
          </table></div>
          <p>
            Record a short video on your phone of each check. It costs nothing, it lets you compare before and after each
            fix, and if you end up contacting the brand it is the thing support will ask for first.
          </p>`,
    },
    {
      id: 'squeak',
      heading: 'Squeaks and Creaks: Dry Deck or Something Loose',
      html: `          <p>
            A squeak that keeps time with your feet is the most common walking pad complaint, and it nearly always comes from
            one of two places.
          </p>
          <p>
            <strong>The deck.</strong> Each time your foot lands, it presses the belt down onto the deck while the belt is
            sliding across it. If the lubricant between belt and deck has worn thin, the belt grabs and releases with each
            step and you hear a squeak or a rubbery chirp. Because a walking pad belt is short, every part of it passes under
            your foot far more often than on a long treadmill belt, so a dry patch is heard sooner. The clue is that the
            squeak follows your steps and often gets worse in a long desk session. <a href="/urevo-treadmills/" class="text-[#0F62FE] font-medium" data-autolink>UREVO</a>&rsquo;s FAQ (read 27 November 2026)
            gives lubrication as its first fix for noise: it says to try &ldquo;adding lubricant under the running belt on
            both sides&rdquo; and then let the machine idle for 5 to 10 minutes so the lubricant spreads, and to contact
            customer service if the noise continues.
          </p>
          <p>
            Before you lubricate, check your manual. Some pads use a deck that is sold as low- or no-maintenance, and the
            amount, the interval and the product all vary by maker. Use only the silicone treadmill lubricant your manual
            names. WalkingPad&rsquo;s maintenance guide (read 27 November 2026) warns against household oils and products like
            WD-40, which it says can degrade belt material and may void the warranty. Our step-by-step
            <a href="/how-to-lubricate-a-walking-pad/" class="${a}">how to lubricate a walking pad</a> guide shows how to reach
            the deck on a pad with no side rails.
          </p>
          <p>
            <strong>Something loose.</strong> A walking pad shell is made of panels, end caps and covers held on by small
            screws, and daily vibration slowly backs them out. A loose panel creaks as the frame flexes under each step, and it
            sounds just like a dry deck. With the pad unplugged, go round every screw you can see: the motor cover, both end
            caps, the side trims, the feet, and the hinge and handle on pads that fold or have a fold-up bar. Snug them with
            the tool supplied; do not force them, because many go into plastic. WalkingPad&rsquo;s maintenance guide lists
            tightening loose bolts among its routine checks, and says unusual noise is often loose screws, a misaligned belt
            or a lack of lubrication.
          </p>
          <p>
            <strong>A squeal, rather than a squeak,</strong> is different. A high, continuous squeal from the front that
            rises as you step on can mean the drive side is slipping or a belt is far too loose or too tight. That one is not
            fixed with lubricant; stop and work through the belt checks in
            <a href="/walking-pad-belt-slipping/" class="${a}">walking pad belt slipping</a>. For squeaks on full-size machines,
            including incline and frame squeaks a walking pad does not have, see
            <a href="/treadmill-squeaking-noise/" class="${a}">treadmill squeaking noise</a>.
          </p>`,
    },
    {
      id: 'click',
      heading: 'Clicks and Ticks: The Belt, Debris and the Edges',
      html: `          <p>
            A click is a short, hard sound, and on a walking pad its timing tells you where to look.
          </p>
          <ul>
            <li><strong>Once per belt loop, empty or loaded.</strong> Something on the belt is passing a roller. The belt seam
            is the usual suspect: on some belts it makes a faint tick each time it goes round, which is not a fault if it has
            always been there. A new tick is more often a crumb, a stone, a hair tie or a pen lid that has worked under the
            belt, or a small lump where the belt is starting to fail. Unplug, then move the belt round by hand and look at the
            whole underside and the roller faces.</li>
            <li><strong>Constant, faster as the speed rises.</strong> The belt edge is catching. Walking pads have no rails,
            so the gap between the belt edge and the side or motor cover is small, and a belt that has drifted even slightly
            can tick or scrape against it. Look at both edges while the belt runs empty. If one edge is touching or shows fluff
            or melting, stop and re-centre it before you use it again.</li>
            <li><strong>With each step only.</strong> A loose end cap or cover that clicks as the frame flexes, or a foot or
            rubber pad that has shifted. Check the screws, then press down on each corner of the pad in turn to find the one
            that moves.</li>
            <li><strong>Once, at start or stop.</strong> A single soft click as you switch on or change speed is common on
            electronic equipment and is usually just a part switching. A rapid chatter of clicks, or a click followed by the
            pad shutting down, is not normal and is a support call.</li>
          </ul>
          <p>
            WalkingPad&rsquo;s FAQ singles out one edge noise by name: if the &ldquo;motor cover grinding to the walking
            belt&rdquo; makes a friction sound, it says to contact support for maintenance. Treat any contact between the belt
            and the motor cover as a reason to stop, because the cover sits over the motor and wiring. The full
            timing method for clicks on bigger machines is in
            <a href="/treadmill-clicking-noise/" class="${a}">treadmill clicking noise</a>.
          </p>`,
    },
    {
      id: 'hum',
      heading: 'Hums, Whines and Whistles From the Motor End',
      html: `          <p>
            The motor on a walking pad is small and sits under the cover at the front, often right under your toes. You
            will always hear it a little. What matters is whether it sounds the way it did when the pad was new.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">What you hear</th><th class="${th}">What it can mean</th><th class="${th}">What to do</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Smooth hum, a little louder when you step on</td><td class="${td}">The motor working against your weight; normal</td><td class="${td}">Nothing, unless it is getting louder over weeks</td></tr>
              <tr><td class="${td}">Hum that grows sharply each time you step on</td><td class="${td}">Too much drag: dry deck, over-tight belt, or more load than the pad is rated for</td><td class="${td}">Lubricate per the manual; check tension; check the weight rating</td></tr>
              <tr><td class="${td}">Sharp, metallic whistle</td><td class="${td}">WalkingPad names motor carbon brush whistling as one cause</td><td class="${td}">If it continues for a couple of days, contact support (per WalkingPad)</td></tr>
              <tr><td class="${td}">Rumble or grind from one roller end</td><td class="${td}">Roller bearing wear; WalkingPad lists front or rear drum noise</td><td class="${td}">If it continues, contact support for maintenance</td></tr>
              <tr><td class="${td}">Hum with the belt barely moving or not at all</td><td class="${td}">Belt jammed or far too tight, or a drive fault</td><td class="${td}">Stop at once; unplug; check for an obstruction; then support</td></tr>
              <tr><td class="${td}">Buzz from the power cord, plug or socket</td><td class="${td}">A connection or supply problem</td><td class="${td}">Unplug; stop using any extension lead; check the cord for damage</td></tr>
            </tbody>
          </table></div>
          <p>
            WalkingPad&rsquo;s FAQ answer on abnormal noise (read 27 November 2026) describes the whistle as &ldquo;very sharp
            metal whistling sound&rdquo; and says that if it, or an abnormal sound from the front or rear drum, &ldquo;continues
            for a couple of days&rdquo;, you should contact support. Note that the same FAQ also says many WalkingPad models
            use brushless motors, so whether brushes are relevant depends on your exact model: check the manual rather than
            assuming.
          </p>
          <p>
            Do not open the motor cover to investigate a motor noise on a pad that is still under warranty without asking
            the brand first. If the motor note changes along with a hot smell, the cover feeling hotter than usual, or the
            pad stopping itself, that is a heat problem rather than a noise problem: see
            <a href="/walking-pad-overheating/" class="${a}">walking pad overheating</a>. For how motor hum is diagnosed on
            full-size treadmills, see <a href="/treadmill-humming-noise/" class="${a}">treadmill humming noise</a>, and for
            roller and bearing grind, <a href="/treadmill-grinding-noise/" class="${a}">treadmill grinding noise</a>.
          </p>`,
    },
    {
      id: 'thump',
      heading: 'Slaps, Thuds and Booms: Footfall and the Floor',
      html: `          <p>
            The loudest noise a walking pad makes is often not the pad at all. It is your foot landing on a thin deck that sits
            almost directly on the floor. A full treadmill has a raised deck and a frame between you and the floor; a pad has
            very little, so the impact goes straight down. In a flat or an upstairs room this is the sound the neighbours
            hear, and it can be louder below than it is to you.
          </p>
          <p>
            WalkingPad&rsquo;s own FAQ answer for a &ldquo;slam noise&rdquo; is simply to put a treadmill floor mat under the
            pad, and its general FAQ says a mat &ldquo;may help reduce vibration and impact noise.&rdquo; That matches the
            physics: a firm, dense mat spreads and damps the impact before it reaches the floor structure. A soft, squashy mat
            or a thick rug does less than you would think, and can cause other problems (see the next section).
          </p>
          <ul>
            <li><strong>Use a firm equipment mat</strong> that is larger than the pad on every side. Our
            <a href="/best-treadmill-mats/" class="${a}">best treadmill mats</a> guide covers suitable ones, and
            <a href="/best-treadmill-mats-for-carpet/" class="${a}">best treadmill mats for carpet</a> covers pads on carpet.</li>
            <li><strong>Walk softer, not slower.</strong> Shorter steps that land under your body make less noise than long
            strides that hit with the heel. At a desk, a slightly slower speed you can sustain without stomping is quieter
            than a fast one.</li>
            <li><strong>Check your shoes.</strong> Hard-soled shoes slap; cushioned trainers are quieter. Check what your manual
            says about footwear before walking in socks or barefoot.</li>
            <li><strong>A rhythmic thud at a steady beat</strong> that is not in time with your steps is the belt, not the
            floor: see the click section above and
            <a href="/treadmill-thumping-noise/" class="${a}">treadmill thumping noise</a>.</li>
          </ul>
          <p>
            If you are choosing a pad for a flat with people below, our
            <a href="/best-quiet-walking-pads/" class="${a}">best quiet walking pads</a> guide explains what actually reaches
            the room downstairs and how to read a maker&rsquo;s decibel claim.
          </p>`,
    },
    {
      id: 'floor-storage',
      heading: 'Carpet, Rugs and Storage: Noises Full Treadmills Rarely Make',
      html: `          <p>
            A heavy treadmill holds its shape. A walking pad is light and flat, so it takes on the shape of whatever it is
            sitting on and whatever it was stored against. Several noises that are rare on a full-size machine are common on
            pads for exactly that reason.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Situation</th><th class="${th}">Noise it tends to cause</th><th class="${th}">Fix</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Thick carpet or plush rug</td><td class="${td}">Creaks as the frame flexes; scraping where the shell sinks and touches the pile; a muffled rumble</td><td class="${td}">Firm mat or board on top, or a hard floor</td></tr>
              <tr><td class="${td}">Uneven floor, seam or threshold under one corner</td><td class="${td}">Rocking tap with each step; belt drifts and starts brushing an edge</td><td class="${td}">Move the pad so all four corners sit flat; re-centre the belt</td></tr>
              <tr><td class="${td}">Bare smooth floor</td><td class="${td}">Pad creeps slightly, rubber feet squeak, footfall booms into the room below</td><td class="${td}">Firm mat to grip and damp</td></tr>
              <tr><td class="${td}">Stored on end when the manual does not allow it</td><td class="${td}">New ticks or creaks; belt rubbing one side after storage</td><td class="${td}">Lay flat, check level, re-centre; store as the manual says</td></tr>
              <tr><td class="${td}">Slid under a bed or sofa</td><td class="${td}">Dust and fluff drawn under the belt and into the vents; scraping or rattles</td><td class="${td}">Clean around the pad and vents; check under the belt</td></tr>
              <tr><td class="${td}">Pushed tight to a wall or desk panel</td><td class="${td}">Buzz or rattle where the shell touches; less airflow to the motor</td><td class="${td}">Leave a gap all round</td></tr>
            </tbody>
          </table></div>
          <p>
            Storage position is model-specific. WalkingPad&rsquo;s FAQ (read 27 November 2026) says some of its models are
            designed to fold and store upright and others are not, and tells owners to check the product page or manual for the
            approved storage position before standing a pad on end. Its maintenance guide also recommends a few inches of
            clearance from the wall for airflow around the motor housing. If your noise started after a move or a spell in
            storage, the fix is usually to lay the pad flat on a level, firm surface for a while, check it does not rock, and
            re-centre the belt as described in
            <a href="/walking-pad-belt-slipping/" class="${a}">our belt guide</a>.
          </p>`,
    },
    {
      id: 'routine',
      heading: 'A Fix Routine, in Order',
      html: `          <p>
            If you cannot pin the noise down, work through these in order. They go from free and quick to more involved, and
            each one removes a cause. Stop when the noise does.
          </p>
          <ol>
            <li><strong>Unplug the pad and remove the safety key or magnet.</strong> Everything below is done with the power
            off unless it says otherwise.</li>
            <li><strong>Clear underneath.</strong> Lift the belt edge gently and look under it from both sides with a torch.
            Remove anything that should not be there. Vacuum around the pad, the vents and the floor beneath it.</li>
            <li><strong>Check the floor.</strong> Press each corner. If the pad rocks, move it or put it on a firm mat. If it is
            on thick carpet, try a hard surface for one session to see if the noise changes.</li>
            <li><strong>Tighten what is loose.</strong> Every screw on the covers, end caps, feet, handle and hinge, snug but
            not forced.</li>
            <li><strong>Look at the belt edges and surface.</strong> Fraying, fluff on one side, a lump, a lifting seam or a
            glazed patch tell you where the noise is coming from.</li>
            <li><strong>Run it empty and check centring.</strong> Plug back in, run at a slow speed from beside the pad, and
            watch the gap at each edge. Re-centre if needed, following your manual.</li>
            <li><strong>Lubricate, if your manual calls for it</strong> and it is due or overdue, then let it run so the
            lubricant spreads before judging.</li>
            <li><strong>Listen again,</strong> empty and walking, and compare with your first video.</li>
          </ol>
          <p>
            Most noises are gone by step 7. If yours is not, or if at any point you found a grinding roller, a belt touching
            the motor cover, a burnt smell or a damaged belt, stop there and contact the brand. WalkingPad&rsquo;s FAQ says
            other abnormal sounds need to be judged from a detailed description or video, which is one more reason to keep the
            recordings.
          </p>`,
    },
    {
      id: 'brands',
      heading: 'What Walking Pad Makers Say About Noise',
      html: `          <p>
            Brand advice on noise is short and mostly points you to support, but it is worth knowing what your maker says,
            because following its steps keeps you within the warranty. These are the published statements we could read.
            Wording is quoted or closely paraphrased; check the live page and your own manual, because both change.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Source (read 27 Nov 2026)</th><th class="${th}">What it says about noise</th></tr></thead>
            <tbody>
              <tr><td class="${td}">UREVO, FAQs page: &ldquo;How can I reduce noise coming from my treadmill?&rdquo;</td><td class="${td}">Add lubricant under the running belt on both sides and let the machine idle for 5 to 10 minutes so it spreads; contact customer service if the noise continues</td></tr>
              <tr><td class="${td}">WalkingPad, FAQ: &ldquo;What should I do if the machine has an abnormal noise?&rdquo;</td><td class="${td}">Slam noise: place a treadmill floor mat under the pad. Sharp metallic whistle, or abnormal front or rear drum sound, continuing for a couple of days: contact support. Motor cover rubbing the belt: contact support. Other sounds: report with a description or video</td></tr>
              <tr><td class="${td}">WalkingPad, FAQ: &ldquo;How loud are WalkingPad products&hellip;?&rdquo;</td><td class="${td}">Walking-focused models generally under 65 dB; noise varies with model, speed, user weight, flooring and maintenance; a mat may help reduce vibration and impact noise</td></tr>
              <tr><td class="${td}">WalkingPad, &ldquo;Treadmill Maintenance Schedule: Weekly to Annual Tasks&rdquo;</td><td class="${td}">Unusual noise is often loose screws, a misaligned belt or a lack of lubrication; running louder than usual at low speed is an early sign of friction build-up; use silicone lubricant, not household oils or WD-40</td></tr>
            </tbody>
          </table></div>
          <p>
            We could not find a published noise troubleshooting procedure from other walking pad brands to quote. If yours
            is not listed, the manual and the brand&rsquo;s support page for your exact model number are the authority. One
            safety aside: if you own a Sperax walking pad, check our
            <a href="/sperax-walking-pad-recall/" class="${a}">Sperax walking pad warning</a> page before troubleshooting
            anything, because the CPSC has told owners of certain models to stop using them.
          </p>`,
    },
    {
      id: 'stop',
      heading: 'When a Noise Means Stop Using the Pad',
      html: `          <p>
            Most walking pad noises are an annoyance, not a hazard. A few are a reason to switch off, unplug and not use the
            pad again until it has been checked:
          </p>
          <ul>
            <li>A burning, hot-plastic or electrical smell with any noise, or the pad cutting out by itself: see
            <a href="/walking-pad-overheating/" class="${a}">walking pad overheating</a>.</li>
            <li>The belt scraping the motor cover, or a belt edge that is fraying, curling or melting.</li>
            <li>A grind or rumble from a roller end that does not go away, or a roller that wobbles.</li>
            <li>The motor humming while the belt barely moves, or the <a href="/treadmill-belt-slipping/" class="text-[#0F62FE] font-medium" data-autolink>belt slipping</a> and catching under your feet.</li>
            <li>Speed changing by itself, or sudden stops, along with the noise.</li>
            <li>Buzzing, crackling or heat at the cord, plug or socket.</li>
          </ul>
          <p>
            For any of these on a pad inside its return window or warranty, contact the seller or brand rather than opening
            it up. Have the model and serial number, proof of purchase, your videos of the noise empty and with you walking,
            and a note of what you have already tried. A clear video often gets a part or a replacement sent faster than a
            written description.
          </p>`,
    },
    {
      id: 'prevent',
      heading: 'Keeping a Walking Pad Quiet',
      html: `          <p>
            The habits that stop noises starting are the same ones that make a pad last. None of them takes long.
          </p>
          <ul>
            <li><strong>Lubricate on the schedule your manual gives,</strong> not when the squeak starts. Under-desk users
            often walk for hours a day, so check whether your manual sets the interval by time or by distance.</li>
            <li><strong>Keep it on a firm mat on a level floor</strong> and leave space around it for airflow.</li>
            <li><strong>Vacuum around and under the pad</strong> regularly, especially on carpet or in rooms with pets.</li>
            <li><strong>Run a monthly screw check</strong> on covers, end caps and handles.</li>
            <li><strong>Watch the belt edges</strong> for a few seconds now and then while it runs empty, and re-centre at the
            first sign of drift, before it starts to rub.</li>
            <li><strong>Store it as the manual allows,</strong> flat or upright, and lay it flat and check it before use after
            storage.</li>
            <li><strong>Stay within the rated user weight and session length.</strong> Some pads have a rest or auto-stop
            feature after long use; it is there to protect the motor.</li>
          </ul>
          <p>
            For how long a well-kept pad can be expected to last, see
            <a href="/how-long-do-walking-pads-last/" class="${a}">how long walking pads last</a>, and for the full-size
            treadmill version of every common fault, our
            <a href="/treadmill-troubleshooting/" class="${a}">treadmill troubleshooting</a> hub.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'Why is my walking pad squeaking?',
      a: `Usually because the deck under the belt has dried out, or because a screw on a cover, end cap or handle has worked loose. If the squeak keeps time with your steps, lubricate as your manual says and then tighten every screw you can reach. A high, continuous squeal is different and points to the belt or drive slipping.`,
    },
    {
      q: 'Why is my walking pad clicking?',
      a: `A click once per belt loop is usually the belt seam, debris under the belt or a damaged spot. A constant tick that speeds up with the belt is often the belt edge brushing a cover because it has drifted. Unplug, turn the belt by hand to inspect it, then check centring with the belt running empty.`,
    },
    {
      q: 'Is it normal for a walking pad to hum?',
      a: `Yes. A smooth motor hum that rises with speed is normal. A hum that has become much louder at the same speed, a sharp metallic whistle, or a hum while the belt barely moves is not, and the last one means stop and contact support.`,
    },
    {
      q: 'How do I make my walking pad quieter for downstairs neighbours?',
      a: `Most of what neighbours hear is footfall travelling into the floor. Put the pad on a firm mat larger than the pad, walk with shorter, softer steps in cushioned shoes, and keep it lubricated and tight. WalkingPad's own advice for a slam noise is a treadmill floor mat.`,
    },
    {
      q: 'Why did my walking pad get louder after I stored it?',
      a: `Storing a pad on end when the manual does not allow it, or sliding it under furniture, can twist the frame slightly, knock the belt off centre or let dust under the belt. Lay it flat on a level surface, check it does not rock, clean under the belt and re-centre it.`,
    },
    {
      q: 'Can I use WD-40 to stop a walking pad squeaking?',
      a: `No. Use only the silicone treadmill lubricant your manual names. WalkingPad's maintenance guide warns that household oils and WD-40 can degrade the belt material and may void the warranty.`,
    },
    {
      q: 'When should I stop using a noisy walking pad?',
      a: `Stop if there is a burning or hot smell, the belt scrapes the motor cover or its edge is fraying, a roller grinds or wobbles, the motor hums without moving the belt, or the speed changes by itself. Unplug it and contact the brand.`,
    },
  ],
  mistakesHeading: 'Common Mistakes Chasing Walking Pad Noise',
  mistakesIntro: 'Each of these either hides the real cause or creates a new one.',
  mistakes: [
    {
      title: 'Lubricating every noise',
      body: 'Lubricant fixes a dry-deck squeak, not a loose screw, a rubbing belt edge or a worn roller. Time the noise first, and only lubricate when the manual says it is due.',
    },
    {
      title: 'Blaming the pad for floor noise',
      body: 'Slaps and booms are often footfall on a thin deck over a hard floor. A firm mat and softer steps fix more of them than any adjustment.',
    },
    {
      title: 'Ignoring a belt edge that touches',
      body: 'With no rails, a drifting belt soon rubs a cover. Stop and re-centre at the first scrape, before the edge frays or the motor cover is damaged.',
    },
    {
      title: 'Opening the motor cover first',
      body: 'Removing covers on a pad under warranty can complicate a claim. Do the outside checks, record a video, and ask the brand before opening anything.',
    },
  ],
  relatedHeading: 'Related Walking Pad Guides',
  related: [
    {
      kicker: 'Walking pads',
      title: 'Walking Pad Belt Slipping or Off-Center?',
      blurb: 'Lubricate, tension and track, in that order.',
      url: '/walking-pad-belt-slipping/',
    },
    {
      kicker: 'Maintenance',
      title: 'How to Lubricate a Walking Pad',
      blurb: 'Reaching the deck on a pad with no rails.',
      url: '/how-to-lubricate-a-walking-pad/',
    },
    {
      kicker: 'Walking pads',
      title: 'Walking Pad Not Working?',
      blurb: 'Power, remote, belt and stopping faults.',
      url: '/walking-pad-not-working/',
    },
    {
      kicker: 'Floor',
      title: 'Best Treadmill Mats',
      blurb: 'Firm mats that damp footfall and protect floors.',
      url: '/best-treadmill-mats/',
    },
    {
      kicker: 'Buying',
      title: 'Best Quiet Walking Pads',
      blurb: 'What downstairs hears and how to read dB claims.',
      url: '/best-quiet-walking-pads/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">Time the noise before you fix it: with each step points to the deck, the screws or the
            floor; a steady beat points to one spot on the belt; a constant scrape is a belt edge touching.</strong> Clear
            under the belt, tighten what is loose, check the floor and the belt centring, then lubricate if your manual says
            it is due. That order fixes most walking pad noises in one sitting.`,
    `Some sounds are not for home fixing: a grinding roller, a belt rubbing the motor cover, a whistle that will not go
            away, or any noise with a hot smell. Unplug, record a video and contact the brand. For the everyday squeak, start
            with our <a href="/how-to-lubricate-a-walking-pad/" class="text-[#5AA9FF] font-bold no-underline">walking pad
            lubrication guide</a>.`,
  ],
};

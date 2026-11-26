const th = 'text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4';
const td = 'border-b border-gray-100 py-2 pr-4 text-gray-700';

export default {
  slug: 'treadmill-clicking-noise',
  title: 'Treadmill Clicking Noise: Find It by When It Clicks',
  description:
    'A treadmill click once per belt lap points to the belt or a roller; once per step, a loose bolt or deck; with no one on it, the motor or drive belt. 6 causes and fixes.',
  crumbLabel: 'Treadmill Clicking Noise',
  breadcrumb: { name: 'Fault Diagnosis', url: '/problems/' },
  kicker: 'Troubleshooting',
  updated: 'November 2026',
  updatedLong: 'November 26, 2026',
  published: '2026-11-22',
  modified: '2026-11-26',
  socialProof: '1.2k',
  h1: ['Treadmill Clicking Noise:', 'Find It by When It Clicks'],
  standfirst:
    'A clicking treadmill is telling you where the problem is, if you time the click. Once per belt revolution points to the belt or a roller; once per footstep, to a loose bolt or the deck; with nobody on the belt, to the motor area. Here is how to tell which, and what to do about each.',
  ctas: [
    { label: 'Time the Click', href: '#short-answer' },
    { label: 'When to Stop Using It', href: '#stop' },
  ],
  tags: ['treadmill clicking noise', 'treadmill clicking sound', 'treadmill clicking when walking', 'treadmill belt clicking', 'treadmill motor clicking', 'treadmill ticking noise'],
  stickyCta: { text: 'Time the Click', link: '#short-answer' },
  lead: `Treadmills make a lot of small noises, and most are harmless. A new, regular click is worth tracking down,
          because the timing of the click narrows the cause to one part of the machine. You need a minute, a phone
          stopwatch, and the treadmill unplugged for the checks underneath. This guide is general: treadmills differ by
          brand and model, so where a step depends on your machine (opening the motor cover, adjusting tension) follow the
          manual. If the click comes with a burning smell, a belt that hesitates or a machine that cuts out, stop and read
          the section on when to stop using it first.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'Treadmill Clicking? The Short Answer',
      html: `          <p>
            <strong>Time the click. Once per belt revolution means the belt (a seam, a lump or debris) or a roller. Once per
            footstep means a loose bolt, the deck or the frame. A click with nobody on the belt, that speeds up with the
            belt, points to the motor pulley, drive belt or a roller bearing.</strong> Most clicks are fixed by cleaning,
            lubricating and tightening bolts.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">When it clicks</th><th class="${th}">Likely source</th><th class="${th}">First fix</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Once per belt revolution</td><td class="${td}">Belt seam, lump, debris; roller</td><td class="${td}">Inspect the belt; clean underneath</td></tr>
              <tr><td class="${td}">With each footstep</td><td class="${td}">Loose bolt, deck, frame, side rail</td><td class="${td}">Tighten frame and upright bolts</td></tr>
              <tr><td class="${td}">With nobody on, faster with speed</td><td class="${td}">Motor pulley, drive belt, roller bearing</td><td class="${td}">Unplug; inspect under the motor cover per the manual</td></tr>
              <tr><td class="${td}">Only during incline changes</td><td class="${td}">Incline motor or mechanism</td><td class="${td}">Check for debris; calibrate incline</td></tr>
              <tr><td class="${td}">From the console</td><td class="${td}">Relays, fan, speaker</td><td class="${td}">Often normal; check the manual</td></tr>
            </tbody>
          </table></div>
          <p>
            Squeaks and thumps follow the same logic: see our
            <a href="/treadmill-squeaking-noise/" class="text-[#0F62FE] font-medium">treadmill squeaking</a> and
            <a href="/treadmill-thumping-noise/" class="text-[#0F62FE] font-medium">thumping noise</a> guides.
          </p>`,
    },
    {
      id: 'time-it',
      heading: 'How to Time the Click',
      html: `          <ol>
            <li><strong>Mark the belt.</strong> With the treadmill unplugged, put a strip of tape across the belt near the
            edge.</li>
            <li><strong>Run it empty at a slow speed.</strong> Stand beside it, not on it, and watch the tape. If the click
            comes each time the tape passes the same point, it is the belt or something the belt carries past.</li>
            <li><strong>Walk on it.</strong> If the click only happens with someone walking and matches footsteps, it is the
            deck, frame or a fastener flexing under load.</li>
            <li><strong>Change the speed.</strong> A click that speeds up exactly with the belt, with nobody on it, is in the
            drive: motor pulley, drive belt or roller bearing.</li>
          </ol>
          <p>
            A phone video with sound is useful here and for support later, because it captures the timing.
          </p>`,
    },
    {
      id: 'belt',
      heading: 'Click Once Per Revolution: Belt and Rollers',
      html: `          <ul>
            <li><strong>Belt seam.</strong> Every belt is joined somewhere. A slightly raised or worn seam can click as it
            passes over the rollers. Mild seam noise is common; a seam that is lifting or fraying needs a new belt. See
            <a href="/how-to-replace-treadmill-belt/" class="text-[#0F62FE] font-medium">how to replace a treadmill belt</a>.</li>
            <li><strong>Debris.</strong> Grit, hair or a small object under the belt clicks as it passes the rollers. Our
            <a href="/how-to-clean-under-treadmill-belt/" class="text-[#0F62FE] font-medium">how to clean under a treadmill belt</a>
            guide shows how.</li>
            <li><strong>Belt rubbing the frame.</strong> A belt that has drifted can tick against the side rail or motor
            cover. Re-centre it; see <a href="/how-to-center-treadmill-belt/" class="text-[#0F62FE] font-medium">how to center a treadmill belt</a>.</li>
            <li><strong>Roller.</strong> A worn roller bearing can click or tick each revolution of that roller. It often
            grows into a grind. That is a parts job; check the warranty first.</li>
          </ul>`,
    },
    {
      id: 'step',
      heading: 'Click With Each Step: Bolts, Deck and Frame',
      html: `          <p>
            A click that matches your footsteps is usually something flexing under load.
          </p>
          <ul>
            <li><strong>Loose bolts.</strong> Upright, console-arm and base bolts loosen over time, especially on folding
            machines. With the treadmill unplugged, check and tighten each one to the manual&rsquo;s guidance. This fixes more
            clicks than anything else.</li>
            <li><strong>The deck.</strong> A deck that has shifted on its mounts, or <a href="/treadmill-deck-replacement/" class="text-[#0F62FE] font-medium" data-autolink>worn deck</a> isolators, can click as you
            land. A cracked deck needs replacing; see our
            <a href="/treadmill-cracked-deck/" class="text-[#0F62FE] font-medium">cracked deck guide</a>.</li>
            <li><strong>An uneven floor.</strong> A treadmill rocking on an uneven floor can tick as weight shifts. Adjust the
            levelling feet or use a mat; see
            <a href="/treadmill-shaking-or-wobbling/" class="text-[#0F62FE] font-medium">treadmill shaking or wobbling</a>.</li>
            <li><strong>A dry deck.</strong> Belt dragging on a dry deck can tick or squeak with each step. Lubricate as the
            manual says; see <a href="/treadmill-belt-lubrication/" class="text-[#0F62FE] font-medium">treadmill belt lubrication</a>.</li>
          </ul>`,
    },
    {
      id: 'motor',
      heading: 'Click With Nobody On: Motor and Drive',
      html: `          <p>
            If the click is there with the belt running empty and speeds up with the belt, it is in the drive, under the
            motor cover at the front.
          </p>
          <ul>
            <li><strong>Drive belt.</strong> The short ribbed belt between motor and front roller can click if it is worn,
            cracked or slightly off its pulley. See <a href="/treadmill-drive-belt/" class="text-[#0F62FE] font-medium">treadmill drive belt</a>.</li>
            <li><strong>Motor pulley or flywheel.</strong> A loose pulley set screw can tick.</li>
            <li><strong>Something touching the flywheel or fan.</strong> A loose wire or a bit of debris under the cover.</li>
            <li><strong>Motor brushes.</strong> On brushed <a href="/ac-vs-dc-treadmill-motor/" class="text-[#0F62FE] font-medium" data-autolink>DC motors</a>, worn brushes can make a ticking or crackling noise; see
            <a href="/treadmill-motor-brushes/" class="text-[#0F62FE] font-medium">treadmill motor brushes</a>.</li>
          </ul>
          <p>
            Always unplug before removing the motor cover, and follow the manual for what an owner may open. On a machine
            under warranty, a drive problem is usually a support call.
          </p>`,
    },
    {
      id: 'other',
      heading: 'Clicks From the Incline, Console or Fold',
      html: `          <ul>
            <li><strong>Incline:</strong> a click only during incline changes points to the incline motor, its gear or the lift
            arms. Check nothing is under the deck, then run the <a href="/treadmill-calibration/" class="text-[#0F62FE] font-medium" data-autolink>incline calibration</a> your manual describes; see
            <a href="/treadmill-incline-not-working/" class="text-[#0F62FE] font-medium">treadmill incline not working</a>.</li>
            <li><strong>Console:</strong> a single click when you start, stop or change speed is often an electrical relay
            and normal. Fans and speakers can tick too.</li>
            <li><strong>Folding latch:</strong> on <a href="/folding-treadmills/" class="text-[#0F62FE] font-medium" data-autolink>folding treadmills</a>, a latch or hinge that is not fully seated can tick with
            each step. Re-seat it with the deck down.</li>
          </ul>`,
    },
    {
      id: 'routine',
      heading: 'A 20-Minute Fix Routine, in Order',
      html: `          <p>
            If you cannot time the click clearly, work through these in order. They go from free and quick to more
            involved, and most clicks stop somewhere in the first four.
          </p>
          <ol>
            <li><strong>Unplug the treadmill</strong> and let it sit for a minute.</li>
            <li><strong>Look and feel around the deck.</strong> Check under and beside the belt for anything loose: a coin,
            a sock, a cable, a screw that has dropped out.</li>
            <li><strong>Tighten the frame.</strong> Go round every visible bolt on the uprights, console arms and base with
            the tools supplied, snug but not forced.</li>
            <li><strong>Check the floor.</strong> Rock the treadmill by hand. If it moves, adjust the levelling feet or move
            it to a flat spot.</li>
            <li><strong>Clean and lubricate.</strong> Vacuum around and under the belt edges, then lubricate the deck if the
            manual says it is due.</li>
            <li><strong>Check belt centring.</strong> Run it slowly empty and make sure it is not touching either side
            rail.</li>
            <li><strong>Listen again,</strong> empty and then walking. If the click is still there and follows the belt
            speed with nobody on it, move on to the motor and drive checks above, or call support.</li>
          </ol>`,
    },
    {
      id: 'normal',
      heading: 'Normal Treadmill Noises vs Warning Signs',
      html: `          <p>
            Some sound is part of how a treadmill works. The point is to notice a change, not to chase silence.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">Sound</th><th class="${th}">Usually</th><th class="${th}">Act when</th></tr></thead>
            <tbody>
              <tr><td class="${td}">A steady motor hum</td><td class="${td}">Normal</td><td class="${td}">It turns to a whine or grinding</td></tr>
              <tr><td class="${td}">Footfall on the deck</td><td class="${td}">Normal</td><td class="${td}">It turns to a sharp knock or creak</td></tr>
              <tr><td class="${td}">A click on start or stop</td><td class="${td}">Often a relay; normal</td><td class="${td}">It repeats during running</td></tr>
              <tr><td class="${td}">A faint seam tick</td><td class="${td}">Common</td><td class="${td}">It gets louder or the seam lifts</td></tr>
              <tr><td class="${td}">Incline motor whirr</td><td class="${td}">Normal during changes</td><td class="${td}">It clicks, sticks or stalls</td></tr>
            </tbody>
          </table></div>
          <p>
            A new noise that appears suddenly, or one that grows over a week or two, is the one worth investigating.
          </p>`,
    },
    {
      id: 'prevent',
      heading: 'How to Stop Clicks Coming Back',
      html: `          <ul>
            <li><strong>Check bolts every few months.</strong> Vibration loosens fasteners over time, especially on folding
            frames that are raised and lowered often.</li>
            <li><strong>Keep the area clean.</strong> Vacuum under and around the treadmill regularly; grit and pet hair are
            common causes of belt noise.</li>
            <li><strong>Lubricate on schedule.</strong> Follow the interval your manual gives. Our
            <a href="/treadmill-maintenance/" class="text-[#0F62FE] font-medium">treadmill maintenance</a>
            guide sets out a routine.</li>
            <li><strong>Use a mat.</strong> It levels small floor bumps and keeps dust out of the motor area; see
            <a href="/best-treadmill-mats/" class="text-[#0F62FE] font-medium">best treadmill mats</a>.</li>
            <li><strong>Mind the weight limit.</strong> Running heavier than the rated capacity flexes the deck and frame
            more, which loosens joints faster.</li>
          </ul>`,
    },
    {
      id: 'repair',
      heading: 'If It Needs a Part',
      html: `          <p>
            If the routine does not stop the click, it is usually one of a few parts: the running belt, a roller or its
            bearing, the drive belt, or a deck isolator. Before ordering anything, find the model and serial number on the
            frame label, check whether the treadmill is still under its parts warranty, and send the maker a short video
            with sound. Warranty parts are often sent free, with labour covered for a shorter period, so the order matters:
            ask first, then repair.
          </p>
          <p>
            For a treadmill out of warranty, our
            <a href="/how-to-replace-treadmill-belt/" class="text-[#0F62FE] font-medium">belt replacement guide</a>
            and <a href="/treadmill-drive-belt/" class="text-[#0F62FE] font-medium">drive belt guide</a>
            cover the two most common parts jobs.
          </p>`,
    },
    {
      id: 'walking-pad',
      heading: 'Clicking on a Walking Pad',
      html: `          <p>
            Walking pads click for the same reasons as full treadmills, but a few causes are more common on them. With no
            side rails, the belt edge can tick against the frame if it drifts even slightly, so check centring first. Pads
            stored on end or slid under furniture can have a slightly twisted frame, which shows up as a tick with each
            step; laying the pad flat on a hard floor often cures it. And because the motor and rollers are small and close
            together, a dry deck is heard sooner.
          </p>
          <p>
            Our <a href="/walking-pad-not-working/" class="text-[#0F62FE] font-medium">walking pad not working</a>
            guide covers belt centring and tension on pads, and
            <a href="/how-to-lubricate-a-walking-pad/" class="text-[#0F62FE] font-medium">how to lubricate a walking pad</a>
            shows how to reach the deck without side rails.
          </p>`,
    },
    {
      id: 'stop',
      heading: 'When to Stop Using the Treadmill',
      html: `          <p>
            Stop and get the treadmill checked if the click comes with any of these:
          </p>
          <ul>
            <li>A burning smell (see <a href="/treadmill-burning-smell/" class="text-[#0F62FE] font-medium">treadmill burning smell</a>)</li>
            <li>The belt hesitating, surging or not stopping when the key is pulled</li>
            <li>A grinding or rising whine</li>
            <li>The breaker tripping or the treadmill cutting out</li>
            <li>A visible crack in the deck or frame</li>
          </ul>
          <p>
            For brand-specific steps, see our
            <a href="/proform-treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">ProForm</a> and
            <a href="/nordictrack-treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">NordicTrack</a>
            troubleshooting guides, and our general
            <a href="/treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">treadmill troubleshooting</a>.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'Why does my treadmill click when the incline changes?',
      a: `A click only during incline changes points to the incline motor, its gear or the lift arms. Check nothing is trapped under the deck, then run the incline calibration your manual describes. If the click continues or the incline sticks, contact support.`,
    },
    {
      q: 'Why is my treadmill making a clicking noise?',
      a: `Usually a belt seam or debris (once per belt revolution), a loose bolt or the deck (with each step), or the drive belt, pulley or a roller bearing (with nobody on, speeding up with the belt). Time the click to find which.`,
    },
    {
      q: 'Why does my treadmill click when I walk?',
      a: `A click that matches your footsteps is usually a loose frame or upright bolt, the deck moving on its mounts, an uneven floor or a dry deck. Tighten the bolts with the treadmill unplugged, level it and lubricate as the manual says.`,
    },
    {
      q: 'Is a clicking treadmill belt normal?',
      a: `A faint click from the belt seam passing over a roller is common and harmless. A seam that is lifting or fraying, or a click that gets louder, needs attention.`,
    },
    {
      q: 'Why is my treadmill motor clicking?',
      a: `With the belt running empty, a click from the front points to the drive belt, motor pulley, something touching the flywheel, or worn brushes on a brushed DC motor. Unplug before opening the motor cover, and use support if the machine is under warranty.`,
    },
    {
      q: 'Can I keep using a clicking treadmill?',
      a: `If the click is the only symptom, yes, while you find it. Stop if it comes with a burning smell, a hesitating or surging belt, grinding, tripping or a visible crack.`,
    },
    {
      q: 'How do I stop my treadmill from clicking?',
      a: `Clean under the belt, lubricate the deck as the manual says, tighten the frame and upright bolts, re-centre the belt and level the machine. If it persists with nobody on, check the drive belt and pulley.`,
    },
  ],
  mistakesHeading: 'Common Mistakes Chasing a Treadmill Click',
  mistakesIntro: 'Most clicks are simple. These make them harder to find or fix.',
  mistakes: [
    {
      title: 'Not timing it',
      body: 'Without knowing whether the click follows the belt, your steps or the motor, you end up replacing the wrong part. A taped belt and a stopwatch take a minute.',
    },
    {
      title: 'Opening the motor cover while plugged in',
      body: 'Always unplug first. The flywheel and electronics under the cover are dangerous with power connected.',
    },
    {
      title: 'Over-tightening the belt to stop a click',
      body: 'Belt tension rarely causes clicks, and an over-tight belt strains the motor and rollers. Fix tension only for slipping.',
    },
    {
      title: 'Ignoring a click that grows',
      body: 'A roller bearing click often turns into a grind. Catch it early, especially while the machine is under warranty.',
    },
  ],
  relatedHeading: 'Related Noise and Fault Guides',
  related: [
    {
      kicker: 'Noise',
      title: 'Treadmill Squeaking Noise',
      blurb: 'Dry deck or loose bolt? Find it by when it squeaks.',
      url: '/treadmill-squeaking-noise/',
    },
    {
      kicker: 'Noise',
      title: 'Treadmill Thumping Noise',
      blurb: 'Time the thump to find the belt or roller fault.',
      url: '/treadmill-thumping-noise/',
    },
    {
      kicker: 'Static',
      title: 'Treadmill Static Shock',
      blurb: 'Why treadmills shock you, and how to stop it.',
      url: '/treadmill-static-shock/',
    },
    {
      kicker: 'All faults',
      title: 'Treadmill Troubleshooting',
      blurb: 'Every common fault, in the order worth checking.',
      url: '/treadmill-troubleshooting/',
    },
    {
      kicker: 'Noise',
      title: 'Treadmill Humming Noise',
      blurb: 'Normal motor hum or a failing motor?',
      url: '/treadmill-humming-noise/',
    },
    {
      kicker: 'Fixes',
      title: 'Why Does My Treadmill Keep Beeping?',
      blurb: 'Safety key, LUBE reminders and error beeps.',
      url: '/treadmill-keeps-beeping/',
    },
    {
      kicker: 'Noise',
      title: 'Treadmill Grinding Noise',
      blurb: 'Rollers, bearings or motor? Find it by timing.',
      url: '/treadmill-grinding-noise/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">Time the click: per belt revolution, per step, or with nobody on.</strong> That points
            you to the belt, the frame or the drive, and most clicks are fixed by cleaning, lubricating and tightening.`,
    `Stop using the treadmill if the click comes with a burning smell, grinding, a surging belt or tripping, and call
            support if it is under warranty. Our
            <a href="/treadmill-troubleshooting/" class="text-[#5AA9FF] font-bold no-underline">troubleshooting guide</a>
            covers every symptom.`,
  ],
};

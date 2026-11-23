const th = 'text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4';
const td = 'border-b border-gray-100 py-2 pr-4 text-gray-700';

export default {
  slug: 'treadmill-humming-noise',
  title: 'Treadmill Humming Noise: Normal Hum or a Failing Motor?',
  description:
    'A steady treadmill hum that follows belt speed is normal. Act on 5 warning hums: belt won\'t move, rising under load, burning smell, console buzz, incline hum.',
  crumbLabel: 'Treadmill Humming Noise',
  breadcrumb: { name: 'Fault Diagnosis', url: '/problems/' },
  kicker: 'Troubleshooting',
  updated: 'November 2026',
  updatedLong: 'November 23, 2026',
  published: '2026-11-23',
  socialProof: '1.1k',
  h1: ['Treadmill Humming Noise:', 'Normal Hum or a Failing Motor?'],
  standfirst:
    'Every powered treadmill hums: the motor, its cooling fan and the power electronics all make a steady sound that rises and falls with belt speed. A hum becomes a warning when it changes character: the motor hums but the belt will not move, the hum strains and rises when you step on, it comes with a burning smell, or a buzz starts from the console or power supply. Here is how to tell which you have, and what to check in what order.',
  ctas: [
    { label: 'Normal or Warning?', href: '#short-answer' },
    { label: 'When to Stop Using It', href: '#stop' },
  ],
  tags: [
    'treadmill humming noise',
    'treadmill motor humming',
    'treadmill hums but belt will not move',
    'treadmill buzzing noise',
    'treadmill motor whine',
    'treadmill humming when walking',
  ],
  stickyCta: { text: 'Normal or Warning?', link: '#short-answer' },
  lead: `A hum is the one treadmill noise you cannot make go away completely, because it is the sound of the machine
          working. What you can do is learn what your treadmill's normal hum sounds like, so you notice when it changes.
          The timing tells you most of what you need: a hum that is there before the belt moves, one that only appears
          when you step on, one that follows the belt speed, and one that only comes from the console all point to
          different parts. This guide is general: treadmills differ by brand, motor type and model, so where a step depends
          on your machine (opening the motor cover, adjusting tension, lubricating) follow the manual. If the hum comes with
          a burning smell, a belt that will not turn, or a machine that trips the breaker, read the section on when to stop
          using it first.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'The Short Answer',
      html: `          <p>
            <strong>A steady, even hum that rises and falls smoothly with belt speed, and does not change much when you step
            on, is normal. A hum is a warning when the motor hums but the belt will not move, when the hum strains or deepens
            every time your foot lands, when it comes with a burning or hot-electrical smell, when a buzz comes from the
            console or power area with the belt stopped, or when the incline motor hums without moving.</strong>
          </p>
          <ul>
            <li><strong>Hum, belt will not turn:</strong> unplug at once. Something is stopping the drive (a jam, a seized
            roller, a broken drive belt) or the motor cannot start.</li>
            <li><strong>Hum that labours under load:</strong> usually friction. A dry deck or an over-tight belt makes the
            motor work harder; lubricate and check tension per the manual.</li>
            <li><strong>Hum plus a smell:</strong> stop and let it cool. Do not run it again until you know the source.</li>
            <li><strong>Buzz from the console or plug area:</strong> check the outlet, cord and anything between the wall and
            the treadmill first.</li>
            <li><strong>Incline hums, deck does not move:</strong> clear under the deck, then run the <a href="/treadmill-calibration/" class="text-[#0F62FE] font-medium" data-autolink>incline calibration</a>
            in your manual.</li>
          </ul>
          <p>
            Hums are often heard alongside other noises. If yours has a beat to it, our
            <a href="/treadmill-clicking-noise/" class="text-[#0F62FE] font-medium">treadmill clicking noise</a> guide
            uses the same timing method.
          </p>`,
    },
    {
      id: 'normal-hum',
      heading: 'What a Normal Treadmill Hum Sounds Like',
      html: `          <p>
            Several parts of a treadmill make a continuous sound in normal use. Knowing which is which makes it much
            easier to spot the one that has changed.
          </p>
          <ul>
            <li><strong>The drive motor.</strong> Any electric motor hums as it turns. On most home treadmills, which use a
            DC motor, the pitch rises as the belt speeds up and drops as it slows. Many owners describe a faint whine at
            higher speeds, which is part of the same sound.</li>
            <li><strong>The motor controller.</strong> The circuit board that sets motor speed switches power on and off very
            quickly, and both the board and the motor can give off a faint electronic whine or hum because of it. It often
            changes pitch with speed and can be more noticeable at low speeds, when the rest of the machine is quiet.</li>
            <li><strong>The cooling fan.</strong> Many treadmills have a fan on the motor and some have one in the console.
            A fan makes a soft, airy hum. Some console fans are switched on and off from the console, so their hum comes and
            goes.</li>
            <li><strong>Transformers and power supplies.</strong> Power electronics often give off a low, steady hum at the
            mains frequency (60 Hz in the US) or a multiple of it. It is usually quiet and does not change with speed.</li>
            <li><strong>The belt on the deck.</strong> The running belt sliding over the deck makes a soft whoosh that
            blends into the motor hum, and footfall adds a beat on top.</li>
          </ul>
          <p>
            Put together, a healthy treadmill makes an even hum that rises smoothly with speed and stays steady while you
            walk or run at a constant pace. It is worth listening to your machine deliberately once while it is working
            well: run it empty at a few speeds, then walk on it, and note what you hear. That baseline is what you compare
            against later.
          </p>
          <p>
            One more point on motor types. If your treadmill uses an AC motor, which is more common on commercial and some
            higher-end home machines, the hum can sound more constant and less speed-dependent than on a DC machine. Our
            <a href="/ac-vs-dc-treadmill-motor/" class="text-[#0F62FE] font-medium">AC vs DC treadmill motor</a> guide
            explains the difference. The manual or parts diagram is the reliable way to know which you have.
          </p>`,
    },
    {
      id: 'when-it-hums',
      heading: 'Find It by When It Hums',
      html: `          <p>
            Timing is the quickest way to narrow down a hum. Run through these situations in turn and note which one
            matches what you hear. Stand beside the treadmill, not on it, for the empty tests, and keep the safety key
            clip within reach.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead><tr><th class="${th}">When it hums</th><th class="${th}">Likely source</th><th class="${th}">What to do</th></tr></thead>
            <tbody>
              <tr><td class="${td}">Powered on, belt stopped, quiet steady hum</td><td class="${td}">Power supply, transformer, console fan</td><td class="${td}">Usually normal; act if it turns to a loud buzz</td></tr>
              <tr><td class="${td}">You press Start, motor hums, belt does not move</td><td class="${td}">Jam, seized roller, broken or slipped drive belt, motor or controller fault</td><td class="${td}">Pull the safety key, unplug, then check</td></tr>
              <tr><td class="${td}">Belt running empty, hum rises evenly with speed</td><td class="${td}">Motor and controller working normally</td><td class="${td}">Nothing, unless it turns to grinding or a rising whine</td></tr>
              <tr><td class="${td}">Only when you step on; deepens with each footfall</td><td class="${td}">Friction: dry deck, over-tight belt, worn deck; or a motor struggling</td><td class="${td}">Lubricate and check tension per the manual</td></tr>
              <tr><td class="${td}">Gets louder over a session; hood feels hot</td><td class="${td}">Motor working too hard or poorly cooled</td><td class="${td}">Stop, cool, clean the motor area; see overheating</td></tr>
              <tr><td class="${td}">Hum plus burning or hot-plastic smell</td><td class="${td}">Friction or an electrical part overheating</td><td class="${td}">Stop and unplug; do not run until found</td></tr>
              <tr><td class="${td}">Buzz from the console or plug end</td><td class="${td}">Outlet, cord, surge device, power supply</td><td class="${td}">Check the wall connection first</td></tr>
              <tr><td class="${td}">Only during incline changes</td><td class="${td}">Incline motor and lift mechanism</td><td class="${td}">Normal if it moves; act if it hums without moving</td></tr>
            </tbody>
          </table></div>
          <p>
            A phone video with the sound on, taken at each of these stages, is the most useful thing you can send a support
            team. It records the timing and the pitch, which are hard to describe in words.
          </p>`,
    },
    {
      id: 'belt-wont-move',
      heading: 'Motor Hums but the Belt Will Not Move',
      html: `          <p>
            This is the hum that needs action straight away. If you press Start, hear the motor hum, and the belt does not
            turn (or barely creeps), pull the safety key and unplug the treadmill. A motor that is powered but cannot turn
            draws heavy current and heats quickly, so every few seconds of trying again makes damage more likely.
          </p>
          <p>
            The causes fall into two groups. Mechanical: something is stopping the drive. A sock, towel or cable pulled
            under the belt, a roller whose bearing has seized, a deck so dry and the belt so tight that the motor cannot
            break the friction, or a drive belt that has snapped or jumped off its pulley (in which case the motor may spin
            freely with a hum while the belt sits still). Electrical: the motor cannot produce enough turning force. On
            treadmills with an AC motor, a failed start capacitor is a classic cause of a hum with no rotation. On DC
            machines, worn brushes or a fault in the motor or controller can do the same.
          </p>
          <p>
            With the treadmill unplugged, look under and around the belt for anything caught, then try to move the belt by
            hand. A belt that moves with normal effort points away from a jam and towards the drive belt or electrics. A belt
            you can barely shift points to friction or a seized roller. Our full guide,
            <a href="/treadmill-turns-on-but-belt-wont-move/" class="text-[#0F62FE] font-medium">treadmill turns on but the belt will not move</a>,
            walks through the hand-turn test and each cause in order.
          </p>`,
    },
    {
      id: 'load-hum',
      heading: 'Hum That Rises When You Step On: Belt Tension and Lubrication',
      html: `          <p>
            If the treadmill sounds even when it runs empty but the hum deepens, strains or rises in pitch each time your
            foot lands, the motor is working harder than it should under load. The most common reason on a home treadmill is
            friction between the running belt and the deck.
          </p>
          <ul>
            <li><strong>A dry deck.</strong> Most treadmills need the deck lubricated at the interval in the manual. As the
            lubricant wears away, friction rises and the motor hum under load changes. Lubricate with the product and
            method the manual specifies; see
            <a href="/treadmill-belt-lubrication/" class="text-[#0F62FE] font-medium">treadmill belt lubrication</a>.
            Some treadmills use a deck and belt that are not meant to be lubricated, so check before adding anything.</li>
            <li><strong>An over-tight running belt.</strong> Owners often tighten a belt to cure slipping and go too far.
            Extra tension presses the belt harder onto the rollers and deck, and the motor has to fight it. Check tension
            the way your manual describes and back it off if it is beyond the recommended setting.</li>
            <li><strong>A worn belt or deck.</strong> A belt whose underside has glazed or worn, or a deck that has worn
            rough, creates friction that lubricant will not fix. If lubrication does not change the sound, the belt and deck
            are the next suspects.</li>
            <li><strong>Debris under the belt.</strong> Grit, pet hair and carpet fibres under the belt add drag. Clean
            under the belt edges with the machine unplugged; see
            <a href="/how-to-clean-under-treadmill-belt/" class="text-[#0F62FE] font-medium">how to clean under a treadmill belt</a>.</li>
          </ul>
          <p>
            A labouring hum is worth fixing even when nothing seems broken, because friction is the main thing that makes
            treadmill motors and controllers run hot. Our
            <a href="/treadmill-overheating/" class="text-[#0F62FE] font-medium">treadmill overheating</a> guide covers what
            that heat does over time. If the belt also hesitates or jerks as you land, the
            <a href="/treadmill-belt-jerking/" class="text-[#0F62FE] font-medium">treadmill belt jerking</a> guide is the
            better starting point.
          </p>`,
    },
    {
      id: 'drive-belt',
      heading: 'The Drive Belt and Pulleys',
      html: `          <p>
            Under the motor cover, a short ribbed belt usually links the motor pulley to the front roller. It is a common
            source of noise that owners mistake for the motor itself.
          </p>
          <ul>
            <li><strong>A worn or glazed drive belt</strong> can hum, whir or squeal as it slips on the pulley, especially
            when you step on and the load rises.</li>
            <li><strong>A drive belt that is cracked, frayed or partly off its pulley</strong> can make an uneven hum with a
            flutter or slap in it.</li>
            <li><strong>A broken drive belt</strong> leaves the motor spinning with nothing to drive, so you hear the motor
            hum and the running belt stays still.</li>
            <li><strong>A loose pulley</strong> on the motor shaft or roller can add a wobble to the sound.</li>
          </ul>
          <p>
            Checking it means removing the motor cover, so unplug first and follow your manual on what an owner may open.
            On a machine under warranty, this is often a support call rather than a DIY job. Our
            <a href="/treadmill-drive-belt/" class="text-[#0F62FE] font-medium">treadmill drive belt</a> guide covers what to
            look for and how replacement usually works.
          </p>`,
    },
    {
      id: 'motor-controller',
      heading: 'Motor and Controller Hums That Mean Wear',
      html: `          <p>
            If the belt, deck and drive belt check out, the hum may be coming from the motor or the controller board that
            drives it. These signs point that way:
          </p>
          <ul>
            <li><strong>A hum that has turned to a growl or grind.</strong> Motor bearings wear. A worn bearing usually makes
            a rougher, grittier sound than a normal hum, and it is often there with the belt running empty.</li>
            <li><strong>A rising whine that was not there before.</strong> A new high-pitched whine at speed, or one that
            keeps getting louder over weeks, is worth investigating, particularly if power also seems to drop.</li>
            <li><strong>Hum with crackle or sparking sounds.</strong> On brushed DC motors, worn carbon brushes can give a
            rough, crackling edge to the hum and cause surging or loss of power under load. See
            <a href="/treadmill-motor-brushes/" class="text-[#0F62FE] font-medium">treadmill motor brushes</a> for the signs
            and what replacement involves.</li>
            <li><strong>A hum that surges.</strong> If the pitch swings up and down at a constant set speed, and the belt
            speeds up and slows with it, the motor or controller is not holding speed. That can be brushes, a speed sensor,
            or the controller.</li>
            <li><strong>A loud buzz from the controller board area</strong> with the belt stopped or running. Some faint
            electronic noise is normal; a loud or new buzz from the board is not.</li>
          </ul>
          <p>
            Motors and controllers are not owner-serviceable on most home treadmills beyond brush replacement where the
            manual allows it. Note the model and serial number, take a video with sound, and contact the maker before
            ordering parts.
          </p>`,
    },
    {
      id: 'electrical',
      heading: 'Buzzing From the Console or Power Side: Outlet, Cords and Surge Protectors',
      html: `          <p>
            A buzz that comes from the console, the power entry at the front of the machine, or the plug end of the cord is
            often about how the treadmill is getting its power, not the motor. Check the power path first, because it is
            free and it is also where safety problems start.
          </p>
          <ul>
            <li><strong>Plug directly into a grounded wall outlet.</strong> Most treadmill manuals tell you to plug straight
            into a properly grounded outlet and not to use an extension cord. A long or thin cord adds resistance, which
            can starve the motor and make it hum and work harder, and the cord itself can heat up. Our
            <a href="/treadmill-extension-cord/" class="text-[#0F62FE] font-medium">treadmill extension cord</a> guide
            explains why.</li>
            <li><strong>Check what else is on the circuit.</strong> Heaters, air conditioners, dehumidifiers and other heavy
            loads on the same circuit can pull the supply down when they start. If the hum changes when another appliance
            switches on, that is a clue.</li>
            <li><strong>Look at the surge device.</strong> Power strips and some surge protectors are not made for motor
            loads, and some makers advise against particular types. Use what the manual allows. See
            <a href="/treadmill-surge-protector/" class="text-[#0F62FE] font-medium">do you need a surge protector for a treadmill</a>
            for what to look for.</li>
            <li><strong>Feel the plug and outlet after a session.</strong> A plug, cord or outlet that is hot, discoloured or
            buzzing points to a poor connection. Stop using that outlet and have it checked by an electrician.</li>
            <li><strong>Check the power cord and its socket on the treadmill.</strong> On machines with a detachable cord,
            make sure it is fully seated. A loose connection can buzz and arc.</li>
          </ul>
          <p>
            If the treadmill also trips its own reset switch or the household breaker, treat the buzz as part of the same
            electrical fault rather than a separate noise, and work through the electrical section of our
            <a href="/treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">treadmill troubleshooting</a> guide.
          </p>`,
    },
    {
      id: 'incline',
      heading: 'Incline Motor Hum',
      html: `          <p>
            Most powered <a href="/best-incline-treadmills/" class="text-[#0F62FE] font-medium" data-autolink>incline treadmills</a> use a separate small motor to raise and lower the deck, and it makes its own
            whirring hum while it works. That sound is normal as long as the deck moves smoothly and stops at the level you
            chose.
          </p>
          <p>
            It is a warning when the incline motor hums and the deck does not move, moves in jerks, or keeps humming after
            it has reached the set level. Common reasons are something trapped under the deck, the treadmill sitting on a
            thick rug or uneven floor that resists the lift, or the incline losing its calibration so that it tries to
            drive past its end point. Clear the area under the deck, make sure the treadmill sits flat, then run the incline
            calibration your manual describes. If it still hums without moving, stop using the incline and contact support;
            see <a href="/treadmill-incline-not-working/" class="text-[#0F62FE] font-medium">treadmill incline not working</a>.
          </p>`,
    },
    {
      id: 'checks-in-order',
      heading: 'Checks in Order (Unplugged)',
      html: `          <p>
            If the timing does not point clearly to one part, work through these in order. They go from free and quick to
            more involved, and most hums that are not simply normal change somewhere in the first five steps.
          </p>
          <ol>
            <li><strong>Pull the safety key and unplug the treadmill.</strong> Wait a few minutes. If it has been running,
            let the motor area cool.</li>
            <li><strong>Check the power path.</strong> Remove any extension cord or power strip, plug directly into a
            grounded wall outlet, and note anything hot or discoloured.</li>
            <li><strong>Clear under and around the belt.</strong> Look for anything caught, and vacuum the belt edges and the
            floor around the machine.</li>
            <li><strong>Turn the belt by hand.</strong> It should move with steady, even effort. Stiff spots or grinding
            point to a roller or friction.</li>
            <li><strong>Lubricate if due.</strong> If the manual says the deck takes lubricant and it is due, apply it as
            described and walk on the belt slowly to spread it.</li>
            <li><strong>Check running belt tension.</strong> Compare with the manual and loosen if it is over-tight.</li>
            <li><strong>Inspect the motor area, if the manual allows.</strong> With the cover off, look for dust build-up on
            the motor and fan, a worn or loose drive belt, and loose wires. Clean dust with a vacuum, not compressed air
            blown into the electronics.</li>
            <li><strong>Listen again.</strong> Plug back in, run it empty at a few speeds, then walk on it. Compare with the
            timing table above.</li>
          </ol>
          <p>
            If the hum is still not normal after these steps, the likely remaining causes are the motor, the controller or a
            roller bearing, and the next step is the manufacturer or a technician.
          </p>`,
    },
    {
      id: 'warranty',
      heading: 'Before You Call Support',
      html: `          <p>
            Support teams can diagnose a hum much faster with the right information, and on many treadmills the motor
            carries a longer warranty than other parts, so check before you pay for anything.
          </p>
          <ul>
            <li><strong>Find the model and serial number</strong> on the label on the frame, usually near the front or under
            the motor cover area.</li>
            <li><strong>Check your warranty terms.</strong> Motor, frame, parts and labour are often covered for different
            periods. Opening parts of the machine the manual does not allow can affect cover.</li>
            <li><strong>Record a short video with sound</strong> at each stage: powered on, belt empty at a few speeds, and
            someone walking.</li>
            <li><strong>Write down what you have already done:</strong> lubrication date, tension check, outlet change.</li>
            <li><strong>Note any error message</strong> the console shows, exactly as it appears. Codes differ by brand, so
            ask the maker what it means rather than relying on a generic list.</li>
          </ul>
          <p>
            For brand-specific steps, see our
            <a href="/proform-treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">ProForm</a> and
            <a href="/nordictrack-treadmill-troubleshooting/" class="text-[#0F62FE] font-medium">NordicTrack</a>
            troubleshooting guides.
          </p>`,
    },
    {
      id: 'prevent',
      heading: 'How to Keep the Hum Normal',
      html: `          <ul>
            <li><strong>Lubricate on schedule.</strong> Friction is the main thing that changes a treadmill's hum under
            load. Follow the interval your manual gives.</li>
            <li><strong>Keep the motor area clean.</strong> Dust and pet hair clog the motor fan and vents, which raises
            running temperature. Vacuum around the machine often and under the motor cover as the manual allows.</li>
            <li><strong>Use a mat.</strong> It keeps carpet fibres and dust out of the motor area and helps the machine sit
            level; see <a href="/best-treadmill-mats/" class="text-[#0F62FE] font-medium">best treadmill mats</a>.</li>
            <li><strong>Plug in directly.</strong> A dedicated, grounded outlet keeps the motor supplied properly.</li>
            <li><strong>Do not over-tighten the belt.</strong> Adjust tension only as far as the manual says.</li>
            <li><strong>Stay within the rated user weight and duty.</strong> A motor that runs near its limit every session
            runs hotter and wears faster.</li>
          </ul>
          <p>
            Our <a href="/treadmill-maintenance/" class="text-[#0F62FE] font-medium">treadmill maintenance</a> guide sets
            out a full routine.
          </p>`,
    },
    {
      id: 'stop',
      heading: 'When to Stop Using the Treadmill',
      html: `          <p>
            Stop, pull the safety key and unplug if the hum comes with any of these:
          </p>
          <ul>
            <li>The motor humming while the belt does not move, or barely moves</li>
            <li>A burning, hot-plastic or electrical smell (see
            <a href="/treadmill-burning-smell/" class="text-[#0F62FE] font-medium">treadmill burning smell</a>)</li>
            <li>A buzz, crackle or sparking from the plug, outlet, cord or console</li>
            <li>A hum that turns into grinding, or a whine that keeps rising</li>
            <li>The motor hood too hot to keep a hand on</li>
            <li>The breaker or reset switch tripping, or the treadmill cutting out</li>
            <li>The belt surging or not stopping when the key is pulled</li>
          </ul>
          <p>
            Do not keep restarting a treadmill that hums without moving to see if it clears. Each attempt heats the motor
            and controller further. Let it cool, do the unplugged checks above, and call the maker if the cause is not
            obvious.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'Is it normal for a treadmill to hum?',
      a: `Yes. The motor, its cooling fan and the power electronics all hum in normal use, and on most home treadmills the pitch rises with belt speed. What matters is a change: a hum that strains when you step on, turns to grinding, or comes with a smell.`,
    },
    {
      q: 'Why does my treadmill hum but the belt will not move?',
      a: `Something is stopping the drive or the motor cannot start. Common causes are an object caught under the belt, a seized roller, a broken or slipped drive belt, a very dry deck with an over-tight belt, or a motor, capacitor or controller fault. Pull the key and unplug at once, then check by hand.`,
    },
    {
      q: 'Why does my treadmill motor hum louder when I walk on it?',
      a: `The motor is working harder under load, usually because of friction between the belt and deck. Lubricate as the manual says, check the belt is not over-tight, and clean under it. If that does not change it, the belt, deck or motor may be worn.`,
    },
    {
      q: 'Why is my treadmill buzzing when it is turned off?',
      a: `If it buzzes while switched off but still plugged in, the sound is coming from the power side: the power supply, the switch, the cord or the outlet. Unplug it and check the outlet and cord for heat or damage. A buzz from the wall outlet itself needs an electrician.`,
    },
    {
      q: 'Can an extension cord make a treadmill hum?',
      a: `It can contribute. A long or thin cord adds resistance, which can leave the motor short of supply so it works harder and runs hotter. Most manuals say to plug directly into a grounded wall outlet, which also removes one variable while you diagnose.`,
    },
    {
      q: 'Why does my treadmill incline motor hum without moving?',
      a: `Usually something under the deck, a floor or rug resisting the lift, or lost calibration. Clear the area, level the machine and run the incline calibration in your manual. If it still hums without moving, stop using the incline and contact support.`,
    },
    {
      q: 'Is a humming treadmill motor going bad?',
      a: `Not on its own. A steady hum is normal. Signs of a motor problem are a hum with grinding or crackle, a whine that keeps rising, surging speed, loss of power under load, or a motor that hums without turning.`,
    },
  ],
  mistakesHeading: 'Common Mistakes With a Humming Treadmill',
  mistakesIntro: 'Most hums are normal or simple to fix. These turn them into bigger problems.',
  mistakes: [
    {
      title: 'Restarting a motor that hums but will not turn',
      body: 'A stalled motor heats fast. Each retry adds heat to the motor and controller. Pull the key, unplug, and find what is stopping it before trying again.',
    },
    {
      title: 'Tightening the belt to quieten it',
      body: 'Extra tension adds friction and load, which usually makes the hum worse and the motor hotter. Adjust tension only for slipping, and only to the manual setting.',
    },
    {
      title: 'Diagnosing through an extension cord or power strip',
      body: 'A weak supply changes how the motor sounds and behaves. Plug directly into a grounded wall outlet before deciding the motor is at fault.',
    },
    {
      title: 'Opening the motor cover while plugged in',
      body: 'The flywheel, belt and electronics under the cover are dangerous with power connected. Unplug first, every time, and follow the manual on what you may open.',
    },
  ],
  relatedHeading: 'Related Noise and Fault Guides',
  related: [
    {
      kicker: 'Fault',
      title: 'Treadmill Turns On but Belt Will Not Move',
      blurb: 'The hand-turn test and each cause, in order.',
      url: '/treadmill-turns-on-but-belt-wont-move/',
    },
    {
      kicker: 'Noise',
      title: 'Treadmill Clicking Noise',
      blurb: 'Find a click by when it happens.',
      url: '/treadmill-clicking-noise/',
    },
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
      kicker: 'Heat',
      title: 'Treadmill Overheating',
      blurb: 'Causes, checks and when to stop.',
      url: '/treadmill-overheating/',
    },
    {
      kicker: 'All faults',
      title: 'Treadmill Troubleshooting',
      blurb: 'Every common fault, in the order worth checking.',
      url: '/treadmill-troubleshooting/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">A steady hum that follows belt speed is normal; a hum that changes is the warning.</strong>
            Time it: before the belt moves, under load, at speed, from the console or during incline changes. Most
            abnormal hums trace back to friction (a dry deck or over-tight belt), the drive belt, or the power supply, and
            those are fixed with the unplugged checks above.`,
    `Stop at once if the motor hums but the belt will not move, or if the hum comes with a smell, sparking or tripping,
            and call the maker if the treadmill is under warranty. Our
            <a href="/treadmill-troubleshooting/" class="text-[#5AA9FF] font-bold no-underline">troubleshooting guide</a>
            covers every other symptom.`,
  ],
};

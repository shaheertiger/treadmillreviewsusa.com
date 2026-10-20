// Week-by-week tables are generated from the arrays below so the markup stays consistent.
// Each week: { w, change, total, rows: [[session, mph, incline, minutes, rpeZone], ...] }.
const TD = 'border-b border-gray-100 px-3 py-2 text-gray-700 align-top';
const TH = 'px-3 py-3 font-black';

function weekTable(caption, weeks) {
  const body = weeks
    .map((wk) => {
      const span = wk.rows.length + 1;
      const rows = wk.rows
        .map(
          (r, i) =>
            `<tr>${i === 0 ? `<td rowspan="${span}" class="${TD} font-black text-gray-900">${wk.w}</td>` : ''}<td class="${TD} font-bold">${r[0]}</td><td class="${TD}">${r[1]}</td><td class="${TD}">${r[2]}</td><td class="${TD}">${r[3]}</td><td class="${TD}">${r[4]}</td></tr>`
        )
        .join('\n');
      return `${rows}
<tr class="bg-gray-50"><td colspan="5" class="${TD} text-xs"><strong class="text-gray-900">Week total: ${wk.total}.</strong> ${wk.change}</td></tr>`;
    })
    .join('\n');
  return `          <div class="not-prose overflow-x-auto my-8">
<table class="min-w-[680px] w-full text-sm border-collapse">
<caption class="text-left text-xs font-black uppercase tracking-widest text-gray-500 pb-2">${caption}</caption>
<thead><tr class="bg-gray-900 text-white text-left"><th class="${TH}">Week</th><th class="${TH}">Session</th><th class="${TH}">Speed (mph)</th><th class="${TH}">Incline</th><th class="${TH}">Minutes</th><th class="${TH}">RPE · zone</th></tr></thead>
<tbody>
${body}
</tbody>
</table>
</div>`;
}

function simpleTable(minW, head, rows) {
  return `          <div class="not-prose overflow-x-auto my-8">
<table class="min-w-[${minW}px] w-full text-sm border-collapse">
<thead><tr class="bg-gray-900 text-white text-left">${head.map((h) => `<th class="${TH}">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r, i) => `<tr class="${i % 2 ? 'bg-gray-50' : ''}">${r.map((c, j) => `<td class="${TD}${j === 0 ? ' font-bold text-gray-900' : ''}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>
</div>`;
}

// ---- Walker track -------------------------------------------------------
const EASY_W = ['Easy walk', '2.8–3.5', '1–2%'];
const LONG_W = ['Long walk', '2.8–3.3', '1–2%'];
const Z2 = 'RPE 4–5 · zone 2';

const WALKER_FOUNDATION = [
  {
    w: '1',
    total: '75 min, 3 sessions',
    change: 'Starting point. Hands off the rails after the first minute.',
    rows: [
      [...EASY_W, '25', Z2],
      ['Incline walk', '2.8–3.2', '3% for the middle 15 min, 1% either side', '25', 'RPE 5–6 · zone 2–3 on the grade'],
      [...EASY_W, '25', Z2],
    ],
  },
  {
    w: '2',
    total: '90 min, 3 sessions',
    change: 'Duration: every session +5 minutes. Nothing else moves.',
    rows: [
      [...EASY_W, '30', Z2],
      ['Incline walk', '2.8–3.2', '3% for the middle 20 min', '30', 'RPE 5–6 · zone 2–3'],
      [...EASY_W, '30', Z2],
    ],
  },
  {
    w: '3',
    total: '100 min, 3 sessions',
    change: 'Duration: the third session becomes a 40-minute long walk.',
    rows: [
      [...EASY_W, '30', Z2],
      ['Incline walk', '2.8–3.2', '3% for the middle 20 min', '30', 'RPE 5–6 · zone 2–3'],
      [...LONG_W, '40', Z2],
    ],
  },
  {
    w: '4',
    total: '100 min, 3 sessions',
    change: 'Consolidation: repeat week 3 exactly. Nothing changes.',
    rows: [
      [...EASY_W, '30', Z2],
      ['Incline walk', '2.8–3.2', '3% for the middle 20 min', '30', 'RPE 5–6 · zone 2–3'],
      [...LONG_W, '40', Z2],
    ],
  },
];

const WALKER_PROGRESSION = [
  {
    w: '5',
    total: '130 min, 4 sessions',
    change: 'Frequency: a fourth session (easy walk) is added. Durations and grade held.',
    rows: [
      [...EASY_W, '30', Z2],
      ['Incline walk', '2.8–3.2', '3% for 20 min', '30', 'RPE 5–6 · zone 2–3'],
      [...EASY_W, '30', Z2],
      [...LONG_W, '40', Z2],
    ],
  },
  {
    w: '6',
    total: '130 min',
    change: 'Intensity: the incline block goes from 3% to 4%.',
    rows: [
      [...EASY_W, '30', Z2],
      ['Incline walk', '2.8–3.2', '4% for 20 min', '30', 'RPE 5–6 · zone 3'],
      [...EASY_W, '30', Z2],
      [...LONG_W, '40', Z2],
    ],
  },
  {
    w: '7',
    total: '145 min',
    change: 'Duration: three sessions +5 minutes; the incline block grows to 25 minutes at the same 4%.',
    rows: [
      [...EASY_W, '35', Z2],
      ['Incline walk', '2.8–3.2', '4% for 25 min', '35', 'RPE 5–6 · zone 3'],
      [...EASY_W, '35', Z2],
      [...LONG_W, '40', Z2],
    ],
  },
  {
    w: '8',
    total: '105 min (deload)',
    change: 'Deload: same four sessions at roughly two-thirds to three-quarters of week 7.',
    rows: [
      [...EASY_W, '25', 'RPE 4 · zone 2'],
      ['Incline walk', '2.8–3.2', '4% for 15 min', '25', 'RPE 5 · zone 2–3'],
      [...EASY_W, '25', 'RPE 4 · zone 2'],
      [...LONG_W, '30', 'RPE 4 · zone 2'],
    ],
  },
  {
    w: '9',
    total: '145 min',
    change: 'Back to week 7 volume, with one change — intensity: incline block 5%.',
    rows: [
      [...EASY_W, '35', Z2],
      ['Incline walk', '2.8–3.2', '5% for 25 min', '35', 'RPE 6 · zone 3'],
      [...EASY_W, '35', Z2],
      [...LONG_W, '40', Z2],
    ],
  },
  {
    w: '10',
    total: '160 min',
    change: 'Duration: easy walks to 40 minutes, long walk to 45 (about +10%).',
    rows: [
      [...EASY_W, '40', Z2],
      ['Incline walk', '2.8–3.2', '5% for 25 min', '35', 'RPE 6 · zone 3'],
      [...EASY_W, '40', Z2],
      [...LONG_W, '45', Z2],
    ],
  },
  {
    w: '11',
    total: '160 min',
    change: 'Intensity: incline block 6%. By the ACSM walking equation, 3.2 mph at 6% is about 6 METs, the point at which federal guidelines start to call activity vigorous.',
    rows: [
      [...EASY_W, '40', Z2],
      ['Incline walk', '2.8–3.2', '6% for 25 min', '35', 'RPE 6–7 · zone 3–4'],
      [...EASY_W, '40', Z2],
      [...LONG_W, '45', Z2],
    ],
  },
  {
    w: '12',
    total: '110 min (deload and check)',
    change: 'Deload, plus a benchmark: repeat the week 6 incline session (4% for 20 minutes at the same speed) and note how much easier it feels.',
    rows: [
      [...EASY_W, '25', 'RPE 4 · zone 2'],
      ['Benchmark incline walk', 'Your week 6 speed', '4% for 20 min', '30', 'Record RPE and heart rate'],
      [...EASY_W, '25', 'RPE 4 · zone 2'],
      [...LONG_W, '30', 'RPE 4 · zone 2'],
    ],
  },
];

// ---- Beginner runner track ----------------------------------------------
const RW = (structure) => [`Run-walk ×3: ${structure}`, 'Jog 4.5–5.5 · walk 3.0–3.5', '1%', '30 each', 'Jog RPE 5–6 · walk RPE 3–4'];
const INCLINE_OPT = ['Incline walk (optional)', '3.0–3.3', '3%', '30', 'RPE 5–6 · zone 2–3'];
const INCLINE_STD = ['Incline walk', '3.0–3.3', '3–4%', '30', 'RPE 5–6 · zone 2–3'];

const BR_FOUNDATION = [
  {
    w: '1',
    total: '90 min (120 with the optional walk); 24 min of jogging',
    change: 'Starting point. 5 minutes of walking either side of the intervals in every run-walk.',
    rows: [RW('8 × (1 min jog / 90 s walk)'), INCLINE_OPT],
  },
  {
    w: '2',
    total: '90 min (120); 27 min of jogging',
    change: 'Run blocks lengthen to 90 seconds, with fewer of them.',
    rows: [RW('6 × (90 s jog / 2 min walk)'), INCLINE_OPT],
  },
  {
    w: '3',
    total: '90 min (120); 30 min of jogging',
    change: 'Run blocks lengthen to 2 minutes.',
    rows: [RW('5 × (2 min jog / 2 min walk)'), INCLINE_OPT],
  },
  {
    w: '4',
    total: '90 min (120); 30 min of jogging',
    change: 'Consolidation: repeat week 3.',
    rows: [RW('5 × (2 min jog / 2 min walk)'), INCLINE_OPT],
  },
];

const BR_PROGRESSION = [
  {
    w: '5',
    total: '120 min; 30 min of jogging',
    change: 'Frequency: the incline walk becomes a standard fourth session. Run-walks repeat week 4.',
    rows: [RW('5 × (2 min jog / 2 min walk)'), INCLINE_STD],
  },
  {
    w: '6',
    total: '120 min; 36 min of jogging',
    change: 'Run blocks: 3 minutes, shorter walks.',
    rows: [RW('4 × (3 min jog / 90 s walk)'), INCLINE_STD],
  },
  {
    w: '7',
    total: '120 min; 45 min of jogging',
    change: 'Run blocks: 5 minutes. The biggest step on this track — if it is too much, repeat week 6 first.',
    rows: [RW('3 × (5 min jog / 2 min walk)'), INCLINE_STD],
  },
  {
    w: '8',
    total: '100 min (deload); 24 min of jogging',
    change: 'Deload: shorter sessions, back to 2-minute jogs.',
    rows: [
      ['Run-walk ×3: 4 × (2 min jog / 2 min walk)', 'Jog 4.5–5.5 · walk 3.0–3.5', '1%', '25 each', 'Jog RPE 5 · walk RPE 3'],
      ['Incline walk', '3.0–3.3', '3%', '25', 'RPE 5 · zone 2'],
    ],
  },
  {
    w: '9',
    total: '120 min; 48 min of jogging',
    change: 'Run blocks: 8 minutes (about 7% more jogging than week 7).',
    rows: [RW('2 × (8 min jog / 2 min walk)'), INCLINE_STD],
  },
  {
    w: '10',
    total: '120 min; 60 min of jogging',
    change: 'Run blocks: 10 minutes.',
    rows: [RW('2 × (10 min jog / 2 min walk)'), INCLINE_STD],
  },
  {
    w: '11',
    total: '120 min; 60 min of jogging',
    change: 'Structure only: the same 20 minutes of jogging, now continuous. Same total, no walk break.',
    rows: [RW('20 min continuous jog'), INCLINE_STD],
  },
  {
    w: '12',
    total: '100 min (deload); 45 min of jogging',
    change: 'Deload: 15 minutes continuous. Finishing this week comfortably is the sign you are ready for longer continuous running.',
    rows: [
      ['Run-walk ×3: 15 min continuous jog', 'Jog 4.5–5.5 · walk 3.0–3.5', '1%', '25 each', 'Jog RPE 5 · walk RPE 3'],
      ['Incline walk', '3.0–3.3', '3%', '25', 'RPE 5 · zone 2'],
    ],
  },
];

// ---- Runner track -------------------------------------------------------
const EASY_R = ['Easy run', '5.0–6.0', '1%'];
const LONG_R = ['Long run', '5.0–5.8', '1%'];
const WALK_R = ['Incline walk', '3.0–3.5', '4–6%', '30', 'RPE 4–5 · zone 2'];
const ZR = 'RPE 4–5 · zone 2';

const RUNNER_FOUNDATION = [
  {
    w: '1',
    total: '100 min, 3 runs',
    change: 'Starting point: everything easy, no hard sessions at all.',
    rows: [
      [...EASY_R, '30', ZR],
      [...EASY_R, '30', ZR],
      [...LONG_R, '40', ZR],
    ],
  },
  {
    w: '2',
    total: '105 min',
    change: 'Duration: long run +5 minutes.',
    rows: [
      [...EASY_R, '30', ZR],
      [...EASY_R, '30', ZR],
      [...LONG_R, '45', ZR],
    ],
  },
  {
    w: '3',
    total: '105 min',
    change: 'Intensity: one easy run becomes a hill session. Total time unchanged.',
    rows: [
      [...EASY_R, '30', ZR],
      ['Hill session: 6 × 1 min up / 2 min easy', 'Climb 4.5–5.5 · easy 5.0', '4% on the reps, 1% between', '30', 'RPE 7 on reps · zone 3–4'],
      [...LONG_R, '45', ZR],
    ],
  },
  {
    w: '4',
    total: '105 min',
    change: 'Consolidation: repeat week 3.',
    rows: [
      [...EASY_R, '30', ZR],
      ['Hill session: 6 × 1 min up / 2 min easy', 'Climb 4.5–5.5 · easy 5.0', '4% / 1%', '30', 'RPE 7 on reps · zone 3–4'],
      [...LONG_R, '45', ZR],
    ],
  },
];

const RUNNER_PROGRESSION = [
  {
    w: '5',
    total: '135 min; running 105 min',
    change: 'Frequency: a fourth session is added — and it is a walk, so running volume does not rise at all.',
    rows: [
      [...EASY_R, '30', ZR],
      ['Hill session: 6 × 1 min / 2 min easy', 'Climb 4.5–5.5', '4% / 1%', '30', 'RPE 7 on reps · zone 3–4'],
      WALK_R,
      [...LONG_R, '45', ZR],
    ],
  },
  {
    w: '6',
    total: '135 min; running 105 min',
    change: 'Session type: the hill session is replaced by the first flat interval session.',
    rows: [
      [...EASY_R, '30', ZR],
      ['Intervals: 6 × 1 min fast / 2 min easy', 'Fast 7.0–8.0 · easy 5.0', '1%', '30', 'RPE 7–8 on reps · zone 4'],
      WALK_R,
      [...LONG_R, '45', ZR],
    ],
  },
  {
    w: '7',
    total: '145 min; running 115 min',
    change: 'Duration: easy and long runs +5 minutes (about +10% running). Quality session back to hills.',
    rows: [
      [...EASY_R, '35', ZR],
      ['Hill session: 6 × 1 min / 2 min easy', 'Climb 4.5–5.5', '4% / 1%', '30', 'RPE 7 on reps · zone 3–4'],
      WALK_R,
      [...LONG_R, '50', ZR],
    ],
  },
  {
    w: '8',
    total: '110 min (deload); running 85 min',
    change: 'Deload: every session shorter; four interval reps instead of six.',
    rows: [
      [...EASY_R, '25', 'RPE 4 · zone 2'],
      ['Intervals: 4 × 1 min fast / 2 min easy', 'Fast 7.0–8.0 · easy 5.0', '1%', '25', 'RPE 7 on reps'],
      ['Incline walk', '3.0–3.5', '4%', '25', 'RPE 4 · zone 2'],
      [...LONG_R, '35', 'RPE 4 · zone 2'],
    ],
  },
  {
    w: '9',
    total: '150 min; running 120 min',
    change: 'Back to week 7 volume; the hill reps lengthen to 90 seconds (one change to the quality session).',
    rows: [
      [...EASY_R, '35', ZR],
      ['Hill session: 6 × 90 s / 2 min easy', 'Climb 4.5–5.5', '4% / 1%', '35', 'RPE 7 on reps · zone 4'],
      WALK_R,
      [...LONG_R, '50', ZR],
    ],
  },
  {
    w: '10',
    total: '150 min; running 120 min',
    change: 'Interval reps lengthen to 2 minutes; volume held.',
    rows: [
      [...EASY_R, '35', ZR],
      ['Intervals: 5 × 2 min fast / 2 min easy', 'Fast 7.0–7.5 · easy 5.0', '1%', '35', 'RPE 7–8 on reps · zone 4'],
      WALK_R,
      [...LONG_R, '50', ZR],
    ],
  },
  {
    w: '11',
    total: '160 min; running 130 min',
    change: 'Duration: easy and long runs +5 minutes (about +8% running). Quality session repeats week 9.',
    rows: [
      [...EASY_R, '40', ZR],
      ['Hill session: 6 × 90 s / 2 min easy', 'Climb 4.5–5.5', '4% / 1%', '35', 'RPE 7 on reps · zone 4'],
      WALK_R,
      [...LONG_R, '55', ZR],
    ],
  },
  {
    w: '12',
    total: 'About 110 min (deload and check)',
    change: 'Deload, plus a benchmark: after a 10-minute warm-up, 20 minutes steady at the speed that feels RPE 6–7. Compare with the same test at the start of the next block.',
    rows: [
      [...EASY_R, '25', 'RPE 4 · zone 2'],
      ['Benchmark: 10 min easy, 20 min steady, 5 min easy', 'Steady at RPE 6–7', '1%', '35', 'Record speed and heart rate'],
      ['Incline walk', '3.0–3.5', '4%', '20', 'RPE 4 · zone 2'],
      [...LONG_R, '30', 'RPE 4 · zone 2'],
    ],
  },
];

export default {
  slug: 'treadmill-workout-plan',
  title: 'Treadmill Workout Plan (2026): A 12-Week Progressive Program',
  description:
    'A 12-week treadmill workout plan with walker, beginner-runner and runner tracks: week-by-week speed, incline, duration and RPE, plus deloads and strength days.',
  crumbLabel: 'Treadmill Workout Plan',
  breadcrumb: { name: 'Workouts & Training', url: '/training/' },
  kicker: 'Training Plan',
  updated: 'October 2026',
  updatedLong: 'October 20, 2026',
  published: '2026-10-20',
  socialProof: '1.9k',
  h1: ['A 12-Week', 'Treadmill Workout Plan'],
  standfirst:
    'A single good session is easy to find. What most people lack is the sequence: what to do in week one, what changes in week five, and when to back off. This plan gives you twelve weeks of it, in three tracks, with every speed, grade and duration written down.',
  ctas: [
    { label: 'Weeks 1–4', href: '#foundation' },
    { label: 'Weeks 5–12', href: '#progression' },
  ],
  tags: ['treadmill workout plan', 'treadmill routine for weight loss', 'treadmill cardio workout', 'treadmill training plan', '12-week treadmill plan'],
  stickyCta: { text: 'See the Week-by-Week Plan', link: '#foundation' },
  note: `<strong class="text-gray-900">What this plan is, and is not.</strong> We review
          treadmills. This is a general training structure for healthy adults, built on the US
          physical activity guidelines; it is not medical advice, physiotherapy, coaching or
          nutrition advice. If you have a heart, lung, metabolic or joint condition, take
          medication that affects heart rate, are pregnant, or have been inactive for a long time,
          talk to your doctor before starting. Stop and seek advice for chest pain, unusual
          breathlessness, dizziness, an irregular heartbeat or pain that changes how you walk.
          <strong class="text-gray-900">On the numbers:</strong> speeds and grades are typical
          starting points for illustration. The effort column (RPE) is the instruction; the speed
          column is a guess at where that effort usually sits.`,
  lead: `A treadmill workout plan is not a list of good sessions. It is a decision about
          order — which session comes first, what changes each week, how much, and when you
          deliberately do less. Get the order right and ordinary sessions add up to real fitness;
          get it wrong and excellent sessions end in sore shins by week three.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'The Short Answer: The Plan at a Glance',
      html: `          <p>
            This <strong>treadmill workout plan</strong> runs for twelve weeks: a
            <strong>four-week foundation block</strong> that builds the habit and the tissues, then
            an <strong>eight-week progression</strong> that takes you to, or past, the 150 weekly
            minutes of moderate activity the US guidelines recommend. There are three tracks, and
            you follow one:
          </p>
${simpleTable(620, ['Track', 'Who it is for', 'Weeks 1–4', 'Where week 11 lands'], [
  ['Walker', 'You can walk 20 minutes comfortably and have no running goal', '3 walks a week, 75 → 100 min', '4 walks, 160 min, including 25 min of incline work at 6%'],
  ['Beginner runner', 'You can walk 30 minutes briskly but cannot jog more than a few minutes', '3 run-walks, about 90 min, plus an optional incline walk', '20 minutes of continuous jogging, three times a week, plus an incline walk'],
  ['Runner', 'You already run 20 to 30 minutes continuously, two or three times a week', '3 easy runs, 100 → 105 min, one becoming a hill session', '4 sessions, 160 min: easy, quality, incline walk, long run'],
])}
          <p>
            Every track follows the same rules. <strong>Change one thing per week</strong> —
            frequency, duration or intensity, in roughly that order. <strong>Keep most of the week
            easy</strong>: about four-fifths of the minutes are conversational. <strong>Weeks 4, 8
            and 12 are lighter</strong> on purpose. And <strong>repeat a week</strong> whenever the
            one you just finished did not feel finished. The tables are below; the reasoning
            behind each rule follows them.
          </p>
          <p>
            This page is the plan. The individual sessions it calls for — easy walks, incline
            walks, intervals, hills, long runs — each have their own page on this site, linked in
            the session section, and our
            <a href="/treadmill-workouts/" class="text-[#0F62FE] font-medium">treadmill workouts</a>
            pillar explains the four session types the plan is built from.
          </p>`,
    },
    {
      id: 'guidelines',
      heading: 'What the Guidelines Ask For, and Where This Plan Lands',
      html: `          <p>
            The target the plan builds toward is not ours. The <strong>Physical Activity Guidelines
            for Americans</strong> (US Department of Health and Human Services, second edition,
            2018), which the CDC summarises for the public, recommend that adults get
            <strong>150 to 300 minutes a week of moderate-intensity aerobic activity, or 75 to 150
            minutes of vigorous activity</strong>, or an equivalent mix, preferably spread across
            the week. They note additional benefits beyond 300 minutes, and add
            <strong>muscle-strengthening activity on at least two days a week</strong> covering
            the major muscle groups. The American College of Sports Medicine's 2011 position stand
            (Garber and colleagues, <em>Medicine &amp; Science in Sports &amp; Exercise</em>)
            gives the same 150-minute floor — framed as 30 minutes on five days — and recommends
            training each major muscle group two or three days a week.
          </p>
          <p>
            Two features of those guidelines shape the plan directly.
          </p>
          <p>
            <strong>Vigorous minutes count double.</strong> In the guidelines' arithmetic, one
            minute of vigorous activity is worth about two of moderate. That is why the runner
            track reaches the target with fewer sessions than the walker track, and why the
            walker track's steepest incline blocks matter more than their minutes suggest.
          </p>
          <p>
            <strong>Intensity has a definition.</strong> The guidelines classify activity of 3.0
            to 5.9 METs (multiples of resting energy use) as moderate and 6 or more as vigorous.
            Walking at 3 mph on the flat is a little over 3 METs by the ACSM walking equation, so
            it counts; a slow stroll does not. For a felt measure, the CDC offers two: on a 0 to
            10 effort scale, moderate is a 5 or 6 and vigorous begins at 7 or 8, and in the talk
            test, moderate means you can talk but not sing, while vigorous means you cannot say
            more than a few words without pausing for breath.
          </p>
          <p>
            So where does the plan land? The walker track starts at 75 minutes a week — half the
            target, deliberately — reaches 145 minutes by week 7 and 160 by week 10. The beginner
            runner track sits at 120 minutes of activity, of which up to an hour is jogging; if
            your jogging feels vigorous (RPE 7 or above) that clears the target easily, and if it
            feels moderate, one optional 30-minute walk takes you past 150 by any count. The
            runner track starts above the target and stays there. None of the tracks goes near
            300 minutes, because a first twelve weeks is not the place to chase the upper end.
          </p>
          <p class="text-sm text-gray-500">
            References: US Department of Health and Human Services, <em>Physical Activity
            Guidelines for Americans</em>, 2nd ed., 2018; CDC, "Adult Activity: An Overview" and
            "Measuring Physical Activity Intensity" (cdc.gov, checked October 20, 2026); Garber CE
            et al., ACSM position stand, <em>Med Sci Sports Exerc</em> 2011;43(7):1334–1359;
            Donnelly JE et al., ACSM position stand on weight loss, <em>Med Sci Sports Exerc</em>
            2009;41(2):459–471; Buist I et al., <em>Am J Sports Med</em> 2008;36(1):33–39;
            Nielsen RO et al., <em>J Orthop Sports Phys Ther</em> 2014;44(10):739–747.
          </p>`,
    },
    {
      id: 'choose-track',
      heading: 'Choose Your Track (and How to Read the Tables)',
      html: `          <p>
            <strong>Walker</strong> if you can walk 20 minutes without discomfort and running is
            not a goal, or if you are returning after a long break, carrying significant extra
            weight, or protecting a knee, hip or back. Walking with incline can take you all the
            way to the guideline target, and plenty of people never need anything else.
          </p>
          <p>
            <strong>Beginner runner</strong> if you can walk briskly for 30 minutes and want to
            run, but cannot yet jog for more than a few minutes. If you cannot comfortably walk
            for 30 minutes yet, do the walker foundation block first and start this track
            afterwards. Our
            <a href="/treadmill-workout-for-beginners/" class="text-[#0F62FE] font-medium">beginner treadmill workout</a>
            page covers the very first sessions on a machine in more detail.
          </p>
          <p>
            <strong>Runner</strong> if you already run 20 to 30 minutes continuously two or three
            times a week without pain. If you run more than about two and a half hours a week
            already, this plan is below your level; use its rules rather than its numbers.
          </p>
          <p>
            <strong>If you are between two tracks, take the lower one.</strong> Being slightly
            under-challenged for four weeks costs nothing; being over-challenged in week two is
            how plans end.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">How to read the tables</h3>
          <p>
            Each row is one session. The <strong>speed</strong> column is in mph and is a typical
            range, not an instruction — choose the speed inside it, or outside it, that produces
            the effort in the last column. The <strong>incline</strong> column is the treadmill's
            grade in per cent. <strong>Minutes</strong> include a five-minute easy warm-up and
            cool-down. The effort column uses a 0 to 10 rating of perceived exertion (RPE) and
            the five-zone heart-rate model from our
            <a href="/treadmill-heart-rate-zones/" class="text-[#0F62FE] font-medium">heart rate zones guide</a>:
          </p>
${simpleTable(600, ['RPE (0–10)', 'Talk test', 'Zone (% of max heart rate)', 'Guideline category'], [
  ['2–3', 'You could sing', 'Zone 1, 50–60%', 'Light: warm-ups, cool-downs, recovery'],
  ['4–5', 'Full sentences, easily', 'Zone 2, 60–70%', 'Lower edge of moderate — keep it brisk'],
  ['5–6', 'Sentences, but you could not sing', 'Upper zone 2 to zone 3, 65–80%', 'Moderate (CDC: 5–6)'],
  ['7–8', 'A few words, then a breath', 'Zone 4, 80–90%', 'Vigorous (CDC: from 7–8)'],
  ['9–10', 'Single words or none', 'Zone 5, 90–100%', 'Not used anywhere in this plan'],
])}
          <p>
            One honest wrinkle. The CDC's own heart-rate guidance — which, as of October 20,
            2026, no longer appears at its former address on cdc.gov — put moderate at roughly
            64 to 76% of estimated maximum and vigorous at 77 to 93%. That does not line up neatly
            with the five-zone model: an easy zone 2 session sits at the bottom edge of
            "moderate". In practice that means the easy sessions here should be brisk —
            conversational, but too much effort to sing — rather than an amble. And because every
            zone is calculated from a maximum heart rate that the 220-minus-age formula misses by
            ten beats or more for many individuals, the talk test outranks the number whenever
            they disagree. If you take a beta blocker, ignore the zone column entirely and use
            RPE.
          </p>
          <p>
            For converting the speeds to pace per mile or km/h, use our
            <a href="/treadmill-pace-and-speed-chart/" class="text-[#0F62FE] font-medium">treadmill pace and speed chart</a>.
            The ranges in this plan are taken from it: 2.8 to 3.5 mph is a comfortable-to-brisk
            walk, 4.5 to 5.5 mph the walk-jog transition and easy jog, 5 to 6 mph easy running,
            and 7 to 8 mph the interval range it gives for someone training toward a 5K.
          </p>`,
    },
    {
      id: 'foundation',
      heading: 'Weeks 1–4: The Foundation Block',
      html: `          <p>
            The foundation block has two jobs, and neither is fitness. The first is the habit:
            twelve sessions completed, on the days you planned, at an effort that leaves you
            wanting to come back. The second is tissue: heart and lungs adapt within two or three
            weeks, but tendons, bones and connective tissue take months, and the foundation is
            where they start to catch up. That is why the block is easier than you will want it
            to be, and why week 4 adds nothing at all.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Walker track</h3>
${weekTable('Walker track — weeks 1 to 4', WALKER_FOUNDATION)}
          <p>
            Put the three sessions on non-consecutive days if you can — Monday, Wednesday and
            Saturday is a common pattern. Speed is not a progression variable for walkers here:
            choose whatever speed in the 2.8 to 3.5 mph range gives you the effort in the last
            column, and expect that speed to creep up on its own over the twelve weeks while the
            effort stays the same. That creep is the fitness. The incline block is the only part
            of the week that should feel like work, and even that is "breathing deeper", not
            "breathing hard".
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Beginner runner track</h3>
${weekTable('Beginner runner track — weeks 1 to 4', BR_FOUNDATION)}
          <p>
            Every run-walk session is five minutes of walking, the interval block, any remaining
            minutes as easy walking, and five minutes of walking to finish — 30 minutes in all.
            The jog should be slow enough to talk in short sentences: 4.5 to 5.5 mph, a 12- to
            13-minute mile, is right for most beginners even when it feels almost comically slow.
            The optional incline walk on a fourth day is there for people who want more time on
            the machine without more running; skip it freely in weeks 1 and 2.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Runner track</h3>
${weekTable('Runner track — weeks 1 to 4', RUNNER_FOUNDATION)}
          <p>
            Runners usually find week 1 suspiciously easy, and it is meant to be. Three easy runs
            re-establish what easy means on a treadmill — slower than you would choose, 60 to 90
            seconds per mile slower than you could race — before any hard work arrives. The first
            quality session, in week 3, is a short hill session rather than flat intervals
            because grade raises the work without raising the speed or the impact per stride.
            Our <a href="/treadmill-hill-workout/" class="text-[#0F62FE] font-medium">treadmill hill workout</a>
            page covers the hill-repeat session in full.
          </p>`,
    },
    {
      id: 'progression',
      heading: 'Weeks 5–12: The Eight-Week Progression',
      html: `          <p>
            The eight-week block has the same shape on every track: three building weeks, a
            deload, three more building weeks, and a final deload with a simple benchmark so you
            can see what changed. Each week's grey row says exactly what moved. If a row names
            two changes, one of them is a return to a volume you have already done — after a
            deload, coming back to the previous week's minutes does not count as new stress.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Walker track</h3>
${weekTable('Walker track — weeks 5 to 12', WALKER_PROGRESSION)}
          <p>
            The walker track's intensity lives entirely in the grade. Going from 3% in week 5 to
            6% by week 11, at the same speed, roughly doubles the climbing work of the incline
            block, with no increase in impact. If your machine tops out below 6%, hold at its
            maximum and lengthen the incline block by five minutes instead. Keep your hands off
            the rails on the grade; leaning on them removes much of the work while the console
            reports the same numbers. For more incline structures to rotate in from week 9, see our
            <a href="/treadmill-walking-workouts/" class="text-[#0F62FE] font-medium">treadmill walking workouts</a>.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Beginner runner track</h3>
${weekTable('Beginner runner track — weeks 5 to 12', BR_PROGRESSION)}
          <p>
            This track is deliberately gentler than the widely used nine-week couch-to-5K
            structure, which reaches 30 minutes of continuous running by week nine. Here, week 11
            is 20 continuous minutes and week 12 backs off to 15. Total session time is held at
            30 minutes the whole way, so what rises is the share of it spent jogging rather than
            the length of the session. If you would rather follow the faster nine-week version,
            our <a href="/couch-to-5k-treadmill/" class="text-[#0F62FE] font-medium">couch to 5K on a treadmill</a>
            page sets it out week by week; you can also switch to it after week 12, starting at
            the week whose longest run matches yours.
          </p>
          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Runner track</h3>
${weekTable('Runner track — weeks 5 to 12', RUNNER_PROGRESSION)}
          <p>
            The runner track's fourth session is a walk, not a run. That is the single most
            useful trick in the plan for an established runner: it adds 30 minutes of aerobic
            work and gets the weekly total comfortably past the guideline target without adding a
            single minute of impact. Running time rises only in weeks 7 and 11, by about ten per
            cent each time. The quality session alternates between hills and flat intervals so no
            one structure is repeated often enough to go stale. The interval speeds — 7 to 8 mph —
            are a typical range; set yours at a pace you could complete on the final rep, and use our
            <a href="/treadmill-interval-workouts/" class="text-[#0F62FE] font-medium">treadmill interval workouts</a>
            guide for the reasoning and alternative structures.
          </p>`,
    },
    {
      id: 'weekly-layout',
      heading: 'Laying Out the Week, Strength Days Included',
      html: `          <p>
            The guidelines ask for muscle-strengthening work on at least two days a week, and the
            plan assumes you will do it. Strength training matters more alongside a treadmill
            plan than most people expect: it is the main protection the plan offers your knees,
            hips and calves against the repetitive load of walking and running, and on the
            walker track it is the counterweight to a week that otherwise trains only one
            movement. A sample layout for weeks 5 to 12:
          </p>
${simpleTable(640, ['Day', 'Walker', 'Beginner runner', 'Runner'], [
  ['Mon', 'Easy walk, then strength A', 'Run-walk', 'Easy run, then strength A'],
  ['Tue', 'Rest', 'Strength A', 'Rest'],
  ['Wed', 'Incline walk', 'Run-walk', 'Quality: hills or intervals'],
  ['Thu', 'Strength B', 'Rest', 'Incline walk, then strength B'],
  ['Fri', 'Easy walk', 'Run-walk, then short strength B', 'Rest'],
  ['Sat', 'Long walk', 'Incline walk', 'Long run'],
  ['Sun', 'Rest', 'Rest', 'Rest or an easy walk outdoors'],
])}
          <p>
            In weeks 1 to 4, drop the sessions the tables do not include; for walkers that means
            Monday, Wednesday and Saturday, with strength on Tuesday and Thursday or Friday.
          </p>
          <p>
            <strong>What strength work to do.</strong> A short, whole-body session covers it: a
            squat or sit-to-stand, a hip hinge or glute bridge, a push (push-ups against a bench
            or wall), a pull (a row with a band or dumbbell), a step-up or split squat, calf
            raises, and a plank. Two or three sets of 8 to 12 repetitions, stopping two or three
            repetitions short of failure, is a common starting structure. Calf raises earn their
            place on the walker track in particular: the incline blocks load the calves and
            Achilles more than flat walking does.
          </p>
          <p>
            <strong>Where to put it.</strong> Strength work pairs best with easy days, either
            after the treadmill session or on a day of its own. The combination to avoid is hard
            intervals or hills immediately before heavy lower-body lifting, which degrades
            lifting technique when it matters most, and heavy leg work the day before the
            runner's quality session. Our
            <a href="/treadmill-before-or-after-weights/" class="text-[#0F62FE] font-medium">treadmill before or after weights</a>
            guide goes through the ordering question by goal. As a rule, in this plan the
            treadmill comes first only when it is an easy session or a warm-up.
          </p>
          <p>
            <strong>Strength during deloads.</strong> Cut the sets by about a third in weeks 4, 8
            and 12, along with the treadmill minutes. A deload that lightens one half of your
            training while the other half keeps climbing is not a deload.
          </p>`,
    },
    {
      id: 'progression-rules',
      heading: 'The Progression Rules, and the Limits of the 10% Rule',
      html: `          <p>
            Every row in the tables follows five rules. They are worth knowing in their own right,
            because they let you adjust the plan — or write the next one — without guessing.
          </p>
          <p>
            <strong>1. One change per week.</strong> Each week moves one variable: more sessions,
            longer sessions, or a harder element (a steeper grade, longer reps, a new session
            type). If something goes wrong, you know what caused it. Any one variable changes at
            most every other week, which is how the plan reconciles weekly progress with the
            advice on our workouts pillar to hold each change for two or three weeks. If the
            pace feels too quick, stretch every step to three weeks; a 16- or 18-week version of
            this plan is still a good plan.
          </p>
          <p>
            <strong>2. Frequency, then duration, then intensity.</strong> Add a session before
            you add minutes, and add minutes before you add speed or grade. Commonly taught
            exercise-prescription guidance for beginners — as summarised in ACSM certification
            materials — is to add 5 to 10 minutes per session every one to two weeks over the
            first four to six weeks, and to extend duration before raising intensity. The walker
            foundation follows that almost exactly.
          </p>
          <p>
            <strong>3. About ten per cent a week — as a ceiling, not a target, and only once you
            have volume.</strong> The 10% rule says not to increase weekly running volume by more
            than a tenth per week. Its evidence is thinner than its fame. The only randomised
            trial of it, the GRONORUN study (Buist and colleagues, 2008), put 532 novice runners
            on either a standard eight-week programme or a gentler 13-week programme built on the
            10% rule, and found almost identical injury rates: 20.3% and 20.8%. A one-year cohort
            of 874 novice runners (Nielsen and colleagues, 2014) found that those who raised their
            weekly distance by more than 30% over two weeks seemed more prone to certain overuse
            injuries — knee-cap pain, iliotibial band problems and shin splints among them — than
            those who stayed under 10%, though the authors called the finding exploratory and it
            fell just short of statistical significance.
          </p>
          <p>
            Read together, the evidence supports avoiding big jumps rather than the precise figure
            of ten. The rule also has three practical limits. <strong>At small volumes it is
            meaningless:</strong> ten per cent of a 75-minute week is under eight minutes, so the
            walker foundation adds five minutes per session instead — 20% on paper, trivial for
            the body. <strong>It ignores intensity:</strong> a week with the same minutes and a
            new interval session is harder than its total suggests, which is why the plan never
            adds minutes and intensity in the same week. And <strong>it ignores incline:</strong>
            treadmill grade is load, so on the walker track a grade increase is treated as that
            week's change, not as free.
          </p>
          <p>
            <strong>4. Walk-run plans are an honest exception.</strong> On the beginner runner
            track, jogging time rises faster than ten per cent in several weeks, as it does in
            every walk-run programme, because jogging is replacing walking inside a session of
            fixed length rather than being added on top. The plan manages that by keeping total
            time flat, keeping the jog at RPE 5 to 6, and treating week 7 — the biggest step — as
            a week to repeat freely.
          </p>
          <p>
            <strong>5. Speed is the last dial.</strong> Speed raises effort and impact together,
            and it raises the consequence of a stumble on a moving belt. The plan raises it only
            inside interval reps, and only on the runner track. Everywhere else, speed is
            whatever produces the prescribed effort, and it rises by itself as you get fitter.
          </p>`,
    },
    {
      id: 'deloads',
      heading: 'Deload Weeks: Why Weeks 4, 8 and 12 Are Lighter',
      html: `          <p>
            A deload is a planned lighter week. The plan uses two kinds. In the foundation block,
            week 4 is a <strong>hold</strong>: it repeats week 3, because the volume is already
            low and cutting it further would take you below where you started. In the eight-week
            block, weeks 8 and 12 are true <strong>deloads</strong>: the same number of sessions,
            at roughly two-thirds to three-quarters of the previous week's minutes, with any hard
            element shortened rather than removed.
          </p>
          <p>
            Why bother? Training produces fatigue and fitness at the same time, and fatigue hides
            fitness. Cutting volume for a week lets the fatigue clear while the fitness, which
            fades much more slowly, remains — so most people come out of a deload week feeling
            better than they went in, and the week after it is often the best of the block. It
            is also the most reliable defence against the slow accumulation of tiredness that
            ends training plans in month two. Exactly how much to cut is a matter of coaching
            convention rather than precise science; the range used here is a common one.
          </p>
          <p>
            <strong>Keep the frequency.</strong> Deload by shortening sessions, not by skipping
            them. The habit is the most valuable thing the plan builds, and a week off is a
            different thing from a lighter week.
          </p>
          <p>
            <strong>Keep a little intensity.</strong> The runner's week 8 still has intervals —
            four reps instead of six — and the walker's still has an incline block, just a shorter
            one. Removing intensity entirely tends to make the following week feel like a jump.
          </p>
          <p>
            <strong>Take an extra one when life demands it.</strong> A week of bad sleep, a
            work crunch, travel or a minor illness is a reason to turn that week into a deload
            and resume afterwards from where you were. Unplanned deloads are not failures; a
            plan that cannot absorb them was too tight.
          </p>`,
    },
    {
      id: 'repeat-a-week',
      heading: 'When to Repeat a Week (or Go Back Two)',
      html: `          <p>
            Repeating a week is the most useful adjustment in any plan, and it is the one people
            are most reluctant to make. Twelve weeks is a template; taking fifteen to finish it
            is a perfectly good outcome. <strong>Repeat the week you just did</strong> if any of
            these is true:
          </p>
          <ul>
            <li>You could not complete one or more sessions as written, or completed them only by
              stopping, slowing well outside the speed range, or holding the rails.</li>
            <li>The effort ran one or two RPE points above the target for the same settings — an
              easy walk that was supposed to be RPE 4 to 5 felt like a 6 or 7.</li>
            <li>Muscle soreness was still there when the next session started, two or three days
              later.</li>
            <li>Your resting heart rate, taken on waking, was noticeably above its usual level for
              several days, or your sleep got worse.</li>
            <li>You missed more than one session that week.</li>
          </ul>
          <p>
            <strong>Go back a week</strong> if you missed a whole week, and <strong>go back two
            weeks</strong> if you missed two or more, or were ill. Return after illness only once
            symptoms have gone, at the earlier week, and let your doctor advise you if the
            illness was more than a cold.
          </p>
          <p>
            <strong>Stop and get it looked at</strong> if you have pain — as opposed to muscle
            tiredness — that is sharp, that is in one spot on a bone, that is in or around a
            joint, that gets worse as a session goes on, or that makes you change how you walk or
            run. Those are not signals to repeat a week; they are signals to see a clinician or
            a physical therapist before continuing. Chest pain, unusual breathlessness, dizziness
            or palpitations mean stop immediately.
          </p>
          <p>
            <strong>Do not skip ahead</strong> if a week feels easy. Easy is the plan working. The
            exception is the runner who finds the whole foundation block trivial: if every
            session has been at RPE 3 for four weeks, start the eight-week block at week 7 rather
            than week 5.
          </p>`,
    },
    {
      id: 'weight-loss',
      heading: 'Adapting the Plan for Weight Loss',
      html: `          <p>
            Many people searching for a <strong>treadmill routine for weight loss</strong> want a
            harder version of a normal plan. The evidence points the other way: more minutes,
            mostly easy, sustained for months.
          </p>
          <p>
            The ACSM's position stand on physical activity and weight loss (Donnelly and
            colleagues, 2009) is the clearest guide. As summarised by independent reviews of it,
            fewer than 150 minutes a week of moderate activity had minimal effect on weight;
            150 to 250 minutes produced modest losses of around 2 to 3 kg; and the larger losses,
            around 5 to 7.5 kg, were seen at roughly 225 to 420 minutes a week, usually alongside
            changes in diet. More than about 250 minutes a week was associated with clinically
            significant weight loss, and people who kept weight off afterwards tended to be doing
            more still. The same stand concluded that resistance training does not by itself
            speed weight loss but helps preserve fat-free mass, which is the case for keeping the
            two strength days.
          </p>
          <p>
            So the adaptation is mostly about volume, and it is simple:
          </p>
          <ul>
            <li><strong>Use the walker track</strong>, even if you can run. It reaches high
              weekly minutes with the lowest injury cost, and weight loss is a volume game.</li>
            <li><strong>After week 12, keep adding duration</strong> using the same rules: five to
              ten minutes on the easy and long walks every other week, one change at a time, a
              deload every fourth week. Moving from 160 minutes toward 250 takes about another
              eight to ten weeks.</li>
            <li><strong>Make incline the dial, not speed.</strong> A 6% incline block at 3.2 mph
              works out at about 6 METs by the ACSM walking equation — vigorous by the
              guidelines' definition — without the impact of running.</li>
            <li><strong>Keep hard sessions to one a week at most.</strong> They burn more per
              minute, but they are harder to recover from, and the week's total matters more.</li>
            <li><strong>Do not eat back the console's number.</strong> Treadmill calorie
              estimates generally run optimistic, and treating them as earned food is the most
              common way a training plan fails to move the scale.</li>
          </ul>
          <p>
            A sample week at the far end of that, around 250 minutes: incline walk 45 minutes
            (Monday), easy walk 45 plus strength (Tuesday), easy walk 45 (Wednesday), strength
            (Thursday), incline walk 45 (Friday), long walk 70 (Saturday), rest (Sunday). That is
            ambitious, and it is a destination for month five or six, not week one.
          </p>
          <p>
            Our <a href="/treadmill-workout-for-weight-loss/" class="text-[#0F62FE] font-medium">treadmill workouts for weight loss</a>
            page explains why consistency beats intensity, why progress stalls around week six,
            and what a realistic first three months looks like. Nutrition questions belong with a
            registered dietitian, and anyone with a history of disordered eating should plan
            training with a professional rather than from a web page.
          </p>`,
    },
    {
      id: 'sessions',
      heading: 'The Sessions in the Plan, and Where Each Is Explained',
      html: `          <p>
            The plan uses six sessions. This page tells you when to do each; the linked pages tell
            you how.
          </p>
          <p>
            <strong>Easy walk and easy run.</strong> Conversational, RPE 4 to 5, zone 2. The
            backbone of every track and the session people most often do too hard. Our
            <a href="/zone-2-training-on-a-treadmill/" class="text-[#0F62FE] font-medium">zone 2 training on a treadmill</a>
            guide shows how to find your own easy settings in one session, using the talk test
            and the grade.
          </p>
          <p>
            <strong>Incline walk.</strong> A sustained block at a grade, walking tall with hands
            off the rails. The walker track's main source of intensity, and the runner's
            low-impact fourth session. Six more incline structures are in our walking workouts
            guide linked above.
          </p>
          <p>
            <strong>Run-walk.</strong> Alternating jog and walk blocks inside a fixed session
            length. The beginner runner track is built from nothing else.
          </p>
          <p>
            <strong>Hill session.</strong> Short climbs at 4% with flat recoveries. Harder per
            minute than flat running at the same speed, with lower impact; covered on our hill
            workout page.
          </p>
          <p>
            <strong>Intervals.</strong> Short fast reps with easy recoveries, at most once a week.
            Set the speed for the final rep, not the first: the belt does not slow down as you
            tire, the way you would outdoors.
          </p>
          <p>
            <strong>Long walk and long run.</strong> One session a week meaningfully longer than
            the others, at the same easy effort or easier. Duration is the stimulus; pace is not.
          </p>
          <p>
            <strong>What is deliberately missing.</strong> Sprints, HIIT protocols and tempo runs
            do not appear in the first twelve weeks. They are useful tools with a high recovery
            cost, and a plan whose job is building a base gets more from adding minutes. Every
            session also starts and ends with easy walking; our
            <a href="/treadmill-warm-up-and-cool-down/" class="text-[#0F62FE] font-medium">warm-up and cool-down guide</a>
            covers why stepping straight off a fast belt catches people out.
          </p>`,
    },
    {
      id: 'after-week-12',
      heading: 'After Week 12',
      html: `          <p>
            Week 12's benchmark is the point of it. Walkers should find the week 6 incline
            session clearly easier at the same speed; runners should find their steady 20 minutes
            a little faster at the same effort, or the same speed at a lower heart rate. Either
            result means the block worked. Then choose one of three directions.
          </p>
          <p>
            <strong>Run the eight-week block again from a higher start.</strong> Take week 11 as
            your new week 5 and apply the same pattern: one change a week, deloads in weeks 8 and
            12. Walkers can extend durations toward 200 minutes or more, as in the weight-loss
            section; runners can lengthen the long run by five minutes every other week.
          </p>
          <p>
            <strong>Move up a track.</strong> A walker who now finds the incline blocks easy and
            wants to run can start the beginner runner track at week 1 — the jog blocks will feel
            familiar sooner than expected. A beginner runner who finished week 12 comfortably can
            start the runner track at week 1, treating its easy runs as 20 to 25 minutes rather
            than 30 for the first fortnight.
          </p>
          <p>
            <strong>Train for something.</strong> A 5K, a 10K or a longer race is a different
            plan with more specific sessions. Couch to 5K is the natural next step for the
            beginner runner; the runner track is a sound base for a race-specific block.
          </p>
          <p>
            Whichever you pick, keep the two habits that made the first twelve weeks work: most
            of the week easy, and one change at a time.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'What is a good treadmill workout plan for beginners?',
      a: `Three sessions a week for the first four weeks, mostly easy walking at a conversational effort, adding about five minutes per session every week or two and nothing else. From week five add a fourth session, then alternate small increases in duration with small increases in incline, and make every fourth week lighter. Beginners who want to run should use walk-run intervals at 4.5 to 5.5 mph inside a fixed 30-minute session.`,
    },
    {
      q: 'How many days a week should I use a treadmill?',
      a: `Three days is a sound start and four is a good target for most people. The US guidelines recommend 150 to 300 minutes of moderate activity or 75 to 150 minutes of vigorous activity a week, spread across the week, plus muscle-strengthening work on at least two days. Four sessions of 35 to 45 minutes reaches the lower end comfortably.`,
    },
    {
      q: 'What is the best treadmill routine for weight loss?',
      a: `Mostly incline walking, for more minutes than you think, sustained for months. The ACSM's 2009 position stand associated fewer than 150 minutes a week with minimal weight change, 150 to 250 minutes with modest loss, and more than about 250 minutes with clinically significant loss, usually alongside diet changes. Build toward that gradually, keep hard sessions to one a week, keep two strength days, and do not eat back the console's calorie estimate.`,
    },
    {
      q: 'Is the 10% rule for increasing training real?',
      a: `It is a reasonable ceiling but a weak law. A randomised trial of novice runners found a programme built on the 10% rule produced almost the same injury rate as a faster standard programme, about 20% in both groups. A later cohort study suggested that jumps of more than 30% over two weeks may raise the risk of some overuse injuries. Avoid big jumps, and at very low volumes add a few minutes per session rather than calculating percentages.`,
    },
    {
      q: 'What is a deload week and do I need one?',
      a: `A deload week is a planned lighter week, usually every third or fourth week, with the same number of sessions at roughly two-thirds to three-quarters of the previous week's minutes. It lets accumulated fatigue clear while fitness remains, and most people feel better the week after. Keep the sessions and a little of the intensity; just make everything shorter.`,
    },
    {
      q: 'Can I do strength training on the same day as a treadmill workout?',
      a: `Yes. Pair strength work with easy treadmill days, either after the session or on its own day. Avoid hard intervals or hills immediately before heavy lower-body lifting, and avoid heavy leg work the day before a hard treadmill session. Two or three short whole-body sessions a week meets the guidelines.`,
    },
    {
      q: 'What should I do if a week of the plan feels too hard?',
      a: `Repeat it. Repeat a week if you could not finish its sessions as written, if the effort ran one or two points higher than the target, if soreness lasted into the next session, or if you missed more than one session. Go back two weeks after an illness or a two-week break. Pain that is sharp, in a joint, or that changes how you move is a reason to see a clinician rather than to repeat.`,
    },
  ],
  mistakesHeading: 'Common Mistakes With Treadmill Workout Plans',
  mistakesIntro:
    'All four come from the same instinct — that a plan is working only if it hurts — and all four are fixed by doing slightly less than you feel you could.',
  mistakes: [
    {
      title: 'Changing speed, incline and duration in the same week',
      body: 'Three changes at once triples the new stress and leaves you no idea which one caused the sore calves. Move one variable per week, in the order frequency, duration, intensity, and let speed rise on its own as the same effort gets faster.',
    },
    {
      title: 'Skipping the deload because you feel fine',
      body: 'Feeling fine in week 8 is the deload working in advance, not a sign you do not need it. Fatigue hides fitness, and the lighter week is when it shows. Keep the sessions, cut the minutes by about a third, and expect week 9 to feel unusually good.',
    },
    {
      title: 'Treating the speed column as a target',
      body: 'The mph ranges are typical guesses at where an effort sits, not instructions. If 3.3 mph feels like RPE 7 on a day it should feel like 5, slow down. The effort column is the plan; heat, sleep and a hard day at work all move the speed that produces it.',
    },
    {
      title: 'Making up missed sessions by doubling up',
      body: 'Squeezing a missed interval session into the day before the long run, or doing two sessions in one day to stay on schedule, concentrates load exactly where the plan spreads it out. Drop the missed session, or repeat the week. The plan is the order of the weeks, not the dates.',
    },
  ],
  relatedHeading: 'Related Training Guides',
  related: [
    {
      kicker: 'Pillar',
      title: 'Treadmill Workouts',
      blurb: 'The four session types this plan is built from, and how to combine them.',
      url: '/treadmill-workouts/',
    },
    {
      kicker: 'Running',
      title: 'Couch to 5K on a Treadmill',
      blurb: 'The faster nine-week walk-to-run plan, and the natural next step.',
      url: '/couch-to-5k-treadmill/',
    },
    {
      kicker: 'Strength',
      title: 'Treadmill Before or After Weights?',
      blurb: 'How to order cardio and lifting on the same day, by goal.',
      url: '/treadmill-before-or-after-weights/',
    },
  ],
  bottomLine: [
    `A treadmill workout plan works because of its order, not its sessions:
            <strong class="text-white">four easy foundation weeks, eight progressive weeks, one
            change at a time, and a lighter week every fourth</strong>. Pick the walker, beginner
            runner or runner track honestly — the lower one if in doubt — and let the effort
            column, not the speed column, set your numbers.`,
    `The target is the one in the US guidelines: 150 to 300 minutes of moderate activity a
            week, or half that vigorous, plus two strength days. Every track gets there by week
            12 without a punishing session, and if weight loss is the goal the
            <a href="/treadmill-workout-for-weight-loss/" class="text-[#5AA9FF] font-bold no-underline">answer is more easy minutes</a>,
            built the same way, rather than harder ones.`,
  ],
};

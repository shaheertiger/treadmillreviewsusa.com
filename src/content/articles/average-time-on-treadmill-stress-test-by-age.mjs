const th = 'text-left font-black text-gray-900 border-b border-gray-200 py-2 pr-4';
const td = 'border-b border-gray-100 py-2 pr-4 text-gray-700';

export default {
  slug: 'average-time-on-treadmill-stress-test-by-age',
  title: 'Average Time on a Treadmill Stress Test by Age (Bruce Protocol)',
  description:
    'Clinics aim for 6 to 12 minutes on a stress test. Over 75, median Bruce time was 7:22 for men and 6:00 for women. Norms by age, and the Duke Treadmill Score.',
  crumbLabel: 'Stress Test Time by Age',
  breadcrumb: { name: 'Workouts & Training', url: '/training/' },
  kicker: 'Explainer',
  updated: 'November 2026',
  updatedLong: 'November 21, 2026',
  published: '2026-11-21',
  h1: ['Average Time on a Treadmill', 'Stress Test by Age'],
  standfirst:
    'There is no single official "normal time" table, but the published data are clear on the shape: exercise capacity falls with age and is lower in women, and the ACC/AHA guideline aims for 6 to 12 minutes of exercise. In one large study of adults over 75 on the Bruce protocol, median time was 7 minutes 22 seconds for men aged 76 to 80 and 6 minutes for women.',
  ctas: [
    { label: 'Norms by Age', href: '#norms-by-age' },
    { label: 'Duke Treadmill Score', href: '#duke-treadmill-score' },
  ],
  tags: ['treadmill stress test time by age', 'bruce protocol', 'duke treadmill score', 'mets by age', 'exercise capacity'],
  stickyCta: { text: 'See Norms by Age', link: '#norms-by-age' },
  lead: `"How long should I last?" is the question most people bring to a treadmill stress test,
          and the honest answer has two parts. The clinic is not really timing you against a
          stopwatch: it is estimating your exercise capacity, usually in METs, and comparing that
          with what is expected for your age and sex. Time on the treadmill is simply how that
          capacity shows up on the standard Bruce protocol. This page sets out the Bruce stages,
          the published age and sex norms (with the study each figure comes from), what counts as a
          good result, the Duke Treadmill Score that turns your time into a risk estimate, and how
          to prepare so the number reflects you rather than your shoes.`,
  sections: [
    {
      id: 'short-answer',
      heading: 'The Short Answer',
      html: `          <p>
            <strong>On the standard Bruce protocol, where speed and incline rise every three
            minutes, the ACC/AHA exercise testing guideline aims for roughly 6 to 12 minutes of
            exercise, and expected capacity falls steadily with age and is lower in women than in
            men.</strong> There is no single official minutes-by-age chart; the published norms are
            mostly expressed in METs, and the best direct timing data for older adults come from a
            2022 Columbia University study.
          </p>
          <ul>
            <li><strong>Each Bruce stage lasts 3 minutes.</strong> Finishing stage 1 means 3
            minutes, stage 2 means 6, stage 3 means 9, stage 4 means 12.</li>
            <li><strong>Over 75:</strong> median time was 7:22 for men aged 76 to 80 and 6:00 for
            women, falling by about 10 seconds (men) and 8 seconds (women) for each extra year of
            age (Lander et al., <em>American Journal of Cardiology</em>, 2022).</li>
            <li><strong>Expected METs by age:</strong> about 18.0 − 0.15 × age for men referred
            for testing (Morris et al., <em>JACC</em>, 1993) and 14.7 − 0.13 × age for women
            (Gulati et al., <em>NEJM</em>, 2005).</li>
            <li><strong>More than 10 METs</strong> is described as indicating an excellent
            prognosis (Garner et al., <em>American Family Physician</em>, 2017).</li>
            <li><strong>Duke Treadmill Score</strong> = Bruce minutes − 5 × ST deviation (mm) − 4 ×
            angina index. A score of +5 or more is low risk; below −10 is high risk.</li>
          </ul>
          <p>
            If you have not yet had the test and want to know what happens in the room, start with
            our explainer on
            <a href="/treadmill-stress-test/" class="text-[#0F62FE] font-medium">what a treadmill stress test shows</a>.
            This page assumes you know the basics and want the numbers. If you are still weighing
            up the appointment itself, we also cover
            <a href="/how-much-does-a-treadmill-stress-test-cost/" class="text-[#0F62FE] font-medium">how much a treadmill stress test costs</a>.
          </p>
          <div class="not-prose my-6 bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-gray-700 leading-relaxed">
            <strong class="text-gray-900">Not medical advice.</strong> TreadmillReviewsUSA reviews
            exercise equipment. Nothing here interprets your own result: your cardiologist, or the
            clinician who ordered the test, reads your time, METs, ECG, blood pressure and symptoms
            together with your history. Ask them what your numbers mean for you. If you have chest
            pain, pressure or unusual breathlessness now, contact a doctor or emergency services.
          </div>`,
    },
    {
      id: 'bruce-stages',
      navLabel: 'The Bruce Protocol Stages',
      heading: 'What Are the Bruce Protocol Stages?',
      html: `          <p>
            The Bruce protocol, developed by Dr Robert Bruce and published in its widely cited form
            by Bruce, Kusumi and Hosmer in the <em>American Heart Journal</em> in 1973, is the
            treadmill test most clinics use. It has seven three-minute stages, and at every stage
            both the speed and the grade go up. That is why each stage feels like a real step
            rather than a gentle ramp: you are asked to walk faster <em>and</em> climb a steeper
            hill at the same moment.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Stage</th>
                <th class="${th}">Minutes elapsed at end</th>
                <th class="${th}">Speed</th>
                <th class="${th}">Grade</th>
                <th class="${th}">Approx. METs</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">1</td><td class="${td}">3</td><td class="${td}">1.7 mph</td><td class="${td}">10%</td><td class="${td}">4</td></tr>
              <tr><td class="${td}">2</td><td class="${td}">6</td><td class="${td}">2.5 mph</td><td class="${td}">12%</td><td class="${td}">7</td></tr>
              <tr><td class="${td}">3</td><td class="${td}">9</td><td class="${td}">3.4 mph</td><td class="${td}">14%</td><td class="${td}">10</td></tr>
              <tr><td class="${td}">4</td><td class="${td}">12</td><td class="${td}">4.2 mph</td><td class="${td}">16%</td><td class="${td}">13</td></tr>
              <tr><td class="${td}">5</td><td class="${td}">15</td><td class="${td}">5.0 mph</td><td class="${td}">18%</td><td class="${td}">16</td></tr>
              <tr><td class="${td}">6</td><td class="${td}">18</td><td class="${td}">5.5 mph</td><td class="${td}">20%</td><td class="${td}">not given</td></tr>
              <tr><td class="${td}">7</td><td class="${td}">21</td><td class="${td}">6.0 mph</td><td class="${td}">22%</td><td class="${td}">not given</td></tr>
            </tbody>
          </table></div>
          <p>
            Source for speeds, grades and METs: Garner, Pomeroy and Arnold, "Exercise Stress
            Testing: Indications and Common Questions", <em>American Family Physician</em>, 2017.
            The same speeds and grades appear in the Bruce protocol table published by the
            Columbia University group (Lander et al., 2022) and in a 2017 <em>Paediatric
            Respiratory Reviews</em> comparison of treadmill protocols. The METs column is an
            estimate of the workload at each stage, not a measurement of you.
          </p>
          <p>
            Two things are worth knowing about that METs column. First, METs (metabolic
            equivalents) express oxygen use as multiples of resting oxygen uptake, conventionally
            3.5 mL of oxygen per kilogram per minute, as the ACC/AHA 2002 guideline defines it; our
            guide to
            <a href="/what-are-mets-on-a-treadmill/" class="text-[#0F62FE] font-medium">METs on a treadmill</a>
            explains the idea in plain terms. Second, different equations give different METs for
            the same stage. The FRIEND registry equation (Kokkinos et al., <em>American Journal of
            Cardiology</em>, 2017) was built because the older ACSM equations were found to
            overestimate fitness, especially at higher workloads, so a lab using FRIEND will report
            somewhat lower METs for the same time than the table above. Your report should state
            which protocol was used; the guideline asks labs to report capacity in METs and, if in
            minutes, to name the protocol.
          </p>
          <p>
            If the grades mean little to you, a 10% grade is a noticeable hill and 16% is steeper
            than most home treadmills go; our
            <a href="/treadmill-incline-percent-vs-degrees/" class="text-[#0F62FE] font-medium">incline percent vs degrees guide</a>
            translates them. By stage 4, at 4.2 mph, most people have broken into a jog.
          </p>`,
    },
    {
      id: 'norms-by-age',
      navLabel: 'Average Time and METs by Age',
      heading: 'What Is the Average Time on a Treadmill Stress Test by Age?',
      html: `          <p>
            <strong>Expected exercise capacity declines with every decade, and the published
            reference equations let you put a number on it.</strong> The two most cited are Morris
            and colleagues' nomogram for men (<em>Journal of the American College of
            Cardiology</em>, 1993, 1,388 men referred for clinical testing without apparent heart
            disease) and Gulati and colleagues' nomogram for women (<em>New England Journal of
            Medicine</em>, 2005, 5,721 asymptomatic women). Their published equations are:
          </p>
          <ul>
            <li><strong>Men, all referred patients:</strong> predicted METs = 18.0 − 0.15 × age</li>
            <li><strong>Men, physically active subgroup:</strong> predicted METs = 18.7 − 0.15 × age</li>
            <li><strong>Men, sedentary subgroup:</strong> predicted METs = 16.6 − 0.16 × age</li>
            <li><strong>Women (asymptomatic):</strong> predicted METs = 14.7 − 0.13 × age</li>
          </ul>
          <p>
            The table below simply runs those published equations at each age. The arithmetic is
            ours; the equations are the authors'.
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Age</th>
                <th class="${th}">Men, all (Morris 1993)</th>
                <th class="${th}">Men, active</th>
                <th class="${th}">Men, sedentary</th>
                <th class="${th}">Women (Gulati 2005)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">40</td><td class="${td}">12.0 METs</td><td class="${td}">12.7 METs</td><td class="${td}">10.2 METs</td><td class="${td}">9.5 METs</td></tr>
              <tr><td class="${td}">50</td><td class="${td}">10.5 METs</td><td class="${td}">11.2 METs</td><td class="${td}">8.6 METs</td><td class="${td}">8.2 METs</td></tr>
              <tr><td class="${td}">60</td><td class="${td}">9.0 METs</td><td class="${td}">9.7 METs</td><td class="${td}">7.0 METs</td><td class="${td}">6.9 METs</td></tr>
              <tr><td class="${td}">70</td><td class="${td}">7.5 METs</td><td class="${td}">8.2 METs</td><td class="${td}">5.4 METs</td><td class="${td}">5.6 METs</td></tr>
              <tr><td class="${td}">80</td><td class="${td}">6.0 METs</td><td class="${td}">6.7 METs</td><td class="${td}">3.8 METs</td><td class="${td}">4.3 METs</td></tr>
            </tbody>
          </table></div>
          <p>
            <strong>Turning METs into minutes.</strong> You can see roughly where a predicted
            figure lands by comparing it with the stage METs in the Bruce table above: a predicted
            10.5 METs sits around the end of stage 3, about nine minutes in, while 7 METs sits
            around the end of stage 2, about six minutes. Treat that as a rough guide only. The
            two nomograms estimated METs from treadmill workload with the methods of their time,
            and a lab using the newer FRIEND equation will put the same minutes at fewer METs.
            That is exactly why the guideline prefers METs to minutes as the reported figure.
          </p>
          <p>
            <strong>What the Bruce data in older adults actually show.</strong> The most useful
            direct timing study is Lander and colleagues' analysis of 2,041 Bruce protocol stress
            echocardiograms in patients over 75 at Columbia University Irving Medical Center
            (<em>American Journal of Cardiology</em>, 2022). Everyone included reached at least 85%
            of age-predicted maximum heart rate and showed no ischemia on the scan.
          </p>
          <ul>
            <li>Median exercise time for men aged 76 to 80 was <strong>7 minutes 22
            seconds</strong>; for women in the same band it was <strong>6 minutes</strong>.</li>
            <li>For every additional year of age over 75, women exercised about 8.0 seconds less and
            men about 10 seconds less.</li>
            <li>Mean estimated capacity was 6.5 METs for women and 7.7 METs for men (estimated with
            the FRIEND equation).</li>
            <li>85% of women and 95% of men completed stage 1; 32% of women and 64% of men completed
            stage 2; only 3% of women and 15% of men completed stage 3; fewer than 1% completed
            stage 4.</li>
          </ul>
          <p>
            So if you are in your late seventies and walked into stage 3 before stopping, you did
            better than most of a large clinical sample your age. The authors point out a gap this
            fills: the original Bruce study included 138 healthy men with a mean age of 49 and 157
            healthy women with a mean age of 41, so older patients were long compared against
            much younger reference groups.
          </p>`,
    },
    {
      id: 'friend-registry',
      navLabel: 'FRIEND Fitness Percentiles',
      heading: 'How Does Fitness by Age Compare in the FRIEND Registry?',
      html: `          <p>
            The Fitness Registry and the Importance of Exercise National Database (FRIEND) measures
            oxygen uptake directly, with a mask and gas analysis, rather than estimating it from
            treadmill time. Its first reference standards (Kaminsky, Arena and Myers, <em>Mayo
            Clinic Proceedings</em>, 2015) came from 7,783 maximal treadmill tests in US adults
            aged 20 to 79 without cardiovascular disease. These are the 50th-percentile values,
            exactly as published, in mL of oxygen per kg per minute:
          </p>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Age group</th>
                <th class="${th}">Men, 50th percentile VO2max</th>
                <th class="${th}">Women, 50th percentile VO2max</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">20 to 29</td><td class="${td}">48.0</td><td class="${td}">37.6</td></tr>
              <tr><td class="${td}">30 to 39</td><td class="${td}">42.4</td><td class="${td}">30.2</td></tr>
              <tr><td class="${td}">40 to 49</td><td class="${td}">37.8</td><td class="${td}">26.7</td></tr>
              <tr><td class="${td}">50 to 59</td><td class="${td}">32.6</td><td class="${td}">23.4</td></tr>
              <tr><td class="${td}">60 to 69</td><td class="${td}">28.2</td><td class="${td}">20.0</td></tr>
              <tr><td class="${td}">70 to 79</td><td class="${td}">24.4</td><td class="${td}">18.3</td></tr>
            </tbody>
          </table></div>
          <p>
            Source: Kaminsky LA, Arena R, Myers J. <em>Mayo Clinic Proceedings</em> 2015;90:1515-23,
            Table 3. Dividing by 3.5 gives a rough MET equivalent, so the median man in his fifties
            in this registry was a little over 9 METs and the median woman in her sixties a little
            under 6. The authors report a decline of roughly 10% per decade over five decades.
          </p>
          <p>
            Two cautions. A 2022 update of FRIEND (Kaminsky et al., <em>Mayo Clinic
            Proceedings</em>), drawing on 16,278 treadmill tests from 34 laboratories, produced
            treadmill standards 1.5 to 4.6 mL/kg/min lower than the 2015 values, so the numbers
            above are, if anything, on the generous side. And FRIEND describes people who did a
            full cardiopulmonary test with gas analysis, which is not the same thing as a routine
            exercise ECG. It is the best picture there is of how fitness changes with age, but
            not a pass mark for your appointment.
          </p>`,
    },
    {
      id: 'good-time',
      navLabel: 'What Counts as a Good Time',
      heading: 'What Is a Good Time on a Treadmill Stress Test?',
      html: `          <p>
            <strong>A good result is one at or above what is predicted for your age and sex, and
            the published research gives three practical yardsticks.</strong>
          </p>
          <p>
            <strong>Percent of predicted.</strong> Gulati's 2005 study found that asymptomatic
            women whose exercise capacity was below 85% of the age-predicted value had twice the
            risk of death of women at or above 85%, and the pattern held in a separate group of
            4,471 symptomatic women. A 60-year-old woman's predicted figure is 6.9 METs, so 85% of
            predicted is about 5.9 METs. That percent-of-predicted framing is what the nomograms
            were built for.
          </p>
          <p>
            <strong>Ten METs.</strong> The 2017 <em>American Family Physician</em> review notes
            that achieving more than 10 METs indicates an excellent prognosis. On the Bruce table
            above, that is roughly the end of stage 3, around nine minutes.
          </p>
          <p>
            <strong>Every MET counts.</strong> In the Olmsted County cohort studied by the Mayo
            Clinic (Goraya et al., <em>Annals of Internal Medicine</em>, 2000), older patients
            reached 6.0 METs on average and younger patients 10.7, and workload was the only
            treadmill variable linked to death from any cause in both groups once clinical factors
            were accounted for. Each 1-MET increase in capacity was associated with an 18%
            reduction in cardiac events in people 65 and over and 14% in younger people.
          </p>
          <p>
            Time also matters inside the test, not just at the end. The ACC/AHA 2002 guideline
            notes that ischemic changes appearing early, after fewer than 6 minutes of the Bruce
            protocol, carry a much higher relative risk than the same changes appearing late. That
            is the logic the Duke Treadmill Score builds on, below.
          </p>
          <p>
            What a "good time" is <em>not</em> is a diagnosis. A long time with worrying ECG
            changes is still worrying, and a short time can have reasons that have nothing to do
            with the heart: arthritis, balance, unfamiliarity with treadmills, or a protocol that
            was simply too steep for the patient. That combined reading is your cardiologist's job.
          </p>`,
    },
    {
      id: 'duke-treadmill-score',
      navLabel: 'The Duke Treadmill Score',
      heading: 'What Is the Duke Treadmill Score and How Is It Calculated?',
      html: `          <p>
            <strong>The Duke Treadmill Score combines how long you exercised on the Bruce protocol
            with how much your ECG changed and whether you had chest pain, into one number that
            predicts risk.</strong> It was developed by Daniel Mark and colleagues at Duke
            University from 2,842 patients with chest pain who had both a treadmill test and
            cardiac catheterisation (<em>Annals of Internal Medicine</em>, 1987), then validated in
            613 consecutive outpatients (<em>New England Journal of Medicine</em>, 1991).
          </p>
          <p class="font-bold">
            Duke Treadmill Score = exercise time (minutes, Bruce protocol) − (5 × maximum ST
            deviation in mm) − (4 × treadmill angina index)
          </p>
          <ul>
            <li><strong>Exercise time</strong> is minutes on a standard Bruce protocol. The ACC/AHA
            2002 guideline notes the published nomogram also accepts the equivalent METs from
            another protocol.</li>
            <li><strong>ST deviation</strong> is the largest ST-segment depression or elevation,
            in millimetres, during or after exercise. The guideline notes it can be measured 60 to
            80 ms after the J point, and that a deviation under 1 mm is entered as 0. MDCalc's
            calculator specifies the net deviation excluding lead aVR.</li>
            <li><strong>Angina index</strong> is 0 for no angina, 1 for non-limiting angina and 2
            for angina that made you stop.</li>
          </ul>
          <div class="not-prose overflow-x-auto my-8"><table class="min-w-[520px] w-full text-sm border-collapse">
            <thead>
              <tr>
                <th class="${th}">Score</th>
                <th class="${th}">Risk group</th>
                <th class="${th}">Outpatients in that group (NEJM 1991)</th>
                <th class="${th}">Outcome reported</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="${td}">+5 or higher</td><td class="${td}">Low</td><td class="${td}">About two thirds</td><td class="${td}">99% four-year survival; average annual mortality 0.25%</td></tr>
              <tr><td class="${td}">−10 to +4</td><td class="${td}">Moderate</td><td class="${td}">The remainder</td><td class="${td}">Between the two</td></tr>
              <tr><td class="${td}">Below −10 (−11 or lower)</td><td class="${td}">High</td><td class="${td}">4%</td><td class="${td}">79% four-year survival; average annual mortality 5%</td></tr>
            </tbody>
          </table></div>
          <p>
            Sources: Mark DB et al., <em>N Engl J Med</em> 1991;325:849-53 (cut-offs and outpatient
            outcomes); Mark DB et al., <em>Ann Intern Med</em> 1987;106:793-800 (derivation);
            ACC/AHA 2002 Guideline Update for Exercise Testing (Gibbons et al.), which uses the same
            cut-offs; MDCalc's Duke Treadmill Score calculator, which lists the same three inputs
            and the high-risk threshold of below −10. In the 1991 outpatients the score ranged
            from −25 to +15. In the original 1987 inpatient group, whose patients were already
            heading for catheterisation, 34% were low risk with an annual cardiovascular mortality
            of 0.5% and 13% were high risk with an annual mortality of 5% or more.
          </p>
          <p>
            <strong>Worked examples</strong> (illustrations of the arithmetic, not cases):
          </p>
          <ul>
            <li>10 minutes, no ST change, no angina: 10 − 0 − 0 = <strong>+10</strong>, low risk.</li>
            <li>9 minutes, 1 mm ST depression, non-limiting angina: 9 − 5 − 4 =
            <strong>0</strong>, moderate risk.</li>
            <li>4 minutes, 2 mm ST depression, angina that stopped the test: 4 − 10 − 8 =
            <strong>−14</strong>, high risk.</li>
          </ul>
          <p>
            Notice how heavily time weighs when the ECG is clean: with no ST change and no angina,
            every minute is a point, and anyone who completes stage 2 (six minutes) is already in
            the low-risk band. The guideline adds that the score works in both men and women,
            though women have lower overall risk at any given score, and that its main limitation
            is how few elderly patients were in the studies that built it. It is a tool for
            people being assessed for suspected coronary disease, applied by the clinician who
            has the full trace. Do not calculate your own from a printout and act on it.
          </p>`,
    },
    {
      id: 'what-affects-time',
      navLabel: 'What Affects Your Time',
      heading: 'What Affects How Long You Last on a Stress Test?',
      html: `          <p>
            Your time is your fitness on the day, filtered through several things that are not
            fitness at all.
          </p>
          <ul>
            <li><strong>Age and sex.</strong> The biggest predictable factors, as the nomograms
            and the Columbia data show. Women's predicted capacity is lower at every age.</li>
            <li><strong>Habitual activity.</strong> Morris's active and sedentary subgroups differ
            by about 2.5 METs at 40 and nearly 3 METs at 70 in the table above, which is more than a
            full Bruce stage.</li>
            <li><strong>Why the test stopped.</strong> Fatigue, breathlessness, leg pain, symptoms
            or a change on the trace that the staff want to stop for. A test stopped early for
            safety is not a "short time" in the fitness sense.</li>
            <li><strong>Handrail use.</strong> Gripping the rails takes weight off your legs and
            inflates the time relative to the work actually done. Labs usually allow a light touch
            for balance; Columbia allowed several fingers on the rail as needed.</li>
            <li><strong>Medication.</strong> Some drugs, beta blockers in particular, blunt the
            heart-rate response. Whether to take them on the day is your doctor's call. In the
            Columbia study, beta-blocker use made little difference to the link between age and
            time.</li>
            <li><strong>Joints, balance and familiarity.</strong> Arthritis, a stiff hip or simply
            never having used a treadmill can end a test before the heart is the limit.</li>
            <li><strong>Protocol.</strong> Minutes on a modified Bruce, Naughton or ramp protocol
            are not comparable with minutes on a standard Bruce. Compare METs instead.</li>
          </ul>
          <p>
            The heart rate target matters too. Clinics commonly look for about 85% of
            age-predicted maximum (220 minus age), though the ACC/AHA guideline stresses that other
            end-points are preferred to stopping simply because a number was reached; our
            <a href="/treadmill-heart-rate-zones/" class="text-[#0F62FE] font-medium">heart rate zones guide</a>
            covers why 220-minus-age misses so many individuals.
          </p>`,
    },
    {
      id: 'modified-bruce',
      navLabel: 'The Modified Bruce Protocol',
      heading: 'What Is the Modified Bruce Protocol for Older Patients?',
      html: `          <p>
            <strong>The modified Bruce protocol adds two gentler three-minute stages at the start,
            both at 1.7 mph, first at 0% grade and then at 5%, before joining the standard
            sequence at 1.7 mph and 10%.</strong> The 2017 <em>American Family Physician</em>
            review lists it this way and gives about 2 METs for the flat stage and 3 for the 5%
            stage. It is used for patients expected to have limited exercise capacity, which in
            practice often means older, deconditioned or recently unwell people.
          </p>
          <p>
            The consequence for timing is simple and often misunderstood: on a modified Bruce, the
            clock has already run six minutes by the time you reach what would be stage 1 of the
            standard protocol. Someone who stops at 9 minutes on a modified Bruce has done roughly
            the work of someone who stops at 3 minutes on the standard one. Comparing those two
            numbers head to head would be meaningless, which is another reason the report should
            give METs and name the protocol.
          </p>
          <p>
            The Columbia authors make the same point in reverse: labs that use the modified Bruce,
            Naughton or Cornell protocols for elderly patients may see longer exercise times than
            their Bruce figures, and their reference values apply only to the standard Bruce. The
            ACC/AHA guideline's general advice is to choose the protocol to suit the patient so
            that exercise lasts about 6 to 12 minutes, rather than forcing everyone through the
            same steep stages.
          </p>
          <p>
            If walking on a treadmill is not possible at all, there are alternatives, including
            bike-based tests and medication-based stress tests with imaging. Tell the clinic in
            advance about mobility problems so the right test is booked.
          </p>`,
    },
    {
      id: 'how-to-prepare',
      navLabel: 'How to Prepare',
      heading: 'How Do You Prepare So Your Time Reflects You?',
      html: `          <p>
            Clinic instructions come first; they vary by test and by the reason it was ordered.
            The US National Library of Medicine's MedlinePlus page on the exercise stress test sets
            out the common ground:
          </p>
          <ul>
            <li><strong>Shoes and clothes.</strong> Wear comfortable shoes and loose clothing you can
            exercise in. Trainers or <a href="/best-walking-shoes-for-treadmill/" class="text-[#0F62FE] font-medium" data-autolink>walking shoes</a>, not sandals or slip-ons: by stage 3 you are
            climbing a 14% grade at 3.4 mph.</li>
            <li><strong>Food, smoking, caffeine and alcohol.</strong> MedlinePlus advises not
            eating, smoking or drinking beverages with caffeine or alcohol for 3 hours or more
            before the test, and some tests require avoiding caffeine for 24 hours. Follow your
            appointment letter.</li>
            <li><strong>Medicines.</strong> Ask whether to take your usual medicines that day, and
            never stop one without talking to your provider first. Tell them if you have taken
            sildenafil, tadalafil or vardenafil in the previous 24 to 48 hours.</li>
            <li><strong>Timing.</strong> MedlinePlus puts the whole appointment at around 60
            minutes, with stages changing about every 3 minutes and monitoring for 10 to 15
            minutes afterwards.</li>
          </ul>
          <p>
            One equipment-related tip: if you have rarely used a treadmill, a few easy, supervised
            walks on one beforehand (with your doctor's agreement) can make the belt feel less
            alien, so you are less likely to stop early because the machine, rather than your
            heart, felt unfamiliar. This is not training for the test and it is not a home stress
            test; it is just getting used to the equipment. Our
            <a href="/treadmill-pace-and-speed-chart/" class="text-[#0F62FE] font-medium">pace and speed chart</a>
            shows how the Bruce speeds compare with an everyday walk.
          </p>
          <p>
            On the day, say how you feel. Report chest discomfort, dizziness or unusual
            breathlessness at once, and you can ask to stop at any time. Pushing through symptoms
            to post a longer time defeats the purpose of the test.
          </p>`,
    },
    {
      id: 'home-treadmill',
      navLabel: 'Improving Capacity Afterwards',
      heading: 'Can You Improve Your Stress Test Time on a Home Treadmill?',
      html: `          <p>
            Exercise capacity responds to training, and that is a large part of why cardiac
            rehabilitation programmes are built around walking. If your cardiologist clears you
            to exercise or refers you to rehab, steady walking on a treadmill is an easy way to
            follow the plan whatever the weather, and progress shows up as a higher MET figure on
            a later test.
          </p>
          <p>
            What a home treadmill is not is a way to rehearse or recreate the clinical test. The
            Bruce protocol reaches grades of 18 to 22% that most home machines cannot, and the
            point of the clinical test is the continuous ECG and trained staff, not the treadmill
            settings. Running a home Bruce to see what time you get, unsupervised, is exactly the
            situation the clinic exists to avoid. Follow the programme you are given, and if
            you are shopping for a machine for that purpose, our guides to
            <a href="/best-treadmills-for-seniors/" class="text-[#0F62FE] font-medium">treadmills for seniors</a>
            cover long handrails, low step-up heights and gentle starting speeds.
          </p>`,
    },
  ],
  faqs: [
    {
      q: 'What is the average time on a treadmill stress test by age?',
      a: `There is no single official minutes-by-age chart. The ACC/AHA guideline aims for about 6 to 12 minutes of exercise, and published norms are mostly given in METs: about 18.0 − 0.15 × age for men referred for testing (Morris, 1993) and 14.7 − 0.13 × age for women (Gulati, 2005). For adults over 75 on the Bruce protocol, median time was 7:22 for men aged 76 to 80 and 6:00 for women (Lander et al., 2022).`,
    },
    {
      q: 'Is 9 minutes on a treadmill stress test good?',
      a: `Nine minutes on a standard Bruce protocol means you completed stage 3 (3.4 mph at 14%), which the 2017 American Family Physician review puts at about 10 METs. More than 10 METs is described as indicating an excellent prognosis, and it is above the predicted capacity for most people over 50. Your cardiologist still interprets it alongside the ECG and symptoms.`,
    },
    {
      q: 'How long should a 60 year old last on a treadmill stress test?',
      a: `The published equations predict about 9.0 METs for a 60-year-old man referred for testing (Morris, 1993) and 6.9 METs for a 60-year-old woman (Gulati, 2005). On the Bruce stage table, that is roughly the end of stage 2 to stage 3, around 6 to 9 minutes. The exact minutes depend on the protocol and how the lab estimates METs.`,
    },
    {
      q: 'What is a good Duke Treadmill Score?',
      a: `A score of +5 or higher is low risk. In the 1991 NEJM validation, about two thirds of outpatients were in that group, with 99% four-year survival and an average annual mortality of 0.25%. Scores from −10 to +4 are moderate risk, and below −10 is high risk.`,
    },
    {
      q: 'How is the Duke Treadmill Score calculated?',
      a: `Exercise time in minutes on the Bruce protocol, minus 5 times the maximum ST-segment deviation in millimetres, minus 4 times the angina index (0 for no angina, 1 for non-limiting angina, 2 for angina that stopped the test). It comes from Mark and colleagues at Duke, published in 1987 and validated in 1991.`,
    },
    {
      q: 'Why did my stress test only last a few minutes?',
      a: `Tests stop for many reasons: fatigue, breathlessness, leg or joint pain, balance, symptoms, or a change on the ECG or blood pressure that staff want to stop for. Some of those say nothing about the heart. Ask your cardiologist why yours ended and what your METs mean for your age.`,
    },
    {
      q: 'Is the modified Bruce protocol easier?',
      a: `It starts easier. It adds two three-minute stages at 1.7 mph and 0% then 5% grade before the standard stages, so minutes on a modified Bruce are not comparable with minutes on a standard Bruce. Compare METs instead.`,
    },
  ],
  mistakesHeading: 'Common Mistakes When Reading Stress Test Times',
  mistakesIntro:
    'Most confusion comes from treating minutes as a universal score. These are the errors that come up most.',
  mistakes: [
    {
      title: 'Comparing minutes across different protocols',
      body: 'Nine minutes on a modified Bruce is roughly three minutes of standard Bruce work, because the first six minutes are warm-up stages. Compare the METs on your report, and check which protocol it names, before comparing yourself with anyone else or with a previous test.',
    },
    {
      title: 'Treating an internet chart as your norm',
      body: 'Many "normal time by age" charts online are conversions from fitness data, not clinical Bruce timings. Use the published equations (Morris for men, Gulati for women) or the Columbia data for over-75s, and remember those describe groups. Your cardiologist knows which reference their lab uses.',
    },
    {
      title: 'Gripping the rails to last longer',
      body: 'Leaning on the handrails reduces the work you are doing, so the time overstates your capacity and can distort the Duke score. Hold lightly for balance if you need to, and tell staff if you feel unsteady rather than hanging on.',
    },
    {
      title: 'Working out your own Duke score and acting on it',
      body: 'The score needs the measured ST deviation from the full ECG, the correct protocol and a clinical context the printout does not give. It applies to people being assessed for suspected coronary disease. Ask your cardiologist for the interpretation rather than calculating and worrying, or relaxing, on your own.',
    },
  ],
  relatedHeading: 'Related Heart and Training Guides',
  related: [
    {
      kicker: 'Explainer',
      title: 'What Does a Treadmill Stress Test Show?',
      blurb: 'What the exercise ECG looks for, how the session runs and how long it takes.',
      url: '/treadmill-stress-test/',
    },
    {
      kicker: 'Cost',
      title: 'How Much Does a Treadmill Stress Test Cost?',
      blurb: 'Cash prices, insurance and what stress echo and nuclear tests add.',
      url: '/how-much-does-a-treadmill-stress-test-cost/',
    },
    {
      kicker: 'Reference',
      title: 'What Are METs on a Treadmill?',
      blurb: 'The unit your stress test result is reported in, explained in plain terms.',
      url: '/what-are-mets-on-a-treadmill/',
    },
    {
      kicker: 'Training',
      title: 'Treadmill Heart Rate Zones',
      blurb: 'What the zones mean, and why 220-minus-age misses so many people.',
      url: '/treadmill-heart-rate-zones/',
    },
    {
      kicker: 'Reference',
      title: 'Incline Percent vs Degrees',
      blurb: 'What the 10% to 22% Bruce grades actually mean on a treadmill.',
      url: '/treadmill-incline-percent-vs-degrees/',
    },
    {
      kicker: 'Buying Guide',
      title: 'Best Treadmills for Seniors',
      blurb: 'Long rails, low step-up heights and gentle start speeds for rehab walking.',
      url: '/best-treadmills-for-seniors/',
    },
  ],
  bottomLine: [
    `<strong class="text-white">There is no single normal time, but the shape is consistent:
            capacity falls with age and is lower in women.</strong> The guideline aims for 6 to 12
            minutes; Morris (men) and Gulati (women) predict expected METs from age, and over-75s on
            the Bruce protocol had median times of 7:22 (men) and 6:00 (women) in the Columbia
            study.`,
    `The Duke Treadmill Score turns Bruce minutes, ST change and angina into a risk band:
            +5 or more is low risk, below −10 is high risk. Prepare properly, report symptoms, and
            let your cardiologist interpret the numbers. For what happens in the room, read our
            <a href="/treadmill-stress-test/" class="text-[#5AA9FF] font-bold no-underline">treadmill stress test explainer</a>.`,
  ],
};

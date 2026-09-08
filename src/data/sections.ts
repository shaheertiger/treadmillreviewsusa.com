/**
 * The site's information architecture.
 *
 * Each entry becomes a section hub at `/<slug>/` that groups the existing
 * articles covering that intent. The articles keep their original flat URLs —
 * the hubs are a navigation and topical-authority layer over them, not a
 * migration — so every `url` below points at a page that already exists and is
 * checked by `npm run validate:links`.
 */

export interface SectionPage {
  title: string;
  description: string;
  badge: string;
  url: string;
}

export interface SectionGroup {
  name: string;
  pages: SectionPage[];
}

export interface Section {
  /** Hub route, `/<slug>/`. */
  slug: string;
  /** Short label used in navigation and on sibling hubs. */
  name: string;
  icon: string;
  /** Sentence describing the section, used on sibling hubs and the footer. */
  tagline: string;
  /** <title>, before the site suffix. */
  title: string;
  metaDescription: string;
  /** <h1>, with `highlight` rendered in the accent colour. */
  heading: string;
  highlight: string;
  standfirst: string;
  /** Body copy above the card grid. Real editorial, not filler. */
  intro: string[];
  groups: SectionGroup[];
  /**
   * Hubs with no destinations of their own are kept out of the index until
   * they have some — see /tools/.
   */
  noindex?: boolean;
}

export const SECTIONS: Section[] = [
  {
    slug: 'best',
    name: 'Best Treadmills',
    icon: '🏆',
    tagline: 'Ranked picks for a specific person, room and running style.',
    title: 'Best Treadmills by Use Case (2026)',
    metaDescription:
      'Every Treadmill Reviews USA roundup, grouped by who the machine is for — home, folding, walking, incline and low-impact picks, all independently tested.',
    heading: 'Best treadmills, sorted by',
    highlight: 'who is using them',
    standfirst:
      'The right treadmill for a marathon runner in a garage is the wrong one for a walker in a third-floor flat. These roundups are grouped by that decision, not by brand.',
    intro: [
      'Most treadmill rankings answer a question nobody asks: which machine is best in the abstract. In practice the constraint is almost never quality — it is a ceiling height, a stride length, a neighbour below, or a budget that will not move. Every guide in this section starts from one of those constraints and works back to the hardware.',
      'That is also why the same machine appears near the top of one list and not at all in another. The NordicTrack Commercial 1750 is our default recommendation for a dedicated home gym and a poor suggestion for a shared flat, because the thing that makes it good — a heavy deck on a rigid frame — is exactly what carries impact into the floor below.',
      'Each guide states the conditions it was tested under. Where a pick depends on a measurement you can take at home, such as belt length against your stride or clearance behind the deck, the guide says what to measure before you compare models at all.',
    ],
    groups: [
      {
        name: 'Home & everyday running',
        pages: [
          {
            title: 'Best Treadmills of 2026',
            description: 'Our top pick from every budget and category in one ranked roundup.',
            badge: 'Start here',
            url: '/best-treadmills/',
          },
          {
            title: 'Best Treadmills for Home Use',
            description:
              'Seven premium and mid-range machines tested over six months for motor strength, cushioning and connectivity.',
            badge: 'Flagship guide',
            url: '/best-treadmill-for-home-reviews/',
          },
          {
            title: 'Best Treadmills for Home',
            description:
              'A focused home-treadmill comparison, including a direct answer on the Sole F80 and iFit.',
            badge: 'Roundup',
            url: '/best-treadmills-for-home/',
          },
          {
            title: 'Home Treadmills: Which Buyer Are You?',
            description: 'A routing guide that sends you to the right specialised guide for your situation.',
            badge: 'Router',
            url: '/home-treadmills/',
          },
        ],
      },
      {
        name: 'Running & performance',
        pages: [
          {
            title: 'Best Treadmills for Running',
            description:
              '400 miles across six machines at 7-10 mph. Deck length and frame rigidity decided it, not horsepower.',
            badge: 'Runners',
            url: '/best-treadmills-for-running/',
          },
          {
            title: 'Best Treadmills for Tall Runners',
            description:
              'Usable deck length measured rather than quoted, plus the ceiling height nobody checks before buying.',
            badge: 'Over 6 ft',
            url: '/best-treadmills-for-tall-runners/',
          },
        ],
      },
      {
        name: 'Folding & small spaces',
        pages: [
          {
            title: 'Best Folding Treadmills',
            description:
              'Space-saving picks tested for real folded footprint, fold time and hinge durability.',
            badge: 'Flagship guide',
            url: '/best-folding-treadmill-reviews/',
          },
          {
            title: 'Best Folding Treadmills by Use Case',
            description: 'Fast picks for apartments, tall runners, tight budgets and families.',
            badge: 'Roundup',
            url: '/best-folding-treadmills/',
          },
          {
            title: 'Folding Treadmills Explained',
            description: 'Fold mechanisms compared — hydraulic, manual latch and motorised.',
            badge: 'Explainer',
            url: '/folding-treadmills/',
          },
          {
            title: 'Quiet Treadmills for Apartments',
            description:
              'Measured beside the deck and in the room below — the two rankings did not match.',
            badge: 'Noise tested',
            url: '/quiet-treadmills/',
          },
          {
            title: 'Best Treadmills for Apartments',
            description:
              'The whole apartment constraint set — the neighbour below, the footprint, the stairwell and the lease.',
            badge: 'Apartments',
            url: '/best-treadmills-for-apartments/',
          },
          {
            title: 'Best Treadmills for Small Spaces',
            description:
              'Folded footprints measured at the widest point, and why fold effort decides this rather than fold size.',
            badge: 'Compact',
            url: '/best-treadmills-for-small-spaces/',
          },
        ],
      },
      {
        name: 'Walking & low-impact',
        pages: [
          {
            title: 'Best Walking Treadmills',
            description:
              'Six machines tested for eight weeks at 2.5–4 mph — the speeds most treadmills are actually used at.',
            badge: 'Pillar guide',
            url: '/best-walking-treadmills/',
          },
          {
            title: 'Under-Desk Treadmills Tested',
            description:
              'Five walking pads through six weeks of real workdays, scored on noise, typing accuracy and storage.',
            badge: 'Walking pads',
            url: '/under-desk-treadmills/',
          },
          {
            title: 'Best Treadmills for Seniors',
            description:
              'Re-scored on step-up height, handrail length, stopping distance and console legibility.',
            badge: 'Accessibility',
            url: '/best-treadmills-for-seniors/',
          },
          {
            title: 'Best Treadmills for Bad Knees',
            description:
              'Deck give and rebound measured. The softest deck is not the kindest — incline is the real tool.',
            badge: 'Low impact',
            url: '/best-treadmills-for-bad-knees/',
          },
        ],
      },
      {
        name: 'Incline & hill training',
        pages: [
          {
            title: 'Best Incline Treadmills',
            description:
              'Steep-incline trainers for hill and trail-style training, from 12% to 40% grade.',
            badge: 'Incline',
            url: '/best-incline-treadmills/',
          },
        ],
      },
      {
        name: 'Getting started & ownership',
        pages: [
          {
            title: 'Best Treadmills for Beginners',
            description:
              'Ranked on assembly, console simplicity and safety — and an argument for spending less than you think.',
            badge: 'First treadmill',
            url: '/best-treadmills-for-beginners/',
          },
          {
            title: 'Best Treadmills Without Subscriptions',
            description:
              'What each machine becomes when you stop paying, and the five-year cost of the ones that need a fee.',
            badge: 'No fees',
            url: '/best-treadmills-without-subscriptions/',
          },
        ],
      },
      {
        name: 'Capacity & support',
        pages: [
          {
            title: 'Best Treadmills for Heavy People',
            description:
              'Capacity is a warranty term, not an engineering limit. Ranked on roller diameter, frame flex and motor heat.',
            badge: 'High capacity',
            url: '/best-treadmills-for-heavy-people/',
          },
        ],
      },
    ],
  },
  {
    slug: 'price',
    name: 'By Price',
    icon: '💵',
    tagline: 'What each budget tier actually buys, and where the cliffs are.',
    title: 'Best Treadmills by Price (2026)',
    metaDescription:
      'Treadmill picks by budget — under $1,000, under $1,500, over $2,500 and commercial grade — with what each tier buys and where the quality cliffs fall.',
    heading: 'Treadmills by budget, and',
    highlight: 'what each tier buys',
    standfirst:
      'Treadmill quality does not rise smoothly with price. It steps, and the steps are not where the marketing suggests they are.',
    intro: [
      'The most useful thing to know before setting a treadmill budget is where the cliffs fall. Below roughly $800 the constraint is the motor and the deck: continuous-duty ratings drop under 2.5 CHP, decks shorten to 55 inches or less, and both limit the machine to walking and light jogging regardless of what the box claims. That is a genuine ceiling, not a matter of taste.',
      'Between about $1,000 and $1,800 sits the widest gap between the best and worst machines at the same price, because it is the band where brands choose between spending on the motor, the screen, or the subscription ecosystem. Two treadmills at $1,400 can differ by a full horsepower of continuous-duty rating and 5 inches of deck length.',
      'Above roughly $2,500 the improvements are real but they compound slowly — heavier rollers, AC rather than DC motors, longer warranties on parts that rarely fail anyway. The guides below say which of those you will notice in a home setting and which you are paying for on principle.',
    ],
    groups: [
      {
        name: 'Budget tiers',
        pages: [
          {
            title: 'Best Treadmills Under $500',
            description:
              'What this budget genuinely buys — and why a walking pad is usually the better product here.',
            badge: 'Entry',
            url: '/best-treadmills-under-500/',
          },
          {
            title: 'Best Treadmills Under $800',
            description:
              'The first tier worth buying. Deck, motor, frame and warranty all cross thresholds here.',
            badge: 'Value peak',
            url: '/best-treadmills-under-800/',
          },
          {
            title: 'Best Treadmills Under $1,000',
            description:
              'Budget treadmills that don’t feel cheap — ranked on motor durability and real value for money.',
            badge: 'Flagship guide',
            url: '/best-treadmill-under-1000-reviews/',
          },
          {
            title: 'Best Treadmills Under $1,500',
            description: 'The sweet spot between entry-level and commercial-grade — five tested picks.',
            badge: 'Mid tier',
            url: '/treadmills-under-1500/',
          },
        ],
      },
      {
        name: 'The running tier',
        pages: [
          {
            title: 'Best Treadmills Under $2,000',
            description:
              'Where 60-inch decks meet frames heavy enough to run on, and where subscriptions start costing more than the hardware.',
            badge: 'Runners',
            url: '/best-treadmills-under-2000/',
          },
        ],
      },
      {
        name: 'Deciding what to spend',
        pages: [
          {
            title: 'How Much Should You Spend?',
            description:
              'Five questions about your actual use, and the budget falls out of the answers.',
            badge: 'Framework',
            url: '/how-much-should-you-spend-on-a-treadmill/',
          },
          {
            title: 'Cheap vs. Premium Treadmill',
            description:
              'Component by component, what the extra money buys — and which three parts you will notice.',
            badge: 'Comparison',
            url: '/cheap-vs-premium-treadmill/',
          },
          {
            title: 'Best Time of Year to Buy',
            description:
              'The same machine swings 20-35% across a year. The cycle, and the three weeks to avoid.',
            badge: 'Timing',
            url: '/best-time-of-year-to-buy-a-treadmill/',
          },
        ],
      },
      {
        name: 'Premium & commercial',
        pages: [
          {
            title: 'Best Treadmills Over $2,500',
            description: 'When premium pricing is actually worth it, and when it’s overkill.',
            badge: 'Premium',
            url: '/treadmills-over-2500/',
          },
          {
            title: 'Best Commercial-Grade Treadmills',
            description: 'Gym-quality AC-motor machines built to handle daily use for years.',
            badge: 'Commercial',
            url: '/commercial-treadmills/',
          },
        ],
      },
      {
        name: 'Spending less',
        pages: [
          {
            title: 'Buying a Used Treadmill: Checklist',
            description:
              'Fifteen checks that separate a bargain from someone else’s dead controller board.',
            badge: 'Used market',
            url: '/used-treadmill-buying-checklist/',
          },
          {
            title: 'How Long Do Treadmills Last?',
            description: 'Realistic lifespans by tier, what fails first, and the repair-or-replace arithmetic.',
            badge: 'Cost of ownership',
            url: '/how-long-do-treadmills-last/',
          },
          {
            title: 'New vs. Used Treadmill',
            description:
              'Used buys roughly twice the hardware per dollar. What you give up, and how to inspect properly.',
            badge: 'Used market',
            url: '/new-vs-used-treadmill/',
          },
        ],
      },
    ],
  },
  {
    slug: 'brands',
    name: 'Brands',
    icon: '🏭',
    tagline: 'Who actually builds each lineup, and how the model numbers work.',
    title: 'Treadmill Brands Compared (2026)',
    metaDescription:
      'Brand-by-brand treadmill guides — NordicTrack, ProForm, Sole, Life Fitness, Matrix and Bowflex — covering lineups, model numbering, warranties and subscriptions.',
    heading: 'Treadmill brands, and how',
    highlight: 'their lineups work',
    standfirst:
      'Model numbers are the hardest part of treadmill shopping. Two machines a hundred dollars apart can share a frame, and two that look identical can be four years apart in design.',
    intro: [
      'Treadmill brands do not name their products the way most consumer hardware does. NordicTrack and ProForm are the same parent company and share components across price tiers; a "new" model year often changes the console and nothing structural; and the same chassis is sold under different numbers at different retailers.',
      'Each brand guide below explains that lineup on its own terms — which series sit above which, what a model number encodes, where the subscription is optional and where it is effectively required to use the machine, and which warranty terms are genuinely better rather than merely longer on paper.',
      'Two of these are worth flagging honestly. Bowflex Max Trainers are not treadmills; they are included because people cross-shop them and deserve a straight answer about the difference. And Life Fitness and Matrix sell genuine commercial hardware whose home models carry commercial pricing — the guides say when that is justified.',
    ],
    groups: [
      {
        name: 'Consumer brands',
        pages: [
          {
            title: 'NordicTrack Treadmills',
            description: 'The full C-Series, Commercial Series and X Series lineup, explained.',
            badge: 'Brand guide',
            url: '/nordictrack/',
          },
          {
            title: 'ProForm Treadmills',
            description: 'NordicTrack’s budget-accessible sibling brand, model by model.',
            badge: 'Brand guide',
            url: '/proform-treadmill/',
          },
          {
            title: 'Sole Fitness Treadmills',
            description: 'No-subscription-required hardware — the F63, F65 and F80 compared.',
            badge: 'Brand guide',
            url: '/sole-fitness/',
          },
        ],
      },
      {
        name: 'Commercial brands',
        pages: [
          {
            title: 'Life Fitness Treadmills',
            description: 'Genuine commercial gym pedigree, from the T3 to the Platinum Club Series.',
            badge: 'Brand guide',
            url: '/life-fitness/',
          },
          {
            title: 'Matrix Fitness Treadmills',
            description: 'Commercial-grade hardware from the makers of real gym equipment.',
            badge: 'Brand guide',
            url: '/matrix-fitness/',
          },
        ],
      },
      {
        name: 'Cross-shopped alternatives',
        pages: [
          {
            title: 'Bowflex Cardio Machines',
            description: 'The Max Trainer M5 and M7 — not treadmills, but a popular alternative.',
            badge: 'Not a treadmill',
            url: '/bowflex/',
          },
        ],
      },
    ],
  },
  {
    slug: 'reviews',
    name: 'Model Reviews',
    icon: '🔍',
    tagline: 'One machine at a time, with the faults named.',
    title: 'Treadmill Reviews by Model (2026)',
    metaDescription:
      'Individual treadmill reviews — NordicTrack, ProForm, Sole, Life Fitness, Matrix and Bowflex models assessed one at a time, with real cons on every machine.',
    heading: 'Individual treadmill',
    highlight: 'model reviews',
    standfirst:
      'A roundup has to compare. A review can sit with one machine long enough to find what irritates you in month three rather than week one.',
    intro: [
      'These are single-machine assessments. Each one covers the motor and deck on their own terms, the console and any subscription attached to it, the assembly and the footprint once assembled, and the failure modes owners report after the first year.',
      'Every review carries real cons. That is the site’s position: a machine with no listed drawbacks has not been used properly. Where a fault is common to a whole lineup rather than one model, the review says so and links to the brand guide that covers it.',
      'Specifications on these pages are editorial approximations in the site’s established style — verify against manufacturer data before treating any figure as authoritative.',
    ],
    groups: [
      {
        name: 'NordicTrack',
        pages: [
          {
            title: 'NordicTrack Commercial 1750',
            description: 'Our pick for most home users who want commercial-grade durability.',
            badge: 'Top pick',
            url: '/nordictrack-commercial-1750-treadmill/',
          },
          {
            title: 'NordicTrack New Commercial 1750',
            description: 'What changed in the current model-year refresh.',
            badge: 'Review',
            url: '/nordictrack-new-commercial-1750-treadmill/',
          },
          {
            title: 'NordicTrack Commercial 2450',
            description: 'A stronger motor and steeper incline for serious hill training.',
            badge: 'Review',
            url: '/nordictrack-commercial-2450-treadmill/',
          },
          {
            title: 'NordicTrack Commercial 2950',
            description: 'NordicTrack’s flagship, with the largest screen in the lineup.',
            badge: 'Review',
            url: '/nordictrack-commercial-2950-treadmill/',
          },
          {
            title: 'NordicTrack C 700',
            description: 'The budget entry point into the NordicTrack lineup.',
            badge: 'Review',
            url: '/nordictrack-c-700-treadmill/',
          },
          {
            title: 'NordicTrack C 990',
            description: 'An affordable, iFit-ready mid-tier C-Series machine.',
            badge: 'Review',
            url: '/nordictrack-c-990-treadmill/',
          },
          {
            title: 'NordicTrack C 1650',
            description: 'The C-Series sweet spot, with a full 60-inch deck.',
            badge: 'Review',
            url: '/nordictrack-c-1650-treadmill/',
          },
          {
            title: 'NordicTrack X22i Incline Trainer',
            description: 'True hill and trail training with -6% to 40% incline.',
            badge: 'Incline trainer',
            url: '/nordictrack-x22i-incline-trainer-treadmill/',
          },
          {
            title: 'NordicTrack X9i Incline Trainer',
            description: 'The value incline trainer, same incline hardware as the X22i.',
            badge: 'Incline trainer',
            url: '/nordictrack-x9i-incline-trainer-treadmill/',
          },
        ],
      },
      {
        name: 'ProForm',
        pages: [
          {
            title: 'ProForm Pro 2000',
            description: 'A budget-friendly alternative to the Commercial 1750.',
            badge: 'Review',
            url: '/proform-pro-2000-treadmill/',
          },
          {
            title: 'ProForm Power 995i',
            description: 'ProForm’s mid-tier value pick, iFit-compatible.',
            badge: 'Review',
            url: '/proform-power-995i-treadmill/',
          },
          {
            title: 'ProForm Power 1295i',
            description: 'Also sold as the Smart Power 1295i — bigger screen, steeper incline.',
            badge: 'Review',
            url: '/proform-power-1295i-treadmill/',
          },
        ],
      },
      {
        name: 'Sole',
        pages: [
          {
            title: 'Sole F63',
            description: 'Sole’s budget entry, no subscription required.',
            badge: 'Review',
            url: '/sole-f63-treadmill/',
          },
          {
            title: 'Sole F65',
            description: 'The Sole treadmill most owners actually recommend.',
            badge: 'Review',
            url: '/sole-f65-treadmill/',
          },
        ],
      },
      {
        name: 'Commercial & alternatives',
        pages: [
          {
            title: 'Life Fitness T3',
            description: 'Genuine commercial-grade AC motor durability for the home.',
            badge: 'Review',
            url: '/life-fitness-t3-treadmill/',
          },
          {
            title: 'Life Fitness Platinum Club Series',
            description: 'The aspirational flagship — boutique-gym quality at home.',
            badge: 'Review',
            url: '/life-fitness-platinum-club-series-treadmill/',
          },
          {
            title: 'Matrix Fitness T7xe',
            description: 'A genuine commercial-grade machine for serious home users.',
            badge: 'Review',
            url: '/matrix-fitness-t7xe-treadmill/',
          },
          {
            title: 'Bowflex Max Trainer M7',
            description: 'A compact HIIT cardio alternative to a treadmill.',
            badge: 'Not a treadmill',
            url: '/bowflex-max-trainer-m7/',
          },
          {
            title: 'Bowflex Max Trainer M5',
            description: 'The entry-level Max Trainer, fewer resistance levels.',
            badge: 'Not a treadmill',
            url: '/bowflex-max-trainer-m5/',
          },
        ],
      },
    ],
  },
  {
    slug: 'compare',
    name: 'Comparisons',
    icon: '⚖️',
    tagline: 'Head-to-head, where the decision is genuinely close.',
    title: 'Treadmill Comparisons Head-to-Head (2026)',
    metaDescription:
      'Direct treadmill comparisons — walking pad versus treadmill, treadmill versus elliptical — decided on deck, noise, footprint and ten-year cost rather than spec sheets.',
    heading: 'Head-to-head',
    highlight: 'comparisons',
    standfirst:
      'A comparison earns its place when the answer is genuinely close. If one option wins outright, that belongs in a review instead.',
    intro: [
      'These pages exist for the decisions where both options are defensible and the right answer depends on your room, your joints or your budget rather than on which machine is better built.',
      'Each comparison is decided on the same axes: what the hardware physically allows, what it costs to run over ten years rather than to buy once, how much space it needs in use and in storage, and how much noise it puts into the room below. Spec sheets are used only where a number is verifiable.',
      'Where a comparison has a clear winner for most people, the page says so in the first paragraph rather than withholding it. This section is growing — direct model-versus-model comparisons are the next additions.',
    ],
    groups: [
      {
        name: 'Format decisions',
        pages: [
          {
            title: 'Walking Pad vs. Treadmill',
            description:
              'The two formats compared on deck, incline, noise, storage and true cost per year.',
            badge: 'Format',
            url: '/walking-pad-vs-treadmill/',
          },
          {
            title: 'Treadmill vs. Elliptical',
            description:
              'Joints, calorie burn, bone density, footprint, noise and ten-year cost — compared honestly.',
            badge: 'Machine type',
            url: '/treadmill-vs-elliptical/',
          },
        ],
      },
    ],
  },
  {
    slug: 'guides',
    name: 'Buying Guides',
    icon: '📘',
    tagline: 'The specifications that matter, explained before you shop.',
    title: 'Treadmill Buying Guides & Spec Explainers (2026)',
    metaDescription:
      'Treadmill buying guides and spec explainers — horsepower, belt size, footprint, incline grades and running costs, so you can read a spec sheet properly.',
    heading: 'Buying guides and',
    highlight: 'spec explainers',
    standfirst:
      'Treadmill spec sheets are written to be skimmed favourably. These guides explain what each number means and which ones you can safely ignore.',
    intro: [
      'Almost every confusing treadmill specification is confusing on purpose. Peak horsepower is a larger number than continuous-duty horsepower and describes a condition the motor cannot sustain. Incline is quoted as a percentage because 15% sounds steeper than its true 8.5 degrees. Deck length is quoted in inches of belt, not inches of usable stride.',
      'The explainers here take one specification at a time and answer three questions about it: what the number actually measures, what value you need given your height, weight and pace, and what goes wrong if you buy under it. Where a figure can be checked at home with a tape measure, the guide says how.',
      'The broader buying guides sit above the explainers and put them in order — what to settle first, what to compare second, and what to leave until you are choosing between two specific machines.',
    ],
    groups: [
      {
        name: 'Start here',
        pages: [
          {
            title: 'The Complete Treadmill Buying Guide',
            description:
              'Motor power, deck size, folding vs. fixed and budget tiers — everything to check before comparing models.',
            badge: 'Pillar guide',
            url: '/treadmill-buying-guide-2026/',
          },
          {
            title: 'Treadmill Buyer’s Purchase Checklist',
            description: 'A step-by-step, eight-stage checklist from budget to long-term ownership.',
            badge: 'Checklist',
            url: '/treadmill-buyers-guide/',
          },
          {
            title: 'Treadmill Reviews 2026',
            description:
              'How we test and score every treadmill, plus this year’s category winners.',
            badge: 'Methodology',
            url: '/treadmill-reviews-2026/',
          },
        ],
      },
      {
        name: 'Motor, deck & incline',
        pages: [
          {
            title: 'What Horsepower Do I Need?',
            description: 'CHP versus peak HP, and the figure your weight and pace actually need.',
            badge: 'Spec',
            url: '/treadmill-horsepower-guide/',
          },
          {
            title: 'Treadmill Belt Size Guide',
            description: 'Deck length and width by stride — and why height is only a proxy.',
            badge: 'Spec',
            url: '/treadmill-belt-size-guide/',
          },
          {
            title: 'Incline: Percentage vs. Degrees',
            description: '15 per cent is only 8.5 degrees. The conversion chart and what each grade demands.',
            badge: 'Spec',
            url: '/treadmill-incline-percent-vs-degrees/',
          },
        ],
      },
      {
        name: 'Space & running costs',
        pages: [
          {
            title: 'Dimensions & Space Requirements',
            description:
              'Footprint, six feet of clearance behind, ceiling height and the delivery route.',
            badge: 'Space',
            url: '/treadmill-dimensions-space-requirements/',
          },
          {
            title: 'How Much Electricity Does a Treadmill Use?',
            description: 'Real draw figures, the monthly cost, and the circuit advice that actually matters.',
            badge: 'Running cost',
            url: '/treadmill-electricity-usage/',
          },
          {
            title: 'Can You Put a Treadmill on Carpet?',
            description:
              'Yes, with conditions — fibres in the motor, blocked airflow, and a base that steers the belt.',
            badge: 'Placement',
            url: '/treadmill-on-carpet/',
          },
        ],
      },
      {
        name: 'Using the machine',
        pages: [
          {
            title: 'The 12-3-30 Treadmill Workout',
            description:
              'What the incline-walking protocol demands, a four-week build-up, and which machines reach 12%.',
            badge: 'Training',
            url: '/12-3-30-treadmill-workout/',
          },
        ],
      },
    ],
  },
  {
    slug: 'problems',
    name: 'Fault Diagnosis',
    icon: '🛠️',
    tagline: 'Symptom first, cause second, repair bill last.',
    title: 'Treadmill Problems & Fault Diagnosis',
    metaDescription:
      'Diagnose a treadmill fault by symptom — won’t turn on, belt won’t move, slipping, slowing under load or a new noise — in the order that finds the cause cheapest.',
    heading: 'Diagnose a fault',
    highlight: 'by symptom',
    standfirst:
      'Most treadmill faults are diagnosed in the wrong order, which is why so many end with a replaced controller board that was never the problem.',
    intro: [
      'These pages start from what you can observe — a machine that will not power up, a belt that stops under load, a noise that was not there last week — and work through causes cheapest and most likely first. That order matters: friction and tension account for a large share of faults that get misread as motor or electronics failures.',
      'Every page in this section carries the same safety rule, and it is not decorative. Unplug the machine at the wall before touching the belt, the deck, the motor hood or any fastener. A treadmill motor can turn under stored energy, and the safety key is not an isolator.',
      'Four symptoms mean stop using the machine and stop diagnosing it: a burning or hot-plastic smell, visible sparking, a belt that moves when the machine is off, and any smoke. Those are not troubleshooting problems.',
    ],
    groups: [
      {
        name: 'Start here',
        pages: [
          {
            title: 'Treadmill Troubleshooting',
            description:
              'Won’t start, cuts out, error codes and new noises — plus the four symptoms that mean stop.',
            badge: 'Pillar guide',
            url: '/treadmill-troubleshooting/',
          },
        ],
      },
      {
        name: 'Power & motion faults',
        pages: [
          {
            title: 'Treadmill Won’t Turn On',
            description: 'Safety key, reset switch, outlet, cord and fuse — before you blame the board.',
            badge: 'No power',
            url: '/treadmill-wont-turn-on/',
          },
          {
            title: 'Turns On but the Belt Won’t Move',
            description:
              'Silence, a hum, a click or a free-spinning motor — each points somewhere different.',
            badge: 'No motion',
            url: '/treadmill-turns-on-but-belt-wont-move/',
          },
        ],
      },
      {
        name: 'Belt behaviour',
        pages: [
          {
            title: 'Belt Slipping or Drifting?',
            description:
              'Why tightening a slipping belt is usually the wrong first move, and how to set tension and tracking.',
            badge: 'Slipping',
            url: '/treadmill-belt-slipping/',
          },
          {
            title: 'Belt Slows Down When I Step on It',
            description: 'Friction four times out of five — the fix order, and why tightening first does damage.',
            badge: 'Slowing',
            url: '/treadmill-belt-slows-down-when-i-step-on-it/',
          },
        ],
      },
      {
        name: 'Noise',
        pages: [
          {
            title: 'Treadmill Making a Squeaking Noise',
            description: 'Three questions that locate any treadmill noise, and the lubricants that ruin decks.',
            badge: 'Noise',
            url: '/treadmill-squeaking-noise/',
          },
        ],
      },
    ],
  },
  {
    slug: 'maintenance',
    name: 'Maintenance',
    icon: '🧰',
    tagline: 'Under an hour a year, for roughly double the machine’s life.',
    title: 'Treadmill Maintenance & Ownership',
    metaDescription:
      'The complete treadmill maintenance schedule — belt lubrication intervals, tension and tracking adjustment, and the checks that roughly double a machine’s life.',
    heading: 'Maintenance that',
    highlight: 'doubles a machine’s life',
    standfirst:
      'The total maintenance a home treadmill needs is under an hour a year. Skipping it is the single most common reason a machine dies before it should.',
    intro: [
      'Almost every treadmill that fails early fails for the same reason: friction between the belt and the deck went unaddressed until it pulled the motor and the controller board down with it. Lubrication is a ten-minute job that most owners never do once, and it is the highest-return maintenance task on the machine by a wide margin.',
      'The pages here cover the full schedule — what to do monthly, what to do every 40 to 50 running hours, and what to check once a year — plus the two adjustments that account for most of the rest, belt tension and belt tracking. Both are commonly done in the wrong order, and both can damage the machine when overdone.',
      'One authority note: your manual overrides everything here on lubrication interval and deck type. Some decks are pre-waxed and must never be lubricated, and applying silicone to one will ruin it. Check the manual before the first application.',
      'Intervals, lifespan ranges and repair costs on these pages are editorial estimates drawn from warranty terms and owner reports, not measured data.',
    ],
    groups: [
      {
        name: 'Start here',
        pages: [
          {
            title: 'Treadmill Maintenance',
            description:
              'The complete owner’s schedule — under an hour a year, and roughly double the machine’s life.',
            badge: 'Pillar guide',
            url: '/treadmill-maintenance/',
          },
          {
            title: 'Treadmill Maintenance Checklist',
            description:
              'Every task organised by interval — after each session, monthly, every 40-50 hours, annually.',
            badge: 'Checklist',
            url: '/treadmill-maintenance-checklist/',
          },
        ],
      },
      {
        name: 'Lubrication',
        pages: [
          {
            title: 'How to Lubricate a Treadmill Belt',
            description:
              'The ten-minute job most owners never do, step by step — and the products that destroy decks.',
            badge: 'How-to',
            url: '/treadmill-belt-lubrication/',
          },
          {
            title: 'How Often to Lubricate a Treadmill',
            description: 'Every 40–50 hours, not every three months — plus the finger test that settles it.',
            badge: 'Interval',
            url: '/how-often-to-lubricate-treadmill/',
          },
          {
            title: 'Best Treadmill Lubricant',
            description:
              '100% silicone, and which applicator — plus how to tell whether your deck is pre-waxed.',
            badge: 'Products',
            url: '/best-treadmill-lubricant/',
          },
          {
            title: 'Can You Use WD-40 on a Treadmill?',
            description:
              'No. It is a solvent, not a lubricant, and the residue makes friction worse. What to do if you already have.',
            badge: 'Warning',
            url: '/can-you-use-wd40-on-a-treadmill/',
          },
        ],
      },
      {
        name: 'Belt tension & tracking',
        pages: [
          {
            title: 'How to Center a Treadmill Belt',
            description: 'The quarter-turn method — and the thirty seconds of waiting everyone skips.',
            badge: 'How-to',
            url: '/how-to-center-treadmill-belt/',
          },
          {
            title: 'How Tight Should a Treadmill Belt Be?',
            description: 'The two-to-three-inch lift test, and why over-tightening costs motors and bearings.',
            badge: 'Adjustment',
            url: '/how-tight-should-treadmill-belt-be/',
          },
        ],
      },
      {
        name: 'Deep cleaning',
        pages: [
          {
            title: 'How to Clean Under a Treadmill Belt',
            description:
              'The annual deep clean that makes lubrication work — and what the debris you find tells you.',
            badge: 'Annual',
            url: '/how-to-clean-under-treadmill-belt/',
          },
          {
            title: 'How to Vacuum a Motor Compartment',
            description:
              'The most skipped task in treadmill maintenance, done safely — and what not to touch.',
            badge: 'Annual',
            url: '/how-to-vacuum-treadmill-motor-compartment/',
          },
        ],
      },
      {
        name: 'Wear, cost & lifespan',
        pages: [
          {
            title: 'Treadmill Maintenance Cost',
            description:
              '$15-$40 a year in upkeep against $300-$800 per failure it prevents. The full cost picture.',
            badge: 'Cost',
            url: '/treadmill-maintenance-cost/',
          },
          {
            title: 'How Often to Replace a Treadmill Belt',
            description:
              'Five to ten years maintained, two to three neglected. The five signs, and why the deck goes with it.',
            badge: 'Wear part',
            url: '/how-often-should-a-treadmill-belt-be-replaced/',
          },
          {
            title: 'How Long Do Treadmill Motors Last?',
            description:
              'Motors die of heat, and heat comes from friction — which makes this a property of the owner.',
            badge: 'Lifespan',
            url: '/how-long-do-treadmill-motors-last/',
          },
        ],
      },
    ],
  },
  {
    slug: 'tools',
    name: 'Tools & Calculators',
    icon: '🧮',
    // No calculators are built yet, so the hub is kept out of the index until
    // it has destinations of its own rather than pointers to articles.
    noindex: true,
    tagline: 'Interactive answers to the three questions that need arithmetic.',
    title: 'Treadmill Tools & Calculators',
    metaDescription:
      'Planned Treadmill Reviews USA calculators for room fit, running cost and model selection — with the guides that answer each question in full today.',
    heading: 'Tools and',
    highlight: 'calculators',
    standfirst:
      'Three treadmill questions need arithmetic rather than prose. Until the calculators land, the guides below answer each one in full.',
    intro: [
      'Most treadmill decisions are judgement calls, but three are pure arithmetic: whether a given machine fits your room once you include the clearance behind it, what it will add to your electricity bill at your rate and usage, and which model matches your height, weight, pace and budget.',
      'Interactive versions of all three are in progress. This page is the home they will land on, and it is deliberately excluded from search until they exist — a hub that only points elsewhere is not worth indexing.',
      'In the meantime, each guide below answers its question completely, including the figures a calculator would use.',
    ],
    groups: [
      {
        name: 'Answered by a guide today',
        pages: [
          {
            title: 'Will It Fit? Dimensions & Space',
            description:
              'Footprint, the six feet of clearance behind the deck, ceiling height for incline, and the delivery route.',
            badge: 'Space calculator → guide',
            url: '/treadmill-dimensions-space-requirements/',
          },
          {
            title: 'What Will It Cost to Run?',
            description:
              'Real draw figures in watts, the monthly cost at typical rates, and the circuit advice that matters.',
            badge: 'Cost calculator → guide',
            url: '/treadmill-electricity-usage/',
          },
          {
            title: 'Which Treadmill Should I Buy?',
            description:
              'The routing guide that narrows the field by budget, room, stride and how you will actually use it.',
            badge: 'Selector → guide',
            url: '/home-treadmills/',
          },
        ],
      },
    ],
  },
];

export const SECTIONS_BY_SLUG = new Map(SECTIONS.map((section) => [section.slug, section]));

export function getSection(slug: string): Section {
  const section = SECTIONS_BY_SLUG.get(slug);
  if (!section) throw new Error(`Unknown section: ${slug}`);
  return section;
}

/** Total number of articles a hub links to, used in its standfirst. */
export function pageCount(section: Section): number {
  return section.groups.reduce((total, group) => total + group.pages.length, 0);
}

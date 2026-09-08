import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { draftRoutes } from './scripts/lib/pages.mjs';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// The section hubs of the site's information architecture, derived from the
// filesystem so this list cannot drift from src/data/sections.ts: every
// subdirectory of src/pages holds exactly one hub at its index.astro.
const SECTION_HUBS = readdirSync(fileURLToPath(new URL('./src/pages', import.meta.url)), {
  withFileTypes: true,
})
  .filter((entry) => entry.isDirectory())
  .map((entry) => `/${entry.name}`);

// Hubs that render with `noindex` because they have no destinations of their
// own yet. Kept out of the sitemap so the two signals agree.
const UNINDEXED_HUBS = ['/tools'];

// Editorial drafts awaiting verified product data render noindex and must stay
// out of the sitemap so the two signals agree.
const DRAFT_ROUTES = draftRoutes(fileURLToPath(new URL('./src/pages', import.meta.url)));

// Sitemap priority tiers, highest to lowest. A path's priority is the
// highest tier it appears in; anything not listed falls through to the
// DEFAULT_PRIORITY at the bottom of serialize().
const PRIORITY_TIERS = [
  {
    priority: 0.9,
    changefreq: 'weekly',
    paths: ['/best-of'],
  },
  {
    // Section hubs — the top level of the IA, one per topic cluster
    priority: 0.9,
    changefreq: 'weekly',
    paths: SECTION_HUBS,
  },
  {
    priority: 0.9,
    changefreq: 'monthly',
    paths: [
      '/best-treadmill-for-home-reviews',
      '/best-folding-treadmill-reviews',
      '/best-treadmill-under-1000-reviews',
    ],
  },
  {
    // Evergreen editorial guides
    priority: 0.8,
    changefreq: 'monthly',
    paths: [
      '/treadmill-reviews-2026',
      '/treadmill-buying-guide-2026',
      '/treadmill-buyers-guide',
    ],
  },
  {
    // Maintenance cluster pillar — hub of the ownership/maintenance topic cluster
    priority: 0.8,
    changefreq: 'monthly',
    paths: ['/treadmill-maintenance'],
  },
  {
    // Maintenance cluster spokes
    priority: 0.7,
    changefreq: 'monthly',
    paths: [
      '/treadmill-belt-lubrication',
      '/treadmill-belt-slipping',
      '/treadmill-troubleshooting',
      '/how-long-do-treadmills-last',
      '/how-often-to-lubricate-treadmill',
      '/how-tight-should-treadmill-belt-be',
      '/how-to-center-treadmill-belt',
      '/treadmill-on-carpet',
    ],
  },
  {
    // Fault-diagnosis spokes — hang off the troubleshooting guide
    priority: 0.7,
    changefreq: 'monthly',
    paths: [
      '/treadmill-belt-slows-down-when-i-step-on-it',
      '/treadmill-wont-turn-on',
      '/treadmill-turns-on-but-belt-wont-move',
      '/treadmill-squeaking-noise',
    ],
  },
  {
    // Specification and sizing explainers — spokes off the buying guides
    priority: 0.7,
    changefreq: 'monthly',
    paths: [
      '/treadmill-horsepower-guide',
      '/treadmill-belt-size-guide',
      '/treadmill-dimensions-space-requirements',
      '/treadmill-electricity-usage',
      '/treadmill-incline-percent-vs-degrees',
      '/treadmill-vs-elliptical',
      '/used-treadmill-buying-checklist',
    ],
  },
  {
    // Walking cluster pillar — hub of the walking/low-impact topic cluster
    priority: 0.8,
    changefreq: 'monthly',
    paths: ['/best-walking-treadmills'],
  },
  {
    // Walking cluster spokes
    priority: 0.7,
    changefreq: 'monthly',
    paths: [
      '/under-desk-treadmills',
      '/walking-pad-vs-treadmill',
      '/best-treadmills-for-seniors',
      '/quiet-treadmills',
      '/12-3-30-treadmill-workout',
    ],
  },
  {
    // Brand hubs and category/price roundups
    priority: 0.7,
    changefreq: 'monthly',
    paths: [
      '/nordictrack',
      '/proform-treadmill',
      '/sole-fitness',
      '/life-fitness',
      '/matrix-fitness',
      '/bowflex',
      '/best-incline-treadmills',
      '/commercial-treadmills',
      '/best-treadmills',
      '/best-folding-treadmills',
      '/folding-treadmills',
      '/treadmills-under-1500',
      '/treadmills-over-2500',
      '/home-treadmills',
      '/best-treadmills-for-home',
    ],
  },
  {
    // Individual model reviews
    priority: 0.6,
    changefreq: 'monthly',
    paths: [
      '/nordictrack-commercial-1750-treadmill',
      '/nordictrack-commercial-2450-treadmill',
      '/nordictrack-commercial-2950-treadmill',
      '/nordictrack-new-commercial-1750-treadmill',
      '/nordictrack-c-700-treadmill',
      '/nordictrack-c-990-treadmill',
      '/nordictrack-c-1650-treadmill',
      '/nordictrack-x22i-incline-trainer-treadmill',
      '/nordictrack-x9i-incline-trainer-treadmill',
      '/proform-pro-2000-treadmill',
      '/proform-power-995i-treadmill',
      '/proform-power-1295i-treadmill',
      '/sole-f63-treadmill',
      '/sole-f65-treadmill',
      '/life-fitness-t3-treadmill',
      '/life-fitness-platinum-club-series-treadmill',
      '/matrix-fitness-t7xe-treadmill',
      '/bowflex-max-trainer-m7',
      '/bowflex-max-trainer-m5',
    ],
  },
  {
    // Utility pages
    priority: 0.3,
    changefreq: 'yearly',
    paths: ['/contact-us'],
  },
];

const DEFAULT_PRIORITY = { priority: 0.5, changefreq: 'monthly' };

const priorityByPath = new Map(
  PRIORITY_TIERS.flatMap((tier) =>
    tier.paths.map((path) => [path, { priority: tier.priority, changefreq: tier.changefreq }])
  )
);

export default defineConfig({
  site: 'https://www.treadmillreviewsusa.com',
  // Every URL is canonically slash-terminated; internal links must match
  // (enforced by scripts/validate-links.mjs).
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      xslURL: '/sitemap.xsl',
      filter: (page) => {
        const path = new URL(page).pathname;
        return (
          !UNINDEXED_HUBS.some((hub) => path.replace(/\/$/, '') === hub) &&
          !DRAFT_ROUTES.includes(path)
        );
      },
      serialize(item) {
        const base = 'https://www.treadmillreviewsusa.com';
        const url = item.url.replace(/\/$/, '');
        const path = url === base ? '/' : url.slice(base.length);

        const { priority, changefreq } =
          path === '/' ? { priority: 1.0, changefreq: 'weekly' } : priorityByPath.get(path) ?? DEFAULT_PRIORITY;

        item.priority = priority;
        item.changefreq = changefreq;
        item.lastmod = new Date().toISOString();

        return item;
      },
    }),
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});

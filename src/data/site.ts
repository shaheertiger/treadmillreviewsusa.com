// Single source of truth for the site's identity and contact details. The
// Organization schema in SEO.astro uses them, and scripts/build-markdown.mjs reads
// them back from that schema for llms.txt and ai.txt, so the three always agree.
export const SITE_NAME = 'Treadmill Reviews USA';
export const SITE_URL = 'https://www.treadmillreviewsusa.com';
// The "General Questions" address on /contact-us/.
export const CONTACT_EMAIL = 'hello@treadmillreviewsusa.com';

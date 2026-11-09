import { readFileSync } from 'fs';
import { join } from 'path';
import { walkPages, isLandingPage, routeFor } from './lib/pages.mjs';

const PAGES_DIR = join(import.meta.dirname, '..', 'src', 'pages');

// The 13 structural elements every article page must contain, in page order.
// Each check gets the raw file contents and returns true when the element is present.
const CHECKS = [
  {
    name: 'Dark hero',
    test: (s) => s.includes('bg-gray-900 py-16 lg:py-24 relative overflow-hidden'),
  },
  {
    name: 'TrustBadge in hero',
    test: (s) => /<TrustBadge\s*\/>/.test(s),
  },
  {
    name: 'Byline strip',
    test: (s) =>
      s.includes('<!-- Author & Meta -->') &&
      s.includes('max-w-3xl mx-auto px-4 pt-12'),
  },
  {
    name: 'SocialProof in byline',
    test: (s) => /<SocialProof\s+users="[^"]+"\s*\/>/.test(s),
  },
  {
    name: 'Contents card ("In This Guide")',
    test: (s) =>
      s.includes('In This Guide') &&
      s.includes('<nav class="grid grid-cols-1 sm:grid-cols-2 gap-2">'),
  },
  {
    name: 'FAQ block',
    test: (s) =>
      s.includes('<div id="faq" class="scroll-mt-24">') &&
      s.includes('Frequently Asked Questions'),
  },
  {
    name: 'Common Mistakes (4 cards)',
    test: (s) => {
      // Count only the cards inside the Common Mistakes section: a page may
      // legitimately use a red callout elsewhere in the body.
      const heading = s.search(/<h2[^>]*>[^<]{0,120}?Common Mistakes/);
      if (heading === -1) return false;
      const next = s.slice(heading + 1).search(/<h2[\s>]/);
      const section = next === -1 ? s.slice(heading) : s.slice(heading, heading + 1 + next);
      return (
        section.includes('<div class="space-y-6 my-8">') &&
        (section.match(/bg-red-50 border border-red-100 rounded-2xl p-6/g) ?? []).length === 4
      );
    },
  },
  {
    name: 'Related Guides (3 cards)',
    test: (s) =>
      /<h2[^>]*>\s*Related[\s\S]{0,60}?Guides\s*<\/h2>/.test(s) &&
      s.includes('grid grid-cols-1 sm:grid-cols-3 gap-4'),
  },
  {
    name: 'Closing "The Bottom Line"',
    test: (s) =>
      s.includes('mt-16 bg-gray-900 text-white rounded-2xl p-8') &&
      s.includes('<h2 class="text-2xl font-black text-white mb-4">The Bottom Line</h2>'),
  },
  { name: 'jsonLd={schema} passed to Layout', test: (s) => s.includes('jsonLd={schema}') },
  { name: 'BreadcrumbList JSON-LD', test: (s) => s.includes('"BreadcrumbList"') },
  { name: 'FAQPage JSON-LD', test: (s) => s.includes('"FAQPage"') },
  { name: 'Article JSON-LD', test: (s) => /"@type":\s*"Article"/.test(s) },
];

// Pages generated from specs use the editorial template (data-template="editorial"): a white
// masthead, numbered product blocks and an FAQ accordion. They are held to the same structure
// under the new markup. Hand-written pages keep the original checks above.
const EDITORIAL_CHECKS = [
  { name: 'Editorial masthead (crumbs, title, dek)', test: (s) => s.includes('class="ed-crumbs"') && s.includes('<h1 class="ed-title">') && s.includes('class="ed-dek"') },
  { name: 'Byline with author link', test: (s) => s.includes('class="ed-byline"') && s.includes('rel="author"') },
  { name: 'Affiliate disclosure', test: (s) => s.includes('class="ed-disclosure"') },
  { name: 'Contents ("In this guide")', test: (s) => s.includes('class="ed-toc not-prose"') && s.includes('In this guide') },
  { name: 'FAQ block', test: (s) => s.includes('<section id="faq" class="ed-faq scroll-mt-24">') && s.includes('Frequently asked questions') && /<details[\s>]/.test(s) },
  {
    name: 'Common Mistakes (4 items)',
    test: (s) => {
      const at = s.indexOf('class="ed-mistakes not-prose"');
      if (at === -1) return false;
      const list = s.slice(at, s.indexOf('</ol>', at));
      return (list.match(/<li>/g) ?? []).length === 4;
    },
  },
  { name: 'Related reading (3+ cards)', test: (s) => (s.match(/class="card"/g) ?? []).length >= 3 },
  { name: 'Closing "The bottom line"', test: (s) => s.includes('class="ed-bottomline"') && s.includes('<h2>The bottom line</h2>') },
  { name: 'Why trust us + author card', test: (s) => s.includes('id="why-trust-us"') && s.includes('class="author-card"') },
  { name: 'jsonLd={schema} passed to Layout', test: (s) => s.includes('jsonLd={schema}') },
  { name: 'BreadcrumbList JSON-LD', test: (s) => s.includes('"BreadcrumbList"') },
  { name: 'FAQPage JSON-LD', test: (s) => s.includes('"FAQPage"') },
  { name: 'Article JSON-LD', test: (s) => /"@type":\s*"Article"/.test(s) },
];

const files = walkPages(PAGES_DIR).filter((f) => !isLandingPage(f));

let failed = 0;

console.log('Auditing article page format (%d legacy / %d editorial required elements)\n', CHECKS.length, EDITORIAL_CHECKS.length);

for (const file of files) {
  const contents = readFileSync(join(PAGES_DIR, file), 'utf-8');
  const checks = contents.includes('data-template="editorial"') ? EDITORIAL_CHECKS : CHECKS;
  const missing = checks.filter((check) => !check.test(contents)).map((c) => c.name);

  if (missing.length > 0) {
    failed += 1;
    console.log('FAIL  %s', routeFor(file));
    for (const name of missing) {
      console.log('        missing: %s', name);
    }
  } else {
    console.log('PASS  %s', routeFor(file));
  }
}

console.log('');

if (failed > 0) {
  console.error('Format audit failed: %d of %d pages are missing structural elements.', failed, files.length);
  process.exit(1);
} else {
  console.log('All %d article pages contain every required structural element.', files.length);
}

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const PAGES_DIR = join(import.meta.dirname, '..', 'src', 'pages');

// Landing/utility pages are not articles and are exempt from the article format.
const EXCLUDED_PAGES = ['index.astro', 'best-of.astro', 'contact-us.astro'];

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

const files = readdirSync(PAGES_DIR)
  .filter((f) => f.endsWith('.astro') && !EXCLUDED_PAGES.includes(f))
  .sort();

let failed = 0;

console.log('Auditing article page format (%d required elements)\n', CHECKS.length);

for (const file of files) {
  const contents = readFileSync(join(PAGES_DIR, file), 'utf-8');
  const missing = CHECKS.filter((check) => !check.test(contents)).map((c) => c.name);

  if (missing.length > 0) {
    failed += 1;
    console.log('FAIL  %s', file);
    for (const name of missing) {
      console.log('        missing: %s', name);
    }
  } else {
    console.log('PASS  %s', file);
  }
}

console.log('');

if (failed > 0) {
  console.error('Format audit failed: %d of %d pages are missing structural elements.', failed, files.length);
  process.exit(1);
} else {
  console.log('All %d article pages contain every required structural element.', files.length);
}

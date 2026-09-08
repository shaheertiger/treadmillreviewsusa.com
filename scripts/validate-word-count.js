import { readFileSync } from 'fs';
import { join } from 'path';
import { walkPages, isLandingPage, isDraft, routeFor } from './lib/pages.mjs';

const PAGES_DIR = join(import.meta.dirname, '..', 'src', 'pages');
const MIN_WORD_COUNT = 2500;
// Drafts are exempt from the published minimum because they are incomplete by
// definition, but they still have to be substantial — the exemption is not a
// route to a thin page going live the moment DATA_PENDING is removed.
const MIN_DRAFT_WORD_COUNT = 2000;

function countWords(filePath) {
  const content = readFileSync(filePath, 'utf-8');

  // Remove frontmatter (between --- delimiters)
  const withoutFrontmatter = content.replace(/^---[\s\S]*?---/, '');

  // Remove HTML/JSX tags
  const withoutTags = withoutFrontmatter.replace(/<[^>]*>/g, ' ');

  // Remove CSS class strings and inline styles
  const withoutStyles = withoutTags.replace(/class(Name)?="[^"]*"/g, ' ');

  // Remove JavaScript expressions like {variable}
  const withoutExpressions = withoutStyles.replace(/\{[^}]*\}/g, ' ');

  // Count remaining words
  const words = withoutExpressions
    .split(/\s+/)
    .filter((word) => word.length > 0 && /[a-zA-Z]/.test(word));

  return words.length;
}

const all = walkPages(PAGES_DIR).filter((f) => !isLandingPage(f));

// Editorial drafts are incomplete by definition and are noindex. The minimum
// applies again the moment DATA_PENDING is removed, which is when it matters.
const drafts = all.filter((f) => isDraft(PAGES_DIR, f));
const files = all.filter((f) => !isDraft(PAGES_DIR, f));

let hasFailures = false;

console.log(
  'Validating article word counts (published: %d words, drafts: %d)\n',
  MIN_WORD_COUNT,
  MIN_DRAFT_WORD_COUNT
);

for (const file of drafts) {
  const wordCount = countWords(join(PAGES_DIR, file));

  if (wordCount < MIN_DRAFT_WORD_COUNT) {
    hasFailures = true;
    console.log(
      'FAIL  %s — %d words (draft minimum %d, need %d more)',
      routeFor(file),
      wordCount,
      MIN_DRAFT_WORD_COUNT,
      MIN_DRAFT_WORD_COUNT - wordCount
    );
  } else {
    console.log('DRAFT %s — %d words', routeFor(file), wordCount);
  }
}

for (const file of files) {
  const wordCount = countWords(join(PAGES_DIR, file));

  if (wordCount < MIN_WORD_COUNT) {
    hasFailures = true;
    console.log('FAIL  %s — %d words (need %d more)', routeFor(file), wordCount, MIN_WORD_COUNT - wordCount);
  } else {
    console.log('PASS  %s — %d words', routeFor(file), wordCount);
  }
}

console.log('');

if (hasFailures) {
  console.error(
    'Word count validation failed. Published articles need %d words; drafts need %d.',
    MIN_WORD_COUNT,
    MIN_DRAFT_WORD_COUNT
  );
  process.exit(1);
} else {
  console.log('All %d published articles meet the minimum word count requirement.', files.length);
  if (drafts.length > 0) {
    console.log('All %d draft(s) meet the %d-word draft minimum.', drafts.length, MIN_DRAFT_WORD_COUNT);
  }
}

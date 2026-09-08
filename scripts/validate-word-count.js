import { readFileSync } from 'fs';
import { join } from 'path';
import { walkPages, isLandingPage, routeFor } from './lib/pages.mjs';

const PAGES_DIR = join(import.meta.dirname, '..', 'src', 'pages');
const MIN_WORD_COUNT = 2500;

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

const files = walkPages(PAGES_DIR).filter((f) => !isLandingPage(f));

let hasFailures = false;

console.log('Validating article word counts (minimum: %d words)\n', MIN_WORD_COUNT);

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
  console.error('Word count validation failed. All articles must have at least %d words.', MIN_WORD_COUNT);
  process.exit(1);
} else {
  console.log('All %d articles meet the minimum word count requirement.', files.length);
}

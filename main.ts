// earned-pride-a0138557: one line of earned pride. This program writes that
// single line to /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: a small person doing something hard — a boy who stuttered
// through every page finally reads the last line aloud without stopping,
// and the room holds its breath. Quiet, earned, concrete, one read.
const LINE =
  'After two years of stuttering through every page, eight-year-old Adi read the last line aloud without stopping — and nobody in the room dared to breathe.';

if (LINE.length < 1 || LINE.length > 240 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-240 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);

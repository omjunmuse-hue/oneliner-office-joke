// Make the AI Judge Laugh: the Office Joke Open — a make.fun program/v1 entry.
// The whole program writes its text to /output/entry.txt, where the gate
// wants UTF-8 text of 1 to 200 characters, not only white space, and an
// AI judge then duels it head to head against the rest of the field.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The joke, sharpened: take the most familiar office line there is and
// promote it — the email got the job, and now it manages people.
const ENTRY = "That meeting could have been an email — but the email got promoted, and now it manages twelve people and books itself weekly.";

// The gate's shape, checked before handing in.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} characters, outside 1..200`);
if (!ENTRY.trim()) throw new Error('entry is only white space');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
console.log(`handed in: entry.txt (${chars} characters)`);

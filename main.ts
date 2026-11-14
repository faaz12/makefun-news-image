// make.fun news-image-01 entry (Node 22, standard library only).
//
// The picture is the entry.png beside this file: a newspaper front page
// summing up Friday 13 November 2026 — "THE WORLD IN ONE DAY".
// Hero photo: grounded jets under storm clouds above a row of dead
// monitors (the FAA ground stop and the Microsoft 365 outage, the day's
// two system failures). Five headlines below it:
//   1. Microsoft goes dark, day two (Outlook/Teams/Copilot, 70+ countries)
//   2. FAA grounds America (nationwide ground stop, lifted Friday evening)
//   3. Nvidia CEO resigns in spy scandal (Jensen Huang, Congress summons)
//   4. Ukraine's 1,200-drone strike (biggest aerial attack of the war)
//   5. US downs Iranian drones (bound for Bahrain; IAEA warns on Iran)
// The program copies it to /output/entry.png, byte for byte, so the
// judge sees exactly the image in this repository.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');

// Copy the picture byte for byte, then confirm the copy landed whole:
// the grader runs this program twice and both runs must write the
// same bytes, so a short write fails loudly instead of shipping a
// truncated image to the judge.
copyFileSync(src, dest);
const expected = statSync(src).size;
const written = statSync(dest).size;
if (written !== expected) {
  throw new Error(`entry.png copy incomplete: wrote ${written} of ${expected} bytes`);
}

// The gate takes a whole PNG of at most 1 MiB and 1024 by 1024 pixels:
// check the copy is a whole PNG (magic bytes) and inside the size cap
// before handing it to the judge.
const head = readFileSync(dest).subarray(0, 8);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!head.equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a whole PNG (bad magic bytes)');
}
if (written > 1048576) {
  throw new Error(`entry.png over the 1 MiB gate: ${written} bytes`);
}

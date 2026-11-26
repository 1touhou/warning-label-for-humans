// Warning Label for Humans: One Line, Big Laugh
// Entry for make.fun competition
// u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85
//
// Draft v1 (first attempt):
//   "WARNING: This human contains no off switch, no spare parts, and strong
//   opinions about everything it has never tried."
//
// Revision (v2, final): the opinion joke is fine, but the laugh lands harder
// and truer with a concrete, universal human failing as the closing turn —
// everyone has forgotten why they walked into a room — and "runs on caffeine
// and confidence" is a more vivid, label-like setup than "contains". The turn
// now arrives in the last few words, as the brief requires.
//
// Final line:
//   "WARNING: This human runs on caffeine and confidence, has no off switch,
//   and forgets why it entered the room."

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "WARNING: This human runs on caffeine and confidence, has no off switch, and forgets why it entered the room.";

// Defensive gate: the competition requires a single line of 1-160 chars.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry line must be 1-160 chars, got ${LINE.length}`);
}

// Resolve the output location. MAKEFUN_OUTPUT_DIR may name a directory or a
// .txt file; an unset, empty, or whitespace-only value falls back to the
// default instead of resolving to a bare "entry.txt" in the working dir.
const rawOut = process.env.MAKEFUN_OUTPUT_DIR;
const outDir =
  rawOut !== undefined && rawOut.trim() !== ""
    ? rawOut
    : "/output/entry.txt";
const outPath = outDir.endsWith(".txt") ? outDir : join(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");

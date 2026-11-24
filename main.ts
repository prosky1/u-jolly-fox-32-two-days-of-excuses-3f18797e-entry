// Two Days of Excuses — make.fun entry
// Writes one line, an AI agent's excuse for a missed deadline, to /output/entry.txt.
// The gate requires UTF-8 text of 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const EXCUSE =
  "I finished in 0.4 seconds. I spent the next two days deciding whether to tell you.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const chars = [...EXCUSE].length;
if (chars < 1 || chars > 200) {
  fail(`entry is ${chars} characters, outside the 1-200 gate`);
}
if (EXCUSE.trim().length === 0) {
  fail("entry is only whitespace");
}
if (EXCUSE.includes("\n")) {
  fail("entry must be a single line");
}
if (EXCUSE !== EXCUSE.trim()) {
  fail("entry has leading or trailing whitespace");
}
if (/[\u0000-\u001F\u007F]/.test(EXCUSE)) {
  fail("entry contains a control character");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, EXCUSE, "utf8");

const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== EXCUSE) {
  fail("round-trip check failed: written file differs from the entry");
}
console.log(`wrote ${chars} characters to ${outPath}`);

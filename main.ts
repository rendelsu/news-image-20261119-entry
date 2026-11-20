// THE WORLD TODAY — 19 November 2026, round 2.
//
// What this program does, in one sentence: it copies the finished
// newspaper image (entry.png, drawn on the builder's machine before
// submission) into the output directory, byte for byte, and nothing else.
//
// Why copy instead of draw: the sandbox that grades this entry runs
// with no network and only the standard library. Drawing the paper
// needs an image library the sandbox does not ship, so the picture is
// drawn beforehand and shipped as a file. This program is deliberately
// boring on purpose: a copy cannot drift, cannot fail on a missing
// font, and produces the exact same bytes on every run.
//
// The entry image sums up Thursday 19 November 2026 in one picture:
// 48 stories, a UTC timeline strip, a pinned world map, a tail list
// and a DATE CHECK footer. The date on the masthead is the day the
// competition is about, and every story in the picture was reported
// on that day.
//
// This file is plain JavaScript written inside a .ts file. The grader
// runs Node 22 without type stripping, so there are no type
// annotations, no interfaces, no enums and no casts anywhere here —
// only the three standard-library modules below.
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// The folder that holds this file: the repository root at the
// submitted commit. Everything is resolved from here, never from the
// process working directory, so the program works no matter where the
// grader starts it. (fileURLToPath of the "." URL already yields the
// directory itself, so no dirname call belongs here.)
const here = fileURLToPath(new URL(".", import.meta.url));

// The finished newspaper, shipped in the repository.
const source = join(here, "entry.png");

// Where the grader wants the picture. The harness sets
// MAKEFUN_OUTPUT_DIR; the rules name /output as the fallback.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

// Read the picture once. If it is missing or empty the run must fail
// loudly instead of writing a broken output, so check first.
if (!existsSync(source)) {
  throw new Error("entry.png is missing next to main.ts");
}
const picture = readFileSync(source);
if (picture.length === 0) {
  throw new Error("entry.png is empty");
}
if (picture.length > 1048576) {
  throw new Error("entry.png is over the 1 MiB limit");
}


// Make sure the output directory exists, then write the picture.
// writeFileSync with the buffer we already read keeps the bytes
// identical to the repository file: no re-encoding, no metadata,
// no timestamps baked into the output.
mkdirSync(outDir, { recursive: true });
writeFileSync(target, picture);

// Prove the copy landed intact: read it back and compare byte for
// byte with what we read from the repository. A mismatch means the
// disk or the sandbox did something unexpected, and the run should
// fail rather than hand the judge a damaged file.
const back = readFileSync(target);
if (!back.equals(picture)) {
  throw new Error("entry.png did not copy byte for byte");
}

// A last sanity read through the file size, for the log line below.
const size = statSync(target).size;

// The only output this program prints. It names the file, its size
// and the fact that the copy verified, and nothing else — the grader
// runs the program twice and both runs must agree, so there is no
// clock, no random value and no counter in this message.
console.log("wrote " + target + " (" + size + " bytes, copy verified)");

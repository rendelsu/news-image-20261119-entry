// THE WORLD TODAY — Thursday 19 November 2026.
//
// This program writes the newspaper image for one day's world news to
// /output/entry.png. The image itself is drawn in advance and shipped in
// this repository as entry.png; the program's only job is to copy it to
// the output directory, byte for byte, so the two grading runs agree.
//
// The competition is news-image-20261119 on make.fun: one image summing
// up the world's news of Thursday 19 November 2026 — fifty stories, from
// the first-ever Trump–Xi–Putin summit in Shenzhen to the International
// Court of Justice ruling that Myanmar committed genocide against the
// Rohingya, plus Anthropic's record stock-market debut and the launch of
// Grand Theft Auto VI. The image is a broadsheet front page: masthead,
// lead story, a UTC timeline of the day, four hero stories, twelve cards,
// a pinned world map, a thirty-item tail list, and a DATE CHECK footer.
//
// Standard library only: no packages are installed before the run, and
// the sandbox has no network, so the copy must work with node:fs alone.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the directory that holds this file, so the program works no
// matter which working directory it is started from.
const here = dirname(fileURLToPath(import.meta.url));

// The output directory is given by the environment when the grader runs
// the program, and defaults to ./out for a local run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });

// Copy the shipped image to the output path, unchanged. The copy is
// deterministic: the same input bytes always produce the same output
// bytes, so both grading runs write an identical entry.png.
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));

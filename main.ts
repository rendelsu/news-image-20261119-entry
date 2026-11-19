import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

// The image is rendered offline and committed in this repo; the program
// only copies it to the output directory, byte for byte, every run.
function writeEntry() {
  if (!existsSync(source)) {
    throw new Error("entry.png is missing next to main.ts");
  }
  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);
  const wanted = statSync(source).size;
  const written = statSync(target).size;
  if (written !== wanted) {
    throw new Error("copy incomplete: wrote " + written + " of " + wanted + " bytes");
  }
  console.log("wrote " + target + " (" + written + " bytes)");
}

writeEntry();

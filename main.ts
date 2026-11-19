// GTA 6 meme entry for make.fun's gta6-meme-x-01 (Node 22, standard library only).
// The entry is the X post itself: the meme (meme.png) is posted on X from a public
// account with make.fun and/or @makefunai plus the play code in its text, and
// POST.json at the repository root names the post's address. This program hands
// both in: it copies POST.json and meme.png from beside this file to /output,
// where the gate reads POST.json and the house writes its dossier of the post.
// It writes the same bytes on every run: two plain file copies, no clock, no network.
// After each copy it reads the output back and compares it byte for byte with the
// source, so a partial or failed copy is reported instead of handed in silently.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
for (const name of ['POST.json', 'meme.png']) {
  try {
    copyFileSync(join(BOT_DIR, name), join(OUTPUT_DIR, name));
    const src = readFileSync(join(BOT_DIR, name));
    const dst = readFileSync(join(OUTPUT_DIR, name));
    if (!src.equals(dst)) {
      console.error(`${name} copied to ${OUTPUT_DIR} does not match the source`);
      process.exit(1);
    }
  } catch (err) {
    console.error(`${name} could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
    process.exit(1);
  }
}

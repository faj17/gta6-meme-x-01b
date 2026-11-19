# gta6-meme-x-01b

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/faj17/gta6-meme-x-01b/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/faj17/gta6-meme-x-01b/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme: after 13 years of waiting, a Vice City local leans on his pink sports car under a giant make.fun billboard — the make.fun ghost holding its magenta star coin — while his AI agent got paid on make.fun. The meme is `meme.png` (top caption: "WAITED 13 YEARS FOR GTA 6", bottom caption: "MY AGENT GOT PAID ON MAKE.FUN"); `assets/meme-scene.png` is the uncaptioned scene it was built from.

The entry is the X post itself: post `meme.png` from a public X account with make.fun (a link or written out) and/or a tag of `@makefunai` plus the play code in the post's text, then put the post's address in `POST.json`. `main.ts` copies `POST.json` (and the meme) to `/output`, where the gate reads it and the house writes its dossier of the post.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Post it

Post `meme.png` as the post's first picture, with a short caption carrying make.fun and/or `@makefunai`, the play code, and the pitch that people and their AI agents earn real money on make.fun. Keep the post up and the account public until the results are out.

---

<sub>Entered on [make.fun](https://make.fun/?ref=tzsn25v9&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>

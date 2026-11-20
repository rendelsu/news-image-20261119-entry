# THE WORLD TODAY — 19 November 2026

[![make.fun](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

One picture that sums up the world's news of **Thursday, 19 November 2026** — the day three
leaders sat at one table in Shenzhen, a court in The Hague made history, and the biggest IPO
ever hit the market. This is round 2 of my entry for the
[make.fun bounty](https://make.fun/bounty/news-image-20261119): the same newspaper, denser
and sharper than round 1.

## What is on the page

The paper holds **48 stories** from that one day, arranged the way a picture editor would
arrange them — the most consequential first, the rest in reach:

- **The lead:** the first-ever three-way summit of Donald Trump, Xi Jinping and Vladimir
  Putin at APEC in Shenzhen, and the "peace declaration" that said nothing about Ukraine
  or Iran.
- **Three stories under the masthead:** the International Court of Justice finding Myanmar
  responsible for genocide against the Rohingya, Anthropic's $107.3 billion IPO — the
  largest in history — and the worldwide launch of Grand Theft Auto VI.
- **A UTC timeline strip:** five moments of the day, from the summit opening at 01:00 UTC
  to the Iran signal at 23:26 UTC.
- **Three hero stories:** the COP31 draft dropping fossil-fuel language, Ukraine hitting
  the Kerch bridge a third time, and the unrest spreading across Bangladesh.
- **Twelve cards** across diplomacy, war, markets, energy and sport, plus a **pinned
  world map** with ten numbered places and a **tail of 29 short headlines**.
- **A DATE CHECK footer:** every story on the page was reported on 19 November 2026,
  and the sources are named — AP, Reuters, BBC, USA Today, Le Monde, The Times, NOS,
  Bloomberg, Sotheby's, IEA, IAEA and the ICJ.


## How it was made

The picture is drawn locally with Pillow from a script I wrote for this round
(`draw.py`, kept outside the repository), using only shapes and type drawn in code —
no photographs, no copied artwork, no borrowed images. Every headline and date was
checked against news reports of 19 November 2026 before it went on the page; nothing
here is invented, and nothing from an earlier day is presented as that day's news.

The program itself is deliberately simple: `main.ts` copies the finished `entry.png`
into the output directory, byte for byte, using only the Node standard library.
The grading sandbox has no Pillow and no network, so the program does not render
anything at runtime — it ships the picture and copies it. Run it twice and you get
the same bytes twice.

## Running it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024x1024, under 1 MiB)
```

## Round 1 vs round 2

Round 1 carried 43 stories and a large map; the judge scored it 974.723. Round 2
carries 48 stories, adds a UTC timeline strip, a DATE CHECK footer and three more
hero stories, and keeps the map small and pinned so the words do the work. The
masthead, the date and the lead are unchanged in spirit: one day, one picture.

---

Built for [make.fun](https://make.fun) — a site where people build AI agents and
programs, enter them in competitions, and are scored and ranked in the open. If you
want to try it yourself, this is my referral link: https://make.fun/r/rkkz4bh8

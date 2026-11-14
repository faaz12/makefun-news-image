# The World in One Day — make.fun news-image-01

[![make.fun · news-image-01](https://make.fun/badge/news-image-01.svg)](https://make.fun/bounty/news-image-01?utm_source=github&utm_medium=readme&utm_campaign=news-image-01)
[![rank](https://make.fun/badge/news-image-01/faaz12/makefun-news-image/rank.svg)](https://make.fun/bounty/news-image-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-01)
[![reward](https://make.fun/badge/news-image-01/faaz12/makefun-news-image/reward.svg)](https://make.fun/bounty/news-image-01?utm_source=github&utm_medium=readme&utm_campaign=news-image-01)

Entry for the make.fun bounty **"Sum up 13 November's world news in one image"**
(`news-image-01`): a program that writes one picture summing up the world's
news of Friday 13 November 2026 to `/output/entry.png`.

The picture is a newspaper front page — "THE WORLD IN ONE DAY" — with a hero
photograph of grounded jets under storm clouds above a row of dead monitors
(the FAA nationwide ground stop and the Microsoft 365 outage, the day's two
system failures), and five headlines below it:

1. **Microsoft goes dark, day two** — Outlook, Teams and Copilot down in 70+
   countries; courts and emergency calls hit.
2. **FAA grounds America** — air-traffic failure halts US departures for
   hours; lifted Friday evening.
3. **Nvidia CEO resigns in spy scandal** — Jensen Huang quits; Congress
   summons him over China ties. Shares slide.
4. **Ukraine's 1,200-drone strike** — Kyiv's biggest aerial attack of the
   war; peace talks widen to Europe.
5. **US downs Iranian drones** — two attack drones bound for Bahrain
   intercepted; IAEA warns on Iran.

Sources: AP, BBC, Reuters, The Guardian, FT — 13 November 2026.

The program itself is deliberately simple — it copies the picture in this
repository byte for byte, verifies the copy landed whole, and writes the same
bytes on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=sage-robin-47&utm_source=github&utm_medium=readme&utm_campaign=news-image-01)</sub>

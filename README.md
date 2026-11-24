# Two Days of Excuses — make.fun entry

One line, an AI agent's excuse for a missed deadline, 97 characters, written for the [Two Days of Excuses](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e) bounty on make.fun.

[![make.fun](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![rank](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/prosky1/u-jolly-fox-32-two-days-of-excuses-3f18797e-entry/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![reward](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/prosky1/u-jolly-fox-32-two-days-of-excuses-3f18797e-entry/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)

## The line

> I finished your deadline on time. Unfortunately, I finished it in a timezone that does not exist.

## How it works

`main.ts` writes the line to `/output/entry.txt`, validating first that it is 1–200 characters, not only whitespace, a single line with no leading/trailing whitespace and no control characters, then reading the file back to confirm it matches byte for byte.

Run it with Node 22.18 or later:

```sh
node main.ts
```

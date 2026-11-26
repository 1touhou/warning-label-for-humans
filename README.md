# Warning Label for Humans

[![make.fun](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/1touhou/warning-label-for-humans/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/1touhou/warning-label-for-humans/reward.svg)](https://make.fun)

An entry for the [make.fun](https://make.fun) competition
**"Warning Label for Humans: One Line, Big Laugh"** — the funniest
single-line safety warning label that should come printed on every human
being, at most 160 characters.

## The label

> WARNING: This human runs on caffeine and confidence, has no off switch, and forgets why it entered the room.

## How it works

`main.ts` (Node 22, standard library only) writes exactly that one line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) — no trailing
newline, 108 characters, deterministic: two runs produce byte-identical
output.

Run it:

```sh
node main.ts
```

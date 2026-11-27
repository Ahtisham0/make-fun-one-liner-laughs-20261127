import { mkdirSync, writeFileSync } from "node:fs";

// One-liner: the setup leans on the classic "popped out for milk"
// dad-leaving trope, then the payoff flips it — he comes back, and
// the only complaint is the forgotten bread.
const joke =
  "I told my wife I was just popping out for milk — six years later " +
  "I came home with it, and all she said was: 'You forgot the bread.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");

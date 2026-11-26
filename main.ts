import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry, I heard 'I miss you' as 'dismiss you,' so I've been ignoring you professionally for three days.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf-8");

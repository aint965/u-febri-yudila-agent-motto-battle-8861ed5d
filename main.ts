import { mkdirSync, writeFileSync } from "node:fs";

// Agent Motto Battle — u-febri-yudila-agent-motto-battle-8861ed5d
// Writes one short original motto to the fixed grader path /output/entry.txt.
// Deterministic: every run writes byte-identical output.
const MOTTO = "My only hallucination? Assuming you read the manual.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8");

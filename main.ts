import { mkdirSync, writeFileSync } from "node:fs";

// Agent Motto Battle — u-febri-yudila-agent-motto-battle-8861ed5d
// Writes one short original motto to the fixed grader path /output/entry.txt.
// Deterministic: every run writes byte-identical output.
const MOTTO = "My only hallucination? Assuming you read the manual.";

// The gate scorer requires UTF-8 text of 1 to 200 characters, not only
// whitespace, on a single line. Validate before writing so a bad motto can
// never silently produce an invalid entry file.
function validateMotto(motto: string): void {
  if (motto.length < 1 || motto.length > 200) {
    throw new Error(
      `Invalid motto: length must be 1-200 characters, got ${motto.length}`,
    );
  }
  if (motto.trim().length === 0) {
    throw new Error("Invalid motto: must not be only whitespace");
  }
  if (motto.includes("\n") || motto.includes("\r")) {
    throw new Error("Invalid motto: must be a single line");
  }
}

try {
  validateMotto(MOTTO);
} catch (err) {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8");

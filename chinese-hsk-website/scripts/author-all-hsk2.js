import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { units1to5 } from "./data/hsk2-units-1-5.js";
import { units6to10 } from "./data/hsk2-units-6-10.js";
import { units11to15 } from "./data/hsk2-units-11-15.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const destDir = path.join(projectRoot, "source-data", "conversations", "hsk-2");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

export const allHsk2Lessons = [
  ...units1to5,
  ...units6to10,
  ...units11to15,
];

console.log(`Starting HSK 2 authoring pipeline for ${allHsk2Lessons.length} units...`);

let hasError = false;

for (const lesson of allHsk2Lessons) {
  // Validate schema
  if (lesson.hskLevel !== 2) {
    console.error(`Unit ${lesson.unitId} has invalid hskLevel: ${lesson.hskLevel}`);
    hasError = true;
  }
  if (!lesson.title?.zh || !lesson.title?.en || !lesson.title?.ar) {
    console.error(`Unit ${lesson.unitId} is missing multilingual title fields.`);
    hasError = true;
  }
  if (!Array.isArray(lesson.dialogue) || lesson.dialogue.length === 0) {
    console.error(`Unit ${lesson.unitId} has no dialogue lines.`);
    hasError = true;
  }
  for (const turn of lesson.dialogue) {
    if (!turn.hanzi || !turn.pinyin || !turn.translation?.en || !turn.translation?.ar) {
      console.error(`Unit ${lesson.unitId} turn ${turn.id} is missing multilingual text.`);
      hasError = true;
    }
  }
  if (!Array.isArray(lesson.grammarNotes) || lesson.grammarNotes.length === 0) {
    console.error(`Unit ${lesson.unitId} has no grammar notes.`);
    hasError = true;
  }
  if (!Array.isArray(lesson.comprehensionQuestions) || lesson.comprehensionQuestions.length === 0) {
    console.error(`Unit ${lesson.unitId} has no comprehension questions.`);
    hasError = true;
  }

  const targetFile = path.join(destDir, `unit-${lesson.unitId}.json`);
  fs.writeFileSync(targetFile, JSON.stringify(lesson, null, 2), "utf8");
  console.log(`✓ Saved Unit ${lesson.unitId} (${lesson.dialogue.length} dialogue turns) -> unit-${lesson.unitId}.json`);
}

if (hasError) {
  console.error("❌ Validation errors found during authoring.");
  process.exit(1);
} else {
  console.log(`✨ All ${allHsk2Lessons.length} HSK 2 units successfully validated and saved to ${destDir}!`);
}

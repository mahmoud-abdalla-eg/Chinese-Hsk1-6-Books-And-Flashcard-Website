import fs from "node:fs";
import path from "node:path";
import { EXPECTED_HSK_COUNTS } from "../lib/data/schema.js";

const expected = EXPECTED_HSK_COUNTS;
const root = process.cwd();

function readWords(level) {
  return JSON.parse(
    fs.readFileSync(
      path.join(root, "source-data", "hsk", `hsk-${level}.json`),
      "utf8",
    ),
  );
}

function audioExists(audioPath) {
  if (!audioPath) return false;
  const normalized = audioPath.startsWith("/") ? audioPath.slice(1) : audioPath;
  return fs.existsSync(
    path.join(root, "public", normalized.replace(/^public[/]/, "")),
  );
}

function isGeneratedPlaceholder(hanzi) {
  return hanzi?.startsWith("我今天学习“") && hanzi.endsWith("”这个词。");
}

function validateLevel(level) {
  const words = readWords(level);
  const duplicateMap = new Map();
  const duplicateIds = new Map();
  const missingByField = new Map();
  let placeholderExamples = 0;
  let audioReferences = 0;
  let brokenAudioReferences = 0;

  for (const word of words) {
    duplicateMap.set(word.hanzi, (duplicateMap.get(word.hanzi) || 0) + 1);
    duplicateIds.set(word.id, (duplicateIds.get(word.id) || 0) + 1);
    if (isGeneratedPlaceholder(word.example?.hanzi)) placeholderExamples += 1;

    const requiredFields = [
      ["id", word.id],
      ["hanzi", word.hanzi],
      ["pinyin", word.pinyin],
      ["english translation", word.meaning?.en],
      ["arabic translation", word.meaning?.ar],
      ["example sentence", word.example?.hanzi],
      ["example pinyin", word.example?.pinyin],
      ["example english", word.example?.en],
      ["example arabic", word.example?.ar],
    ];
    for (const [field, value] of requiredFields) {
      if (!value) {
        missingByField.set(field, (missingByField.get(field) || 0) + 1);
      }
    }

    for (const audioPath of [word.audio?.word, word.audio?.example]) {
      if (!audioPath) continue;
      audioReferences += 1;
      if (!audioExists(audioPath)) brokenAudioReferences += 1;
    }
  }

  const duplicateWords = [...duplicateMap.entries()]
    .filter(([, count]) => count > 1)
    .map(([hanzi]) => hanzi);

  return {
    level,
    expectedCount: expected[level],
    actualCount: words.length,
    duplicateIds: [...duplicateIds.entries()]
      .filter(([, count]) => count > 1)
      .map(([id]) => id),
    duplicateWords,
    missingByField: Object.fromEntries(missingByField),
    placeholderExamples,
    audioReferences,
    expectedAudioReferences: words.length * 2,
    brokenAudioReferences,
  };
}

let hasWarnings = false;
for (let level = 1; level <= 6; level += 1) {
  const result = validateLevel(level);
  const warnings = [];
  if (result.actualCount !== result.expectedCount)
    warnings.push(
      `expected ${result.expectedCount}, found ${result.actualCount}`,
    );
  if (result.duplicateIds.length)
    warnings.push(`duplicate IDs: ${result.duplicateIds.join(", ")}`);
  if (result.duplicateWords.length)
    warnings.push(`duplicates: ${result.duplicateWords.join(", ")}`);
  const missingFields = Object.entries(result.missingByField).map(
    ([field, count]) => `${count} missing ${field}`,
  );
  if (missingFields.length) warnings.push(missingFields.join(", "));
  if (result.placeholderExamples)
    warnings.push(
      `${result.placeholderExamples} synthetic placeholder examples need replacement`,
    );
  if (result.brokenAudioReferences)
    warnings.push(
      `${result.brokenAudioReferences} referenced audio files do not exist`,
    );
  if (warnings.length) {
    hasWarnings = true;
    console.warn(`HSK ${result.level} warnings: ${warnings.join("; ")}`);
  } else {
    console.log(`HSK ${result.level} text data OK: ${result.actualCount} words`);
  }
  console.log(
    `HSK ${result.level} audio references: ${result.audioReferences}/${result.expectedAudioReferences}; missing references are optional`,
  );
}
if (hasWarnings)
  console.warn(
    "Validation completed with warnings. See source-data/review-queues for content needing review.",
  );

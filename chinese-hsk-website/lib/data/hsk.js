import fs from "node:fs";
import path from "node:path";
import { EXPECTED_HSK_COUNTS, HSK_LEVELS, UNIT_SIZE } from "./schema";

const root = process.cwd();

const hskJsonCache = new Map();

function readHskJson(level) {
  if (hskJsonCache.has(level)) {
    return hskJsonCache.get(level);
  }
  try {
    const direct = path.join(root, "source-data", "hsk", `hsk-${level}.json`);
    if (fs.existsSync(direct)) {
      const data = JSON.parse(fs.readFileSync(direct, "utf8"));
      hskJsonCache.set(level, data);
      return data;
    }
    const inSubdir = path.join(
      root,
      "chinese-hsk-website",
      "source-data",
      "hsk",
      `hsk-${level}.json`,
    );
    if (fs.existsSync(inSubdir)) {
      const data = JSON.parse(fs.readFileSync(inSubdir, "utf8"));
      hskJsonCache.set(level, data);
      return data;
    }
  } catch (err) {
    console.error(`Error parsing HSK ${level} JSON:`, err);
  }
  return [];
}

export function getHskWords(level) {
  const numericLevel = Number(level);
  if (!HSK_LEVELS.includes(numericLevel)) return [];
  return readHskJson(numericLevel);
}

export function getAllHskWords() {
  return HSK_LEVELS.flatMap((level) => getHskWords(level));
}

export function getHskSummary() {
  return HSK_LEVELS.map((level) => {
    const words = getHskWords(level);
    return {
      level,
      wordCount: words.length,
      expectedCount: EXPECTED_HSK_COUNTS[level],
      unitCount: Math.ceil(words.length / UNIT_SIZE),
      conversationCount: Math.ceil(words.length / UNIT_SIZE),
      progress: 0,
    };
  });
}

export function getUnitsForLevel(level) {
  const words = getHskWords(level);
  const units = [];
  for (let i = 0; i < words.length; i += UNIT_SIZE) {
    const unitWords = words.slice(i, i + UNIT_SIZE);
    units.push({
      id: units.length + 1,
      level: Number(level),
      start: i + 1,
      end: i + unitWords.length,
      words: unitWords,
    });
  }
  return units;
}

export function getUnitForLevel(level, unitId) {
  return getUnitsForLevel(level).find(
    (unit) => Number(unit.id) === Number(unitId),
  );
}

export function getWordById(level, wordId) {
  return getHskWords(level).find((word) => word.id === wordId);
}

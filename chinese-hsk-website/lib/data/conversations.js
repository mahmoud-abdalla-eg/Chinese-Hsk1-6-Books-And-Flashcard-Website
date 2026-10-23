import fs from "node:fs";
import path from "node:path";
import { HSK_LEVELS } from "./schema";

const root = process.cwd();

const conversationsCache = new Map();

function readConversationFile(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (err) {
    console.error(`Error reading conversation file ${file}:`, err);
    return null;
  }
}

export function getConversationsForLevel(level) {
  const numericLevel = Number(level);
  if (!HSK_LEVELS.includes(numericLevel)) return [];
  if (conversationsCache.has(numericLevel)) {
    return conversationsCache.get(numericLevel);
  }
  let dir = path.join(
    root,
    "source-data",
    "conversations",
    `hsk-${numericLevel}`,
  );
  if (!fs.existsSync(dir)) {
    const inSubdir = path.join(
      root,
      "chinese-hsk-website",
      "source-data",
      "conversations",
      `hsk-${numericLevel}`,
    );
    if (fs.existsSync(inSubdir)) {
      dir = inSubdir;
    } else {
      return [];
    }
  }
  const result = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => readConversationFile(path.join(dir, file)))
    .filter(Boolean);
  conversationsCache.set(numericLevel, result);
  return result;
}

export function getConversationForUnit(level, unitId) {
  return getConversationsForLevel(level).find(
    (conversation) => Number(conversation.unitId) === Number(unitId),
  );
}

export function getAllConversations() {
  return HSK_LEVELS.flatMap((level) => getConversationsForLevel(level));
}

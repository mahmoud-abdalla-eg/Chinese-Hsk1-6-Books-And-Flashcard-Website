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

function getJsonFilesRecursively(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getJsonFilesRecursively(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      results.push(fullPath);
    }
  }
  return results;
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
  const result = getJsonFilesRecursively(dir)
    .map((file) => readConversationFile(file))
    .filter(Boolean)
    .map((item) => ({
      ...item,
      curriculum:
        item.curriculum ||
        (item.id && item.id.includes("hsk3") ? "hsk3" : "standard"),
    }))
    .sort((a, b) => {
      // Sort by unitId, then standard before hsk3
      if (a.unitId !== b.unitId) {
        return Number(a.unitId || 0) - Number(b.unitId || 0);
      }
      return (a.curriculum || "").localeCompare(b.curriculum || "");
    });

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

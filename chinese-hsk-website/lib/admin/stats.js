import { getManagedHskSummary } from "@/lib/admin/course-words";
import { getGrammarLevels, getGrammarPath } from "@/lib/data/grammar";
import { getMongoDatabase } from "@/lib/db/mongodb";
import {
  buildCoverageReport,
  validateAllLevels,
} from "@/lib/validation/hsk-validation";

export async function getAdminDashboardStats() {
  const [database, course, validation] = await Promise.all([
    getDatabaseStats(),
    getCourseStats(),
    getValidationStats(),
  ]);
  return { database, course, validation };
}

async function getDatabaseStats() {
  try {
    const db = await getMongoDatabase();
    const [users, progressRecords, admins, recentProgress] = await Promise.all([
      db.collection("users").countDocuments(),
      db.collection("user_progress").countDocuments(),
      db.collection("admins").countDocuments(),
      db
        .collection("user_progress")
        .find({}, { projection: { _id: 0, userId: 1, updatedAt: 1 } })
        .sort({ updatedAt: -1 })
        .limit(5)
        .toArray(),
    ]);
    return {
      ok: true,
      users,
      admins,
      progressRecords,
      recentProgress: recentProgress.map((item) => ({
        userId: item.userId,
        updatedAt: item.updatedAt?.toISOString?.() || String(item.updatedAt),
      })),
    };
  } catch {
    return {
      ok: false,
      users: 0,
      admins: 0,
      progressRecords: 0,
      recentProgress: [],
    };
  }
}

async function getCourseStats() {
  const hsk = await getManagedHskSummary();
  const grammar = getGrammarPath();
  const grammarLevels = getGrammarLevels();
  return {
    words: hsk.reduce((sum, level) => sum + level.wordCount, 0),
    vocabularyLevels: hsk.length,
    vocabularyUnits: hsk.reduce((sum, level) => sum + level.unitCount, 0),
    grammarCards: grammar.length,
    grammarLevels: grammarLevels.length,
  };
}

function getValidationStats() {
  const validations = validateAllLevels();
  const coverage = buildCoverageReport();
  return {
    missingFields: validations.reduce(
      (sum, level) => sum + level.missingFields.length,
      0,
    ),
    duplicateWords: validations.reduce(
      (sum, level) => sum + level.duplicateWords.length,
      0,
    ),
    uncoveredWords: coverage.levels.reduce(
      (sum, level) => sum + level.uncoveredWords.length,
      0,
    ),
  };
}

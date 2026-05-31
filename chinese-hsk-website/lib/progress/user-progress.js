import { getMongoDatabase } from "@/lib/db/mongodb";
import { sanitizeProgress } from "@/lib/progress/storage";

const collectionName = "user_progress";

export async function getUserProgress(userId) {
  if (!isValidUserId(userId)) return null;
  const db = await getMongoDatabase();
  const record = await db
    .collection(collectionName)
    .findOne({ userId }, { projection: { _id: 0 } });
  return record || null;
}

export async function saveUserProgress(userId, progress) {
  if (!isValidUserId(userId)) {
    throw new Error("Invalid user id.");
  }
  const db = await getMongoDatabase();
  const now = new Date();
  const sanitized = sanitizeProgress(progress);
  await db.collection(collectionName).updateOne(
    { userId },
    {
      $set: {
        progress: sanitized,
        updatedAt: now,
      },
      $setOnInsert: {
        userId,
        createdAt: now,
      },
    },
    { upsert: true },
  );
  return {
    userId,
    progress: sanitized,
    updatedAt: now.toISOString(),
  };
}

function isValidUserId(userId) {
  return typeof userId === "string" && /^[a-zA-Z0-9_-]{12,80}$/.test(userId);
}

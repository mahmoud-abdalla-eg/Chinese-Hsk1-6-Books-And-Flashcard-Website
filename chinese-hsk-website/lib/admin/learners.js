import { ObjectId } from "mongodb";
import { getMongoDatabase } from "@/lib/db/mongodb";

export async function getLearners() {
  const db = await getMongoDatabase();
  const [users, progressRecords] = await Promise.all([
    db
      .collection("users")
      .find({}, { projection: { passwordHash: 0 } })
      .sort({ createdAt: -1 })
      .toArray(),
    db.collection("user_progress").find({}).toArray(),
  ]);
  const progressByUser = new Map(
    progressRecords.map((record) => [record.userId, record]),
  );
  return users.map((user) => {
    const progress = progressByUser.get(String(user._id))?.progress || {};
    return {
      id: String(user._id),
      name: user.name || "",
      email: user.email || "",
      createdAt: user.createdAt?.toISOString?.() || "",
      updatedAt: user.updatedAt?.toISOString?.() || "",
      learnedWords: progress.learnedWords?.length || 0,
      hardWords: progress.hardWords?.length || 0,
      reviews: progress.reviewHistory?.length || 0,
      completedUnits: progress.completedUnits?.length || 0,
      lastStudiedDate: progress.lastStudiedDate || "",
    };
  });
}

export async function getLearnerExport(userId) {
  if (!ObjectId.isValid(userId)) throw new Error("Invalid learner id.");
  const db = await getMongoDatabase();
  const [user, progress] = await Promise.all([
    db
      .collection("users")
      .findOne(
        { _id: new ObjectId(userId) },
        { projection: { passwordHash: 0 } },
      ),
    db.collection("user_progress").findOne({ userId }),
  ]);
  if (!user) throw new Error("Learner not found.");
  return {
    user: { ...user, _id: String(user._id) },
    progress: progress || null,
  };
}

export async function resetLearnerProgress(userId) {
  if (!ObjectId.isValid(userId)) throw new Error("Invalid learner id.");
  const db = await getMongoDatabase();
  await db.collection("user_progress").deleteOne({ userId });
  return true;
}

export async function deleteLearner(userId) {
  if (!ObjectId.isValid(userId)) throw new Error("Invalid learner id.");
  const db = await getMongoDatabase();
  await Promise.all([
    db.collection("users").deleteOne({ _id: new ObjectId(userId) }),
    db.collection("user_progress").deleteOne({ userId }),
  ]);
  return true;
}

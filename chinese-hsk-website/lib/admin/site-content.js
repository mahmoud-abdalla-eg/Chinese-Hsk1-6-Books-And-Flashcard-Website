import { ObjectId } from "mongodb";
import { unstable_cache } from "next/cache";
import { getMongoDatabase } from "@/lib/db/mongodb";

const contentCollection = "site_content";
const PUBLIC_CACHE_SECONDS = 300;
const defaults = [
  {
    key: "home.hero.title",
    label: "Homepage hero title",
    value: "Learn Chinese inside conversations that feel alive.",
  },
  {
    key: "home.hero.subtitle",
    label: "Homepage hero subtitle",
    value:
      "A multilingual HSK 1-6 learning studio for vocabulary, long dialogue, flashcards, listening, grammar, and saved progress.",
  },
  {
    key: "home.cta.primary",
    label: "Homepage primary CTA",
    value: "Start HSK 1",
  },
];

const contentMigrations = [
  {
    key: "home.hero.subtitle",
    from: "A multilingual HSK 1-5 learning studio for vocabulary, long dialogue, flashcards, listening, shadowing, pronunciation recording, and saved progress.",
    to: "A multilingual HSK 1-6 learning studio for vocabulary, long dialogue, flashcards, listening, grammar, and saved progress.",
  },
];

export const getSiteContentMap = unstable_cache(
  async () => getSiteContentMapUncached(),
  ["site-content-map"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

async function getSiteContentMapUncached() {
  try {
    await ensureSiteContentSeeded();
    const db = await getMongoDatabase();
    const rows = await db.collection(contentCollection).find({}).toArray();
    return Object.fromEntries(rows.map((row) => [row.key, row.value]));
  } catch {
    return Object.fromEntries(defaults.map((row) => [row.key, row.value]));
  }
}

export async function getSiteContentRows() {
  await ensureSiteContentSeeded();
  const db = await getMongoDatabase();
  const rows = await db
    .collection(contentCollection)
    .find({})
    .sort({ key: 1 })
    .toArray();
  return rows.map((row) => ({
    mongoId: String(row._id),
    key: row.key,
    label: row.label || row.key,
    value: row.value || "",
  }));
}

export async function upsertSiteContent(payload) {
  const row = {
    key: String(payload.key || "").trim(),
    label: String(payload.label || payload.key || "").trim(),
    value: String(payload.value || "").trim(),
  };
  if (!row.key) throw new Error("Content key is required.");
  const db = await getMongoDatabase();
  const result = await db.collection(contentCollection).findOneAndUpdate(
    { key: row.key },
    {
      $set: { ...row, updatedAt: new Date() },
      $setOnInsert: { createdAt: new Date() },
    },
    { upsert: true, returnDocument: "after" },
  );
  return {
    mongoId: String(result._id),
    key: result.key,
    label: result.label,
    value: result.value,
  };
}

export async function deleteSiteContent(contentId) {
  if (!ObjectId.isValid(contentId)) return false;
  const db = await getMongoDatabase();
  const result = await db
    .collection(contentCollection)
    .deleteOne({ _id: new ObjectId(contentId) });
  return result.deletedCount > 0;
}

async function ensureSiteContentSeeded() {
  const db = await getMongoDatabase();
  await db.collection(contentCollection).bulkWrite(
    defaults.map((row) => ({
      updateOne: {
        filter: { key: row.key },
        update: {
          $setOnInsert: {
            ...row,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        },
        upsert: true,
      },
    })),
  );
  await Promise.all(
    contentMigrations.map((migration) =>
      db.collection(contentCollection).updateOne(
        {
          key: migration.key,
          value: migration.from,
        },
        {
          $set: {
            value: migration.to,
            updatedAt: new Date(),
          },
        },
      ),
    ),
  );
}

import { ObjectId } from "mongodb";
import { getGrammarPath } from "@/lib/data/grammar";
import { getMongoDatabase } from "@/lib/db/mongodb";

const grammarCollection = "course_grammar";
const grammarUnitsCollection = "course_grammar_units";
const stateCollection = "course_data_state";
const GRAMMAR_UNIT_SIZE = 12;
const GRAMMAR_SOURCE_VERSION = "hsk-1-6-pdf-674";

export async function getManagedGrammarPath() {
  try {
    await ensureGrammarSeeded();
    const db = await getMongoDatabase();
    const items = await db
      .collection(grammarCollection)
      .find({})
      .sort({ hskLevel: 1, order: 1, lessonCode: 1 })
      .toArray();
    return items.map(fromDbGrammar);
  } catch {
    return getGrammarPath();
  }
}

export async function getManagedGrammarLevels() {
  const items = await getManagedGrammarPath();
  const grouped = new Map();
  for (const item of items) {
    const current = grouped.get(item.hskLevel) || [];
    current.push(item);
    grouped.set(item.hskLevel, current);
  }
  return [...grouped.entries()]
    .sort(([a], [b]) => a - b)
    .map(([level, entries]) => ({ level, entries }));
}

export async function getManagedGrammarItemsForLevel(level) {
  const numericLevel = Number(level);
  const items = await getManagedGrammarPath();
  return items.filter((item) => Number(item.hskLevel) === numericLevel);
}

export async function getManagedGrammarUnitsForLevel(level) {
  const items = await getManagedGrammarItemsForLevel(level);
  try {
    const db = await getMongoDatabase();
    const manualUnits = await db
      .collection(grammarUnitsCollection)
      .find({ level: Number(level) })
      .sort({ id: 1 })
      .toArray();
    if (manualUnits.length) {
      return manualUnits.map((unit) => {
        const unitItems = items.filter(
          (item) =>
            Number(item.order) >= Number(unit.startOrder || 1) &&
            Number(item.order) <= Number(unit.endOrder || unit.startOrder || 1),
        );
        return {
          mongoId: String(unit._id),
          id: Number(unit.id),
          level: Number(unit.level),
          title: unit.title || `Unit ${unit.id}`,
          description: unit.description || "",
          start: Number(unit.startOrder || 1),
          end: Number(unit.endOrder || unit.startOrder || 1),
          startOrder: Number(unit.startOrder || 1),
          endOrder: Number(unit.endOrder || unit.startOrder || 1),
          itemCount: unitItems.length,
          items: unitItems,
        };
      });
    }
  } catch {}
  const units = [];
  for (let index = 0; index < items.length; index += GRAMMAR_UNIT_SIZE) {
    const unitItems = items.slice(index, index + GRAMMAR_UNIT_SIZE);
    units.push({
      id: units.length + 1,
      level: Number(level),
      start: index + 1,
      end: index + unitItems.length,
      itemCount: unitItems.length,
      items: unitItems,
    });
  }
  return units;
}

export async function getManagedGrammarUnit(level, unitId) {
  const units = await getManagedGrammarUnitsForLevel(level);
  return units.find((unit) => unit.id === Number(unitId));
}

export async function upsertManagedGrammar(payload) {
  const item = normalizeGrammar(payload);
  await ensureGrammarSeeded();
  const db = await getMongoDatabase();
  const now = new Date();
  const filter =
    payload.mongoId && ObjectId.isValid(payload.mongoId)
      ? { _id: new ObjectId(payload.mongoId) }
      : { hskLevel: item.hskLevel, id: item.id };
  const result = await db
    .collection(grammarCollection)
    .findOneAndUpdate(
      filter,
      { $set: { ...item, updatedAt: now }, $setOnInsert: { createdAt: now } },
      { returnDocument: "after", upsert: true },
    );
  return fromDbGrammar(result);
}

export async function deleteManagedGrammar(grammarId) {
  if (!ObjectId.isValid(grammarId)) return false;
  const db = await getMongoDatabase();
  const result = await db
    .collection(grammarCollection)
    .deleteOne({ _id: new ObjectId(grammarId) });
  return result.deletedCount > 0;
}

export async function getManagedGrammarUnitControls(level) {
  const db = await getMongoDatabase();
  const rows = await db
    .collection(grammarUnitsCollection)
    .find({ level: Number(level) })
    .sort({ id: 1 })
    .toArray();
  return rows.map(fromDbGrammarUnit);
}

export async function upsertManagedGrammarUnit(payload) {
  const unit = {
    level: Number(payload.level || payload.hskLevel || 1),
    id: Math.max(1, Number(payload.id || 1)),
    title: String(payload.title || "").trim(),
    description: String(payload.description || "").trim(),
    startOrder: Math.max(1, Number(payload.startOrder || 1)),
    endOrder: Math.max(1, Number(payload.endOrder || payload.startOrder || 1)),
  };
  const db = await getMongoDatabase();
  const filter =
    payload.mongoId && ObjectId.isValid(payload.mongoId)
      ? { _id: new ObjectId(payload.mongoId) }
      : { level: unit.level, id: unit.id };
  const result = await db.collection(grammarUnitsCollection).findOneAndUpdate(
    filter,
    {
      $set: { ...unit, updatedAt: new Date() },
      $setOnInsert: { createdAt: new Date() },
    },
    { upsert: true, returnDocument: "after" },
  );
  return fromDbGrammarUnit(result);
}

export async function deleteManagedGrammarUnit(unitId) {
  if (!ObjectId.isValid(unitId)) return false;
  const db = await getMongoDatabase();
  const result = await db
    .collection(grammarUnitsCollection)
    .deleteOne({ _id: new ObjectId(unitId) });
  return result.deletedCount > 0;
}

async function ensureGrammarSeeded() {
  const db = await getMongoDatabase();
  const state = await db
    .collection(stateCollection)
    .findOne({ _id: "grammar" });
  const levelOrder = new Map();
  const source = getGrammarPath().map((item) => {
    const hskLevel = Number(item.hskLevel || 1);
    const order = (levelOrder.get(hskLevel) || 0) + 1;
    levelOrder.set(hskLevel, order);
    return {
      ...item,
      hskLevel,
      order,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  });
  if (source.length && state?.sourceVersion !== GRAMMAR_SOURCE_VERSION) {
    await db.collection(grammarCollection).bulkWrite(
      source.map((item) => ({
        updateOne: {
          filter: { hskLevel: item.hskLevel, id: item.id },
          update: {
            $set: {
              ...item,
              updatedAt: new Date(),
            },
            $setOnInsert: {
              createdAt: new Date(),
            },
          },
          upsert: true,
        },
      })),
    );
  }
  if (state?.sourceVersion === GRAMMAR_SOURCE_VERSION && source.length) {
    await db.collection(grammarCollection).bulkWrite(
      source.map((item) => ({
        updateOne: {
          filter: { hskLevel: item.hskLevel, id: item.id },
          update: {
            $setOnInsert: item,
          },
          upsert: true,
        },
      })),
    );
  }
  await db.collection(stateCollection).updateOne(
    { _id: "grammar" },
    {
      $set: {
        seeded: true,
        seededAt: new Date(),
        sourceVersion: GRAMMAR_SOURCE_VERSION,
      },
    },
    { upsert: true },
  );
}

function normalizeGrammar(payload) {
  const hskLevel = Math.max(1, Number(payload.hskLevel || payload.level || 1));
  return {
    id: String(payload.id || `grammar-${hskLevel}-${Date.now().toString(36)}`)
      .trim()
      .slice(0, 140),
    hskLevel,
    order: Math.max(1, Number(payload.order) || 1),
    lessonCode: String(payload.lessonCode || "").trim(),
    pattern: String(payload.pattern || "").trim(),
    explanation: String(payload.explanation || "").trim(),
    details: String(payload.details || "").trim(),
    example: {
      hanzi: String(payload.example?.hanzi || "").trim(),
      pinyin: String(payload.example?.pinyin || "").trim(),
      en: String(payload.example?.en || "").trim(),
      ar: String(payload.example?.ar || "").trim(),
    },
  };
}

function fromDbGrammar(item) {
  return {
    mongoId: String(item._id || ""),
    id: item.id || "",
    hskLevel: Number(item.hskLevel || 1),
    order: Number(item.order || 1),
    lessonCode: item.lessonCode || "",
    pattern: item.pattern || "",
    explanation: item.explanation || "",
    details: item.details || "",
    example: {
      hanzi: item.example?.hanzi || "",
      pinyin: item.example?.pinyin || "",
      en: item.example?.en || "",
      ar: item.example?.ar || "",
    },
  };
}

function fromDbGrammarUnit(unit) {
  return {
    mongoId: String(unit._id || ""),
    level: Number(unit.level || 1),
    id: Number(unit.id || 1),
    title: unit.title || "",
    description: unit.description || "",
    startOrder: Number(unit.startOrder || 1),
    endOrder: Number(unit.endOrder || unit.startOrder || 1),
  };
}

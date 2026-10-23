import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

// Load .env.local
const envPath = path.join(projectRoot, ".env.local");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...rest] = trimmed.split("=");
    if (key && rest.length > 0) {
      const val = rest
        .join("=")
        .trim()
        .replace(/^["']|["']$/g, "");
      process.env[key.trim()] = val;
    }
  }
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error(
    "❌ Error: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set in .env.local",
  );
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

async function runSeed() {
  console.log("🚀 Starting Supabase Database Seed...\n");

  // Verify connection & table existence
  const { error: testErr } = await supabase
    .from("course_words")
    .select("id")
    .limit(1);
  if (testErr) {
    console.error("⚠️ Table check error:", testErr.message);
    console.error(
      "👉 Please run 'supabase/schema.sql' in your Supabase SQL Editor first to create the tables!",
    );
    process.exit(1);
  }

  // 1. Seed Words (HSK 1-6)
  console.log("📦 1. Seeding HSK Words (Levels 1-6)...");
  for (let level = 1; level <= 6; level++) {
    const filePath = path.join(
      projectRoot,
      "source-data",
      "hsk",
      `hsk-${level}.json`,
    );
    if (!fs.existsSync(filePath)) {
      console.warn(
        `   ⚠️ Warning: ${filePath} not found, skipping level ${level}.`,
      );
      continue;
    }
    const words = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const records = words.map((w, idx) => ({
      id: String(w.id || `hsk-${level}-${idx + 1}`),
      level,
      order: Number(w.order || idx + 1),
      hanzi: w.hanzi || "",
      pinyin: w.pinyin || "",
      part_of_speech: w.partOfSpeech || w.pos || "word",
      meaning: w.meaning || w.translations || {},
      example: w.example || w.examples?.[0] || {},
      audio: w.audio || {},
      tags: Array.isArray(w.tags) ? w.tags : [],
      examples: Array.isArray(w.examples) ? w.examples : [],
      book: w.book || null,
      lesson: w.lesson ? String(w.lesson) : null,
      updated_at: new Date().toISOString(),
    }));

    const chunkSize = 200;
    for (let i = 0; i < records.length; i += chunkSize) {
      const chunk = records.slice(i, i + chunkSize);
      const { error } = await supabase
        .from("course_words")
        .upsert(chunk, { onConflict: "level,id" });
      if (error) {
        console.error(
          `   ❌ Error seeding words for level ${level} (chunk ${i}):`,
          error.message,
        );
        break;
      }
    }
    console.log(`   ✓ HSK ${level}: Seeded ${records.length} words.`);
  }

  // 2. Seed Grammar Learning Path & Auto-generated Units
  const grammarPath = path.join(
    projectRoot,
    "source-data",
    "grammar",
    "learning-path.json",
  );
  if (fs.existsSync(grammarPath)) {
    console.log("\n📖 2. Seeding Grammar Learning Path & Units...");
    const grammarData = JSON.parse(fs.readFileSync(grammarPath, "utf8"));
    const levelOrder = new Map();
    const grammarRecords = grammarData.map((g) => {
      const hsk_level = Number(g.hskLevel || g.level || 1);
      const order = (levelOrder.get(hsk_level) || 0) + 1;
      levelOrder.set(hsk_level, order);
      return {
        id: String(g.id || `grammar-${hsk_level}-${order}`),
        hsk_level,
        order: Number(g.order) || order,
        lesson_code: g.lessonCode || "",
        pattern: g.pattern || "",
        explanation: g.explanation || "",
        details: g.details || "",
        example: g.example || {},
        updated_at: new Date().toISOString(),
      };
    });

    const chunkSize = 200;
    for (let i = 0; i < grammarRecords.length; i += chunkSize) {
      const chunk = grammarRecords.slice(i, i + chunkSize);
      const { error } = await supabase
        .from("course_grammar")
        .upsert(chunk, { onConflict: "id" });
      if (error) {
        console.error("   ❌ Error seeding grammar:", error.message);
        break;
      }
    }
    console.log(`   ✓ Seeded ${grammarRecords.length} grammar points.`);

    // Seed grammar units (12 items per unit)
    const unitRecords = [];
    const UNIT_SIZE = 12;
    for (let lvl = 1; lvl <= 6; lvl++) {
      const lvlItems = grammarRecords.filter((g) => g.hsk_level === lvl);
      let unitNum = 1;
      for (let j = 0; j < lvlItems.length; j += UNIT_SIZE) {
        const uItems = lvlItems.slice(j, j + UNIT_SIZE);
        unitRecords.push({
          level: lvl,
          id: unitNum,
          title: `Grammar Unit ${unitNum}`,
          description: `Core patterns ${j + 1} to ${j + uItems.length}`,
          start_order: j + 1,
          end_order: j + uItems.length,
          updated_at: new Date().toISOString(),
        });
        unitNum++;
      }
    }
    if (unitRecords.length) {
      const { error: unitErr } = await supabase
        .from("course_grammar_units")
        .upsert(unitRecords, { onConflict: "level,id" });
      if (unitErr) {
        console.error("   ❌ Error seeding grammar units:", unitErr.message);
      } else {
        console.log(`   ✓ Seeded ${unitRecords.length} grammar units.`);
      }
    }
  }

  // 3. Seed Conversations (HSK 1-5 source units)
  console.log("\n💬 3. Seeding Conversations...");
  const convDir = path.join(projectRoot, "source-data", "conversations");
  let convCount = 0;
  if (fs.existsSync(convDir)) {
    const convRecords = [];
    for (let lvl = 1; lvl <= 6; lvl++) {
      const lvlDir = path.join(convDir, `hsk-${lvl}`);
      if (!fs.existsSync(lvlDir)) continue;
      const files = fs.readdirSync(lvlDir).filter((f) => f.endsWith(".json"));
      for (const file of files) {
        try {
          const conv = JSON.parse(
            fs.readFileSync(path.join(lvlDir, file), "utf8"),
          );
          convRecords.push({
            id: conv.id || `hsk-${lvl}-unit-${conv.unitId || 1}`,
            hsk_level: lvl,
            unit_id: Number(conv.unitId || 1),
            status: conv.status || "ready",
            title: conv.title || {},
            target_vocabulary_ids: Array.isArray(conv.targetVocabularyIds)
              ? conv.targetVocabularyIds
              : [],
            dialogue: Array.isArray(conv.dialogue) ? conv.dialogue : [],
            grammar_notes: Array.isArray(conv.grammarNotes)
              ? conv.grammarNotes
              : [],
            cultural_notes: Array.isArray(conv.culturalNotes)
              ? conv.culturalNotes
              : [],
            comprehension_questions: Array.isArray(conv.comprehensionQuestions)
              ? conv.comprehensionQuestions
              : [],
            shadowing_practice: conv.shadowingPractice || {
              enabled: true,
              mode: "line-by-line",
            },
            authoring_note: conv.authoringNote || "",
            updated_at: new Date().toISOString(),
          });
        } catch {
          // ignore corrupted files
        }
      }
    }
    if (convRecords.length) {
      const chunkSize = 100;
      for (let i = 0; i < convRecords.length; i += chunkSize) {
        const chunk = convRecords.slice(i, i + chunkSize);
        const { error } = await supabase
          .from("course_conversations")
          .upsert(chunk, { onConflict: "id" });
        if (error) {
          console.error("   ❌ Error seeding conversations:", error.message);
          break;
        }
      }
      convCount = convRecords.length;
      console.log(`   ✓ Seeded ${convCount} conversation lessons.`);
    }
  }

  // 4. Seed Default Site Content
  console.log("\n🌐 4. Seeding Site Content...");
  const siteContent = [
    {
      key: "home.hero.title",
      value: "Master Chinese with conversation-first learning.",
    },
    {
      key: "home.hero.subtitle",
      value:
        "HSK 1-6 books, vocabulary flashcards, grammar patterns, and real dialogue practice designed for serious learners.",
    },
    { key: "home.cta.primary", value: "Start HSK 1" },
    { key: "home.cta.secondary", value: "Explore grammar" },
  ];
  await supabase
    .from("site_content")
    .upsert(siteContent, { onConflict: "key" });
  console.log(
    `   ✓ Seeded ${siteContent.length} default site content entries.`,
  );

  // 5. Mark Seed State
  await supabase.from("course_data_state").upsert([
    {
      id: "course_words",
      version: "hsk-3.0-2026",
      seeded_at: new Date().toISOString(),
    },
    {
      id: "course_grammar",
      version: "grammar-path-v1",
      seeded_at: new Date().toISOString(),
    },
    {
      id: "course_conversations",
      version: "conversations-v1",
      seeded_at: new Date().toISOString(),
    },
  ]);

  console.log("\n🎉 Supabase Database Seed completed successfully!");
}

runSeed().catch((err) => {
  console.error("Fatal seed error:", err);
  process.exit(1);
});

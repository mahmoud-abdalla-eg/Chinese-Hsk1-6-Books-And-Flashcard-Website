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
      const val = rest.join("=").trim().replace(/^["']|["']$/g, "");
      process.env[key.trim()] = val;
    }
  }
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error("❌ Error: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set in .env.local");
  process.exit(1);
}

const supabase = createClient(url, key);

async function runSeed() {
  console.log("🚀 Starting Supabase Database Seed...\n");

  // Test if course_words exists
  const { error: testErr } = await supabase.from("course_words").select("id").limit(1);
  if (testErr) {
    console.error("⚠️ Table check error:", testErr.message);
    console.error("👉 Please run 'supabase/schema.sql' in your Supabase SQL Editor first to create the tables!");
    process.exit(1);
  }

  // 1. Seed Words
  console.log("📦 Seeding HSK Words (Levels 1-6)...");
  for (let level = 1; level <= 6; level++) {
    const filePath = path.join(projectRoot, "source-data", "hsk", `hsk-${level}.json`);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ Warning: ${filePath} not found, skipping level ${level}.`);
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

    // Upsert in chunks of 500
    const chunkSize = 500;
    for (let i = 0; i < records.length; i += chunkSize) {
      const chunk = records.slice(i, i + chunkSize);
      const { error } = await supabase.from("course_words").upsert(chunk, { onConflict: "level,id" });
      if (error) {
        console.error(`❌ Error seeding words for level ${level}:`, error.message);
        break;
      }
    }
    console.log(`   ✓ HSK ${level}: Seeded ${records.length} words.`);
  }

  // 2. Seed Grammar
  const grammarPath = path.join(projectRoot, "source-data", "grammar", "learning-path.json");
  if (fs.existsSync(grammarPath)) {
    console.log("\n📖 Seeding Grammar Learning Path...");
    const grammarData = JSON.parse(fs.readFileSync(grammarPath, "utf8"));
    const grammarRecords = grammarData.map((g, idx) => ({
      id: String(g.id || `grammar-${idx + 1}`),
      hsk_level: Number(g.hskLevel || g.level || 1),
      order: Number(g.order || idx + 1),
      lesson_code: g.lessonCode || "",
      pattern: g.pattern || "",
      explanation: g.explanation || "",
      details: g.details || "",
      example: g.example || {},
      updated_at: new Date().toISOString(),
    }));

    const chunkSize = 500;
    for (let i = 0; i < grammarRecords.length; i += chunkSize) {
      const chunk = grammarRecords.slice(i, i + chunkSize);
      const { error } = await supabase.from("course_grammar").upsert(chunk, { onConflict: "id" });
      if (error) {
        console.error("❌ Error seeding grammar:", error.message);
        break;
      }
    }
    console.log(`   ✓ Seeded ${grammarRecords.length} grammar points.`);
  }

  // 3. Mark Seeded State
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
  ]);

  console.log("\n🎉 Seed completed successfully!");
}

runSeed().catch((err) => {
  console.error("Fatal seed error:", err);
  process.exit(1);
});

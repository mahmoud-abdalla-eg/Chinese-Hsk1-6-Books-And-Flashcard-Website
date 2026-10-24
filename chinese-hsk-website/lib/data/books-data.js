/**
 * HSK Standard Course Books & Learning Materials Catalog
 * Provides structured dual-edition metadata (New HSK 3.0 2026 vs Classic HSK 2.0)
 * and verified cloud links for HSK Levels 1 through 6,
 * plus dedicated resource packages (Writing Grids, Vocabulary Lists, and Comprehensive Grammar Guide).
 */

export const HSK_DRIVE_ROOT = "https://drive.google.com/drive/folders/1BP51tgLPS4GKJ6JC4tYsdL8wYjg_sckZ";
export const BAUL_CHINO_BOOKS = "https://www.baulchino.com/libros-hsk";
export const BAUL_CHINO_AUDIOS = "https://www.baulchino.com/hsk-audios";
export const BAUL_CHINO_BOOKS_2026 = "https://www.baulchino.com/new-hsk-books-2026";
export const BAUL_CHINO_AUDIOS_2026 = "https://www.baulchino.com/new-hsk-audios-2026";

export const HSK_GRAMMAR_PDF = {
  id: "grammar-guide",
  titleEn: "HSK 1-6 Comprehensive Grammar Guide",
  titleZh: "《HSK 1-6 级实用语法全解手册》",
  titleAr: "دليل قواعد HSK 1-6 الشامل",
  type: "PDF",
  size: "2.7 MB",
  previewUrl: "https://drive.google.com/file/d/1oXXM05cb_8liwQZiiZ3YFn0bdZBCh86w/view",
  downloadUrl: "https://drive.google.com/file/d/1oXXM05cb_8liwQZiiZ3YFn0bdZBCh86w/view",
};

export const hskMaterials = [
  {
    level: 1,
    name: "HSK 1",
    hanzi: "一级",
    levelNameEn: "Beginner",
    levelNameZh: "入门基础",
    levelNameAr: "مبتدئ أساسي",
    wordsCount: 150,
    accent: "emerald",
    theme: {
      border: "border-emerald-500/20 hover:border-emerald-500/40",
      badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      accentBg: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      button: "bg-emerald-600 hover:bg-emerald-500 text-white",
      buttonOutline: "border-emerald-500/30 hover:bg-emerald-500/10 text-emerald-300"
    },
    driveFolderUrl: "https://drive.google.com/drive/folders/1NiyDEs7nw0OZm4tr7V0Ojv3u0p4ZBk8W",
    defaultEdition: "new",
    editions: {
      new: {
        key: "new",
        editionLabelEn: "New HSK 3.0 (2026)",
        editionLabelZh: "新 HSK 3.0 (2026版)",
        editionLabelAr: "HSK 3.0 الجديد (2026)",
        badge: "2026 Edition",
        folderUrl: "https://drive.google.com/drive/folders/1hy9aozysBWSngkTkQt9_wQ5xv39Hw0ae",
        downloadAllUrl: "https://drive.google.com/drive/folders/1hy9aozysBWSngkTkQt9_wQ5xv39Hw0ae",
        audioStreamUrl: BAUL_CHINO_AUDIOS_2026,
        items: [
          {
            id: "textbook",
            kind: "textbook",
            titleEn: "New HSK Course 1 Textbook",
            titleZh: "《新HSK教程1》教材 (3.0版)",
            titleAr: "كتاب دورة HSK 1 الجديد (إصدار 3.0)",
            type: "PDF",
            size: "64 MB",
            previewUrl: "https://drive.google.com/file/d/1tDQh0AIBjuM-NMlaJ6owbbg7_knfkElz/view",
            downloadUrl: "https://drive.google.com/file/d/1tDQh0AIBjuM-NMlaJ6owbbg7_knfkElz/view"
          },
          {
            id: "workbook",
            kind: "workbook",
            titleEn: "New HSK Course 1 Workbook",
            titleZh: "《新HSK教程1》练习册与答案",
            titleAr: "دفتر تمارين دورة HSK 1 الجديد",
            type: "PDF",
            size: "71 MB",
            previewUrl: "https://drive.google.com/file/d/1DhtH9o8txQCvhDhzHgvWp2g0fRJnp_lv/view",
            downloadUrl: "https://drive.google.com/file/d/1DhtH9o8txQCvhDhzHgvWp2g0fRJnp_lv/view"
          },
          {
            id: "writing",
            kind: "writing",
            titleEn: "New HSK 1 Character Writing Book",
            titleZh: "《新HSK教程1》汉字书写描红本",
            titleAr: "دفتر تدريب كتابة المقاطع HSK 1",
            type: "PDF",
            size: "4.4 MB",
            previewUrl: "https://drive.google.com/file/d/1fCeyKjacz8JcuxeXUOQU4X63U4FYyhBX/view",
            downloadUrl: "https://drive.google.com/file/d/1fCeyKjacz8JcuxeXUOQU4X63U4FYyhBX/view"
          },
          {
            id: "audio",
            kind: "audio",
            titleEn: "New HSK 1 Textbook Audio Tracks (MP3)",
            titleZh: "新HSK 1 级全套课文与听力音频 (MP3)",
            titleAr: "صوتيات دورة HSK 1 الجديدة كاملة (MP3)",
            type: "AUDIO",
            count: "Full 2026 Audio Set",
            streamUrl: BAUL_CHINO_AUDIOS_2026,
            downloadUrl: "https://drive.google.com/drive/folders/1uDqJmdKiCnZxVcGeNk5edf1TPW6hWvZd"
          }
        ]
      },
      classic: {
        key: "classic",
        editionLabelEn: "Classic HSK 2.0",
        editionLabelZh: "经典 HSK 2.0",
        editionLabelAr: "HSK 2.0 الكلاسيكي",
        badge: "Classic Edition",
        folderUrl: "https://drive.google.com/drive/folders/1mALLz2qtOJ0HdxbgQgAIZXTUoag9DJhL",
        downloadAllUrl: "https://drive.google.com/drive/folders/1mALLz2qtOJ0HdxbgQgAIZXTUoag9DJhL",
        audioStreamUrl: BAUL_CHINO_AUDIOS,
        items: [
          {
            id: "textbook",
            kind: "textbook",
            titleEn: "HSK Standard Course 1 Textbook",
            titleZh: "《HSK标准教程1》原版教材",
            titleAr: "كتاب دورة HSK 1 القياسية الرسمية",
            type: "PDF",
            size: "64 MB",
            previewUrl: "https://drive.google.com/file/d/1xU1v4niVvno-fiOGUkwDX-Pqt-sUnfZu/view",
            downloadUrl: "https://drive.google.com/file/d/1xU1v4niVvno-fiOGUkwDX-Pqt-sUnfZu/view"
          },
          {
            id: "workbook",
            kind: "workbook",
            titleEn: "Standard Course 1 Pinyin Table & Exercises",
            titleZh: "《HSK标准教程1》声韵拼合表与练习",
            titleAr: "جدول أصوات البينيين وتمارين المستوى الأول",
            type: "PDF",
            size: "524 KB",
            previewUrl: "https://drive.google.com/file/d/1_j_89jqDk1Jvke3B09DgJpHmbE8l81ub/view",
            downloadUrl: "https://drive.google.com/file/d/1_j_89jqDk1Jvke3B09DgJpHmbE8l81ub/view"
          },
          {
            id: "audio",
            kind: "audio",
            titleEn: "Textbook & Workbook Listening Audio (MP3)",
            titleZh: "课本与练习册官方听力音频 (MP3)",
            titleAr: "التسجيلات الصوتية للاستماع للدرس والتمارين (MP3)",
            type: "AUDIO",
            count: "Full Audio Set",
            streamUrl: BAUL_CHINO_AUDIOS,
            downloadUrl: "https://drive.google.com/drive/folders/1mALLz2qtOJ0HdxbgQgAIZXTUoag9DJhL"
          }
        ],
        mockExams: {
          titleEn: "Official Mock Examination Papers (5 Exams)",
          titleZh: "全套官方真题模拟试卷 (5套含听力)",
          titleAr: "امتحانات تجريبية رسمية (5 نماذج مع الاستماع)",
          count: 5,
          items: [
            { id: "H10901", label: "HSK 1 Mock Test H10901 (Paper + Audio)" },
            { id: "H10902", label: "HSK 1 Mock Test H10902 (Paper + Audio)" },
            { id: "H11003", label: "HSK 1 Mock Test H11003 (Paper + Audio)" },
            { id: "H11004", label: "HSK 1 Mock Test H11004 (Paper + Audio)" },
            { id: "H11005", label: "HSK 1 Mock Test H11005 (Paper + Audio)" }
          ]
        }
      }
    }
  },
  {
    level: 2,
    name: "HSK 2",
    hanzi: "二级",
    levelNameEn: "Elementary",
    levelNameZh: "初级进阶",
    levelNameAr: "ابتدائي متقدم",
    wordsCount: 300,
    accent: "sky",
    theme: {
      border: "border-sky-500/20 hover:border-sky-500/40",
      badge: "bg-sky-500/10 text-sky-400 border-sky-500/30",
      accentBg: "from-sky-500/10 via-sky-500/5 to-transparent",
      button: "bg-sky-600 hover:bg-sky-500 text-white",
      buttonOutline: "border-sky-500/30 hover:bg-sky-500/10 text-sky-300"
    },
    driveFolderUrl: "https://drive.google.com/drive/folders/19IW6BsDkAcctumqd3v559TsNtZgq9kqb",
    defaultEdition: "new",
    editions: {
      new: {
        key: "new",
        editionLabelEn: "New HSK 3.0 (2026)",
        editionLabelZh: "新 HSK 3.0 (2026版)",
        editionLabelAr: "HSK 3.0 الجديد (2026)",
        badge: "2026 Edition",
        folderUrl: "https://drive.google.com/drive/folders/1s18Ddw3aWFhOy8NRq5RPxfI4Ox7D6MV7",
        downloadAllUrl: "https://drive.google.com/drive/folders/1s18Ddw3aWFhOy8NRq5RPxfI4Ox7D6MV7",
        audioStreamUrl: BAUL_CHINO_AUDIOS_2026,
        items: [
          {
            id: "textbook",
            kind: "textbook",
            titleEn: "New HSK Course 2 Textbook",
            titleZh: "《新HSK教程2》教材 (3.0版)",
            titleAr: "كتاب دورة HSK 2 الجديد (إصدار 3.0)",
            type: "PDF",
            size: "30 MB",
            previewUrl: "https://drive.google.com/file/d/1zKXCU8F0xOiNZb75vZtXc6IF8e9TqsV1/view",
            downloadUrl: "https://drive.google.com/file/d/1zKXCU8F0xOiNZb75vZtXc6IF8e9TqsV1/view"
          },
          {
            id: "workbook",
            kind: "workbook",
            titleEn: "New HSK Course 2 Workbook",
            titleZh: "《新HSK教程2》练习册全册",
            titleAr: "دفتر تمارين دورة HSK 2 الجديد",
            type: "PDF",
            size: "217 MB",
            previewUrl: "https://drive.google.com/file/d/133AK7Rprubk21Y4yO5b2XTCoos1SIRj_/view",
            downloadUrl: "https://drive.google.com/file/d/133AK7Rprubk21Y4yO5b2XTCoos1SIRj_/view"
          },
          {
            id: "writing",
            kind: "writing",
            titleEn: "New HSK 2 Character Writing Book",
            titleZh: "《新HSK教程2》汉字书写描红本",
            titleAr: "دفتر تدريب كتابة المقاطع HSK 2",
            type: "PDF",
            size: "16 MB",
            previewUrl: "https://drive.google.com/file/d/13ldjEYi-wI8hV2yvSifcafEENzX0pmXq/view",
            downloadUrl: "https://drive.google.com/file/d/13ldjEYi-wI8hV2yvSifcafEENzX0pmXq/view"
          },
          {
            id: "audio",
            kind: "audio",
            titleEn: "New HSK 2 Textbook Audio Tracks (MP3)",
            titleZh: "新HSK 2 级课文与练习听力音频 (MP3)",
            titleAr: "صوتيات دورة HSK 2 الجديدة كاملة (MP3)",
            type: "AUDIO",
            count: "Full 2026 Audio Set",
            streamUrl: BAUL_CHINO_AUDIOS_2026,
            downloadUrl: "https://drive.google.com/drive/folders/1iJi26C0i1XNuBmqOXYT-zW2_r7IkiweY"
          }
        ]
      },
      classic: {
        key: "classic",
        editionLabelEn: "Classic HSK 2.0",
        editionLabelZh: "经典 HSK 2.0",
        editionLabelAr: "HSK 2.0 الكلاسيكي",
        badge: "Classic Edition",
        folderUrl: "https://drive.google.com/drive/folders/1BB5L7DdhOBzuRmBpyrgGRh7hGORs-wKa",
        downloadAllUrl: "https://drive.google.com/drive/folders/1BB5L7DdhOBzuRmBpyrgGRh7hGORs-wKa",
        audioStreamUrl: BAUL_CHINO_AUDIOS,
        items: [
          {
            id: "textbook",
            kind: "textbook",
            titleEn: "HSK Standard Course 2 Textbook",
            titleZh: "《HSK标准教程2》原版教材",
            titleAr: "كتاب دورة HSK 2 القياسية الرسمية",
            type: "PDF",
            size: "18 MB",
            previewUrl: "https://drive.google.com/file/d/1WdTMbI9jAHqM2vshO5D6_Alqfe8-zpir/view",
            downloadUrl: "https://drive.google.com/file/d/1WdTMbI9jAHqM2vshO5D6_Alqfe8-zpir/view"
          },
          {
            id: "workbook",
            kind: "workbook",
            titleEn: "Standard Course 2 Practice Questions & Workbook",
            titleZh: "《HSK标准教程2》练习册与精选题库",
            titleAr: "دفتر تمارين وأسئلة تدريب HSK 2",
            type: "PDF",
            size: "6.6 MB",
            previewUrl: "https://drive.google.com/file/d/1Bvq3JXj9hQ2kg1o1uQjlusFzTrI0M4oQ/view",
            downloadUrl: "https://drive.google.com/file/d/1Bvq3JXj9hQ2kg1o1uQjlusFzTrI0M4oQ/view"
          },
          {
            id: "audio",
            kind: "audio",
            titleEn: "Textbook & Workbook Listening Audio (MP3)",
            titleZh: "课本与练习册官方听力音频 (MP3)",
            titleAr: "التسجيلات الصوتية للاستماع للدرس والتمارين (MP3)",
            type: "AUDIO",
            count: "Full Audio Set",
            streamUrl: BAUL_CHINO_AUDIOS,
            downloadUrl: "https://drive.google.com/drive/folders/1BB5L7DdhOBzuRmBpyrgGRh7hGORs-wKa"
          }
        ],
        mockExams: {
          titleEn: "Official Mock Examination Papers (6 Exams)",
          titleZh: "官方真题模拟试卷与解析 (6套含听力)",
          titleAr: "امتحانات تجريبية رسمية وحلولها (6 نماذج مع الاستماع)",
          count: 6,
          items: [
            { id: "H20901", label: "HSK 2 Mock Test H20901 (Paper + Audio)" },
            { id: "H20902", label: "HSK 2 Mock Test H20902 (Paper + Audio)" },
            { id: "H21003", label: "HSK 2 Mock Test H21003 (Paper + Audio)" },
            { id: "H21004", label: "HSK 2 Mock Test H21004 (Paper + Audio)" },
            { id: "H21005", label: "HSK 2 Mock Test H21005 (Paper + Audio)" },
            { id: "h20000", label: "HSK 2 Mock Test H20000 (Complete Answers + Test)" }
          ]
        }
      }
    }
  },
  {
    level: 3,
    name: "HSK 3",
    hanzi: "三级",
    levelNameEn: "Intermediate",
    levelNameZh: "中级起步",
    levelNameAr: "متوسط",
    wordsCount: 600,
    accent: "amber",
    theme: {
      border: "border-amber-500/20 hover:border-amber-500/40",
      badge: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      accentBg: "from-amber-500/10 via-amber-500/5 to-transparent",
      button: "bg-amber-600 hover:bg-amber-500 text-white",
      buttonOutline: "border-amber-500/30 hover:bg-amber-500/10 text-amber-300"
    },
    driveFolderUrl: "https://drive.google.com/drive/folders/1cfdY4ABs2nakFxGtQDJ5q4dwcCVRhIWV",
    defaultEdition: "new",
    editions: {
      new: {
        key: "new",
        editionLabelEn: "New HSK 3.0 (2026)",
        editionLabelZh: "新 HSK 3.0 (2026版)",
        editionLabelAr: "HSK 3.0 الجديد (2026)",
        badge: "2026 Edition",
        folderUrl: "https://drive.google.com/drive/folders/1C6TZoT8_eJRrjp7j497LJx0Xmhzklzo5",
        downloadAllUrl: "https://drive.google.com/drive/folders/1C6TZoT8_eJRrjp7j497LJx0Xmhzklzo5",
        audioStreamUrl: BAUL_CHINO_AUDIOS_2026,
        items: [
          {
            id: "textbook",
            kind: "textbook",
            titleEn: "New HSK Course 3 Textbook",
            titleZh: "《新HSK教程3》教材 (3.0版)",
            titleAr: "كتاب دورة HSK 3 الجديد (إصدار 3.0)",
            type: "PDF",
            size: "42 MB",
            previewUrl: "https://drive.google.com/file/d/1egwc_0gTbFTG0oLjWUx7zZWKLjNBEpCA/view",
            downloadUrl: "https://drive.google.com/file/d/1egwc_0gTbFTG0oLjWUx7zZWKLjNBEpCA/view"
          },
          {
            id: "workbook",
            kind: "workbook",
            titleEn: "New HSK Course 3 Workbook",
            titleZh: "《新HSK教程3》练习册与综合测验",
            titleAr: "دفتر تمارين دورة HSK 3 الجديد",
            type: "PDF",
            size: "58 MB",
            previewUrl: "https://drive.google.com/file/d/1d6FZQzFdfMd729ICSGr3ivNOncGhcL_X/view",
            downloadUrl: "https://drive.google.com/file/d/1d6FZQzFdfMd729ICSGr3ivNOncGhcL_X/view"
          },
          {
            id: "audio",
            kind: "audio",
            titleEn: "New HSK 3 Textbook Audio Tracks (MP3)",
            titleZh: "新HSK 3 级课文与听力音频 (MP3)",
            titleAr: "صوتيات دورة HSK 3 الجديدة كاملة (MP3)",
            type: "AUDIO",
            count: "Full 2026 Audio Set",
            streamUrl: BAUL_CHINO_AUDIOS_2026,
            downloadUrl: "https://drive.google.com/drive/folders/1jF9QjEZbNjqa8onEq4n8_vPr8qkyjVXV"
          }
        ]
      },
      classic: {
        key: "classic",
        editionLabelEn: "Classic HSK 2.0",
        editionLabelZh: "经典 HSK 2.0",
        editionLabelAr: "HSK 2.0 الكلاسيكي",
        badge: "Classic Edition",
        folderUrl: "https://drive.google.com/drive/folders/1-Mgy_hL0VWHT7yV1hWvorf0NOMg2FaAK",
        downloadAllUrl: "https://drive.google.com/drive/folders/1-Mgy_hL0VWHT7yV1hWvorf0NOMg2FaAK",
        audioStreamUrl: BAUL_CHINO_AUDIOS,
        items: [
          {
            id: "textbook",
            kind: "textbook",
            titleEn: "HSK Standard Course 3 Textbook",
            titleZh: "《HSK标准教程3》原版教材",
            titleAr: "كتاب دورة HSK 3 القياسية الرسمية",
            type: "PDF",
            size: "36 MB",
            previewUrl: "https://drive.google.com/file/d/1ICnmHLitC3vH7hAmQ0-Yje5cnHwycE1g/view",
            downloadUrl: "https://drive.google.com/file/d/1ICnmHLitC3vH7hAmQ0-Yje5cnHwycE1g/view"
          },
          {
            id: "workbook",
            kind: "workbook",
            titleEn: "Standard Course 3 Workbook & Grammar Guide",
            titleZh: "《HSK标准教程3》练习册与语法指南",
            titleAr: "دفتر تمارين HSK 3 ودليل القواعد",
            type: "PDF",
            size: "42 MB",
            previewUrl: "https://drive.google.com/file/d/1cASxo7X69SgjDnO8U4fkTgnzvvqvZMVb/view",
            downloadUrl: "https://drive.google.com/file/d/1cASxo7X69SgjDnO8U4fkTgnzvvqvZMVb/view"
          },
          {
            id: "audio",
            kind: "audio",
            titleEn: "Lesson Audio & Workbook Listening Tracks",
            titleZh: "官方课本与练习册全套听力音频 (MP3)",
            titleAr: "صوتيات الدروس وتمارين الاستماع (MP3)",
            type: "AUDIO",
            count: "40+ Lessons Tracks",
            streamUrl: BAUL_CHINO_AUDIOS,
            downloadUrl: "https://drive.google.com/drive/folders/1-Mgy_hL0VWHT7yV1hWvorf0NOMg2FaAK"
          }
        ],
        mockExams: {
          titleEn: "Official Mock Examination Papers (9 Full Exams)",
          titleZh: "官方真题模拟试卷 (9套含听力与答案)",
          titleAr: "امتحانات تجريبية رسمية (9 امتحانات كاملة مع الصوت)",
          count: 9,
          items: [
            { id: "h30000", label: "HSK 3 Mock Exam h30000" },
            { id: "h31001", label: "HSK 3 Mock Exam h31001" },
            { id: "h31002", label: "HSK 3 Mock Exam h31002" },
            { id: "h31003", label: "HSK 3 Mock Exam h31003" },
            { id: "h31004", label: "HSK 3 Mock Exam h31004" },
            { id: "h31005", label: "HSK 3 Mock Exam h31005" },
            { id: "h31329", label: "HSK 3 Mock Exam h31329" },
            { id: "h31330", label: "HSK 3 Mock Exam h31330" },
            { id: "h31332", label: "HSK 3 Mock Exam h31332" }
          ]
        }
      }
    }
  },
  {
    level: 4,
    name: "HSK 4",
    hanzi: "四级",
    levelNameEn: "Upper Intermediate",
    levelNameZh: "中高级突破",
    levelNameAr: "فوق المتوسط",
    wordsCount: 1200,
    accent: "violet",
    theme: {
      border: "border-violet-500/20 hover:border-violet-500/40",
      badge: "bg-violet-500/10 text-violet-400 border-violet-500/30",
      accentBg: "from-violet-500/10 via-violet-500/5 to-transparent",
      button: "bg-violet-600 hover:bg-violet-500 text-white",
      buttonOutline: "border-violet-500/30 hover:bg-violet-500/10 text-violet-300"
    },
    driveFolderUrl: "https://drive.google.com/drive/folders/14KzcsYsHjCzefj77Uh3bUxoLWxOYXpTl",
    defaultEdition: "new",
    editions: {
      new: {
        key: "new",
        editionLabelEn: "New HSK 3.0 (2026)",
        editionLabelZh: "新 HSK 3.0 (2026版)",
        editionLabelAr: "HSK 3.0 الجديد (2026)",
        badge: "2026 Edition",
        folderUrl: "https://drive.google.com/drive/folders/1F8Gfs86h2Mkv3E1sloc_X1RhmyhWhNLr",
        downloadAllUrl: "https://drive.google.com/drive/folders/1F8Gfs86h2Mkv3E1sloc_X1RhmyhWhNLr",
        audioStreamUrl: BAUL_CHINO_AUDIOS_2026,
        items: [
          {
            id: "textbook_4a",
            kind: "textbook",
            titleEn: "New HSK Course 4 Volume A Textbook",
            titleZh: "《新HSK教程4》上册教材 (3.0版)",
            titleAr: "كتاب دورة HSK 4 الجديد (الجزء الأول)",
            type: "PDF",
            size: "85.4 MB",
            previewUrl: "https://drive.google.com/file/d/1Rxw60J1csBHW2qV_KkBnxwGLXpGdlyLF/view",
            downloadUrl: "https://drive.google.com/file/d/1Rxw60J1csBHW2qV_KkBnxwGLXpGdlyLF/view"
          },
          {
            id: "textbook_4b",
            kind: "textbook",
            titleEn: "New HSK Course 4 Volume B Textbook",
            titleZh: "《新HSK教程4》下册教材 (3.0版)",
            titleAr: "كتاب دورة HSK 4 الجديد (الجزء الثاني)",
            type: "PDF",
            size: "96.8 MB",
            previewUrl: "https://drive.google.com/file/d/1bmDHnWrgdGp9qks8a6l_aYcNO3ObuJkf/view",
            downloadUrl: "https://drive.google.com/file/d/1bmDHnWrgdGp9qks8a6l_aYcNO3ObuJkf/view"
          },
          {
            id: "audio",
            kind: "audio",
            titleEn: "New HSK 4 Textbook Audio Tracks (MP3)",
            titleZh: "新HSK 4 级全套课文与精听音频 (MP3)",
            titleAr: "صوتيات دورة HSK 4 الجديدة كاملة (MP3)",
            type: "AUDIO",
            count: "Full 2026 Audio Set",
            streamUrl: BAUL_CHINO_AUDIOS_2026,
            downloadUrl: "https://drive.google.com/drive/folders/1F8Gfs86h2Mkv3E1sloc_X1RhmyhWhNLr"
          }
        ]
      },
      classic: {
        key: "classic",
        editionLabelEn: "Classic HSK 2.0",
        editionLabelZh: "经典 HSK 2.0",
        editionLabelAr: "HSK 2.0 الكلاسيكي",
        badge: "Classic Edition",
        folderUrl: "https://drive.google.com/drive/folders/1dIkBMiob9AZWAycj1t8IvXghBeMUVXyE",
        downloadAllUrl: "https://drive.google.com/drive/folders/1dIkBMiob9AZWAycj1t8IvXghBeMUVXyE",
        audioStreamUrl: BAUL_CHINO_AUDIOS,
        items: [
          {
            id: "textbook",
            kind: "textbook",
            titleEn: "HSK Standard Course 4 (Volumes 上 & 下)",
            titleZh: "《HSK标准教程4》上下册教材",
            titleAr: "كتاب دورة HSK 4 القياسية (الجزء الأول والثاني)",
            type: "PDF",
            size: "120 MB",
            previewUrl: "https://drive.google.com/drive/folders/1dIkBMiob9AZWAycj1t8IvXghBeMUVXyE",
            downloadUrl: "https://drive.google.com/drive/folders/1dIkBMiob9AZWAycj1t8IvXghBeMUVXyE"
          },
          {
            id: "workbook",
            kind: "workbook",
            titleEn: "Standard Course 4 Workbooks & Solutions",
            titleZh: "《HSK标准教程4》上下册练习册与答案",
            titleAr: "دفتر تمارين HSK 4 مع الإجابات النموذجية",
            type: "PDF",
            size: "68 MB",
            previewUrl: "https://drive.google.com/drive/folders/1dIkBMiob9AZWAycj1t8IvXghBeMUVXyE",
            downloadUrl: "https://drive.google.com/drive/folders/1dIkBMiob9AZWAycj1t8IvXghBeMUVXyE"
          },
          {
            id: "audio",
            kind: "audio",
            titleEn: "Complete Listening Audio Sets (上 & 下)",
            titleZh: "全套课文与练习册听力音频 (MP3)",
            titleAr: "الملفات الصوتية الكاملة للاستماع والتمارين (MP3)",
            type: "AUDIO",
            count: "Full Volume Audio",
            streamUrl: BAUL_CHINO_AUDIOS,
            downloadUrl: "https://drive.google.com/drive/folders/1dIkBMiob9AZWAycj1t8IvXghBeMUVXyE"
          }
        ],
        mockExams: {
          titleEn: "Official Mock Examination Papers (9 Full Exams)",
          titleZh: "官方真题模拟试卷 (9套含听力与答案)",
          titleAr: "امتحانات تجريبية رسمية (9 امتحانات مع الصوت والحلول)",
          count: 9,
          items: [
            { id: "h40000", label: "HSK 4 Mock Exam h40000" },
            { id: "h41001", label: "HSK 4 Mock Exam h41001" },
            { id: "h41002", label: "HSK 4 Mock Exam h41002" },
            { id: "h41003", label: "HSK 4 Mock Exam h41003" },
            { id: "h41004", label: "HSK 4 Mock Exam h41004" },
            { id: "h41005", label: "HSK 4 Mock Exam h41005" },
            { id: "h41329", label: "HSK 4 Mock Exam h41329" },
            { id: "h41330", label: "HSK 4 Mock Exam h41330" },
            { id: "h41332", label: "HSK 4 Mock Exam h41332" }
          ]
        }
      }
    }
  },
  {
    level: 5,
    name: "HSK 5",
    hanzi: "五级",
    levelNameEn: "Advanced",
    levelNameZh: "高级流利",
    levelNameAr: "متقدم طليق",
    wordsCount: 2500,
    accent: "rose",
    theme: {
      border: "border-rose-500/20 hover:border-rose-500/40",
      badge: "bg-rose-500/10 text-rose-400 border-rose-500/30",
      accentBg: "from-rose-500/10 via-rose-500/5 to-transparent",
      button: "bg-rose-600 hover:bg-rose-500 text-white",
      buttonOutline: "border-rose-500/30 hover:bg-rose-500/10 text-rose-300"
    },
    driveFolderUrl: "https://drive.google.com/drive/folders/1O91ofsfWqkivhwl7nzRCJmHi2ly-Kfhp",
    defaultEdition: "new",
    editions: {
      new: {
        key: "new",
        editionLabelEn: "New HSK 3.0 (2026)",
        editionLabelZh: "新 HSK 3.0 (2026版)",
        editionLabelAr: "HSK 3.0 الجديد (2026)",
        badge: "2026 Edition",
        folderUrl: "https://drive.google.com/drive/folders/1nTg2Ra1jyv5NckLaZtGJb-xenUzJZK4D",
        downloadAllUrl: "https://drive.google.com/drive/folders/1nTg2Ra1jyv5NckLaZtGJb-xenUzJZK4D",
        audioStreamUrl: BAUL_CHINO_AUDIOS_2026,
        items: [
          {
            id: "textbook_5a",
            kind: "textbook",
            titleEn: "New HSK Course 5 Volume A Textbook",
            titleZh: "《新HSK教程5》上册教材 (3.0版)",
            titleAr: "كتاب دورة HSK 5 الجديد (الجزء الأول)",
            type: "PDF",
            size: "26.4 MB",
            previewUrl: "https://drive.google.com/file/d/1qkraakFKX7xBmuADSPcmVYD161lkQbfT/view",
            downloadUrl: "https://drive.google.com/file/d/1qkraakFKX7xBmuADSPcmVYD161lkQbfT/view"
          },
          {
            id: "workbook_5a",
            kind: "workbook",
            titleEn: "New HSK Course 5 Volume A Workbook",
            titleZh: "《新HSK教程5》上册练习册",
            titleAr: "دفتر تمارين دورة HSK 5 (الجزء الأول)",
            type: "PDF",
            size: "31.1 MB",
            previewUrl: "https://drive.google.com/file/d/1f8SuyRZi7cIwH8SyPGpRsIiK9QMYEeE0/view",
            downloadUrl: "https://drive.google.com/file/d/1f8SuyRZi7cIwH8SyPGpRsIiK9QMYEeE0/view"
          },
          {
            id: "textbook_5b",
            kind: "textbook",
            titleEn: "New HSK Course 5 Volume B Textbook",
            titleZh: "《新HSK教程5》下册教材 (3.0版)",
            titleAr: "كتاب دورة HSK 5 الجديد (الجزء الثاني)",
            type: "PDF",
            size: "25.3 MB",
            previewUrl: "https://drive.google.com/file/d/1CfdE4WmNAQjB0CX37nPI0KL8JK8mcPTp/view",
            downloadUrl: "https://drive.google.com/file/d/1CfdE4WmNAQjB0CX37nPI0KL8JK8mcPTp/view"
          },
          {
            id: "workbook_5b",
            kind: "workbook",
            titleEn: "New HSK Course 5 Volume B Workbook",
            titleZh: "《新HSK教程5》下册练习册",
            titleAr: "دفتر تمارين دورة HSK 5 (الجزء الثاني)",
            type: "PDF",
            size: "49.2 MB",
            previewUrl: "https://drive.google.com/file/d/1Qpc6LvJFmg4vrSvV0Ef3tD2XppY292Es/view",
            downloadUrl: "https://drive.google.com/file/d/1Qpc6LvJFmg4vrSvV0Ef3tD2XppY292Es/view"
          },
          {
            id: "audio",
            kind: "audio",
            titleEn: "New HSK 5 Textbook Audio Tracks (MP3)",
            titleZh: "新HSK 5 级全套课文与高阶精听 (MP3)",
            titleAr: "صوتيات دورة HSK 5 الجديدة كاملة (MP3)",
            type: "AUDIO",
            count: "Full 2026 Audio Set",
            streamUrl: BAUL_CHINO_AUDIOS_2026,
            downloadUrl: "https://drive.google.com/drive/folders/1nTg2Ra1jyv5NckLaZtGJb-xenUzJZK4D"
          }
        ]
      },
      classic: {
        key: "classic",
        editionLabelEn: "Classic HSK 2.0",
        editionLabelZh: "经典 HSK 2.0",
        editionLabelAr: "HSK 2.0 الكلاسيكي",
        badge: "Classic Edition",
        folderUrl: "https://drive.google.com/drive/folders/1xjuDvSBI7oLg97zo7nkvBP_hPve4RsUB",
        downloadAllUrl: "https://drive.google.com/drive/folders/1xjuDvSBI7oLg97zo7nkvBP_hPve4RsUB",
        audioStreamUrl: BAUL_CHINO_AUDIOS,
        items: [
          {
            id: "textbook",
            kind: "textbook",
            titleEn: "HSK Standard Course 5 Vocabulary Handbook",
            titleZh: "《HSK标准教程5》教材与词汇指南",
            titleAr: "كتاب دورة HSK 5 القياسية ودليل المفردات",
            type: "PDF",
            size: "1.9 MB",
            previewUrl: "https://drive.google.com/file/d/1rGu09ZSUqhAgcVgoZDxoNJYd3enY6qTj/view",
            downloadUrl: "https://drive.google.com/file/d/1rGu09ZSUqhAgcVgoZDxoNJYd3enY6qTj/view"
          },
          {
            id: "workbook",
            kind: "workbook",
            titleEn: "Standard Course 5 Comprehensive Lexicon List",
            titleZh: "《HSK标准教程5》全套核心词汇解析",
            titleAr: "دفتر المفردات والتمارين المتقدمة HSK 5",
            type: "PDF",
            size: "5.0 MB",
            previewUrl: "https://drive.google.com/file/d/1GVB_xezoKvjWw1ROc7cz0Y2gHxEjCh-t/view",
            downloadUrl: "https://drive.google.com/file/d/1GVB_xezoKvjWw1ROc7cz0Y2gHxEjCh-t/view"
          },
          {
            id: "audio",
            kind: "audio",
            titleEn: "HSK 5 Textbook Audio Tracks (MP3)",
            titleZh: "课本课文与练习听力音频 (MP3)",
            titleAr: "صوتيات نصوص الدروس والاستماع (MP3)",
            type: "AUDIO",
            count: "Full Audio Set",
            streamUrl: BAUL_CHINO_AUDIOS,
            downloadUrl: "https://drive.google.com/drive/folders/1O91ofsfWqkivhwl7nzRCJmHi2ly-Kfhp"
          }
        ],
        mockExams: {
          titleEn: "Official Mock Examination Papers (10 Full Exams)",
          titleZh: "官方真题模拟试卷 (10套含听力与答案)",
          titleAr: "امتحانات تجريبية رسمية (10 نماذج كاملة مع الاستماع والحل)",
          count: 10,
          items: [
            { id: "H51001", label: "HSK 5 Mock Exam H51001" },
            { id: "H51002", label: "HSK 5 Mock Exam H51002" },
            { id: "H51003", label: "HSK 5 Mock Exam H51003" },
            { id: "H51004", label: "HSK 5 Mock Exam H51004" },
            { id: "H51005", label: "HSK 5 Mock Exam H51005" },
            { id: "h51327", label: "HSK 5 Mock Exam h51327" },
            { id: "h51328", label: "HSK 5 Mock Exam h51328" },
            { id: "h51329", label: "HSK 5 Mock Exam h51329" },
            { id: "h51330", label: "HSK 5 Mock Exam h51330" },
            { id: "h51332", label: "HSK 5 Mock Exam h51332" }
          ]
        }
      }
    }
  },
  {
    level: 6,
    name: "HSK 6",
    hanzi: "六级",
    levelNameEn: "Mastery",
    levelNameZh: "最高精通",
    levelNameAr: "إتقان واحتراف",
    wordsCount: 5000,
    accent: "indigo",
    theme: {
      border: "border-indigo-500/20 hover:border-indigo-500/40",
      badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
      accentBg: "from-indigo-500/10 via-indigo-500/5 to-transparent",
      button: "bg-indigo-600 hover:bg-indigo-500 text-white",
      buttonOutline: "border-indigo-500/30 hover:bg-indigo-500/10 text-indigo-300"
    },
    driveFolderUrl: "https://drive.google.com/drive/folders/1-t__G2zFIHLZjsOWxZmyRYZtuV0FO4_9",
    defaultEdition: "classic",
    editions: {
      classic: {
        key: "classic",
        editionLabelEn: "Standard Course 6",
        editionLabelZh: "标准教程 6 级",
        editionLabelAr: "الدورة القياسية HSK 6",
        badge: "Official Package",
        folderUrl: "https://drive.google.com/drive/folders/1-t__G2zFIHLZjsOWxZmyRYZtuV0FO4_9",
        downloadAllUrl: "https://drive.google.com/drive/folders/1-t__G2zFIHLZjsOWxZmyRYZtuV0FO4_9",
        audioStreamUrl: BAUL_CHINO_AUDIOS,
        items: [
          {
            id: "textbook_6a",
            kind: "textbook",
            titleEn: "HSK 6 Volume A Textbook",
            titleZh: "《HSK标准教程6》上册教材",
            titleAr: "كتاب دورة HSK 6 القياسية (الجزء الأول)",
            type: "PDF",
            size: "102 MB",
            previewUrl: "https://drive.google.com/file/d/13Mf5cHI49UlfzFS2hEsDgRmH8K95gW8m/view",
            downloadUrl: "https://drive.google.com/file/d/13Mf5cHI49UlfzFS2hEsDgRmH8K95gW8m/view"
          },
          {
            id: "workbook_6a",
            kind: "workbook",
            titleEn: "HSK 6 Volume A Workbook",
            titleZh: "《HSK标准教程6》上册练习册",
            titleAr: "دفتر تمارين دورة HSK 6 (الجزء الأول)",
            type: "PDF",
            size: "43.3 MB",
            previewUrl: "https://drive.google.com/file/d/1fkF6qnbe9c5JBeP_eqqsUIvPUGEWf08Y/view",
            downloadUrl: "https://drive.google.com/file/d/1fkF6qnbe9c5JBeP_eqqsUIvPUGEWf08Y/view"
          },
          {
            id: "textbook_6b",
            kind: "textbook",
            titleEn: "HSK 6 Volume B Textbook",
            titleZh: "《HSK标准教程6》下册教材",
            titleAr: "كتاب دورة HSK 6 القياسية (الجزء الثاني)",
            type: "PDF",
            size: "110.8 MB",
            previewUrl: "https://drive.google.com/file/d/1jyitInz7P95Fl_4cW67IAuPgmPivj0Iv/view",
            downloadUrl: "https://drive.google.com/file/d/1jyitInz7P95Fl_4cW67IAuPgmPivj0Iv/view"
          },
          {
            id: "workbook_6b",
            kind: "workbook",
            titleEn: "HSK 6 Volume B Workbook",
            titleZh: "《HSK标准教程6》下册练习册",
            titleAr: "دفتر تمارين دورة HSK 6 (الجزء الثاني)",
            type: "PDF",
            size: "48.9 MB",
            previewUrl: "https://drive.google.com/file/d/1myr86KiO3mYPd9Ot83SrdlX6jeha-Q5P/view",
            downloadUrl: "https://drive.google.com/file/d/1myr86KiO3mYPd9Ot83SrdlX6jeha-Q5P/view"
          },
          {
            id: "audio",
            kind: "audio",
            titleEn: "Standard Course 6 Listening Audio Tracks (MP3)",
            titleZh: "全套精读课文与模拟听力音频 (MP3)",
            titleAr: "الملفات الصوتية الكاملة للمستوى السادس (MP3)",
            type: "AUDIO",
            count: "Full Audio Set",
            streamUrl: BAUL_CHINO_AUDIOS,
            downloadUrl: "https://drive.google.com/drive/folders/1-t__G2zFIHLZjsOWxZmyRYZtuV0FO4_9"
          }
        ],
        mockExams: {
          titleEn: "Official Examination Practice Sets",
          titleZh: "官方真题与精选备考套题",
          titleAr: "نماذج امتحانات رسمية واختبارات متقدمة",
          count: 3,
          items: [
            { id: "h6_vocab", label: "HSK 6 Complete 5000-Word Lexicon (PDF)" },
            { id: "h6_exam_1", label: "HSK 6 Official Mock Exam Set A" },
            { id: "h6_exam_2", label: "HSK 6 Official Mock Exam Set B" }
          ]
        }
      }
    }
  }
];

export const additionalResourceCards = [
  {
    id: "hsk-grammar",
    filterKey: "grammar",
    name: "HSK 1-6 Grammar",
    shortBadge: "GRAMMAR",
    hanzi: "语法手册",
    titleEn: "HSK 1-6 Comprehensive Grammar Guide",
    titleZh: "HSK 1-6 级实用语法全解手册",
    titleAr: "دليل قواعد HSK 1-6 الشامل",
    descEn: "Complete essential grammar manual covering sentence patterns, particles, aspect markers, and structures across all 6 HSK levels.",
    descZh: "系统梳理 HSK 1 至 6 级核心句型、虚词、时态助词及语法要点，配有清晰例句与用法解析。",
    descAr: "دليل شامل ومكثف لقواعد اللغة الصينية من المستوى الأول حتى السادس، مع شروحات وأمثلة توضيحية لجميع التراكيب.",
    accent: "amber",
    theme: {
      border: "border-amber-500/20 hover:border-amber-500/40",
      badge: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      accentBg: "from-amber-500/10 via-amber-500/5 to-transparent",
      button: "bg-amber-600 hover:bg-amber-500 text-white",
      buttonOutline: "border-amber-500/30 hover:bg-amber-500/10 text-amber-300"
    },
    driveFolderUrl: "https://drive.google.com/file/d/1oXXM05cb_8liwQZiiZ3YFn0bdZBCh86w/view",
    items: [
      {
        id: "grammar-full",
        labelEn: "HSK 1-6 Complete Grammar Guide (PDF)",
        labelZh: "《HSK 1-6 级实用语法全解手册》高清版",
        labelAr: "دليل قواعد HSK 1-6 الشامل (PDF)",
        size: "2.7 MB",
        url: "https://drive.google.com/file/d/1oXXM05cb_8liwQZiiZ3YFn0bdZBCh86w/view"
      }
    ],
    downloadAllUrl: "https://drive.google.com/file/d/1oXXM05cb_8liwQZiiZ3YFn0bdZBCh86w/view"
  },
  {
    id: "hsk-words",
    filterKey: "words",
    name: "HSK Word Lists",
    shortBadge: "WORDS",
    hanzi: "词汇表",
    titleEn: "HSK 1-6 Word Lists",
    titleZh: "HSK 1-6 级核心词汇表",
    titleAr: "قوائم مفردات HSK 1-6",
    descEn: "Complete printable vocabulary checklists, lexicons, and study guides for HSK Levels 1 through 6.",
    descZh: "汇总 HSK 1 至 6 级各级别全套官方词汇表，含拼音标注、汉字书写参考与分级词条。",
    descAr: "قوائم شاملة لمفردات المستويات من الأول إلى السادس مع البينيين والترجمة، جاهزة للتحميل والمراجعة.",
    accent: "teal",
    theme: {
      border: "border-teal-500/20 hover:border-teal-500/40",
      badge: "bg-teal-500/10 text-teal-400 border-teal-500/30",
      accentBg: "from-teal-500/10 via-teal-500/5 to-transparent",
      button: "bg-teal-600 hover:bg-teal-500 text-white",
      buttonOutline: "border-teal-500/30 hover:bg-teal-500/10 text-teal-300"
    },
    driveFolderUrl: "https://drive.google.com/drive/folders/1jL1F33mz-dCJJzc4DpHY4b3a2R_Ww1yy",
    items: [
      {
        id: "words-hsk1",
        labelEn: "HSK 1 Vocabulary List (150 Words)",
        labelZh: "HSK 1 级词汇表 (150 词)",
        labelAr: "قائمة كلمات HSK 1 (150 كلمة)",
        size: "895 KB",
        url: "https://drive.google.com/drive/folders/1vEaIrC91dBxDUVu4iOcklMZQ_SP5xJUR"
      },
      {
        id: "words-hsk2",
        labelEn: "HSK 2 Vocabulary List (300 Words)",
        labelZh: "HSK 2 级词汇表 (300 词)",
        labelAr: "قائمة كلمات HSK 2 (300 كلمة)",
        size: "910 KB",
        url: "https://drive.google.com/drive/folders/1AcgXWnPcq-g0HbPbarK2dvFdPcaigYEe"
      },
      {
        id: "words-hsk3",
        labelEn: "HSK 3 Vocabulary List (600 Words)",
        labelZh: "HSK 3 级词汇表 (600 词)",
        labelAr: "قائمة كلمات HSK 3 (600 كلمة)",
        size: "1.2 MB",
        url: "https://drive.google.com/drive/folders/1LM99Q-N8ZavhbYytiiqEXLvnsSGMQaWf"
      },
      {
        id: "words-hsk4",
        labelEn: "HSK 4 Vocabulary List (1200 Words)",
        labelZh: "HSK 4 级词汇表 (1200 词)",
        labelAr: "قائمة كلمات HSK 4 (1200 كلمة)",
        size: "1.8 MB",
        url: "https://drive.google.com/drive/folders/17v4ALewb4kNJu6nxC-OO8Z_Z0TRWrTg6"
      },
      {
        id: "words-hsk5",
        labelEn: "HSK 5 Vocabulary List (2500 Words)",
        labelZh: "HSK 5 级词汇表 (2500 词)",
        labelAr: "قائمة كلمات HSK 5 (2500 كلمة)",
        size: "5.3 MB",
        url: "https://drive.google.com/drive/folders/1hkp8X7lfbN5fXGWtZaxXqvxQemHZZ3IG"
      },
      {
        id: "words-hsk6",
        labelEn: "HSK 6 Complete Lexicon (5000 Words)",
        labelZh: "HSK 6 级完整词汇全集 (5000 词)",
        labelAr: "معجم HSK 6 الكامل (5000 كلمة)",
        size: "9.3 MB",
        url: "https://drive.google.com/drive/folders/15OdsU4648UicFmzz16HlMJj4M79fWC00"
      }
    ],
    downloadAllUrl: "https://drive.google.com/drive/folders/1jL1F33mz-dCJJzc4DpHY4b3a2R_Ww1yy"
  },
  {
    id: "writing-grids",
    filterKey: "grids",
    name: "Writing Grids",
    shortBadge: "GRIDS",
    hanzi: "字帖",
    titleEn: "Chinese Character Writing Practice Grids",
    titleZh: "汉字书写练习字帖 (米字格与田字格)",
    titleAr: "شبكات تدريب كتابة المقاطع الصينية (田字格 & 米字格)",
    descEn: "Printable high-resolution practice sheets in Large, Medium, and Small grid formats for mastering stroke balance and calligraphy.",
    descZh: "标准高清 A4 练字纸，包含大格、中格、小格三种规格，适合笔顺书写、结构定型与日常练字练习。",
    descAr: "أوراق تدريب A4 عالية الدقة بثلاثة أحجام (كبيرة، متوسطة، صغيرة) لضبط توازن المقاطع والخط الصيني.",
    accent: "indigo",
    theme: {
      border: "border-indigo-500/20 hover:border-indigo-500/40",
      badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
      accentBg: "from-indigo-500/10 via-indigo-500/5 to-transparent",
      button: "bg-indigo-600 hover:bg-indigo-500 text-white",
      buttonOutline: "border-indigo-500/30 hover:bg-indigo-500/10 text-indigo-300"
    },
    driveFolderUrl: "https://drive.google.com/drive/folders/1H0jUCjXYJH2gDJ9hHFeIxQlFjYfoMuVZ",
    items: [
      {
        id: "grid-large",
        labelEn: "Large Grids (大格字帖 - 12x8)",
        labelZh: "大号字帖 (适合初学者笔顺训练)",
        labelAr: "شبكات بحجم كبير (للمبتدئين وضبط المسار)",
        size: "30 KB",
        url: "https://drive.google.com/file/d/1lPAag_A7lzxpvDqivTknsrdLa6r1OCEL/view"
      },
      {
        id: "grid-medium",
        labelEn: "Medium Grids (中格字帖 - 15x10)",
        labelZh: "中号字帖 (标准练习日常书写)",
        labelAr: "شبكات بحجم متوسط (للتدريب اليومي المعتاد)",
        size: "31 KB",
        url: "https://drive.google.com/file/d/1SV7V950Rxe1NclRWercpE43zG4zgwEvZ/view"
      },
      {
        id: "grid-small",
        labelEn: "Small Grids (小格字帖 - 20x14)",
        labelZh: "小号字帖 (进阶篇章段落书写)",
        labelAr: "شبكات بحجم صغير (لكتابة الفقرات والنصوص)",
        size: "33 KB",
        url: "https://drive.google.com/file/d/1iJXNe4sAcRugzYEPZXqMtjZDFJDpOGup/view"
      }
    ],
    downloadAllUrl: "https://drive.google.com/drive/folders/1H0jUCjXYJH2gDJ9hHFeIxQlFjYfoMuVZ"
  }
];

/**
 * HSK Standard Course Books & Learning Materials Catalog
 * Provides structured metadata and cloud links for HSK Levels 1 through 6,
 * plus dedicated resource packages (Writing Grids and Vocabulary Lists).
 */

export const HSK_DRIVE_ROOT = "https://drive.google.com/drive/folders/1BP51tgLPS4GKJ6JC4tYsdL8wYjg_sckZ";
export const BAUL_CHINO_BOOKS = "https://www.baulchino.com/libros-hsk";
export const BAUL_CHINO_AUDIOS = "https://www.baulchino.com/hsk-audios";

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
    textbook: {
      titleEn: "HSK Standard Course 1 Textbook",
      titleZh: "《HSK标准教程1》",
      titleAr: "كتاب دورة HSK 1 القياسية",
      type: "PDF",
      size: "67 MB",
      previewUrl: "https://drive.google.com/file/d/1tGS7dae6EXkPqx0loSgAHGkBnpxFmOXf/view",
      downloadUrl: "https://drive.google.com/file/d/1tGS7dae6EXkPqx0loSgAHGkBnpxFmOXf/view"
    },
    workbook: {
      titleEn: "HSK Standard Course 1 Workbook & Pinyin Table",
      titleZh: "《HSK标准教程1》练习册与声韵拼合表",
      titleAr: "دفتر تمارين دورة HSK 1 وجدول البينيين",
      type: "PDF",
      size: "22 MB",
      previewUrl: "https://drive.google.com/file/d/1G96ByrJCknEg3Fy9XHLu6jfa_8XlYJwF/view",
      downloadUrl: "https://drive.google.com/file/d/1G96ByrJCknEg3Fy9XHLu6jfa_8XlYJwF/view"
    },
    audio: {
      titleEn: "Textbook & Workbook Listening Audio (MP3)",
      titleZh: "课本与练习册听力音频 (MP3)",
      titleAr: "الملفات الصوتية للاستماع للدرس والتمارين (MP3)",
      count: "Full Audio Set",
      streamUrl: BAUL_CHINO_AUDIOS,
      downloadUrl: "https://drive.google.com/drive/folders/1NiyDEs7nw0OZm4tr7V0Ojv3u0p4ZBk8W"
    },
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
    },
    downloadAllUrl: "https://drive.google.com/drive/folders/1NiyDEs7nw0OZm4tr7V0Ojv3u0p4ZBk8W"
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
    textbook: {
      titleEn: "HSK Standard Course 2 Textbook",
      titleZh: "《HSK标准教程2》",
      titleAr: "كتاب دورة HSK 2 القياسية",
      type: "PDF",
      size: "52 MB",
      previewUrl: "https://drive.google.com/file/d/1Qvd3zJBkVDkzQ4ozEoguQtEZzfmT76tP/view",
      downloadUrl: "https://drive.google.com/file/d/1Qvd3zJBkVDkzQ4ozEoguQtEZzfmT76tP/view"
    },
    workbook: {
      titleEn: "HSK Standard Course 2 Workbook & Practice Questions",
      titleZh: "《HSK标准教程2》练习册与模拟自测题",
      titleAr: "دفتر تمارين دورة HSK 2 وأسئلة التدريب",
      type: "PDF",
      size: "35 MB",
      previewUrl: "https://drive.google.com/file/d/1mNUK8i6y5IFXPDDWsST6jCIlocPvmj_u/view",
      downloadUrl: "https://drive.google.com/file/d/1mNUK8i6y5IFXPDDWsST6jCIlocPvmj_u/view"
    },
    audio: {
      titleEn: "Textbook & Workbook Listening Audio (MP3)",
      titleZh: "课本与练习册听力音频 (MP3)",
      titleAr: "الملفات الصوتية للاستماع للدرس والتمارين (MP3)",
      count: "Full Audio Set",
      streamUrl: BAUL_CHINO_AUDIOS,
      downloadUrl: "https://drive.google.com/drive/folders/19IW6BsDkAcctumqd3v559TsNtZgq9kqb"
    },
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
    },
    downloadAllUrl: "https://drive.google.com/drive/folders/19IW6BsDkAcctumqd3v559TsNtZgq9kqb"
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
    textbook: {
      titleEn: "HSK Standard Course 3 Textbook & Grammar Guide",
      titleZh: "《HSK标准教程3》与语法手册",
      titleAr: "كتاب دورة HSK 3 القياسية ودليل القواعد",
      type: "PDF",
      size: "38 MB",
      previewUrl: "https://drive.google.com/file/d/1ICnmHLitC3vH7hAmQ0-Yje5cnHwycE1g/view",
      downloadUrl: "https://drive.google.com/file/d/1ICnmHLitC3vH7hAmQ0-Yje5cnHwycE1g/view"
    },
    workbook: {
      titleEn: "HSK Standard Course 3 Workbook & Answers",
      titleZh: "《HSK标准教程3》练习册与参考答案",
      titleAr: "دفتر تمارين دورة HSK 3 والإجابات النموذجية",
      type: "PDF",
      size: "42 MB",
      previewUrl: "https://drive.google.com/file/d/1cASxo7X69SgjDnO8U4fkTgnzvvqvZMVb/view",
      downloadUrl: "https://drive.google.com/file/d/1cASxo7X69SgjDnO8U4fkTgnzvvqvZMVb/view"
    },
    audio: {
      titleEn: "Lesson Audio & Workbook Listening Tracks (Parts 1 & 2)",
      titleZh: "课本20课音频与练习册全套听力 (MP3)",
      titleAr: "صوتيات الـ 20 درس مع تمارين الاستماع كاملة (MP3)",
      count: "40+ Lessons Tracks",
      streamUrl: BAUL_CHINO_AUDIOS,
      downloadUrl: "https://drive.google.com/drive/folders/1cfdY4ABs2nakFxGtQDJ5q4dwcCVRhIWV"
    },
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
    },
    downloadAllUrl: "https://drive.google.com/drive/folders/1cfdY4ABs2nakFxGtQDJ5q4dwcCVRhIWV"
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
    textbook: {
      titleEn: "HSK Standard Course 4 (Volumes 上 & 下)",
      titleZh: "《HSK标准教程4》上下册教材",
      titleAr: "كتاب دورة HSK 4 القياسية (الجزء الأول والثاني)",
      type: "PDF",
      size: "120 MB",
      previewUrl: "https://drive.google.com/drive/folders/14KzcsYsHjCzefj77Uh3bUxoLWxOYXpTl",
      downloadUrl: "https://drive.google.com/drive/folders/14KzcsYsHjCzefj77Uh3bUxoLWxOYXpTl"
    },
    workbook: {
      titleEn: "HSK Standard Course 4 Workbooks & Solutions (上 & 下)",
      titleZh: "《HSK标准教程4》上下册练习册与答案",
      titleAr: "دفتر تمارين HSK 4 مع الإجابات (الجزء الأول والثاني)",
      type: "PDF",
      size: "68 MB",
      previewUrl: "https://drive.google.com/drive/folders/14KzcsYsHjCzefj77Uh3bUxoLWxOYXpTl",
      downloadUrl: "https://drive.google.com/drive/folders/14KzcsYsHjCzefj77Uh3bUxoLWxOYXpTl"
    },
    audio: {
      titleEn: "Complete Listening Audio Sets (上 & 下)",
      titleZh: "全套课文与练习册听力音频 (MP3)",
      titleAr: "الملفات الصوتية الكاملة للاستماع والتمارين (MP3)",
      count: "Full Volume Audio",
      streamUrl: BAUL_CHINO_AUDIOS,
      downloadUrl: "https://drive.google.com/drive/folders/14KzcsYsHjCzefj77Uh3bUxoLWxOYXpTl"
    },
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
    },
    downloadAllUrl: "https://drive.google.com/drive/folders/14KzcsYsHjCzefj77Uh3bUxoLWxOYXpTl"
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
    textbook: {
      titleEn: "HSK Standard Course 5 Textbook & Vocabulary Guide",
      titleZh: "《HSK标准教程5》教材与核心词汇手册",
      titleAr: "كتاب دورة HSK 5 القياسية ودليل المفردات",
      type: "PDF",
      size: "95 MB",
      previewUrl: "https://drive.google.com/file/d/1rGu09ZSUqhAgcVgoZDxoNJYd3enY6qTj/view",
      downloadUrl: "https://drive.google.com/file/d/1rGu09ZSUqhAgcVgoZDxoNJYd3enY6qTj/view"
    },
    workbook: {
      titleEn: "HSK Standard Course 5 Workbook & Answer Keys",
      titleZh: "《HSK标准教程5》练习册与答案解析",
      titleAr: "دفتر تمارين دورة HSK 5 وحلول التمارين",
      type: "PDF",
      size: "54 MB",
      previewUrl: "https://drive.google.com/file/d/1GVB_xezoKvjWw1ROc7cz0Y2gHxEjCh-t/view",
      downloadUrl: "https://drive.google.com/file/d/1GVB_xezoKvjWw1ROc7cz0Y2gHxEjCh-t/view"
    },
    audio: {
      titleEn: "HSK 5 Textbook & Workbook Audio Tracks (MP3)",
      titleZh: "课本课文与练习册听力音频 (MP3)",
      titleAr: "صوتيات نصوص الدروس وتمارين الاستماع (MP3)",
      count: "Full Audio Set",
      streamUrl: BAUL_CHINO_AUDIOS,
      downloadUrl: "https://drive.google.com/drive/folders/1O91ofsfWqkivhwl7nzRCJmHi2ly-Kfhp"
    },
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
    },
    downloadAllUrl: "https://drive.google.com/drive/folders/1O91ofsfWqkivhwl7nzRCJmHi2ly-Kfhp"
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
    textbook: {
      titleEn: "HSK Standard Course 6 (Volumes 上 & 下)",
      titleZh: "《HSK标准教程6》上下册教材",
      titleAr: "كتاب دورة HSK 6 القياسية (الجزء الأول والثاني)",
      type: "PDF",
      size: "140 MB",
      previewUrl: BAUL_CHINO_BOOKS,
      downloadUrl: "https://drive.google.com/drive/folders/1-t__G2zFIHLZjsOWxZmyRYZtuV0FO4_9"
    },
    workbook: {
      titleEn: "HSK Standard Course 6 Workbook & Answers",
      titleZh: "《HSK标准教程6》上下册练习册与答案",
      titleAr: "دفتر تمارين HSK 6 والحلول النموذجية",
      type: "PDF",
      size: "72 MB",
      previewUrl: BAUL_CHINO_BOOKS,
      downloadUrl: "https://drive.google.com/drive/folders/1-t__G2zFIHLZjsOWxZmyRYZtuV0FO4_9"
    },
    audio: {
      titleEn: "Standard Course 6 Listening Audio Tracks (MP3)",
      titleZh: "全套精读课文与模拟听力音频 (MP3)",
      titleAr: "الملفات الصوتية الكاملة للمستوى السادس (MP3)",
      count: "Full Audio Set",
      streamUrl: BAUL_CHINO_AUDIOS,
      downloadUrl: "https://drive.google.com/drive/folders/1-t__G2zFIHLZjsOWxZmyRYZtuV0FO4_9"
    },
    mockExams: {
      titleEn: "Official Examination Practice Sets",
      titleZh: "官方真题与精选备考套题",
      titleAr: "نماذج امتحانات رسمية واختبارات متقدمة",
      count: 4,
      items: [
        { id: "h6_vocab", label: "HSK 6 Complete 5000-Word Lexicon (PDF)" },
        { id: "h6_exam_1", label: "HSK 6 Official Mock Exam Set A" },
        { id: "h6_exam_2", label: "HSK 6 Official Mock Exam Set B" }
      ]
    },
    downloadAllUrl: "https://drive.google.com/drive/folders/1-t__G2zFIHLZjsOWxZmyRYZtuV0FO4_9"
  }
];

export const additionalResourceCards = [
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

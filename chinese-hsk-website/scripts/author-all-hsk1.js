import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const destDir = path.join(projectRoot, "source-data", "conversations", "hsk-1");

export const hsk1Lessons = [
  {
    id: "hsk-1-unit-1",
    hskLevel: 1,
    unitId: 1,
    contentType: "dialogue",
    status: "ready",
    title: {
      zh: "第1课：你好",
      en: "Lesson 1: Hello",
      ar: "الدرس 1: مرحباً",
    },
    targetVocabularyIds: ["ni", "hao-2", "nin", "nimen", "duibuqi", "mei-guanxi"],
    dialogue: [
      {
        id: "1-1-1",
        role: "Speaker A",
        hanzi: "你好！",
        pinyin: "Nǐ hǎo!",
        translation: {
          en: "Hello!",
          ar: "مرحباً!",
        },
        audio: null,
      },
      {
        id: "1-1-2",
        role: "Speaker B",
        hanzi: "你好！",
        pinyin: "Nǐ hǎo!",
        translation: {
          en: "Hello!",
          ar: "مرحباً!",
        },
        audio: null,
      },
      {
        id: "1-2-1",
        role: "Speaker A",
        hanzi: "您好！",
        pinyin: "Nín hǎo!",
        translation: {
          en: "Hello (respectful)!",
          ar: "أهلاً وسهلاً بكَ (بصيغة الاحترام)!",
        },
        audio: null,
      },
      {
        id: "1-2-2",
        role: "Speaker B",
        hanzi: "你们好！",
        pinyin: "Nǐmen hǎo!",
        translation: {
          en: "Hello everyone!",
          ar: "مرحباً بكم جميعاً!",
        },
        audio: null,
      },
      {
        id: "1-3-1",
        role: "Speaker A",
        hanzi: "对不起！",
        pinyin: "Duìbuqǐ!",
        translation: {
          en: "I am sorry!",
          ar: "أنا آسف!",
        },
        audio: null,
      },
      {
        id: "1-3-2",
        role: "Speaker B",
        hanzi: "没关系！",
        pinyin: "Méi guānxi!",
        translation: {
          en: "That is all right!",
          ar: "لا بأس! (لا عليك!)",
        },
        audio: null,
      },
    ],
    grammarNotes: [
      {
        point: "The greeting 你好 (Nǐ hǎo)",
        explanation: "The standard everyday Chinese greeting for one person. For respectful greeting to elders or superiors, use 您好 (Nín hǎo).",
        arExplanation: "التحية الأساسية في اللغة الصينية. لمخاطبة الأكبر سناً أو المعلمين باحترام، نستخدم 您好.",
      },
      {
        point: "Third tone sandhi (3 + 3 -> 2 + 3)",
        explanation: "When two third tones occur consecutively (nǐ + hǎo), the first tone changes into a second tone (ní hǎo).",
        arExplanation: "عند التقاء نغمتين ثالثتين، تتحول النغمة الأولى صوتياً إلى نغمة ثانية.",
      },
    ],
    culturalNotes: [
      {
        title: "Polite Address: 您 (Nín)",
        detail: "In Chinese etiquette, using 您 shows high regard for elders, teachers, and clients.",
        arDetail: "يعبر استخدام ضمير الاحترام 您 عن التقدير الرفيع لكبار السن والمعلمين.",
      },
    ],
    comprehensionQuestions: [
      {
        id: "q1-1",
        question: "How do you respond when someone says 对不起 (Duìbuqǐ)?",
        arQuestion: "كيف ترد عندما يعتذر لك أحدهم بـ 对不起؟",
        options: ["没关系 (Méi guānxi)", "你好 (Nǐ hǎo)", "不客气 (Bú kèqi)", "再见 (Zàijiàn)"],
        answerIndex: 0,
      },
    ],
    shadowingPractice: {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: "Official HSK 1 Standard Course Lesson 1 dialogues.",
  },
  {
    id: "hsk-1-unit-2",
    hskLevel: 1,
    unitId: 2,
    contentType: "dialogue",
    status: "ready",
    title: {
      zh: "第2课：谢谢你",
      en: "Lesson 2: Thank You",
      ar: "الدرس 2: شكراً لك",
    },
    targetVocabularyIds: ["xiexie", "bu-keqi", "bu", "zaijian"],
    dialogue: [
      {
        id: "2-1-1",
        role: "Speaker A",
        hanzi: "谢谢！",
        pinyin: "Xièxie!",
        translation: {
          en: "Thank you!",
          ar: "شكراً!",
        },
        audio: null,
      },
      {
        id: "2-1-2",
        role: "Speaker B",
        hanzi: "不客气！",
        pinyin: "Bú kèqi!",
        translation: {
          en: "You are welcome!",
          ar: "على الرحب والسعة!",
        },
        audio: null,
      },
      {
        id: "2-2-1",
        role: "Speaker A",
        hanzi: "谢谢你！",
        pinyin: "Xièxie nǐ!",
        translation: {
          en: "Thank you!",
          ar: "شكراً لكَ!",
        },
        audio: null,
      },
      {
        id: "2-2-2",
        role: "Speaker B",
        hanzi: "不谢！",
        pinyin: "Bú xiè!",
        translation: {
          en: "Don't mention it!",
          ar: "لا داعي للشكر!",
        },
        audio: null,
      },
      {
        id: "2-3-1",
        role: "Speaker A",
        hanzi: "再见！",
        pinyin: "Zàijiàn!",
        translation: {
          en: "Goodbye!",
          ar: "إلى اللقاء!",
        },
        audio: null,
      },
      {
        id: "2-3-2",
        role: "Speaker B",
        hanzi: "再见！",
        pinyin: "Zàijiàn!",
        translation: {
          en: "Goodbye!",
          ar: "إلى اللقاء!",
        },
        audio: null,
      },
    ],
    grammarNotes: [
      {
        point: "Tone variation of 不 (Bù)",
        explanation: "不 is a 4th tone word, but changes to 2nd tone (bú) when followed by another 4th tone syllable, such as in bú kèqi and bú xiè.",
        arExplanation: "تتحول نغمة 不 إلى النغمة الثانية عندما يتبعها مقطع يحمل النغمة الرابعة.",
      },
    ],
    culturalNotes: [
      {
        title: "Meaning of 不客气 (Bú kèqi)",
        detail: "不客气 translates literally to 'no need to be polite', establishing a welcoming, friendly relationship.",
        arDetail: "تعني حرفياً 'لا داعي للمجاملة أو التكلف'، دلالة على الألفة والمودة.",
      },
    ],
    comprehensionQuestions: [
      {
        id: "q2-1",
        question: "What is the polite reply to 谢谢 (Xièxie)?",
        arQuestion: "ما هو الرد المناسب على 谢谢؟",
        options: ["不客气 (Bú kèqi)", "没关系 (Méi guānxi)", "您好 (Nín hǎo)", "再见 (Zàijiàn)"],
        answerIndex: 0,
      },
    ],
    shadowingPractice: {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: "Official HSK 1 Standard Course Lesson 2 dialogues.",
  },
  {
    id: "hsk-1-unit-3",
    hskLevel: 1,
    unitId: 3,
    contentType: "dialogue",
    status: "ready",
    title: {
      zh: "第3课：你叫什么名字",
      en: "Lesson 3: What Is Your Name",
      ar: "الدرس 3: ما اسمك",
    },
    targetVocabularyIds: ["jiao", "shenme", "mingzi", "wo", "shi-3", "laoshi", "ma", "xuesheng", "ren", "zhongguo"],
    dialogue: [
      {
        id: "3-1-1",
        role: "Speaker A",
        hanzi: "你叫什么名字？",
        pinyin: "Nǐ jiào shénme míngzi?",
        translation: {
          en: "What is your name?",
          ar: "ما اسمك؟",
        },
        audio: null,
      },
      {
        id: "3-1-2",
        role: "Speaker B",
        hanzi: "我叫李月。",
        pinyin: "Wǒ jiào Lǐ Yuè.",
        translation: {
          en: "My name is Li Yue.",
          ar: "اسمي لي يوي.",
        },
        audio: null,
      },
      {
        id: "3-2-1",
        role: "Speaker A",
        hanzi: "你是老师吗？",
        pinyin: "Nǐ shì lǎoshī ma?",
        translation: {
          en: "Are you a teacher?",
          ar: "هل أنتَ معلّم؟",
        },
        audio: null,
      },
      {
        id: "3-2-2",
        role: "Speaker B",
        hanzi: "我不是老师，我是学生。",
        pinyin: "Wǒ bú shì lǎoshī, wǒ shì xuésheng.",
        translation: {
          en: "I am not a teacher, I am a student.",
          ar: "أنا لستُ معلماً، أنا طالب.",
        },
        audio: null,
      },
      {
        id: "3-3-1",
        role: "Speaker A",
        hanzi: "你是中国人吗？",
        pinyin: "Nǐ shì Zhōngguó rén ma?",
        translation: {
          en: "Are you Chinese?",
          ar: "هل أنتَ صيني؟",
        },
        audio: null,
      },
      {
        id: "3-3-2",
        role: "Speaker B",
        hanzi: "我不是中国人，我是美国人。",
        pinyin: "Wǒ bú shì Zhōngguó rén, wǒ shì Měiguó rén.",
        translation: {
          en: "I am not Chinese, I am American.",
          ar: "أنا لستُ صينياً، أنا أمريكي.",
        },
        audio: null,
      },
    ],
    grammarNotes: [
      {
        point: "Question word 什么 (shénme)",
        explanation: "Chinese question sentences maintain the same word order as declarative sentences: Subject + Verb + Object/Question word.",
        arExplanation: "يحافظ السؤال باللغة الصينية على نفس ترتيب الجملة الخبرية العادية.",
      },
      {
        point: "Question particle 吗 (ma)",
        explanation: "Appending 吗 to the end of a statement forms a yes-no question without changing verb order.",
        arExplanation: "إضافة أداة الاستفهام 吗 في نهاية الجملة يحولها إلى سؤال بنعم أو لا.",
      },
    ],
    culturalNotes: [
      {
        title: "Chinese Names Order",
        detail: "In Chinese names, the family surname comes first, followed by the personal given name (e.g., Li Yue).",
        arDetail: "في الأسماء الصينية، يسبق اسم العائلة (اللقب) الاسم الشخصي.",
      },
    ],
    comprehensionQuestions: [
      {
        id: "q3-1",
        question: "Is Li Yue a teacher or a student?",
        arQuestion: "هل لي يوي معلمة أم طالبة؟",
        options: ["学生 (Student)", "老师 (Teacher)", "医生 (Doctor)", "工人 (Worker)"],
        answerIndex: 0,
      },
    ],
    shadowingPractice: {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: "Official HSK 1 Standard Course Lesson 3 dialogues.",
  },
  {
    id: "hsk-1-unit-4",
    hskLevel: 1,
    unitId: 4,
    contentType: "dialogue",
    status: "ready",
    title: {
      zh: "第4课：她是我的汉语老师",
      en: "Lesson 4: She Is My Chinese Teacher",
      ar: "الدرس 4: هي معلمتي للغة الصينية",
    },
    targetVocabularyIds: ["ta-3", "shei", "de", "hanyu", "na-2", "guo", "ne", "ta", "tongxue", "pengyou"],
    dialogue: [
      {
        id: "4-1-1",
        role: "Speaker A",
        hanzi: "她是谁？",
        pinyin: "Tā shì shéi?",
        translation: {
          en: "Who is she?",
          ar: "من هي؟",
        },
        audio: null,
      },
      {
        id: "4-1-2",
        role: "Speaker B",
        hanzi: "她是我的汉语老师，她叫李月。",
        pinyin: "Tā shì wǒ de Hànyǔ lǎoshī, tā jiào Lǐ Yuè.",
        translation: {
          en: "She is my Chinese teacher, her name is Li Yue.",
          ar: "هي معلمتي للغة الصينية، اسمها لي يوي.",
        },
        audio: null,
      },
      {
        id: "4-2-1",
        role: "Speaker A",
        hanzi: "你是哪国人？",
        pinyin: "Nǐ shì nǎ guó rén?",
        translation: {
          en: "Which country are you from?",
          ar: "من أي بلد أنت؟",
        },
        audio: null,
      },
      {
        id: "4-2-2",
        role: "Speaker B",
        hanzi: "我是美国人。你呢？",
        pinyin: "Wǒ shì Měiguó rén. Nǐ ne?",
        translation: {
          en: "I am American. What about you?",
          ar: "أنا أمريكي. وأنتَ؟",
        },
        audio: null,
      },
      {
        id: "4-2-3",
        role: "Speaker A",
        hanzi: "我是中国人。",
        pinyin: "Wǒ shì Zhōngguó rén.",
        translation: {
          en: "I am Chinese.",
          ar: "أنا صيني.",
        },
        audio: null,
      },
      {
        id: "4-3-1",
        role: "Speaker A",
        hanzi: "他是谁？",
        pinyin: "Tā shì shéi?",
        translation: {
          en: "Who is he?",
          ar: "من هو؟",
        },
        audio: null,
      },
      {
        id: "4-3-2",
        role: "Speaker B",
        hanzi: "他是我同学。",
        pinyin: "Tā shì wǒ tóngxué.",
        translation: {
          en: "He is my classmate.",
          ar: "هو زميلي في الدراسة.",
        },
        audio: null,
      },
      {
        id: "4-3-3",
        role: "Speaker A",
        hanzi: "她呢？她是你的同学吗？",
        pinyin: "Tā ne? Tā shì nǐ de tóngxué ma?",
        translation: {
          en: "What about her? Is she your classmate?",
          ar: "وماذا عنها؟ هل هي زميلتك أيضاً؟",
        },
        audio: null,
      },
      {
        id: "4-3-4",
        role: "Speaker B",
        hanzi: "她不是我同学，她是我朋友。",
        pinyin: "Tā bú shì wǒ tóngxué, tā shì wǒ péngyou.",
        translation: {
          en: "She is not my classmate, she is my friend.",
          ar: "هي ليست زميلتي، هي صديقتي.",
        },
        audio: null,
      },
    ],
    grammarNotes: [
      {
        point: "Possessive particle 的 (de)",
        explanation: "Noun/Pronoun + 的 + Noun indicates possession (e.g., 我的老师 = my teacher). For close personal relations, 的 can be omitted (e.g., 我同学).",
        arExplanation: "أداة الملكية 的 تدل على النسبة والملكية. يمكن حذفها أحياناً مع الأقارب المقربين والزملاء.",
      },
      {
        point: "Elliptical questions with 呢 (ne)",
        explanation: "A noun or pronoun followed by 呢 asks 'what about...?' based on the previous context.",
        arExplanation: "تستخدم 呢 للسؤال المختصر المستند إلى السياق السابق، مثل 'وماذا عنك؟' (你呢؟).",
      },
    ],
    culturalNotes: [
      {
        title: "Distinct Pronouns with Shared Sound",
        detail: "In spoken Chinese, 他 (he), 她 (she), and 它 (it) are all pronounced 'tā', but have distinct written character radicals.",
        arDetail: "تشترك ضمائر الغائب (هو، هي، هو/هي لغير العاقل) في نفس النطق الصوتي tā، مع اختلاف جذور المقاطع المكتوبة.",
      },
    ],
    comprehensionQuestions: [
      {
        id: "q4-1",
        question: "Who is Li Yue in the dialogue?",
        arQuestion: "من هي لي يوي في الحوار؟",
        options: ["汉语老师 (Chinese Teacher)", "美国学生 (American Student)", "医生 (Doctor)", "出租车司机 (Taxi Driver)"],
        answerIndex: 0,
      },
    ],
    shadowingPractice: {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: "Official HSK 1 Standard Course Lesson 4 dialogues.",
  },
  {
    id: "hsk-1-unit-5",
    hskLevel: 1,
    unitId: 5,
    contentType: "dialogue",
    status: "ready",
    title: {
      zh: "第5课：她女儿今年二十岁",
      en: "Lesson 5: Her Daughter Is 20 Years Old",
      ar: "الدرس 5: ابنتها تبلغ من العمر عشرين عاماً",
    },
    targetVocabularyIds: ["jia", "you", "kou", "ji", "san", "nu-er", "sui", "le", "jinnian", "si", "duo", "da"],
    dialogue: [
      {
        id: "5-1-1",
        role: "Speaker A",
        hanzi: "你家有几口人？",
        pinyin: "Nǐ jiā yǒu jǐ kǒu rén?",
        translation: {
          en: "How many people are there in your family?",
          ar: "كم فرداً في عائلتك؟",
        },
        audio: null,
      },
      {
        id: "5-1-2",
        role: "Speaker B",
        hanzi: "我家有三口人。",
        pinyin: "Wǒ jiā yǒu sān kǒu rén.",
        translation: {
          en: "There are three people in my family.",
          ar: "في عائلتي ثلاثة أفراد.",
        },
        audio: null,
      },
      {
        id: "5-2-1",
        role: "Speaker A",
        hanzi: "你女儿几岁了？",
        pinyin: "Nǐ nǚ'ér jǐ suì le?",
        translation: {
          en: "How old is your daughter?",
          ar: "كم عمر ابنتك؟",
        },
        audio: null,
      },
      {
        id: "5-2-2",
        role: "Speaker B",
        hanzi: "她今年四岁了。",
        pinyin: "Tā jīnnián sì suì le.",
        translation: {
          en: "She is four years old this year.",
          ar: "عمرها أربع سنوات هذا العام.",
        },
        audio: null,
      },
      {
        id: "5-3-1",
        role: "Speaker A",
        hanzi: "李老师多大了？",
        pinyin: "Lǐ lǎoshī duō dà le?",
        translation: {
          en: "How old is Teacher Li?",
          ar: "كم عمر الأستاذة لي؟",
        },
        audio: null,
      },
      {
        id: "5-3-2",
        role: "Speaker B",
        hanzi: "她今年五十岁了。",
        pinyin: "Tā jīnnián wǔshí suì le.",
        translation: {
          en: "She is fifty years old this year.",
          ar: "عمرها خمسون عاماً هذا العام.",
        },
        audio: null,
      },
      {
        id: "5-3-3",
        role: "Speaker A",
        hanzi: "她女儿呢？",
        pinyin: "Tā nǚ'ér ne?",
        translation: {
          en: "What about her daughter?",
          ar: "وماذا عن ابنتها؟",
        },
        audio: null,
      },
      {
        id: "5-3-4",
        role: "Speaker B",
        hanzi: "她女儿今年二十岁。",
        pinyin: "Tā nǚ'ér jīnnián èrshí suì.",
        translation: {
          en: "Her daughter is twenty years old this year.",
          ar: "ابنتها تبلغ من العمر عشرين عاماً هذا العام.",
        },
        audio: null,
      },
    ],
    grammarNotes: [
      {
        point: "Asking age with 几 (jǐ) vs 多大 (duō dà)",
        explanation: "几岁 (jǐ suì) is typically used when asking the age of young children (under 10). 多大 (duō dà) is used for peers or adults.",
        arExplanation: "تستخدم 几岁 للسؤال عن عمر الأطفال دون العاشرة، بينما تستخدم 多大 للبالغين والأقران.",
      },
      {
        point: "Measure word 口 (kǒu) for family members",
        explanation: "口 is the standard measure word specifically used when counting the number of members in a family.",
        arExplanation: "كلمة القياس 口 مخصصة حصرياً لعد أفراد الأسرة.",
      },
    ],
    culturalNotes: [
      {
        title: "Inquiring about Family",
        detail: "Asking about family size is a friendly conversational icebreaker in China expressing warmth and care.",
        arDetail: "يعد السؤال عن أفراد الأسرة من الأحاديث الودية المألوفة لتعزيز التواصل الاجتماعي في الصين.",
      },
    ],
    comprehensionQuestions: [
      {
        id: "q5-1",
        question: "How old is Teacher Li's daughter?",
        arQuestion: "كم يبلغ عمر ابنة الأستاذة لي؟",
        options: ["二十岁 (20 years old)", "四岁 (4 years old)", "五十岁 (50 years old)", "三岁 (3 years old)"],
        answerIndex: 0,
      },
    ],
    shadowingPractice: {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: "Official HSK 1 Standard Course Lesson 5 dialogues.",
  },
  {
    id: "hsk-1-unit-6",
    hskLevel: 1,
    unitId: 6,
    contentType: "dialogue",
    status: "ready",
    title: {
      zh: "第6课：我会说汉语",
      en: "Lesson 6: I Can Speak Chinese",
      ar: "الدرس 6: أنا أستطيع التحدث بالصينية",
    },
    targetVocabularyIds: ["hui-2", "shuo", "ma-ma", "cai", "hen", "zuo-2", "xie", "hanzi", "zi", "zenme", "du"],
    dialogue: [
      {
        id: "6-1-1",
        role: "Speaker A",
        hanzi: "你会说汉语吗？",
        pinyin: "Nǐ huì shuō Hànyǔ ma?",
        translation: {
          en: "Can you speak Chinese?",
          ar: "هل تستطيع التحدث باللغة الصينية؟",
        },
        audio: null,
      },
      {
        id: "6-1-2",
        role: "Speaker B",
        hanzi: "我会说汉语。",
        pinyin: "Wǒ huì shuō Hànyǔ.",
        translation: {
          en: "Yes, I can speak Chinese.",
          ar: "نعم، أستطيع التحدث باللغة الصينية.",
        },
        audio: null,
      },
      {
        id: "6-1-3",
        role: "Speaker A",
        hanzi: "你妈妈会说汉语吗？",
        pinyin: "Nǐ māma huì shuō Hànyǔ ma?",
        translation: {
          en: "Can your mother speak Chinese?",
          ar: "هل تستطيع والدتك التحدث باللغة الصينية؟",
        },
        audio: null,
      },
      {
        id: "6-1-4",
        role: "Speaker B",
        hanzi: "她不会说。",
        pinyin: "Tā bú huì shuō.",
        translation: {
          en: "She cannot speak it.",
          ar: "لا، هي لا تستطيع التحدث بها.",
        },
        audio: null,
      },
      {
        id: "6-2-1",
        role: "Speaker A",
        hanzi: "中国菜好吃吗？",
        pinyin: "Zhōngguó cài hǎochī ma?",
        translation: {
          en: "Is Chinese food delicious?",
          ar: "هل الطعام الصيني لذيذ؟",
        },
        audio: null,
      },
      {
        id: "6-2-2",
        role: "Speaker B",
        hanzi: "中国菜很好吃。",
        pinyin: "Zhōngguó cài hěn hǎochī.",
        translation: {
          en: "Chinese food is very delicious.",
          ar: "الطعام الصيني لذيذ جداً.",
        },
        audio: null,
      },
      {
        id: "6-2-3",
        role: "Speaker A",
        hanzi: "你会做中国菜吗？",
        pinyin: "Nǐ huì zuò Zhōngguó cài ma?",
        translation: {
          en: "Can you cook Chinese food?",
          ar: "هل تجيد طبخ الطعام الصيني؟",
        },
        audio: null,
      },
      {
        id: "6-2-4",
        role: "Speaker B",
        hanzi: "我不会做。",
        pinyin: "Wǒ bú huì zuò.",
        translation: {
          en: "I cannot cook it.",
          ar: "أنا لا أجيد طبخه.",
        },
        audio: null,
      },
      {
        id: "6-3-1",
        role: "Speaker A",
        hanzi: "你会写汉字吗？",
        pinyin: "Nǐ huì xiě Hànzì ma?",
        translation: {
          en: "Can you write Chinese characters?",
          ar: "هل تستطيع كتابة الرموز الصينية؟",
        },
        audio: null,
      },
      {
        id: "6-3-2",
        role: "Speaker B",
        hanzi: "我会写。",
        pinyin: "Wǒ huì xiě.",
        translation: {
          en: "Yes, I can write them.",
          ar: "نعم، أستطيع كتابتها.",
        },
        audio: null,
      },
      {
        id: "6-3-3",
        role: "Speaker A",
        hanzi: "这个字怎么写？",
        pinyin: "Zhège zì zěnme xiě?",
        translation: {
          en: "How do you write this character?",
          ar: "كيف يُكتب هذا المقطع الصيني؟",
        },
        audio: null,
      },
      {
        id: "6-3-4",
        role: "Speaker B",
        hanzi: "对不起，这个字我会读，不会写。",
        pinyin: "Duìbuqǐ, zhège zì wǒ huì dú, bú huì xiě.",
        translation: {
          en: "Sorry, I can read this character, but cannot write it.",
          ar: "معذرة، هذا الرمز أستطيع قراءته، لكنني لا أعرف كتابته.",
        },
        audio: null,
      },
    ],
    grammarNotes: [
      {
        point: "Modal verb 会 (huì) for learned abilities",
        explanation: "会 + Verb expresses an ability acquired through learning or practice (e.g., 会说汉语, 会做菜).",
        arExplanation: "الفعل المساعد 会 يعبر عن مهارة أو قدرة تم اكتسابها بالتعلم والممارسة.",
      },
      {
        point: "Sentences with an Adjectival Predicate",
        explanation: "In Chinese, adjectives directly function as predicates without using 是 (e.g., 中国菜很好吃, not 中国菜是好吃).",
        arExplanation: "في اللغة الصينية، تعمل الصفة مباشرة كمسند (خبر) دون الحاجة لفعل الكينونة 是.",
      },
    ],
    culturalNotes: [
      {
        title: "Reading vs. Writing Hanzi",
        detail: "Recognizing characters to read (读) is often acquired faster than active brush/pen stroke writing (写).",
        arDetail: "عادة ما تكون القراءة والتعرف البصري على المقاطع الصينية أسرع اكتساباً من إتقان كتابة ضربات الفرشاة.",
      },
    ],
    comprehensionQuestions: [
      {
        id: "q6-1",
        question: "Can Speaker B cook Chinese food?",
        arQuestion: "هل يجيد المتحدث B طبخ الطعام الصيني؟",
        options: ["不会做 (Cannot cook)", "会做 (Can cook)", "做得很好 (Cooks very well)", "天天做 (Cooks every day)"],
        answerIndex: 0,
      },
    ],
    shadowingPractice: {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: "Official HSK 1 Standard Course Lesson 6 dialogues.",
  },
  {
    id: "hsk-1-unit-7",
    hskLevel: 1,
    unitId: 7,
    contentType: "dialogue",
    status: "ready",
    title: {
      zh: "第7课：今天几号",
      en: "Lesson 7: What's the Date Today",
      ar: "الدرس 7: ما تاريخ اليوم",
    },
    targetVocabularyIds: ["qing", "wen", "jintian", "hao", "yue", "xingqi", "zuotian", "mingtian", "qu", "xuexiao", "kan", "shu"],
    dialogue: [
      {
        id: "7-1-1",
        role: "Speaker A",
        hanzi: "请问，今天几号？",
        pinyin: "Qǐngwèn, jīntiān jǐ hào?",
        translation: {
          en: "Excuse me, what is the date today?",
          ar: "من فضلك، ما تاريخ اليوم؟",
        },
        audio: null,
      },
      {
        id: "7-1-2",
        role: "Speaker B",
        hanzi: "今天九月一号。",
        pinyin: "Jīntiān jiǔ yuè yī hào.",
        translation: {
          en: "Today is September 1st.",
          ar: "اليوم هو الأول من سبتمبر.",
        },
        audio: null,
      },
      {
        id: "7-1-3",
        role: "Speaker A",
        hanzi: "今天星期几？",
        pinyin: "Jīntiān xīngqī jǐ?",
        translation: {
          en: "What day of the week is it today?",
          ar: "أي يوم من أيام الأسبوع اليوم؟",
        },
        audio: null,
      },
      {
        id: "7-1-4",
        role: "Speaker B",
        hanzi: "星期三。",
        pinyin: "Xīngqīsān.",
        translation: {
          en: "Wednesday.",
          ar: "يوم الأربعاء.",
        },
        audio: null,
      },
      {
        id: "7-2-1",
        role: "Speaker A",
        hanzi: "昨天是几月几号？",
        pinyin: "Zuótiān shì jǐ yuè jǐ hào?",
        translation: {
          en: "What was the date yesterday?",
          ar: "ما كان تاريخ يوم أمس؟",
        },
        audio: null,
      },
      {
        id: "7-2-2",
        role: "Speaker B",
        hanzi: "昨天是八月三十一号，星期二。",
        pinyin: "Zuótiān shì bā yuè sānshíyī hào, xīngqī'èr.",
        translation: {
          en: "Yesterday was August 31st, Tuesday.",
          ar: "أمس كان الحادي والثلاثين من أغسطس، يوم الثلاثاء.",
        },
        audio: null,
      },
      {
        id: "7-2-3",
        role: "Speaker A",
        hanzi: "明天呢？",
        pinyin: "Míngtiān ne?",
        translation: {
          en: "What about tomorrow?",
          ar: "وماذا عن الغد؟",
        },
        audio: null,
      },
      {
        id: "7-2-4",
        role: "Speaker B",
        hanzi: "明天是九月二号，星期四。",
        pinyin: "Míngtiān shì jiǔ yuè èr hào, xīngqīsì.",
        translation: {
          en: "Tomorrow is September 2nd, Thursday.",
          ar: "غداً هو الثاني من سبتمبر، يوم الخميس.",
        },
        audio: null,
      },
      {
        id: "7-3-1",
        role: "Speaker A",
        hanzi: "明天是星期六，你去学校吗？",
        pinyin: "Míngtiān shì xīngqīliù, nǐ qù xuéxiào ma?",
        translation: {
          en: "Tomorrow is Saturday, are you going to school?",
          ar: "غداً السبت، هل ستذهب إلى المدرسة؟",
        },
        audio: null,
      },
      {
        id: "7-3-2",
        role: "Speaker B",
        hanzi: "我去学校。",
        pinyin: "Wǒ qù xuéxiào.",
        translation: {
          en: "Yes, I am going to school.",
          ar: "نعم، سأذهب إلى المدرسة.",
        },
        audio: null,
      },
      {
        id: "7-3-3",
        role: "Speaker A",
        hanzi: "你去学校做什么？",
        pinyin: "Nǐ qù xuéxiào zuò shénme?",
        translation: {
          en: "What are you going to do at school?",
          ar: "ماذا ستفعل في المدرسة؟",
        },
        audio: null,
      },
      {
        id: "7-3-4",
        role: "Speaker B",
        hanzi: "我去学校看书。",
        pinyin: "Wǒ qù xuéxiào kàn shū.",
        translation: {
          en: "I am going to school to read books.",
          ar: "سأذهب إلى المدرسة للقراءة والمطالعة.",
        },
        audio: null,
      },
    ],
    grammarNotes: [
      {
        point: "Expression of Dates (Year -> Month -> Day -> Day of week)",
        explanation: "Chinese dates strictly follow the principle of largest time unit first: ...年 ...月 ...号 星期...",
        arExplanation: "ترتيب التاريخ في الصينية يبدأ دائماً من الوحدة الأكبر إلى الأصغر: السنة ثم الشهر ثم اليوم ثم يوم الأسبوع.",
      },
      {
        point: "Sentences with Serial Verb Constructions",
        explanation: "Subject + Verb 1 + (Object 1) + Verb 2 + (Object 2) expresses purpose of going somewhere: 我去学校看书 (I go to school to read).",
        arExplanation: "الجمل ذات الأفعال المتسلسلة تعبر عن الذهاب لمكان لغرض محدد: الفاعل + الفعل الأول + المكان + الفعل الثاني.",
      },
    ],
    culturalNotes: [
      {
        title: "Counting Days of the Week",
        detail: "Days of the week in Chinese simply use 星期 (xīngqī) plus numbers 1 to 6 (Monday to Saturday). Sunday is 星期日 or 星期天.",
        arDetail: "أيام الأسبوع في الصينية تتبع الأرقام من 1 إلى 6 (الإثنين هو 1، والسبت 6)، أما الأحد فيسمى 星期天 أو 星期日.",
      },
    ],
    comprehensionQuestions: [
      {
        id: "q7-1",
        question: "What is Speaker B going to do at school on Saturday?",
        arQuestion: "ماذا سيفعل المتحدث B في المدرسة يوم السبت؟",
        options: ["看书 (Read books)", "做中国菜 (Cook food)", "找李老师 (Find Teacher Li)", "买杯子 (Buy a cup)"],
        answerIndex: 0,
      },
    ],
    shadowingPractice: {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: "Official HSK 1 Standard Course Lesson 7 dialogues.",
  },
  {
    id: "hsk-1-unit-8",
    hskLevel: 1,
    unitId: 8,
    contentType: "dialogue",
    status: "ready",
    title: {
      zh: "第8课：我想喝茶",
      en: "Lesson 8: I'd Like Some Tea",
      ar: "الدرس 8: أود شرب الشاي",
    },
    targetVocabularyIds: ["xiang", "he-2", "cha", "chi", "mifan", "xiawu", "shangdian", "mai-2", "ge", "beizi", "zhe", "duoshao", "qian-2", "kuai", "na"],
    dialogue: [
      {
        id: "8-1-1",
        role: "Speaker A",
        hanzi: "你想喝什么？",
        pinyin: "Nǐ xiǎng hē shénme?",
        translation: {
          en: "What would you like to drink?",
          ar: "ماذا تحب أن تشرب؟",
        },
        audio: null,
      },
      {
        id: "8-1-2",
        role: "Speaker B",
        hanzi: "我想喝茶。",
        pinyin: "Wǒ xiǎng hē chá.",
        translation: {
          en: "I would like some tea.",
          ar: "أود شرب الشاي.",
        },
        audio: null,
      },
      {
        id: "8-1-3",
        role: "Speaker A",
        hanzi: "你想吃什么？",
        pinyin: "Nǐ xiǎng chī shénme?",
        translation: {
          en: "What would you like to eat?",
          ar: "ماذا تحب أن تأكل؟",
        },
        audio: null,
      },
      {
        id: "8-1-4",
        role: "Speaker B",
        hanzi: "我想吃米饭。",
        pinyin: "Wǒ xiǎng chī mǐfàn.",
        translation: {
          en: "I would like some rice.",
          ar: "أود تناول الأرز.",
        },
        audio: null,
      },
      {
        id: "8-2-1",
        role: "Speaker A",
        hanzi: "下午你想做什么？",
        pinyin: "Xiàwǔ nǐ xiǎng zuò shénme?",
        translation: {
          en: "What would you like to do this afternoon?",
          ar: "ماذا تريد أن تفعل بعد الظهر؟",
        },
        audio: null,
      },
      {
        id: "8-2-2",
        role: "Speaker B",
        hanzi: "下午我想去商店。",
        pinyin: "Xiàwǔ wǒ xiǎng qù shāngdiàn.",
        translation: {
          en: "This afternoon I want to go to the store.",
          ar: "بعد الظهر أريد الذهاب إلى المتجر.",
        },
        audio: null,
      },
      {
        id: "8-2-3",
        role: "Speaker A",
        hanzi: "你想买什么？",
        pinyin: "Nǐ xiǎng mǎi shénme?",
        translation: {
          en: "What do you want to buy?",
          ar: "ماذا تريد أن تشتري؟",
        },
        audio: null,
      },
      {
        id: "8-2-4",
        role: "Speaker B",
        hanzi: "我想买一个杯子。",
        pinyin: "Wǒ xiǎng mǎi yí ge bēizi.",
        translation: {
          en: "I want to buy a cup.",
          ar: "أريد شراء كوب.",
        },
        audio: null,
      },
      {
        id: "8-3-1",
        role: "Speaker A",
        hanzi: "你好！这个杯子多少钱？",
        pinyin: "Nǐ hǎo! Zhège bēizi duōshao qián?",
        translation: {
          en: "Hello! How much is this cup?",
          ar: "مرحباً! بكم هذا الكوب؟",
        },
        audio: null,
      },
      {
        id: "8-3-2",
        role: "Speaker B",
        hanzi: "二十八块。",
        pinyin: "Èrshíbā kuài.",
        translation: {
          en: "28 yuan.",
          ar: "ثمانية وعشرون يواناً.",
        },
        audio: null,
      },
      {
        id: "8-3-3",
        role: "Speaker A",
        hanzi: "那个杯子多少钱？",
        pinyin: "Nàge bēizi duōshao qián?",
        translation: {
          en: "How much is that cup?",
          ar: "وبكم ذلك الكوب الآخر؟",
        },
        audio: null,
      },
      {
        id: "8-3-4",
        role: "Speaker B",
        hanzi: "那个杯子十八块钱。",
        pinyin: "Nàge bēizi shíbā kuài qián.",
        translation: {
          en: "That cup is 18 yuan.",
          ar: "ذلك الكوب بثمانية عشر يواناً.",
        },
        audio: null,
      },
    ],
    grammarNotes: [
      {
        point: "Auxiliary verb 想 (xiǎng)",
        explanation: "想 + Verb indicates a desire, intention, or wish to do something (e.g., 我想喝茶 = I'd like to drink tea).",
        arExplanation: "الفعل المساعد 想 متبوعاً بفعل يعبر عن الرغبة أو النية في فعل شيء ما.",
      },
      {
        point: "Asking prices with 多少钱 (duōshao qián)",
        explanation: "多少 is used to inquire about quantities over 10 or price amounts. 块 (kuài) is the colloquial unit for Chinese Yuan.",
        arExplanation: "يستخدم 多少钱 للسؤال عن الأسعار. وكلمة 块 هي الوحدة العامية الشائعة لليوان الصيني.",
      },
    ],
    culturalNotes: [
      {
        title: "Chinese Tea Culture (茶文化)",
        detail: "Offering warm tea to guests is a signature of hospitality in traditional and contemporary Chinese culture.",
        arDetail: "تقديم الشاي الساخن للضيوف هو رمز الضيافة والترحيب المتوارث في الثقافة الصينية.",
      },
    ],
    comprehensionQuestions: [
      {
        id: "q8-1",
        question: "How much is the first cup (这个杯子)?",
        arQuestion: "كم سعر الكوب الأول (这个杯子)؟",
        options: ["二十八块 (28 kuai)", "十八块 (18 kuai)", "三十八块 (38 kuai)", "八块 (8 kuai)"],
        answerIndex: 0,
      },
    ],
    shadowingPractice: {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: "Official HSK 1 Standard Course Lesson 8 dialogues.",
  },
  {
    id: "hsk-1-unit-9",
    hskLevel: 1,
    unitId: 9,
    contentType: "dialogue",
    status: "ready",
    title: {
      zh: "第9课：你儿子在哪儿工作",
      en: "Lesson 9: Where Does Your Son Work",
      ar: "الدرس 9: أين يعمل ابنك",
    },
    targetVocabularyIds: ["zai-2", "nar-2", "gongzuo", "erzi", "yi-yuan", "yi-sheng", "baba"],
    dialogue: [
      {
        id: "9-1-1",
        role: "Speaker A",
        hanzi: "小猫在哪儿？",
        pinyin: "Xiǎomāo zài nǎr?",
        translation: {
          en: "Where is the kitten?",
          ar: "أين القطة الصغيرة؟",
        },
        audio: null,
      },
      {
        id: "9-1-2",
        role: "Speaker B",
        hanzi: "小猫在那儿。",
        pinyin: "Xiǎomāo zài nàr.",
        translation: {
          en: "The kitten is over there.",
          ar: "القطة الصغيرة هناك.",
        },
        audio: null,
      },
      {
        id: "9-1-3",
        role: "Speaker A",
        hanzi: "小狗在哪儿？",
        pinyin: "Xiǎogǒu zài nǎr?",
        translation: {
          en: "Where is the puppy?",
          ar: "أين الكلب الصغير؟",
        },
        audio: null,
      },
      {
        id: "9-1-4",
        role: "Speaker B",
        hanzi: "小狗在椅子下面。",
        pinyin: "Xiǎogǒu zài yǐzi xiàmiàn.",
        translation: {
          en: "The puppy is under the chair.",
          ar: "الكلب الصغير تحت الكرسي.",
        },
        audio: null,
      },
      {
        id: "9-2-1",
        role: "Speaker A",
        hanzi: "你在哪儿工作？",
        pinyin: "Nǐ zài nǎr gōngzuò?",
        translation: {
          en: "Where do you work?",
          ar: "أين تعمل؟",
        },
        audio: null,
      },
      {
        id: "9-2-2",
        role: "Speaker B",
        hanzi: "我在学校工作。",
        pinyin: "Wǒ zài xuéxiào gōngzuò.",
        translation: {
          en: "I work at a school.",
          ar: "أعمل في المدرسة.",
        },
        audio: null,
      },
      {
        id: "9-2-3",
        role: "Speaker A",
        hanzi: "你儿子在哪儿工作？",
        pinyin: "Nǐ érzi zài nǎr gōngzuò?",
        translation: {
          en: "Where does your son work?",
          ar: "وأين يعمل ابنك؟",
        },
        audio: null,
      },
      {
        id: "9-2-4",
        role: "Speaker B",
        hanzi: "我儿子在医院工作，他是医生。",
        pinyin: "Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.",
        translation: {
          en: "My son works at a hospital; he is a doctor.",
          ar: "ابني يعمل في المستشفى، هو طبيب.",
        },
        audio: null,
      },
      {
        id: "9-3-1",
        role: "Speaker A",
        hanzi: "你爸爸在家里吗？",
        pinyin: "Nǐ bàba zài jiā lǐ ma?",
        translation: {
          en: "Is your father at home?",
          ar: "هل والدك في المنزل؟",
        },
        audio: null,
      },
      {
        id: "9-3-2",
        role: "Speaker B",
        hanzi: "不在家里。",
        pinyin: "Bú zài jiā lǐ.",
        translation: {
          en: "No, he is not at home.",
          ar: "ليس في المنزل.",
        },
        audio: null,
      },
      {
        id: "9-3-3",
        role: "Speaker A",
        hanzi: "他在哪儿呢？",
        pinyin: "Tā zài nǎr ne?",
        translation: {
          en: "Where is he?",
          ar: "أين هو إذاً؟",
        },
        audio: null,
      },
      {
        id: "9-3-4",
        role: "Speaker B",
        hanzi: "他在医院。",
        pinyin: "Tā zài yīyuàn.",
        translation: {
          en: "He is at the hospital.",
          ar: "إنه في المستشفى.",
        },
        audio: null,
      },
    ],
    grammarNotes: [
      {
        point: "Verb 在 (zài) for Location",
        explanation: "Subject + 在 + Location indicates where someone or something exists: 他在医院 (He is at the hospital).",
        arExplanation: "الفعل 在 متبوعاً بالمكان يعبر عن التواجد في ذلك الموقع.",
      },
      {
        point: "Prepositional Phrase 在 + Location + Verb",
        explanation: "Indicates where an action occurs: 我在学校工作 (I work at a school). Note that place precedes the verb in Chinese.",
        arExplanation: "في الصينية، يأتي ظرف المكان قبل الفعل الذي يُمارس فيه (في المدرسة + أعمل).",
      },
    ],
    culturalNotes: [
      {
        title: "Medical Professionals in China",
        detail: "Doctors (医生) and teachers (老师) hold high professional respect in Chinese social conversation.",
        arDetail: "تحظى مهنة الطبيب والمعلم بتقدير واحترام واسع في الثقافة الصينية.",
      },
    ],
    comprehensionQuestions: [
      {
        id: "q9-1",
        question: "What is Speaker B's son's profession?",
        arQuestion: "ما هي مهنة ابن المتحدث B؟",
        options: ["医生 (Doctor)", "老师 (Teacher)", "学生 (Student)", "司机 (Driver)"],
        answerIndex: 0,
      },
    ],
    shadowingPractice: {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: "Official HSK 1 Standard Course Lesson 9 dialogues.",
  },
  {
    id: "hsk-1-unit-10",
    hskLevel: 1,
    unitId: 10,
    contentType: "dialogue",
    status: "ready",
    title: {
      zh: "第10课：我能坐这儿吗",
      en: "Lesson 10: Can I Sit Here",
      ar: "الدرس 10: هل يمكنني الجلوس هنا",
    },
    targetVocabularyIds: ["zhuozi", "diannao", "ben", "zher", "zuo", "neng"],
    dialogue: [
      {
        id: "10-1-1",
        role: "Speaker A",
        hanzi: "桌子上有什么？",
        pinyin: "Zhuōzi shang yǒu shénme?",
        translation: {
          en: "What is on the table?",
          ar: "ماذا يوجد على الطاولة؟",
        },
        audio: null,
      },
      {
        id: "10-1-2",
        role: "Speaker B",
        hanzi: "桌子上有一个电脑和一本书。",
        pinyin: "Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.",
        translation: {
          en: "There is a computer and a book on the table.",
          ar: "يوجد على الطاولة جهاز حاسوب وكتاب.",
        },
        audio: null,
      },
      {
        id: "10-1-3",
        role: "Speaker A",
        hanzi: "杯子在哪儿？",
        pinyin: "Bēizi zài nǎr?",
        translation: {
          en: "Where is the cup?",
          ar: "أين الكوب؟",
        },
        audio: null,
      },
      {
        id: "10-1-4",
        role: "Speaker B",
        hanzi: "杯子在桌子里。",
        pinyin: "Bēizi zài zhuōzi lǐ.",
        translation: {
          en: "The cup is inside the desk.",
          ar: "الكوب في درج الطاولة.",
        },
        audio: null,
      },
      {
        id: "10-2-1",
        role: "Speaker A",
        hanzi: "前面那个人叫什么名字？",
        pinyin: "Qiánmiàn nàge rén jiào shénme míngzi?",
        translation: {
          en: "What is the name of that person in front?",
          ar: "ما اسم ذلك الشخص الذي في الأمام؟",
        },
        audio: null,
      },
      {
        id: "10-2-2",
        role: "Speaker B",
        hanzi: "他叫王方，在医院工作。",
        pinyin: "Tā jiào Wáng Fāng, zài yīyuàn gōngzuò.",
        translation: {
          en: "His name is Wang Fang; he works in a hospital.",
          ar: "اسمه وانغ فانغ، يعمل في المستشفى.",
        },
        audio: null,
      },
      {
        id: "10-2-3",
        role: "Speaker A",
        hanzi: "后面那个人呢？他叫什么名字？",
        pinyin: "Hòumiàn nàge rén ne? Tā jiào shénme míngzi?",
        translation: {
          en: "What about the person behind? What's his name?",
          ar: "وماذا عن الشخص الذي في الخلف؟ ما اسمه؟",
        },
        audio: null,
      },
      {
        id: "10-2-4",
        role: "Speaker B",
        hanzi: "他叫谢朋，在商店工作。",
        pinyin: "Tā jiào Xiè Péng, zài shāngdiàn gōngzuò.",
        translation: {
          en: "His name is Xie Peng; he works in a store.",
          ar: "اسمه شيه بينغ، يعمل في المتجر.",
        },
        audio: null,
      },
      {
        id: "10-3-1",
        role: "Speaker A",
        hanzi: "这儿有人吗？",
        pinyin: "Zhèr yǒu rén ma?",
        translation: {
          en: "Is this seat taken?",
          ar: "هل هذا المقعد مشغول؟",
        },
        audio: null,
      },
      {
        id: "10-3-2",
        role: "Speaker B",
        hanzi: "没有。",
        pinyin: "Méiyǒu.",
        translation: {
          en: "No, it isn't.",
          ar: "لا، المقعد شاغر.",
        },
        audio: null,
      },
      {
        id: "10-3-3",
        role: "Speaker A",
        hanzi: "我能坐这儿吗？",
        pinyin: "Wǒ néng zuò zhèr ma?",
        translation: {
          en: "May I sit here?",
          ar: "هل يمكنني الجلوس هنا؟",
        },
        audio: null,
      },
      {
        id: "10-3-4",
        role: "Speaker B",
        hanzi: "请坐。",
        pinyin: "Qǐng zuò.",
        translation: {
          en: "Please sit down.",
          ar: "تفضل بالجلوس.",
        },
        audio: null,
      },
    ],
    grammarNotes: [
      {
        point: "Existence with 有 (yǒu)",
        explanation: "Location + 有 + Noun indicates what exists at that location: 桌子上有一个电脑 (There is a computer on the table).",
        arExplanation: "صيغة الوجود: المكان + 有 + الشيء تدل على وجود ذلك الشيء في الموقع المحدد.",
      },
      {
        point: "Permission with 能 (néng)",
        explanation: "能 + Verb is used to ask for permission or express physical possibility: 我能坐这儿吗？(May I sit here?).",
        arExplanation: "الفعل المساعد 能 متبوعاً بفعل يستخدم لطلب الإذن أو الاستئذان.",
      },
    ],
    culturalNotes: [
      {
        title: "Polite Request: 请坐 (Qǐng zuò)",
        detail: "Offering a seat with '请坐' is an immediate gesture of courtesy and comfort in Chinese social interactions.",
        arDetail: "دعوة الضيف للجلوس بعبارة '请坐' هي لفتة ترحيبية فورية تعكس كرم الضيافة الصينية.",
      },
    ],
    comprehensionQuestions: [
      {
        id: "q10-1",
        question: "What is on the table in Dialogue 1?",
        arQuestion: "ماذا يوجد على الطاولة في الحوار الأول؟",
        options: ["一个电脑和一本书 (A computer and a book)", "两个杯子 (Two cups)", "三只小猫 (Three kittens)", "很多衣服 (Many clothes)"],
        answerIndex: 0,
      },
    ],
    shadowingPractice: {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: "Official HSK 1 Standard Course Lesson 10 dialogues.",
  },
  {
    id: "hsk-1-unit-11",
    hskLevel: 1,
    unitId: 11,
    contentType: "dialogue",
    status: "ready",
    title: {
      zh: "第11课：现在几点",
      en: "Lesson 11: What's the Time Now",
      ar: "الدرس 11: كم الساعة الآن",
    },
    targetVocabularyIds: ["xianzai", "dian-2", "fen", "zhongwu", "chi", "fan", "shihou", "hui", "women", "dianying", "zhu", "qian", "beijing"],
    dialogue: [
      {
        id: "11-1-1",
        role: "Speaker A",
        hanzi: "现在几点？",
        pinyin: "Xiànzài jǐ diǎn?",
        translation: {
          en: "What is the time now?",
          ar: "كم الساعة الآن؟",
        },
        audio: null,
      },
      {
        id: "11-1-2",
        role: "Speaker B",
        hanzi: "现在十点十分。",
        pinyin: "Xiànzài shí diǎn shí fēn.",
        translation: {
          en: "It is 10:10 now.",
          ar: "الساعة الآن العاشرة وعشر دقائق.",
        },
        audio: null,
      },
      {
        id: "11-1-3",
        role: "Speaker A",
        hanzi: "中午几点吃饭？",
        pinyin: "Zhōngwǔ jǐ diǎn chī fàn?",
        translation: {
          en: "When will we eat lunch at noon?",
          ar: "في أي ساعة نتناول الغداء ظهراً؟",
        },
        audio: null,
      },
      {
        id: "11-1-4",
        role: "Speaker B",
        hanzi: "十二点吃饭。",
        pinyin: "Shí'èr diǎn chī fàn.",
        translation: {
          en: "We will eat at 12 o'clock.",
          ar: "نتناول الغداء عند الساعة الثانية عشرة.",
        },
        audio: null,
      },
      {
        id: "11-2-1",
        role: "Speaker A",
        hanzi: "爸爸什么时候回家？",
        pinyin: "Bàba shénme shíhou huí jiā?",
        translation: {
          en: "When is Dad coming home?",
          ar: "متى يعود أبي إلى المنزل؟",
        },
        audio: null,
      },
      {
        id: "11-2-2",
        role: "Speaker B",
        hanzi: "下午五点。",
        pinyin: "Xiàwǔ wǔ diǎn.",
        translation: {
          en: "At 5:00 p.m.",
          ar: "في الخامسة بعد الظهر.",
        },
        audio: null,
      },
      {
        id: "11-2-3",
        role: "Speaker A",
        hanzi: "我们什么时候去看电影？",
        pinyin: "Wǒmen shénme shíhou qù kàn diànyǐng?",
        translation: {
          en: "When are we going to see the movie?",
          ar: "متى سنذهب لمشاهدة الفيلم؟",
        },
        audio: null,
      },
      {
        id: "11-2-4",
        role: "Speaker B",
        hanzi: "六点三十分。",
        pinyin: "Liù diǎn sānshí fēn.",
        translation: {
          en: "At 6:30.",
          ar: "في الساعة السادسة وثلاثين دقيقة.",
        },
        audio: null,
      },
      {
        id: "11-3-1",
        role: "Speaker A",
        hanzi: "我星期一去北京。",
        pinyin: "Wǒ xīngqīyī qù Běijīng.",
        translation: {
          en: "I am going to Beijing on Monday.",
          ar: "سأذهب إلى بكين يوم الإثنين.",
        },
        audio: null,
      },
      {
        id: "11-3-2",
        role: "Speaker B",
        hanzi: "你想在北京住几天？",
        pinyin: "Nǐ xiǎng zài Běijīng zhù jǐ tiān?",
        translation: {
          en: "How many days do you want to stay in Beijing?",
          ar: "كم يوماً تنوي الإقامة في بكين؟",
        },
        audio: null,
      },
      {
        id: "11-3-3",
        role: "Speaker A",
        hanzi: "住三天。",
        pinyin: "Zhù sān tiān.",
        translation: {
          en: "Stay for three days.",
          ar: "سأقيم لمدة ثلاثة أيام.",
        },
        audio: null,
      },
      {
        id: "11-3-4",
        role: "Speaker B",
        hanzi: "星期五前能回家吗？",
        pinyin: "Xīngqīwǔ qián néng huí jiā ma?",
        translation: {
          en: "Can you return home before Friday?",
          ar: "هل تستطيع العودة للمنزل قبل يوم الجمعة؟",
        },
        audio: null,
      },
      {
        id: "11-3-5",
        role: "Speaker A",
        hanzi: "能。",
        pinyin: "Néng.",
        translation: {
          en: "Yes, I can.",
          ar: "نعم، أستطيع.",
        },
        audio: null,
      },
    ],
    grammarNotes: [
      {
        point: "Expression of Clock Time (点 + 分)",
        explanation: "Hours are expressed with 点 (diǎn) and minutes with 分 (fēn), preceded by time of day: 下午五点 (5 PM).",
        arExplanation: "يُعبر عن الساعات بـ 点 والدقائق بـ 分، ويسبقها توقيت اليوم (صباحاً أو مساءً).",
      },
      {
        point: "Time words as Adverbial Modifiers",
        explanation: "Time words indicating when an action takes place appear either before the subject or immediately after it, but never after the verb.",
        arExplanation: "ظروف الزمان تأتي إما قبل الفاعل أو بعده مباشرة، ولا تأتي مطلقاً بعد الفعل في الصينية.",
      },
    ],
    culturalNotes: [
      {
        title: "Punctuality and Meal Times",
        detail: "Standard Chinese lunch hours are punctual, typically observed precisely between 11:30 AM and 12:30 PM.",
        arDetail: "مواعيد وجبة الغداء في الصين دقيقة ومنتظمة، وغالباً ما تكون بين الساعة الحادية عشرة والنصف والثانية عشرة والنصف ظهراً.",
      },
    ],
    comprehensionQuestions: [
      {
        id: "q11-1",
        question: "What time are they going to watch the movie in Dialogue 2?",
        arQuestion: "في أي ساعة سيذهبون لمشاهدة الفيلم في الحوار الثاني؟",
        options: ["六点三十分 (6:30)", "五点 (5:00)", "十二点 (12:00)", "十点十分 (10:10)"],
        answerIndex: 0,
      },
    ],
    shadowingPractice: {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: "Official HSK 1 Standard Course Lesson 11 dialogues.",
  },
  {
    id: "hsk-1-unit-12",
    hskLevel: 1,
    unitId: 12,
    contentType: "dialogue",
    status: "ready",
    title: {
      zh: "第12课：明天天气怎么样",
      en: "Lesson 12: What's the Weather Like Tomorrow",
      ar: "الدرس 12: كيف سيكون الطقس غداً",
    },
    targetVocabularyIds: ["tianqi", "zenme-yang", "tai", "re", "leng", "yu", "lai", "ai", "shui-guo", "shui-2"],
    dialogue: [
      {
        id: "12-1-1",
        role: "Speaker A",
        hanzi: "昨天北京的天气怎么样？",
        pinyin: "Zuótiān Běijīng de tiānqì zěnmeyàng?",
        translation: {
          en: "How was the weather in Beijing yesterday?",
          ar: "كيف كان الطقس في بكين أمس؟",
        },
        audio: null,
      },
      {
        id: "12-1-2",
        role: "Speaker B",
        hanzi: "太热了。",
        pinyin: "Tài rè le.",
        translation: {
          en: "It was too hot.",
          ar: "كان حاراً جداً.",
        },
        audio: null,
      },
      {
        id: "12-1-3",
        role: "Speaker A",
        hanzi: "明天呢？明天天气怎么样？",
        pinyin: "Míngtiān ne? Míngtiān tiānqì zěnmeyàng?",
        translation: {
          en: "What about tomorrow? How will the weather be tomorrow?",
          ar: "وماذا عن الغد؟ كيف سيكون الطقس غداً؟",
        },
        audio: null,
      },
      {
        id: "12-1-4",
        role: "Speaker B",
        hanzi: "明天天气很好，不冷不热。",
        pinyin: "Míngtiān tiānqì hěn hǎo, bù lěng bú rè.",
        translation: {
          en: "Tomorrow will be very pleasant, neither cold nor hot.",
          ar: "طقس الغد سيكون لطيفاً جداً، لا برد فيه ولا حر.",
        },
        audio: null,
      },
      {
        id: "12-2-1",
        role: "Speaker A",
        hanzi: "今天会下雨吗？",
        pinyin: "Jīntiān huì xià yǔ ma?",
        translation: {
          en: "Will it rain today?",
          ar: "هل ستمطر اليوم؟",
        },
        audio: null,
      },
      {
        id: "12-2-2",
        role: "Speaker B",
        hanzi: "今天不会下雨。",
        pinyin: "Jīntiān bú huì xià yǔ.",
        translation: {
          en: "No, it will not rain today.",
          ar: "لن تمطر اليوم.",
        },
        audio: null,
      },
      {
        id: "12-2-3",
        role: "Speaker A",
        hanzi: "王小姐今天会来吗？",
        pinyin: "Wáng xiǎojiě jīntiān huì lái ma?",
        translation: {
          en: "Will Miss Wang come today?",
          ar: "هل ستأتي الآنسة وانغ اليوم؟",
        },
        audio: null,
      },
      {
        id: "12-2-4",
        role: "Speaker B",
        hanzi: "不会来，天气太冷了。",
        pinyin: "Bú huì lái, tiānqì tài lěng le.",
        translation: {
          en: "She will not come; the weather is too cold.",
          ar: "لن تأتي، الطقس بارد للغاية.",
        },
        audio: null,
      },
      {
        id: "12-3-1",
        role: "Speaker A",
        hanzi: "你身体怎么样？",
        pinyin: "Nǐ shēntǐ zěnmeyàng?",
        translation: {
          en: "How is your health?",
          ar: "كيف حال صحتك؟",
        },
        audio: null,
      },
      {
        id: "12-3-2",
        role: "Speaker B",
        hanzi: "我身体不太好。天气太热了，不爱吃饭。",
        pinyin: "Wǒ shēntǐ bú tài hǎo. Tiānqì tài rè le, bú ài chī fàn.",
        translation: {
          en: "I don't feel very well. The weather is too hot; I have no appetite.",
          ar: "صحتي ليست بخير تماماً. الجو شديد الحرارة، ولا شهية لي للأكل.",
        },
        audio: null,
      },
      {
        id: "12-3-3",
        role: "Speaker A",
        hanzi: "你多吃些水果，多喝水。",
        pinyin: "Nǐ duō chī xiē shuǐguǒ, duō hē shuǐ.",
        translation: {
          en: "Eat more fruit and drink more water.",
          ar: "تناول المزيد من الفواكه، واشرب الكثير من الماء.",
        },
        audio: null,
      },
      {
        id: "12-3-4",
        role: "Speaker B",
        hanzi: "谢谢你，医生。",
        pinyin: "Xièxie nǐ, yīshēng.",
        translation: {
          en: "Thank you, doctor.",
          ar: "شكراً لك يا دكتور.",
        },
        audio: null,
      },
    ],
    grammarNotes: [
      {
        point: "Expressing extremity with 太...了 (tài...le)",
        explanation: "太 + Adjective + 了 emphasizes a high degree, either with positive approval (太好了!) or complaint (太热了!).",
        arExplanation: "التركيب 太...了 يدل على المبالغة وشدة الصفة، سواء في الإعجاب أو التذمر.",
      },
      {
        point: "Modal verb 会 (huì) indicating possibility",
        explanation: "会 can indicate future possibility or probability of an event happening (e.g., 今天会下雨吗？).",
        arExplanation: "يدل الفعل المساعد 会 هنا على احتمالية وقوع حدث في المستقبل (مثل إمكانية هطول المطر).",
      },
    ],
    culturalNotes: [
      {
        title: "Caring Advice in Chinese Culture",
        detail: "Telling friends to 'drink more water' (多喝水) and 'eat more fruit' (多吃水果) is the classic Chinese expression of warm care.",
        arDetail: "النصيحة بـ 'شرب المزيد من الماء الدافئ' وتناول الفواكه تعد في الثقافة الصينية أسمى درجات الاهتمام والمودة.",
      },
    ],
    comprehensionQuestions: [
      {
        id: "q12-1",
        question: "How will the weather be tomorrow in Dialogue 1?",
        arQuestion: "كيف سيكون الطقس غداً في الحوار الأول؟",
        options: ["不冷不热 (Neither cold nor hot)", "太热了 (Too hot)", "下大雨 (Heavy rain)", "太冷了 (Too cold)"],
        answerIndex: 0,
      },
    ],
    shadowingPractice: {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: "Official HSK 1 Standard Course Lesson 12 dialogues.",
  },
  {
    id: "hsk-1-unit-13",
    hskLevel: 1,
    unitId: 13,
    contentType: "dialogue",
    status: "ready",
    title: {
      zh: "第13课：他在学做中国菜呢",
      en: "Lesson 13: He Is Learning to Cook Chinese Food",
      ar: "الدرس 13: إنه يتعلم طبخ الطعام الصيني",
    },
    targetVocabularyIds: ["wei", "ye", "xue", "shangwu", "shui-jiao", "dianshi", "xi-huan", "dianhua", "gei", "ba"],
    dialogue: [
      {
        id: "13-1-1",
        role: "Speaker A",
        hanzi: "喂，你在做什么呢？",
        pinyin: "Wèi, nǐ zài zuò shénme ne?",
        translation: {
          en: "Hello, what are you doing?",
          ar: "ألو، ماذا تفعل؟",
        },
        audio: null,
      },
      {
        id: "13-1-2",
        role: "Speaker B",
        hanzi: "我在看书呢。",
        pinyin: "Wǒ zài kàn shū ne.",
        translation: {
          en: "I am reading a book.",
          ar: "أنا أقرأ كتاباً.",
        },
        audio: null,
      },
      {
        id: "13-1-3",
        role: "Speaker A",
        hanzi: "大卫也在看书吗？",
        pinyin: "Dàwèi yě zài kàn shū ma?",
        translation: {
          en: "Is David reading too?",
          ar: "هل ديفيد يقرأ كتاباً أيضاً؟",
        },
        audio: null,
      },
      {
        id: "13-1-4",
        role: "Speaker B",
        hanzi: "他没看书，他在学做中国菜呢。",
        pinyin: "Tā méi kàn shū, tā zài xué zuò Zhōngguó cài ne.",
        translation: {
          en: "He is not reading; he is learning to cook Chinese food.",
          ar: "هو لا يقرأ؛ إنه يتعلم طبخ الطعام الصيني.",
        },
        audio: null,
      },
      {
        id: "13-2-1",
        role: "Speaker A",
        hanzi: "昨天上午你在做什么呢？",
        pinyin: "Zuótiān shàngwǔ nǐ zài zuò shénme ne?",
        translation: {
          en: "What were you doing yesterday morning?",
          ar: "ماذا كنت تفعل صباح أمس؟",
        },
        audio: null,
      },
      {
        id: "13-2-2",
        role: "Speaker B",
        hanzi: "我在睡觉呢。你呢？",
        pinyin: "Wǒ zài shuìjiào ne. Nǐ ne?",
        translation: {
          en: "I was sleeping. What about you?",
          ar: "كنت نائماً. وأنتَ؟",
        },
        audio: null,
      },
      {
        id: "13-2-3",
        role: "Speaker A",
        hanzi: "我在家看电视呢。你喜欢看电视吗？",
        pinyin: "Wǒ zài jiā kàn diànshì ne. Nǐ xǐhuan kàn diànshì ma?",
        translation: {
          en: "I was watching TV at home. Do you like watching TV?",
          ar: "كنت في المنزل أشاهد التلفاز. هل تحب مشاهدة التلفاز؟",
        },
        audio: null,
      },
      {
        id: "13-2-4",
        role: "Speaker B",
        hanzi: "我不喜欢看电视，我喜欢看电影。",
        pinyin: "Wǒ bù xǐhuan kàn diànshì, wǒ xǐhuan kàn diànyǐng.",
        translation: {
          en: "I don't like watching TV; I like watching movies.",
          ar: "أنا لا أحب مشاهدة التلفاز، أفضل مشاهدة الأفلام.",
        },
        audio: null,
      },
      {
        id: "13-3-1",
        role: "Speaker A",
        hanzi: "83016789，这是张先生的电话吗？",
        pinyin: "Bā sān líng yāo liù qī bā jiǔ, zhè shì Zhāng xiānsheng de diànhuà ma?",
        translation: {
          en: "83016789, is this Mr. Zhang's phone number?",
          ar: "83016789، هل هذا رقم هاتف السيد تشانغ؟",
        },
        audio: null,
      },
      {
        id: "13-3-2",
        role: "Speaker B",
        hanzi: "不是。他的电话是82304156。",
        pinyin: "Bú shì. Tā de diànhuà shì bā èr sān líng sì yāo wǔ liù.",
        translation: {
          en: "No. His phone number is 82304156.",
          ar: "كلا. رقم هاتفه هو 82304156.",
        },
        audio: null,
      },
      {
        id: "13-3-3",
        role: "Speaker A",
        hanzi: "好，我现在给他打电话。",
        pinyin: "Hǎo, wǒ xiànzài gěi tā dǎ diànhuà.",
        translation: {
          en: "Okay, I will call him right now.",
          ar: "حسناً، سأتصل به هاتفياً الآن.",
        },
        audio: null,
      },
      {
        id: "13-3-4",
        role: "Speaker B",
        hanzi: "他在工作呢，你下午打吧。",
        pinyin: "Tā zài gōngzuò ne, nǐ xiàwǔ dǎ ba.",
        translation: {
          en: "He is working now; please call this afternoon.",
          ar: "إنه منشغل بالعمل الآن، من الأفضل أن تتصل به بعد الظهر.",
        },
        audio: null,
      },
    ],
    grammarNotes: [
      {
        point: "Continuous action with 在...呢 (zài...ne)",
        explanation: "在 + Verb + 呢 indicates an action in progress at the moment: 我在看书呢 (I am reading right now). Negative uses 没在 or 没.",
        arExplanation: "صيغة المضارع المستمر: 在 + الفعل + 呢 تدل على استمرار حدوث الفعل في الوقت الراهن.",
      },
      {
        point: "Reading number 1 as 'yāo' in phone numbers",
        explanation: "In phone numbers and addresses, the digit 1 is read as 'yāo' rather than 'yī' to prevent acoustic confusion with 7 (qī).",
        arExplanation: "في أرقام الهواتف، يُنطق الرقم 1 بلفظ yāo تفادياً للالتباس الصوتي مع الرقم 7 (qī).",
      },
    ],
    culturalNotes: [
      {
        title: "Telephone Greeting: 喂 (Wèi)",
        detail: "When answering the phone in China, people customarily say '喂' (Wèi) with a rising tone, equivalent to 'Hello'.",
        arDetail: "الرد على الهاتف في الصين يبدأ دائماً بكلمة 喂 (Wèi) بنغمة صاعدة وتعني 'ألو'.",
      },
    ],
    comprehensionQuestions: [
      {
        id: "q13-1",
        question: "What is David doing in Dialogue 1?",
        arQuestion: "ماذا يفعل ديفيد في الحوار الأول؟",
        options: ["学做中国菜 (Learning to cook Chinese food)", "睡觉 (Sleeping)", "看电影 (Watching a movie)", "给张先生打电话 (Calling Mr. Zhang)"],
        answerIndex: 0,
      },
    ],
    shadowingPractice: {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: "Official HSK 1 Standard Course Lesson 13 dialogues.",
  },
  {
    id: "hsk-1-unit-14",
    hskLevel: 1,
    unitId: 14,
    contentType: "dialogue",
    status: "ready",
    title: {
      zh: "第14课：她买了不少衣服",
      en: "Lesson 14: She Bought Quite a Few Clothes",
      ar: "الدرس 14: لقد اشترت الكثير من الملابس",
    },
    targetVocabularyIds: ["dongxi", "ping-guo", "kan-jian", "xue", "kai-che", "huilai", "fen-zhong", "yi-fu", "piao-liang", "shao", "dou"],
    dialogue: [
      {
        id: "14-1-1",
        role: "Speaker A",
        hanzi: "昨天上午你去哪儿了？",
        pinyin: "Zuótiān shàngwǔ nǐ qù nǎr le?",
        translation: {
          en: "Where did you go yesterday morning?",
          ar: "إلى أين ذهبت صباح أمس؟",
        },
        audio: null,
      },
      {
        id: "14-1-2",
        role: "Speaker B",
        hanzi: "我去商店买东西了。",
        pinyin: "Wǒ qù shāngdiàn mǎi dōngxi le.",
        translation: {
          en: "I went to the store to do some shopping.",
          ar: "ذهبت إلى المتجر للتسوق وشراء بعض الحاجيات.",
        },
        audio: null,
      },
      {
        id: "14-1-3",
        role: "Speaker A",
        hanzi: "你买什么了？",
        pinyin: "Nǐ mǎi shénme le?",
        translation: {
          en: "What did you buy?",
          ar: "ماذا اشتريت؟",
        },
        audio: null,
      },
      {
        id: "14-1-4",
        role: "Speaker B",
        hanzi: "我买了一点儿苹果。",
        pinyin: "Wǒ mǎi le yìdiǎnr píngguǒ.",
        translation: {
          en: "I bought a few apples.",
          ar: "اشتريت القليل من التفاح.",
        },
        audio: null,
      },
      {
        id: "14-2-1",
        role: "Speaker A",
        hanzi: "你看见张先生了吗？",
        pinyin: "Nǐ kànjiàn Zhāng xiānsheng le ma?",
        translation: {
          en: "Have you seen Mr. Zhang?",
          ar: "هل رأيت السيد تشانغ؟",
        },
        audio: null,
      },
      {
        id: "14-2-2",
        role: "Speaker B",
        hanzi: "看见了，他去学开车了。",
        pinyin: "Kànjiàn le, tā qù xué kāi chē le.",
        translation: {
          en: "Yes, I did. He went to learn how to drive.",
          ar: "نعم رأيته، لقد ذهب ليتعلم قيادة السيارة.",
        },
        audio: null,
      },
      {
        id: "14-2-3",
        role: "Speaker A",
        hanzi: "他什么时候能回来？",
        pinyin: "Tā shénme shíhou néng huílái?",
        translation: {
          en: "When can he come back?",
          ar: "متى يمكنه العودة؟",
        },
        audio: null,
      },
      {
        id: "14-2-4",
        role: "Speaker B",
        hanzi: "四十分钟后回来。",
        pinyin: "Sìshí fēnzhōng hòu huílái.",
        translation: {
          en: "He will be back in 40 minutes.",
          ar: "سيعود بعد أربعين دقيقة.",
        },
        audio: null,
      },
      {
        id: "14-3-1",
        role: "Speaker A",
        hanzi: "王方的衣服太漂亮了！",
        pinyin: "Wáng Fāng de yīfu tài piàoliang le!",
        translation: {
          en: "Wang Fang's clothes are so pretty!",
          ar: "ملابس وانغ فانغ جميلة للغاية!",
        },
        audio: null,
      },
      {
        id: "14-3-2",
        role: "Speaker B",
        hanzi: "是啊，她买了不少衣服。",
        pinyin: "Shì a, tā mǎi le bù shǎo yīfu.",
        translation: {
          en: "Yes, she bought quite a lot of clothes.",
          ar: "أجل، لقد اشترت الكثير من الملابس.",
        },
        audio: null,
      },
      {
        id: "14-3-3",
        role: "Speaker A",
        hanzi: "你买什么了？",
        pinyin: "Nǐ mǎi shénme le?",
        translation: {
          en: "What did you buy?",
          ar: "وأنتَ، ماذا اشتريت؟",
        },
        audio: null,
      },
      {
        id: "14-3-4",
        role: "Speaker B",
        hanzi: "我没买，这些都是王方买的。",
        pinyin: "Wǒ méi mǎi, zhèxiē dōu shì Wáng Fāng mǎi de.",
        translation: {
          en: "I didn't buy anything; these were all bought by Wang Fang.",
          ar: "أنا لم أشترِ شيئاً، كل هذه الأشياء اشترتها وانغ فانغ.",
        },
        audio: null,
      },
    ],
    grammarNotes: [
      {
        point: "Aspect Particle 了 (le) indicating completed action",
        explanation: "Verb + 了 indicates completion of an action: 我买了一点儿苹果 (I bought some apples). Negative uses 没 + Verb without 了.",
        arExplanation: "الأداة 了 بعد الفعل تدل على إتمام الحدوث واكتماله، ونفيها يكون بـ 没 دون استخدام 了.",
      },
      {
        point: "Expression 后 (hòu) for time duration",
        explanation: "Duration + 后 indicates after that period: 四十分钟后 (after 40 minutes).",
        arExplanation: "تستخدم 后 بعد الفترة الزمنية لتعني 'بعد مضي كذا' (مثل: بعد أربعين دقيقة).",
      },
    ],
    culturalNotes: [
      {
        title: "Expression 不少 (Bù shǎo)",
        detail: "In Chinese, saying '不少' (not few) is a widespread litotes meaning 'quite a lot' or 'plenty'.",
        arDetail: "تعبير 不少 (ليس قليلاً) أسلوب بياني صيني شائع يعني 'الكثير جداً'.",
      },
    ],
    comprehensionQuestions: [
      {
        id: "q14-1",
        question: "What did Speaker B buy in Dialogue 1?",
        arQuestion: "ماذا اشترى المتحدث B في الحوار الأول؟",
        options: ["一点儿苹果 (A few apples)", "不少衣服 (Quite a few clothes)", "一个电脑 (A computer)", "一本书 (A book)"],
        answerIndex: 0,
      },
    ],
    shadowingPractice: {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: "Official HSK 1 Standard Course Lesson 14 dialogues.",
  },
  {
    id: "hsk-1-unit-15",
    hskLevel: 1,
    unitId: 15,
    contentType: "dialogue",
    status: "ready",
    title: {
      zh: "第15课：我是坐飞机来的",
      en: "Lesson 15: I Came Here by Plane",
      ar: "الدرس 15: لقد جئتُ بالطائرة",
    },
    targetVocabularyIds: ["ren-shi", "nian", "daxue", "fanguan", "chuzuche", "gaoxing", "ting", "fei-ji"],
    dialogue: [
      {
        id: "15-1-1",
        role: "Speaker A",
        hanzi: "你和李小姐是什么时候认识的？",
        pinyin: "Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?",
        translation: {
          en: "When did you and Miss Li get to know each other?",
          ar: "متى تعرفتَ على الآنسة لي؟",
        },
        audio: null,
      },
      {
        id: "15-1-2",
        role: "Speaker B",
        hanzi: "我们是2011年9月认识的。",
        pinyin: "Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.",
        translation: {
          en: "We met in September 2011.",
          ar: "تعرفنا في سبتمبر عام 2011.",
        },
        audio: null,
      },
      {
        id: "15-1-3",
        role: "Speaker A",
        hanzi: "你们在哪儿认识的？",
        pinyin: "Nǐmen zài nǎr rènshi de?",
        translation: {
          en: "Where did you meet?",
          ar: "أين التقيتما؟",
        },
        audio: null,
      },
      {
        id: "15-1-4",
        role: "Speaker B",
        hanzi: "我们是在学校认识的，她是我大学同学。",
        pinyin: "Wǒmen shì zài xuéxiào rènshi de, tā shì wǒ dàxué tóngxué.",
        translation: {
          en: "We met at school; she was my university classmate.",
          ar: "التقينا في الجامعة، كانت زميلتي في دراستي الجامعية.",
        },
        audio: null,
      },
      {
        id: "15-2-1",
        role: "Speaker A",
        hanzi: "你们是怎么来饭馆的？",
        pinyin: "Nǐmen shì zěnme lái fànguǎn de?",
        translation: {
          en: "How did you get to the restaurant?",
          ar: "كيف جئتم إلى المطعم؟",
        },
        audio: null,
      },
      {
        id: "15-2-2",
        role: "Speaker B",
        hanzi: "我们是坐出租车来的。",
        pinyin: "Wǒmen shì zuò chūzūchē lái de.",
        translation: {
          en: "We came by taxi.",
          ar: "جئنا بسيارة الأجرة (التاكسي).",
        },
        audio: null,
      },
      {
        id: "15-2-3",
        role: "Speaker A",
        hanzi: "李先生呢？",
        pinyin: "Lǐ xiānsheng ne?",
        translation: {
          en: "What about Mr. Li?",
          ar: "وماذا عن السيد لي؟",
        },
        audio: null,
      },
      {
        id: "15-2-4",
        role: "Speaker B",
        hanzi: "他是和朋友一起开车来的。",
        pinyin: "Tā shì hé péngyou yìqǐ kāi chē lái de.",
        translation: {
          en: "He drove here together with a friend.",
          ar: "لقد جاء بالسيارة برفقة صديق له.",
        },
        audio: null,
      },
      {
        id: "15-3-1",
        role: "Speaker A",
        hanzi: "很高兴认识您！李小姐。",
        pinyin: "Hěn gāoxìng rènshi nín! Lǐ xiǎojiě.",
        translation: {
          en: "Very pleased to meet you, Miss Li!",
          ar: "سررتُ جداً بلقائك يا آنسة لي!",
        },
        audio: null,
      },
      {
        id: "15-3-2",
        role: "Speaker B",
        hanzi: "认识你我也很高兴！",
        pinyin: "Rènshi nǐ wǒ yě hěn gāoxìng!",
        translation: {
          en: "Nice to meet you too!",
          ar: "وأنا مسرورة جداً بالتعرف عليك أيضاً!",
        },
        audio: null,
      },
      {
        id: "15-3-3",
        role: "Speaker A",
        hanzi: "听张先生说，您是坐飞机来北京的？",
        pinyin: "Tīng Zhāng xiānsheng shuō, nín shì zuò fēijī lái Běijīng de?",
        translation: {
          en: "I heard from Mr. Zhang that you came to Beijing by plane?",
          ar: "سمعتُ من السيد تشانغ أنكِ جئتِ إلى بكين بالطائرة؟",
        },
        audio: null,
      },
      {
        id: "15-3-4",
        role: "Speaker B",
        hanzi: "是的。",
        pinyin: "Shì de.",
        translation: {
          en: "Yes, that's right.",
          ar: "نعم، هذا صحيح.",
        },
        audio: null,
      },
    ],
    grammarNotes: [
      {
        point: "The 是...的 (shì...de) construction",
        explanation: "When an action has already occurred, 是...的 is used to emphasize the time, location, manner, or agent: 我们是坐出租车来的 (emphasizing manner: by taxi).",
        arExplanation: "صيغة 是...的 تُستخدم للتأكيد على زمان أو مكان أو وسيلة أو طريقة حدوث فعل ماضٍ مؤكد.",
      },
      {
        point: "Expression 很高兴认识你 (Hěn gāoxìng rènshi nǐ)",
        explanation: "The standard social expression for 'pleased to meet you' upon introduction.",
        arExplanation: "العبارة الرسمية والودية المعتمدة لـ 'سررت بلقائك' عند التعارف.",
      },
    ],
    culturalNotes: [
      {
        title: "Transportation in Beijing",
        detail: "Taxis (出租车), subways (地铁), and airport express routes form the backbone of modern Beijing urban commuting.",
        arDetail: "تشكل سيارات الأجرة وشبكات المترو والقطارات السريعة عصب التنقل العصري في العاصمة بكين.",
      },
    ],
    comprehensionQuestions: [
      {
        id: "q15-1",
        question: "How did Speaker B come to the restaurant in Dialogue 2?",
        arQuestion: "كيف جاء المتحدث B إلى المطعم في الحوار الثاني؟",
        options: ["坐出租车 (By taxi)", "坐飞机 (By plane)", "开车 (Driving)", "走路 (Walking)"],
        answerIndex: 0,
      },
    ],
    shadowingPractice: {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: "Official HSK 1 Standard Course Lesson 15 dialogues.",
  },
];

// Write Units 1-5
for (const lesson of hsk1Lessons) {
  const targetFile = path.join(destDir, `unit-${lesson.unitId}.json`);
  fs.writeFileSync(targetFile, JSON.stringify(lesson, null, 2), "utf8");
  console.log(`Saved Unit ${lesson.unitId}: ${targetFile}`);
}

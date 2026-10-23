import { arabicUiReplacements } from "./ui-replacements.js";

export const languages = {
  en: { label: "English", dir: "ltr" },
  ar: { label: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629", dir: "rtl" },
};

export const dictionary = {
  appName: {
    en: "Mandarin Flow HSK",
    zh: "\u4e2d\u6587\u4f1a\u8bdd HSK",
    ar: "\u0645\u0627\u0646\u062f\u0631\u064a\u0646 \u0641\u0644\u0648 HSK",
  },
  home: {
    en: "Home",
    zh: "\u9996\u9875",
    ar: "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
  },
  vocabulary: {
    en: "Vocabulary",
    zh: "\u8bcd\u6c47",
    ar: "\u0627\u0644\u0645\u0641\u0631\u062f\u0627\u062a",
  },
  flashcards: {
    en: "Flashcards",
    zh: "\u95ea\u5361",
    ar: "\u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062a",
  },
  conversations: {
    en: "Conversations",
    zh: "\u4f1a\u8bdd",
    ar: "\u0627\u0644\u0645\u062d\u0627\u062f\u062b\u0627\u062a",
  },
  grammar: {
    en: "Grammar",
    zh: "\u8bed\u6cd5",
    ar: "\u0627\u0644\u0642\u0648\u0627\u0639\u062f",
  },
  dashboard: {
    en: "Dashboard",
    zh: "\u5b66\u4e60\u9762\u677f",
    ar: "\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u0642\u062f\u0645",
  },
  startLearning: {
    en: "Start learning",
    zh: "\u5f00\u59cb\u5b66\u4e60",
    ar: "\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u0639\u0644\u0645",
  },
  dataWarning: {
    en: "Some lessons are still growing. New translations, examples, and audio will appear as they are added.",
    zh: "\u90e8\u5206\u8bfe\u7a0b\u8fd8\u5728\u5b8c\u5584\u4e2d\u3002\u65b0\u7684\u7ffb\u8bd1\u3001\u4f8b\u53e5\u548c\u97f3\u9891\u4f1a\u9010\u6b65\u52a0\u5165\u3002",
    ar: "\u0628\u0639\u0636 \u0627\u0644\u062f\u0631\u0648\u0633 \u0645\u0627 \u0632\u0627\u0644\u062a \u062a\u062a\u0637\u0648\u0631. \u0633\u062a\u0638\u0647\u0631 \u0627\u0644\u062a\u0631\u062c\u0645\u0627\u062a \u0648\u0627\u0644\u0623\u0645\u062b\u0644\u0629 \u0648\u0627\u0644\u0635\u0648\u062a \u0639\u0646\u062f \u0625\u0636\u0627\u0641\u062a\u0647\u0627.",
  },
  card: {
    en: "Card",
    zh: "\u5361\u7247",
    ar: "\u0628\u0637\u0627\u0642\u0629",
  },
  reviewsThisSession: {
    en: "Reviews this session",
    zh: "\u672c\u6b21\u590d\u4e60",
    ar: "\u0645\u0631\u0627\u062c\u0639\u0627\u062a \u0647\u0630\u0647 \u0627\u0644\u062c\u0644\u0633\u0629",
  },
  noFlashcardsFound: {
    en: "No flashcards found.",
    zh: "\u6ca1\u6709\u627e\u5230\u95ea\u5361\u3002",
    ar: "\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u0637\u0627\u0642\u0627\u062a.",
  },
  again: {
    en: "Again",
    zh: "\u518d\u6765",
    ar: "\u0645\u0631\u0629 \u0623\u062e\u0631\u0649",
  },
  show: {
    en: "Show",
    zh: "\u663e\u793a",
    ar: "\u0625\u0638\u0647\u0627\u0631",
  },
  hide: {
    en: "Hide",
    zh: "\u9690\u85cf",
    ar: "\u0625\u062e\u0641\u0627\u0621",
  },
  hard: {
    en: "Hard",
    zh: "\u96be",
    ar: "\u0635\u0639\u0628",
  },
  good: {
    en: "Good",
    zh: "\u597d",
    ar: "\u062c\u064a\u062f",
  },
  easy: {
    en: "Easy",
    zh: "\u5bb9\u6613",
    ar: "\u0633\u0647\u0644",
  },
  listen: {
    en: "Listen",
    zh: "\u542c\u97f3\u9891",
    ar: "\u0627\u0633\u062a\u0645\u0639",
  },
  playAudio: {
    en: "Play audio",
    zh: "\u64ad\u653e\u97f3\u9891",
    ar: "\u0634\u063a\u0644 \u0627\u0644\u0635\u0648\u062a",
  },
  audioMissing: {
    en: "Audio missing",
    zh: "\u97f3\u9891\u672a\u6dfb\u52a0",
    ar: "\u0627\u0644\u0635\u0648\u062a \u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631",
  },
  audioComingSoon: {
    en: "Audio coming soon",
    zh: "\u97f3\u9891\u5373\u5c06\u63a8\u51fa",
    ar: "\u0627\u0644\u0635\u0648\u062a \u0642\u0631\u064a\u0628\u0627",
  },
  arabicTranslationComingSoon: {
    en: "Arabic translation coming soon",
    zh: "\u963f\u62c9\u4f2f\u8bed\u7ffb\u8bd1\u5373\u5c06\u63a8\u51fa",
    ar: "\u0627\u0644\u062a\u0631\u062c\u0645\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0642\u0631\u064a\u0628\u0627",
  },
  englishTranslationComingSoon: {
    en: "English translation coming soon",
    zh: "\u82f1\u8bed\u7ffb\u8bd1\u5373\u5c06\u63a8\u51fa",
    ar: "\u0627\u0644\u062a\u0631\u062c\u0645\u0629 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0642\u0631\u064a\u0628\u0627",
  },
  arabicExampleComingSoon: {
    en: "Arabic example coming soon",
    zh: "\u963f\u62c9\u4f2f\u8bed\u4f8b\u53e5\u5373\u5c06\u63a8\u51fa",
    ar: "\u0627\u0644\u0645\u062b\u0627\u0644 \u0627\u0644\u0639\u0631\u0628\u064a \u0642\u0631\u064a\u0628\u0627",
  },
  englishExampleComingSoon: {
    en: "English example coming soon",
    zh: "\u82f1\u8bed\u4f8b\u53e5\u5373\u5c06\u63a8\u51fa",
    ar: "\u0627\u0644\u0645\u062b\u0627\u0644 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a \u0642\u0631\u064a\u0628\u0627",
  },
  exampleMeaning: {
    en: "Meaning",
    zh: "\u610f\u601d",
    ar: "\u0627\u0644\u0645\u0639\u0646\u0649",
  },
  practiceSentenceComingSoon: {
    en: "Practice sentence coming soon",
    zh: "\u7ec3\u4e60\u53e5\u5373\u5c06\u63a8\u51fa",
    ar: "\u062c\u0645\u0644\u0629 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0642\u0631\u064a\u0628\u0627",
  },
  savedProgress: {
    en: "Saved progress",
    zh: "\u8fdb\u5ea6\u5df2\u4fdd\u5b58",
    ar: "\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u062a\u0642\u062f\u0645",
  },
  progress: {
    en: "Progress",
    zh: "\u8fdb\u5ea6",
    ar: "\u0627\u0644\u062a\u0642\u062f\u0645",
  },
  yourMandarinProgress: {
    en: "Your Mandarin progress.",
    zh: "\u4f60\u7684\u4e2d\u6587\u5b66\u4e60\u8fdb\u5ea6\u3002",
    ar: "\u062a\u0642\u062f\u0645\u0643 \u0641\u064a \u0627\u0644\u0635\u064a\u0646\u064a\u0629.",
  },
  dashboardIntro: {
    en: "Track learned words, favorites, hard words, flashcard reviews, completed lessons, and recent study activity.",
    zh: "\u8ddf\u8e2a\u5df2\u5b66\u8bcd\u6c47\u3001\u6536\u85cf\u3001\u96be\u8bcd\u3001\u95ea\u5361\u590d\u4e60\u3001\u5df2\u5b8c\u6210\u8bfe\u7a0b\u548c\u6700\u8fd1\u5b66\u4e60\u3002",
    ar: "\u062a\u0627\u0628\u0639 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u0639\u0644\u0645\u062a\u0647\u0627\u060c \u0648\u0627\u0644\u0645\u0641\u0636\u0644\u0629\u060c \u0648\u0627\u0644\u0635\u0639\u0628\u0629\u060c \u0648\u0645\u0631\u0627\u062c\u0639\u0627\u062a \u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062a\u060c \u0648\u0627\u0644\u062f\u0631\u0648\u0633 \u0627\u0644\u0645\u0643\u062a\u0645\u0644\u0629\u060c \u0648\u0646\u0634\u0627\u0637\u0643 \u0627\u0644\u0623\u062e\u064a\u0631.",
  },
  overallCourseProgress: {
    en: "overall course progress",
    zh: "\u603b\u8bfe\u7a0b\u8fdb\u5ea6",
    ar: "\u062a\u0642\u062f\u0645 \u0627\u0644\u062f\u0648\u0631\u0629 \u0627\u0644\u0643\u0644\u064a",
  },
  wordsLearned: {
    en: "words learned",
    zh: "\u5df2\u5b66\u8bcd\u6c47",
    ar: "\u0643\u0644\u0645\u0627\u062a \u062a\u0639\u0644\u0645\u062a\u0647\u0627",
  },
  favorites: {
    en: "favorites",
    zh: "\u6536\u85cf",
    ar: "\u0627\u0644\u0645\u0641\u0636\u0644\u0629",
  },
  courseWords: {
    en: "course words",
    zh: "\u8bfe\u7a0b\u8bcd\u6c47",
    ar: "\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u062f\u0648\u0631\u0629",
  },
  hardWords: {
    en: "hard words",
    zh: "\u96be\u8bcd",
    ar: "\u0643\u0644\u0645\u0627\u062a \u0635\u0639\u0628\u0629",
  },
  wordsByLevel: {
    en: "Words learned by HSK level",
    zh: "\u6309 HSK \u7ea7\u522b\u67e5\u770b\u5df2\u5b66\u8bcd\u6c47",
    ar: "\u0627\u0644\u0643\u0644\u0645\u0627\u062a \u062d\u0633\u0628 \u0645\u0633\u062a\u0648\u0649 HSK",
  },
  learned: {
    en: "Learned",
    zh: "\u5df2\u5b66",
    ar: "\u062a\u0645 \u062a\u0639\u0644\u0645\u0647\u0627",
  },
  easyWords: {
    en: "Easy words",
    zh: "\u7b80\u5355\u8bcd",
    ar: "\u0643\u0644\u0645\u0627\u062a \u0633\u0647\u0644\u0629",
  },
  noWordsYet: {
    en: "No words yet.",
    zh: "\u8fd8\u6ca1\u6709\u8bcd\u6c47\u3002",
    ar: "\u0644\u0627 \u062a\u0648\u062c\u062f \u0643\u0644\u0645\u0627\u062a \u0628\u0639\u062f.",
  },
  studySnapshot: {
    en: "Study snapshot",
    zh: "\u5b66\u4e60\u6982\u89c8",
    ar: "\u0644\u0645\u062d\u0629 \u0627\u0644\u062f\u0631\u0627\u0633\u0629",
  },
  completedUnits: {
    en: "Completed units",
    zh: "\u5df2\u5b8c\u6210\u5355\u5143",
    ar: "\u0648\u062d\u062f\u0627\u062a \u0645\u0643\u062a\u0645\u0644\u0629",
  },
  completedConversations: {
    en: "Completed conversations",
    zh: "\u5df2\u5b8c\u6210\u4f1a\u8bdd",
    ar: "\u0645\u062d\u0627\u062f\u062b\u0627\u062a \u0645\u0643\u062a\u0645\u0644\u0629",
  },
  reviews: {
    en: "Reviews",
    zh: "\u590d\u4e60",
    ar: "\u0645\u0631\u0627\u062c\u0639\u0627\u062a",
  },
  studyStreak: {
    en: "Study streak",
    zh: "\u8fde\u7eed\u5b66\u4e60",
    ar: "\u0633\u0644\u0633\u0644\u0629 \u0627\u0644\u062f\u0631\u0627\u0633\u0629",
  },
  streakHelp: {
    en: "Based on days with reviews or saved study activity.",
    zh: "\u6839\u636e\u6709\u590d\u4e60\u6216\u5b66\u4e60\u8bb0\u5f55\u7684\u65e5\u671f\u8ba1\u7b97\u3002",
    ar: "\u064a\u0639\u062a\u0645\u062f \u0639\u0644\u0649 \u0627\u0644\u0623\u064a\u0627\u0645 \u0627\u0644\u062a\u064a \u0641\u064a\u0647\u0627 \u0645\u0631\u0627\u062c\u0639\u0627\u062a \u0623\u0648 \u0646\u0634\u0627\u0637 \u062f\u0631\u0627\u0633\u064a \u0645\u062d\u0641\u0648\u0638.",
  },
  days: {
    en: "days",
    zh: "\u5929",
    ar: "\u0623\u064a\u0627\u0645",
  },
  recentStudyActivity: {
    en: "Recent study activity",
    zh: "\u6700\u8fd1\u5b66\u4e60\u6d3b\u52a8",
    ar: "\u0646\u0634\u0627\u0637 \u0627\u0644\u062f\u0631\u0627\u0633\u0629 \u0627\u0644\u0623\u062e\u064a\u0631",
  },
  weakWords: {
    en: "Weak words",
    zh: "\u8584\u5f31\u8bcd\u6c47",
    ar: "\u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0636\u0639\u064a\u0641\u0629",
  },
  hardCategories: {
    en: "Hard categories",
    zh: "\u96be\u70b9\u5206\u7c7b",
    ar: "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0635\u0639\u0628\u0629",
  },
  dailyActivity: {
    en: "Daily activity",
    ar: "\u0627\u0644\u0646\u0634\u0627\u0637 \u0627\u0644\u064a\u0648\u0645\u064a",
  },
  levelCompletion: {
    en: "Level completion",
    ar: "\u0625\u0646\u062c\u0627\u0632 \u0627\u0644\u0645\u0633\u062a\u0648\u064a\u0627\u062a",
  },
  recentScores: {
    en: "Recent scores",
    ar: "\u0622\u062e\u0631 \u0627\u0644\u0646\u062a\u0627\u0626\u062c",
  },
  reviewMix: {
    en: "Review mix",
    ar: "\u062a\u0648\u0632\u064a\u0639 \u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0629",
  },
  noReviewHistory: {
    en: "No review history yet.",
    zh: "\u8fd8\u6ca1\u6709\u590d\u4e60\u8bb0\u5f55\u3002",
    ar: "\u0644\u0627 \u064a\u0648\u062c\u062f \u0633\u062c\u0644 \u0645\u0631\u0627\u062c\u0639\u0629 \u0628\u0639\u062f.",
  },
  reviewFlashcardsForWeakWords: {
    en: "Review flashcards to build a weak-word list.",
    zh: "\u590d\u4e60\u95ea\u5361\u540e\u4f1a\u751f\u6210\u8584\u5f31\u8bcd\u6c47\u5217\u8868\u3002",
    ar: "\u0631\u0627\u062c\u0639 \u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062a \u0644\u0628\u0646\u0627\u0621 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0636\u0639\u064a\u0641\u0629.",
  },
  dueReviews: {
    en: "Due reviews",
    zh: "\u5230\u671f\u590d\u4e60",
    ar: "\u0645\u0631\u0627\u062c\u0639\u0627\u062a \u0645\u0633\u062a\u062d\u0642\u0629",
  },
  footerIntro: {
    en: "A conversation-based HSK 3.0 learning space for vocabulary, grammar, flashcards, listening, and steady daily progress.",
    zh: "\u4e00\u4e2a\u57fa\u4e8e\u4f1a\u8bdd\u7684 HSK 3.0 \u5b66\u4e60\u7a7a\u95f4\uff0c\u7528\u4e8e\u8bcd\u6c47\u3001\u8bed\u6cd5\u3001\u95ea\u5361\u3001\u542c\u529b\u548c\u6bcf\u65e5\u8fdb\u6b65\u3002",
    ar: "\u0645\u0633\u0627\u062d\u0629 \u062a\u0639\u0644\u0645 HSK 3.0 \u0642\u0627\u0626\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u062d\u0627\u062f\u062b\u0629 \u0644\u0644\u0645\u0641\u0631\u062f\u0627\u062a\u060c \u0648\u0627\u0644\u0642\u0648\u0627\u0639\u062f\u060c \u0648\u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062a\u060c \u0648\u0627\u0644\u0627\u0633\u062a\u0645\u0627\u0639\u060c \u0648\u0627\u0644\u062a\u0642\u062f\u0645 \u0627\u0644\u064a\u0648\u0645\u064a.",
  },
  study: {
    en: "Study",
    zh: "\u5b66\u4e60",
    ar: "\u0627\u0644\u062f\u0631\u0627\u0633\u0629",
  },
  supportProject: {
    en: "Support",
    zh: "支持我们",
    ar: "ادعم المشروع",
  },
  supportDesc: {
    en: "Mandarin Flow is 100% free and ad-free. Help support hosting and ongoing development.",
    zh: "Mandarin Flow 完全免费且无广告。欢迎支持服务器与持续开发。",
    ar: "ماندرين فلو مجاني 100% وبدون إعلانات. ساعد في دعم الاستضافة والتطوير المستمر.",
  },
  supportAction: {
    en: "Support the Project",
    zh: "支持项目",
    ar: "ادعم الموقع",
  },
  madeBy: {
    en: "Crafted by",
    zh: "设计制作：",
    ar: "صُنع بواسطة",
  },
  feedbackAndSuggestions: {
    en: "Suggestions & Feedback",
    zh: "建议与反馈",
    ar: "المقترحات والملاحظات",
  },
  copyrightNotice: {
    en: "Mandarin Flow HSK. All rights reserved.",
    zh: "Mandarin Flow HSK。保留所有权利。",
    ar: "ماندرين فلو HSK. جميع الحقوق محفوظة.",
  },
  databaseStatus: {
    en: "Database status",
    zh: "\u6570\u636e\u5e93\u72b6\u6001",
    ar: "\u062d\u0627\u0644\u0629 \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a",
  },
  databaseStatusHelp: {
    en: "Check whether your progress database can be reached from this app.",
    zh: "\u68c0\u67e5\u5e94\u7528\u662f\u5426\u80fd\u8fde\u63a5\u4f60\u7684\u5b66\u4e60\u8fdb\u5ea6\u6570\u636e\u5e93\u3002",
    ar: "\u062a\u062d\u0642\u0642 \u0645\u0645\u0627 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u064a\u0633\u062a\u0637\u064a\u0639 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0642\u0627\u0639\u062f\u0629 \u062a\u0642\u062f\u0645\u0643.",
  },
  checkDatabase: {
    en: "Check Database",
    zh: "检查数据库",
    ar: "افحص قاعدة البيانات",
  },
  checkMongoDb: {
    en: "Check Database",
    zh: "检查数据库",
    ar: "افحص قاعدة البيانات",
  },
  checkingDatabase: {
    en: "Checking database...",
    zh: "\u6b63\u5728\u68c0\u67e5\u6570\u636e\u5e93...",
    ar: "\u062c\u0627\u0631\u064a \u0641\u062d\u0635 \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a...",
  },
  databaseOnline: {
    en: "Database online",
    zh: "\u6570\u636e\u5e93\u5728\u7ebf",
    ar: "\u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u062a\u0635\u0644\u0629",
  },
  databaseUnreachable: {
    en: "Database is not reachable right now.",
    zh: "\u73b0\u5728\u65e0\u6cd5\u8fde\u63a5\u6570\u636e\u5e93\u3002",
    ar: "\u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0622\u0646.",
  },
  brandSubtitle: {
    en: "Conversation HSK 3.0",
    zh: "\u4f1a\u8bdd HSK 3.0",
    ar: "\u0645\u062d\u0627\u062f\u062b\u0629 HSK 3.0",
  },
  account: {
    en: "Account",
    zh: "\u8d26\u6237",
    ar: "\u0627\u0644\u062d\u0633\u0627\u0628",
  },
  logOut: {
    en: "Log out",
    zh: "\u9000\u51fa",
    ar: "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c",
  },
  guestMode: {
    en: "Guest Mode",
    zh: "访客模式",
    ar: "وضع الضيف",
  },
  guestBannerTitle: {
    en: "You are studying in Guest Mode",
    zh: "您正在以访客模式学习",
    ar: "أنت تدرس حالياً بوضع الضيف",
  },
  guestBannerDesc: {
    en: "You can freely browse words and practice flashcards. To track daily streaks, save hard/easy words, and backup progress, log in to your account.",
    zh: "您可以自由浏览单词和练习闪卡。要记录连续打卡天数、保存难易词汇并备份学习进度，请登录您的账户。",
    ar: "يمكنك تصفح الكلمات وممارسة البطاقات بحرية. لتسجيل أيام الدراسة المتتالية، وحفظ الكلمات الصعبة والسهلة ومزامنة تقدمك، سجّل الدخول إلى حسابك.",
  },
  guestStreakNotice: {
    en: "Daily streaks are only recorded for logged-in accounts.",
    zh: "连续学习天数仅为已登录账户记录。",
    ar: "يتم تسجيل أيام الدراسة المتتالية فقط للحسابات المسجلة.",
  },
  logInToTrackStreak: {
    en: "Log in to start your streak",
    zh: "登录以开启连续打卡",
    ar: "سجّل الدخول لبدء سلسلة دراستك",
  },
  saveProgressPromptTitle: {
    en: "Save your study progress?",
    zh: "保存您的学习进度？",
    ar: "هل تريد حفظ تقدمك الدراسي؟",
  },
  saveProgressPromptDesc: {
    en: "Log in or create a free account to record your study streaks, save hard and easy words, and keep progress synced across devices. You can also ignore and continue as a guest.",
    zh: "登录或创建免费账户以记录学习连续天数、保存难词与易词，并在设备间同步进度。您也可以忽略并作为访客继续练习。",
    ar: "سجّل الدخول أو أنشئ حساباً مجانياً لتتبع سلسلة دراستك اليومية، وحفظ الكلمات الصعبة والسهلة، ومزامنة تقدمك. يمكنك أيضاً المتابعة كضيف دون حفظ.",
  },
  logInOrSignUp: {
    en: "Log In / Sign Up",
    zh: "登录 / 注册",
    ar: "تسجيل الدخول / إنشاء حساب",
  },
  continueAsGuest: {
    en: "Continue as guest (Ignore)",
    zh: "作为访客继续（忽略）",
    ar: "المتابعة كضيف (تجاهل)",
  },
  dontAskAgainSession: {
    en: "Don't ask again this session",
    zh: "本次会话不再提示",
    ar: "عدم السؤال مرة أخرى في هذه الجلسة",
  },
  guestWordSaveNotice: {
    en: "Word rating skipped in guest mode. Log in to record progress.",
    zh: "访客模式下跳过词汇记录。登录以保存进度。",
    ar: "تم تخطي تسجيل الكلمة في وضع الضيف. سجّل الدخول لحفظ التقدم.",
  },
  logInToSaveWords: {
    en: "Log in to save words",
    zh: "登录以保存单词",
    ar: "سجّل الدخول لحفظ الكلمات",
  },
  noHardWordsGuest: {
    en: "No hard words recorded yet. Log in and rate cards as Hard or Again to build your personal weak word deck.",
    zh: "尚未记录难词。登录并在闪卡中标记为难词或重来，以建立您的专属难词库。",
    ar: "لم يتم حفظ أي كلمات صعبة بعد. سجّل الدخول وقيّم البطاقات كصعبة لإنشاء قائمة مراجعة مخصصة.",
  },
  noFavoritesGuest: {
    en: "No favorite words saved yet. Log in to save words to your favorites.",
    zh: "尚未收藏任何单词。登录以收藏词汇。",
    ar: "لم يتم حفظ أي كلمات مفضلة بعد. سجّل الدخول لإضافة كلمات إلى مفضلاتك.",
  },
  switchToAll: {
    en: "Show all words",
    zh: "显示所有单词",
    ar: "عرض جميع الكلمات",
  },
  recognitionMode: {
    en: "Recognition",
    zh: "识记模式",
    ar: "وضع التعرف",
  },
  recallMode: {
    en: "Recall",
    zh: "回忆模式",
    ar: "وضع التذكر",
  },
  slowAudio: {
    en: "0.75x Slow",
    zh: "0.75x 慢速",
    ar: "0.75x بطيء",
  },
  normalAudio: {
    en: "1.0x Normal",
    zh: "1.0x 正常",
    ar: "1.0x طبيعي",
  },
  dailyGoal: {
    en: "Daily Goal",
    zh: "每日目标",
    ar: "الهدف اليومي",
  },
  cardsReviewedToday: {
    en: "cards reviewed today",
    zh: "今日已复习单词",
    ar: "بطاقات روجعت اليوم",
  },
  goalReached: {
    en: "Daily goal completed! 🔥",
    zh: "今日目标已达成！🔥",
    ar: "تم إكمال هدف اليوم! 🔥",
  },
  moreCardsToGo: {
    en: "more cards to hit today's goal",
    zh: "个词达成今日目标",
    ar: "بطاقات متبقية لتحقيق هدف اليوم",
  },
  offlineReady: {
    en: "Offline study ready",
    zh: "离线学习已就绪",
    ar: "الدراسة بدون اتصال جاهزة",
  },
  tapToRevealHanzi: {
    en: "(Tap or press Space to reveal Hanzi)",
    zh: "(点击或按空格揭示汉字)",
    ar: "(اضغط أو استخدم المسافة لإظهار الرمز الصيني)",
  },
  guestModeLocalPreview: {
    en: "Guest Mode - Local Preview",
    zh: "访客模式 - 本地预览",
    ar: "وضع الضيف - معاينة محلية",
  },
  chinese: {
    en: "Chinese",
    zh: "中文",
    ar: "الصينية",
  },
  meaning: {
    en: "Meaning",
    zh: "词义",
    ar: "المعنى",
  },
  actions: {
    en: "Actions",
    zh: "操作",
    ar: "الإجراءات",
  },
  audio: {
    en: "Audio",
    zh: "音频",
    ar: "الصوت",
  },
  learn: {
    en: "+ Learn",
    zh: "+ 学习",
    ar: "+ تعلم",
  },
  markLearned: {
    en: "Mark as learned",
    zh: "标记为已学",
    ar: "تحديد كمكتمل",
  },
  markedLearned: {
    en: "✓ Learned",
    zh: "✓ 已学",
    ar: "✓ تم التعلم",
  },
  favorite: {
    en: "Favorite",
    zh: "收藏",
    ar: "المفضلة",
  },
  favorited: {
    en: "Favorited",
    zh: "已收藏",
    ar: "في المفضلة",
  },
  addToFavorites: {
    en: "Add to favorites",
    zh: "加入收藏",
    ar: "إضافة إلى المفضلة",
  },
  searchWordsPlaceholder: {
    en: "Search words (Hanzi, Pinyin, Meaning)...",
    zh: "搜索单词（汉字、拼音、词义）...",
    ar: "ابحث عن الكلمات (رمز، بينيين، المعنى)...",
  },
  clear: {
    en: "Clear",
    zh: "清除",
    ar: "مسح",
  },
  wordsOf: {
    en: "of",
    zh: "/",
    ar: "من أصل",
  },
  words: {
    en: "words",
    zh: "词",
    ar: "كلمات",
  },
  noWordsMatching: {
    en: "No words matching",
    zh: "没有匹配的单词",
    ar: "لا توجد كلمات مطابقة لـ",
  },
  exampleSentences: {
    en: "Example sentences",
    zh: "例句",
    ar: "الجمل التوضيحية",
  },
  example: {
    en: "Example",
    zh: "例句",
    ar: "مثال",
  },
  listenAndSave: {
    en: "Listen and save",
    zh: "听音与保存",
    ar: "استمع واحفظ",
  },
  listenAndSaveDesc: {
    en: "Listen to native pronunciation. Save words as learned or add them to favorites for quick review.",
    zh: "聆听纯正发音。将单词标记为已学或加入收藏以便随时复习。",
    ar: "استمع للنطق الأصلي. احفظ الكلمات كمكتملة أو أضفها إلى المفضلة للمراجعة السريعة.",
  },
  coreWord: {
    en: "Core word",
    zh: "核心词汇",
    ar: "كلمة أساسية",
  },
  pronounceWord: {
    en: "Pronounce word",
    zh: "发音",
    ar: "نطق الكلمة",
  },
  playWordAudio: {
    en: "Play word audio",
    zh: "播放单词音频",
    ar: "تشغيل نطق الكلمة",
  },
  playExampleAudio: {
    en: "Play example sentence",
    zh: "播放例句音频",
    ar: "تشغيل نطق الجملة",
  },
  exampleComingSoon: {
    en: "Example sentence coming soon for this word.",
    zh: "该词的例句即将推出。",
    ar: "الجملة التوضيحية ستتوفر قريبًا لهذه الكلمة.",
  },
  unit: {
    en: "Unit",
    zh: "单元",
    ar: "الوحدة",
  },
  units: {
    en: "units",
    zh: "个单元",
    ar: "وحدات",
  },
  startUnit: {
    en: "Start unit",
    zh: "开始单元",
    ar: "ابدأ الوحدة",
  },
  openUnit: {
    en: "Open unit",
    zh: "打开单元",
    ar: "فتح الوحدة",
  },
  openDeck: {
    en: "Open deck",
    zh: "打开卡组",
    ar: "فتح البطاقات",
  },
  unitProgress: {
    en: "Unit progress",
    zh: "单元进度",
    ar: "تقدم الوحدة",
  },
  wordsToLearn: {
    en: "words to learn",
    zh: "个待学单词",
    ar: "كلمات للتعلم",
  },
  waysToPractice: {
    en: "ways to practice",
    zh: "种练习方式",
    ar: "طرق للتدريب",
  },
  levelMap: {
    en: "Level map",
    zh: "等级地图",
    ar: "خريطة المستوى",
  },
  practiceModes: {
    en: "Practice modes",
    zh: "练习模式",
    ar: "أوضاع التدريب",
  },
  studyUnits: {
    en: "Study units",
    zh: "学习单元",
    ar: "وحدات الدراسة",
  },
  vocabularyPreview: {
    en: "Vocabulary preview",
    zh: "词汇预览",
    ar: "معاينة المفردات",
  },
  firstWordsInLevel: {
    en: "First words in this level",
    zh: "本级别精选词汇",
    ar: "أولى كلمات هذا المستوى",
  },
  practiceTheseWords: {
    en: "Practice these words",
    zh: "练习这些单词",
    ar: "تدرب على هذه الكلمات",
  },
  unitDone: {
    en: "done",
    zh: "已完成",
    ar: "مكتمل",
  },
  markUnitDone: {
    en: "Mark done",
    zh: "标记完成",
    ar: "تحديد كمكتمل",
  },
  targetVocabulary: {
    en: "Target vocabulary",
    zh: "目标词汇",
    ar: "المفردات المستهدفة",
  },
  dialogueComingSoon: {
    en: "Dialogue coming soon.",
    zh: "对话即将推出。",
    ar: "المحادثة ستتوفر قريبًا.",
  },
  dialogueComingSoonDesc: {
    en: "This lesson is being prepared. You can still preview the target vocabulary below and review those words with flashcards.",
    zh: "本课内容正在准备中。您可以在下方预习目标词汇并通过闪卡进行复习。",
    ar: "هذا الدرس قيد الإعداد. يمكنك معاينة المفردات المستهدفة أدناه ومراجعتها بالبطاقات التعليمية.",
  },
  dialogueWarmup: {
    en: "Use the target words as a warm-up before practicing the full dialogue.",
    zh: "在练习完整对话前，先用目标单词热身。",
    ar: "استخدم الكلمات المستهدفة كإحماء قبل التدرب على المحادثة الكاملة.",
  },
  unitLessons: {
    en: "unit lessons",
    zh: "课单元课程",
    ar: "دروس وحدات",
  },
  openLibrary: {
    en: "Open library",
    zh: "打开曲库",
    ar: "فتح الدروس",
  },
  grammarPath: {
    en: "Grammar path",
    zh: "语法路线",
    ar: "مسار القواعد",
  },
  grammarLevels: {
    en: "Grammar levels",
    zh: "语法级别",
    ar: "مستويات القواعد",
  },
  practicePattern: {
    en: "Practice pattern",
    zh: "练习句型",
    ar: "نمط التدريب",
  },
  learnGrammarSteps: {
    en: "Learn grammar in small, clear steps.",
    zh: "循序渐进掌握汉语语法。",
    ar: "تعلم القواعد بخطوات مبسطة وواضحة.",
  },
  profile: {
    en: "Profile",
    zh: "个人资料",
    ar: "الملف الشخصي",
  },
  saveMandarinProgress: {
    en: "Save your Mandarin progress.",
    zh: "保存您的中文学习进度。",
    ar: "احفظ تقدمك في تعلم الصينية.",
  },
  accountIntro: {
    en: "Create an account or log in to keep your study progress, hard words, favorites, and reviews saved in your database.",
    zh: "创建账户或登录以将您的学习进度、难词、收藏和复习记录保存在数据库中。",
    ar: "أنشئ حسابًا أو سجل الدخول لحفظ تقدم دراستك والكلمات الصعبة والمفضلة في قاعدة البيانات.",
  },
  accountInformation: {
    en: "Account information",
    zh: "账户信息",
    ar: "معلومات الحساب",
  },
  name: {
    en: "Name",
    zh: "姓名",
    ar: "الاسم",
  },
  email: {
    en: "Email",
    zh: "电子邮件",
    ar: "البريد الإلكتروني",
  },
  password: {
    en: "Password",
    zh: "密码",
    ar: "كلمة المرور",
  },
  currentPassword: {
    en: "Current password",
    zh: "当前密码",
    ar: "كلمة المرور الحالية",
  },
  newPassword: {
    en: "New password",
    zh: "新密码",
    ar: "كلمة المرور الجديدة",
  },
  confirmPassword: {
    en: "Confirm new password",
    zh: "确认新密码",
    ar: "تأكيد كلمة المرور الجديدة",
  },
  changePassword: {
    en: "Change password",
    zh: "更改密码",
    ar: "تغيير كلمة المرور",
  },
  whatGetsSaved: {
    en: "What gets saved",
    zh: "保存的内容",
    ar: "ما يتم حفظه",
  },
  logIn: {
    en: "Log in",
    zh: "登录",
    ar: "تسجيل الدخول",
  },
  createAccount: {
    en: "Create account",
    zh: "创建账户",
    ar: "إنشاء حساب",
  },
  saving: {
    en: "Saving...",
    zh: "正在保存...",
    ar: "جاري الحفظ...",
  },
  offline: {
    en: "Offline",
    zh: "离线",
    ar: "غير متصل",
  },
  signUp: {
    en: "Sign up",
    zh: "注册",
    ar: "إنشاء حساب",
  },
  welcomeBack: {
    en: "Welcome back",
    zh: "欢迎回来",
    ar: "مرحباً بعودتك",
  },
  loginPageTitle: {
    en: "Log in to Mandarin Flow",
    zh: "登录 Mandarin Flow",
    ar: "تسجيل الدخول إلى Mandarin Flow",
  },
  loginSubtitle: {
    en: "Log in to keep your study streak and sync your vocabulary across devices.",
    zh: "登录以保持您的学习连续打卡并在设备间同步词汇。",
    ar: "سجّل الدخول للحفاظ على سلسلة دراستك ومزامنة مفرداتك عبر أجهزتك.",
  },
  signupPageTitle: {
    en: "Create your account",
    zh: "创建您的账户",
    ar: "أنشئ حسابك",
  },
  signupSubtitle: {
    en: "Create an account to save learned words, track daily streaks, and backup your progress.",
    zh: "创建账户以保存已学词汇、记录每日打卡并备份您的学习进度。",
    ar: "أنشئ حساباً لحفظ الكلمات المتعلمة، وتتبع أيام دراستك، والنسخ الاحتياطي لتقدمك.",
  },
  dontHaveAccount: {
    en: "Don't have an account?",
    zh: "还没有账户？",
    ar: "ليس لديك حساب؟",
  },
  alreadyHaveAccount: {
    en: "Already have an account?",
    zh: "لديك حساب بالفعل؟",
    ar: "هل لديك حساب بالفعل؟",
  },
  name: {
    en: "Name",
    zh: "姓名",
    ar: "الاسم",
  },
  namePlaceholder: {
    en: "Your name or nickname",
    zh: "您的姓名或昵称",
    ar: "اسمك أو لقبك",
  },
  email: {
    en: "Email",
    zh: "电子邮箱",
    ar: "البريد الإلكتروني",
  },
  emailPlaceholder: {
    en: "you@example.com",
    zh: "you@example.com",
    ar: "you@example.com",
  },
  password: {
    en: "Password",
    zh: "密码",
    ar: "كلمة المرور",
  },
  passwordPlaceholder: {
    en: "At least 8 characters",
    zh: "至少8个字符",
    ar: "8 أحرف على الأقل",
  },
  confirmPassword: {
    en: "Confirm password",
    zh: "确认密码",
    ar: "تأكيد كلمة المرور",
  },
  confirmPasswordPlaceholder: {
    en: "Re-enter your password",
    zh: "再次输入您的密码",
    ar: "أعد إدخال كلمة المرور",
  },
  passwordsDoNotMatch: {
    en: "Passwords do not match.",
    zh: "两次输入的密码不一致。",
    ar: "كلمتا المرور غير متطابقتين.",
  },
  passwordTooShort: {
    en: "Password must be at least 8 characters.",
    zh: "密码必须至少为8个字符。",
    ar: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.",
  },
  enterValidEmail: {
    en: "Please enter a valid email address.",
    zh: "请输入有效的电子邮箱地址。",
    ar: "يرجى إدخال عنوان بريد إلكتروني صالح.",
  },
  loggingIn: {
    en: "Logging in...",
    zh: "正在登录...",
    ar: "جاري تسجيل الدخول...",
  },
  creatingAccount: {
    en: "Creating account...",
    zh: "正在创建账户...",
    ar: "جاري إنشاء الحساب...",
  },
  accountServiceUnavailable: {
    en: "Account service is temporarily unavailable. Please try again shortly or continue learning as a guest.",
    zh: "账户服务暂时不可用。请稍后重试，或以访客身份继续学习。",
    ar: "خدمة الحساب غير متوفرة مؤقتاً. يرجى المحاولة مرة أخرى قريباً أو المتابعة كزائر.",
  },
  emailAlreadyRegistered: {
    en: "This email is already registered.",
    zh: "该电子邮箱已被注册。",
    ar: "هذا البريد الإلكتروني مسجل بالفعل.",
  },
  invalidCredentials: {
    en: "Invalid email or password.",
    zh: "电子邮箱或密码错误。",
    ar: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
  },
  registrationFailed: {
    en: "Registration failed. Please check your details and try again.",
    zh: "注册失败。请检查您的信息并重试。",
    ar: "فشل إنشاء الحساب. يرجى التحقق من بياناتك والمحاولة مرة أخرى.",
  },
  comingSoon: {
    en: "Coming soon",
    zh: "即将推出",
    ar: "قريباً",
  },
  ready: {
    en: "Ready",
    zh: "就绪",
    ar: "جاهز",
  },
  targetWords: {
    en: "target words",
    zh: "目标词汇",
    ar: "كلمات مستهدفة",
  },
  fullDialogueAudio: {
    en: "Full Dialogue Audio",
    zh: "完整对话音频",
    ar: "صوت المحادثة الكاملة",
  },
  fullDialogueAudioDesc: {
    en: "Listen to the complete native dialogue recording",
    zh: "收听完整原生对话录音",
    ar: "استمع إلى تسجيل المحادثة الأصلي الكامل",
  },
  playFullDialogue: {
    en: "Play full dialogue track",
    zh: "播放完整对话录音",
    ar: "تشغيل تسجيل المحادثة بالكامل",
  },
  toggleSpeechRate: {
    en: "Toggle dialogue speech rate (1.0x / 0.75x)",
    zh: "切换对话语速 (1.0x / 0.75x)",
    ar: "تغيير سرعة نطق المحادثة (1.0x / 0.75x)",
  },
  completed: {
    en: "Completed",
    zh: "已完成",
    ar: "مكتمل",
  },
  markDone: {
    en: "Mark done",
    zh: "标记完成",
    ar: "تحديد كمكتمل",
  },
  guest: {
    en: "Guest",
    zh: "访客",
    ar: "زائر",
  },

  homeHeroBadge: {
    en: "Conversation-first HSK 3.0",
    zh: "以对话为主 HSK 3.0",
    ar: "HSK 3.0 بأسلوب المحادثة",
  },
  homeHeroTitle: {
    en: "Learn Chinese inside conversations that feel alive.",
    zh: "在真实的对话中学习生动的中文。",
    ar: "تعلّم الصينية من خلال محادثات واضحة وقريبة من الحياة اليومية.",
  },
  homeHeroSubtitle: {
    en: "A multilingual HSK 1-6 learning studio for vocabulary, long dialogue, flashcards, listening, grammar, and saved progress.",
    zh: "多语言 HSK 1-6 学习平台：词汇、长对话、闪卡、听力、语法和进度保存。",
    ar: "منصة متعددة اللغات لمستويات HSK 1-6: مفردات، محادثات، بطاقات، استماع، قواعد، وحفظ للتقدم.",
  },
  startHsk1: {
    en: "Start HSK 1",
    zh: "开始 HSK 1",
    ar: "ابدأ HSK 1",
  },
  reviewFlashcards: {
    en: "Review flashcards",
    zh: "复习闪卡",
    ar: "راجع البطاقات",
  },
  grammarPath: {
    en: "Grammar path",
    zh: "语法路径",
    ar: "مسار القواعد",
  },
  liveLessonPreview: {
    en: "Live lesson preview",
    zh: "课程预览",
    ar: "معاينة درس مباشر",
  },
  shadowing: {
    en: "Shadowing",
    zh: "跟读练习",
    ar: "المحاكاة الصوتية",
  },
  teacher: {
    en: "Teacher",
    zh: "老师",
    ar: "المعلم",
  },
  student: {
    en: "Student",
    zh: "学生",
    ar: "الطالب",
  },
  previewTeacherLineHanzi: {
    en: "你今天想学什么？",
    zh: "你今天想学什么？",
    ar: "你今天想学什么？",
  },
  previewTeacherLinePinyin: {
    en: "Nǐ jīntiān xiǎng xué shénme?",
    zh: "Nǐ jīntiān xiǎng xué shénme?",
    ar: "Nǐ jīntiān xiǎng xué shénme?",
  },
  previewTeacherLineTranslation: {
    en: "What do you want to study today?",
    zh: "你今天想学什么？",
    ar: "ماذا تريد أن تدرس اليوم؟",
  },
  previewStudentLineHanzi: {
    en: "我想练习对话。",
    zh: "我想练习对话。",
    ar: "我想练习对话。",
  },
  previewStudentLinePinyin: {
    en: "Wǒ xiǎng liànxí huìhuà.",
    zh: "Wǒ xiǎng liànxí huìhuà.",
    ar: "Wǒ xiǎng liànxí huìhuà.",
  },
  previewStudentLineTranslation: {
    en: "I want to practice conversation.",
    zh: "我想练习对话。",
    ar: "أريد التدرب على المحادثة.",
  },
  pronunciationPractice: {
    en: "Pronunciation practice",
    zh: "发音练习",
    ar: "تدريب النطق",
  },
  pronunciationNotice: {
    en: "Speaking practice and pronunciation scoring are not active yet.",
    zh: "口语练习和发音打分正在开发中。",
    ar: "تدريب التحدث وتقييم النطق غير مفعّلين حاليا.",
  },
  chooseYourLevel: {
    en: "Choose your level",
    zh: "选择你的级别",
    ar: "اختر مستواك",
  },
  sixLevelsRhythm: {
    en: "Six HSK levels, one consistent learning rhythm.",
    zh: "六个 HSK 级别，保持一致的学习节奏。",
    ar: "ستة مستويات HSK بإيقاع تعلم واضح وثابت.",
  },
  eachLevelSplit: {
    en: "Each level is split into focused units so you can study words, examples, flashcards, grammar, and conversation practice at a comfortable pace.",
    zh: "每个级别分为重点单元，方便你按自己的节奏学习词汇、例句、闪卡、语法和对话练习。",
    ar: "كل مستوى مقسم إلى وحدات مركزة لتدرس الكلمات والأمثلة والبطاقات والقواعد والمحادثة براحة.",
  },
  naturalInput: {
    en: "Natural input",
    zh: "自然输入",
    ar: "إدخال طبيعي",
  },
  longConversationsFirst: {
    en: "Long conversations first",
    zh: "先练长对话",
    ar: "المحادثات الطويلة أولا",
  },
  naturalInputDesc: {
    en: "Every unit is shaped around everyday scenes: family, school, restaurants, travel, health, plans, calls, and directions.",
    zh: "每个单元都围绕日常场景设计：家庭、学校、餐厅、旅行、健康、计划、通话和问路。",
    ar: "كل وحدة مبنية حول مواقف يومية: العائلة، المدرسة، المطاعم، السفر، الصحة، الخطط، المكالمات، والاتجاهات.",
  },
  memoryLoop: {
    en: "Memory loop",
    zh: "记忆循环",
    ar: "حلقة التذكر",
  },
  flashcardsRepetition: {
    en: "Flashcards plus repetition",
    zh: "闪卡加智能间隔复习",
    ar: "بطاقات مع تكرار ذكي",
  },
  memoryLoopDesc: {
    en: "Chinese on the front, pinyin and meanings on the back, then Again, Hard, Good, and Easy scheduling.",
    zh: "正面为汉字，背面为拼音和意思，支持重来、困难、良好、简单的智能复习排程。",
    ar: "الصينية في الوجه الأمامي، والبينيين والمعاني في الخلف، ثم مراجعة حسب: مرة أخرى، صعب، جيد، سهل.",
  },
  pronunciationPracticeSoon: {
    en: "Pronunciation Practice Soon",
    zh: "发音练习即将推出",
    ar: "تدريب النطق قريبا",
  },
  pronunciationPracticeDesc: {
    en: "Speaking practice and pronunciation scoring are planned, but they are not active in the app yet.",
    zh: "口语跟读与发音打分正在规划中，暂未在应用中上线。",
    ar: "تدريب التحدث وتقييم النطق مخططان، لكنهما غير مفعّلين في التطبيق بعد.",
  },
  studyModesTitle: {
    en: "Study modes",
    zh: "学习模式",
    ar: "طرق الدراسة",
  },
  studyModesSubtitle: {
    en: "A complete practice loop, not a vocabulary dump.",
    zh: "完整的练习闭环，而非机械的词汇罗列。",
    ar: "حلقة تدريب كاملة، وليست مجرد قائمة مفردات.",
  },
  studyModesDesc: {
    en: "Move between conversations, flashcards, grammar, listening, and translation practice without losing your place. Pronunciation practice is coming soon.",
    zh: "在对话、闪卡、语法、听力和翻译练习间自如切换，随时掌握进度。发音练习即将推出。",
    ar: "تنقل بين المحادثات والبطاقات والقواعد والاستماع والترجمة دون أن تفقد مكانك. تدريب النطق قادم قريبا.",
  },
  conversationMode: {
    en: "Conversation Mode",
    zh: "对话模式",
    ar: "وضع المحادثة",
  },
  shadowingMode: {
    en: "Shadowing Mode",
    zh: "跟读模式",
    ar: "وضع المحاكاة",
  },
  flashcardMode: {
    en: "Flashcard Mode",
    zh: "闪卡模式",
    ar: "وضع البطاقات",
  },
  listeningQuiz: {
    en: "Listening Quiz",
    zh: "听力测验",
    ar: "اختبار الاستماع",
  },
  translationQuiz: {
    en: "Translation Quiz",
    zh: "翻译测验",
    ar: "اختبار الترجمة",
  },
  typingQuiz: {
    en: "Typing Quiz",
    zh: "拼写测验",
    ar: "اختبار الكتابة",
  },
  dailyLifeCoverage: {
    en: "Daily-life coverage",
    zh: "日常场景覆盖",
    ar: "مواقف الحياة اليومية",
  },
  dailyLifeCoverageDesc: {
    en: "Conversations are organized around situations learners actually meet.",
    zh: "对话围绕学习者实际会遇到的生活情景组织。",
    ar: "المحادثات منظمة حول مواقف يقابلها المتعلمون فعلا.",
  },
  unitBatchSize: {
    en: "Unit Batch Size:",
    zh: "单元词数规格：",
    ar: "حجم دفعة الوحدة:",
  },
  batchSize50: {
    en: "50 words (Standard)",
    zh: "50 词 (标准)",
    ar: "50 كلمة (قياسي)",
  },
  batchSize25: {
    en: "25 words (Bite-sized)",
    zh: "25 词 (迷你)",
    ar: "25 كلمة (موجز)",
  },
  batchSize100: {
    en: "100 words (Deep Dive)",
    zh: "100 词 (强化)",
    ar: "100 كلمة (موسع)",
  },
  unitMastery: {
    en: "Unit Mastery",
    zh: "单元掌握度",
    ar: "إتقان الوحدة",
  },
  wordsMastered: {
    en: "words mastered",
    zh: "已掌握词汇",
    ar: "كلمات تم إتقانها",
  },
  practiceFlashcardsCount: {
    en: "Practice Flashcards",
    zh: "练习闪卡",
    ar: "تدريب البطاقات",
  },
  dialogueLearning: {
    en: "Dialogue learning",
    zh: "情景对话学习",
    ar: "تعلم بالحوار",
  },
  conversationLessonsByLevel: {
    en: "Conversation lessons by HSK level.",
    zh: "按 HSK 级别划分的对话课程。",
    ar: "دروس المحادثة حسب مستوى HSK.",
  },
  conversationsHeroDesc: {
    en: "Use short dialogue lessons to connect vocabulary with real situations, then practice listening, shadowing, and comprehension.",
    zh: "通过简短的对话课程将词汇与真实情境结合，随后进行听力、跟读与理解练习。",
    ar: "استخدم دروس الحوار القصيرة لربط المفردات بمواقف حقيقية، ثم تدرب على الاستماع والمحاكاة والفهم.",
  },
  conversationLibrary: {
    en: "Conversation library",
    zh: "对话文库",
    ar: "مكتبة المحادثات",
  },
  conversationLibrarySubtitle: {
    en: "Practice useful dialogue one unit at a time.",
    zh: "循序渐进，逐单元练习实用对话。",
    ar: "تدرب على حوار مفيد وحدة تلو الأخرى.",
  },
  conversationLibraryDesc: {
    en: "Each level is organized into small lessons so new words are easier to hear, repeat, and remember.",
    zh: "每个级别被划分为小课时，便于听清、复述并牢记生词。",
    ar: "تم تنظيم كل مستوى في دروس صغيرة لتسهيل سماع الكلمات وترديدها وتذكرها.",
  },
  followUnitsInOrder: {
    en: "Follow the units in order or jump to the level you are studying now.",
    zh: "按顺序学习各个单元，或直接跳转到当前学习的级别。",
    ar: "اتبع الوحدات بالترتيب أو انتقل إلى المستوى الذي تدرسه الآن.",
  },
  unitLessons: {
    en: "unit lessons",
    zh: "单元课程",
    ar: "دروس الوحدات",
  },
  spacedRepetition: {
    en: "Spaced repetition",
    zh: "间隔重复记忆",
    ar: "التكرار المتباعد",
  },
  flashcardsHeroTitle: {
    en: "Flashcards that keep the conversation moving.",
    zh: "让会话自然流淌的词汇闪卡。",
    ar: "بطاقات تعليمية تحافظ على استمرار تعلم المحادثة.",
  },
  flashcardsHeroDesc: {
    en: "Review Chinese on the front, then pinyin, English, Arabic, examples, and audio status on the back. The deck uses Again, Hard, Good, and Easy review choices.",
    zh: "正面查看汉字，背面提供拼音、英文、阿拉伯文、例句及音频。卡片组支持重来、困难、良好和简单四级评估。",
    ar: "راجع الصينية في الوجه الأمامي، ثم البينيين والإنجليزية والعربية والأمثلة وحالة الصوت في الخلف، مع خيارات مراجعة ذكية.",
  },
  pickADeck: {
    en: "Pick a deck",
    zh: "选择卡组",
    ar: "اختر مجموعة",
  },
  studyByLevel: {
    en: "Study by level",
    zh: "按级别学习",
    ar: "الدراسة حسب المستوى",
  },
  studyByLevelDesc: {
    en: "Choose a deck, test yourself, and save difficult words for another round.",
    zh: "选择一套卡组，自测掌握度，并将难词留待下一轮重点复习。",
    ar: "اختر مجموعة، واختبر نفسك، واحفظ الكلمات الصعبة لجولة أخرى.",
  },
  cards: {
    en: "cards",
    zh: "张卡片",
    ar: "بطاقات",
  },
  hskDecks: {
    en: "HSK decks",
    zh: "套 HSK 卡组",
    ar: "مجموعات HSK",
  },
  pickLevelReviewQuick: {
    en: "Pick a level and review words in quick, focused sessions.",
    zh: "选择一个级别，在快节奏的专注会话中复习词汇。",
    ar: "اختر مستوى وراجع الكلمات في جلسات سريعة ومركزة.",
  },
  grammarHeroTitle: {
    en: "Learn grammar in small, clear steps.",
    zh: "小步快跑，轻松掌握核心语法。",
    ar: "تعلم القواعد بخطوات صغيرة وواضحة.",
  },
  grammarHeroDesc: {
    en: "Choose an HSK level, open a unit, and practice sentence patterns with examples, pinyin, and short explanations.",
    zh: "选择 HSK 级别，开启单元，结合例句、拼音与精简释义掌握句型规律。",
    ar: "اختر مستوى HSK، وافتح وحدة، وتدرب على أنماط الجمل مع الأمثلة والبينيين وشروحات واضحة.",
  },
  grammarLevels: {
    en: "Grammar levels",
    zh: "语法分级",
    ar: "مستويات القواعد",
  },
  grammarLevelsDesc: {
    en: "Each level is split into short units so the page stays easy to scan and practice.",
    zh: "每个级别分为短小单元，页面清晰易扫读，便于即时练习。",
    ar: "كل مستوى مقسم إلى وحدات قصيرة لسهولة التصفح والتدريب.",
  },
  chooseALevel: {
    en: "Choose a level",
    zh: "选择级别",
    ar: "اختر مستوى",
  },
  grammarPoints: {
    en: "grammar points",
    zh: "个语法点",
    ar: "نقاط قواعد",
  },
  levels: {
    en: "levels",
    zh: "个级别",
    ar: "مستويات",
  },
  min: {
    en: "min",
    zh: "分钟",
    ar: "دقيقة",
  },
  openLevel: {
    en: "Open level",
    zh: "进入级别",
    ar: "فتح المستوى",
  },
  openLibrary: {
    en: "Open library",
    zh: "打开文库",
    ar: "فتح المكتبة",
  },
  levelMap: {
    en: "Level map",
    zh: "级别地图",
    ar: "خريطة المستوى",
  },
  firstWordsInThisLevel: {
    en: "First words in this level",
    zh: "本级别初始词汇",
    ar: "أول كلمات هذا المستوى",
  },
  firstWordsDesc: {
    en: "Preview vocabulary before opening units or flashcards.",
    zh: "在开启单元或闪卡前先浏览词汇预览。",
    ar: "عاين المفردات قبل فتح الوحدات أو البطاقات.",
  },
  practiceTheseWords: {
    en: "Practice these words",
    zh: "练习这些词汇",
    ar: "تدرّب على هذه الكلمات",
  },
  practiceModes: {
    en: "Practice modes",
    zh: "练习方式",
    ar: "طرق التدريب",
  },
  unitCardStudyDesc: {
    en: "Study the words, review flashcards, practice conversation, listening, shadowing, and track your progress in one focused room.",
    zh: "在一个专属空间中学习生词、复习闪卡、演练对话、训练听力与跟读，并实时追踪学习成效。",
    ar: "ادرس الكلمات، وراجع البطاقات، وتدرب على المحادثة والاستماع والمحاكاة، وتابع تقدمك في مكان واحد.",
  },
  hskLevelHeroOverview: {
    en: "This level is divided into focused units with vocabulary pages, flashcards, conversation practice, listening, grammar, and local progress tracking.",
    zh: "该级别被划分为多个重点单元，涵盖生词表、闪卡、对话操练、听力、语法及本地进度跟踪。",
    ar: "هذا المستوى مقسم إلى وحدات مركزة تشمل صفحات المفردات، والبطاقات، وتدريب المحادثة، والاستماع، والقواعد، وتتبع التقدم.",
  },
  returnToHskLevel: {
    en: "Return to HSK",
    zh: "返回 HSK",
    ar: "العودة إلى HSK",
  },
  unitNotFound: {
    en: "Unit not found",
    zh: "未找到单元",
    ar: "الوحدة غير موجودة",
  },
  unitStudyAllVocab: {
    en: "Study all vocabulary words with pronunciation, examples, translations, and dedicated flashcard recall sessions.",
    zh: "结合标准发音、例句释义与专属闪卡召回，全面掌握单元词汇。",
    ar: "ادرس جميع مفردات الوحدة مع النطق والأمثلة والترجمات وجلسات استرجاع البطاقات المخصصة.",
  },
  vocabularyList: {
    en: "Vocabulary List",
    zh: "词汇表",
    ar: "قائمة المفردات",
  },
  conversation: {
    en: "Conversation",
    zh: "对话",
    ar: "المحادثة",
  },
};

export function getLocalizedMeaning(meaning, lang = "en") {
  if (!meaning) return "";
  if (typeof meaning === "string") return meaning;
  if (lang === "ar") {
    return meaning.ar || "";
  }
  return meaning.en || "";
}

export function getLocalizedExample(example, lang = "en") {
  if (!example) return "";
  if (typeof example === "string") return example;
  if (lang === "ar") {
    return example.ar || "";
  }
  return example.en || "";
}

export function t(key, lang = "en") {
  if (!key) return "";
  if (dictionary[key]?.[lang]) {
    return dictionary[key][lang];
  }
  if (dictionary[key]?.en) {
    if (lang === "ar" && arabicUiReplacements[dictionary[key].en]) {
      return arabicUiReplacements[dictionary[key].en];
    }
    return dictionary[key].en;
  }
  if (lang === "ar") {
    if (arabicUiReplacements[key]) {
      return arabicUiReplacements[key];
    }
    const trimmed = String(key).trim();
    if (arabicUiReplacements[trimmed]) {
      return arabicUiReplacements[trimmed];
    }
  }
  return key;
}


export { arabicUiReplacements };

export const levelThemeScenes = {
  1: { en: "First conversations", zh: "初识会话", ar: "أول المحادثات" },
  2: { en: "Daily confidence", zh: "日常自信", ar: "ثقة يومية" },
  3: { en: "Real situations", zh: "真实场景", ar: "مواقف واقعية" },
  4: { en: "Complex stories", zh: "丰富语篇", ar: "قصص أكثر تعقيدا" },
  5: { en: "Fluent flow", zh: "流畅表达", ar: "طلاقة متدرجة" },
  6: { en: "Advanced mastery", zh: "高级精通", ar: "إتقان متقدم" },
};

export const levelThemeTones = {
  1: { en: "Start speaking with high-frequency words.", zh: "用高频词汇开启日常表达。", ar: "ابدأ التحدث بالكلمات الأكثر استخداما." },
  2: { en: "Connect familiar ideas into longer exchanges.", zh: "将熟悉的观点串联成更长对话。", ar: "اربط الأفكار المألوفة في حوارات أطول." },
  3: { en: "Handle plans, preferences, and practical needs.", zh: "应对计划、喜好与实际生活需求。", ar: "تعامل مع الخطط والتفضيلات والاحتياجات اليومية." },
  4: { en: "Discuss work, travel, study, and opinions.", zh: "探讨工作、旅行、学术与各方见解。", ar: "ناقش العمل والسفر والدراسة والآراء." },
  5: { en: "Grow into nuanced listening and expression.", zh: "提升对细腻语感的听辨与深层表达。", ar: "طوّر الاستماع والتعبير بتفاصيل أدق." },
  6: { en: "Build advanced vocabulary, grammar, and reading confidence with focused practice units.", zh: "借助针对性训练单元建立高级词汇、语法及阅读自信。", ar: "ابن مفردات متقدمة وقواعد وثقة في القراءة من خلال وحدات تدريب مركزة." },
};

export const grammarLevelLabels = {
  1: { en: "Sentence basics", zh: "基础句型", ar: "أساسيات الجملة" },
  2: { en: "Daily patterns", zh: "日常句式", ar: "الأنماط اليومية" },
  3: { en: "Longer ideas", zh: "复合意群", ar: "أفكار أطول" },
  4: { en: "Connected speech", zh: "连贯语段", ar: "الكلام المتصل" },
  5: { en: "Advanced flow", zh: "高级流畅", ar: "طلاقة متقدمة" },
  6: { en: "Polished expression", zh: "精准润色", ar: "تعبير متقن" },
};

export function getLevelScene(level, lang = "en") {
  return levelThemeScenes[level]?.[lang] || levelThemeScenes[level]?.en || "";
}

export function getLevelTone(level, lang = "en") {
  return levelThemeTones[level]?.[lang] || levelThemeTones[level]?.en || "";
}

export function getGrammarLevelLabel(level, lang = "en") {
  return grammarLevelLabels[level]?.[lang] || grammarLevelLabels[level]?.en || "";
}

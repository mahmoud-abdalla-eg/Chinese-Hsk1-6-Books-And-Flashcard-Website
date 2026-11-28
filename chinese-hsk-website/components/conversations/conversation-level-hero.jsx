"use client";

import { useLanguage } from "@/components/language/language-provider";
import { Pill, Surface } from "@/components/ui/card";

export default function ConversationLevelHero({
  accent,
  level,
  conversationCount,
}) {
  const { lang } = useLanguage();
  const copyByLang = {
    ar: {
      title: `محادثات HSK ${level}`,
      body: `اختر من بين ${conversationCount} درساً، واقرأ المحادثات مع خيارات إظهار النطق الصوتي والترجمة ودعم الاستماع.`,
    },
    en: {
      title: `HSK ${level} conversations`,
      body: `Choose from ${conversationCount} lessons and read each conversation with optional pinyin, translation, and listening support.`,
    },
    zh: {
      title: `HSK ${level} 对话课程`,
      body: `从 ${conversationCount} 课中选择课程，可切换拼音、翻译并收听对话。`,
    },
  };
  const copy = copyByLang[lang] || copyByLang.en;

  return (
    <Surface className="relative overflow-hidden p-7 lg:p-10">
      <div
        className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${accent}`}
      />
      <Pill>HSK {level}</Pill>
      <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
        {copy.title}
      </h1>
      <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
        {copy.body}
      </p>
    </Surface>
  );
}

"use client";

import { useLanguage } from "@/components/language/language-provider";
import { Pill, Surface } from "@/components/ui/card";

export default function FlashcardLevelHero({ accent, level, wordCount }) {
  const { lang } = useLanguage();
  const copyByLang = {
    ar: {
      body: `تدرّب على ${wordCount} كلمة بالصينية، والبينيين، والمعنى، والأمثلة، وأزرار مراجعة واضحة.`,
      title: `بطاقات HSK ${level}`,
    },
    en: {
      body: `Practice ${wordCount} words with Mandarin, pinyin, meaning, examples, and simple review controls.`,
      title: `HSK ${level} flashcards`,
    },
    zh: {
      body: `练习 ${wordCount} 个词：汉字、拼音、意思、例句和简单复习按钮。`,
      title: `HSK ${level} 闪卡`,
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

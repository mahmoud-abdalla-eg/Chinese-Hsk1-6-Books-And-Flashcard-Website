"use client";

import { useMemo, useState } from "react";
import ConversationLesson from "./conversation-lesson";
import { Card, Pill } from "@/components/ui/card";
import { useLanguage } from "@/components/language/language-provider";

export default function ConversationCurriculumFilter({
  conversations = [],
  wordMap = {},
  accent = "#0284c7",
  level = 1,
}) {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";
  const [activeTab, setActiveTab] = useState("all");

  const counts = useMemo(() => {
    let standard = 0;
    let hsk3 = 0;
    for (const c of conversations) {
      if (c.curriculum === "hsk3" || c.id?.includes("hsk3")) {
        hsk3++;
      } else {
        standard++;
      }
    }
    return { all: conversations.length, standard, hsk3 };
  }, [conversations]);

  const filteredConversations = useMemo(() => {
    if (activeTab === "all") return conversations;
    if (activeTab === "hsk3") {
      return conversations.filter(
        (c) => c.curriculum === "hsk3" || c.id?.includes("hsk3"),
      );
    }
    if (activeTab === "standard") {
      return conversations.filter(
        (c) => c.curriculum !== "hsk3" && !c.id?.includes("hsk3"),
      );
    }
    return conversations;
  }, [conversations, activeTab]);

  const tabs = [
    {
      id: "all",
      label: isArabic ? "الكل" : "All Lessons",
      zh: "全部",
      count: counts.all,
    },
    {
      id: "hsk3",
      label: isArabic ? "منهج HSK 3.0 الجديد" : "New HSK 3.0 Course",
      zh: "新 HSK 3.0",
      count: counts.hsk3,
    },
    {
      id: "standard",
      label: isArabic ? "المنهج القياسي الكلاسيكي" : "Standard Course",
      zh: "标准教程",
      count: counts.standard,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Curriculum Switcher Tabs */}
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-xs backdrop-blur-xs">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-all ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-xs opacity-75">({tab.zh})</span>
              <span
                className={`ml-1 rounded-full px-2 py-0.5 text-xs font-black ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-slate-200/70 text-slate-700"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Lesson List */}
      <div className="grid gap-6">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => {
            const targetWords = (conversation.targetVocabularyIds || [])
              .map((id) => wordMap[id])
              .filter(Boolean);

            return (
              <ConversationLesson
                key={conversation.id}
                conversation={conversation}
                targetWords={targetWords}
              />
            );
          })
        ) : (
          <Card>
            <Pill tone="blue">
              {isArabic ? "لا توجد دروس حالياً" : "No lessons found"}
            </Pill>
            <h2 className="mt-4 text-2xl font-black text-slate-950">
              {isArabic
                ? `لا توجد دروس في هذا المنهج لـ HSK ${level}`
                : `No lessons under this curriculum for HSK ${level}`}
            </h2>
            <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
              {isArabic
                ? "يمكنك التبديل إلى منهج آخر عبر الأزرار بالأعلى."
                : "Switch to another curriculum tab above to view available dialogues."}
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}

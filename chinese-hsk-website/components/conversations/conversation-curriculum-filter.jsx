"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/language/language-provider";
import { Card } from "@/components/ui/card";
import ConversationLesson from "./conversation-lesson";

function isNewHskCurriculum(conversation) {
  return (
    conversation.curriculum === "hsk3" || conversation.id?.includes("hsk3")
  );
}

function getLessonTitle(conversation, isArabic) {
  return isArabic
    ? conversation.title?.ar || conversation.title?.zh || ""
    : conversation.title?.en || conversation.title?.zh || "";
}

export default function ConversationCurriculumFilter({
  conversations = [],
  wordMap = {},
  level = 1,
}) {
  const { lang, tr } = useLanguage();
  const isArabic = lang === "ar";
  const [activeTab, setActiveTab] = useState("all");
  const [selectedId, setSelectedId] = useState(null);

  const counts = useMemo(() => {
    let standard = 0;
    let hsk3 = 0;
    for (const conversation of conversations) {
      if (isNewHskCurriculum(conversation)) hsk3++;
      else standard++;
    }
    return { all: conversations.length, standard, hsk3 };
  }, [conversations]);

  const tabs = [
    {
      id: "all",
      label: isArabic ? "كل الدروس" : "All lessons",
      zh: "全部",
      count: counts.all,
    },
    {
      id: "hsk3",
      label: isArabic ? "منهج HSK 3.0 الجديد" : "New HSK 3.0",
      zh: "新 HSK 3.0",
      count: counts.hsk3,
    },
    {
      id: "standard",
      label: isArabic ? "المنهج القياسي" : "Standard",
      zh: "标准教程",
      count: counts.standard,
    },
  ];

  const filteredConversations = useMemo(() => {
    if (activeTab === "all") return conversations;
    return conversations.filter((conversation) =>
      activeTab === "hsk3"
        ? isNewHskCurriculum(conversation)
        : !isNewHskCurriculum(conversation),
    );
  }, [conversations, activeTab]);

  const selectedConversation =
    filteredConversations.find(
      (conversation) => conversation.id === selectedId,
    ) || filteredConversations[0];
  const targetWords = (selectedConversation?.targetVocabularyIds || [])
    .map((id) => wordMap[id])
    .filter(Boolean);

  return (
    <div className="space-y-5">
      <div
        aria-label={tr("conversationCurriculum")}
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
        role="tablist"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-bold transition duration-200 active:scale-[0.98] ${
                isActive
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <span>{tab.label}</span>
              <span aria-hidden="true" className="text-xs opacity-70">
                {tab.zh}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-black ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {selectedConversation ? (
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(13rem,0.78fr)_minmax(0,2fr)]">
          <nav
            aria-label={tr("conversationLessonList")}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
              <h2 className="text-sm font-black text-slate-900">
                {tr("conversationLessonList")}
              </h2>
              <span className="font-mono text-xs font-bold text-slate-500">
                {filteredConversations.length}
              </span>
            </div>
            <div className="max-h-[70vh] divide-y divide-slate-100 overflow-y-auto">
              {filteredConversations.map((conversation, index) => {
                const isSelected = conversation.id === selectedConversation.id;
                const title = getLessonTitle(conversation, isArabic);
                return (
                  <button
                    key={conversation.id}
                    type="button"
                    aria-current={isSelected ? "page" : undefined}
                    onClick={() => setSelectedId(conversation.id)}
                    className={`group block w-full border-s-2 px-4 py-3 text-start transition duration-200 active:scale-[0.99] ${
                      isSelected
                        ? "border-s-teal-700 bg-teal-50/70"
                        : "border-s-transparent bg-white hover:bg-slate-50"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-xs font-black uppercase tracking-wide text-slate-500">
                        {tr("lesson")} {conversation.unitId || index + 1}
                      </span>
                      {conversation.status === "needs-authoring" ? (
                        <span className="size-1.5 rounded-full bg-amber-500" />
                      ) : null}
                    </span>
                    <span
                      className={`mt-1 block text-sm font-bold leading-5 ${
                        isSelected ? "text-teal-950" : "text-slate-800"
                      }`}
                    >
                      {title}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          <div className="min-w-0">
            <ConversationLesson
              key={selectedConversation.id}
              conversation={selectedConversation}
              targetWords={targetWords}
            />
          </div>
        </div>
      ) : (
        <Card>
          <h2 className="text-xl font-black text-slate-950">
            {isArabic
              ? `لا توجد دروس في هذا المنهج لـ HSK ${level}`
              : `No lessons under this curriculum for HSK ${level}`}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {isArabic
              ? "اختر منهجاً آخر من الأعلى لعرض دروسه."
              : "Choose another curriculum above to browse its lessons."}
          </p>
        </Card>
      )}
    </div>
  );
}

"use client";

import { useAuth } from "@/components/auth/auth-provider";
import { useLanguage } from "@/components/language/language-provider";
import { usePersistentProgress } from "@/lib/progress/use-progress";

const keyByType = {
  unit: "completedUnits",
  conversation: "completedConversations",
};

export default function CompletionToggle({ id, type, label }) {
  const { tr } = useLanguage();
  const { requestAuthAction } = useAuth();
  const { progress, saveProgress, syncStatus } = usePersistentProgress();
  const progressKey = keyByType[type];
  const completed = progress[progressKey]?.includes(id);

  const toggle = () => {
    requestAuthAction({
      title: tr("saveProgressPromptTitle"),
      description: tr("saveProgressPromptDesc"),
      onContinue: () => {
        saveProgress((current) => {
          const currentItems = new Set(current[progressKey] || []);
          completed ? currentItems.delete(id) : currentItems.add(id);
          return {
            ...current,
            [progressKey]: [...currentItems],
          };
        });
      },
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`rounded-full px-4 py-2 text-sm font-black transition ${
        completed
          ? "bg-teal-700 text-white hover:bg-teal-800"
          : "border border-slate-300 bg-white text-slate-800 hover:border-teal-400"
      }`}
    >
      {completed ? tr("completed") : tr("markDone")}
      {syncStatusLabel(syncStatus, tr) ? (
        <span className="ml-2 text-xs opacity-70">
          {syncStatusLabel(syncStatus, tr)}
        </span>
      ) : null}
    </button>
  );
}

function syncStatusLabel(status, tr) {
  if (status === "syncing") return tr("saving");
  if (status === "local") return tr("offline");
  if (status === "guest") return tr("guest");
  return "";
}

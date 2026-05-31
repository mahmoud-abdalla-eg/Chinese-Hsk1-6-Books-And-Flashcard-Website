import AudioButton from "@/components/audio/audio-button";
import CompletionToggle from "@/components/progress/completion-toggle";
import { Card, Pill } from "@/components/ui/card";

export default function ConversationLesson({ conversation, words = [] }) {
  const targetWords = words.filter((word) =>
    conversation.targetVocabularyIds?.includes(word.id),
  );
  return (
    <Card className="space-y-6 overflow-hidden">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Pill
            tone={conversation.status === "needs-authoring" ? "amber" : "green"}
          >
            {conversation.status === "needs-authoring"
              ? "Coming soon"
              : "Ready"}
          </Pill>
          <h2 className="mt-3 text-3xl font-black text-slate-950">
            {conversation.title?.en}
          </h2>
          <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">
            {conversation.title?.zh} -{" "}
            <span dir="rtl">{conversation.title?.ar}</span>
          </p>
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl bg-blue-50 p-4 text-center text-blue-950">
            <strong className="block text-3xl font-black">
              {targetWords.length}
            </strong>
            <span className="text-xs font-black uppercase tracking-[0.16em] text-blue-700">
              target words
            </span>
          </div>
          <CompletionToggle
            id={conversation.id}
            label="conversation"
            type="conversation"
          />
        </div>
      </div>
      {conversation.dialogue?.length ? (
        <div className="space-y-3">
          {conversation.dialogue.map((line) => (
            <div
              key={line.id}
              className="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <strong>{line.role}</strong>
                <AudioButton src={line.audio} />
              </div>
              <p className="hanzi-display mt-2 text-2xl font-black text-slate-950">
                {line.hanzi}
              </p>
              <p className="text-teal-700">{line.pinyin}</p>
              <p>{line.translation?.en}</p>
              <p dir="rtl">{line.translation?.ar}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-slate-800 md:grid-cols-[1fr_260px]">
          <div>
            <strong className="text-lg">Dialogue coming soon.</strong>
            <p className="mt-2 text-sm font-semibold leading-7">
              This lesson is being prepared. You can still preview the target
              vocabulary below and review those words with flashcards.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 text-sm font-bold text-slate-700">
            Use the target words as a warm-up before practicing the full
            dialogue.
          </div>
        </div>
      )}
      <div>
        <h3 className="text-lg font-black text-slate-950">Target vocabulary</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {targetWords.slice(0, 100).map((word) => (
            <span
              key={word.id}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700"
            >
              {word.hanzi} - {word.pinyin}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}

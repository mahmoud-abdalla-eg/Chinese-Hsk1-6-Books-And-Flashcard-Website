import { Card, Pill } from "@/components/ui/card";

export default function GrammarCard({ item, index }) {
  const hasExample =
    item.example?.hanzi || item.example?.pinyin || item.example?.en;
  return (
    <Card className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Pill tone="slate">{item.lessonCode}</Pill>
        <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h2 className="text-2xl font-black text-slate-950">
        {item.pattern || "Practice pattern"}
      </h2>
      {item.explanation || item.details ? (
        <p className="text-sm font-semibold leading-7 text-slate-600">
          {item.explanation || item.details}
        </p>
      ) : null}
      {hasExample ? (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="hanzi-display text-3xl font-black text-slate-950">
            {item.example.hanzi}
          </p>
          <p className="mt-2 font-bold text-teal-700">{item.example.pinyin}</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
            {item.example.en}
          </p>
        </div>
      ) : null}
    </Card>
  );
}

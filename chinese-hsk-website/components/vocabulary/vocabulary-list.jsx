import Link from "next/link";
import AudioButton from "@/components/audio/audio-button";

export default function VocabularyList({ words, level }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-[64px_1fr] gap-3 border-b border-slate-200 bg-slate-50 px-4 py-4 text-xs font-black uppercase tracking-[0.16em] text-slate-500 sm:grid-cols-[72px_1fr_1fr_140px]">
        <span>#</span>
        <span>Chinese</span>
        <span className="hidden sm:block">Meaning</span>
        <span className="hidden sm:block">Audio</span>
      </div>
      {words.map((word) => (
        <div
          key={word.id}
          className="grid grid-cols-[64px_1fr] items-center gap-3 border-b border-slate-100 px-4 py-4 last:border-b-0 sm:grid-cols-[72px_1fr_1fr_140px]"
        >
          <span className="text-sm font-black text-slate-400">
            {word.order}
          </span>
          <Link
            href={`/hsk/${level}/word/${word.id}`}
            className="group rounded-2xl transition"
          >
            <span className="hanzi-display block text-3xl font-black text-slate-950 group-hover:text-teal-700">
              {word.hanzi}
            </span>
            <span className="block text-sm font-bold text-teal-700">
              {word.pinyin}
            </span>
          </Link>
          <span className="text-sm font-semibold leading-6 text-slate-600">
            {word.meaning.en || "English coming soon"}
            <br />
            <span className="text-slate-400" dir="rtl">
              {word.meaning.ar || "Arabic coming soon"}
            </span>
          </span>
          <AudioButton src={word.audio.word} />
        </div>
      ))}
    </div>
  );
}

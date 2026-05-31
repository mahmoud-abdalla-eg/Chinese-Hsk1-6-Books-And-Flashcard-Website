export function Card({ className = "", children }) {
  return (
    <section
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </section>
  );
}

export function Surface({ className = "", children }) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function Pill({ children, tone = "amber" }) {
  const tones = {
    amber: "bg-amber-100 text-amber-950 ring-amber-200",
    blue: "bg-blue-100 text-blue-950 ring-blue-200",
    green: "bg-teal-100 text-teal-950 ring-teal-200",
    rose: "bg-rose-100 text-rose-950 ring-rose-200",
    slate: "bg-slate-100 text-slate-700 ring-slate-200",
  };
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ring-1 ${tones[tone] || tones.slate}`}
    >
      {children}
    </span>
  );
}

export function ProgressBar({ value = 0 }) {
  const safe = Math.max(0, Math.min(100, Number(value) || 0));
  return (
    <div className="h-3 overflow-hidden rounded-full bg-slate-200 ring-1 ring-slate-200">
      <div
        className="h-full rounded-full bg-teal-600"
        style={{ width: `${safe}%` }}
      />
    </div>
  );
}

export function SectionHeading({ eyebrow, title, text, align = "left" }) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      {eyebrow ? <Pill>{eyebrow}</Pill> : null}
      <h2 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-lg font-semibold leading-8 text-slate-600">
          {text}
        </p>
      ) : null}
    </div>
  );
}

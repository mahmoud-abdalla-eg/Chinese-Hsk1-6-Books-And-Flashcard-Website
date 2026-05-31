export default function AdminStatCard({ label, value, tone = "slate" }) {
  const tones = {
    slate: "bg-slate-50 text-slate-950",
    teal: "bg-teal-50 text-teal-950",
    blue: "bg-blue-50 text-blue-950",
    rose: "bg-rose-50 text-rose-950",
    amber: "bg-amber-50 text-amber-950",
  };
  return (
    <div className={`rounded-2xl p-5 ${tones[tone] || tones.slate}`}>
      <strong className="block text-4xl font-black">{value}</strong>
      <span className="mt-1 block text-sm font-black uppercase tracking-[0.14em] opacity-70">
        {label}
      </span>
    </div>
  );
}

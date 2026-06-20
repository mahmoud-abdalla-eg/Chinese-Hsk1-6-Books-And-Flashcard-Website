import { Card, Surface } from "@/components/ui/card";

const grammarSkeletons = [
  "grammar-1",
  "grammar-2",
  "grammar-3",
  "grammar-4",
  "grammar-5",
  "grammar-6",
  "grammar-7",
  "grammar-8",
];

export default function Loading() {
  return (
    <div className="animate-pulse space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <div className="h-4 w-32 rounded-full bg-slate-200" />
        <div className="mt-6 h-14 max-w-3xl rounded-2xl bg-slate-200" />
        <div className="mt-4 h-5 max-w-2xl rounded-full bg-slate-200" />
      </Surface>
      <div className="grid gap-4 lg:grid-cols-2">
        {grammarSkeletons.map((key) => (
          <Card key={key}>
            <div className="h-4 w-24 rounded-full bg-slate-200" />
            <div className="mt-5 h-9 rounded-xl bg-slate-200" />
            <div className="mt-4 h-4 rounded-full bg-slate-100" />
            <div className="mt-2 h-4 w-3/4 rounded-full bg-slate-100" />
          </Card>
        ))}
      </div>
    </div>
  );
}

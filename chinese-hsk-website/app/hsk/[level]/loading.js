import { Card, Surface } from "@/components/ui/card";

const unitSkeletons = [
  "unit-1",
  "unit-2",
  "unit-3",
  "unit-4",
  "unit-5",
  "unit-6",
];

export default function Loading() {
  return (
    <div className="animate-pulse space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <div className="h-4 w-24 rounded-full bg-slate-200" />
        <div className="mt-6 h-16 max-w-3xl rounded-2xl bg-slate-200" />
        <div className="mt-4 h-5 max-w-2xl rounded-full bg-slate-200" />
      </Surface>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {unitSkeletons.map((key) => (
          <Card key={key}>
            <div className="h-4 w-20 rounded-full bg-slate-200" />
            <div className="mt-5 h-8 rounded-xl bg-slate-200" />
            <div className="mt-3 h-4 rounded-full bg-slate-100" />
            <div className="mt-8 h-10 rounded-full bg-slate-200" />
          </Card>
        ))}
      </div>
    </div>
  );
}

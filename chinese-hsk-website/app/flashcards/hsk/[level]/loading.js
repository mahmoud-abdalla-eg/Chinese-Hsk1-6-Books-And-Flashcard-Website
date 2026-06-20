import { Card, Surface } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="animate-pulse space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <div className="h-4 w-28 rounded-full bg-slate-200" />
        <div className="mt-6 h-14 max-w-2xl rounded-2xl bg-slate-200" />
      </Surface>
      <Card className="p-4 sm:p-6">
        <div className="mx-auto h-72 max-w-2xl rounded-3xl bg-slate-100" />
        <div className="mx-auto mt-6 h-12 max-w-md rounded-full bg-slate-200" />
      </Card>
    </div>
  );
}

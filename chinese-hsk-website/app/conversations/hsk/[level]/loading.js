import { Card, Surface } from "@/components/ui/card";

const conversationSkeletons = [
  "conversation-1",
  "conversation-2",
  "conversation-3",
  "conversation-4",
];

export default function Loading() {
  return (
    <div className="animate-pulse space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <div className="h-4 w-24 rounded-full bg-slate-200" />
        <div className="mt-6 h-14 max-w-3xl rounded-2xl bg-slate-200" />
        <div className="mt-4 h-5 max-w-2xl rounded-full bg-slate-200" />
      </Surface>
      <div className="grid gap-6">
        {conversationSkeletons.map((key) => (
          <Card key={key}>
            <div className="h-4 w-28 rounded-full bg-slate-200" />
            <div className="mt-5 h-8 max-w-lg rounded-xl bg-slate-200" />
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="h-20 rounded-2xl bg-slate-100" />
              <div className="h-20 rounded-2xl bg-slate-100" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

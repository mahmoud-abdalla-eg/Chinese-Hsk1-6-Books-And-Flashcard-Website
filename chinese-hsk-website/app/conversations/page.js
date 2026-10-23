import ConversationsView from "@/components/conversations/conversations-view";
import { getManagedHskSummary } from "@/lib/admin/course-words";

export const revalidate = 300;

export default async function ConversationsPage() {
  const summaries = await getManagedHskSummary();
  const lessonCount = summaries.reduce(
    (sum, summary) => sum + summary.conversationCount,
    0,
  );

  return (
    <ConversationsView summaries={summaries} lessonCount={lessonCount} />
  );
}

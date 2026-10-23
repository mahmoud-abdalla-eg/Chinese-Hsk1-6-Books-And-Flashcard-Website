import { Suspense } from "react";
import { redirect } from "next/navigation";
import SignupCard from "@/components/auth/signup-card";
import { Pill, Surface } from "@/components/ui/card";
import { getSessionUserId } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Create Account | Mandarin Flow HSK",
  description:
    "Create an account to save your Mandarin vocabulary, track daily study streaks, and sync progress.",
};

export default async function SignupPage({ searchParams }) {
  const userId = await getSessionUserId();
  const params = await searchParams;
  const redirectTarget = params?.redirect || "/dashboard";

  if (userId) {
    redirect(redirectTarget);
  }

  const error = params?.error ? decodeURIComponent(params.error) : "";

  return (
    <div className="space-y-8 pb-12 pt-4">
      <Surface className="p-7 text-center sm:p-10">
        <Pill>Registration</Pill>
        <h1 className="mt-4 text-4xl font-black text-slate-950 sm:text-6xl">
          Start your learning journey
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base font-semibold text-slate-600 sm:text-lg">
          Create an account to save learned words, track daily study streaks,
          and backup your progress across devices.
        </p>
      </Surface>

      <Suspense
        fallback={
          <div className="h-96 w-full max-w-md mx-auto animate-pulse rounded-3xl bg-slate-100" />
        }
      >
        <SignupCard initialError={error} />
      </Suspense>
    </div>
  );
}

import { Suspense } from "react";
import { redirect } from "next/navigation";
import LoginCard from "@/components/auth/login-card";
import { Pill, Surface } from "@/components/ui/card";
import { getSessionUserId } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Log in | Mandarin Flow HSK",
  description:
    "Log in to your Mandarin Flow account to keep your streak and study history synchronized.",
};

export default async function LoginPage({ searchParams }) {
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
        <Pill>Authentication</Pill>
        <h1 className="mt-4 text-4xl font-black text-slate-950 sm:text-6xl">
          Welcome back
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base font-semibold text-slate-600 sm:text-lg">
          Log in to continue your daily Mandarin study streak and sync your
          vocabulary progress.
        </p>
      </Surface>

      <Suspense
        fallback={
          <div className="h-96 w-full max-w-md mx-auto animate-pulse rounded-3xl bg-slate-100" />
        }
      >
        <LoginCard initialError={error} />
      </Suspense>
    </div>
  );
}

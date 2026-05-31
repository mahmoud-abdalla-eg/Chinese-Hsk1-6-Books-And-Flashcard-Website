export default function AccountForm({ error = "" }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="grid gap-6">
        {error ? (
          <p className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm font-bold text-rose-800">
            {error}
          </p>
        ) : null}
        <AccountPanel
          action="/api/auth/login"
          buttonLabel="Log in"
          title="Log in"
        />
        <AccountPanel
          action="/api/auth/register"
          buttonLabel="Create account"
          showName
          title="Create account"
        />
      </div>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-black text-slate-950">What gets saved</h2>
        <div className="mt-4 grid gap-3 text-sm font-semibold leading-6 text-slate-600">
          <p>Learned words, favorites, hard words, and review history.</p>
          <p>Completed units and completed conversation lessons.</p>
        </div>
      </div>
    </div>
  );
}

function AccountPanel({ action, buttonLabel, showName = false, title }) {
  return (
    <form
      action={action}
      method="post"
      className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-2xl font-black text-slate-950">{title}</h2>
      {showName ? (
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Name
          <input
            name="name"
            className="rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-teal-500"
            placeholder="Your name"
          />
        </label>
      ) : null}
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        Email
        <input
          required
          name="email"
          type="email"
          className="rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-teal-500"
          placeholder="you@example.com"
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        Password
        <input
          required
          name="password"
          type="password"
          minLength={8}
          className="rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-teal-500"
          placeholder="At least 8 characters"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white hover:bg-teal-800"
      >
        {buttonLabel}
      </button>
    </form>
  );
}

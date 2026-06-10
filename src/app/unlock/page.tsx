import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simon Leyton",
  description: "This portfolio is password protected.",
  robots: { index: false, follow: false },
};

/* The SL monogram, rendered via CSS mask so it follows the theme color. */
function Monogram() {
  return (
    <span
      role="img"
      aria-label="Simon Leyton monogram"
      className="block h-24 w-[57px] bg-foreground/70"
      style={{
        WebkitMaskImage: "url(/images/sl-monogram.png)",
        maskImage: "url(/images/sl-monogram.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

export default async function UnlockPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; from?: string }>;
}) {
  const { error, from } = await searchParams;

  return (
    <main
      id="main-content"
      className="min-h-screen flex items-center justify-center px-5 py-16"
    >
      <div
        className="w-full max-w-[420px] rounded-[24px] md:rounded-[32px] overflow-hidden
          bg-white/80 dark:bg-black/45 backdrop-blur-2xl
          border border-white/50 dark:border-white/10
          shadow-[0_8px_40px_rgba(10,9,8,0.16)]
          px-8 py-12 md:px-10 md:py-14 flex flex-col items-center text-center gap-8"
      >
        <Monogram />

        <div className="flex flex-col gap-2">
          <h1 className="font-heading text-[26px] md:text-[30px] font-normal leading-tight text-foreground">
            This portfolio is private
          </h1>
          <p className="text-base text-black/55 dark:text-white/55">
            Enter the password to view the work.
          </p>
        </div>

        <form
          method="POST"
          action="/api/unlock"
          className="w-full flex flex-col gap-3"
        >
          {from && <input type="hidden" name="from" value={from} />}
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoFocus
            autoComplete="current-password"
            placeholder="Password"
            className="w-full rounded-full border border-black/15 dark:border-white/20
              bg-white/70 dark:bg-white/[0.06] px-5 py-3 text-base text-foreground
              placeholder:text-black/35 dark:placeholder:text-white/35
              outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)]
              focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          />
          {error && (
            <p role="alert" className="text-sm text-[var(--accent-coral)]">
              That password didn&apos;t match. Try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-full bg-foreground text-background px-5 py-3
              text-base font-bold transition-opacity hover:opacity-85
              outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)]
              focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View the work
          </button>
        </form>

        <p className="text-sm text-black/45 dark:text-white/45">
          Need access? Email{" "}
          <a
            href="mailto:simonleyton@gmail.com"
            className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
          >
            simonleyton@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}

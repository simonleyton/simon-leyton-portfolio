export function Footer() {
  return (
    <footer className="px-5 pt-16 pb-24 tablet:px-10 tablet:pt-20 tablet:pb-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="border-t border-black/10 dark:border-white/10 pt-10 flex flex-col gap-6 tablet:flex-row tablet:items-center tablet:justify-between">
          <p className="font-[family-name:var(--font-inter)] flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-black/60 dark:text-white/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-coral)]" aria-hidden="true" />
            &copy; {new Date().getFullYear()} Simon Leyton &middot; Built in Miami
          </p>
          <div className="flex gap-6 font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.2em]">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/60 hover:text-[var(--accent-coral)] dark:text-white/70 dark:hover:text-[var(--accent-coral)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@simonleyton.com"
              className="text-black/60 hover:text-[var(--accent-coral)] dark:text-white/70 dark:hover:text-[var(--accent-coral)] transition-colors"
            >
              Email
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/60 hover:text-[var(--accent-coral)] dark:text-white/70 dark:hover:text-[var(--accent-coral)] transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

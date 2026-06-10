export function Footer() {
  return (
    <footer className="px-5 pt-16 pb-24 tablet:px-10 tablet:pt-20 tablet:pb-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="border-t border-black/10 dark:border-white/10 pt-10 flex flex-col gap-6 tablet:flex-row tablet:items-center tablet:justify-between">
          <p className="text-sm text-black/65 dark:text-white/75">
            {`© ${new Date().getFullYear()} Simon Leyton · Built in Miami`}
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="https://linkedin.com/in/simonleyton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/65 hover:text-[var(--accent-coral)] dark:text-white/75 dark:hover:text-[var(--accent-coral)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/leytonsimon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/65 hover:text-[var(--accent-coral)] dark:text-white/75 dark:hover:text-[var(--accent-coral)] transition-colors"
            >
              X
            </a>
            <a
              href="mailto:hello@simonleyton.com"
              className="text-black/65 hover:text-[var(--accent-coral)] dark:text-white/75 dark:hover:text-[var(--accent-coral)] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

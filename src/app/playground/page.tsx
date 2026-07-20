import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { playground } from "@/data/projects";

export const metadata: Metadata = {
  title: "Playground — Simon Leyton",
  description:
    "Live experiments: Sea Time, Aurora Clock, and Perpetual Sunset.",
};

function PlaygroundCard({
  title,
  subtitle,
  image,
  href,
}: {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-[24px] md:rounded-[34px] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <div className="rounded-[20px] md:rounded-[30px] overflow-hidden bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.05] dark:border-white/[0.08]">
        <div className="aspect-square rounded-[14px] md:rounded-[24px] overflow-hidden m-1.5 md:m-2 relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 430px"
          />
        </div>
        <div className="px-5 pt-3 pb-6 md:px-6 md:pt-4 md:pb-8">
          <h2 className="font-normal text-xl md:text-2xl text-foreground">
            {title}{" "}
            <span
              aria-hidden
              className="inline-block text-[color:var(--color-muted-text)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </h2>
          <p className="mt-1 text-base md:text-lg text-[color:var(--color-muted-text)]">
            {subtitle}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function PlaygroundPage() {
  return (
    <div
      id="main-content"
      tabIndex={-1}
      className="min-h-screen bg-background text-foreground outline-none"
    >
      {/* Header — name top-left */}
      <section className="px-5 md:px-10 pt-6 md:pt-10 pb-10">
        <Link href="/" className="inline-block">
          <span className="block font-heading text-[30px] font-normal text-foreground tracking-[-0.03em]">
            Simon Leyton
          </span>
        </Link>
      </section>

      {/* Close button — fixed top-right, matches the case-study pages */}
      <nav className="fixed top-0 right-0 z-50 p-5 md:p-10">
        <Link
          href="/#hero"
          className="bg-[rgba(240,240,240,0.6)] hover:bg-[rgba(220,220,220,0.6)] dark:bg-[rgba(64,64,64,0.6)] dark:hover:bg-[rgba(80,80,80,0.6)] backdrop-blur-[40px] transition-colors rounded-full w-11 h-11 flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Back to home"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </nav>

      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Title */}
        <div className="pb-6 md:pb-8">
          <h1 className="font-heading font-normal tracking-[-0.04em] leading-[0.98] text-foreground text-[clamp(48px,11vw,150px)]">
            Playground
          </h1>
        </div>

        {/* Intro */}
        <p className="pb-12 md:pb-16 max-w-[560px] text-base md:text-lg text-[color:var(--color-muted-text)]">
          Things built because I wanted them to exist. Everything here is live
          — each card opens the real thing.
        </p>

        {/* Experiments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {playground.map((p) => (
            <PlaygroundCard key={p.href} {...p} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-16 pb-20 text-center">
        <Link
          href="/#hero"
          className="text-base text-[color:var(--color-muted-text)] hover:text-foreground transition-colors rounded outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          ← Back to home
        </Link>
        <p className="mt-6 text-xs uppercase tracking-widest text-[color:var(--color-muted-text)]">
          &copy; Simon Leyton
        </p>
      </footer>
    </div>
  );
}

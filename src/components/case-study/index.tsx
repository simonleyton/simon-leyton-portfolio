import Image from "next/image";
import Link from "next/link";

/* ── The case-study kit ─────────────────────────────────────────
   Single source of truth for every /work page. One spec: quiet gray
   sentence-case kickers, AA muted token, canonical-iPhone imagery,
   one exit (/work), and a forward path at the end of every page. */

export function SectionHeading({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 md:gap-6 lg:gap-10 py-8 md:py-12 lg:py-16">
      <div className="lg:col-span-2">
        <p className="text-sm text-[color:var(--color-muted-text)] mb-2">{kicker}</p>
        <h2 className="font-heading text-[30px] md:text-[34px] font-normal leading-[1.1] text-foreground">
          {title}
        </h2>
      </div>
      <div className="lg:col-span-4 flex flex-col gap-5">{children}</div>
    </div>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base md:text-lg leading-relaxed text-[color:var(--color-muted-text)] max-w-[68ch]">
      {children}
    </p>
  );
}

/* A phone screenshot framed on a soft tint, shown in full (contained). */
export function Shot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="flex flex-col">
      <div className="rounded-[20px] md:rounded-[26px] bg-black/[0.03] dark:bg-white/[0.05] p-3 md:p-5 flex items-center justify-center">
        <div className="relative w-full aspect-[420/880]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, 420px"
          />
        </div>
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}

/* An animated prototype clip playing inside the canonical iPhone frame. */
export function DeviceGifShot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="flex flex-col">
      <div className="rounded-[20px] md:rounded-[26px] bg-black/[0.03] dark:bg-white/[0.05] p-3 md:p-5 flex items-center justify-center">
        <div className="relative w-full aspect-[1308/2712]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="absolute object-cover"
            style={{
              left: "3.82%",
              top: "1.66%",
              width: "92.2%",
              height: "96.68%",
              borderRadius: "12.4% / 5.7%",
            }}
          />
          <Image
            src="/images/device/iphone-16-frame.png"
            alt=""
            fill
            className="object-contain pointer-events-none select-none"
            sizes="(max-width: 768px) 90vw, 420px"
          />
        </div>
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}

/* A wide reference image (flow boards, diagrams, panels) at natural ratio. */
export function FlowStrip({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="flex flex-col">
      <div className="rounded-[20px] md:rounded-[26px] overflow-hidden bg-black/[0.04] dark:bg-white/[0.04] p-3 md:p-5 border border-black/[0.06] dark:border-white/[0.08]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto rounded-[8px] ring-1 ring-black/[0.06] dark:ring-white/[0.08]"
          sizes="(max-width: 768px) 100vw, 1320px"
        />
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}

/* A photo cropped to a uniform aspect ratio, so a row of mixed-orientation
   shots keeps even card heights. `position` tunes the focal point of the crop. */
export function Photo({
  src,
  alt,
  caption,
  ratio = "4 / 3",
  position = "center",
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  position?: string;
}) {
  return (
    <figure className="flex flex-col">
      <div className="rounded-[20px] md:rounded-[26px] overflow-hidden bg-black/[0.04] dark:bg-white/[0.04] p-3 md:p-5 border border-black/[0.06] dark:border-white/[0.08]">
        <div
          className="relative w-full overflow-hidden rounded-[8px] ring-1 ring-black/[0.06] dark:ring-white/[0.08]"
          style={{ aspectRatio: ratio }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            style={{ objectPosition: position }}
            sizes="(max-width: 768px) 100vw, 440px"
          />
        </div>
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}

/* The page's one grid-breaking moment: a single phone, oversized, centered. */
export function Showpiece({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="flex flex-col items-center">
      <div className="w-full rounded-[20px] md:rounded-[26px] bg-black/[0.03] dark:bg-white/[0.05] py-8 md:py-14 flex items-center justify-center">
        <div className="relative w-full max-w-[420px] md:max-w-[540px] aspect-[420/880] px-4">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, 540px"
          />
        </div>
      </div>
      <Caption center>{caption}</Caption>
    </figure>
  );
}

/* A reserved slot for an artifact that exists but hasn't been supplied yet. */
export function PlaceholderStrip({
  label,
  note,
}: {
  label: string;
  note?: string;
}) {
  return (
    <figure className="flex flex-col">
      <div className="rounded-[20px] md:rounded-[26px] border border-dashed border-black/[0.15] dark:border-white/[0.2] bg-black/[0.02] dark:bg-white/[0.03] px-6 py-14 md:py-20 flex flex-col items-center justify-center text-center gap-2">
        <p className="text-base text-[color:var(--color-muted-text)]">{label}</p>
        {note && (
          <p className="text-sm text-black/40 dark:text-white/40">{note}</p>
        )}
      </div>
    </figure>
  );
}

function Caption({
  children,
  center,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <figcaption
      className={`mt-3 text-sm text-[color:var(--color-muted-text)] ${center ? "text-center" : ""}`}
    >
      {children}
    </figcaption>
  );
}

/* One enumerable row: findings, goals, criteria, achievements. */
export function Row({
  index,
  title,
  detail,
}: {
  index: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-5 border-t border-black/[0.08] dark:border-white/[0.1]">
      <p className="md:col-span-1 text-sm text-foreground">{index}</p>
      <p className="md:col-span-3 text-base text-foreground">{title}</p>
      <p className="md:col-span-8 text-base text-[color:var(--color-muted-text)]">
        {detail}
      </p>
    </div>
  );
}

/* Audit row: issue → why it matters → what changed. */
export function AuditRow({
  index,
  issue,
  why,
  change,
}: {
  index: string;
  issue: string;
  why: string;
  change: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-5 border-t border-black/[0.08] dark:border-white/[0.1]">
      <p className="md:col-span-1 text-sm text-foreground">{index}</p>
      <p className="md:col-span-3 text-base text-foreground">{issue}</p>
      <p className="md:col-span-4 text-base text-[color:var(--color-muted-text)]">
        <span className="md:hidden text-foreground/70">Why it matters: </span>
        {why}
      </p>
      <p className="md:col-span-4 text-base text-[color:var(--color-muted-text)]">
        <span className="text-foreground/80">→</span> {change}
      </p>
    </div>
  );
}

/* One headline result; `measured` separates shipped numbers from projections. */
export function StatRow({
  stat,
  label,
  note,
  measured,
}: {
  stat: string;
  label: string;
  note: string;
  measured: boolean;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-6 border-t border-black/[0.08] dark:border-white/[0.1] items-baseline">
      <p className="md:col-span-3 font-heading text-[34px] md:text-[44px] leading-none tracking-[-0.02em] text-foreground">
        {stat}
      </p>
      <p className="md:col-span-4 text-base text-foreground">
        {label}
        <span className="ml-2 text-xs text-[color:var(--color-muted-text)] align-middle">
          {measured ? "measured" : "projected"}
        </span>
      </p>
      <p className="md:col-span-5 text-base text-[color:var(--color-muted-text)]">
        {note}
      </p>
    </div>
  );
}

/* The numeric beat: a row of big-number cards with an integrity note. */
export type StatCard = { label: string; value: string; detail: string };
const STAT_COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};
export function StatCards({
  stats,
  note,
}: {
  stats: StatCard[];
  note?: string;
}) {
  return (
    <div>
      <div
        className={`grid grid-cols-1 ${STAT_COLS[stats.length] ?? "sm:grid-cols-3"} gap-5 md:gap-8`}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[20px] md:rounded-[26px] border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.04] p-6 md:p-8"
          >
            <p className="text-[13px] uppercase tracking-wider text-[color:var(--color-muted-text)] mb-3">
              {stat.label}
            </p>
            <p className="font-heading text-[44px] md:text-[56px] leading-none text-foreground">
              {stat.value}
            </p>
            <p className="mt-3 text-base text-[color:var(--color-muted-text)]">
              {stat.detail}
            </p>
          </div>
        ))}
      </div>
      {note && (
        <p className="mt-4 text-sm text-[color:var(--color-muted-text)]">{note}</p>
      )}
    </div>
  );
}

/* A compact band of facts — scale at a glance, not hero metrics. */
export function FactBand({
  facts,
}: {
  facts: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-[20px] md:rounded-[26px] border border-black/[0.08] dark:border-white/[0.1] bg-black/[0.08] dark:bg-white/[0.12]">
      {facts.map((f) => (
        <div key={f.label} className="bg-background p-5 md:p-7">
          <p className="font-heading text-[26px] md:text-[34px] leading-none text-foreground">
            {f.value}
          </p>
          <p className="mt-2 text-sm text-[color:var(--color-muted-text)]">
            {f.label}
          </p>
        </div>
      ))}
    </div>
  );
}

/* What testing settled: wins read neutral, the open risk is flagged in coral
   so the honest "what didn't fully land" is the thing the eye lands on. */
export type Finding = { kind: "win" | "watch"; text: React.ReactNode };
export function Findings({ items }: { items: Finding[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[3px] shrink-0" aria-hidden>
            {it.kind === "win" ? (
              <svg width="18" height="18" viewBox="0 0 18 18" className="text-foreground/70">
                <path
                  d="M3.5 9.5l3.2 3.2L14.5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" className="text-[var(--accent-coral)]">
                <circle cx="9" cy="9" r="7.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M9 5.2v4.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <circle cx="9" cy="12.4" r="0.95" fill="currentColor" />
              </svg>
            )}
          </span>
          <p className="text-base md:text-lg leading-relaxed text-[color:var(--color-muted-text)] max-w-[64ch]">
            {it.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

/* A sequenced roadmap: Near / Next / Later, the resolution of a sprint. */
export type RoadmapPhase = { phase: string; timeframe: string; items: string[] };
export function Roadmap({ phases }: { phases: RoadmapPhase[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
      {phases.map((p) => (
        <div key={p.phase} className="flex flex-col">
          <div className="border-t-2 border-foreground/70 pt-3">
            <p className="font-heading text-[22px] md:text-[24px] leading-none text-foreground">
              {p.phase}
            </p>
            <p className="mt-1.5 text-sm text-[color:var(--color-muted-text)]">
              {p.timeframe}
            </p>
          </div>
          <ul className="mt-4 flex flex-col">
            {p.items.map((it, i) => (
              <li
                key={i}
                className="border-t border-black/[0.08] dark:border-white/[0.1] py-3 text-base text-[color:var(--color-muted-text)]"
              >
                {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* A bet opener: illustration paired with kicker, title, and prose. */
export function BetOpener({
  illustration,
  kicker,
  title,
  flip,
  bare,
  children,
}: {
  illustration: string;
  kicker: string;
  title: string;
  flip?: boolean;
  /* bare: a transparent illustration (e.g. a persona blob) floats free,
     no bordered frame — that frame is for full-bleed scenes only. */
  bare?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center py-4 md:py-8">
      <div
        className={
          (flip ? "lg:order-2 " : "") +
          (bare
            ? "flex justify-center"
            : "rounded-[24px] overflow-hidden border border-black/[0.06] dark:border-white/[0.08]")
        }
      >
        <Image
          src={illustration}
          alt=""
          width={bare ? 900 : 1200}
          height={900}
          className={
            bare ? "w-full h-auto max-w-[300px] md:max-w-[360px]" : "w-full h-auto"
          }
          sizes={bare ? "(max-width: 768px) 300px, 360px" : "(max-width: 1024px) 100vw, 640px"}
        />
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-sm text-[color:var(--color-muted-text)] mb-2">{kicker}</p>
          <h2 className="font-heading text-[30px] md:text-[34px] font-normal leading-[1.1] text-foreground">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </div>
  );
}

/* A verbatim participant quote. */
export function QuoteCard({
  quote,
  label,
  avatar,
  large,
}: {
  quote: string;
  label: string;
  avatar: string;
  large?: boolean;
}) {
  return (
    <figure
      className={`flex h-full flex-col justify-between gap-8 rounded-[20px] md:rounded-[26px] border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.04] p-6 md:p-8 ${
        large ? "lg:p-10" : ""
      }`}
    >
      <blockquote
        className={`italic leading-snug text-foreground/90 ${
          large ? "text-xl md:text-[26px]" : "text-lg md:text-xl"
        }`}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <Image src={avatar} alt="" width={44} height={44} className="rounded-full" />
        <span className="text-[13px] uppercase tracking-wider text-[color:var(--color-muted-text)]">
          {label}
        </span>
      </figcaption>
    </figure>
  );
}

/* ── The shell ─────────────────────────────────────────────── */

export type CompanionLink = { label: string; href: string };

export function CaseStudyLayout({
  kicker,
  title,
  lede,
  role,
  team,
  teamNote,
  discipline,
  companion,
  next,
  children,
}: {
  kicker: string;
  title: string;
  lede: React.ReactNode;
  role: string;
  team?: string[];
  teamNote?: string;
  discipline: string[];
  companion?: CompanionLink;
  next?: CompanionLink;
  children: React.ReactNode;
}) {
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

      {/* Close — always back to all work */}
      <nav className="fixed top-0 right-0 z-50 p-5 md:p-10">
        <Link
          href="/work"
          className="bg-[rgba(240,240,240,0.6)] hover:bg-[rgba(220,220,220,0.6)] dark:bg-[rgba(64,64,64,0.6)] dark:hover:bg-[rgba(80,80,80,0.6)] backdrop-blur-[40px] transition-colors rounded-full w-11 h-11 flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Back to all work"
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
        <div className="pb-12 md:pb-16">
          <p className="text-base md:text-lg text-[color:var(--color-muted-text)] mb-4">
            {kicker}
          </p>
          <h1 className="font-heading font-normal tracking-[-0.04em] leading-[0.98] text-foreground text-[clamp(48px,11vw,150px)] text-balance">
            {title}
          </h1>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {/* Meta block */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
            <div className="flex-1">
              <p className="text-lg md:text-2xl leading-snug text-foreground max-w-[60ch]">
                {lede}
              </p>
            </div>
            <div className="md:w-[260px] shrink-0 space-y-6">
              <div>
                <p className="text-[13px] uppercase tracking-wider text-black/40 dark:text-white/40 mb-2">
                  Role
                </p>
                <p className="text-base">{role}</p>
              </div>
              {team && team.length > 0 && (
                <div>
                  <p className="text-[13px] uppercase tracking-wider text-black/40 dark:text-white/40 mb-2">
                    Team
                  </p>
                  <ul className="space-y-1">
                    {team.map((t) => (
                      <li key={t} className="text-base text-black/70 dark:text-white/70">
                        {t}
                      </li>
                    ))}
                    {teamNote && (
                      <li className="text-base text-[color:var(--color-muted-text)]">
                        {teamNote}
                      </li>
                    )}
                  </ul>
                </div>
              )}
              <div>
                <p className="text-[13px] uppercase tracking-wider text-black/40 dark:text-white/40 mb-2">
                  Discipline
                </p>
                <div className="flex flex-wrap gap-2">
                  {discipline.map((d) => (
                    <span
                      key={d}
                      className="text-xs border border-foreground/20 rounded-full px-3 py-1"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              {companion && (
                <div>
                  <p className="text-[13px] uppercase tracking-wider text-black/40 dark:text-white/40 mb-2">
                    Companion piece
                  </p>
                  <Link
                    href={companion.href}
                    className="text-base underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
                  >
                    {companion.label}
                  </Link>
                </div>
              )}
            </div>
          </div>

          {children}
        </div>
      </div>

      {/* Footer — a forward path, never a dead end */}
      <footer className="pt-16 pb-20 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-black/[0.08] dark:border-white/[0.1] pt-10">
          <Link
            href="/work"
            className="text-base text-[color:var(--color-muted-text)] hover:text-foreground transition-colors rounded outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            ← All work
          </Link>
          {next && (
            <Link
              href={next.href}
              className="text-base text-foreground hover:opacity-60 transition-opacity rounded outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              Next: {next.label} →
            </Link>
          )}
        </div>
        <p className="mt-10 text-center text-xs uppercase tracking-widest text-[color:var(--color-muted-text)]">
          &copy; Simon Leyton
        </p>
      </footer>
    </div>
  );
}

export { DeviceVideo } from "./DeviceVideo";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ex Machina — Simon Leyton",
  description:
    "The social campaign for the award-winning thriller Ex Machina — a visual system built on the film's aesthetic and the intrigue around Ava.",
};

const discipline = ["Art Direction", "Visual Design", "Social Campaign"];

function SectionHeading({
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

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base md:text-lg leading-relaxed text-[color:var(--color-muted-text)] max-w-[68ch]">
      {children}
    </p>
  );
}

function FlowStrip({
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
      {caption && (
        <figcaption className="mt-3 text-sm text-[color:var(--color-muted-text)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function ExMachinaPage() {
  return (
    <div
      id="main-content"
      tabIndex={-1}
      className="min-h-screen bg-background text-foreground outline-none"
    >
      <section className="px-5 md:px-10 pt-6 md:pt-10 pb-10">
        <Link href="/" className="inline-block">
          <span className="block font-heading text-[30px] font-normal text-foreground tracking-[-0.03em]">
            Simon Leyton
          </span>
        </Link>
      </section>

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
        <div className="pb-12 md:pb-16">
          <p className="text-base md:text-lg text-[color:var(--color-muted-text)] mb-4">
            Watson DG · Social Campaign
          </p>
          <h1 className="font-heading font-normal tracking-[-0.04em] leading-[0.98] text-foreground text-[clamp(48px,11vw,150px)] text-balance">
            Ex Machina
          </h1>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
            <div className="flex-1">
              <p className="text-lg md:text-2xl leading-snug text-foreground max-w-[60ch]">
                The social campaign for Ex Machina set out to explore the
                film&apos;s stunning aesthetic, its controversial subject
                matter, and the intrigue around Ava — the film&apos;s
                one-of-a-kind AI — turning the feed into a conversation about
                what it means to summon an artificial mind.
              </p>
            </div>
            <div className="md:w-[260px] shrink-0 space-y-6">
              <div>
                <p className="text-[13px] uppercase tracking-wider text-[color:var(--color-muted-text)] mb-2">
                  Role
                </p>
                <p className="text-base">Senior Designer</p>
              </div>
              <div>
                <p className="text-[13px] uppercase tracking-wider text-[color:var(--color-muted-text)] mb-2">
                  Team
                </p>
                <p className="text-base text-black/70 dark:text-white/70">
                  Watson DG
                </p>
              </div>
              <div>
                <p className="text-[13px] uppercase tracking-wider text-[color:var(--color-muted-text)] mb-2">
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
            </div>
          </div>

          <figure className="rounded-[20px] md:rounded-[26px] overflow-hidden">
            <Image
              src="/images/exmachina/cover.jpg"
              alt="Ava's silhouetted profile from Ex Machina against a pale gradient"
              width={2400}
              height={1350}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 1320px"
              priority
            />
          </figure>

          <SectionHeading
            kicker="The system"
            title="The film's voice, tiled for the feed."
          >
            <Prose>
              The campaign is a visual system built from the film&apos;s raw
              materials: character quotes set against Ava&apos;s machinery,
              assembly-code fragments, character &ldquo;spec sheets,&rdquo;
              and real warnings about artificial intelligence from voices like
              Musk, Gates, and Nietzsche&apos;s ghost — the line between
              promotion and provocation kept deliberately thin.
            </Prose>
          </SectionHeading>
          <FlowStrip
            src="/images/exmachina/grid-1.jpg"
            alt="Eight social campaign tiles mixing film stills, character quotes, code fragments, and AI warnings"
            caption="The campaign system: quotes, character reads, and code."
            width={1766}
            height={929}
          />
          <FlowStrip
            src="/images/exmachina/grid-2.jpg"
            alt="Eight more campaign tiles featuring Ava, Caleb, and Nathan with quotes from Bill Gates and Nietzsche"
            caption="Every tile pulls from the same system — the film sells itself by arguing with you."
            width={1766}
            height={929}
          />
        </div>
      </div>

      <footer className="pt-16 pb-20 text-center">
        <Link
          href="/work"
          className="text-base text-[color:var(--color-muted-text)] hover:text-foreground transition-colors rounded outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          ← Back to all work
        </Link>
        <p className="mt-6 text-xs uppercase tracking-widest text-[color:var(--color-muted-text)]">
          &copy; Simon Leyton
        </p>
      </footer>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "True[X] — Simon Leyton",
  description:
    "Interactive ad campaigns for clients worldwide — CTV-first interactive experiences for brands like Fiat, Shutterfly, Whole Foods, and Calvin Klein.",
};

const discipline = ["Creative Direction", "Interactive Design", "Art Direction"];

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
        <p className="text-sm text-[#757575] mb-2">{kicker}</p>
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
    <p className="text-base md:text-lg leading-relaxed text-black/65 dark:text-white/65 max-w-[68ch]">
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
        <figcaption className="mt-3 text-sm text-black/45 dark:text-white/45">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Row({
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
      <p className="md:col-span-1 text-sm text-[#e85a5a]">{index}</p>
      <p className="md:col-span-3 text-base text-foreground">{title}</p>
      <p className="md:col-span-8 text-base text-black/55 dark:text-white/55">
        {detail}
      </p>
    </div>
  );
}

export default function TrueXPage() {
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
          className="bg-[rgba(240,240,240,0.6)] hover:bg-[rgba(220,220,220,0.6)] dark:bg-[rgba(64,64,64,0.6)] dark:hover:bg-[rgba(80,80,80,0.6)] backdrop-blur-[40px] transition-colors rounded-full w-10 h-10 flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
          <p className="text-base md:text-lg text-black/50 dark:text-white/50 mb-4">
            True[X] · Interactive Digital Creative
          </p>
          <h1 className="font-heading font-normal tracking-[-0.04em] leading-[0.98] text-foreground text-[clamp(48px,11vw,150px)] text-balance">
            True[X]
          </h1>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
            <div className="flex-1">
              <p className="text-lg md:text-2xl leading-snug text-foreground max-w-[60ch]">
                At True[X], the interactive advertising technology platform, I
                helped develop interactive ad campaigns for clients worldwide
                — working alongside the storytellers behind shows like The
                Simpsons and The Americans, moments like the World Series, and
                the cultural reach of National Geographic.
              </p>
            </div>
            <div className="md:w-[260px] shrink-0 space-y-6">
              <div>
                <p className="text-[13px] uppercase tracking-wider text-black/40 dark:text-white/40 mb-2">
                  Role
                </p>
                <p className="text-base">Senior Designer</p>
              </div>
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
            </div>
          </div>

          <figure className="rounded-[20px] md:rounded-[26px] overflow-hidden">
            <Image
              src="/images/truex/cover.jpg"
              alt="A Fiat 500X interactive ad running inside the Hulu web player on a laptop"
              width={2400}
              height={1350}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 1320px"
              priority
            />
          </figure>

          <SectionHeading
            kicker="The work"
            title="Ads people chose to engage with."
          >
            <Prose>
              True[X] engagement ads trade interruption for interaction: the
              viewer opts in, plays with the brand for thirty seconds, and
              earns an uninterrupted show. Designing them meant building small
              interactive products — for Bai, Shutterfly, Fiat, Whole Foods,
              Calvin Klein, and Lincoln, running inside players like Hulu.
            </Prose>
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-start">
            <FlowStrip
              src="/images/truex/gallery-1.jpg"
              alt="Three campaign tiles: Bai Drinks Both Sides, Shutterfly Mother's Gift Creator, and Fiat USA More Power"
              caption="Bai · Shutterfly · Fiat."
              width={1690}
              height={713}
            />
            <FlowStrip
              src="/images/truex/gallery-2.jpg"
              alt="Three campaign tiles: Whole Foods Department Explorer, Calvin Klein #InMyCalvins, and Lincoln Make an Entrance"
              caption="Whole Foods · Calvin Klein · Lincoln."
              width={1651}
              height={713}
            />
          </div>

          <SectionHeading
            kicker="While I was there"
            title="First-mover work on connected TV."
          >
            <Prose>
              The portfolio-level wins were as much about the system as the
              campaigns: industry-first interactive experiences for connected
              TV, and the templates and standards that let the whole creative
              operation move faster.
            </Prose>
          </SectionHeading>
          <div className="flex flex-col">
            <Row
              index="01"
              title="CTV first"
              detail="Developed industry-first, award-winning CTV interactive experiences, giving True[X] significant first-mover advantage in reach and network scale."
            />
            <Row
              index="02"
              title="National brands"
              detail="Created award-winning interactive advertisements for leading national brands — compelling, immersive online experiences."
            />
            <Row
              index="03"
              title="50% faster to market"
              detail="Developed creative design templates, improving time-to-market for client creative by 50% while reducing cost of delivery."
            />
            <Row
              index="04"
              title="Standards"
              detail="Created guidelines and standards for interactive ads, improving user experience — and provided creative direction to in-house and freelance designers."
            />
          </div>
        </div>
      </div>

      <footer className="pt-16 pb-20 text-center">
        <Link
          href="/work"
          className="text-base text-foreground/60 hover:text-foreground transition-colors rounded outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          ← Back to all work
        </Link>
        <p className="mt-6 text-xs uppercase tracking-widest text-black/50 dark:text-white/50">
          &copy; Simon Leyton
        </p>
      </footer>
    </div>
  );
}

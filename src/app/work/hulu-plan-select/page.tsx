import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hulu Plan Select — Simon Leyton",
  description:
    "Redesigning the screen where people decide to subscribe: an experiment on Hulu's plan picker that cut cart abandonment and lifted the Disney+ bundle.",
};

const team = [
  "Product Lead",
  "Program Manager",
  "UX Research",
  "Engineering",
];

const discipline = [
  "Product Design",
  "Interaction Design",
  "Experimentation",
];

/* ── Building blocks ──────────────────────────────────────── */

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

/* A phone screenshot framed on a soft tint, shown in full (contained). */
function Shot({
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
      {caption && (
        <figcaption className="mt-3 text-sm text-[color:var(--color-muted-text)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* A wide reference image (panels, diagrams, photos) at its natural ratio. */
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

/* One headline result. `measured` distinguishes shipped numbers from projections. */
function StatRow({
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

export default function HuluPlanSelectPage() {
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

      {/* Close button — fixed top-right, matches the home nav pills */}
      <nav className="fixed top-0 right-0 z-50 p-5 md:p-10">
        <Link
          href="/#hero"
          className="bg-[rgba(240,240,240,0.6)] hover:bg-[rgba(220,220,220,0.6)] dark:bg-[rgba(64,64,64,0.6)] dark:hover:bg-[rgba(80,80,80,0.6)] backdrop-blur-[40px] transition-colors rounded-full w-11 h-11 flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Back to work"
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
            Hulu · Viewer Growth
          </p>
          <h1 className="font-heading font-normal tracking-[-0.04em] leading-[0.98] text-foreground text-[clamp(48px,11vw,150px)] text-balance">
            Plan Select
          </h1>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {/* Meta block */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
            <div className="flex-1">
              <p className="text-lg md:text-2xl leading-snug text-foreground max-w-[60ch]">
                Plan Select is the screen where someone stops browsing Hulu and
                decides whether to pay for it. About half of the people who
                reached it on mobile web without a subscription were walking
                away right there. I led design on the experiment that rebuilt
                how plans are compared, and its projected impact made it the
                largest win Hulu had to date.
              </p>
            </div>
            <div className="md:w-[260px] shrink-0 space-y-6">
              <div>
                <p className="text-[13px] uppercase tracking-wider text-[color:var(--color-muted-text)] mb-2">
                  Role
                </p>
                <p className="text-base">Lead Product Designer</p>
              </div>
              <div>
                <p className="text-[13px] uppercase tracking-wider text-[color:var(--color-muted-text)] mb-2">
                  Team
                </p>
                <ul className="space-y-1">
                  {team.map((t) => (
                    <li key={t} className="text-base text-black/70 dark:text-white/70">
                      {t}
                    </li>
                  ))}
                </ul>
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

          {/* Cover image */}
          <figure className="rounded-[20px] md:rounded-[26px] overflow-hidden">
            <Image
              src="/images/hulu-plan-select/cover.jpg"
              alt="A hand holding an iPhone on a plane, browsing Hulu's Choose Your Plan page"
              width={2560}
              height={1440}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 1320px"
              priority
            />
          </figure>

          {/* The stakes */}
          <SectionHeading
            kicker="The stakes"
            title="Half of mobile visitors walked away at the moment of decision."
          >
            <Prose>
              Plan Select sits second in Hulu&apos;s signup funnel, after the
              welcome page and ahead of account creation and billing, which
              makes it the gate to all downstream revenue. And roughly 50% of
              visitors without a subscription on mobile web were abandoning
              their cart at exactly that step.
            </Prose>
            <Prose>
              The business carried a second mandate alongside the leak: get
              the Disney+ bundle integrated as a true plan option rather than
              an afterthought, and build a plan selection system that could
              scale as the catalog of plans grew.
            </Prose>
          </SectionHeading>
          <FlowStrip
            src="/images/hulu-plan-select/funnel.jpg"
            alt="Four phone screenshots in a row showing each step of the Hulu signup flow on mobile web"
            caption="Where Plan Select sits: welcome → plans → account → billing. One screen between a visitor and a subscription."
            width={1593}
            height={767}
          />

          {/* The diagnosis */}
          <SectionHeading
            kicker="The diagnosis"
            title="One plan at a time, and the bundle buried below the fold."
          >
            <Prose>
              The old page was a carousel that exposed a single plan card in
              the mobile viewport. Comparing options, the entire job of the
              screen, meant swiping blind: one card at a time, holding prices
              in your head.
            </Prose>
            <Prose>
              The Disney+ bundle had it worse: it lived outside the mobile
              viewport entirely, below the plan carousel, where almost nobody
              scrolled. The thing the business most wanted people to see was
              the thing the layout was best at hiding.
            </Prose>
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-start">
            <Shot
              src="/images/hulu-plan-select/before-phone.png"
              alt="The old Choose Your Plan page: a carousel showing one plan card at a time"
              caption="The experience at the time: one plan per viewport"
            />
            <FlowStrip
              src="/images/hulu-plan-select/viewport.jpg"
              alt="An annotated diagram of the old page marking what falls inside versus outside the mobile viewport, with the Disney+ bundle outside"
              caption="The viewport audit: blue marks what sat outside the mobile viewport, including the bundle."
              width={1171}
              height={1048}
            />
          </div>

          {/* The hypothesis */}
          <SectionHeading
            kicker="The hypothesis"
            title="Show every plan in one view, and people can actually choose."
          >
            <Prose>
              The bet: by presenting all plans in one view, with the Disney+
              bundle included as a plan in its own right, we would decrease
              abandonment, drive signup rate, lift bundle take rate, and end
              up with a scalable pattern for whatever plans came next. Simple
              to say, but it splinters immediately into competing layouts:
              there are many ways to put four plans on one phone screen, and
              no agreement on which one converts.
            </Prose>
          </SectionHeading>

          {/* Ideation */}
          <SectionHeading
            kicker="The exploration"
            title="It started in a notebook, not Figma."
          >
            <Prose>
              The exploration started in a notebook, dated and ticketed
              (CAT-26, January 2021): a comparison chart, a horizontal slider,
              a drawer system, a tab bar, each a different theory of how people
              compare plans on a small screen. The strongest patterns became
              wireframes, and the wireframes became two challengers worth
              building against the live control.
            </Prose>
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-start">
            <FlowStrip
              src="/images/hulu-plan-select/sketches.jpg"
              alt="Notebook pages dated January 2021 with four sketched concepts: a comparison chart, a horizontal slider, a drawer system, and a tab bar"
              caption="The paper round, ticketed CAT-26 and dated January 2021."
              width={1248}
              height={875}
            />
            <FlowStrip
              src="/images/hulu-plan-select/wireframes.jpg"
              alt="Three wireframes side by side: the control carousel, vertically stacked cards, and a horizontal slider"
              caption="The wireframe round: the control, stacked cards, and the horizontal slider."
              width={1612}
              height={832}
            />
          </div>

          {/* The experiment */}
          <SectionHeading
            kicker="The experiment"
            title="Two challengers against the live control."
          >
            <Prose>
              Treatment A was the control, the carousel already in production
              that showed one plan at a time. Treatment B stacked every plan vertically
              in expandable cards, optimizing for a single scroll. Treatment C
              kept plans side by side in a horizontal slider with a stable
              detail area and a persistent select button, optimizing for
              comparison. The experiment ran from July 2 to July 12, 2021.
            </Prose>
          </SectionHeading>
          <FlowStrip
            src="/images/hulu-plan-select/treatments-hifi.jpg"
            alt="High fidelity mockups of the three treatments: control carousel, vertically stacked cards, horizontal slider"
            caption="The three treatments at high fidelity."
            width={1612}
            height={832}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:px-24">
            <Shot
              src="/images/hulu-plan-select/treatment-b.png"
              alt="Treatment B prototype: vertically stacked expandable plan cards"
              caption="Treatment B: vertically stacked cards"
            />
            <Shot
              src="/images/hulu-plan-select/treatment-c.png"
              alt="Treatment C prototype: a horizontal slider of plan cards with a persistent select button"
              caption="Treatment C: horizontal slider"
            />
          </div>

          {/* The winner */}
          <SectionHeading
            kicker="The winner"
            title="Treatment C won on ease of use and scannability."
          >
            <Prose>
              The horizontal slider&apos;s familiar swipe made moving between
              plans effortless, and keeping cards side by side meant people
              could weigh the value of each plan against the next without
              holding anything in their head, which is what let them decide
              with confidence. Not the layout that showed the most at once;
              the one that made comparing feel easy.
            </Prose>
          </SectionHeading>
          <FlowStrip
            src="/images/hulu-plan-select/winner.jpg"
            alt="A hand holding a phone running the winning horizontal slider design on Hulu's Choose Your Plan page"
            caption="The winning treatment in hand: plans side by side, a stable detail area, persistent select."
            width={1305}
            height={665}
          />

          {/* The impact */}
          <SectionHeading
            kicker="The impact"
            title="Every metric the hypothesis named moved."
          >
            <Prose>
              The experiment read out cleanly. Abandonment fell, the bundle
              finally got seen and taken, and the slider was built as the
              scalable pattern the brief had asked for. The projection
              attached to the win, incremental subscribers and revenue, is
              what made it the largest win Hulu had to date.
            </Prose>
          </SectionHeading>
          <div className="flex flex-col">
            <StatRow
              stat="−6.5%"
              label="Cart abandonment rate"
              note="The winning treatment reduced the cart abandonment rate by 6.5%."
              measured
            />
            <StatRow
              stat="+12%"
              label="Disney+ bundle take rate"
              note="Putting the bundle inside the comparison, instead of below it, got it chosen."
              measured
            />
            <StatRow
              stat="+589K"
              label="Incremental subscribers"
              note="Projected from the winning treatment's performance."
              measured={false}
            />
            <StatRow
              stat="$40M"
              label="Incremental revenue"
              note="Projected alongside the subscriber lift, the figure behind the largest win claim."
              measured={false}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-16 pb-20 text-center">
        <Link
          href="/#hero"
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

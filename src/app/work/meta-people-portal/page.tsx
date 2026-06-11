import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meta People Portal — Simon Leyton",
  description:
    "Redesigning the mega navigation of the hub every Meta employee uses to find work information — IA rebuilt around employee mental models.",
};

const team = [
  "Product Lead",
  "Program Manager",
  "UX Research",
  "Content Design",
  "Engineering",
];

const discipline = [
  "Product Design",
  "Information Architecture",
  "Content Strategy",
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

/* A wide reference image (mockups, diagrams) at its natural ratio. */
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

/* One enumerable row: research findings, goals, success criteria. */
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
      <p className="md:col-span-1 text-sm text-foreground">{index}</p>
      <p className="md:col-span-3 text-base text-foreground">{title}</p>
      <p className="md:col-span-8 text-base text-[color:var(--color-muted-text)]">
        {detail}
      </p>
    </div>
  );
}

export default function MetaPeoplePortalPage() {
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

      {/* Close button — fixed top-right */}
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
            Meta · Employee Products
          </p>
          <h1 className="font-heading font-normal tracking-[-0.04em] leading-[0.98] text-foreground text-[clamp(48px,11vw,150px)] text-balance">
            People Portal
          </h1>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {/* Meta block */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
            <div className="flex-1">
              <p className="text-lg md:text-2xl leading-snug text-foreground max-w-[60ch]">
                People Portal is the hub where every Meta employee finds the
                information that shapes their working life — benefits, time
                off, compensation, career. Its content had outgrown its
                navigation. I led the redesign of the mega nav, rebuilding the
                information architecture around how employees actually think.
              </p>
            </div>
            <div className="md:w-[260px] shrink-0 space-y-6">
              <div>
                <p className="text-[13px] uppercase tracking-wider text-[color:var(--color-muted-text)] mb-2">
                  Role
                </p>
                <p className="text-base">Design lead · Lead Product Designer</p>
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
              src="/images/meta-people-portal/cover.jpg"
              alt="A night scene of a person on a backyard deck gazing up at planets filling the sky"
              width={1863}
              height={551}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 1320px"
              priority
            />
          </figure>

          {/* The context */}
          <SectionHeading
            kicker="The context"
            title="Every employee visits with a question."
          >
            <Prose>
              People Portal is where Meta employees look up the policies,
              benefits, and contacts that shape their working lives — a
              content library that kept evolving underneath a navigation that
              didn&apos;t. This is the experience the redesign started from.
            </Prose>
          </SectionHeading>
          <FlowStrip
            src="/images/meta-people-portal/before.jpg"
            alt="The pre-redesign People Portal homepage in a browser on a laptop: a search bar, four illustrated category cards with item counts, and a news feed"
            caption="The experience at the time: four category cards fronting hundreds of items, behind a seven-item mega nav."
            width={902}
            height={627}
          />

          {/* Who we built for */}
          <SectionHeading
            kicker="Who it&apos;s for"
            title="Every employee is a user. A few teams live here."
          >
            <Prose>
              The audience was literally everyone at Meta — engineers,
              marketers, finance, HR — each arriving with a question about
              their own working life. But the portal also has operators: the
              People Portal and Content Services teams who maintain the
              content the navigation has to carry. Designing for both
              audiences, consumers and maintainers, shaped every IA decision.
            </Prose>
          </SectionHeading>
          <FlowStrip
            src="/images/meta-people-portal/personas.jpg"
            alt="A grid of twelve user personas across Meta roles, with the People Portal and Content Services team members highlighted"
            caption="Everyone uses the portal; the highlighted few also run it."
            width={1517}
            height={724}
          />


          {/* The problem */}
          <SectionHeading
            kicker="The problem"
            title="The hub had outgrown its own navigation."
          >
            <Prose>
              People Portal&apos;s content library kept evolving, but its mega
              navigation could only surface a fraction of it. Key information
              stayed buried behind ambiguous labels and a deep category tree —
              so employees got confused, gave up, and opened tickets with the
              People Team asking for answers that already existed on the
              portal.
            </Prose>
          </SectionHeading>

          {/* Goals */}
          <SectionHeading
            kicker="Project goals"
            title="Make it findable now. Make it survive growth."
          >
            <Prose>
              The brief had two halves, and they pulled in different
              directions: fix findability for the employee opening the portal
              today, and build a navigation system flexible enough to keep
              working as the content underneath it keeps changing.
            </Prose>
          </SectionHeading>
          <div className="flex flex-col">
            <Row
              index="01"
              title="Findability"
              detail="Establish a consistent, mobile-friendly IA structure for People Portal so employees can easily find the information they need."
            />
            <Row
              index="02"
              title="Flexible & scalable"
              detail="Create a flexible, extensible mega navigation that translates seamlessly across devices — especially mobile — and scales as content evolves."
            />
          </div>

          {/* Research */}
          <SectionHeading
            kicker="The research"
            title="Employees self-serve until they can't — then they file a ticket."
          >
            <Prose>
              Research and data science gave us a clear read on the mental
              model. Employees treat People Portal as a benefits library, not
              a destination — as one participant put it, &ldquo;I don&apos;t
              go to the People Portal for fun... I&apos;m looking for info on
              say... the PTO policy.&rdquo; Every visit has a purpose, and
              every failed visit becomes a case for the People Team.
            </Prose>
          </SectionHeading>
          <div className="flex flex-col">
            <Row
              index="01"
              title="A benefits library"
              detail="Employees think of People Portal as a library of content and a benefits information hub — purpose-driven visits, never browsing."
            />
            <Row
              index="02"
              title="Self-serve until I can't"
              detail="Employees try to self-serve; when they can't find what they need or require clarification or exceptions, they open a case."
            />
            <Row
              index="03"
              title="Difficulty navigating"
              detail="Options within the mega nav are hard to differentiate — ambiguous labels in language that doesn't match how employees think about HR topics."
            />
            <Row
              index="04"
              title="Distrusted search"
              detail="Employees want to search but carry weak past experiences with the search function — both finding it and using it."
            />
            <Row
              index="05"
              title="Information overload"
              detail="The sheer amount of text overwhelms, with no visual cues to help processing."
            />
          </div>

          {/* Goal 1 — Findability */}
          <SectionHeading
            kicker="Goal 1 · Findability"
            title="Rebuild the IA around how employees think, not how HR is organized."
          >
            <Prose>
              The content strategy came first: workshops with content design
              and UX research to define and prioritize the strategy for each
              top-level page, a full color-coded inventory of the
              portal&apos;s content, a site map built from the workshop
              output, and low-fidelity options taken to executives for
              approval.
            </Prose>
            <Prose>
              The design answer is a sequential menu — one menu, multiple
              sub-levels. A minimal global nav with six items ordered by
              actual usage leads with content instead of categories;
              breadcrumbs and a persistent local menu keep you oriented as you
              go deeper, so heavy content areas stay focused instead of
              overwhelming.
            </Prose>
          </SectionHeading>
          <div className="flex flex-col">
            <Row
              index="01"
              title="The problem"
              detail="It's difficult for Meta employees to pinpoint answers to their questions: ambiguous labels, unclear information hierarchy, and language that doesn't reflect how employees think about HR topics."
            />
            <Row
              index="02"
              title="The solution"
              detail="New labels, groupings, and conventions that clearly illustrate hierarchy — aligning the experience to the employee mental model."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-start">
            <FlowStrip
              src="/images/meta-people-portal/sitemap.jpg"
              alt="A color-coded site map inventorying all People Portal content by hierarchy level"
              caption="The content inventory: every page, color-coded by level."
              width={902}
              height={508}
            />
            <FlowStrip
              src="/images/meta-people-portal/sequential.jpg"
              alt="The redesigned People Portal homepage with the sequential menu navigation"
              caption="The sequential menu on the redesigned homepage."
              width={902}
              height={669}
            />
          </div>
          <FlowStrip
            src="/images/meta-people-portal/meganav-compare.jpg"
            alt="The People Portal mega navigation today next to the illustrative future design"
            caption="Mega navigation, today versus the illustrative future: from a seven-item horizontal sprawl to a focused sequential menu."
            width={1804}
            height={897}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-start">
            <FlowStrip
              src="/images/meta-people-portal/anatomy-global.jpg"
              alt="Annotated anatomy of the global navigation: six items ordered by usage, plus a personal space"
              caption="Global nav anatomy: six items, ordered by highest use."
              width={1132}
              height={551}
            />
            <FlowStrip
              src="/images/meta-people-portal/anatomy-local.jpg"
              alt="Annotated anatomy of local navigation on a content page: breadcrumbs and a persistent local menu"
              caption="Local nav anatomy: breadcrumbs back up, a persistent menu down."
              width={883}
              height={756}
            />
          </div>

          {/* Goal 2 — Flexible & scalable */}
          <SectionHeading
            kicker="Goal 2 · Flexible & scalable"
            title="A vertical navigation that survives the shrink to mobile."
          >
            <Prose>
              Employees increasingly reach for People Portal on their phones —
              and a horizontal mega nav is exactly the pattern that dies
              there. Because the sequential menu is vertical by nature, it
              translates to mobile with minimal adaptation: the top app bar
              resizes, top-level items consolidate into the flyout, and the
              same visual decisions carry straight across.
            </Prose>
          </SectionHeading>
          <div className="flex flex-col">
            <Row
              index="01"
              title="The problem"
              detail="Employees want to use People Portal effectively on their mobile devices and easily locate deeper sub-levels of information."
            />
            <Row
              index="02"
              title="The solution"
              detail="Improve the mobile experience by applying usability principles and design best practices, making People Portal easier to navigate on a phone."
            />
          </div>
          <FlowStrip
            src="/images/meta-people-portal/mobile-compare.jpg"
            alt="The People Portal mobile experience today next to the redesigned future mobile experience"
            caption="Mobile, today versus future: horizontal navigation versus the same sequential menu, shrunk naturally."
            width={1747}
            height={928}
          />

          {/* Success criteria */}
          <SectionHeading
            kicker="What success looks like"
            title="The criteria the team committed to."
          >
            <Prose>
              This work set the direction. The numbers below are the success
              criteria the team aligned on — not measured results, and this
              page claims none.
            </Prose>
          </SectionHeading>
          <div className="flex flex-col">
            <Row
              index="01"
              title="Time to find"
              detail="Reduce the time it takes employees to find relevant information on People Portal."
            />
            <Row
              index="02"
              title="Fewer cases"
              detail="Decrease cases submitted to the People Team requesting information that already exists on the portal, by increasing findability."
            />
            <Row
              index="03"
              title="Maintainable content"
              detail="Drive efficiencies for the Content Services team with an easily maintainable solution."
            />
            <Row
              index="04"
              title="System readiness"
              detail="Implement the XDS design system in preparation for the migration to React."
            />
          </div>

          {/* Next steps */}
          <SectionHeading
            kicker="Next steps"
            title="Where the work went from here."
          >
            <Prose>
              The direction handed off into a working loop across the three
              disciplines that built it.
            </Prose>
          </SectionHeading>
          <div className="flex flex-col">
            <Row
              index="01"
              title="Design"
              detail="Iterate with research — user testing input — and pursue high-fidelity designs."
            />
            <Row
              index="02"
              title="Engineering"
              detail="Implement the updated Meta design system (XDS) in preparation for the migration to React."
            />
            <Row
              index="03"
              title="Research"
              detail="Organize sessions to gather IA feedback and reactions to the concepts."
            />
          </div>
        </div>
      </div>

      {/* Footer */}
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

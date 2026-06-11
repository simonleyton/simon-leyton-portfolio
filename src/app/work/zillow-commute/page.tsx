import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zillow Commute — Simon Leyton",
  description:
    "Turning Zillow's buried commute filter into a lifestyle insight: a daily-spots profile that shows commute fit on the map, across Search and Detail.",
};

const team = [
  "Product",
  "UX Research",
  "Content Design",
  "Engineering",
];

const discipline = [
  "Product Design",
  "Interaction Design",
  "Systems Design",
  "Design Strategy",
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

/* A wide reference image (flow boards), kept visually quiet. */
function FlowStrip({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="flex flex-col">
      <div className="rounded-[20px] md:rounded-[26px] overflow-hidden bg-black/[0.04] dark:bg-white/[0.04] p-3 md:p-5 border border-black/[0.06] dark:border-white/[0.08]">
        <Image
          src={src}
          alt={alt}
          width={3200}
          height={800}
          className="w-full h-auto rounded-[8px] ring-1 ring-black/[0.06] dark:ring-white/[0.08]"
          sizes="(max-width: 768px) 100vw, 1320px"
        />
      </div>
      <figcaption className="mt-3 text-sm text-[color:var(--color-muted-text)]">
        {caption}
      </figcaption>
    </figure>
  );
}

/* One row of the before-state audit: issue, why it matters, what changed. */
function AuditRow({
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
        {why}
      </p>
      <p className="md:col-span-4 text-base text-[color:var(--color-muted-text)]">
        <span className="text-foreground/80">→</span> {change}
      </p>
    </div>
  );
}

export default function ZillowCommutePage() {
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
            Zillow · Search
          </p>
          <h1 className="font-heading font-normal tracking-[-0.04em] leading-[0.98] text-foreground text-[clamp(48px,11vw,150px)] text-balance">
            Commute
          </h1>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {/* Meta block */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
            <div className="flex-1">
              <p className="text-lg md:text-2xl leading-snug text-foreground max-w-[60ch]">
                The Lifestyle Insights sprint ended with a clear winner:
                commute. Commute V1 turned that direction into a product,
                replacing a buried, rigid filter with a daily-spots profile
                that shows commute fit as an insight on the map, across Search
                and Detail Pages, on web, iOS, and Android.
              </p>
            </div>
            <div className="md:w-[260px] shrink-0 space-y-6">
              <div>
                <p className="text-[13px] uppercase tracking-wider text-[color:var(--color-muted-text)] mb-2">
                  Role
                </p>
                <p className="text-base">Design lead · Sr. Product Designer</p>
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

          {/* Hero row — the three surfaces of the story */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            <Shot
              src="/images/zillow-commute/editor-filled.png"
              alt="The Commute times editor with a Work spot set to a 30 minute drive at rush hour"
              caption="Set your daily spots once"
            />
            <Shot
              src="/images/zillow-commute/fit-map-v2.png"
              alt="The Seattle search map with two overlapping commute-fit areas, listing counts, and photo previews for two saved daily spots"
              caption="Commute fit as a map insight"
            />
            <Shot
              src="/images/zillow-commute/listing-card.png"
              alt="A search result card showing an 18 minute drive to work and a Good fit for you read"
              caption="Carried to every listing"
            />
          </div>

          {/* Where it started */}
          <SectionHeading
            kicker="Where it started"
            title="The sprint picked the bet. The product had to earn the trust."
          >
            <Prose>
              In the{" "}
              <Link
                href="/work/zillow-lifestyle-insights"
                className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
              >
                Lifestyle Insights sprint
              </Link>
              , commute had the clearest signal of the three bets: 20 of 30
              people raised the tension between commute time and housing cost
              on their own, and the commute comparison was the top-rated
              concept in testing.
            </Prose>
            <Prose>
              The same research carried a warning. People rated the commute
              view helpful, 4.60 out of 5, but were far less willing to trust
              it without checking another site, 3.73, and 87% kept Google Maps
              open alongside Zillow. So the delivery brief was never just
              &ldquo;ship a better filter.&rdquo; It was: make commute fit
              believable enough that the second tab becomes unnecessary.
            </Prose>
          </SectionHeading>

          {/* Who it's for */}
          <SectionHeading
            kicker="Who it&apos;s for"
            title="Renters whose routine has more than one stop."
          >
            <Prose>
              Renters — and the daily lives attached to them: work, a school,
              a gym, a partner&apos;s office. Roughly 56 to 59 percent of
              recent renters rate commute as very or extremely important, and
              the existing travel-time module drew about 20K web and 3K app
              users a day despite being buried — high intent, under-served.
            </Prose>
          </SectionHeading>

          {/* The problem */}
          <SectionHeading
            kicker="The problem"
            title="Real routines are multi-stop. Zillow treated commute as one number."
          >
            <Prose>
              Renters could not tell whether a home worked for their actual
              daily routine. Commute fit is multi-stop, variable, and full of
              tradeoffs, but Zillow capped commute at one or two destinations
              and treated it as a rigid cutoff. That forced tool switching,
              repeated setup, and a quiet anxiety about missing good options.
            </Prose>
            <Prose>
              Worse, commute settings did not carry between Search and
              Detail, so people redid their work and doubted the results.
            </Prose>
          </SectionHeading>

          {/* The audit */}
          <SectionHeading
            kicker="The audit"
            title="Why nobody trusted the old commute filter."
          >
            <Prose>
              Before designing anything new, I audited the existing pilot end
              to end and wrote up ten distinct issues. The pattern across all
              of them: the old experience asked people to commit to a precise
              number before showing them anything, then hid everything that
              missed it. A filter built for machines, not for how people
              actually weigh a move.
            </Prose>
          </SectionHeading>
          <FlowStrip
            src="/images/zillow-commute/before-audit.jpg"
            alt="An annotated audit of the old commute filter flow: entry hidden in the Filters menu, modal address entry, a hard max travel time, and a thin results chip"
            caption="The audit of the old flow. Commute lived in a long Filters list, asked for a hard cutoff, and forgot itself between surfaces."
          />
          <div className="flex flex-col">
            <AuditRow
              index="01"
              issue="Entry buried behind Filters"
              why="Commute is a primary lifestyle decision; low visibility kills discovery and repeat use."
              change="A commute entry point on the map itself, plus a persistent chip once configured."
            />
            <AuditRow
              index="02"
              issue="Single-destination mental model"
              why="Real routines have multiple anchors. Users had to oversimplify before they even started."
              change="Start with one spot, then progressively invite more — up to four daily spots."
            />
            <AuditRow
              index="03"
              issue="One global travel mode"
              why="Households mix modes — one person drives, another takes transit. A single mode breaks credibility."
              change="Travel mode set per destination, reflected clearly in the UI."
            />
            <AuditRow
              index="04"
              issue="Max travel time as a hard cutoff"
              why="People think in tolerances, not cliffs. Hard cutoffs create stress, FOMO, and false precision."
              change="A preferred time with a tolerance band, and graded fit instead of exclusion."
            />
            <AuditRow
              index="05"
              issue="No near-match visibility"
              why="Users couldn't see tradeoffs and suspected good options were being hidden from them."
              change="Near matches stay visible — the slider is a preference, not a gate."
            />
            <AuditRow
              index="06"
              issue="State fragmented across Search and Detail"
              why="Settings that don't carry over make users redo work and doubt the results."
              change="One shared commute profile that syncs everywhere."
            />
          </div>

          {/* The reframe */}
          <SectionHeading kicker="The reframe" title="From filter to insight.">
            <Prose>
              The core move was changing what commute <em>is</em> on Zillow. A filter
              takes a number and removes listings. An insight takes your
              routine and shows you tradeoffs. So instead of a max-time
              cutoff, you build a small profile of your daily spots — up to
              four, each labeled the way people think (Work, School, Gym),
              each with its own travel mode and preferred time. You set it
              once, and it follows you.
            </Prose>
            <Prose>
              On the map, that profile becomes approximate travel areas and
              the places where they overlap — &ldquo;where could we live that
              works for all of us&rdquo; — with near matches visibly held in
              the picture rather than silently dropped. The design principles
              were blunt about it: match real life, tradeoffs over cliff
              edges, one profile everywhere, clarity beats cleverness, and
              earn trust by communicating uncertainty instead of faking
              precision.
            </Prose>
            <Prose>
              The bet, stated plainly: replace the cutoff with a daily-spots
              profile that follows you, and renters will save a spot, use it
              across Search and Detail, and take more high-intent actions —
              without bouncing to a second tab to double-check.
            </Prose>
          </SectionHeading>

          {/* Experience 01 — Set it once */}
          <SectionHeading kicker="The experience · 01" title="Set it once.">
            <Prose>
              The feature introduces itself on the map — &ldquo;See homes near
              your spots&rdquo; — instead of hiding in a filter list. The
              editor asks for places the way you&apos;d describe them to a
              friend, and the time control is explicit about its own nature:
              this is a preference, and near matches will still be visible.
            </Prose>
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            <Shot
              src="/images/zillow-commute/entry.png"
              alt="An education sheet on the search map inviting users to add places they go often"
              caption="The education moment, on the map"
            />
            <Shot
              src="/images/zillow-commute/editor-empty.png"
              alt="The empty Commute times editor with spot labels, address, travel mode, preferred time, and time of day"
              caption="Spots labeled the way people think"
            />
            <Shot
              src="/images/zillow-commute/editor-filled.png"
              alt="The editor filled in: Work, driving, 30 minutes preferred, at rush hour"
              caption="Per-spot mode, time, and rush hour"
            />
          </div>

          {/* Experience 02 — Tradeoffs on the map */}
          <SectionHeading
            kicker="The experience · 02"
            title="Tradeoffs on the map, not cutoffs."
          >
            <Prose>
              With spots saved, the search map shows graded travel areas and
              how many homes fall inside each band, so the tradeoff is
              something you can see, not a zero-results dead end. Every
              estimate is stated as a range under typical conditions —
              &ldquo;20–30 min by driving&rdquo; — because a believable range
              beats a precise number nobody trusts.
            </Prose>
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            <Shot
              src="/images/zillow-commute/spots-saved.png"
              alt="The saved Work spot with a 20 to 30 minute drive estimate and a note that times can vary"
              caption="Honest about what it knows"
            />
            <Shot
              src="/images/zillow-commute/fit-map.png"
              alt="The Seattle map with commute-fit bands and listing counts per area"
              caption="Graded fit, with near matches kept visible"
            />
            <Shot
              src="/images/zillow-commute/fit-callout.png"
              alt="A map callout reading 20 to 30 minutes by driving, based on typical travel conditions"
              caption="Ranges, not false precision"
            />
          </div>

          {/* Experience 03 — One profile everywhere */}
          <SectionHeading
            kicker="The experience · 03"
            title="One profile, everywhere."
          >
            <Prose>
              The daily-spots profile is shared state, not a per-screen
              setting. It shows up in map options ready to edit, and it
              travels down to the property card — &ldquo;~18 min drive to work
              · Good fit for you&rdquo; — so commute fit is part of triage on
              every listing,
              not a separate tool you have to remember to re-run. Setting it
              on Search means Detail already knows, and vice versa.
            </Prose>
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:px-24">
            <Shot
              src="/images/zillow-commute/map-options-saved.png"
              alt="Map options showing the saved Work commute spot alongside climate risks and amenities"
              caption="Saved state, editable from anywhere"
            />
            <Shot
              src="/images/zillow-commute/listing-card-v2.png"
              alt="A listing card showing total monthly price and an 18 minute drive to work, marked as a good fit"
              caption="Commute fit in the triage zone"
            />
          </div>

          <FlowStrip
            src="/images/zillow-commute/flow.jpg"
            alt="The full Commute V1 mobile flow from education moment through map options, the spot editor, commute fit on the map, and the property card"
            caption="The full V1 flow on mobile: education moment → map options → daily spots → commute fit on the map → the property card."
          />

          {/* The differentiator */}
          <SectionHeading
            kicker="The differentiator"
            title="Designed to close the trust gap."
          >
            <Prose>
              The research said helpfulness wasn&apos;t the problem — belief
              was. So trust is treated as a design material throughout: every
              number is a range based on typical conditions, the system says
              so in plain language, and transit estimates are phased in only
              where the underlying data quality is proven, rather than
              shipping precise-looking overlays everywhere and apologizing
              later.
            </Prose>
            <Prose>
              The same logic shaped the partner story: commute is optional,
              clearly branded, and transparency-first, so the feature could
              earn its place with Zillow&apos;s partners the same way it earns
              it with renters. The measure of success for all of it: the
              87% who kept Google Maps open in a second tab, not needing to.
            </Prose>
          </SectionHeading>

          {/* Success criteria */}
          <SectionHeading
            kicker="What success looks like"
            title="The criteria were set before the results."
          >
            <Prose>
              The team committed to outcomes up front. Primary: more sessions
              where renters save at least one commute destination and actually
              use it across Search and Detail, and higher rates of high-intent
              actions — save, share, contact, tour, apply — in sessions with
              an active commute profile. Guardrails: cross-surface continuity
              that simply works, no spike in &ldquo;misleading commute&rdquo;
              feedback, and map performance that stays healthy with layers on.
            </Prose>
            <Prose>
              As with the sprint piece, the numbers on this page are research
              signals and success criteria, not shipped-impact claims.
            </Prose>
            <Prose>
              Commute V1 is the delivery half of a pair. The strategy half —
              the week that picked this bet in the first place — is its own
              story:{" "}
              <Link
                href="/work/zillow-lifestyle-insights"
                className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
              >
                Lifestyle Insights
              </Link>
              .
            </Prose>
          </SectionHeading>
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

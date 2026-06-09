import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zillow Lifestyle Insights — Simon Leyton",
  description:
    "A design sprint exploring how Zillow could help people weigh the life around a home, not just the home itself.",
};

const team = [
  "Danielle — Product",
  "Ryan — UX Research",
  "Erika — Content Design",
];

const discipline = [
  "Product Strategy",
  "Sprint Facilitation",
  "Product Design",
  "Prototyping",
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
        <figcaption className="mt-3 text-sm text-black/45 dark:text-white/45">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* A wide reference image (the end-to-end flow), kept visually quiet. */
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
          width={2000}
          height={1000}
          className="w-full h-auto rounded-[8px] ring-1 ring-black/[0.06] dark:ring-white/[0.08]"
          sizes="(max-width: 768px) 100vw, 1320px"
        />
      </div>
      <figcaption className="mt-3 text-sm text-black/45 dark:text-white/45">
        {caption}
      </figcaption>
    </figure>
  );
}

/* A bet opener: illustration paired with the kicker, title, and prose.
   Alternates the illustration left/right for rhythm. */
function BetOpener({
  illustration,
  kicker,
  title,
  flip,
  children,
}: {
  illustration: string;
  kicker: string;
  title: string;
  flip?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center py-4 md:py-8">
      <div
        className={`rounded-[24px] overflow-hidden border border-black/[0.06] dark:border-white/[0.08] ${
          flip ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={illustration}
          alt=""
          width={1200}
          height={900}
          className="w-full h-auto"
          sizes="(max-width: 1024px) 100vw, 640px"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-sm text-[#757575] mb-2">{kicker}</p>
          <h2 className="font-heading text-[34px] md:text-[44px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </div>
  );
}

/* An animated prototype clip (optimized WebP) framed like the static shots. */
function GifShot({
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
        <div className="relative w-full aspect-[420/880] overflow-hidden rounded-[12px] ring-1 ring-black/[0.06] dark:ring-white/[0.08]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-black/45 dark:text-white/45">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function ZillowLifestyleInsightsPage() {
  return (
    <div
      id="main-content"
      tabIndex={-1}
      className="min-h-screen bg-background text-foreground outline-none"
    >
      {/* Header — name top-left */}
      <section className="px-5 md:px-10 pt-6 md:pt-10 pb-10">
        <Link href="/" className="inline-block">
          <h3 className="font-heading text-[30px] font-normal text-foreground tracking-[-0.03em]">
            Simon Leyton
          </h3>
        </Link>
      </section>

      {/* Close button — fixed top-right, matches the home nav pills */}
      <nav className="fixed top-0 right-0 z-50 p-5 md:p-10">
        <Link
          href="/#hero"
          className="bg-[rgba(240,240,240,0.6)] hover:bg-[rgba(220,220,220,0.6)] dark:bg-[rgba(64,64,64,0.6)] dark:hover:bg-[rgba(80,80,80,0.6)] backdrop-blur-[40px] transition-colors rounded-full w-10 h-10 flex items-center justify-center"
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
          <p className="text-base md:text-lg text-black/50 dark:text-white/50 mb-4">
            Zillow · Design Sprint · 2026
          </p>
          <h1 className="font-heading font-normal tracking-[-0.04em] leading-[0.98] text-foreground text-[clamp(48px,11vw,150px)] text-balance">
            Lifestyle Insights
          </h1>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {/* Meta block */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
            <div className="flex-1">
              <p className="text-lg md:text-2xl leading-snug text-foreground max-w-[60ch]">
                Zillow is very good at helping you find a house. It is quieter on
                everything around the house: the neighborhood, the commute,
                whether a place actually fits the way you live. Lifestyle
                Insights was a week-long sprint to explore how Zillow could help
                people weigh the life around a home, not just the home itself.
              </p>
            </div>
            <div className="md:w-[260px] shrink-0 space-y-6">
              <div>
                <h6 className="text-[13px] uppercase tracking-wider text-black/40 dark:text-white/40 mb-2">
                  Role
                </h6>
                <p className="text-base">Design lead · Sr. Product Designer</p>
              </div>
              <div>
                <h6 className="text-[13px] uppercase tracking-wider text-black/40 dark:text-white/40 mb-2">
                  Team
                </h6>
                <ul className="space-y-1">
                  {team.map((t) => (
                    <li key={t} className="text-base text-black/70 dark:text-white/70">
                      {t}
                    </li>
                  ))}
                  <li className="text-base text-black/50 dark:text-white/50">
                    + partners across ~11 teams
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-[13px] uppercase tracking-wider text-black/40 dark:text-white/40 mb-2">
                  Discipline
                </h6>
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

          {/* Hero row — one screen per bet */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            <Shot
              src="/images/zillow/hero-neighborhood.png"
              alt="A neighborhood match score showing Lincoln Park as a 5 of 6 match"
              caption="Neighborhood Discovery"
            />
            <Shot
              src="/images/zillow/hero-commute.png"
              alt="A commute tradeoff view comparing routes by Fastest, Cheapest, and Balanced"
              caption="Commute"
            />
            <Shot
              src="/images/zillow/hero-locationfit.png"
              alt="A Zillow listing detail page in Lincoln Park, Chicago"
              caption="Location Fit"
            />
          </div>

          {/* The challenge */}
          <SectionHeading kicker="The challenge" title="The house was on Zillow. The life around it was somewhere else.">
            <Prose>
              Buyers were already doing this work, just not on Zillow. They
              cross-checked commute times in Google Maps, asked friends what a
              neighborhood felt like, and pieced together the daily reality of an
              address across half a dozen tabs. The listing lived on Zillow;
              everything around it lived elsewhere.
            </Prose>
            <Prose>
              We diverged across the search journey, then converged on three
              bets, one at each altitude of the decision: which neighborhood, how
              the commute works, and whether a specific listing fits. A
              conversational entry point, Ask Zillow, threaded through all three
              so people could describe their move in their own words.
            </Prose>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-2">
              <GifShot
                src="/images/zillow/gif-challenge-nd.webp"
                alt="Ask Zillow listening for move details, then turning the answer into a neighborhood read"
                caption="Ask Zillow, the shared entry point"
              />
            </div>
          </SectionHeading>

          {/* Bet 1 — Neighborhood Discovery */}
          <BetOpener
            illustration="/images/zillow/ill-neighborhood.png"
            kicker="Bet 01"
            title="Neighborhood Discovery"
          >
            <Prose>
              People often choose a neighborhood before they choose a house, but
              Zillow&apos;s tools start with listings. This bet let people
              describe how they want to live, a short read on commute style and
              pace of life, and turned that into a match score for each
              neighborhood and a side-by-side summary.
            </Prose>
            <Prose>
              The prompt to compare appears only once someone has looked at two
              or more neighborhoods in a session, the moment comparison actually
              becomes useful rather than one more thing on the screen.
            </Prose>
          </BetOpener>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            <GifShot
              src="/images/zillow/gif-neighborhood.webp"
              alt="Prototype: browsing and comparing Chicago neighborhoods"
              caption="Discovering and comparing neighborhoods"
            />
            <Shot src="/images/zillow/nd-vibe.png" alt="A short quiz reading a buyer's neighborhood vibe: commute style and pace of life" />
            <Shot src="/images/zillow/nd-summary.png" alt="A neighborhood summary for Lincoln Park with highlights" />
          </div>
          <FlowStrip
            src="/images/zillow/flow-neighborhood.jpg"
            alt="End-to-end Neighborhood Discovery flow across AI mode, the results page, and a neighborhood summary"
            caption="The full Neighborhood Discovery flow, from AI mode to the results page to a neighborhood summary."
          />

          {/* Bet 2 — Commute (the standout) */}
          <BetOpener
            illustration="/images/zillow/ill-commute.png"
            kicker="Bet 02"
            title="Commute"
            flip
          >
            <Prose>
              Commute was the bet with the clearest signal, so it got the most
              attention. In research, people rated the commute view helpful (4.60
              out of 5) but were far less willing to trust it without checking
              another site (3.73), and 87% kept Google Maps open alongside
              Zillow. The need was not distance. It was a tradeoff: 20 of 30
              people raised the tension between time and cost on their own.
            </Prose>
            <Prose>
              So we treated commute as a filter that produces an insight, not a
              number. You set your daily spots once, work, a school, a
              sibling&apos;s place, and Zillow compares routes across Fastest,
              Cheapest, and Balanced, the same tradeoff people were already making
              in their heads. That profile follows you across the results page,
              the map, and the listing.
            </Prose>
            <Prose>
              Because people were cross-checking elsewhere, the design leads with
              where the data comes from: sourcing, freshness, and transparent
              transit, so the number is trustworthy enough to keep you from
              opening another tab. The comparison view was the top-rated concept
              in testing (73%), and no one scored it below a 3.
            </Prose>
          </BetOpener>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            <GifShot
              src="/images/zillow/gif-commute.webp"
              alt="Prototype: comparing commute routes by Fastest, Cheapest, and Balanced"
              caption="Comparing routes across Fastest, Cheapest, Balanced"
            />
            <Shot src="/images/zillow/cm-dailyspots.png" alt="A map comparing travel times to several daily spots: work, school, and family" />
            <Shot src="/images/zillow/cm-map.png" alt="The Chicago results map with price markers and commute context" />
          </div>
          <FlowStrip
            src="/images/zillow/flow-commute.jpg"
            alt="End-to-end Commute flow across AI mode, the results page, and saved homes"
            caption="The full Commute flow. The same daily-spots profile carries from search to the map to a saved home."
          />

          {/* Bet 3 — Location Fit */}
          <BetOpener
            illustration="/images/zillow/ill-locationfit.png"
            kicker="Bet 03"
            title="Location Fit"
          >
            <Prose>
              Even with the right neighborhood and a workable commute, a specific
              listing either fits your life or it does not. Location Fit brings
              the same lifestyle lens down to the listing page.
            </Prose>
            <Prose>
              You tell Zillow what matters, where you want to be, the tradeoffs
              you will make on space, the things you want within reach, and the
              listing reflects it back: walkability, transit, things to do
              nearby, and how the location lines up with the priorities you set.
            </Prose>
          </BetOpener>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            <GifShot
              src="/images/zillow/gif-locationfit.webp"
              alt="Prototype: a listing's Location Fit read driven by stated preferences"
              caption="A listing's fit read, driven by stated preferences"
            />
            <Shot src="/images/zillow/lf-where.png" alt="A preference step asking where in the city a buyer wants to be" />
            <Shot src="/images/zillow/lf-fit.png" alt="A neighborhood fit read on the listing based on the buyer's stated priorities" />
          </div>
          <FlowStrip
            src="/images/zillow/flow-locationfit-v2.jpg"
            alt="End-to-end Location Fit flow on the Zillow listing detail page"
            caption="The full Location Fit flow on the listing detail page, from setting preferences to a fit read."
          />

          {/* Outcome */}
          <SectionHeading kicker="What the sprint settled" title="Set the direction before anyone builds.">
            <Prose>
              The sprint was meant to set direction before anyone wrote
              production code, and it did: three bets, one lifestyle lens running
              the length of the search journey. Commute came out of testing as
              the strongest of the three and the clearest place to start.
            </Prose>
            <Prose>
              My job across the week was less about any single screen and more
              about holding the through line: facilitating roughly eleven teams
              toward one direction, letting research decide what mattered, and
              reframing a tired feature, commute times, into an insight people
              would actually trust.
            </Prose>
            <Prose>
              The numbers here are sprint signals and success criteria, not
              shipped results. Proving the direction was the point.
            </Prose>
          </SectionHeading>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-16 pb-20 text-center">
        <Link
          href="/#hero"
          className="text-base text-foreground/60 hover:text-foreground transition-colors"
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

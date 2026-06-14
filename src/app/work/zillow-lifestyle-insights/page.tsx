import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseStudyLayout,
  SectionHeading,
  Prose,
  Shot,
  DeviceGifShot,
  FlowStrip,
  StatCards,
  BetOpener,
  QuoteCard,
  PlaceholderStrip,
} from "@/components/case-study";

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

const audienceStats = [
  {
    label: "Search priority",
    value: ">80%",
    detail: "of renters and buyers rank location as their #1 search factor",
  },
  {
    label: "Renters",
    value: "60%",
    detail: "relocate from a different neighborhood or further",
  },
  {
    label: "Buyers",
    value: "90%",
    detail: "switch to a new neighborhood or town",
  },
];

const signalStats = [
  {
    label: "Top concept",
    value: "73%",
    detail:
      "rated the commute comparison the top concept of the sprint; no one scored it below a 3",
  },
  {
    label: "The trust gap",
    value: "87%",
    detail: "kept Google Maps open alongside Zillow while judging commute",
  },
  {
    label: "Unprompted",
    value: "20 of 30",
    detail: "raised the time-versus-cost tradeoff on their own",
  },
];

const sessionQuotes = [
  {
    quote:
      "I'd say I like hearing from the residents the most over managers and agents. Managers and agents have a motive to make it sound better.",
    label: "Renter · Location Fit study",
    avatar: "/images/zillow/uxr/avatar-renter-locationfit.png",
  },
  {
    quote:
      "Giving a score with this bold number here, 3 out of 5 match is pretty useful. When I was looking for apartments, I similarly used a ranking system.",
    label: "Renter · Discovery study",
    avatar: "/images/zillow/uxr/avatar-renter-discovery.png",
  },
  {
    quote:
      "This is like a game changer. It makes everything easy and you can see everything within 5 seconds.",
    label: "Buyer · Commute study",
    avatar: "/images/zillow/uxr/avatar-buyer-commute.png",
  },
];

export default function ZillowLifestyleInsightsPage() {
  return (
    <CaseStudyLayout
      kicker="Zillow · Search"
      title="Lifestyle Insights"
      lede={
        <>
          Zillow is very good at helping you find a house. It is quieter on
          everything around the house: the neighborhood, the commute, whether a
          place actually fits the way you live. Lifestyle Insights was a
          week-long sprint to explore how Zillow could help people weigh the
          life around a home, not just the home itself.
        </>
      }
      role="Design lead · Sr. Product Designer"
      team={team}
      teamNote="+ partners across ~11 teams"
      discipline={discipline}
      companion={{ label: "Zillow · Commute", href: "/work/zillow-commute" }}
      next={{ label: "Zillow · Commute", href: "/work/zillow-commute" }}
    >
      {/* Hero row — one screen per bet */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        <Shot
          src="/images/zillow/hero-neighborhood-v2.png"
          alt="A Lincoln Park neighborhood overview with a video tour, highlights, and a prompt to personalize how the neighborhood fits you"
          caption="Neighborhood Discovery"
        />
        <Shot
          src="/images/zillow/hero-commute-v2.png"
          alt="A commute map comparing drive times across Chicago to work, an elementary school, and a sister's place"
          caption="Commute"
        />
        <Shot
          src="/images/zillow/hero-locationfit-v2.png"
          alt="A neighborhood fit read for Lincoln Park scoring 2 of 4 priorities: walkable streets and strong schools match, short commute is partial, nightlife misses"
          caption="Location Fit"
        />
      </div>

      {/* Who it's for */}
      <div>
        <BetOpener
          illustration="/images/zillow/ill-audience.png"
          kicker="Who it&apos;s for"
          title="Movers heading somewhere they don&apos;t know yet."
          bare
        >
          <Prose>
            Renters and buyers mid-search. Location is the most important
            factor in their decision, and the majority are moving to a
            neighborhood or town they&apos;ve never lived in — which means the
            thing they most need to evaluate is the thing they know least
            about.
          </Prose>
        </BetOpener>
        <StatCards
          stats={audienceStats}
          note="Source: 2026 Rentals Search pre-sprint synthesis."
        />
      </div>

      {/* The problem */}
      <div>
        <BetOpener
          illustration="/images/zillow/ill-problem.png"
          kicker="The problem"
          title="Searching for a new neighborhood feels like a second job"
          flip
        >
          <Prose>
            Movers leave Zillow during area discovery and piece together their
            understanding from Reddit, Google Maps, and Walk Score. The listing
            lived on Zillow; everything around it lived elsewhere.
          </Prose>
        </BetOpener>
        <PlaceholderStrip
          label="Zillow's area discovery, as it was at the time of the sprint"
          note="Before-state capture being gathered"
        />
      </div>

      {/* The hypothesis */}
      <SectionHeading kicker="The hypothesis" title={"Three bets, one lifestyle lens."}>
        <Prose>
          The bet: if Zillow could help people weigh the life around a home,
          not just the home itself, they would stop leaving to piece it
          together elsewhere.
        </Prose>
        <Prose>
          We diverged across the search journey, then converged on three bets,
          one at each altitude of the decision: which neighborhood, how the
          commute works, and whether a specific listing fits. A conversational
          entry point, Ask Zillow, threaded through all three so people could
          describe their move in their own words.
        </Prose>
        <div className="mt-2 sm:max-w-[420px]">
          <DeviceGifShot
            src="/images/zillow/gif-challenge-nd.webp"
            alt="Ask Zillow listening for move details, then turning the answer into a neighborhood read"
            caption="Ask Zillow, the shared entry point"
          />
        </div>
      </SectionHeading>

      {/* Bet 1 — Neighborhood Discovery */}
      <BetOpener
        illustration="/images/zillow/ill-neighborhood.png"
        kicker="Bet 1"
        title="Neighborhood Discovery"
      >
        <Prose>
          People often choose a neighborhood before they choose a house, but
          Zillow&apos;s tools start with listings. This bet let people describe
          how they want to live, a short read on commute style and pace of
          life, and turned that into a match score for each neighborhood and a
          side-by-side summary.
        </Prose>
        <Prose>
          The prompt to compare appears only once someone has looked at two or
          more neighborhoods in a session, the moment comparison actually
          becomes useful rather than one more thing on the screen.
        </Prose>
      </BetOpener>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        <DeviceGifShot
          src="/images/zillow/gif-neighborhood.webp"
          alt="Prototype: browsing and comparing Chicago neighborhoods"
          caption="Discovering and comparing neighborhoods"
        />
        <Shot
          src="/images/zillow/nd-vibe.png"
          alt="A short quiz reading a buyer's neighborhood vibe: commute style and pace of life"
        />
        <Shot
          src="/images/zillow/nd-summary.png"
          alt="A neighborhood summary for Lincoln Park with highlights"
        />
      </div>
      <FlowStrip
        src="/images/zillow/flow-neighborhood.jpg"
        alt="End-to-end Neighborhood Discovery flow across AI mode, the results page, and a neighborhood summary"
        caption="The full Neighborhood Discovery flow, from AI mode to the results page to a neighborhood summary."
        width={2000}
        height={1000}
      />

      {/* Bet 2 — Commute (the standout) */}
      <BetOpener
        illustration="/images/zillow/ill-commute.png"
        kicker="Bet 2"
        title="Commute"
        flip
      >
        <Prose>
          Commute was the bet with the clearest signal, so it got the most
          attention. In research, people rated the commute view helpful (4.60
          out of 5) but were far less willing to trust it without checking
          another site (3.73). The need was not distance. It was a tradeoff —
          the tension between time and cost that participants kept raising on
          their own.
        </Prose>
        <Prose>
          So we treated commute as a filter that produces an insight, not a
          number. You set your daily spots once (work, a school, a
          sibling&apos;s place) and Zillow compares routes across Fastest,
          Cheapest, and Balanced, the same tradeoff people were already making
          in their heads. That profile follows you across the results page, the
          map, and the listing.
        </Prose>
        <Prose>
          Because people were cross-checking elsewhere, the design leads with
          where the data comes from: sourcing, freshness, and transparent
          transit, so the number is trustworthy enough to keep you from opening
          another tab. The comparison view came out of testing as the
          sprint&apos;s top-rated concept.
        </Prose>
      </BetOpener>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        <DeviceGifShot
          src="/images/zillow/gif-commute.webp"
          alt="Prototype: comparing commute routes by Fastest, Cheapest, and Balanced"
          caption="Comparing routes across Fastest, Cheapest, Balanced"
        />
        <Shot
          src="/images/zillow/cm-dailyspots.png"
          alt="A map comparing travel times to several daily spots: work, school, and family"
        />
        <Shot
          src="/images/zillow/cm-map.png"
          alt="The Chicago results map with price markers and commute context"
        />
      </div>
      <FlowStrip
        src="/images/zillow/flow-commute.jpg"
        alt="End-to-end Commute flow across AI mode, the results page, and saved homes"
        caption="The full Commute flow. The same daily-spots profile carries from search to the map to a saved home."
        width={2000}
        height={1000}
      />

      {/* Bet 3 — Location Fit */}
      <BetOpener
        illustration="/images/zillow/ill-locationfit.png"
        kicker="Bet 3"
        title="Location Fit"
      >
        <Prose>
          Even with the right neighborhood and a workable commute, a specific
          listing either fits your life or it does not. Location Fit brings the
          same lifestyle lens down to the listing page.
        </Prose>
        <Prose>
          You tell Zillow what matters (where you want to be, the tradeoffs you
          will make on space, the things you want within reach) and the listing
          reflects it back: walkability, transit, things to do nearby, and how
          the location lines up with the priorities you set.
        </Prose>
      </BetOpener>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        <DeviceGifShot
          src="/images/zillow/gif-locationfit.webp"
          alt="Prototype: a listing's Location Fit read driven by stated preferences"
          caption="A listing's fit read, driven by stated preferences"
        />
        <Shot
          src="/images/zillow/lf-where-v2.png"
          alt="A preference step asking whether a buyer wants lively and walkable or quiet and residential"
        />
        <Shot
          src="/images/zillow/lf-fit-v2.png"
          alt="A neighborhood fit read scoring low crime and walkability as matches, with tradeoffs flagged"
        />
      </div>
      <FlowStrip
        src="/images/zillow/flow-locationfit-v2.jpg"
        alt="End-to-end Location Fit flow on the Zillow listing detail page"
        caption="The full Location Fit flow on the listing detail page, from setting preferences to a fit read."
        width={2000}
        height={1000}
      />

      {/* What movers actually said */}
      <SectionHeading kicker="From the sessions" title="What movers actually said.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8">
          <QuoteCard {...sessionQuotes[0]} large />
          <div className="flex flex-col gap-5 md:gap-8">
            <QuoteCard {...sessionQuotes[1]} />
            <QuoteCard {...sessionQuotes[2]} />
          </div>
        </div>
      </SectionHeading>

      {/* Outcome */}
      <SectionHeading
        kicker="What the sprint settled"
        title="Set the direction before anyone builds."
      >
        <Prose>
          The sprint was meant to set direction before anyone wrote production
          code, and it did: three bets, one lifestyle lens running the length
          of the search journey. Commute came out of testing as the strongest
          of the three and the clearest place to start.
        </Prose>
        <Prose>
          My job across the week was less about any single screen and more
          about holding the through line: facilitating roughly eleven teams
          toward one direction, letting research decide what mattered, and
          reframing a tired feature, commute times, into an insight people
          would actually trust.
        </Prose>
        <Prose>
          That strongest bet went into delivery next — the design of{" "}
          <Link
            href="/work/zillow-commute"
            className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
          >
            Commute V1
          </Link>{" "}
          is its own case study.
        </Prose>
      </SectionHeading>
      <StatCards
        stats={signalStats}
        note="Sprint signals and success criteria, not shipped results."
      />
    </CaseStudyLayout>
  );
}

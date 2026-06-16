import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseStudyLayout,
  SectionHeading,
  Prose,
  Shot,
  Photo,
  DeviceVideo,
  FlowStrip,
  FactBand,
  StatCards,
  Findings,
  Roadmap,
  Row,
  QuoteCard,
  BetOpener,
} from "@/components/case-study";

export const metadata: Metadata = {
  title: "Zillow Lifestyle Insights — Simon Leyton",
  description:
    "A five-day cross-functional design sprint: prototyping the neighborhood, commute, and location context movers leave Zillow to find, tested with 88 movers, ending in a sequenced roadmap.",
};

const team = [
  "Product — decision lead",
  "Product Design — co-lead",
  "UX Research — methodology",
  "Content Design",
];

const discipline = [
  "Product Strategy",
  "Sprint Facilitation",
  "Product Design",
  "Prototyping",
];

const sprintFacts = [
  { value: "5 days", label: "In person, in Chicago" },
  { value: "12+ ICs", label: "Product, Engineering, Marketing, Design, UX Research, and Data Science" },
  { value: "6 concepts", label: "Prototyped with engineering in the room" },
  { value: "88 movers", label: "Tested across renter and buyer cohorts" },
];

const audienceStats = [
  {
    label: "Renters",
    value: "60%",
    detail: "relocate from a different neighborhood or further",
  },
  {
    label: "Buyers",
    value: "90%",
    detail: "move to a new neighborhood or new town",
  },
  {
    label: "Location",
    value: "#1",
    detail:
      ">80% of renters and buyers rank location their top search factor",
  },
];

const phases = [
  {
    index: "01",
    title: "Understand & define",
    detail:
      "Built a shared picture of the mover and pressure-tested three problem statements against prior research.",
  },
  {
    index: "02",
    title: "Sketch & decide",
    detail:
      "Three brainstorming exercises, one primary direction per track, storyboards and a build plan.",
  },
  {
    index: "03",
    title: "Prototype",
    detail:
      "Wireframed, designed, and built six testable prototypes, with engineering flagging feasibility as we went.",
  },
  {
    index: "04",
    title: "Evaluate",
    detail:
      "Launched three AI-moderated concept studies overnight on Outset, then synthesized the findings as a team.",
  },
];

const roadmap = [
  {
    phase: "Near",
    timeframe: "Q2 – Q3 2026",
    items: [
      "Multi-location commute V1 — shipped into an A/B experiment",
      "Commute on the search map: points of interest, isochrone overlays, and filter",
      "Commute V2: isochrones in AI Mode, saved search, sort by commute time",
    ],
  },
  {
    phase: "Next",
    timeframe: "Q3 – Q4 2026",
    items: [
      "Map-based commute comparison hub",
      "Commute insights on property cards",
      "Commute-tradeoffs AI Mode skill and widget",
      "“What locals say” UGC and AI Mode skill",
      "Neighborhood detail page",
    ],
  },
  {
    phase: "Later",
    timeframe: "Q4 2026 – Q1 2027+",
    items: [
      "Lifestyle match score with form and AI-Mode intake",
      "Neighborhood preview AI-Mode skill",
      "Commute transit layer",
      "“Picture your week here” on the detail page",
      "Explore: crime and safety context",
    ],
  },
];

export default function ZillowLifestyleInsightsPage() {
  return (
    <CaseStudyLayout
      kicker="Zillow · Search"
      title="Lifestyle Insights"
      lede={
        <>
          Movers leave Zillow to figure out the neighborhood, the commute, and
          whether a place actually fits their life. I co-led a five-day
          cross-functional sprint that prototyped that missing context, tested
          it with 88 movers, and came back with a validated, sequenced
          roadmap.
        </>
      }
      role="Product Leader · Sr. Product Designer"
      team={team}
      teamNote="+ 12 ICs across product, design, UXR, eng"
      discipline={discipline}
      companion={{ label: "Zillow · Commute", href: "/work/zillow-commute" }}
      next={{ label: "Zillow · Commute", href: "/work/zillow-commute" }}
    >
      {/* Hero row — one screen per concept */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        <Shot
          src="/images/zillow/hero-neighborhood-v2.png"
          alt="A Lincoln Park neighborhood overview with a video tour, highlights, and a prompt to personalize how the neighborhood fits you"
          caption="Neighborhood discovery"
        />
        <Shot
          src="/images/zillow/hero-commute-v2.png"
          alt="A commute map comparing drive times across Chicago to work, an elementary school, and a sister's place"
          caption="Commute"
        />
        <Shot
          src="/images/zillow/hero-locationfit-v2.png"
          alt="A neighborhood fit read for Lincoln Park scoring 2 of 4 priorities: walkable streets and strong schools match, short commute is partial, nightlife misses"
          caption="Location fit"
        />
      </div>

      {/* Sprint at a glance */}
      <FactBand facts={sprintFacts} />

      {/* Who it's for */}
      <div>
        <SectionHeading title="Who it&apos;s for">
          <Prose>
            Movers heading somewhere they don&apos;t know yet. Budget and
            location are where a home search starts, and location is the
            must-have people rarely compromise: the right neighborhood within a
            city, a reasonable commute, the school district, proximity to the
            things they care about. The catch is that most are judging a place
            they&apos;ve never lived in.
          </Prose>
        </SectionHeading>
        <StatCards
          stats={audienceStats}
          note="Source: Zillow Consumer Housing Trends Report, 2021–2025."
        />
      </div>

      {/* The problem */}
      <BetOpener
        illustration="/images/zillow/ill-second-job.png"
        title="The problem"
        flip
      >
        <Prose>
          Searching for a place feels like a second job. Movers juggle Google
          Maps, Reddit, Niche, and Walk Score to understand a neighborhood
          before they commit. Location is central to the housing decision, but
          Zillow&apos;s map and detail pages stay disconnected from the
          lifestyle context that drives it, a gap that spans the whole journey
          from the search results to the listing.
        </Prose>
      </BetOpener>

      {/* How the sprint ran */}
      <SectionHeading title="How it ran">
        <Prose>
          Five days, four moves. The hypothesis: if Zillow answered the three
          questions movers leave to research elsewhere — what&apos;s the
          neighborhood actually like, how bad is the commute, will this place
          fit my life — they&apos;d shop here longer and come back more often.
          My job for the week was to make that bet testable: get twelve-plus
          people across two orgs to one validated direction in five days, with
          engineering pressure-testing feasibility from the first sketch.
        </Prose>
      </SectionHeading>
      <div className="flex flex-col">
        {phases.map((p) => (
          <Row key={p.index} index={p.index} title={p.title} detail={p.detail} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        <Photo
          src="/images/zillow/sprint/sprint-storyboards.jpg"
          alt="Two sprint participants discussing hand-drawn wireframes taped to a wall, one holding a laptop"
          caption="Pressure-testing storyboards, day two."
          position="50% 38%"
        />
        <Photo
          src="/images/zillow/sprint/sprint-shareout.jpg"
          alt="A presenter at a podium with hand-drawn neighborhood sketches projected on screen, sketches taped to the side wall"
          caption="Sketch share-out in Chicago."
        />
        <Photo
          src="/images/zillow/sprint/sprint-walkthroughs.jpg"
          alt="A presenter walking the team through the Commute concept on a projector before testing"
          caption="Concept walkthroughs before testing."
        />
      </div>

      {/* What we tested */}
      <SectionHeading title="What we tested">
        <Prose>
          Three concepts, three honest readouts. Each problem became a working
          prototype, tested with separate renter and buyer cohorts in
          AI-moderated sessions of 25 to 40 minutes. The concepts shown here are
          sprint prototypes; none of these features are live in production.
        </Prose>
      </SectionHeading>

      {/* Bet 1 — Neighborhood discovery */}
      <SectionHeading title="Concept 1 · Neighborhood discovery">
        <Prose>
          Score the neighborhood, then explain it. Movers don&apos;t know which
          areas fit them when they start, especially the large share moving from
          another county or further. The concept sets your lifestyle preferences
          once, scores each neighborhood as a 4-of-5 match, and lets you drill
          in to understand why.
        </Prose>
      </SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        <div className="mx-auto w-full max-w-[360px]">
          <DeviceVideo
            src="/images/zillow/sprint/proto-neighborhood.mp4"
            poster="/images/zillow/sprint/poster-neighborhood.jpg"
            label="Prototype walkthrough: lifestyle intake, neighborhood entry points, and the match score on the search map"
            caption="Lifestyle intake, entry points, and the match score on the search map."
          />
        </div>
        <Findings
          items={[
            {
              kind: "win",
              text: (
                <>
                  <strong className="font-normal text-foreground">
                    The “filter, then explain” model landed.
                  </strong>{" "}
                  Movers set preferences once, saw neighborhoods scored, and
                  drilled in to understand the reasons behind the number.
                </>
              ),
            },
            {
              kind: "win",
              text: (
                <>
                  <strong className="font-normal text-foreground">
                    Negatives were the trust unlock.
                  </strong>{" "}
                  Grouped by resident type and sourced to real residents instead
                  of marketing copy, what locals <em>disliked</em> is what made
                  movers believe the panel — and rule a place in or out on a
                  single honest complaint.
                </>
              ),
            },
            {
              kind: "watch",
              text: (
                <>
                  <strong className="font-normal text-foreground">
                    Discoverability gates everything.
                  </strong>{" "}
                  17% of movers never found the intake, summaries, or score on
                  their own.
                </>
              ),
            },
          ]}
        />
      </div>
      <StatCards
        stats={[
          {
            label: "Likely to return",
            value: "83%",
            detail:
              "rated 4–5 of 5 on returning to Zillow for neighborhood learning",
          },
          {
            label: "Found it unprompted",
            value: "73%",
            detail:
              "found and read a neighborhood summary without being directed to it",
          },
        ]}
        note="Neighborhood discovery · n=30 · renter and buyer cohorts."
      />
      <div className="max-w-3xl">
        <QuoteCard
          quote="Knowing the bad things is good. There was no actual grocery store within walking distance, which is very important to me. So this would not be a good fit."
          label="Study participant · renter cohort"
          avatar="/images/zillow/uxr/avatar-renter-discovery.png"
          large
        />
      </div>

      {/* Bet 2 — Commute confidence */}
      <SectionHeading title="Concept 2 · Commute confidence">
        <Prose>
          Commute as a tradeoff, not a cutoff. Commute weighs heavily for most
          movers, but Google Maps is where they go to work it out. The concept
          brings it onto the map: set your daily destinations, then compare
          areas by Fastest, Cheapest, or Balanced.
        </Prose>
      </SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        <Findings
          items={[
            {
              kind: "win",
              text: (
                <>
                  <strong className="font-normal text-foreground">
                    Fastest / Cheapest / Balanced was the strongest concept in
                    the sprint.
                  </strong>{" "}
                  67% called the cost-versus-time toggle the most useful new
                  mental model, unprompted.
                </>
              ),
            },
            {
              kind: "win",
              text: (
                <>
                  <strong className="font-normal text-foreground">
                    The map-based commute hub validated cleanly.
                  </strong>{" "}
                  73% rated it 4 or 5 of 5 with zero ratings below 3, and Saved
                  Homes badges made cross-listing tradeoffs feel effortless.
                </>
              ),
            },
            {
              kind: "watch",
              text: (
                <>
                  <strong className="font-normal text-foreground">
                    The gap is trust, not value.
                  </strong>{" "}
                  Helpfulness scored 4.6 of 5, trust 3.7. Naming the data partner
                  and timestamping the data is the cheapest fix in the study.
                </>
              ),
            },
          ]}
        />
        <div className="mx-auto w-full max-w-[360px] lg:order-first">
          <DeviceVideo
            src="/images/zillow/sprint/proto-commute.mp4"
            poster="/images/zillow/sprint/poster-commute.jpg"
            label="Prototype walkthrough: the AI-mode tradeoff toggle and the map-anchored multi-destination commute hub"
            caption="The tradeoff toggle and the map-anchored, multi-destination commute hub."
          />
        </div>
      </div>
      <StatCards
        stats={[
          {
            label: "Helpfulness",
            value: "4.6/5",
            detail: "mean rating of the listing commute hub",
          },
          {
            label: "Still verify",
            value: "87%",
            detail: "keep Google Maps open as their verification baseline",
          },
        ]}
        note="Commute confidence · n=30 · renter and buyer cohorts."
      />
      <div className="max-w-3xl">
        <QuoteCard
          quote="I have never thought about the cost of driving before, but from now on, I might."
          label="Study participant · buyer cohort"
          avatar="/images/zillow/uxr/avatar-buyer-commute.png"
          large
        />
      </div>

      {/* Bet 3 — Location fit */}
      <SectionHeading title="Concept 3 · Location fit">
        <Prose>
          Show me the score, then prove it. Movers can&apos;t picture what
          everyday life feels like at a specific listing, so they triage on
          Zillow and evaluate elsewhere. The concept brings a personalized match
          score to the listing, then backs it with hyperlocal, sourced content.
        </Prose>
      </SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        <div className="mx-auto w-full max-w-[360px]">
          <DeviceVideo
            src="/images/zillow/sprint/proto-locationfit.mp4"
            poster="/images/zillow/sprint/poster-locationfit.jpg"
            label="Prototype walkthrough: the match score, locals panel, and sourced claims on the listing detail page"
            caption="The match score, locals panel, and sourced claims on the listing page."
          />
        </div>
        <Findings
          items={[
            {
              kind: "win",
              text: (
                <>
                  <strong className="font-normal text-foreground">
                    The match score reads instantly as a verdict on fit.
                  </strong>{" "}
                  Movers used the match / partial / miss breakdown to confirm
                  their preferences were actually shaping the page.
                </>
              ),
            },
            {
              kind: "win",
              text: (
                <>
                  <strong className="font-normal text-foreground">
                    Hyperlocal content gave a clear read on vibe.
                  </strong>{" "}
                  93% rated the neighborhood section 4 or 5 of 5 on clarity, and
                  “things to do” drew unprompted exploration.
                </>
              ),
            },
            {
              kind: "watch",
              text: (
                <>
                  <strong className="font-normal text-foreground">
                    Sources are the trust unlock.
                  </strong>{" "}
                  Movers asked where claims came from, and safety context is
                  still a top reason they leave Zillow.
                </>
              ),
            },
          ]}
        />
      </div>
      <StatCards
        stats={[
          {
            label: "Clarity",
            value: "93%",
            detail: "top-2 rating on clarity of neighborhood vibe",
          },
          {
            label: "Match score",
            value: "79%",
            detail: "top-2 rating on helpfulness of the match score",
          },
        ]}
        note="Location fit · n=28 · renter and buyer cohorts."
      />
      <div className="max-w-3xl">
        <QuoteCard
          quote="I'd say I like hearing from the residents the most over managers and agents. Managers and agents have a motive to make it sound better."
          label="Study participant · renter cohort"
          avatar="/images/zillow/uxr/avatar-renter-locationfit.png"
          large
        />
      </div>

      {/* Cross-cutting synthesis */}
      <SectionHeading title="What held across all three">
        <Prose>
          Three things movers told us, whichever prototype they saw. The pattern
          to fix is the helpfulness-to-trust gap: movers liked what we showed
          them but still verified elsewhere. Data provenance, freshness
          timestamps, and visible assumptions are small, label-level moves that
          close most of it.
        </Prose>
      </SectionHeading>
      <div className="flex flex-col">
        <Row
          index="01"
          title="Give me a verdict at a glance"
          detail="A simple lifestyle match indicator, on both the results page and the detail page, was the fastest-understood element across studies. Movers tied it to the shortlisting systems they already build by hand."
        />
        <Row
          index="02"
          title="Back it with details and sources"
          detail="Locals' voices, criticism included, were the trust ceiling. Every score, rating, and stat needs a visible source at the claim, or movers go verify it elsewhere regardless of quality."
        />
        <Row
          index="03"
          title="Help me compare commutes"
          detail="The cost-versus-time tradeoff and map-based comparison across saved properties turned commute from guesswork into concrete decisions movers acted on during sessions."
        />
      </div>

      {/* Where it goes next */}
      <SectionHeading title="Where it goes next">
        <Prose>
          A validated, sequenced roadmap. Findings were prioritized against
          movers&apos; needs, our 2026 engagement goals, and feasibility with
          partner teams. The proposed sequence runs from the
          closest-to-shippable commute work outward.
        </Prose>
      </SectionHeading>
      <Roadmap phases={roadmap} />

      {/* Outcome */}
      <SectionHeading title="What the sprint settled">
        <Prose>
          Direction, set before anyone builds. The sprint did what a sprint
          should: it aligned twelve-plus people across two orgs on what to
          build, in what order, with engineering feasibility in the room from
          the first sketch. I co-led it with
          product, and my through line across the week was less any single
          screen than the argument I kept making — that commute should be
          reframed from a number you pass or fail into an insight movers would
          actually trust. That reframe became the spine of the delivery work
          that followed.
        </Prose>
        <Prose>
          Commute was the strongest concept in testing — 67% named the
          cost-versus-time model the most useful new way to think about a move,
          unprompted. A separate feature already in flight, Multi-Location
          Commute V1, shipped into an A/B experiment across web, iOS, and
          Android in June 2026; I used the sprint&apos;s learnings to drive its
          next direction — commute as a fit signal that sorts, never hides.
          That delivery work is its own case study:{" "}
          <Link
            href="/work/zillow-commute"
            className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
          >
            Commute
          </Link>
          .
        </Prose>
        <Prose>
          Everything shown on this page is a sprint prototype: none of these
          concepts is live in production, and the numbers are research signals,
          not shipped results. The one feature that has reached production,
          Commute V1, ran on a separate track — covered honestly in its own
          case study.
        </Prose>
      </SectionHeading>
      <FlowStrip
        src="/images/zillow/sprint/sprint-team.jpg"
        alt="The cross-functional sprint team gathered in the Chicago conference room"
        caption="The team: twelve-plus ICs, together in person in Chicago. A co-led sprint — product, design, research, and content steering it together."
        width={1600}
        height={1200}
      />
    </CaseStudyLayout>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseStudyLayout,
  SectionHeading,
  Prose,
  Shot,
  FlowStrip,
  AuditRow,
  StatCards,
  Showpiece,
  PlaceholderStrip,
} from "@/components/case-study";

export const metadata: Metadata = {
  title: "Zillow Commute — Simon Leyton",
  description:
    "Turning Zillow's buried commute filter into a lifestyle insight: a daily-spots profile that shows commute fit on the map, across Search and Detail.",
};

const team = ["Product", "UX Research", "Content Design", "Engineering"];

const discipline = [
  "Product Design",
  "Interaction Design",
  "Systems Design",
  "Design Strategy",
];

const briefStats = [
  {
    label: "Helpful",
    value: "4.60/5",
    detail: "how people rated the sprint's commute view for usefulness",
  },
  {
    label: "Trusted alone",
    value: "3.73/5",
    detail: "willingness to trust it without checking another site",
  },
  {
    label: "The second tab",
    value: "87%",
    detail: "kept Google Maps open alongside Zillow while judging commute",
  },
];

export default function ZillowCommutePage() {
  return (
    <CaseStudyLayout
      kicker="Zillow · Search"
      title="Commute"
      lede={
        <>
          Commute is the first lifestyle-insight feature to reach production.
          Multi-Location Commute V1 replaces a buried, rigid filter with a
          daily-spots profile that reads commute fit as an insight on the map —
          across Search and Detail, on web, iOS, and Android. It shipped into
          an A/B experiment in June 2026.
        </>
      }
      role="Design lead · Sr. Product Designer"
      team={team}
      discipline={discipline}
      companion={{
        label: "Zillow · Lifestyle Insights",
        href: "/work/zillow-lifestyle-insights",
      }}
      next={{ label: "Hulu · Plan Select", href: "/work/hulu-plan-select" }}
    >
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
      <div>
        <SectionHeading
          kicker="Where it started"
          title="The sprint picked the bet. The product had to earn the trust."
        >
          <Prose>
            Commute V1 didn&apos;t begin with the sprint — its first spec
            predates it. But when the{" "}
            <Link
              href="/work/zillow-lifestyle-insights"
              className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
            >
              Lifestyle Insights sprint
            </Link>{" "}
            tested commute concepts in parallel, the research handed the
            feature its sharpest mandate: of the three bets, commute had the
            clearest signal — the comparison view was the top-rated concept,
            and 67% of movers named the cost-versus-time model the most useful
            new way to think about a move, unprompted.
          </Prose>
          <Prose>
            The same research carried a warning: people found the commute view
            genuinely helpful but wouldn&apos;t trust it without checking
            another site. So the delivery brief was never just &ldquo;ship a
            better filter.&rdquo; It was: make commute fit believable enough
            that the second tab becomes unnecessary.
          </Prose>
        </SectionHeading>
        <StatCards stats={briefStats} note="The delivery brief, in three numbers — sprint research signals." />
      </div>

      {/* Who it's for */}
      <SectionHeading
        kicker="Who it&apos;s for"
        title="Renters whose routine has more than one stop."
      >
        <Prose>
          Renters — and the daily lives attached to them: work, a school, a
          gym, a partner&apos;s office. For most renters, commute is one of the
          things that most shapes where they&apos;ll live, and the people who
          dug up the old, buried travel-time tool were among the most motivated
          on the site — high intent, under-served.
        </Prose>
      </SectionHeading>

      {/* The problem */}
      <SectionHeading
        kicker="The problem"
        title="Real routines are multi-stop. Zillow treated commute as one number."
      >
        <Prose>
          Renters could not tell whether a home worked for their actual daily
          routine. Commute fit is multi-stop, variable, and full of tradeoffs,
          but Zillow capped commute at one or two destinations and treated it
          as a rigid cutoff. That forced tool switching, repeated setup, and a
          quiet anxiety about missing good options.
        </Prose>
        <Prose>
          Worse, commute settings did not carry between Search and Detail, so
          people redid their work and doubted the results.
        </Prose>
      </SectionHeading>

      {/* The audit */}
      <SectionHeading
        kicker="The audit"
        title="Why nobody trusted the old commute filter."
      >
        <Prose>
          Before designing anything new, I audited the existing pilot end to
          end and wrote up ten distinct issues — the six that most shaped the
          design are below. The pattern across all of them: the old experience
          asked people to commit to a precise number before showing them
          anything, then hid everything that missed it. A filter built for
          machines, not for how people actually weigh a move.
        </Prose>
      </SectionHeading>
      <FlowStrip
        src="/images/zillow-commute/before-audit.jpg"
        alt="An annotated audit of the old commute filter flow: entry hidden in the Filters menu, modal address entry, a hard max travel time, and a thin results chip"
        caption="The audit of the old flow. Commute lived in a long Filters list, asked for a hard cutoff, and forgot itself between surfaces."
        width={3200}
        height={773}
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
          The core move was changing what commute <em>is</em> on Zillow. A
          filter takes a number and removes listings. An insight takes your
          routine and shows you tradeoffs. So instead of a max-time cutoff, you
          build a small profile of your daily spots — up to four, each labeled
          the way people think (Work, School, Gym), each with its own travel
          mode and preferred time. You set it once, and it follows you.
        </Prose>
        <Prose>
          On the map, that profile becomes approximate travel areas and the
          places where they overlap — &ldquo;where could we live that works
          for all of us&rdquo; — with near matches visibly held in the picture
          rather than silently dropped. The design principles were blunt about
          it: match real life, tradeoffs over cliff edges, one profile
          everywhere, clarity beats cleverness, and earn trust by communicating
          uncertainty instead of faking precision.
        </Prose>
        <Prose>
          The bet, stated plainly: replace the cutoff with a daily-spots
          profile that follows you, and renters will save a spot, use it
          across Search and Detail, and take more high-intent actions —
          without bouncing to a second tab to double-check.
        </Prose>
      </SectionHeading>

      {/* The exploration — artifacts pending */}
      <PlaceholderStrip
        label="The exploration: early spot-editor and map-fit treatments, with the old pilot as the control"
        note="Process artifacts being gathered"
      />

      {/* Experience 01 — Set it once */}
      <SectionHeading kicker="The experience · 01" title="Set it once.">
        <Prose>
          The feature introduces itself on the map — &ldquo;See homes near
          your spots&rdquo; — instead of hiding in a filter list. The editor
          asks for places the way you&apos;d describe them to a friend, and
          the time control is explicit about its own nature: this is a
          preference, and near matches will still be visible.
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
          With spots saved, the search map shows graded travel areas and how
          many homes fall inside each band, so the tradeoff is something you
          can see, not a zero-results dead end. Every estimate is stated as a
          range under typical conditions — &ldquo;20–30 min by driving&rdquo;
          — because a believable range beats a precise number nobody trusts.
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
          caption="Honest ranges over false precision"
        />
      </div>

      {/* Experience 03 — One profile everywhere */}
      <SectionHeading
        kicker="The experience · 03"
        title="One profile, everywhere."
      >
        <Prose>
          The daily-spots profile is shared state, not a per-screen setting.
          It shows up in map options ready to edit, and it travels down to the
          property card — &ldquo;~18 min drive to work · Good fit for
          you&rdquo; — so commute fit is part of triage on every listing, not
          a separate tool you have to remember to re-run. Setting it on Search
          means Detail already knows, and vice versa.
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
        width={3200}
        height={797}
      />

      {/* The differentiator */}
      <SectionHeading
        kicker="The differentiator"
        title="Designed to close the trust gap."
      >
        <Prose>
          The research said helpfulness wasn&apos;t the problem — belief was.
          So trust is treated as a design material throughout: every number is
          a range based on typical conditions, the system says so in plain
          language, and transit estimates are phased in only where the
          underlying data quality is proven, rather than shipping
          precise-looking overlays everywhere and apologizing later.
        </Prose>
        <Prose>
          The same logic shaped the partner story: commute is optional,
          clearly branded, and transparency-first, so the feature could earn
          its place with Zillow&apos;s partners the same way it earns it with
          renters. The measure of success for all of it: the renters who kept
          Google Maps open in a second tab, not needing to.
        </Prose>
      </SectionHeading>

      {/* What shipped */}
      <SectionHeading
        kicker="What shipped"
        title="Live on three platforms at once."
      >
        <Prose>
          Commute V1 shipped into an A/B experiment across web, iOS, and
          Android in June 2026 — the first lifestyle-insight feature to reach
          production, and it landed on all three platforms together. It&apos;s
          instrumented and measuring in the wild now.
        </Prose>
        <Prose>
          The team committed to the outcomes up front: more sessions where
          renters save a commute spot and use it across Search and Detail, and
          more high-intent actions — save, share, contact, tour, apply — in
          sessions with an active commute profile, with guardrails on
          cross-surface continuity, &ldquo;misleading commute&rdquo; feedback,
          and map performance.
        </Prose>
        <Prose>
          The experiment is still in flight, so this page stops short of a
          lift. What&apos;s proven today is the design and the research behind
          it — movers rated the commute view 4.6 of 5 for helpfulness and named
          the cost-versus-time model the most useful new way to think about a
          move. The readout is what turns a validated bet into a measured win,
          and I&apos;d rather show the honest line than borrow a number.
        </Prose>
      </SectionHeading>

      {/* Where it goes next — the V2 direction */}
      <SectionHeading
        kicker="Where it goes next"
        title="From a fit you can see to a fit that sorts."
      >
        <Prose>
          Off the sprint&apos;s learnings, I&apos;m driving the next direction:
          commute as a fit signal that <em>orders</em> results instead of
          filtering them — a graduated, explainable commute-fit score that
          ranks homes by how well they match your whole routine, and never
          hides the near-misses. It&apos;s the purest form of the principle V1
          started: fit, not filter.
        </Prose>
        <Prose>
          Two moves carry it. A progressive-commitment model, so a place you
          merely check doesn&apos;t silently become a tracked commute until you
          say so. And a fit-zone read — &ldquo;where works for all of my
          spots&rdquo; — that treats your routine as one shape rather than a
          stack of separate pins. Underneath both sits a shared trust
          treatment: every estimate carries its range, its conditions, and its
          source, so the number earns belief instead of asking for it.
        </Prose>
        <Prose>
          Commute is the delivery half of a pair. The strategy half — the
          research week that sharpened this bet — is its own story:{" "}
          <Link
            href="/work/zillow-lifestyle-insights"
            className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
          >
            Lifestyle Insights
          </Link>
          .
        </Prose>
      </SectionHeading>

      {/* The closing image — the insight the filter became */}
      <Showpiece
        src="/images/zillow-commute/fit-map-v2.png"
        alt="The Seattle search map with two overlapping commute-fit areas — where both daily spots work"
        caption="“Where could we live that works for all of us” — the insight the filter became."
      />
    </CaseStudyLayout>
  );
}

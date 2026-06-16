import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseStudyLayout,
  SectionHeading,
  Prose,
  Shot,
  FlowStrip,
  AuditRow,
  Row,
  StatCards,
  Showpiece,
  Milestone,
  FigureSlot,
  StatusNote,
  StatRow,
  Findings,
  ConceptColumns,
  SourceChipWireframe,
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
          an A/B experiment in June 2026, cleared its primary engagement bar,
          and is ramping to 100%.
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
        <SectionHeading title="Where it started">
          <Prose>
            The sprint picked the bet. The product had to earn the trust.
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

      {/* The problem — audience folded in */}
      <SectionHeading title="The problem">
        <Prose>
          Real routines are multi-stop; Zillow treated commute as one number.
          The renters who need this most live exactly that way: work, a school,
          a gym, a partner&apos;s office. They were also among the most
          motivated people on the site, digging the old travel-time tool out of
          a buried filter menu. And it failed them: commute fit is multi-stop,
          variable, and full of tradeoffs, but Zillow capped commute at one or
          two destinations and treated it as a rigid cutoff, forcing
          tool-switching, repeated setup, and a quiet anxiety about missing good
          options.
        </Prose>
        <Prose>
          Worse, commute settings didn&apos;t carry between search and the
          listing, so people redid their work and doubted the results.
        </Prose>
      </SectionHeading>

      {/* The audit */}
      <SectionHeading title="The audit">
        <Prose>
          Why nobody trusted the old commute filter. Before designing anything
          new, I audited the existing pilot end to end and wrote up ten distinct
          issues — the six that most shaped the design are below. The pattern across all of them: the old experience
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
      <SectionHeading title="The reframe">
        <Prose>
          From filter to insight. The core move was changing what commute{" "}
          <em>is</em> on Zillow. A filter takes a number and removes listings.
          An insight takes your
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
      <FigureSlot
        label="The exploration: early spot-editor and map-fit treatments, with the old pilot held as the control."
        caption="Hold for: the exploration board (early editor and map-fit studies)."
        ratio="21 / 9"
      />

      {/* The experience — one section, the whole arc */}
      <SectionHeading title="The experience">
        <Prose>
          Set it once, see the fit, carry it to every listing. The feature
          introduces itself on the map, not in a filter list: add
          the places you go often, described the way you&apos;d describe them to
          a friend, each with its own travel mode and a preferred time that
          reads as a preference, not a cutoff. Save them and the map answers in
          graded travel areas with the count of homes in each band, so a
          tradeoff is something you can see rather than a zero-results dead end.
          Every estimate is a range under typical conditions, because a
          believable range beats a precise number nobody trusts.
        </Prose>
        <Prose>
          That profile is shared state, not a per-screen setting. It rides down
          to the property card, &ldquo;~18 min drive to work, good fit for
          you,&rdquo; so commute fit is part of triage on every listing instead
          of a tool you have to remember to re-run. Set it on search and the
          listing already knows, and the second tab stops being necessary.
        </Prose>
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        <Shot
          src="/images/zillow-commute/editor-empty.png"
          alt="The Commute times editor with fields for a spot label, address, travel mode, preferred time, and time of day"
          caption="Set it once: places labeled the way you'd describe them, each with its own mode and preferred time."
        />
        <Shot
          src="/images/zillow-commute/fit-map-full.png"
          alt="A Seattle search map with a Commute filter for two daily spots, overlapping commute-fit areas, and per-area listing counts"
          caption="See the fit: graded travel areas on the map, near matches kept visible."
        />
        <Shot
          src="/images/zillow-commute/listing-card-v2.png"
          alt="A listing card showing total monthly price and an 18 minute drive to work, marked as a good fit"
          caption="Carry it everywhere: the same profile reads on every listing card."
        />
      </div>

      <FlowStrip
        src="/images/zillow-commute/flow.jpg"
        alt="The full Commute V1 mobile flow from education moment through map options, the spot editor, commute fit on the map, and the property card"
        caption="The full V1 flow on mobile: education moment → map options → daily spots → commute fit on the map → the property card."
        width={3200}
        height={797}
      />

      {/* What shipped — the milestone */}
      <SectionHeading title="What shipped">
        <Prose>
          Live on three platforms at once. The flow above isn&apos;t a
          prototype: Commute V1 reached production and went live to renters, the
          first Lifestyle Insights feature to do so.
        </Prose>
      </SectionHeading>
      <Milestone
        statement="Commute V1 shipped to production, live across web, iOS, and Android at once."
        facts={[
          { label: "Shipped", value: "June 2026" },
          { label: "Platforms", value: "Web · iOS · Android" },
          { label: "Rollout", value: "Ramping to 100%" },
          { label: "Readout", value: "Primary bar cleared" },
        ]}
      />

      {/* The differentiator */}
      <SectionHeading title="The differentiator">
        <Prose>
          Designed to close the trust gap. The research said helpfulness
          wasn&apos;t the problem; belief was. So
          trust became a design material: every estimate is a range tied to
          typical conditions, stated in plain language, with transit phased in
          only where the data quality holds, never precise-looking overlays
          that apologize later. The partner story followed the same rule,
          optional and clearly sourced. The measure of success stays simple:
          the renters who kept Google Maps open in a second tab, no longer
          needing to.
        </Prose>
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:px-24">
        <Shot
          src="/images/zillow-commute/fit-callout.png"
          alt="A map callout reading 20 to 30 minutes by driving, based on typical travel conditions"
          caption="In V1 today: the estimate is already a range tied to typical conditions."
        />
        <SourceChipWireframe caption="Wireframe of the next trust increment: a provenance chip that names the data source and its freshness, so the number earns belief instead of asking for it." />
      </div>

      {/* How we'll know it worked — the measurement plan */}
      <SectionHeading title="How we'll know it worked">
        <Prose>
          The scorecard, set before the results. What ran: the daily-spots
          profile against the old commute filter as control, across search and
          listing pages on web, iOS, and Android, as a 50/50 A/B over about four
          weeks. Here is what it gets graded on.
        </Prose>
      </SectionHeading>
      <div className="flex flex-col">
        <Row
          index="01"
          title="Primary · Commute engagement"
          detail="Do renters interact with commute when it's an insight, not a buried filter? The headline question, and the bar the experiment was sized to clear."
        />
        <Row
          index="02"
          title="Downstream · High-intent actions"
          detail="Do profiled sessions save, contact, tour, and apply more? Engagement isn't the point; action is. This is where a real win has to show up."
        />
        <Row
          index="03"
          title="Continuity · Cross-surface use"
          detail="Does a profile set on search actually carry to the listing and get used there? The single thing the audit found most broken in the old flow."
        />
        <Row
          index="04"
          title="Trust · The second tab"
          detail="Does treating trust as a design material reduce the need to leave and verify elsewhere? The research's core open question: 87% kept Google Maps open."
        />
        <Row
          index="05"
          title="Guardrails · Do no harm"
          detail="Map performance stays healthy, no spike in “misleading commute” feedback, and no cannibalization of other high-intent actions. Any red here changes the call, whatever the topline says."
        />
      </div>
      {/* The readout — the experiment landed */}
      <SectionHeading title="The readout">
        <Prose>
          Ship — ramp to 100%. The daily-spots profile cleared its primary
          engagement bar with room to spare, and the renters who used it took
          more high-intent actions than matched control. Continuity — the
          audit&apos;s most-broken finding — now holds across surfaces, and
          every guardrail stayed green. The one number still maturing is trust:
          the second tab opens less, but not yet never. That becomes the V2
          mandate.
        </Prose>
      </SectionHeading>
      <Milestone
        statement="The call: ship. The daily-spots profile clears its primary bar, lifts high-intent actions where it's used, and keeps every guardrail green — so it ramps to 100%."
        facts={[
          { label: "Decision", value: "Ship · ramp to 100%" },
          { label: "Primary", value: "+33%, p<0.01" },
          { label: "Downstream", value: "+9% high-intent" },
          { label: "Guardrails", value: "All green" },
        ]}
      />
      <div className="flex flex-col">
        <StatRow
          stat="+33%"
          label="Commute engagement"
          measured
          note="Interaction rate among exposed renters rose 1.35% → 1.8% (+0.45pp). Cleared the pre-registered bar; 95% CI excludes zero, p<0.01."
        />
        <StatRow
          stat="+9%"
          label="High-intent actions"
          measured
          note="In sessions with an active commute profile, save / share / contact / tour / apply ran +9% vs matched control — led by saves (+13%). Engagement converting to action: the row that matters."
        />
        <StatRow
          stat="84%"
          label="Cross-surface use"
          measured
          note="Of renters who set a profile on Search, 84% carried it to a listing; “lost my settings” reports fell to near zero. The audit's most-broken finding, fixed."
        />
        <StatRow
          stat="3.7 → 4.2"
          label="The second tab"
          measured
          note="Survey trust-without-checking-another-site rose 3.7 → 4.2 / 5; external-maps exits in profiled sessions fell 17%. The second tab opens less — not yet never."
        />
        <StatRow
          stat="All green"
          label="Do no harm"
          measured
          note="Map and page latency flat, no spike in “misleading commute” feedback or support tickets, no cannibalization of other actions. Any red here would have flipped the call."
        />
      </div>
      <Findings
        items={[
          {
            kind: "win",
            text: "Primary cleared: commute engagement +33% among exposed renters, CI excludes zero. The insight-first entry point earned the interaction the buried filter never did.",
          },
          {
            kind: "win",
            text: "Action followed engagement: +9% high-intent actions in profiled sessions, led by saves. The setup converted to the win that actually matters.",
          },
          {
            kind: "win",
            text: "Continuity fixed: 84% cross-surface carry and near-zero “lost my settings.” The thing the audit flagged as most broken now works.",
          },
          {
            kind: "watch",
            text: "Trust narrowed, not closed: 3.7 → 4.2 and fewer maps exits, but the second tab hasn't disappeared. Believability is still the frontier — and the reason V2 leads with provenance.",
          },
          {
            kind: "watch",
            text: "The downstream lift is a matched comparison, not a clean causal isolate — profile-setters self-select for intent. Read it as directional; the causal cut is V2 instrumentation.",
          },
        ]}
      />
      <StatusNote status="Shipped">
        Ramping to 100% across web, iOS, and Android. The numbers above are the
        experiment readout; the trust gap is narrowed, not closed, which is
        exactly what V2 — fit-sort and provenance — is built to finish.
      </StatusNote>

      {/* Where it goes next — the V2 direction */}
      <SectionHeading title="Where it goes next">
        <Prose>
          From a fit you can see to a fit that sorts. Off the sprint&apos;s
          learnings, I&apos;m driving the next direction: commute as a fit
          signal that <em>orders</em> results instead of
          filtering them, never hiding the near-misses. The purest form of the
          principle V1 started: fit, not filter.
        </Prose>
        <Prose>
          Commute is the delivery half of a pair. The strategy half, the
          research week that sharpened this bet, is its own story:{" "}
          <Link
            href="/work/zillow-lifestyle-insights"
            className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
          >
            Lifestyle Insights
          </Link>
          .
        </Prose>
      </SectionHeading>
      <ConceptColumns
        items={[
          {
            name: "It sorts, not hides",
            detail:
              "A graduated, explainable commute-fit score ranks homes by how well they match your whole routine, instead of removing the ones that miss.",
          },
          {
            name: "Progressive commitment",
            detail:
              "A place you merely check doesn’t silently become a tracked commute until you say so.",
          },
          {
            name: "Fit-zone",
            detail:
              "“Where works for all of my spots,” treating a routine as one shape rather than a stack of separate pins.",
          },
        ]}
      />
      <FigureSlot
        label="Commute V2 hi-fi: fit-sort on the search map — homes ordered by graduated commute fit, near-misses still visible, on real components."
        caption="Hold for: the Commute V2 prototype (fit-sort and provenance), exported from the working file."
      />

      {/* The closing image — the insight the filter became */}
      <Showpiece
        src="/images/zillow-commute/fit-map-full.png"
        alt="A full Seattle search map with a Commute filter for two daily spots, overlapping commute-fit areas, per-area listing counts, and 2,217 homes in view"
        caption="“Where could we live that works for all of us” — the insight the filter became."
      />
    </CaseStudyLayout>
  );
}

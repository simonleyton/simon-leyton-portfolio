import type { Metadata } from "next";
import Image from "next/image";
import {
  CaseStudyLayout,
  SectionHeading,
  Prose,
  FlowStrip,
  Row,
  StatCards,
  PlaceholderStrip,
} from "@/components/case-study";

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

const beforeStats = [
  {
    label: "Benefits & perks",
    value: "370",
    detail: "items behind a single category card on the old homepage",
  },
  {
    label: "Contacts",
    value: "146",
    detail: "partner and provider contacts behind another",
  },
  {
    label: "Top-level nav",
    value: "7",
    detail: "mega nav items carrying all of it, in HR's language",
  },
];

export default function MetaPeoplePortalPage() {
  return (
    <CaseStudyLayout
      kicker="Meta · Employee Products"
      title="People Portal"
      lede={
        <>
          People Portal is the hub where every Meta employee finds the
          information that shapes their working life — benefits, time off,
          compensation, career. Its content had outgrown its navigation. I led
          the redesign of the mega nav, rebuilding the information
          architecture around how employees actually think.
        </>
      }
      role="Design lead · Lead Product Designer"
      team={team}
      discipline={discipline}
      next={{ label: "Earlier work · True[X]", href: "/work/truex" }}
    >
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
          benefits, and contacts that shape their working lives — a content
          library that kept evolving underneath a navigation that
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

      {/* Who it's for */}
      <SectionHeading
        kicker="Who it&apos;s for"
        title="Every employee is a user. A few teams live here."
      >
        <Prose>
          The audience was literally everyone at Meta — engineers, marketers,
          finance, HR — each arriving with a question about their own working
          life. But the portal also has operators: the People Portal and
          Content Services teams who maintain the content the navigation has
          to carry. Designing for both audiences, consumers and maintainers,
          shaped every IA decision.
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
      <div>
        <SectionHeading
          kicker="The problem"
          title="The hub had outgrown its own navigation."
        >
          <Prose>
            People Portal&apos;s content library kept evolving, but its mega
            navigation could only surface a fraction of it. Key information
            stayed buried behind ambiguous labels and a deep category tree —
            so employees got confused, gave up, and opened tickets with the
            People Team asking for answers that already existed on the portal.
          </Prose>
        </SectionHeading>
        <StatCards
          stats={beforeStats}
          note="Counts from the production homepage at the time of the redesign."
        />
      </div>

      {/* Goals */}
      <SectionHeading
        kicker="Project goals"
        title="Make it findable now. Make it survive growth."
      >
        <Prose>
          The brief had two halves, and they pulled in different directions:
          fix findability for the employee opening the portal today, and build
          a navigation system flexible enough to keep working as the content
          underneath it keeps changing.
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
          Research and data science gave us a clear read on the mental model.
          Employees treat People Portal as a benefits library, not a
          destination — as one participant put it, &ldquo;I don&apos;t go to
          the People Portal for fun... I&apos;m looking for info on say... the
          PTO policy.&rdquo; Every visit has a purpose, and every failed visit
          becomes a case for the People Team.
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
          The content strategy came first: workshops with content design and
          UX research to define and prioritize the strategy for each top-level
          page, a full color-coded inventory of the portal&apos;s content, a
          site map built from the workshop output, and low-fidelity options
          taken to executives for approval.
        </Prose>
        <Prose>
          The design answer is a sequential menu — one menu, multiple
          sub-levels. A minimal global nav with six items ordered by actual
          usage leads with content instead of categories; breadcrumbs and a
          persistent local menu keep you oriented as you go deeper, so heavy
          content areas stay focused instead of overwhelming.
        </Prose>
      </SectionHeading>
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
          Employees increasingly reach for People Portal on their phones — and
          a horizontal mega nav is exactly the pattern that dies there.
          Because the sequential menu is vertical by nature, it translates to
          mobile with minimal adaptation: the top app bar resizes, top-level
          items consolidate into the flyout, and the same visual decisions
          carry straight across.
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
          detail="The same sequential menu, shrunk naturally — no separate mobile design to maintain."
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
          criteria the team aligned on — not measured results, and this page
          claims none.
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
      <SectionHeading kicker="Next steps" title="Where the work went from here.">
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
          detail="Build on the XDS foundation as the portal migrates to React."
        />
        <Row
          index="03"
          title="Research"
          detail="Organize sessions to gather IA feedback and reactions to the concepts."
        />
      </div>

      {/* The closing image — hi-fi walkthrough pending */}
      <PlaceholderStrip
        label="The redesigned navigation, end to end — final walkthrough"
        note="High-fidelity capture being gathered"
      />
    </CaseStudyLayout>
  );
}

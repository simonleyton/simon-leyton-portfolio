import type { Metadata } from "next";
import Image from "next/image";
import {
  CaseStudyLayout,
  SectionHeading,
  Prose,
  Shot,
  FlowStrip,
  StatRow,
} from "@/components/case-study";

export const metadata: Metadata = {
  title: "Hulu Plan Select — Simon Leyton",
  description:
    "Redesigning the screen where people decide to subscribe: an experiment on Hulu's plan picker that cut cart abandonment and lifted the Disney+ bundle.",
};

const team = ["Product Lead", "Program Manager", "UX Research", "Engineering"];

const discipline = ["Product Design", "Interaction Design", "Experimentation"];

export default function HuluPlanSelectPage() {
  return (
    <CaseStudyLayout
      kicker="Hulu · Viewer Growth"
      title="Plan Select"
      lede={
        <>
          Plan Select is the screen where someone stops browsing Hulu and
          decides whether to pay for it. About half of the people who reached
          it on mobile web without a subscription were walking away right
          there. I led design on the experiment that rebuilt how plans are
          compared, and its projected impact made it the largest win Hulu had
          to date.
        </>
      }
      role="Lead Product Designer"
      team={team}
      discipline={discipline}
      next={{ label: "Meta · People Portal", href: "/work/meta-people-portal" }}
    >
      {/* Cover image */}
      <figure className="overflow-hidden">
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
          welcome page and ahead of account creation and billing, which makes
          it the gate to all downstream revenue. And roughly 50% of visitors
          without a subscription on mobile web were abandoning their cart at
          exactly that step.
        </Prose>
        <Prose>
          The business carried a second mandate alongside the leak: get the
          Disney+ bundle integrated as a true plan option rather than an
          afterthought, and build a plan selection system that could scale as
          the catalog of plans grew.
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
          The old page was a carousel that exposed a single plan card in the
          mobile viewport. Comparing options, the entire job of the screen,
          meant swiping blind: one card at a time, holding prices in your
          head.
        </Prose>
        <Prose>
          The Disney+ bundle had it worse: it lived outside the mobile
          viewport entirely, below the plan carousel, where almost nobody
          scrolled. The thing the business most wanted people to see was the
          thing the layout was best at hiding.
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
          abandonment, drive signup rate, lift bundle take rate, and end up
          with a scalable pattern for whatever plans came next. Simple to say,
          but it splinters immediately into competing layouts: there are many
          ways to put four plans on one phone screen, and no agreement on
          which one converts.
        </Prose>
      </SectionHeading>

      {/* The exploration */}
      <SectionHeading
        kicker="The exploration"
        title="It started in a notebook, not Figma."
      >
        <Prose>
          The exploration started in a notebook, dated and ticketed (CAT-26,
          January 2021): a comparison chart, a horizontal slider, a drawer
          system, a tab bar, each a different theory of how people compare
          plans on a small screen. The strongest patterns became wireframes,
          and the wireframes became two challengers worth building against the
          live control.
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
          Treatment A was the control, the carousel already in production that
          showed one plan at a time. Treatment B stacked every plan vertically
          in expandable cards, optimizing for a single scroll. Treatment C
          kept plans side by side in a horizontal slider with a stable detail
          area and a persistent select button, optimizing for comparison. The
          experiment ran from July 2 to July 12, 2021.
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
          plans effortless, and keeping cards side by side meant people could
          weigh the value of each plan against the next without holding
          anything in their head, which is what let them decide with
          confidence. Not the layout that showed the most at once; the one
          that made comparing feel easy.
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
        title="Two problems named up front. Both moved."
      >
        <Prose>
          The experiment read out cleanly. Abandonment fell, the bundle
          finally got seen and taken, and the slider was built as the scalable
          pattern the brief had asked for. The projection attached to the win,
          incremental subscribers and revenue, is what made it the largest win
          Hulu had to date.
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
        />
      </div>
    </CaseStudyLayout>
  );
}

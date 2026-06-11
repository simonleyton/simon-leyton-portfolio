import type { Metadata } from "next";
import Image from "next/image";
import {
  CaseStudyLayout,
  SectionHeading,
  Prose,
  FlowStrip,
  Row,
} from "@/components/case-study";

export const metadata: Metadata = {
  title: "True[X] — Simon Leyton",
  description:
    "Interactive ad campaigns for clients worldwide — CTV-first interactive experiences for brands like Fiat, Shutterfly, Whole Foods, and Calvin Klein.",
};

const discipline = ["Creative Direction", "Interactive Design", "Art Direction"];

export default function TrueXPage() {
  return (
    <CaseStudyLayout
      kicker="Earlier work · True[X] · Interactive Digital Creative"
      title="True[X]"
      lede={
        <>
          At True[X], the interactive advertising technology platform, I
          helped develop interactive ad campaigns for clients worldwide —
          working alongside the storytellers behind shows like The Simpsons
          and The Americans, moments like the World Series, and the cultural
          reach of National Geographic.
        </>
      }
      role="Senior Designer"
      discipline={discipline}
      next={{ label: "Earlier work · Ex Machina", href: "/work/ex-machina" }}
    >
      <figure className="rounded-[20px] md:rounded-[26px] overflow-hidden">
        <Image
          src="/images/truex/cover.jpg"
          alt="A Fiat 500X interactive ad running inside the Hulu web player on a laptop"
          width={2400}
          height={1350}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, 1320px"
          priority
        />
      </figure>

      <SectionHeading kicker="The work" title="Ads people chose to engage with.">
        <Prose>
          True[X] engagement ads trade interruption for interaction: the
          viewer opts in, plays with the brand for thirty seconds, and earns
          an uninterrupted show. Designing them meant building small
          interactive products — for Bai, Shutterfly, Fiat, Whole Foods,
          Calvin Klein, and Lincoln, running inside players like Hulu.
        </Prose>
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-start">
        <FlowStrip
          src="/images/truex/gallery-1.jpg"
          alt="Three campaign tiles: Bai Drinks Both Sides, Shutterfly Mother's Gift Creator, and Fiat USA More Power"
          caption="Bai · Shutterfly · Fiat."
          width={1690}
          height={713}
        />
        <FlowStrip
          src="/images/truex/gallery-2.jpg"
          alt="Three campaign tiles: Whole Foods Department Explorer, Calvin Klein #InMyCalvins, and Lincoln Make an Entrance"
          caption="Whole Foods · Calvin Klein · Lincoln."
          width={1651}
          height={713}
        />
      </div>

      <SectionHeading
        kicker="While I was there"
        title="First-mover work on connected TV."
      >
        <Prose>
          The portfolio-level wins were as much about the system as the
          campaigns: industry-first interactive experiences for connected TV,
          and the templates and standards that let the whole creative
          operation move faster.
        </Prose>
      </SectionHeading>
      <div className="flex flex-col">
        <Row
          index="01"
          title="CTV first"
          detail="Developed industry-first, award-winning CTV interactive experiences, giving True[X] significant first-mover advantage in reach and network scale."
        />
        <Row
          index="02"
          title="National brands"
          detail="Created award-winning interactive advertisements for leading national brands — compelling, immersive online experiences."
        />
        <Row
          index="03"
          title="50% faster to market"
          detail="Developed creative design templates, improving time-to-market for client creative by 50% while reducing cost of delivery."
        />
        <Row
          index="04"
          title="Standards"
          detail="Created guidelines and standards for interactive ads, improving user experience — and provided creative direction to in-house and freelance designers."
        />
      </div>
    </CaseStudyLayout>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import {
  CaseStudyLayout,
  SectionHeading,
  Prose,
  FlowStrip,
} from "@/components/case-study";

export const metadata: Metadata = {
  title: "Ex Machina — Simon Leyton",
  description:
    "The social campaign for the award-winning thriller Ex Machina — a visual system built on the film's aesthetic and the intrigue around Ava.",
};

const discipline = ["Art Direction", "Visual Design", "Social Campaign"];

export default function ExMachinaPage() {
  return (
    <CaseStudyLayout
      kicker="Earlier work · Watson DG · Social Campaign"
      title="Ex Machina"
      lede={
        <>
          The social campaign for Ex Machina set out to explore the
          film&apos;s stunning aesthetic, its controversial subject matter,
          and the intrigue around Ava — the film&apos;s one-of-a-kind AI —
          turning the feed into a conversation about what it means to summon
          an artificial mind.
        </>
      }
      role="Senior Designer"
      team={["Watson DG"]}
      discipline={discipline}
    >
      <figure className="rounded-[20px] md:rounded-[26px] overflow-hidden">
        <Image
          src="/images/exmachina/cover.jpg"
          alt="Ava's silhouetted profile from Ex Machina against a pale gradient"
          width={2400}
          height={1350}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, 1320px"
          priority
        />
      </figure>

      <SectionHeading kicker="The system" title="The film's voice, tiled for the feed.">
        <Prose>
          The campaign is a visual system built from the film&apos;s raw
          materials: character quotes set against Ava&apos;s machinery,
          assembly-code fragments, character &ldquo;spec sheets,&rdquo; and
          real warnings about artificial intelligence from voices like Musk,
          Gates, and Nietzsche&apos;s ghost — the line between promotion and
          provocation kept deliberately thin.
        </Prose>
      </SectionHeading>
      <FlowStrip
        src="/images/exmachina/grid-1.jpg"
        alt="Eight social campaign tiles mixing film stills, character quotes, code fragments, and AI warnings"
        caption="The campaign system: quotes, character reads, and code."
        width={1766}
        height={929}
      />
      <FlowStrip
        src="/images/exmachina/grid-2.jpg"
        alt="Eight more campaign tiles featuring Ava, Caleb, and Nathan with quotes from Bill Gates and Nietzsche"
        caption="Every tile pulls from the same system — the film sells itself by arguing with you."
        width={1766}
        height={929}
      />
    </CaseStudyLayout>
  );
}

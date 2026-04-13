"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { useAboutModal } from "./AboutModal";

const capabilities = [
  "Product Strategy",
  "Product Design",
  "Design Systems",
  "Prototyping",
  "Team Building",
  "AI + Emerging Tech",
] as const;

const bulletPoints = [
  "Shape product strategy and turn ambiguity into a clear, shippable plan.",
  "Design and prototype at high fidelity to validate ideas before you build.",
  "Work directly with your engineers to move fast without sacrificing craft.",
  "Build and scale a design function that grows with the company.",
] as const;

export function AboutSection() {
  const aboutModal = useAboutModal();

  return (
    <section
      id="about"
      className="scroll-mt-10 px-5 py-12 tablet:py-20 tablet:px-10"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* About — two-column layout */}
        <div className="flex flex-col gap-10 md:flex-row md:gap-16 md:items-center">
          {/* Photo column */}
          <div className="shrink-0 md:w-[350px] lg:w-[400px]">
            <Image
              src="/images/simon_pfp.jpg"
              alt="Simon Leyton"
              width={400}
              height={500}
              className="w-full rounded-[20px] object-cover"
            />
          </div>

          {/* Text column */}
          <div className="flex-1">
            <p
              className="mb-8 font-heading font-normal leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              <span className="text-[#000000] dark:text-white">Miami based design leader at Zillow.</span>{" "}
              <span className="text-black/60 dark:text-white/70">Previously Meta and Hulu.</span>
            </p>

            <button
              onClick={aboutModal.open}
              className="inline-flex items-center gap-1 text-base tablet:text-xl text-foreground transition-opacity duration-200 hover:opacity-60"
            >
              Learn more
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="mt-14 tablet:mt-20 flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
          <h3 className="shrink-0 font-heading text-[24px] tablet:text-[30px] font-normal leading-[1.3] tracking-[-0.02em] text-black dark:text-white">
            Capabilities
          </h3>
          <div className="flex flex-wrap gap-3">
            {capabilities.map((capability) => (
              <span
                key={capability}
                className="inline-flex rounded-full border border-black/20 px-5 py-2.5 text-base tablet:px-10 tablet:py-5 tablet:text-4xl leading-tight text-black/60 dark:border-white/20 dark:text-white/60"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

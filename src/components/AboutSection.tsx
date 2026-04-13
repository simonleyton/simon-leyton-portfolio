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
      className="scroll-mt-10 px-5 py-20 tablet:py-32 tablet:px-10"
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
            <p className="font-[family-name:var(--font-inter)] mb-4 text-xs uppercase tracking-[0.2em] text-black/50 dark:text-white/50">
              About
            </p>
            <p
              className="mb-8 font-heading font-normal leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
            >
              <span className="block text-[#000000] dark:text-white">Miami based design leader at Zillow.</span>
              <span className="block text-black/60 dark:text-white/70">Previously Meta and Hulu.</span>
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
        <div className="mt-16 tablet:mt-20">
          <p className="font-[family-name:var(--font-inter)] mb-4 text-xs uppercase tracking-[0.2em] text-black/50 dark:text-white/50">
            Capabilities
          </p>
          <h2 className="mb-10 font-heading font-normal leading-[1.1] tracking-[-0.02em] text-foreground text-[32px] md:text-[48px] lg:text-[64px]">
            What I do.
          </h2>
          <div className="flex flex-wrap gap-3">
            {capabilities.map((capability) => (
              <span
                key={capability}
                className="inline-flex rounded-full border border-black/20 px-5 py-2.5 text-base tablet:px-6 tablet:py-3 tablet:text-xl leading-tight text-black/60 dark:border-white/20 dark:text-white/60"
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

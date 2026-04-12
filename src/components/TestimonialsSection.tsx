"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Gabe zipped in to our team seamlessly, brought well researched insights and strategic thinking to every concept, and polished the details to a high-shine. We are extremely pleased with the work — not only the output but the process to get there.",
    name: "Meghan Harvey",
    title: "Co-Founder, Bindery Books",
    image: "/images/testimonial-5.png",
    linkedin: "https://www.linkedin.com/in/meghanharvey/",
  },
  {
    quote:
      "Gabe is a superb designer. He grasps what we are seeking to build and is lightning fast at turning our thoughts into designs. This facilitates a quick feedback cycle leading to designs we are all happy with in an impressively short period of time.",
    name: "Greg Dooley",
    title: "Engineering Partner, GV",
    image: "/images/testimonial-3.png",
    linkedin: "https://www.linkedin.com/in/gregdooley/",
  },
  {
    quote:
      "I cannot recommend Gabe enough. Truly world-class in every sense of the word. From helping to visualize an ambitious product story & vision, to playing an active role in bringing on senior full-time talent, and everything in between — Gabe can seemingly do it all. Our product, team, culture, and customers are in a stronger position thanks to our time together.",
    name: "Jinen Kamdar",
    title: "CPO, Gather",
    image: "/images/testimonial-2.png",
    linkedin: "https://www.linkedin.com/in/jinenkamdar/",
  },
  {
    quote:
      "I was blown away by Gabe\u2019s ability to quickly synthesize complexity and simplify it for different audiences. Working with Gabe was both fun and productive. Delivery of high quality at high velocity is his superpower.",
    name: "Natasha Awasthi",
    title: "Ritual Dental",
    image: "/images/natasha-awasthi-1.webp",
    linkedin: "https://www.linkedin.com/in/natasha-awasthi-7070572",
  },
  {
    quote:
      "Gabe is an exceptional 0 \u2192 1 design thinker and partner to early-stage founders. He made major contributions to our brand identity and key features. Highly recommend!",
    name: "Sandeep Rajan",
    title: "Grandstand",
    image: "/images/sandeep-rajan-1.jpg",
    linkedin: "https://www.linkedin.com/in/sandeepayyappan/",
  },
  {
    quote:
      "Gabe is a master at taming the chaos of the 0 \u2192 1 process. He has the rare ability to jump into the early stages of open-ended projects and rapidly develop structure and systems. He is proactive, works with little to no direction — and he is also very fast!",
    name: "Tanuj Lalwani",
    title: "Daylight",
    image: "/images/tanuj-lalwani-1.jpg",
    linkedin: "https://www.linkedin.com/in/tanujlalwani/",
  },
];

export function TestimonialsSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="mx-auto max-w-[1400px] px-5 tablet:px-10">
        <h2
          className={cn(
            "font-heading text-[30px] font-normal",
            "text-[color:var(--color-content)]",
            "mb-6"
          )}
        >
          In their words
        </h2>
      </div>

      <div
        className={cn(
          "mx-auto max-w-[1400px] hscroll-masked",
          "overflow-x-auto snap-x snap-mandatory",
          "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        )}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div
          className={cn(
            "flex items-stretch w-max",
            "px-5 tablet:px-10",
            "gap-8 tablet:gap-10"
          )}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className={cn(
                "shrink-0 snap-center",
                "w-[calc(100vw-40px)] tablet:w-[480px]",
                "bg-[color:var(--color-bg-alt)]",
                "rounded-[20px] tablet:rounded-[30px] desktop:rounded-[40px]",
                "p-6 tablet:p-8 desktop:p-10",
                "flex flex-col h-full"
              )}
            >
              <p
                className={cn(
                  "text-[18px] tablet:text-[22px] desktop:text-[26px]",
                  "leading-[1.4] font-normal",
                  "text-[color:var(--color-content)]",
                  "flex-1 pb-10"
                )}
                style={{ textIndent: "-0.4em" }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "block text-[14px] tablet:text-[16px] font-semibold",
                      "text-[color:var(--color-content)]",
                      "hover:opacity-60 transition-opacity"
                    )}
                  >
                    {testimonial.name}
                  </a>
                  <span className="block text-[14px] tablet:text-[16px] text-[color:var(--color-muted-text)]">
                    {testimonial.title}
                  </span>
                </div>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover w-10 h-10 tablet:w-12 tablet:h-12"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

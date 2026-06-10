import { cn } from "@/lib/utils";

const approaches = [
  {
    title: "Systems over screens",
    description:
      "I design the system behind the screen: components, slots, and conditional logic that hold up as contexts multiply.",
  },
  {
    title: "Strategy made tangible",
    description:
      "I turn vague directions into prototypes teams can react to, so alignment comes from seeing the work, not debating it.",
  },
  {
    title: "Influence without authority",
    description:
      "I earn trust by showing up prepared, sharing early, and making the people I partner with look good.",
  },
  {
    title: "Craft is the argument",
    description:
      "The quality of the work is the most persuasive case for it. Polished, well-reasoned artifacts win the room.",
  },
  {
    title: "AI as a design material",
    description:
      "I prototype with Claude, Figma Make, and code to explore faster and shape AI-driven products. I build with AI, not just about it.",
  },
  {
    title: "Always learning",
    description:
      "I study how Airbnb, Stripe, and Duolingo run design, building toward leadership while shipping as a senior IC.",
  },
];

export function ApproachSection() {
  return (
    <section className="py-16 tablet:py-20">
      <div className="mx-auto max-w-[1400px] px-5 tablet:px-10">
        <h2 className="mb-10 font-heading font-normal leading-[1.1] tracking-[-0.02em] text-foreground text-[32px] md:text-[48px] lg:text-[64px]">
          How I work
        </h2>

        <div
          className={cn(
            "grid grid-cols-1 gap-x-10 gap-y-12",
            "tablet:grid-cols-2",
            "desktop:grid-cols-3"
          )}
        >
          {approaches.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <h3 className="text-lg tablet:text-xl font-bold leading-tight text-foreground">
                {item.title}
              </h3>
              <p className="text-base tablet:text-lg leading-[1.55] text-[color:var(--color-muted-text)] text-pretty">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

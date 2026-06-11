import { cn } from "@/lib/utils";

const approaches = [
  {
    title: "Ambiguity is the job",
    description:
      "I'm most useful before the brief exists — turning open questions into prototypes people can react to, so alignment comes from seeing the work, not debating it.",
  },
  {
    title: "Systems over screens",
    description:
      "I design the system behind the screen — components, states, and logic that hold up as contexts multiply and other teams build on top.",
  },
  {
    title: "AI is a material, not a feature",
    description:
      "I prototype in code with Claude daily and ship small changes without an engineering handoff. The fastest way to understand an AI product is to build one.",
  },
  {
    title: "Craft is the argument",
    description:
      "Quality is the most persuasive case for a direction. I sweat the last 10% because that's the part people feel.",
  },
  {
    title: "Trust is the real velocity",
    description:
      "I share work early and unpolished, listen for the concern underneath the comment, and make my partners look good. Teams move at the speed of trust, not process.",
  },
  {
    title: "Outcomes over output",
    description:
      "I make the case for design in the language of the business — conversion, retention, support load — and stay in the metrics after launch, because shipping is the midpoint, not the finish.",
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
          {approaches.map((item, index) => (
            <div key={item.title} className="flex flex-col gap-2">
              <span className="text-sm tabular-nums text-[color:var(--color-muted-text)]">
                {String(index + 1).padStart(2, "0")}
              </span>
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

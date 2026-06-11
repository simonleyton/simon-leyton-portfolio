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
        <h2 className="pb-5 tablet:pb-10 text-[22px] font-normal leading-[1.3] tracking-[-0.03em] text-foreground">
          How I work
        </h2>

        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 tablet:gap-10 desktop:grid-cols-3 desktop:gap-20">
          {approaches.map((item, index) => (
            <div key={item.title} className="flex items-start gap-5">
              <span className="w-[28px] shrink-0 text-[20px] tabular-nums text-foreground opacity-50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-[20px] leading-[1.5] text-[color:var(--color-muted-text)]">
                <strong className="font-bold text-foreground">
                  {item.title}.
                </strong>{" "}
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

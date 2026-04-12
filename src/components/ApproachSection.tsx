import { cn } from "@/lib/utils";

const approaches = [
  {
    number: "01",
    title: "Systems over screens.",
    description:
      "I design components, patterns, and frameworks that scale. A list card is not a card. It is a system of slots, tiers, and conditional logic that adapts across contexts.",
  },
  {
    number: "02",
    title: "Strategy made tangible.",
    description:
      "I turn ambiguous product directions into interactive prototypes and visual artifacts that create alignment. Vision decks, coded prototypes, and design walkthroughs are how I move teams forward.",
  },
  {
    number: "03",
    title: "Influence without authority.",
    description:
      "I build trust across functions by showing up prepared, sharing work early, and making my partners look good. I treat every cross functional interaction as a design opportunity.",
  },
  {
    number: "04",
    title: "Craft is the argument.",
    description:
      "I believe the quality of the work is the most persuasive case for design\u2019s value. Polished, well reasoned design artifacts earn the seat at the table that no amount of advocacy alone can.",
  },
  {
    number: "05",
    title: "AI as a design material.",
    description:
      "I actively explore how AI tools, from Claude to Figma Make to coded prototypes, can elevate both the design process and the end user experience. I build with AI, not just about it.",
  },
  {
    number: "06",
    title: "Always be learning.",
    description:
      "I study how the best design organizations operate: Airbnb\u2019s release model, Stripe\u2019s quality rituals, Duolingo\u2019s CDO elevation. I\u2019m building the muscle for design leadership while delivering as a senior IC.",
  },
];

export function ApproachSection() {
  return (
    <section className="py-12 tablet:py-20">
      <div className="mx-auto max-w-[1400px] px-5 tablet:px-10">
        <h2 className="mb-10 font-heading text-[24px] tablet:text-[30px] font-normal text-foreground">
          Approach
        </h2>

        <div
          className={cn(
            "grid grid-cols-1 gap-10",
            "tablet:grid-cols-2",
            "desktop:grid-cols-3"
          )}
        >
          {approaches.map((item) => (
            <div key={item.number} className="flex gap-5">
              <span
                className={cn(
                  "shrink-0 w-[28px] text-base tablet:text-xl tabular-nums font-normal",
                  "text-[#757575]"
                )}
              >
                {item.number}
              </span>
              <p className="text-base tablet:text-xl leading-[1.6] text-[#757575]">
                <strong className="font-bold">{item.title}</strong>{" "}
                <span className="font-normal">{item.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

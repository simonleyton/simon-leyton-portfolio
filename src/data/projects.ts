export type Project = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

/* Case studies — real, written work only. The hero features the first three;
   /work lists them all. */
export const caseStudies: Project[] = [
  {
    title: "Zillow · Lifestyle Insights",
    subtitle: "Find a place that fits your life",
    image: "/images/zillow/card-v4.png",
    href: "/work/zillow-lifestyle-insights",
  },
  {
    title: "Zillow · Commute",
    subtitle: "Your whole day, on the map",
    image: "/images/zillow-commute/card.png",
    href: "/work/zillow-commute",
  },
  {
    title: "Hulu · Plan Select",
    subtitle: "The plan picker behind Hulu's largest win",
    image: "/images/hulu-plan-select/card.png",
    href: "/work/hulu-plan-select",
  },
];

/* Earlier work — interactive and brand campaigns, kept visually
   subordinate to the product case studies on /work. */
export const archive: Project[] = [];

export const featuredProjects = caseStudies.slice(0, 3);

export type Project = {
  title: string;
  subtitle: string;
  image: string;
  /* Optional hero-carousel override; the /work grid still uses `image`. */
  heroImage?: string;
  href: string;
};

/* Case studies — real, written work only. The hero features the first three;
   /work lists them all. */
export const caseStudies: Project[] = [
  {
    title: "Zillow · Lifestyle Insights",
    subtitle: "Find a place that fits your life",
    image: "/images/zillow/card-v4.png",
    heroImage: "/images/zillow/hero-lifestyle.jpg",
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
  {
    title: "Meta · People Portal",
    subtitle: "Navigation that thinks like employees do",
    image: "/images/meta-people-portal/card.png",
    href: "/work/meta-people-portal",
  },
];

/* Earlier work — interactive and brand campaigns, kept visually
   subordinate to the product case studies on /work. */
export const archive: Project[] = [
  {
    title: "True[X]",
    subtitle: "Interactive ads for brands worldwide",
    image: "/images/truex/card.jpg",
    href: "/work/truex",
  },
  {
    title: "Ex Machina",
    subtitle: "Social campaign for the award-winning thriller",
    image: "/images/exmachina/card.jpg",
    href: "/work/ex-machina",
  },
];

export const featuredProjects = caseStudies;

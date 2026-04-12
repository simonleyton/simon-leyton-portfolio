export interface Project {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
  linkedin: string;
}

export interface ClientLogo {
  name: string;
  logo: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ApproachItem {
  number: number;
  title: string;
  description: string;
}

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ApproachSection } from "@/components/ApproachSection";
import { ClientsSection } from "@/components/ClientsSection";
// TODO: Re-enable testimonials when Simon has quotes from collaborators
// import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-transparent">
        <Navigation />
      </div>
      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* The work is the hero: project cards ride directly on the Miami sky.
            The masthead + tagline sit in the corner (Navigation), theme-aware
            and effect-free, so the sky stays fully vibrant. */}
        <div className="bg-transparent">
          <HeroSection />
        </div>
        {/* Everything else sits on the floating paper card */}
        <div className="bg-background tablet:content-card max-w-[1400px] tablet:mx-auto tablet:mb-10 tablet:rounded-[30px] desktop:rounded-[40px] overflow-hidden">
          <AboutSection />
          <ApproachSection />
          <ClientsSection />
          {/* TODO: Re-enable testimonials when Simon has quotes from collaborators */}
          {/* <TestimonialsSection /> */}
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  );
}

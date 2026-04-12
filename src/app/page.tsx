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
      <div className="bg-background tablet:bg-transparent">
        <Navigation />
      </div>
      <div className="bg-background tablet:content-card max-w-[1400px] tablet:mx-auto tablet:my-10 tablet:rounded-[30px] desktop:rounded-[40px] overflow-hidden">
        <main>
          <HeroSection />
          <AboutSection />
          <ApproachSection />
          <ClientsSection />
          {/* TODO: Re-enable testimonials when Simon has quotes from collaborators */}
          {/* <TestimonialsSection /> */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

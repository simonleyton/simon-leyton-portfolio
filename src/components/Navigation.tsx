"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { useAboutModal } from "./AboutModal";

type SectionId = "hero" | "about" | "contact";

export function Navigation() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const aboutModal = useAboutModal();

  useEffect(() => {
    const sectionIds: SectionId[] = ["hero", "about", "contact"];
    const elements = sectionIds
      .map((id) => ({
        id,
        el: document.getElementById(id),
      }))
      .filter(
        (item): item is { id: SectionId; el: HTMLElement } => item.el !== null
      );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          setActiveSection(mostVisible.target.id as SectionId);
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    elements.forEach(({ el }) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const navPillBase =
    "rounded-full backdrop-blur-[40px] font-normal font-sans transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]";
  const activePill = "bg-black text-white dark:bg-white dark:text-black";
  const inactivePill =
    "bg-[rgba(240,240,240,0.6)] text-foreground hover:bg-[rgba(220,220,220,0.6)] dark:bg-[rgba(64,64,64,0.6)] dark:hover:bg-[rgba(80,80,80,0.6)]";
  const inactivePillMobile =
    "bg-[rgba(240,240,240,0.85)] text-black/80 dark:bg-[rgba(255,255,255,0.15)] dark:text-white/80";

  return (
    <>
      {/* Header / Name + mobile toggle */}
      <section className="flex items-center justify-between px-5 tablet:px-10 pt-6 tablet:pt-10 pb-10">
        <Link href="/" className="inline-block">
          <h1 className="font-heading text-[20px] font-normal text-foreground/60 hover:text-foreground/80 transition-colors">
            Simon Leyton
          </h1>
        </Link>
        <div className="tablet:hidden">
          <ThemeToggle />
        </div>
      </section>

      {/* Desktop nav — fixed top-right */}
      <nav
        className={cn(
          "fixed top-0 right-0 z-50",
          "hidden tablet:flex items-center gap-2.5",
          "p-10",
          // Fade out when modal is open
          "transition-opacity duration-300",
          aboutModal.isOpen && "opacity-0 pointer-events-none"
        )}
      >
        <Link
          href="/#hero"
          className={cn(navPillBase, "px-5 py-2.5 text-[20px]", activeSection === "hero" ? activePill : inactivePill)}
        >
          Work
        </Link>
        <Link
          href="/#about"
          className={cn(navPillBase, "px-5 py-2.5 text-[20px]", activeSection === "about" ? activePill : inactivePill)}
        >
          About
        </Link>
        <Link
          href="/#contact"
          className={cn(navPillBase, "px-5 py-2.5 text-[20px]", activeSection === "contact" ? activePill : inactivePill)}
        >
          Contact
        </Link>
        <ThemeToggle />
      </nav>

      {/* Mobile nav — fixed bottom */}
      <nav
        className={cn(
          "fixed bottom-0 left-0 right-0 z-[61]",
          "flex tablet:hidden justify-center",
          "gap-2 p-4 pb-[max(16px,env(safe-area-inset-bottom))]",
          "bg-gradient-to-t from-background via-background/80 to-transparent pt-10",
          // Slide down when modal is open
          "transition-all duration-300",
          aboutModal.isOpen && "translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <Link
          href="/#hero"
          className={cn(navPillBase, "px-5 py-2.5 text-[16px]", activeSection === "hero" ? activePill : inactivePillMobile)}
        >
          Work
        </Link>
        <Link
          href="/#about"
          className={cn(navPillBase, "px-5 py-2.5 text-[16px]", activeSection === "about" ? activePill : inactivePillMobile)}
        >
          About
        </Link>
        <Link
          href="/#contact"
          className={cn(navPillBase, "px-5 py-2.5 text-[16px]", activeSection === "contact" ? activePill : inactivePillMobile)}
        >
          Contact
        </Link>
      </nav>
    </>
  );
}

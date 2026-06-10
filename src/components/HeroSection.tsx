"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FolderIcon } from "@/components/icons";
import { featuredProjects } from "@/data/projects";

export function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showFade, setShowFade] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0, moved: false });

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;
    setShowFade(!atEnd);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  // Keyboard navigation — arrows scroll by one card, Home/End jump to ends
  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const step = firstCard ? firstCard.offsetWidth + 20 : el.clientWidth * 0.8; // 20px = gap-5
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        el.scrollBy({ left: step, behavior: "smooth" });
        break;
      case "ArrowLeft":
        e.preventDefault();
        el.scrollBy({ left: -step, behavior: "smooth" });
        break;
      case "Home":
        e.preventDefault();
        el.scrollTo({ left: 0, behavior: "smooth" });
        break;
      case "End":
        e.preventDefault();
        el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
        break;
    }
  }, []);

  // Mouse drag to scroll
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    dragState.current = { startX: e.pageX, scrollLeft: el.scrollLeft, moved: false };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const dx = e.pageX - dragState.current.startX;
      if (Math.abs(dx) > 3) dragState.current.moved = true;
      el.scrollLeft = dragState.current.scrollLeft - dx;
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging]);

  return (
    <section
      id="hero"
      className="scroll-mt-0 mx-auto max-w-[1400px] pt-4 pb-16 px-5 tablet:pt-8 tablet:pb-28 tablet:px-10"
    >
      {/* The work is the hero — the masthead + tagline live in the corner (Navigation). */}

      {/* Carousel */}
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Selected work — use the arrow keys to scroll"
        className={cn(
          "flex gap-5 overflow-x-auto pb-5",
          "no-scrollbar",
          "transition-[mask-image] duration-300",
          "rounded-[24px] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-4 focus-visible:ring-offset-background",
          isDragging ? "cursor-grabbing select-none" : "cursor-grab"
        )}
        style={{
          maskImage: showFade
            ? "linear-gradient(to right, black calc(100% - 80px), transparent)"
            : "none",
          WebkitMaskImage: showFade
            ? "linear-gradient(to right, black calc(100% - 80px), transparent)"
            : "none",
        }}
      >
        {/* Project cards */}
        {featuredProjects.map((project, index) => (
          <Link
            key={project.href}
            href={project.href}
            onClick={(e) => { if (dragState.current.moved) e.preventDefault(); }}
            draggable={false}
            className="group block flex-shrink-0 md:p-2 anim-card-reveal rounded-[24px] md:rounded-[34px] lg:rounded-[44px] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            style={{ animationDelay: `${500 + index * 100}ms` }}
          >
            <div
              className={cn(
                "rounded-[20px] md:rounded-[30px] lg:rounded-[40px]",
                "overflow-hidden",
                "bg-white/80 dark:bg-black/45 backdrop-blur-2xl",
                "border border-white/50 dark:border-white/10",
                "shadow-[0_8px_40px_rgba(10,9,8,0.16)]",
                "w-[280px] md:w-[350px] lg:w-[420px]"
              )}
            >
              {/* Image area */}
              <div className="aspect-square rounded-[14px] md:rounded-[26px] lg:rounded-[32px] overflow-hidden m-1.5 md:m-2 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 420px"
                />
              </div>

              {/* Text area below image */}
              <div className="px-5 pt-3 pb-6 md:px-6 md:pt-4 md:pb-8">
                <h3 className="font-normal text-xl md:text-2xl text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-base md:text-lg text-black/55 dark:text-white/55">{project.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}

        {/* Index card */}
        <Link
          href="/work"
          onClick={(e) => { if (dragState.current.moved) e.preventDefault(); }}
          draggable={false}
          className="group block flex-shrink-0 md:p-2 anim-card-reveal rounded-[24px] md:rounded-[34px] lg:rounded-[44px] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          style={{ animationDelay: `${500 + featuredProjects.length * 100}ms` }}
        >
          <div
            className={cn(
              "rounded-[20px] md:rounded-[30px] lg:rounded-[40px]",
              "overflow-hidden",
              "bg-white/80 dark:bg-black/45 backdrop-blur-2xl",
              "border border-white/50 dark:border-white/10",
              "shadow-[0_8px_40px_rgba(10,9,8,0.16)]",
              "w-[280px] md:w-[350px] lg:w-[420px]",
              "flex flex-col"
            )}
          >
            {/* Icon area matching image aspect-square */}
            <div className="aspect-square rounded-[14px] md:rounded-[26px] lg:rounded-[32px] overflow-hidden m-1.5 md:m-2 flex items-center justify-center bg-black/[0.03] dark:bg-white/[0.06]">
              <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 text-foreground">
                <FolderIcon />
              </div>
            </div>

            {/* Text area below */}
            <div className="px-5 pt-3 pb-6 md:px-6 md:pt-4 md:pb-8">
              <h3 className="font-normal text-xl md:text-2xl text-foreground">Index</h3>
              <p className="mt-1 text-base md:text-lg text-black/55 dark:text-white/55">View all projects</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

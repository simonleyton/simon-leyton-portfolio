"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FolderIcon } from "@/components/icons";

const projects = [
  {
    title: "Dex Camera",
    subtitle: "The language learning camera",
    image: "/images/dex.png",
    href: "/work/dex",
  },
  {
    title: "Daylight",
    subtitle: "A more caring computer",
    image: "/images/daylight.png",
    href: "/work/daylight",
  },
  {
    title: "Workmate",
    subtitle: "Your AI Executive Assistant",
    image: "/images/workmate.png",
    href: "/work/workmate",
  },
  {
    title: "Slingshot AI",
    subtitle: "Personalized AI counselor",
    image: "/images/slingshot.png",
    href: "/work/slingshot",
  },
  {
    title: "Patreon 2.0",
    subtitle: "Connecting creators with superfans",
    image: "/images/patreon.png",
    href: "/work/patreon",
  },
];

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
      className="scroll-mt-0 pt-0 px-5 md:pt-[60px] md:pb-[60px] md:px-10 lg:pt-20 lg:pb-0"
    >
      {/* Heading */}
      <h1
        className={cn(
          "font-heading font-normal leading-[1.1]",
          "text-[36px] tracking-[-1px]",
          "md:text-[60px] md:tracking-[-2px]",
          "lg:text-[100px] lg:tracking-[-4px]",
          "text-foreground mb-10"
        )}
      >
        Designing what comes next.
      </h1>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        className={cn(
          "flex gap-5 overflow-x-auto pb-5",
          "no-scrollbar",
          "transition-[mask-image] duration-300",
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
        {projects.map((project) => (
          <Link
            key={project.href}
            href={project.href}
            onClick={(e) => { if (dragState.current.moved) e.preventDefault(); }}
            draggable={false}
            className="group block flex-shrink-0 md:p-2"
          >
            <div
              className={cn(
                "rounded-[20px] md:rounded-[30px] lg:rounded-[40px]",
                "overflow-hidden bg-black/[0.03] dark:bg-white/[0.08]",
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
                <p className="mt-1 text-base md:text-lg text-black/40 dark:text-white/40">{project.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}

        {/* Index card */}
        <Link
          href="/work"
          onClick={(e) => { if (dragState.current.moved) e.preventDefault(); }}
          draggable={false}
          className="group block flex-shrink-0 md:p-2"
        >
          <div
            className={cn(
              "rounded-[20px] md:rounded-[30px] lg:rounded-[40px]",
              "overflow-hidden bg-black/[0.03] dark:bg-white/[0.08]",
              "w-[280px] md:w-[350px] lg:w-[420px]",
              "flex flex-col"
            )}
          >
            {/* Icon area matching image aspect-square */}
            <div className="aspect-square rounded-[14px] md:rounded-[26px] lg:rounded-[32px] overflow-hidden m-1.5 md:m-2 flex items-center justify-center">
              <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 text-foreground">
                <FolderIcon />
              </div>
            </div>

            {/* Text area below */}
            <div className="px-5 pt-3 pb-6 md:px-6 md:pt-4 md:pb-8">
              <h3 className="font-normal text-xl md:text-2xl text-foreground">Index</h3>
              <p className="mt-1 text-base md:text-lg text-black/40 dark:text-white/40">View all projects</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

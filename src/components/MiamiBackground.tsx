"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";
import Image from "next/image";

export function MiamiBackground() {
  const { theme } = useTheme();
  const [transitioning, setTransitioning] = useState(false);
  const isDay = theme === "light";

  // Temporarily enable will-change during transition
  useEffect(() => {
    setTransitioning(true);
    const timer = setTimeout(() => setTransitioning(false), 600);
    return () => clearTimeout(timer);
  }, [theme]);

  const willChange = transitioning ? ("opacity" as const) : ("auto" as const);

  return (
    <div className="fixed inset-0 -z-10 hidden tablet:block" aria-hidden="true">
      {/* Day layer */}
      <Image
        src="/images/bg/miami-day.png"
        alt=""
        fill
        priority={isDay}
        sizes="100vw"
        quality={85}
        className="object-cover transition-opacity duration-500 ease-in-out"
        style={{ opacity: isDay ? 1 : 0, willChange }}
      />
      {/* Night layer */}
      <Image
        src="/images/bg/miami-night.png"
        alt=""
        fill
        priority={!isDay}
        sizes="100vw"
        quality={85}
        className="object-cover transition-opacity duration-500 ease-in-out"
        style={{ opacity: isDay ? 0 : 1, willChange }}
      />
    </div>
  );
}

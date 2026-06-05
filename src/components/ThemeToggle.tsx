"use client";

import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className={cn(
        "grid place-items-center rounded-full",
        "h-9 w-9 tablet:h-11 tablet:w-11",
        "backdrop-blur-[40px] border",
        "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
        "bg-[rgba(245,244,240,0.78)] border-black/10 text-foreground hover:bg-[rgba(245,244,240,0.92)]",
        "dark:bg-[rgba(40,36,32,0.7)] dark:border-white/15 dark:hover:bg-[rgba(56,50,44,0.8)]"
      )}
    >
      {isLight ? (
        // Moon — switch to dark
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        // Sun — switch to light
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2v2.2M12 19.8V22M4.22 4.22l1.56 1.56M18.22 18.22l1.56 1.56M2 12h2.2M19.8 12H22M4.22 19.78l1.56-1.56M18.22 5.78l1.56-1.56" />
        </svg>
      )}
    </button>
  );
}

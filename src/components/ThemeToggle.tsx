"use client";

import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={cn(
        "rounded-full px-3 py-2 tablet:px-3.5 tablet:py-2.5",
        "text-[16px] tablet:text-[20px] leading-none",
        "backdrop-blur-[40px]",
        "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
        "bg-[rgba(240,240,240,0.6)] text-foreground hover:bg-[rgba(220,220,220,0.6)]",
        "dark:bg-[rgba(64,64,64,0.6)] dark:hover:bg-[rgba(80,80,80,0.6)]"
      )}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

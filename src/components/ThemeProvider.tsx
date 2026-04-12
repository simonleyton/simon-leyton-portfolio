"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

type Theme = "light" | "dark";
type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    setTheme(stored ?? getSystemTheme());
    setMounted(true);
  }, []);

  // Listen for system preference changes (only when no manual override)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Apply theme to <html> and swap favicons
  useEffect(() => {
    if (!mounted) return;
    const isDark = theme === "dark";
    const html = document.documentElement;
    html.classList.toggle("dark", isDark);
    html.setAttribute("data-theme", theme);

    // Swap favicon to match theme
    const svgIcon = document.querySelector<HTMLLinkElement>(
      'link[rel="icon"][type="image/svg+xml"]:not([media])'
    );
    if (svgIcon) svgIcon.href = isDark ? "/favicon-dark.svg" : "/favicon.svg";

    const appleIcon = document.querySelector<HTMLLinkElement>(
      'link[rel="apple-touch-icon"]:not([media])'
    );
    if (appleIcon)
      appleIcon.href = isDark
        ? "/apple-touch-icon-dark.png"
        : "/apple-touch-icon.png";
  }, [theme, mounted]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  // Prevent flash: render children only after mount
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

type AboutModalContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const AboutModalContext = createContext<AboutModalContextValue>({
  open: () => {},
  close: () => {},
  isOpen: false,
});

export function useAboutModal() {
  return useContext(AboutModalContext);
}

const bioParagraphs = [
  "Senior Product Designer at Zillow, where I lead a team shaping how people find their next home. Previously designed products for Meta, Hulu, and Salesforce.",
  "I'm drawn to problems where design can make something complex feel effortless.",
  "When I'm not designing, I'm usually planning the next trip. Munich and Rio are my favorites. I'll go back any chance I get.",
];

function ModalPanel({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Manage mount/unmount with animation
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      // Force reflow before adding animation class
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimating(true);
        });
      });
      document.body.style.overflow = "hidden";
    } else {
      setAnimating(false);
      document.body.style.overflow = "";
      // Wait for exit animation to finish before unmounting
      const timer = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-400 ease-out",
          animating ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={cn(
          "relative z-10 flex flex-col w-full",
          // Mobile: full screen
          "h-full",
          // Tablet+: centered card
          "tablet:h-auto tablet:max-h-[85vh] tablet:max-w-[900px] tablet:mx-4 tablet:rounded-[30px]",
          // Background
          "bg-background tablet:shadow-2xl",
          // Transition
          "transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
          animating
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-full tablet:translate-y-0 tablet:scale-[0.97]"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 tablet:px-10 tablet:py-6 border-b border-border/50 shrink-0">
          <div className="flex items-center gap-4">
            <span className="font-heading text-[20px] font-normal text-foreground/60">
              Simon Leyton
            </span>
            <span className="text-foreground/20">/</span>
            <h2 className="font-heading text-[20px] font-normal text-foreground">
              Bio
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={onClose}
              aria-label="Close"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black/[0.05] hover:bg-black/[0.1] dark:bg-white/[0.1] dark:hover:bg-white/[0.15] transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-foreground"
              >
                <path
                  d="M1 1L15 15M15 1L1 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-8 tablet:px-10 tablet:py-12">
          <div className="max-w-[680px] flex flex-col gap-6">
            {bioParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-base tablet:text-xl leading-[1.7] text-black/60 dark:text-white/70"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export function AboutModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    window.history.pushState(null, "", "/about");
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    window.history.pushState(null, "", "/");
  }, []);

  // Handle browser back button
  useEffect(() => {
    const handlePop = () => {
      if (window.location.pathname === "/about") {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  // Open if landing directly on /about
  useEffect(() => {
    if (window.location.pathname === "/about") {
      setIsOpen(true);
    }
  }, []);

  return (
    <AboutModalContext.Provider value={{ open, close, isOpen }}>
      {children}
      <ModalPanel isOpen={isOpen} onClose={close} />
    </AboutModalContext.Provider>
  );
}

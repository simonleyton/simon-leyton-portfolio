"use client";

import { useEffect, useRef } from "react";

/* A display title that scales to span its container width on one line —
   the Daylight-style hero header. Works for any title length at any
   viewport (short words go big, long ones fit), so it never overflows. */
export function FitTitle({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const fit = () => {
      // Measure at a known size, then scale to fill the container width.
      el.style.fontSize = "100px";
      const textWidth = el.scrollWidth;
      if (!textWidth) return;
      const target = Math.min(
        Math.max((parent.clientWidth / textWidth) * 100, 40),
        400
      );
      el.style.fontSize = `${target}px`;
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(parent);
    // Re-fit once the custom display font loads (first paint uses a fallback).
    document.fonts?.ready.then(fit).catch(() => {});
    return () => ro.disconnect();
  }, [text]);

  return (
    <h1
      ref={ref}
      className="font-heading font-normal tracking-[-0.04em] leading-[0.9] text-foreground whitespace-nowrap"
      style={{ fontSize: "clamp(52px, 14vw, 190px)" }}
    >
      {text}
    </h1>
  );
}

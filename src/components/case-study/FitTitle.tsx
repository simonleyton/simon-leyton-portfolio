"use client";

import { useEffect, useRef } from "react";

/* A display title that scales to span its container width on one line —
   the Daylight-style hero header. Works for any title length at any
   viewport (short words go big, long ones fit), so it never overflows.

   The title is inline-block so it shrinks to the text: measuring its width
   gives the TEXT width (a block element would just report the container
   width, which makes the scale collapse to 1x). */
export function FitTitle({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    let lastWidth = -1;

    const fit = (force = false) => {
      const containerWidth = parent.clientWidth;
      // React to container WIDTH changes only — resizing the title changes
      // the parent's height, which would otherwise loop.
      if (!force && containerWidth === lastWidth) return;
      lastWidth = containerWidth;
      el.style.fontSize = "100px";
      const textWidth = el.getBoundingClientRect().width;
      if (!textWidth) {
        lastWidth = -1;
        return;
      }
      const size = Math.min(
        Math.max((containerWidth / textWidth) * 100, 40),
        460
      );
      el.style.fontSize = `${size}px`;
    };

    fit(true);
    const ro = new ResizeObserver(() => fit());
    ro.observe(parent);
    // Re-fit once the display font loads (the first measure uses a fallback).
    document.fonts?.ready.then(() => fit(true)).catch(() => {});

    return () => ro.disconnect();
  }, [text]);

  return (
    <h1
      ref={ref}
      className="inline-block font-heading font-normal tracking-[-0.04em] leading-[0.9] text-foreground whitespace-nowrap"
      style={{ fontSize: "clamp(56px, 16vw, 200px)" }}
    >
      {text}
    </h1>
  );
}

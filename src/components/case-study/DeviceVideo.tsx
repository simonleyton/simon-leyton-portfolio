"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/* A prototype screen recording playing inside the canonical iPhone frame —
   the moving counterpart to Shot. Plays only while on screen (perf), and
   under reduced-motion it doesn't autoplay: the poster shows with controls. */
export function DeviceVideo({
  src,
  poster,
  label,
  caption,
}: {
  src: string;
  poster: string;
  label: string;
  caption?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      v.controls = true; // let the viewer opt into motion
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="flex flex-col">
      <div className="rounded-[20px] md:rounded-[26px] bg-black/[0.03] dark:bg-white/[0.05] p-3 md:p-5 flex items-center justify-center">
        <div className="relative w-full aspect-[1308/2712]">
          <video
            ref={ref}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={label}
            className="absolute object-cover"
            style={{
              left: "3.82%",
              top: "1.66%",
              width: "92.2%",
              height: "96.68%",
              borderRadius: "12.4% / 5.7%",
            }}
          />
          <Image
            src="/images/device/iphone-16-frame.png"
            alt=""
            fill
            className="object-contain pointer-events-none select-none"
            sizes="(max-width: 768px) 90vw, 420px"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-[color:var(--color-muted-text)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

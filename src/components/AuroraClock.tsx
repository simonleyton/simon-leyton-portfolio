"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/* A miniature of aurora-clock.vercel.app: an analog clock whose face is a
   light gradient, reading live time in a chosen city. Functional delight —
   it answers "what time is it where Simon is?" and links to the full piece. */

const CITIES = [
  { label: "Miami", zone: "America/New_York" },
  { label: "SF", zone: "America/Los_Angeles" },
  { label: "Paris", zone: "Europe/Paris" },
  { label: "Tokyo", zone: "Asia/Tokyo" },
] as const;

type City = (typeof CITIES)[number];

function timeInZone(zone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(new Date());
  const get = (type: string) =>
    Number(parts.find((p) => p.type === type)?.value ?? 0);
  return { h: get("hour") % 24, m: get("minute"), s: get("second") };
}

export function AuroraClock() {
  const [city, setCity] = useState<City>(CITIES[0]);
  const [now, setNow] = useState<{ h: number; m: number; s: number } | null>(
    null
  );

  useEffect(() => {
    const tick = () => setNow(timeInZone(city.zone));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [city]);

  // Render a fixed placeholder face until mounted (avoids hydration drift).
  const h = now?.h ?? 10;
  const m = now?.m ?? 10;
  const s = now?.s ?? 0;

  const minuteAngle = (m + s / 60) * 6;
  const hourAngle = ((h % 12) + m / 60) * 30;
  /* The face drifts through the day: deep blues at night, pink toward dusk. */
  const hue = ((h * 60 + m) / 1440) * 360;

  const display = now
    ? `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`
    : "—:—";

  return (
    <div className="flex items-center gap-5">
      <a
        href="https://aurora-clock.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Aurora Clock — open the full piece. Current time in ${city.label}: ${display}`}
        className="group block shrink-0 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <div
          className="relative h-[88px] w-[88px] rounded-full border-[5px] border-[#3a3a3c] shadow-[0_4px_18px_rgba(10,9,8,0.18)] transition-transform duration-300 group-hover:scale-[1.05]"
          style={{
            background: `linear-gradient(135deg,
              hsl(${(hue + 210) % 360} 90% 62%),
              hsl(${(hue + 270) % 360} 85% 60%),
              hsl(${(hue + 330) % 360} 88% 66%))`,
          }}
        >
          {/* crosshairs */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/20" />
          <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-black/20" />
          {/* hour hand */}
          <div
            className="absolute left-1/2 top-1/2 h-[24%] w-[9%] origin-bottom rounded-[2px] bg-[#f4f78a]"
            style={{
              transform: `translate(-50%, -100%) rotate(${hourAngle}deg)`,
              transformOrigin: "50% 100%",
            }}
          />
          {/* minute hand */}
          <div
            className="absolute left-1/2 top-1/2 h-[36%] w-[8%] origin-bottom rounded-[2px] bg-[#f3fbff]"
            style={{
              transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)`,
              transformOrigin: "50% 100%",
            }}
          />
          {/* hub */}
          <div className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0c0c0d]" />
        </div>
      </a>
      <div className="flex flex-col gap-1.5">
        <p className="text-base text-foreground tabular-nums" aria-live="off">
          {display}{" "}
          <span className="text-[color:var(--color-muted-text)]">
            in {city.label === "SF" ? "San Francisco" : city.label}
          </span>
        </p>
        <div className="flex gap-1" role="group" aria-label="Choose a city">
          {CITIES.map((c) => (
            <button
              key={c.label}
              type="button"
              onClick={() => setCity(c)}
              aria-pressed={c.label === city.label}
              className={cn(
                "rounded-full px-2.5 py-1 text-xs transition-colors outline-none",
                "focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                c.label === city.label
                  ? "bg-foreground text-background"
                  : "text-[color:var(--color-muted-text)] hover:text-foreground border border-foreground/15"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

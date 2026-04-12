import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dex Camera — Simon Leyton",
  description: "The language learning camera",
};

const teamAvatars = [
  { src: "/images/dex/reni-cao.jpg", alt: "Reni Cao" },
  { src: "/images/dex/charlie-zhang-1.jpg", alt: "Charlie Zhang" },
  { src: "/images/dex/susan-y.png", alt: "Susan Y" },
  { src: "/images/dex/aparna-dixit.jpg", alt: "Aparna Dixit" },
  { src: "/images/dex/daniel-chung.jpg", alt: "Daniel Chung" },
];

const services = ["PRODUCT DESIGN", "BRANDING", "STRATEGY"];

function VideoPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={`bg-black/[0.04] dark:bg-white/[0.06] rounded-[20px] md:rounded-[30px] flex items-center justify-center ${className ?? ""}`}
    >
      <div className="text-black/20 dark:text-white/20 flex flex-col items-center gap-2">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        <span className="text-xs uppercase tracking-wider">Video</span>
      </div>
    </div>
  );
}

function SectionHeading({ title, text }: { title: string; text: string }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-2 md:gap-6 lg:gap-10 py-8 md:py-12 lg:py-20">
      <div className="lg:col-span-2">
        <h3 className="font-heading text-[30px] font-normal text-foreground">
          {title}
        </h3>
      </div>
      <div className="lg:col-span-4">
        <p className="text-base md:text-lg leading-relaxed text-black/60 dark:text-white/60">
          {text}
        </p>
      </div>
    </div>
  );
}

function MediaImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="rounded-[20px] md:rounded-[30px] overflow-hidden h-full">
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={900}
        className="w-full h-full object-cover"
        sizes="(max-width: 768px) 100vw, 1400px"
      />
    </div>
  );
}

export default function DexCaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header — name top-left */}
      <section className="px-5 md:px-10 pt-6 md:pt-10 pb-10">
        <Link href="/" className="inline-block">
          <h3 className="font-heading text-[30px] font-normal text-foreground tracking-[-0.03em]">
            Simon Leyton
          </h3>
        </Link>
      </section>

      {/* Close button — fixed top-right like homepage nav */}
      <nav className="fixed top-0 right-0 z-50 p-5 md:p-10">
        <Link
          href="/#hero"
          className="bg-[rgba(240,240,240,0.6)] hover:bg-[rgba(220,220,220,0.6)] backdrop-blur-[40px] transition-colors rounded-full w-10 h-10 flex items-center justify-center"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </nav>

      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Title — text-fit to fill container width */}
        <div className="pb-20">
          {/* Mobile title */}
          <h1 className="font-heading text-[34px] font-normal tracking-[-0.04em] leading-[1.15] text-foreground md:hidden">
            Dex Camera
          </h1>
          {/* Desktop title — sized to fill width like original (278px at ~1320px container) */}
          <div className="hidden md:block overflow-visible font-heading">
            <span
              className="block whitespace-nowrap"
              style={{
                fontSize: "min(20vw, 278px)",
                lineHeight: 1.15,
                letterSpacing: "-0.04em",
                fontWeight: 400,
              }}
            >
              Dex Camera
            </span>
          </div>
        </div>

        {/* Content — flat 6-column grid matching original */}
        <div className="flex flex-col gap-20">
          {/* Block 0: Meta section */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
            <div className="flex-1">
              <p className="text-base md:text-lg leading-relaxed text-black/60 dark:text-white/60">
                Dex turns real-world moments into language lessons for kids 3-8.
                Instead of passive screen time, Dex invites kids to notice the
                world around them and talk back to it, transforming routines into
                learning opportunities. The result is a gentle rhythm of daily
                speaking, listening, and discovery that feels like play but
                compounds into real progress.
              </p>
            </div>
            <div className="flex-1 space-y-5">
              {/* Team */}
              <div>
                <h6 className="text-[14px] uppercase tracking-wider text-black/40 dark:text-white/40 mb-3">
                  Team
                </h6>
                <div className="flex">
                  {teamAvatars.map((avatar, i) => (
                    <div
                      key={avatar.alt}
                      className={`relative w-[30px] h-[30px] rounded-full overflow-hidden bg-black/[0.03] shrink-0 ${i > 0 ? "-ml-1" : ""}`}
                    >
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        fill
                        className="object-cover"
                        sizes="30px"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Services */}
              <div>
                <h6 className="text-[14px] uppercase tracking-wider text-black/40 dark:text-white/40 mb-3">
                  Services
                </h6>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="uppercase tracking-wider text-xs border border-foreground/20 rounded-full px-3 py-1"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              {/* Date */}
              <div>
                <h6 className="text-[14px] uppercase tracking-wider text-black/40 dark:text-white/40 mb-3">
                  Date
                </h6>
                <p className="text-base font-normal">2024 - 2026</p>
              </div>
            </div>
          </div>

          {/* Block 1: Content — uses gap-10 between items */}
          <div className="flex flex-col gap-5 md:gap-10">
            {/* Hero video → placeholder */}
            <VideoPlaceholder className="aspect-video w-full" />

            {/* Hardware — 2-col heading + paragraph */}
            <SectionHeading
              title="Hardware"
              text="We collaborated with XIVO Design to create device shaped like a handheld magnifying glass with a camera on one side and a multi-touch screen on the other. Two tactile buttons keep controls simple: one to confirm, one to cancel. The device also includes a microphone, speaker, and accelerometer. Unlike tablets that encourage passive sitting, Dex's form factor invites children to hold it and carry it during active exploration — transforming how they engage with their environment."
            />

            {/* dex-0 — full width */}
            <MediaImage src="/images/dex/dex-0.png" alt="Dex Camera hardware overview" />

            {/* dex-1 (4/6) + dex-2 (2/6) */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-10">
              <div className="md:col-span-4">
                <MediaImage src="/images/dex/dex-1.png" alt="Dex Camera detail views" />
              </div>
              <div className="md:col-span-2">
                <MediaImage src="/images/dex/dex-2.png" alt="Dex Camera packaging" />
              </div>
            </div>

            {/* Standalone text paragraph */}
            <div className="py-8 md:py-12 lg:py-20">
              <p className="text-base md:text-lg leading-relaxed text-black/60 dark:text-white/60 max-w-[700px]">
                Using Google Gemini 3, Daniel from my team was able to create a
                unified visual language for ads, packaging, and the website. The
                images kept the device shape, colors, and proportions stable
                while letting us swap families, moods, and settings so every
                photo felt real and part of the same world.
              </p>
            </div>

            {/* dex-4 + dex-3: 2 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <MediaImage src="/images/dex/dex-4.png" alt="Dex visual language 1" />
              <MediaImage src="/images/dex/dex-3.png" alt="Dex visual language 2" />
            </div>

            {/* dex-5 + dex-6: 2 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <MediaImage src="/images/dex/dex-5.png" alt="Dex brand imagery 1" />
              <MediaImage src="/images/dex/dex-6.jpg" alt="Dex brand imagery 2" />
            </div>

            {/* Character Design — 2-col heading + paragraph */}
            <SectionHeading
              title="Character Design"
              text="Children learn best when they connect with a character. We partnered with The Little Labs to design a friendly elephant who guides each activity and appears across our stories. The character greets kids, models tasks with simple cues, and celebrates progress with animations and audio. Consistent personality, voice, and pacing help build trust, so practice feels like a narrative that kids can follow and return to."
            />

            {/* dex-7 + dex-8: 2 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <MediaImage src="/images/dex/dex-7.png" alt="Dex character design 1" />
              <MediaImage src="/images/dex/dex-8.png" alt="Dex character design 2" />
            </div>

            {/* dex-10 — full width */}
            <MediaImage src="/images/dex/dex-10.png" alt="Dex character lineup" />

            {/* Audio Feedback — 2-col heading + paragraph */}
            <SectionHeading
              title="Audio Feedback"
              text="Dex uses playful sound design to give kids immediate, tangible feedback — a gentle chime for a correct word, a friendly nudge for another try. These audio cues make the learning loop feel responsive and rewarding without relying on a screen. Combined with the AI-driven conversational flow, every interaction feels like a small celebration of curiosity."
            />

            {/* 3 videos — equal thirds */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
              <VideoPlaceholder className="aspect-[3/4] w-full" />
              <VideoPlaceholder className="aspect-[3/4] w-full" />
              <VideoPlaceholder className="aspect-[3/4] w-full" />
            </div>

            {/* Prototypes — 2-col heading + paragraph */}
            <SectionHeading
              title="Prototypes"
              text="Before committing to final materials, we built a rapid series of prototypes — from foam models to 3D-printed enclosures — to test ergonomics, weight, and grip in the hands of 3-to-8 year-olds. Each round focused on a different variable: button placement, screen angle, and overall size. The process let us learn fast and converge on a form that felt intuitive even before a child turned it on."
            />

            {/* Prototypes video → placeholder */}
            <VideoPlaceholder className="aspect-video w-full" />

            {/* Parent copilot — 2-col heading + paragraph */}
            <SectionHeading
              title="Parent copilot"
              text="Dex includes a parent app that gives families clear visibility and transparency. I built a design system that extends the characters and visual language from the device into the app so it feels connected to the world children already know. The app needed to echo the playful tone kids recognize without feeling childish for parents. That meant rethinking color, scale, and motion so the character-driven style could guide parents through settings, activity logs, and controls in a way that felt intuitive and trustworthy. The result is an experience that feels like part of the same universe while still being built for the people managing it."
            />

            {/* 3 phone mockups — equal thirds with bg + padding */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
              <div className="bg-black/[0.03] dark:bg-white/[0.06] rounded-[20px] md:rounded-[30px] p-5 md:p-8 lg:p-10 flex items-center justify-center aspect-[9/16]" />
              <div className="bg-black/[0.03] dark:bg-white/[0.06] rounded-[20px] md:rounded-[30px] p-5 md:p-8 lg:p-10 flex items-center justify-center aspect-[9/16]" />
              <div className="bg-black/[0.03] dark:bg-white/[0.06] rounded-[20px] md:rounded-[30px] p-5 md:p-8 lg:p-10 flex items-center justify-center aspect-[9/16]" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-5 pb-20 text-center">
        <p className="text-xs uppercase tracking-widest text-black/60 dark:text-white/70">
          &copy; Simon Leyton
        </p>
      </footer>
    </div>
  );
}

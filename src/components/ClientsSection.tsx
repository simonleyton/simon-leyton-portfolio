import Link from "next/link";

/* TODO: Replace text placeholders with official SVG logo files in /public/images/logos/ */
const CLIENT_LOGOS = [
  "Apple",
  "Zillow",
  "Meta",
  "Disney",
  "21st Century Fox",
  "Hulu",
  "Shutterfly",
  "Whole Foods",
  "Calvin Klein",
  "Lincoln",
  "Fiat",
  "Watson DG",
  "Salesforce",
  "Fantasy",
];

function LogoItem({ logo, keyPrefix }: { logo: string; keyPrefix?: string }) {
  return (
    <div
      key={keyPrefix ? `${keyPrefix}-${logo}` : logo}
      className="flex shrink-0 items-center justify-center px-10 opacity-60"
    >
      {/* TODO: Replace text placeholder with official SVG logo for each company */}
      <span className="text-sm md:text-base font-semibold uppercase tracking-widest text-foreground whitespace-nowrap">
        {logo}
      </span>
    </div>
  );
}

export function ClientsSection() {
  return (
    <section className="overflow-hidden py-16 tablet:py-20">
      <div className="mx-auto mb-10 max-w-[1400px] px-5 tablet:px-10">
        <p className="font-[family-name:var(--font-inter)] mb-4 text-xs uppercase tracking-[0.2em] text-[var(--accent-coral)]">
          Clients
        </p>
        <div className="flex items-end justify-between">
          <h2 className="font-heading font-normal leading-[1.1] tracking-[-0.02em] text-foreground text-[32px] md:text-[48px] lg:text-[64px]">
            Companies I&apos;ve designed for.
          </h2>
          <Link
            href="/clients"
            className="text-sm text-black/60 transition-opacity duration-200 hover:opacity-50 dark:text-white/70"
          >
            View all &gt;
          </Link>
        </div>
      </div>

      <div className="marquee">
        <div
          className="marquee-track"
          style={{ "--marquee-speed": "80s" } as React.CSSProperties}
        >
          {CLIENT_LOGOS.map((logo) => (
            <LogoItem key={logo} logo={logo} />
          ))}
          {/* Duplicate for seamless loop */}
          {CLIENT_LOGOS.map((logo) => (
            <LogoItem key={`dup-${logo}`} logo={logo} keyPrefix="dup" />
          ))}
        </div>
      </div>
    </section>
  );
}

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
      className="flex shrink-0 items-center justify-center px-10 opacity-30"
    >
      {/* TODO: Replace text placeholder with official SVG logo for each company */}
      <span className="dark-invert text-sm md:text-base font-semibold uppercase tracking-widest text-foreground whitespace-nowrap">
        {logo}
      </span>
    </div>
  );
}

export function ClientsSection() {
  return (
    <section className="overflow-hidden py-12 tablet:py-20">
      <div className="mx-auto mb-10 flex max-w-[1400px] items-center justify-between px-5 tablet:px-10">
        <h2 className="font-heading text-[24px] tablet:text-[30px] font-normal text-foreground">
          Companies I&apos;ve Designed For
        </h2>
        <Link
          href="/clients"
          className="text-sm text-black/60 transition-opacity duration-200 hover:opacity-50 dark:text-white/70"
        >
          View all &gt;
        </Link>
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


// Official brand marks, rendered monochrome via CSS mask so every logo
// shares one foreground tint and adapts to dark mode.
// w/h are tuned per logo for optical balance, not mathematical cap-height.
const CLIENT_LOGOS = [
  { name: "Apple", src: "/images/logos/apple.svg", w: 30, h: 36 },
  { name: "Zillow", src: "/images/logos/zillow.svg", w: 122, h: 27 },
  { name: "Meta", src: "/images/logos/meta.svg", w: 129, h: 26 },
  { name: "Disney", src: "/images/logos/disney.svg", w: 100, h: 42 },
  { name: "21st Century Fox", src: "/images/logos/fox.svg", w: 114, h: 40 },
  { name: "Hulu", src: "/images/logos/hulu.svg", w: 76, h: 25 },
  { name: "Shutterfly", src: "/images/logos/shutterfly.svg", w: 113, h: 26 },
  { name: "Whole Foods Market", src: "/images/logos/wholefoods.svg", w: 46, h: 46 },
  { name: "Calvin Klein", src: "/images/logos/calvinklein.svg", w: 117, h: 22 },
  { name: "Lincoln", src: "/images/logos/lincoln.svg", w: 100, h: 38 },
  { name: "Fiat", src: "/images/logos/fiat.svg", w: 42, h: 42 },
  { name: "Watson DG", src: "/images/logos/watsondg.svg", w: 34, h: 34 },
  { name: "Salesforce", src: "/images/logos/salesforce.svg", w: 60, h: 42 },
  { name: "Fantasy", src: "/images/logos/fantasy.svg", w: 155, h: 14 },
];

type ClientLogo = (typeof CLIENT_LOGOS)[number];

function LogoItem({ logo }: { logo: ClientLogo }) {
  return (
    <div
      role="img"
      aria-label={logo.name}
      className="flex h-12 shrink-0 items-center justify-center px-10"
    >
      <span
        aria-hidden="true"
        className="block bg-foreground/55"
        style={{
          width: logo.w,
          height: logo.h,
          WebkitMaskImage: `url(${logo.src})`,
          maskImage: `url(${logo.src})`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
    </div>
  );
}

export function ClientsSection() {
  return (
    <section className="overflow-hidden py-16 tablet:py-20">
      <div className="mx-auto mb-10 max-w-[1400px] px-5 tablet:px-10">
        <h2 className="font-heading text-[30px] font-normal text-foreground">
          Companies I&apos;ve designed for
        </h2>
      </div>

      <div className="marquee">
        <div
          className="marquee-track"
          style={{ "--marquee-speed": "80s" } as React.CSSProperties}
        >
          {CLIENT_LOGOS.map((logo) => (
            <LogoItem key={logo.name} logo={logo} />
          ))}
          {/* Duplicate for seamless loop */}
          {CLIENT_LOGOS.map((logo) => (
            <LogoItem key={`dup-${logo.name}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

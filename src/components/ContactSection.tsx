import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/icons";
import { AuroraClock } from "@/components/AuroraClock";

const EMAIL = "simonleyton@gmail.com";

/* Secondary links — email is promoted to the primary CTA below. */
const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/simonleyton",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/leytonsimon",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 tablet:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-6 md:gap-10">
          {/* Heading */}
          <div className="md:col-span-2 flex items-start">
            <h2 className="font-heading text-[30px] font-normal text-foreground">
              Contact
            </h2>
          </div>

          {/* Honest, static contact block */}
          <div className="md:col-span-4 flex flex-col gap-10">
            {/* One line of intent */}
            <p
              className="font-heading font-normal leading-[1.2] tracking-[-0.02em] text-foreground text-balance"
              style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
            >
              Open to leading design where the product ambition is high.
              <span className="text-black/55 dark:text-white/55"> If that&rsquo;s you, let&rsquo;s talk.</span>
            </p>

            {/* Primary CTA — email */}
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex w-fit items-center gap-2 text-2xl tablet:text-3xl font-heading font-normal tracking-[-0.02em] text-foreground transition-opacity duration-200 hover:opacity-60"
            >
              {EMAIL}
              <ArrowRightIcon className="-rotate-45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Secondary — social pills */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2.5 rounded-full",
                    "border border-black/15 dark:border-white/20",
                    "px-5 py-2.5 text-base tablet:text-lg leading-tight",
                    "text-black/60 dark:text-white/60",
                    "hover:text-foreground hover:border-black/30 dark:hover:border-white/40",
                    "transition-colors"
                  )}
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>

            {/* Local time — a working miniature of Aurora Clock */}
            <AuroraClock />
          </div>
        </div>
      </div>
    </section>
  );
}

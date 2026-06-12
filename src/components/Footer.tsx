import { AuroraClock } from "@/components/AuroraClock";

export function Footer() {
  return (
    <footer className="px-5 pt-16 pb-24 tablet:px-10 tablet:pt-20 tablet:pb-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="border-t border-black/10 dark:border-white/10 pt-10 flex flex-col gap-6 tablet:flex-row tablet:items-center tablet:justify-between">
          <p className="text-sm text-black/65 dark:text-white/75">
            {`© ${new Date().getFullYear()} Simon Leyton · Built in Miami`}
          </p>
          <AuroraClock />
        </div>
      </div>
    </footer>
  );
}

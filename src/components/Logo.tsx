import { cn } from "@/lib/utils";
import { site } from "@/config/site";

/** Navbar brand mark: emblem image plus crisp CSS text. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo/navbar-emblem.png"
        alt={site.name}
        className="h-12 w-12 shrink-0 rounded-full object-cover drop-shadow-[0_0_10px_rgba(30,115,232,0.45)] sm:h-16 sm:w-16"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] font-black uppercase tracking-[0.04em] text-white sm:text-[1.9rem]">
          Sardar
        </span>
        <span className="mt-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#CBD5E1]">
          Duct Cleaning
        </span>
      </span>
    </span>
  );
}

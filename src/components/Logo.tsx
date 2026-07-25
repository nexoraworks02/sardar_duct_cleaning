import { cn } from "@/lib/utils";
import { site } from "@/config/site";

/**
 * Brand logo — the real Sardar lockup. The artwork sits on white, so it blends
 * seamlessly into the white (scrolled) navbar and reads as a clean, subtle white
 * plate over the dark hero and dark footer. No shadow, so no visible box on white.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center overflow-hidden rounded-lg bg-white p-1",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo/logo.png"
        alt={site.name}
        className="h-11 w-auto sm:h-14"
      />
    </span>
  );
}

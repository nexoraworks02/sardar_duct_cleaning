import { cn } from "@/lib/utils";
import { site } from "@/config/site";

/**
 * Brand logo — transparent PNG (no background/box). A soft drop-shadow gives it
 * a little depth over photos.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo/logo-transparent.png"
        alt={site.name}
        className="h-12 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] sm:h-16"
      />
    </span>
  );
}

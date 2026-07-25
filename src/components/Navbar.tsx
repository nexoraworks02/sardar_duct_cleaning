"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { nav, site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tel = `tel:${site.defaultPhone.replace(/[^\d+]/g, "")}`;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b-2 border-teal-100 shadow-[0_10px_30px_-14px_rgba(20,40,80,0.35)]"
          : "bg-transparent"
      )}
    >
      {/* Dark scrim so the logo/nav stay readable over the dark hero photo */}
      {!scrolled && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
      )}
      <Container className="relative z-10 flex h-20 items-center justify-between sm:h-24">
        <Link href="/" aria-label={site.name}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative text-xs font-bold uppercase tracking-[0.14em] transition-colors",
                scrolled
                  ? "text-ink hover:text-teal-600"
                  : "text-white/85 hover:text-white"
              )}
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-teal-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={tel}
            className={cn(
              "flex items-center gap-2 text-sm font-bold transition-colors",
              scrolled ? "text-teal-700 hover:text-teal-500" : "text-white hover:text-teal-200"
            )}
          >
            <Phone className="h-4 w-4" />
            {site.defaultPhone}
          </a>
          <Button href="/#quote" size="sm">
            Get a Free Quote
          </Button>
        </div>

        <button
          className={cn("lg:hidden p-2", scrolled ? "text-ink" : "text-white")}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-b-2 border-teal-100 shadow-lg">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:bg-teal-50"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={tel}
              className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-bold text-teal-700"
            >
              <Phone className="h-4 w-4" />
              {site.defaultPhone}
            </a>
            <div onClick={() => setOpen(false)}>
              <Button href="/#quote" className="mt-2 w-full">
                Get a Free Quote
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

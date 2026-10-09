import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";
import { costGuides } from "@/config/cost-guides";
import { provinces, site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Duct Cleaning Cost by City (2026 Price Guides)",
  description:
    "Local 2026 duct cleaning cost guides for cities across Canada — Toronto, Ottawa, Calgary, Vancouver, Montreal and more. Transparent prices, no surprises.",
  alternates: { canonical: "/duct-cleaning-cost" },
  openGraph: {
    title: `Duct Cleaning Cost by City (2026 Price Guides) | ${site.name}`,
    description:
      "Local 2026 duct cleaning cost guides for cities across Canada. Transparent prices from Sardar Duct Cleaning.",
    url: "/duct-cleaning-cost",
  },
};

export default function CostGuideHubPage() {
  const priceOf = (code: string) =>
    provinces.find((p) => p.code === code)?.priceFrom ?? 149;

  return (
    <div className="theme-dark relative min-h-screen">
      <section className="relative overflow-hidden pt-28 pb-4 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-[8%] h-[380px] w-[380px] rounded-full bg-[#3B6CBF]/5 blur-[120px]" />
          <div className="absolute right-[10%] top-[24%] h-[380px] w-[380px] rounded-full bg-[#AEBFD6]/5 blur-[120px]" />
        </div>
        <Container className="relative text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              2026 price guides
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Duct Cleaning Cost by City
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              What duct cleaning really costs where you live — honest local price
              ranges, what changes the price, and Sardar&apos;s transparent
              rates. Pick your city:
            </p>
          </Reveal>
        </Container>
      </section>

      <Section className="!pt-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {costGuides.map((g, i) => (
            <Reveal key={g.citySlug} delay={(i % 3) * 0.06}>
              <Link
                href={`/duct-cleaning-cost/${g.citySlug}`}
                className="group flex h-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-teal-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-ink">
                      {g.city}
                    </p>
                    <p className="text-sm text-ink-soft">
                      {g.provinceName} · from ${priceOf(g.provinceCode)}
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-teal-400 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-5 text-ink-soft">
            Prefer to just get your exact price?
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/#quote" size="lg">
              Book Your Cleaning
            </Button>
            <Button href="/blog" size="lg" variant="secondary">
              Read Our Guides
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

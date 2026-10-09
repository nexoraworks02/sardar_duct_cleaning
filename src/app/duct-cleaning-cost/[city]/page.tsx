import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { costGuides } from "@/config/cost-guides";
import { provinces, site } from "@/config/site";
import { cityPages, cityPath, provinceSlugOf } from "@/config/cities";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceFAQ } from "@/components/ServiceFAQ";

// Add-on prices mirror the booking calculator (single source of truth is
// QuoteCalculator.tsx; kept in sync here for the transparent price table).
const ADDONS = [
  { label: "Furnace Cleaning", price: 100 },
  { label: "AC Cleaning", price: 100 },
  { label: "Dryer Vent Cleaning", price: 50 },
  { label: "Filter Change", price: 50 },
  { label: "Brush Cleaning", price: 150 },
];

export function generateStaticParams() {
  return costGuides.map((g) => ({ city: g.citySlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const guide = costGuides.find((g) => g.citySlug === city);
  if (!guide) return {};
  return {
    title: { absolute: guide.metaTitle },
    description: guide.metaDescription,
    alternates: { canonical: `/duct-cleaning-cost/${guide.citySlug}` },
    openGraph: {
      type: "article",
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `/duct-cleaning-cost/${guide.citySlug}`,
    },
  };
}

// Minimal, safe bold renderer for **bold** inside prose.
function withBold(text: string, keyPrefix: string): React.ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={`${keyPrefix}-${i}`} className="font-semibold text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

export default async function CostGuidePage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const guide = costGuides.find((g) => g.citySlug === city);
  if (!guide) notFound();

  const priceFrom =
    provinces.find((p) => p.code === guide.provinceCode)?.priceFrom ?? 149;
  const cityPageEntry = cityPages.find((c) => c.citySlug === guide.citySlug);
  const servicePath = cityPageEntry
    ? cityPath(cityPageEntry)
    : `/service-areas/${provinceSlugOf(guide.provinceName)}`;
  const provincePath = `/service-areas/${provinceSlugOf(guide.provinceName)}`;
  const otherGuides = costGuides
    .filter((g) => g.citySlug !== guide.citySlug)
    .slice(0, 6);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Duct Cleaning Cost in ${guide.city} (2026 Price Guide)`,
    description: guide.metaDescription,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/duct-cleaning-cost/${guide.citySlug}`,
    image: `${site.url}/opengraph-image`,
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="theme-dark relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-6 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-[10%] h-[360px] w-[360px] rounded-full bg-[#3B6CBF]/5 blur-[120px]" />
          <div className="absolute right-[8%] top-[20%] h-[360px] w-[360px] rounded-full bg-[#AEBFD6]/5 blur-[120px]" />
        </div>
        <Container className="relative max-w-3xl">
          <Reveal>
            <Link
              href="/duct-cleaning-cost"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors hover:text-mint-400"
            >
              <ArrowLeft className="h-4 w-4" />
              All city cost guides
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              {guide.city}, {guide.provinceName} · 2026 Price Guide
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl">
              How Much Does Duct Cleaning Cost in {guide.city}?
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* Body */}
      <Container className="max-w-3xl pb-4">
        <p className="my-5 text-[1.05rem] leading-relaxed text-ink-soft">
          {withBold(guide.marketContext, "ctx")}
        </p>

        {/* Transparent price table */}
        <div className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="border-b border-white/10 bg-white/5 px-6 py-4">
            <h2 className="font-display text-lg font-semibold text-ink">
              Sardar pricing in {guide.city}
            </h2>
          </div>
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <p className="font-display font-semibold text-ink">
                Basic Package
              </p>
              <p className="text-sm text-ink-soft">
                Unlimited ducts &amp; vents, natural sanitizer, free inspections
              </p>
            </div>
            <p className="font-display text-2xl font-bold text-mint-400">
              ${priceFrom}
            </p>
          </div>
          <div className="border-t border-white/10 px-6 py-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-teal-700">
              Optional add-ons
            </p>
            <ul className="space-y-2">
              {ADDONS.map((a) => (
                <li
                  key={a.label}
                  className="flex items-center justify-between text-sm text-ink-soft"
                >
                  <span>{a.label}</span>
                  <span className="font-semibold text-ink">+${a.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          What affects duct cleaning cost in {guide.city}?
        </h2>
        <div className="space-y-4">
          {guide.factors.map((f) => (
            <div key={f.title} className="flex gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-mint-500" />
              <p className="text-ink-soft">
                <span className="font-semibold text-ink">{f.title}.</span>{" "}
                {f.text}
              </p>
            </div>
          ))}
        </div>

        <div className="my-10 rounded-2xl border border-teal-400/25 bg-teal-400/5 p-6 text-ink-soft">
          Want the full local picture? See our{" "}
          <Link
            href={servicePath}
            className="font-medium text-teal-700 underline decoration-teal-700/40 underline-offset-2 hover:text-mint-400"
          >
            {guide.city} duct cleaning page
          </Link>{" "}
          for what&apos;s included and the neighbourhoods we serve, or read the
          national{" "}
          <Link
            href="/blog/how-much-does-duct-cleaning-cost-canada"
            className="font-medium text-teal-700 underline decoration-teal-700/40 underline-offset-2 hover:text-mint-400"
          >
            2026 cost guide
          </Link>
          .
        </div>

        {/* Booking CTA */}
        <div className="my-12 rounded-3xl border border-white/10 bg-gradient-to-br from-[#14305a] to-[#060C17] p-8 text-center shadow-soft">
          <h2 className="font-display text-2xl font-bold text-white">
            Get your exact {guide.city} price
          </h2>
          <p className="mx-auto mt-3 max-w-md text-slate-200">
            Book in about a minute — transparent pricing from ${priceFrom}, no
            per-vent surprises.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/#quote" size="lg">
              Book Your Cleaning
            </Button>
            <Button href={servicePath} size="lg" variant="secondary">
              {guide.city} Service Details
            </Button>
          </div>
        </div>
      </Container>

      {/* FAQ */}
      <Section className="!pt-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {guide.city} duct cleaning cost — FAQs
          </h2>
          <ServiceFAQ faqs={guide.faqs} />
          <p className="mt-8 text-sm text-slate-400">
            Also serving nearby areas across{" "}
            <Link
              href={provincePath}
              className="text-teal-700 transition-colors hover:text-mint-400"
            >
              {guide.provinceName}
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* Other city guides */}
      <section className="border-t border-white/5 bg-white/[0.02] py-16">
        <Container className="max-w-5xl">
          <h2 className="mb-8 text-center font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Cost guides for other cities
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherGuides.map((g, i) => (
              <Reveal key={g.citySlug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/duct-cleaning-cost/${g.citySlug}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-teal-400/40"
                >
                  <span className="font-display font-semibold text-ink">
                    {g.city}
                  </span>
                  <ArrowRight className="h-4 w-4 text-teal-400 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

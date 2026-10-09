import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { blogPosts } from "@/config/blog";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Duct Cleaning Guides & Resources",
  description:
    "Practical guides on air duct cleaning — costs, how often to clean, warning signs, dryer-vent safety, and what to expect from a professional service across Canada.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Duct Cleaning Guides & Resources | ${site.name}`,
    description:
      "Honest, practical guides on duct cleaning costs, frequency, warning signs, and dryer-vent safety across Canada.",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;

  const fmt = (d: string) =>
    new Date(`${d}T00:00:00`).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="theme-dark relative min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-4 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-[8%] h-[380px] w-[380px] rounded-full bg-[#3B6CBF]/5 blur-[120px]" />
          <div className="absolute right-[10%] top-[24%] h-[380px] w-[380px] rounded-full bg-[#AEBFD6]/5 blur-[120px]" />
        </div>
        <Container className="relative text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              Guides &amp; resources
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Duct Cleaning, Explained
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Honest, practical answers to the questions homeowners actually ask
              — what duct cleaning costs, how often you really need it, and how
              to spot a quality job.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section className="!pt-10">
        {/* Featured post */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition-all hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-soft md:grid-cols-2"
          >
            <div className="flex items-center justify-center bg-gradient-to-br from-[#14305a] via-[#0e2140] to-[#060C17] p-10">
              <div className="text-center">
                <p className="font-display text-6xl font-bold text-white/90">
                  {featured.category}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-teal-700">
                  Featured guide
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-700">
                {featured.category}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-display font-semibold text-teal-700 transition-transform group-hover:translate-x-1">
                Read the guide
                <ArrowRight className="h-5 w-5" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Grid of the rest */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-700">
                  {post.category}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-teal-500" />
                    {fmt(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-teal-500" />
                    {post.readMins} min
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="mb-5 text-ink-soft">
            Ready to book, or want to check we serve your area?
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/#quote" size="lg">
              Book Your Cleaning
            </Button>
            <Button href="/service-areas" size="lg" variant="secondary">
              See Service Areas
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

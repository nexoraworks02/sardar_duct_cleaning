import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { blogPosts } from "@/config/blog";

// Homepage teaser for the /blog guides — the three highest-intent articles.
const FEATURED_SLUGS = [
  "how-much-does-duct-cleaning-cost-canada",
  "how-often-should-you-clean-air-ducts",
  "dryer-vent-cleaning-fire-safety",
];

export function Guides() {
  const posts = FEATURED_SLUGS.map((slug) =>
    blogPosts.find((p) => p.slug === slug)
  ).filter((p): p is (typeof blogPosts)[number] => Boolean(p));

  const fmt = (d: string) =>
    new Date(`${d}T00:00:00`).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <Section id="guides" className="border-y border-slate-200 bg-slate-50">
      <SectionHeading
        eyebrow="Helpful guides"
        title="Duct cleaning, explained"
        subtitle="Straight answers on cost, how often to clean, and what to look out for — before you book."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.08}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-lg border border-slate-200 border-l-4 border-l-teal-500 bg-white p-6 transition-all hover:-translate-y-1 hover:border-l-teal-600 hover:shadow-[0_16px_40px_-24px_rgba(20,40,80,0.5)]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-600">
                {post.category}
              </p>
              <h3 className="mt-3 font-display text-lg font-extrabold leading-snug text-ink">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-teal-500" />
                    {fmt(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-teal-500" />
                    {post.readMins} min
                  </span>
                </div>
                <ArrowRight className="h-5 w-5 text-teal-500 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/blog" size="lg" variant="secondary">
          View all guides
        </Button>
      </div>
    </Section>
  );
}

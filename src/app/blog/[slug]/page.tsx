import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import { blogPosts, type BlogBlock } from "@/config/blog";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceFAQ } from "@/components/ServiceFAQ";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

// Safe inline renderer: supports [label](/href) internal links and **bold**.
// No raw HTML — everything is React nodes, so nothing user-facing is injected.
function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      const label = m[1];
      const href = m[2];
      nodes.push(
        href.startsWith("/") ? (
          <Link
            key={`${keyPrefix}-${i}`}
            href={href}
            className="font-medium text-teal-700 underline decoration-teal-700/40 underline-offset-2 transition-colors hover:text-mint-400"
          >
            {label}
          </Link>
        ) : (
          <a
            key={`${keyPrefix}-${i}`}
            href={href}
            className="font-medium text-teal-700 underline underline-offset-2 hover:text-mint-400"
          >
            {label}
          </a>
        )
      );
    } else if (m[3] !== undefined) {
      nodes.push(
        <strong key={`${keyPrefix}-${i}`} className="font-semibold text-ink">
          {m[3]}
        </strong>
      );
    }
    last = regex.lastIndex;
    i++;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function Block({ block, i }: { block: BlogBlock; i: number }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 mb-3 font-display text-xl font-semibold text-ink">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="my-5 space-y-2.5">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 text-ink-soft">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint-500" />
              <span>{renderInline(item, `li-${i}-${j}`)}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="my-8 rounded-2xl border border-teal-400/25 bg-teal-400/5 p-6 text-ink-soft">
          {renderInline(block.text, `callout-${i}`)}
        </div>
      );
    default:
      return (
        <p className="my-5 leading-relaxed text-ink-soft">
          {renderInline(block.text, `p-${i}`)}
        </p>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const dateLabel = new Date(`${post.date}T00:00:00`).toLocaleDateString(
    "en-CA",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    image: `${site.url}/opengraph-image`,
  };

  const faqJsonLd = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <div className="theme-dark relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-8 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-[10%] h-[360px] w-[360px] rounded-full bg-[#3B6CBF]/5 blur-[120px]" />
          <div className="absolute right-[8%] top-[20%] h-[360px] w-[360px] rounded-full bg-[#AEBFD6]/5 blur-[120px]" />
        </div>
        <Container className="relative max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors hover:text-mint-400"
            >
              <ArrowLeft className="h-4 w-4" />
              All articles
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              {post.category}
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-teal-500" />
                {dateLabel}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-teal-500" />
                {post.readMins} min read
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Body */}
      <Container className="max-w-3xl pb-4">
        <article className="text-[1.05rem]">
          {post.body.map((block, i) => (
            <Block key={i} block={block} i={i} />
          ))}
        </article>

        {/* Inline booking CTA */}
        <div className="my-12 rounded-3xl border border-white/10 bg-gradient-to-br from-[#14305a] to-[#060C17] p-8 text-center shadow-soft">
          <h2 className="font-display text-2xl font-bold text-white">
            Ready to breathe cleaner air?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-slate-200">
            Book your duct cleaning in about a minute — transparent pricing,
            certified technicians, before-and-after photos.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/#quote" size="lg">
              Book Your Cleaning
            </Button>
            <Button href="/service-areas" size="lg" variant="secondary">
              See Service Areas
            </Button>
          </div>
        </div>
      </Container>

      {/* FAQ */}
      {post.faqs?.length ? (
        <Section className="!pt-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Frequently asked questions
            </h2>
            <ServiceFAQ faqs={post.faqs} />
          </div>
        </Section>
      ) : null}

      {/* Related */}
      <section className="border-t border-white/5 bg-white/[0.02] py-16">
        <Container className="max-w-5xl">
          <h2 className="mb-8 text-center font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Keep reading
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-teal-400/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-700">
                    {p.category}
                  </p>
                  <p className="mt-3 flex-1 font-display font-semibold leading-snug text-ink">
                    {p.title}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-transform group-hover:translate-x-1">
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

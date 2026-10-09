import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { serviceDetails } from "@/config/services";
import { cityPages, cityPath } from "@/config/cities";
import { provincePages } from "@/config/service-areas";
import { blogPosts } from "@/config/blog";
import { costGuides } from "@/config/cost-guides";

const siteUrl = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const servicePages: MetadataRoute.Sitemap = Object.keys(serviceDetails).map(
    (slug) => ({
      url: `${siteUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const provinceLandingPages: MetadataRoute.Sitemap = provincePages.map((p) => ({
    url: `${siteUrl}/service-areas/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cityLandingPages: MetadataRoute.Sitemap = cityPages.map((c) => ({
    url: `${siteUrl}${cityPath(c)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(`${p.date}T00:00:00`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const costGuidePages: MetadataRoute.Sitemap = costGuides.map((g) => ({
    url: `${siteUrl}/duct-cleaning-cost/${g.citySlug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/service-areas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/duct-cleaning-cost`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...servicePages,
    ...provinceLandingPages,
    ...cityLandingPages,
    ...blogPostPages,
    ...costGuidePages,
  ];
}

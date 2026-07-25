import type { MetadataRoute } from "next";
import { serviceDetails } from "@/config/services";
import { cityPages, cityPath } from "@/config/cities";
import { provincePages } from "@/config/service-areas";

const siteUrl = "https://sardarductcleaning.ca";

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
    ...servicePages,
    ...provinceLandingPages,
    ...cityLandingPages,
  ];
}

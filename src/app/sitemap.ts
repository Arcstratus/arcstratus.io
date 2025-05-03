import type { MetadataRoute } from "next";

const baseUrl = "https://arcstratus.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  // Add the root URL which redirects to the default locale
  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  });

  return sitemap;
}

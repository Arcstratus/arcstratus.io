import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arcstratus.io",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://arcstratus.io/en",
          tw: "https://arcstratus.io/zh",
        },
      },
    },
  ];
}

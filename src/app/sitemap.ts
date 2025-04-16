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
    {
      url: "https://arcstratus.io/news",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: "https://arcstratus.io/en/news",
          tw: "https://arcstratus.io/zh/news",
        },
      },
    },
    {
      url: "https://arcstratus.io/products",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
      alternates: {
        languages: {
          en: "https://arcstratus.io/en/products",
          tw: "https://arcstratus.io/zh/products",
        },
      },
    },
  ];
}

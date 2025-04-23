import { locales } from "@/i18n/utils";
import type { MetadataRoute } from "next";

// Base routes that are available in all languages
const routes = [
  "",
  "/about",
  "/services",
  "/products",
  "/products/unitobuy",
  "/products/island-voice",
  "/news",
  "/privacy",
  "/terms",
];

const baseUrl = "https://arcstratus.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  // Add the root URL which redirects to the default locale
  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        tw: `${baseUrl}/tw`,
      },
    },
  });

  // Add entries for each route in each language
  for (const locale of locales) {
    for (const route of routes) {
      const url = `${baseUrl}/${locale}${route}`;

      // Skip the root path for alternates as it's handled above
      const alternateLanguages: Record<string, string> = {};

      // Generate alternates for each language
      for (const altLocale of locales) {
        if (altLocale !== locale) {
          alternateLanguages[altLocale] = `${baseUrl}/${altLocale}${route}`;
        }
      }

      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: alternateLanguages,
        },
      });
    }
  }

  return sitemap;
}

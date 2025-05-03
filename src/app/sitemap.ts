import type { MetadataRoute } from "next";

const baseUrl = "https://arcstratus.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/how-to-cooperate",
    "/showcase",
    "/news",
    "/faq",
    "/contact",
    "/policy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}

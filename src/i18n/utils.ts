export const locales = ["en", "tw"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

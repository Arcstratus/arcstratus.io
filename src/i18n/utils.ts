export type Locale = "en" | "zh";

export const locales: Locale[] = ["en", "zh"];

export const defaultLocale: Locale = "zh";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  zh: () => import("./dictionaries/zh.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  try {
    return dictionaries[locale]();
  } catch {
    return dictionaries[defaultLocale]();
  }
};

export type I18nType = Promise<{ lang: Locale }>;

export type Locale = "en" | "tw";

export const locales: Locale[] = ["en", "tw"];

export const defaultLocale: Locale = "tw";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  tw: () => import("./dictionaries/tw.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  try {
    return dictionaries[locale]();
  } catch {
    return dictionaries[defaultLocale]();
  }
};

export type I18nType = Promise<{ lang: Locale }>;

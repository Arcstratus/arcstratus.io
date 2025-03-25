import "server-only";

export const locales = ["en", "tw"];

export const defaultLocale = "tw";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  tw: () => import("./dictionaries/tw.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "tw") => {
  try {
    return dictionaries[locale]();
  } catch {
    return dictionaries["tw"]();
  }
};

export type I18nType = Promise<{ lang: "en" | "tw" }>;

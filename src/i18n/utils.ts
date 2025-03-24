import { defaultLocale, type Locale } from "./config";
import en from "./locales/en.json";
import zhTW from "./locales/zh-TW.json";

const translations = {
  "zh-TW": zhTW,
  en: en,
};

export function getTranslations(locale: Locale = defaultLocale) {
  return translations[locale];
}

export function t(key: string, locale: Locale = defaultLocale) {
  const keys = key.split(".");
  let value: any = translations[locale];

  for (const k of keys) {
    if (value && typeof value === "object") {
      value = value[k];
    } else {
      return key;
    }
  }

  return value || key;
}

export function formatDate(date: Date, locale: Locale = defaultLocale) {
  return new Intl.DateTimeFormat(locale === "zh-TW" ? "zh-TW" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatNumber(number: number, locale: Locale = defaultLocale) {
  return new Intl.NumberFormat(locale === "zh-TW" ? "zh-TW" : "en-US").format(
    number
  );
}

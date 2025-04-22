import { Locale } from "@/i18n/utils";
import en from "./en.json";
import tw from "./tw.json";

const dictionaries = {
  en,
  tw,
};

export const getDictionary = (locale: Locale) => dictionaries[locale];

"use client";

import { createContext, useContext } from "react";
import { Locale } from "@/i18n/utils";

type DictionaryType = Record<string, any>;

interface I18nContextType {
  locale: Locale;
  dictionary: DictionaryType;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  children,
  locale,
  dictionary,
}: {
  children: React.ReactNode;
  locale: Locale;
  dictionary: DictionaryType;
}) {
  return (
    <I18nContext.Provider value={{ locale, dictionary }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

import { useCallback } from "react";
import { type Locale, defaultLocale } from "./config";
import { formatDate, formatNumber, t } from "./utils";

export function useTranslation(locale: Locale = defaultLocale) {
  const translate = useCallback((key: string) => t(key, locale), [locale]);

  const formatDateWithLocale = useCallback(
    (date: Date) => formatDate(date, locale),
    [locale]
  );

  const formatNumberWithLocale = useCallback(
    (number: number) => formatNumber(number, locale),
    [locale]
  );

  return {
    t: translate,
    formatDate: formatDateWithLocale,
    formatNumber: formatNumberWithLocale,
    locale,
  };
}

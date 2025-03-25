"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { locales, type Locale } from "@/i18n/utils";

const secondsInMonth = 60 * 60 * 24 * 30;

export async function changeLocale(locale: Locale) {
  if (!locales.includes(locale)) {
    return;
  }

  const cookieStore = await cookies();
  cookieStore.set("locale", locale, { maxAge: secondsInMonth });
  redirect(`/${locale}`);
}

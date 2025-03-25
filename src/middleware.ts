import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "@/i18n/utils";
import { cookies } from "next/headers";

const publicFiles = ["robots.txt", "sitemap.xml", "favicon.ico"];

const getPreferredLocale = async (request: NextRequest) => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value;
  if (locale && locales.includes(locale as Locale)) {
    return locale;
  }

  const acceptLanguage = request.headers.get("accept-language") || "";
  const negotiator = new Negotiator({
    headers: { "accept-language": acceptLanguage },
  });
  const languages = negotiator.languages();
  return match(languages, locales, defaultLocale);
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request is for a public file that should bypass localization
  const isPublicFile = publicFiles.some((file) => pathname === `/${file}`);
  if (isPublicFile) {
    return NextResponse.next();
  }

  // Check if there is any supported locale in the pathname
  const hasLocale = locales.some(
    (locale: string) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (hasLocale) {
    return NextResponse.next();
  }

  // Retrieve the preferred locale from the request headers
  const preferredLocale = await getPreferredLocale(request);
  const url = new URL(`/${preferredLocale}${pathname}`, request.url);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
};

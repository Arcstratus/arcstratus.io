import { defaultLocale, locales } from "@/i18n/utils";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

function getLocale(request: NextRequest): string {
  // Negotiator expects request headers to be plain objects
  const headers = Object.fromEntries(request.headers.entries());
  const negotiator = new Negotiator({ headers });
  const languages = negotiator.languages();

  // Try to match the user's preferred language with our supported locales
  try {
    return match(languages, locales, defaultLocale);
  } catch (error) {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Special case for root path: rewrite to English version without redirect
  if (pathname === "/") {
    request.nextUrl.pathname = "/en";
    return NextResponse.rewrite(request.nextUrl);
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // For other paths without locale, use negotiator to determine locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc) and specific files
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};

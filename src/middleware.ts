import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

const headers = { "accept-language": "en-US,en;q=0.5" };
const languages = new Negotiator({ headers }).languages();

const locales = ["en", "tw"];

const defaultLocale = "tw";

const publicFiles = ["robots.txt", "sitemap.xml", "favicon.ico"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request is for a public file that should bypass localization
  const isPublicFile = publicFiles.some((file) => pathname === `/${file}`);
  if (isPublicFile) {
    return NextResponse.next();
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale: string) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If there is no supported locale in the pathname, redirect to the default locale
  // e.g. incoming request is /products, the new URL is now /tw/products
  if (!pathnameHasLocale) {
    console.log(
      "no locale",
      languages,
      locales,
      defaultLocale,
      match(languages, locales, defaultLocale)
    );

    const locale = match(languages, locales, defaultLocale);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
};

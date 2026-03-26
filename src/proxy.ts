import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["tr", "en", "ru", "de"];
const defaultLocale = "tr";

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language") || "";
  for (const locale of locales) {
    if (acceptLang.includes(locale)) return locale;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|sitemap.xml|robots.txt|.*\\.).*)"],
};

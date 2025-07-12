import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ha már lokalizált, akkor ne irányítsuk át
  if (pathname.startsWith("/en") || pathname.startsWith("/hu") || pathname.startsWith("/ru")) {
    return NextResponse.next();
  }

  // Átirányítás az alapértelmezett nyelvre (pl. en)
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"], // minden útvonalra, kivéve a statikus
};

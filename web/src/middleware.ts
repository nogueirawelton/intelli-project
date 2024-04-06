import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("opa");
  const intl = createMiddleware({
    locales: ["pt", "en"],
    defaultLocale: "pt",
  });

  return intl(request);
}

export const config = {
  matcher: ["/", "/(pt|en)/:path*"],
};

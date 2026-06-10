import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { ACCESS_COOKIE, ACCESS_TOKEN } from "@/lib/access";

/* Site-wide password gate: every page redirects to /unlock until the
   access cookie is set by POST /api/unlock. Static assets are excluded. */
export function proxy(request: NextRequest) {
  if (request.cookies.get(ACCESS_COOKIE)?.value === ACCESS_TOKEN) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/unlock";
  url.search = "";
  const { pathname, search } = request.nextUrl;
  if (pathname !== "/") {
    url.searchParams.set("from", pathname + search);
  }
  return NextResponse.redirect(url);
}

export const config = {
  // Everything except the unlock page + endpoint, Next internals,
  // and static files (any path containing a dot).
  matcher: ["/((?!unlock|api/unlock|_next|.*\\..*).*)"],
};

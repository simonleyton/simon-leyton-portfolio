import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { ACCESS_COOKIE, ACCESS_TOKEN, SITE_PASSWORD } from "@/lib/access";

const THIRTY_DAYS = 60 * 60 * 24 * 30;

/* Only allow same-site relative redirect targets. */
function safeFrom(from: FormDataEntryValue | null): string {
  if (typeof from === "string" && from.startsWith("/") && !from.startsWith("//")) {
    return from;
  }
  return "/";
}

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const from = safeFrom(form.get("from"));

  if (form.get("password") !== SITE_PASSWORD) {
    const url = request.nextUrl.clone();
    url.pathname = "/unlock";
    url.search = "";
    url.searchParams.set("error", "1");
    if (from !== "/") url.searchParams.set("from", from);
    return NextResponse.redirect(url, 303);
  }

  const target = new URL(from, request.nextUrl.origin);
  const response = NextResponse.redirect(target, 303);
  response.cookies.set(ACCESS_COOKIE, ACCESS_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: THIRTY_DAYS,
  });
  return response;
}

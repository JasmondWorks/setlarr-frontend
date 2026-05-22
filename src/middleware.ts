import { NextRequest, NextResponse } from "next/server";

/**
 * Routes only accessible when the user's active role is "seller".
 * Accessing these as a buyer redirects to /unauthorized with a switch prompt.
 */
const SELLER_ONLY = [
  "/store",
  "/listings",
  "/analytics",
  "/new-listing",
  "/offers",
];

/**
 * Routes only accessible when the user's active role is "buyer".
 * Sellers can still browse these by switching modes.
 */
const BUYER_ONLY: string[] = [
  // "/saved",  // uncomment if saved items should be buyer-only
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── 1. Auth gate (wire up once the backend is integrated) ───────────────
  // const token = request.cookies.get("setlarr_token")?.value;
  // if (!token) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // ── 2. Role gate ────────────────────────────────────────────────────────
  const role = request.cookies.get("setlarr_role")?.value ?? "buyer";

  const needsSeller = SELLER_ONLY.some((r) => pathname.startsWith(r));
  const needsBuyer  = BUYER_ONLY.some((r)  => pathname.startsWith(r));

  if (needsSeller && role !== "seller") {
    const url = request.nextUrl.clone();
    url.pathname = "/unauthorized";
    url.searchParams.set("required", "seller");
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  if (needsBuyer && role !== "buyer") {
    const url = request.nextUrl.clone();
    url.pathname = "/unauthorized";
    url.searchParams.set("required", "buyer");
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all routes that need role checks, explicitly excluding:
     * - Next.js internals (_next/static, _next/image, favicon)
     * - The unauthorized page itself (would cause an infinite redirect)
     * - API routes
     */
    "/store/:path*",
    "/listings/:path*",
    "/analytics/:path*",
    "/new-listing/:path*",
    "/offers/:path*",
  ],
};

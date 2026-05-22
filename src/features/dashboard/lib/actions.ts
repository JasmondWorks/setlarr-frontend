"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const DEFAULT_ROUTES = {
  seller: "/store",
  buyer:  "/dashboard",
} as const;

/**
 * Sets the active app role cookie and redirects to the appropriate route.
 * Called from the tab toggle in DashboardShell and the "Switch role" button
 * on the unauthorized page.
 */
export async function switchRole(
  role: "buyer" | "seller",
  redirectTo?: string
) {
  const cookieStore = await cookies();

  cookieStore.set("setlarr_role", role, {
    path:     "/",
    maxAge:   60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
    sameSite: "lax",
    // secure: process.env.NODE_ENV === "production",
  });

  redirect(redirectTo ?? DEFAULT_ROUTES[role]);
}

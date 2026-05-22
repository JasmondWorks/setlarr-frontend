"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { switchRole } from "../lib/actions";
import { DashboardSidebar } from "../ui/DashboardSidebar";
import { DashboardHeader } from "../ui/DashboardHeader";

const SELLING_PATHS = ["/store", "/listings", "/analytics"];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const currentTab: "buying" | "selling" = SELLING_PATHS.some((p) =>
    pathname.startsWith(p)
  )
    ? "selling"
    : "buying";

  // switchRole sets the cookie server-side then redirects — no router.push needed.
  const handleTabChange = (tab: "buying" | "selling") => {
    setSidebarOpen(false);
    switchRole(tab === "buying" ? "buyer" : "seller");
  };

  React.useEffect(() => setSidebarOpen(false), [pathname])

  return (
    <div className="min-h-screen bg-neutral-50 flex">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-neutral-900/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 transition-transform duration-200 ease-in-out lg:static lg:z-auto lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <DashboardSidebar currentTab={currentTab} setCurrentTab={handleTabChange} />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader currentTab={currentTab} onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 w-full max-w-[1200px] mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

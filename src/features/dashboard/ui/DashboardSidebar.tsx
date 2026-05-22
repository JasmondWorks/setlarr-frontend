"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/base/Button";
import {
  Home, Compass, ShoppingBag, Heart, Wallet,
  LayoutDashboard, ListPlus, List, BarChart3,
  User, Settings, HelpCircle, LogOut,
  Tag, Sparkles, ShieldCheck, ChevronRight,
} from "lucide-react";
import NavItem from "@/shared/ui/components/NavItem";

export interface NavLink {
  label: string;
  icon: React.ElementType;
  href: string;
  badge?: string;
  dot?: boolean;
  special?: boolean;
}

interface SidebarProps {
  currentTab: "buying" | "selling";
  setCurrentTab: (tab: "buying" | "selling") => void;
  className?: string;
}

const buyingLinks: NavLink[] = [
  { label: "Home", icon: Home, href: "/dashboard" },
  { label: "Explore", icon: Compass, href: "/explore" },
  { label: "Orders", icon: ShoppingBag, href: "/orders", badge: "3" },
  { label: "Saved", icon: Heart, href: "/saved", badge: "12" },
  { label: "Wallet", icon: Wallet, href: "/wallet", dot: true },
];

const sellingLinks: NavLink[] = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/store" },
  { label: "My listings", icon: List, href: "/listings", badge: "14" },
  { label: "List new item", icon: ListPlus, href: "/new-listing", special: true },
  { label: "Orders", icon: ShoppingBag, href: "/store/orders", badge: "2" },
  { label: "Analytics", icon: BarChart3, href: "/analytics" },
];

const accountLinks: NavLink[] = [
  { label: "Profile", icon: User, href: "/profile" },
  { label: "Settings", icon: Settings, href: "/settings" },
  { label: "Help", icon: HelpCircle, href: "/help" },
];

export function DashboardSidebar({ currentTab, setCurrentTab, className }: SidebarProps) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const primaryLinks = currentTab === "buying" ? buyingLinks : sellingLinks;
  const sectionLabel = currentTab === "buying" ? "MAIN" : "STORE";

  return (
    <aside className={cn("w-[260px] border-r border-neutral-200/80 bg-white flex flex-col h-screen lg:sticky lg:top-0", className)}>

      {/* Fixed top: logo + tab toggle */}
      <div className="shrink-0 p-5 flex flex-col gap-4 border-b border-neutral-100 pt-20 lg:pt-5">
        <Link href="/" className="inline-flex items-center gap-[10px]" aria-label="Setlarr home">
          <span className="w-7 h-7 grid grid-cols-2 grid-rows-2 gap-[3px] shrink-0" aria-hidden="true">
            <span className="bg-primary-600 rounded-[3px]" />
            <span className="bg-primary-500 rounded-[3px]" />
            <span className="bg-primary-500 rounded-[3px]" />
            <span className="bg-primary-700 rounded-[3px]" />
          </span>
          <span className="text-lg font-semibold text-neutral-900 tracking-[-0.2px]">Setlarr</span>
        </Link>

        <div className="grid grid-cols-2 bg-neutral-100 p-1 rounded-md">
          {(["buying", "selling"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={cn(
                "flex items-center justify-center gap-2 py-2 text-[13px] font-semibold rounded-sm transition-all cursor-pointer",
                currentTab === tab
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-400 hover:text-neutral-700"
              )}
            >

              {tab === "buying"
                ? <ShoppingBag className={cn("w-3.5 h-3.5", currentTab === tab && 'text-primary-500')} />
                : <Tag className={cn("w-3.5 h-3.5", currentTab === tab && 'text-warning-500')} />}
              {tab === "buying" ? "Buying" : "Selling"}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable middle: nav links */}
      <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-5">
        <div>
          <p className="px-3 mb-2 text-2xs font-bold tracking-wider uppercase text-neutral-400">
            {sectionLabel}
          </p>
          <nav className="flex flex-col gap-0.5">
            {primaryLinks.map((link) => (
              <NavItem key={link.href} link={link} isActive={isActive} />
            ))}
          </nav>
        </div>

        <div>
          <p className="px-3 mb-2 text-2xs font-bold tracking-wider uppercase text-neutral-400">
            ACCOUNT
          </p>
          <nav className="flex flex-col gap-0.5">
            {accountLinks.map((link) => (
              <NavItem key={link.href} link={link} isActive={isActive} />
            ))}
          </nav>
        </div>
      </div>

      {/* Fixed bottom: promo + user */}
      <div className="shrink-0 border-t border-neutral-100">
        <div className="p-3">
          {currentTab === "buying" ? (
            <div className="flex items-center gap-3 bg-primary-50/70 border border-primary-100/50 rounded-xl px-3 py-2.5">
              <div className="w-7 h-7 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-primary-600" />
              </div>
              <span className="text-xs font-semibold text-neutral-800 leading-tight grow min-w-0">
                Earn ₦5,000 per friend
              </span>
              <Button size="sm" variant="primary" className="h-7 px-3 rounded-lg text-[11px] font-bold shrink-0 cursor-pointer gap-1">
                Invite <ChevronRight className="w-3 h-3" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3 bg-warning-50/70 border border-warning-100/50 rounded-xl px-3 py-2.5">
              <div className="w-7 h-7 rounded-lg bg-warning-100 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-warning-600" />
              </div>
              <span className="text-xs font-semibold text-neutral-800 leading-tight grow min-w-0">
                Verified sellers earn 3x more
              </span>
              <Button size="sm" variant="primary" className="h-7 px-3 rounded-lg text-[11px] font-bold shrink-0 bg-warning-600 hover:bg-warning-700 cursor-pointer gap-1">
                Verify <ChevronRight className="w-3 h-3 text-white" />
              </Button>
            </div>
          )}
        </div>

        <div className="px-4 py-3 border-t border-neutral-100 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-900 shrink-0">
            AO
          </div>
          <div className="grow min-w-0">
            <p className="text-[13px] font-bold text-neutral-900 truncate">Ada Okonkwo</p>
            <p className="text-2xs text-neutral-500 truncate">ada.okonkwo@gmail.com</p>
          </div>
          <button className="text-neutral-400 hover:text-error-600 transition-colors p-1 rounded-md hover:bg-neutral-50 cursor-pointer shrink-0" aria-label="Sign out">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}

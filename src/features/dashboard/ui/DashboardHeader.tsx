"use client";

import { InputField } from "@/shared/ui/base/InputField";
import { Bell, Search, ShoppingBag, Sparkles, Menu } from "lucide-react";

interface HeaderProps {
  currentTab: "buying" | "selling";
  onMenuClick?: () => void;
}

export function DashboardHeader({ currentTab, onMenuClick }: HeaderProps) {
  const isBuying = currentTab === "buying";

  return (
    <header className="h-[64px] border-b border-neutral-200/80 bg-white px-4 sm:px-6 flex items-center justify-between gap-3 sticky top-0 z-40">
      {/* Mobile burger */}
      {onMenuClick && (
        <button
          onClick={onMenuClick}
          className="lg:hidden p-1.5 rounded-sm border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 transition-colors cursor-pointer shrink-0"
          aria-label="Open navigation"
        >
          <Menu className="w-4.5 h-4.5" />
        </button>
      )}

      {/* Left — mode badge */}
      <div className="flex items-center gap-2 shrink-0">
        <span
          className={`inline-flex items-center gap-2 p-1.5 rounded-lg text-2xs font-semibold pr-3.5 ${isBuying
            ? "bg-primary-50 text-primary-700"
            : "bg-warning-50 text-warning-700"
            }`}
        >
          {isBuying ? <div className="rounded-full p-1 bg-white">
            <ShoppingBag className="w-3 h-3" />
          </div> : <div className="rounded-full p-1 bg-white">
            <Sparkles className="w-3 h-3" />
          </div>}
          {isBuying ? "Buying" : "Selling"}
        </span>
      </div>

      {/* Middle — search */}
      <div className="flex-1 max-w-[480px] mx-3 relative hidden md:block">
        <div className="relative">
          <InputField name="search" placeholder="Search listings, sellers, categories..." icon={<Search className="w-4 h-4" />} />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 h-[22px] px-1.5 bg-white border border-neutral-200 text-2xs font-medium text-neutral-400 rounded flex items-center gap-0.5 select-none pointer-events-none">
            <span>⌘</span>K
          </kbd>

        </div>
      </div>

      {/* Right — bell + avatar */}
      <div className="flex items-center gap-3 ml-auto">
        <button className="relative w-9 h-9 rounded-xl hover:bg-neutral-50 flex items-center justify-center text-neutral-600 transition-colors cursor-pointer border border-neutral-200">
          <Bell className="w-4 h-4" />
          <span className="absolute top-[9px] right-[9px] w-1.5 h-1.5 rounded-full bg-error-500 ring-2 ring-white" />
        </button>
        <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-[13px] font-bold text-indigo-900 cursor-pointer select-none">
          AO
        </div>
      </div>
    </header>
  );
}

"use client";

import * as React from "react";
import {
  Smartphone, Headphones, Laptop, Clock, Gamepad2, Shirt,
  CheckCircle2, Lock, FileText, TrendingUp,
  Plus, Download, Search, SlidersHorizontal, Calendar, ArrowUpDown, MoreHorizontal, Eye, Zap,
} from "lucide-react";
import { Badge } from "@/shared/ui/base/Badge";
import { Button } from "@/shared/ui/base/Button";
import { cn } from "@/lib/utils";

type ListingStatus = "Active" | "In escrow" | "Draft" | "Sold";

interface Listing {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  title: string;
  sub: string;
  price: string;
  status: ListingStatus;
  performance: string | null;
  performanceSub?: string;
  action: string;
}

const STATS = [
  { icon: CheckCircle2, iconBg: "bg-success-50",  iconColor: "text-success-600", label: "ACTIVE",          value: "11" },
  { icon: Lock,         iconBg: "bg-primary-50",  iconColor: "text-primary-600", label: "IN ESCROW",       value: "2" },
  { icon: FileText,     iconBg: "bg-neutral-100", iconColor: "text-neutral-500", label: "DRAFTS",          value: "1" },
  { icon: TrendingUp,   iconBg: "bg-warning-50",  iconColor: "text-warning-600", label: "SOLD THIS MONTH", value: "7" },
];

const LISTINGS: Listing[] = [
  { icon: Smartphone, iconBg: "bg-indigo-50",  iconColor: "text-indigo-600",  title: "iPhone 14 Pro · 256GB Deep Purple",            sub: "Listed Nov 10 · Lekki",              price: "₦620,000",   status: "Active",    performance: "412 views",  performanceSub: "3 offers",           action: "Edit" },
  { icon: Headphones, iconBg: "bg-orange-50",  iconColor: "text-orange-600",  title: "Sony WH-1000XM5 wireless",                    sub: "Adaeze O. · 47h inspection left",    price: "₦185,000",   status: "In escrow", performance: "Inspecting",                               action: "View order" },
  { icon: Laptop,     iconBg: "bg-emerald-50", iconColor: "text-emerald-600", title: 'MacBook Pro 14" M3 Pro · 18GB / ...',          sub: "Listed Nov 6 · Lekki",               price: "₦1,420,000", status: "Active",    performance: "718 views",  performanceSub: "14 offers",          action: "Edit" },
  { icon: Clock,      iconBg: "bg-neutral-100",iconColor: "text-neutral-500", title: "Apple Watch Series 9 · 45mm Mid...",           sub: "Listed Nov 4 · Lekki",               price: "₦310,000",   status: "Active",    performance: "204 views",  performanceSub: "No offers yet",      action: "Edit" },
  { icon: Gamepad2,   iconBg: "bg-violet-50",  iconColor: "text-violet-600",  title: "PlayStation 5 Slim Disc Edition",              sub: "3 fields missing · not yet published", price: "₦580,000", status: "Draft",     performance: null,                                       action: "Finish & publish" },
  { icon: Shirt,      iconBg: "bg-pink-50",    iconColor: "text-pink-600",    title: "Vintage Levi's 501 Selvedge denim",            sub: "Sold to Ifeanyi T. · funds released", price: "₦42,000",   status: "Sold",      performance: "Completed",                               action: "View order" },
];

const STATUS_VARIANT: Record<ListingStatus, "success" | "primary" | "neutral" | "warning"> = {
  Active:    "success",
  "In escrow": "primary",
  Draft:     "neutral",
  Sold:      "warning",
};

const ALL_TABS = [
  { label: "All", count: 14 },
  { label: "Active", count: 11 },
  { label: "In escrow", count: 2 },
  { label: "Drafts", count: 1 },
  { label: "Sold", count: 7 },
];

export function MyListingsView() {
  const [activeTab, setActiveTab] = React.useState("All");

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 tracking-[-0.5px]">My listings</h1>
          <p className="text-sm text-neutral-500 mt-1">Manage and track all the items in your store.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 font-semibold text-neutral-700 cursor-pointer">
            <Download className="w-4 h-4" />Export
          </Button>
          <Button variant="primary" size="sm" className="gap-2 font-bold bg-warning-600 hover:bg-warning-700 cursor-pointer">
            <Plus className="w-4 h-4" />List new item
          </Button>
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-white border border-neutral-200 rounded-xl p-4 flex items-center gap-4">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", s.iconBg)}>
              <s.icon className={cn("w-5 h-5", s.iconColor)} />
            </div>
            <div>
              <p className="text-2xs font-bold tracking-wider uppercase text-neutral-400">{s.label}</p>
              <p className="text-2xl font-bold text-neutral-900">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-5 border-b border-neutral-200">
        {ALL_TABS.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={cn(
              "flex items-center gap-1.5 pb-3 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer",
              activeTab === tab.label
                ? "text-neutral-900 border-warning-500"
                : "text-neutral-400 border-transparent hover:text-neutral-600"
            )}
          >
            {tab.label}
            <span className={cn("text-xs px-1.5 py-0.5 rounded-full font-semibold", activeTab === tab.label ? "bg-warning-100 text-warning-700" : "bg-neutral-100 text-neutral-500")}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Search + filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative grow max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Filter listings by name..."
            className="w-full h-10 pl-9 pr-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors bg-white"
          />
        </div>
        {[
          { icon: SlidersHorizontal, label: "Category" },
          { icon: Calendar,          label: "Date posted" },
          { icon: ArrowUpDown,       label: "Newest first" },
        ].map((f) => (
          <button key={f.label} className="flex items-center gap-2 h-10 px-4 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors cursor-pointer bg-white">
            <f.icon className="w-4 h-4" />
            {f.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white border border-neutral-200 rounded-xl overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50/50">
              {["IMAGE", "ITEM", "PRICE", "STATUS", "PERFORMANCE", "ACTIONS"].map((h) => (
                <th key={h} className="px-5 py-3 text-2xs font-bold tracking-wider uppercase text-neutral-400 whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {LISTINGS.map((row, idx) => (
              <tr key={idx} className="hover:bg-neutral-50/40 transition-colors">
                <td className="px-5 py-4">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", row.iconBg)}>
                    <row.icon className={cn("w-4.5 h-4.5", row.iconColor)} strokeWidth={1.5} />
                  </div>
                </td>
                <td className="px-5 py-4 max-w-[220px]">
                  <p className="text-sm font-semibold text-neutral-900 truncate">{row.title}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{row.sub}</p>
                </td>
                <td className="px-5 py-4 text-sm font-semibold text-neutral-900 whitespace-nowrap">{row.price}</td>
                <td className="px-5 py-4">
                  <Badge variant={STATUS_VARIANT[row.status]}>
                    {row.status !== "Draft" && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
                    {row.status}
                  </Badge>
                </td>
                <td className="px-5 py-4">
                  {row.performance ? (
                    <div className="text-xs text-neutral-500">
                      <p className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" />{row.performance}</p>
                      {row.performanceSub && <p className="flex items-center gap-1 mt-0.5"><Zap className="w-3.5 h-3.5 text-warning-500" />{row.performanceSub}</p>}
                    </div>
                  ) : (
                    <span className="text-neutral-400">—</span>
                  )}
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    {row.status === "Active" ? (
                      <>
                        <button className="text-primary-600 hover:underline cursor-pointer">Edit</button>
                        <button className="text-error-500 hover:underline cursor-pointer">Deactivate</button>
                      </>
                    ) : (
                      <button className="text-primary-600 hover:underline cursor-pointer">{row.action}</button>
                    )}
                    <button className="text-neutral-400 hover:text-neutral-600 cursor-pointer">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

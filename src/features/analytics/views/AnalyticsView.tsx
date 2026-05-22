"use client";

import * as React from "react";
import {
  TrendingUp, ShoppingBag, Eye, Target,
  Laptop, Smartphone, Headphones, Clock,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const PERIODS = ["7d", "30d", "90d", "All time"];

const STATS = [
  { icon: TrendingUp, iconBg: "bg-warning-50",  iconColor: "text-warning-600",  label: "EARNINGS",       value: "₦2.4M",  trend: "+18%", trendDir: "up",   context: "vs last 30 days" },
  { icon: ShoppingBag,iconBg: "bg-primary-50",  iconColor: "text-primary-600",  label: "ORDERS",         value: "28",     trend: "+6",   trendDir: "up",   context: "more than last month" },
  { icon: Eye,        iconBg: "bg-success-50",  iconColor: "text-success-600",  label: "LISTING VIEWS",  value: "14,820", trend: "+24%", trendDir: "up",   context: "from new listings" },
  { icon: Target,     iconBg: "bg-neutral-100", iconColor: "text-neutral-500",  label: "CONVERSION",     value: "2.4%",   trend: "−0.3%",trendDir: "down", context: "vs last month" },
];

const CHART_DATA = [
  { week: "W1", earnings: 45, orders: 30 },
  { week: "W2", earnings: 62, orders: 48 },
  { week: "W3", earnings: 38, orders: 25 },
  { week: "W4", earnings: 70, orders: 52 },
  { week: "W5", earnings: 88, orders: 60 },
  { week: "W6", earnings: 75, orders: 65 },
  { week: "W7", earnings: 95, orders: 70 },
  { week: "W8", earnings: 82, orders: 72 },
];

const TOP_LISTINGS = [
  { rank: 1, icon: Laptop,     iconBg: "bg-emerald-50", iconColor: "text-emerald-600", name: 'MacBook Pro 14" M3 Pro', views: "3,420", saves: "412", sold: "3" },
  { rank: 2, icon: Smartphone, iconBg: "bg-indigo-50",  iconColor: "text-indigo-600",  name: "iPhone 14 Pro · 256GB",  views: "2,184", saves: "298", sold: "5" },
  { rank: 3, icon: Headphones, iconBg: "bg-orange-50",  iconColor: "text-orange-600",  name: "Sony WH-1000XM5",        views: "1,824", saves: "186", sold: "4" },
  { rank: 4, icon: Clock,      iconBg: "bg-neutral-100",iconColor: "text-neutral-500", name: "Apple Watch Series 9",   views: "1,012", saves: "94",  sold: "2" },
];

const FUNNEL = [
  { label: "Listing views", value: 14820, bar: 100, color: "bg-warning-400" },
  { label: "Saves",         value: 1184,  bar: 48,  color: "bg-primary-600" },
  { label: "Inquiries",     value: 412,   bar: 22,  color: "bg-warning-500" },
  { label: "Orders",        value: 28,    bar: 6,   color: "bg-success-500" },
];

const FUNNEL_ICONS = [Eye, ShoppingBag, ShoppingBag, ShoppingBag];

const INSIGHTS = [
  { icon: TrendingUp, iconBg: "bg-success-50", iconColor: "text-success-600", title: "Friday evenings sell best", body: "38% of your orders this month landed between Fri 5–9 PM." },
  { icon: Eye,        iconBg: "bg-primary-50", iconColor: "text-primary-600", title: "Listings with 5+ photos convert 2.4× more", body: "3 of your listings currently have fewer than 5 photos." },
  { icon: Target,     iconBg: "bg-success-50", iconColor: "text-success-600", title: "Your reply time is <1 hour", body: "Top quartile of verified sellers. Keep it up." },
];

const MAX_VAL = Math.max(...CHART_DATA.map((d) => Math.max(d.earnings, d.orders)));

export function AnalyticsView() {
  const [period, setPeriod] = React.useState("30d");

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 tracking-[-0.5px]">Analytics</h1>
          <p className="text-sm text-neutral-500 mt-1">Track how your store is performing across listings, orders and earnings.</p>
        </div>
        <div className="flex items-center gap-1 bg-neutral-100 border border-neutral-200 rounded-xl p-1">
          {PERIODS.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-semibold transition-all cursor-pointer",
                period === p
                  ? "bg-white text-neutral-900 border border-neutral-200 shadow-sm"
                  : "text-neutral-400 hover:text-neutral-700"
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-white border border-neutral-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-2xs font-bold tracking-wider uppercase text-neutral-400">{s.label}</p>
              <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", s.iconBg)}>
                <s.icon className={cn("w-4 h-4", s.iconColor)} />
              </div>
            </div>
            <p className="text-3xl font-bold text-neutral-900 tracking-[-1px]">{s.value}</p>
            <p className={cn("text-xs font-semibold mt-1", s.trendDir === "up" ? "text-success-600" : "text-error-600")}>
              {s.trendDir === "up" ? "↑" : "↓"} {s.trend}{" "}
              <span className="text-neutral-400 font-normal">{s.context}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: chart + table */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Bar chart */}
          <div className="bg-white border border-neutral-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-bold text-neutral-900 relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-4 before:bg-warning-500 before:rounded-full">
                Earnings vs orders
              </h2>
              <div className="flex items-center gap-4 text-xs text-neutral-500">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-warning-500" />Earnings</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary-600" />Orders</span>
              </div>
            </div>
            <div className="flex items-end gap-2 h-[160px]">
              {CHART_DATA.map((d) => (
                <div key={d.week} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex items-end justify-center gap-1 flex-1">
                    <div
                      className="w-[40%] bg-warning-400 rounded-t-sm"
                      style={{ height: `${(d.earnings / MAX_VAL) * 100}%` }}
                    />
                    <div
                      className="w-[40%] bg-primary-600 rounded-t-sm"
                      style={{ height: `${(d.orders / MAX_VAL) * 100}%` }}
                    />
                  </div>
                  <span className="text-2xs text-neutral-400">{d.week}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top listings table */}
          <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
              <h2 className="text-base font-bold text-neutral-900 relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-4 before:bg-warning-500 before:rounded-full">
                Top listings
              </h2>
              <button className="text-sm font-semibold text-primary-600 hover:underline flex items-center gap-1 cursor-pointer">
                View all <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-neutral-100 bg-neutral-50/50">
                  {["#", "ITEM", "VIEWS", "SAVES", "SOLD"].map((h) => (
                    <th key={h} className="px-5 py-3 text-2xs font-bold tracking-wider uppercase text-neutral-400">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {TOP_LISTINGS.map((row) => (
                  <tr key={row.rank} className="hover:bg-neutral-50/40 transition-colors">
                    <td className="px-5 py-3">
                      <span className="w-6 h-6 rounded-lg bg-warning-100 text-warning-700 text-xs font-bold flex items-center justify-center">{row.rank}</span>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", row.iconBg)}>
                          <row.icon className={cn("w-3.5 h-3.5", row.iconColor)} strokeWidth={1.5} />
                        </div>
                        <span className="text-sm font-semibold text-neutral-900">{row.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-sm text-neutral-700">{row.views}</td>
                    <td className="px-5 py-3 text-sm text-neutral-700">{row.saves}</td>
                    <td className="px-5 py-3 text-sm font-semibold text-neutral-900">{row.sold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: funnel + insights */}
        <div className="flex flex-col gap-6">
          {/* Conversion funnel */}
          <div className="bg-white border border-neutral-200 rounded-xl p-5">
            <h2 className="text-base font-bold text-neutral-900 mb-5 relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-4 before:bg-warning-500 before:rounded-full">
              Conversion funnel
            </h2>
            <div className="flex flex-col gap-4">
              {FUNNEL.map((item, idx) => {
                const Icon = FUNNEL_ICONS[idx];
                return (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="flex items-center gap-2 text-sm text-neutral-600">
                        <Icon className="w-4 h-4 text-neutral-400" />
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-neutral-900">{item.value.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div className={cn("h-full rounded-full", item.color)} style={{ width: `${item.bar}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Insights */}
          <div className="bg-white border border-neutral-200 rounded-xl p-5">
            <h2 className="text-base font-bold text-neutral-900 mb-4 relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-4 before:bg-warning-500 before:rounded-full">
              Insights
            </h2>
            <div className="flex flex-col gap-4">
              {INSIGHTS.map((ins) => (
                <div key={ins.title} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl">
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", ins.iconBg)}>
                    <ins.icon className={cn("w-4 h-4", ins.iconColor)} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900">{ins.title}</p>
                    <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">{ins.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

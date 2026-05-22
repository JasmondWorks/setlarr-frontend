"use client";

import * as React from "react";
import {
  Smartphone, Headphones, Laptop, Shirt, Gamepad2, Camera,
  Search, Bell, Trash2, Heart, ChevronRight, MapPin,
} from "lucide-react";
import { Badge } from "@/shared/ui/base/Badge";
import { Button } from "@/shared/ui/base/Button";
import { cn } from "@/lib/utils";

interface SavedListing {
  icon: React.ElementType;
  gradient: string;
  iconColor: string;
  title: string;
  price: string;
  oldPrice?: string;
  location: string;
  verified: boolean;
  priceDrop?: string;
  sold?: boolean;
}

const LISTINGS: SavedListing[] = [
  { icon: Smartphone, gradient: "from-indigo-100 to-indigo-50",   iconColor: "text-indigo-500",  title: "iPhone 14 Pro Max · 256GB Deep Purple",      price: "₦420,000", oldPrice: "₦470,000", location: "Lekki",    verified: true,  priceDrop: "₦50K" },
  { icon: Laptop,     gradient: "from-emerald-100 to-green-50",   iconColor: "text-emerald-600", title: 'MacBook Pro 14" M3 Pro · 18GB/512GB',        price: "₦1,420,000",                       location: "Yaba",     verified: true  },
  { icon: Headphones, gradient: "from-orange-100 to-amber-50",    iconColor: "text-orange-500",  title: "Sony WH-1000XM5 Wireless Headphones",         price: "₦185,000",  oldPrice: "₦220,000", location: "Ikeja",    verified: true,  priceDrop: "₦35K" },
  { icon: Shirt,      gradient: "from-pink-100 to-rose-50",       iconColor: "text-pink-500",    title: "Vintage Levi's 501 Selvedge denim · size 32", price: "₦42,000",                          location: "Yaba",     verified: false, sold: true },
  { icon: Gamepad2,   gradient: "from-violet-100 to-purple-50",   iconColor: "text-violet-500",  title: "PlayStation 5 Slim Disc Edition · 1TB",       price: "₦580,000",                         location: "Surulere", verified: true  },
  { icon: Camera,     gradient: "from-sky-100 to-blue-50",        iconColor: "text-sky-500",     title: "Sony A7 IV mirrorless + 28-70mm kit lens",    price: "₦1,180,000",                       location: "VI",       verified: true  },
];

const TABS = [
  { label: "All",          count: 12 },
  { label: "Available",    count: 10 },
  { label: "Price dropped",count: 2  },
  { label: "Sold out",     count: 1  },
];

export function SavedView() {
  const [activeTab, setActiveTab] = React.useState("All");
  const [saved, setSaved] = React.useState<Set<number>>(new Set(LISTINGS.map((_, i) => i)));

  const toggle = (i: number) =>
    setSaved((prev) => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 tracking-[-0.5px]">Saved items</h1>
          <p className="text-sm text-neutral-500 mt-1">12 items you're keeping an eye on.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 font-semibold cursor-pointer">
            <Bell className="w-4 h-4" />Price-drop alerts
          </Button>
          <Button variant="outline" size="sm" className="gap-2 font-semibold text-error-600 border-error-200 hover:bg-error-50 cursor-pointer">
            <Trash2 className="w-4 h-4" />Clear all
          </Button>
        </div>
      </div>

      {/* Price-drop banner */}
      <div className="bg-warning-50 border border-warning-100 rounded-xl px-5 py-4 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm font-bold text-neutral-900">2 items dropped in price this week</p>
          <p className="text-xs text-neutral-500 mt-0.5">Total savings if you act now: <span className="font-bold text-success-600">₦78,000</span></p>
        </div>
        <Button variant="primary" size="sm" className="gap-1.5 cursor-pointer bg-warning-600 hover:bg-warning-700">
          View deals <ChevronRight className="w-3.5 h-3.5" />
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Search your saved items..."
          className="w-full h-11 pl-11 pr-4 rounded-xl border border-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors bg-white"
        />
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-5 border-b border-neutral-200 overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={cn(
              "flex items-center gap-1.5 pb-3 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer whitespace-nowrap",
              activeTab === tab.label
                ? "text-neutral-900 border-primary-600"
                : "text-neutral-400 border-transparent hover:text-neutral-600"
            )}
          >
            {tab.label}
            <span className={cn("text-xs px-1.5 py-0.5 rounded-full", activeTab === tab.label ? "bg-primary-100 text-primary-700" : "bg-neutral-100 text-neutral-500")}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {LISTINGS.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "bg-white border border-neutral-200 rounded-xl overflow-hidden flex flex-col group hover:border-neutral-300 transition-colors cursor-pointer relative",
              item.sold && "opacity-60"
            )}
          >
            {/* Badges */}
            <div className="absolute top-3 left-3 z-10 flex gap-1.5">
              {item.priceDrop && (
                <Badge variant="warning" className="font-bold text-2xs">Price dropped ₦{item.priceDrop}</Badge>
              )}
              {item.sold && (
                <Badge variant="neutral" className="font-bold text-2xs">Sold</Badge>
              )}
              {!item.priceDrop && !item.sold && item.verified && (
                <Badge variant="success" className="font-bold text-2xs">Verified</Badge>
              )}
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); toggle(idx); }}
              className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              <Heart className={cn("w-3.5 h-3.5 transition-colors", saved.has(idx) ? "fill-error-500 text-error-500" : "text-neutral-400")} />
            </button>

            {/* Image */}
            <div className={cn("aspect-[4/3] bg-gradient-to-br flex items-center justify-center", item.gradient)}>
              <item.icon className={cn("w-12 h-12 opacity-80", item.iconColor)} strokeWidth={1.5} />
            </div>

            {/* Content */}
            <div className="p-3 flex flex-col gap-1.5 flex-1">
              <p className="text-xs font-semibold text-neutral-800 leading-snug line-clamp-2">{item.title}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-neutral-900">{item.price}</span>
                {item.oldPrice && <span className="text-xs text-neutral-400 line-through">{item.oldPrice}</span>}
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-500 mt-auto pt-1">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{item.location}</span>
                {item.verified ? (
                  <span className="text-success-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-success-500" />Verified
                  </span>
                ) : (
                  <span className="text-neutral-400 font-medium">New seller</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

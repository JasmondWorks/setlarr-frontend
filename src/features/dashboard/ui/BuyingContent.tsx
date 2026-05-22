"use client";

import * as React from "react";
import {
  Smartphone,
  Laptop,
  Headphones,
  Shirt,
  Armchair,
  Gamepad2,
  Car,
  Camera,
  Clock,
  ShoppingBag,
  Wallet,
  ChevronRight,
  Heart,
  SlidersHorizontal,
  Lock,
} from "lucide-react";
import { Badge } from "@/shared/ui/base/Badge";
import { Button } from "@/shared/ui/base/Button";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: ShoppingBag,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    value: "8",
    label: "Lifetime purchases",
    badge: "+2 this month",
    badgeVariant: "success" as const,
  },
  {
    icon: Clock,
    iconBg: "bg-warning-50",
    iconColor: "text-warning-600",
    value: "3",
    label: "Active orders in escrow",
    badge: "1 inspection due",
    badgeVariant: "warning" as const,
  },
  {
    icon: Wallet,
    iconBg: "bg-success-50",
    iconColor: "text-success-600",
    value: "₦812K",
    label: "Wallet balance",
    badge: "₦120K released",
    badgeVariant: "success" as const,
  },
];

const categories = [
  { label: "Phones", icon: Smartphone, bg: "bg-indigo-50", color: "text-indigo-600", border: "border-indigo-100" },
  { label: "Laptops", icon: Laptop, bg: "bg-orange-50", color: "text-orange-600", border: "border-orange-100" },
  { label: "Audio", icon: Headphones, bg: "bg-emerald-50", color: "text-emerald-600", border: "border-emerald-100" },
  { label: "Fashion", icon: Shirt, bg: "bg-pink-50", color: "text-pink-600", border: "border-pink-100" },
  { label: "Home", icon: Armchair, bg: "bg-neutral-100", color: "text-neutral-600", border: "border-neutral-200" },
  { label: "Gaming", icon: Gamepad2, bg: "bg-violet-50", color: "text-violet-600", border: "border-violet-100" },
  { label: "Auto", icon: Car, bg: "bg-sky-50", color: "text-sky-600", border: "border-sky-100" },
  { label: "Cameras", icon: Camera, bg: "bg-rose-50", color: "text-rose-600", border: "border-rose-100" },
];

const trendingListings = [
  { title: "iPhone 14 Pro · 256GB Deep Purple, sealed in box", price: "₦620,000", oldPrice: "₦720,000", location: "Lekki", verified: true, icon: Smartphone, gradient: "from-indigo-100 to-indigo-50", iconColor: "text-indigo-500" },
  { title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones", price: "₦185,000", location: "Ikeja", verified: true, icon: Headphones, gradient: "from-orange-100 to-amber-50", iconColor: "text-orange-500" },
  { title: 'MacBook Pro 14" M3 Pro · 18GB / 512GB Space Black', price: "₦1,420,000", location: "Lekki", verified: true, icon: Laptop, gradient: "from-emerald-100 to-green-50", iconColor: "text-emerald-600" },
  { title: "Vintage Levi's 501 Selvedge denim · barely worn, size 32", price: "₦42,000", oldPrice: "₦65,000", location: "Yaba", verified: false, icon: Shirt, gradient: "from-pink-100 to-rose-50", iconColor: "text-pink-500" },
  { title: "PlayStation 5 Slim Disc Edition · 1TB, with 2 controllers", price: "₦580,000", location: "Yaba", verified: true, icon: Gamepad2, gradient: "from-violet-100 to-purple-50", iconColor: "text-violet-500" },
  { title: "Sony A7 IV mirrorless body + 28-70mm kit lens", price: "₦1,180,000", location: "Lekki", verified: true, icon: Camera, gradient: "from-sky-100 to-blue-50", iconColor: "text-sky-500" },
  { title: "Mid-century lounge chair, walnut frame · barely used", price: "₦128,000", location: "Ikeja", verified: true, icon: Armchair, gradient: "from-amber-100 to-orange-50", iconColor: "text-amber-600" },
  { title: "Apple Watch Series 9 GPS · 45mm Midnight Aluminum", price: "₦310,000", oldPrice: "₦360,000", location: "Surulere", verified: true, icon: Clock, gradient: "from-slate-100 to-gray-50", iconColor: "text-slate-500" },
];

export function BuyingContent() {
  const [saved, setSaved] = React.useState<Set<number>>(new Set([1]));

  const toggleSaved = (idx: number) => {
    setSaved((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      {/* Greeting */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 tracking-[-0.5px]">
            Good morning, Ada 👋
          </h1>
          <p className="text-sm text-neutral-500 mt-1">Here's what's happening with your trades today.</p>
        </div>
        <button className="hidden sm:flex items-center gap-2 text-sm font-semibold text-neutral-600 border border-neutral-200 rounded-lg px-3 py-2 hover:bg-neutral-50 transition-colors shrink-0 cursor-pointer">
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>
      </div>

      {/* Escrow Alert */}
      <div className="bg-linear-to-r from-primary-50 via-primary-50/60 to-indigo-50/20 border border-primary-100 rounded-lg p-5 flex items-center justify-between gap-4 overflow-hidden">
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-11 h-11 rounded-md bg-white flex items-center justify-center text-primary-600 shrink-0 shadow-sm">
            <Smartphone className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-neutral-900 text-sm">iPhone 14 Pro from Tunde A.</span>
              <Badge variant="primary-neutral" className="flex items-center">
                <Lock className="w-3 h-3" />
                ₦620,000 in escrow</Badge>
            </div>
            <div className="text-xs text-neutral-500 mt-0.5 flex items-center gap-1 flex-wrap">
              Delivered yesterday. You have
              <span className="text-warning-600 font-semibold inline-flex items-center gap-0.5">
                <Clock className="w-3 h-3" />47h 12m
              </span>
              left to inspect and release the funds.
            </div>
          </div>
        </div>
        <Button size="sm" variant="ghost" className="shrink-0 rounded-lg text-xs font-bold gap-1 cursor-pointer">
          View order
          <ChevronRight className="w-3.5 h-3.5" />
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-neutral-200 rounded-lg p-5 flex gap-5">

            <div className={cn("w-10 h-10 rounded-md flex items-center justify-center", stat.iconBg)}>
              <stat.icon className={cn("w-4.5 h-4.5", stat.iconColor)} />
            </div>

            <div className="space-y-2.5">
              <div className="text-4xl font-semibold text-neutral-900">{stat.value}</div>
              <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
              <Badge variant={stat.badgeVariant} className="font-bold">{stat.badge}</Badge>
            </div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-neutral-900 tracking-[-0.3px] relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-4 before:bg-primary-600 before:rounded-full">
            Categories
          </h2>
          <button className="text-xs font-semibold text-primary-600 hover:underline flex items-center gap-1 cursor-pointer">
            See all <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex gap-4 gap-y-6 flex-wrap">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="flex flex-col items-center gap-3 cursor-pointer"
            >
              <div className={cn("w-full max-w-[80px] h-auto aspect-square rounded-md flex items-center justify-center border p-6", cat.bg, cat.border)}>
                <cat.icon className={cn("w-6 h-6", cat.color)} />
              </div>
              <span className="text-xs font-bold text-neutral-700">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Trending Listings */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-neutral-900 tracking-[-0.3px] relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-4 before:bg-primary-600 before:rounded-full">
            Trending in Lagos today
          </h2>
          <button className="text-xs font-semibold text-primary-600 hover:underline flex items-center gap-1 cursor-pointer">
            See all <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trendingListings.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded-xl overflow-hidden group relative flex flex-col hover:border-neutral-300 transition-colors cursor-pointer"
            >
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10">
                <Badge variant={item.verified ? "success" : "neutral"} className="font-semibold text-2xs">
                  {item.verified ? "Verified" : "New seller"}
                </Badge>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); toggleSaved(idx); }}
                className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors shadow-sm cursor-pointer"
                aria-label={saved.has(idx) ? "Remove from saved" : "Save listing"}
              >
                <Heart
                  className={cn("w-3.5 h-3.5 transition-colors", saved.has(idx) ? "fill-error-500 text-error-500" : "text-neutral-400")}
                />
              </button>

              {/* Image placeholder */}
              <div className={cn("aspect-[4/3] bg-gradient-to-br flex items-center justify-center", item.gradient)}>
                <item.icon className={cn("w-12 h-12 opacity-80", item.iconColor)} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="p-3 flex flex-col gap-1.5 flex-1">
                <h3 className="text-xs font-medium text-neutral-700 leading-snug line-clamp-2">{item.title}</h3>
                <div className="flex items-center gap-2 justify-between">
                  <span className="text-sm font-bold text-neutral-900">{item.price}</span>
                  {item.oldPrice && (
                    <span className="text-xs text-neutral-400 line-through">{item.oldPrice}</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mt-auto pt-1">
                  <span>📍 {item.location}</span>
                  {item.verified ? (
                    <span className="text-success-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-success-500" />
                      Verified
                    </span>
                  ) : (
                    <span className="text-neutral-500 font-semibold">New seller</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

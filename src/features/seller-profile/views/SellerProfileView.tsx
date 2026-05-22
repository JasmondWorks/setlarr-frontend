"use client";

import * as React from "react";
import {
  Smartphone, Headphones, Laptop, Shirt, Gamepad2, Camera,
  MapPin, CheckCircle2, MessageCircle, Share2, Bookmark,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/shared/ui/base/Badge";
import { Button } from "@/shared/ui/base/Button";
import { cn } from "@/lib/utils";

const STATS = [
  { label: "Sales",         value: "47"     },
  { label: "Rating",        value: "4.9 ★"  },
  { label: "Sold",          value: "₦8.4M"  },
  { label: "Response rate", value: "98%"    },
];

const CATEGORY_FILTERS = ["All", "Phones", "Laptops", "Fashion"];

const LISTINGS = [
  { icon: Smartphone, gradient: "from-indigo-100 to-indigo-50",  iconColor: "text-indigo-500",  title: "iPhone 14 Pro · 256GB Deep Purple",   price: "₦620,000", verified: true  },
  { icon: Laptop,     gradient: "from-emerald-100 to-green-50",  iconColor: "text-emerald-600", title: 'MacBook Pro 14" M3 Pro · 18GB/512GB',  price: "₦1,420,000",verified: true  },
  { icon: Headphones, gradient: "from-orange-100 to-amber-50",   iconColor: "text-orange-500",  title: "Sony WH-1000XM5 Headphones",          price: "₦185,000", verified: true  },
  { icon: Shirt,      gradient: "from-pink-100 to-rose-50",      iconColor: "text-pink-500",    title: "Vintage Levi's 501 Selvedge · size 32", price: "₦42,000",  verified: false },
  { icon: Gamepad2,   gradient: "from-violet-100 to-purple-50",  iconColor: "text-violet-500",  title: "PS5 Slim Disc Edition · 1TB",          price: "₦580,000", verified: true  },
  { icon: Camera,     gradient: "from-sky-100 to-blue-50",       iconColor: "text-sky-500",     title: "Sony A7 IV + 28-70mm kit lens",        price: "₦1,180,000",verified: true  },
  { icon: Smartphone, gradient: "from-slate-100 to-gray-50",     iconColor: "text-slate-500",   title: "Apple Watch Series 9 GPS · 45mm",      price: "₦310,000", verified: true  },
  { icon: Laptop,     gradient: "from-amber-100 to-orange-50",   iconColor: "text-amber-600",   title: "Dell XPS 15 · Core i7 · 16GB/512GB",  price: "₦890,000", verified: true  },
];

const REVIEWS = [
  { initials: "CO", bg: "bg-rose-100", color: "text-rose-700",   name: "Chioma N.",   date: "3 days ago",  stars: 5, text: "Emeka was a pleasure to deal with. The MacBook arrived sealed exactly as described, and he walked me through inspection over a video call. Released the escrow within 30 minutes." },
  { initials: "KB", bg: "bg-sky-100",  color: "text-sky-700",    name: "Kunle B.",    date: "1 week ago",  stars: 5, text: "Super responsive, honest seller. The Sony headphones were in perfect condition. Would absolutely buy from him again." },
  { initials: "ST", bg: "bg-emerald-100",color:"text-emerald-700",name: "Sade T.",    date: "2 weeks ago", stars: 4, text: "Good experience overall. Delivery was a day later than expected but the item was exactly as described. Communication was great." },
  { initials: "FO", bg: "bg-violet-100",color:"text-violet-700",  name: "Folake O.",  date: "1 month ago", stars: 5, text: "Smooth transaction from start to finish. The iPhone was immaculate. Seller even threw in the original Apple case." },
];

export function SellerProfileView() {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [saved, setSaved] = React.useState(false);

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      {/* Profile header */}
      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
        <div className="h-20 bg-gradient-to-r from-primary-600 to-primary-500" />
        <div className="px-6 pb-6">
          <div className="flex items-end justify-between -mt-10 mb-4 flex-wrap gap-4">
            <div className="w-20 h-20 rounded-full bg-indigo-100 border-4 border-white flex items-center justify-center text-xl font-bold text-indigo-700 shrink-0">
              EO
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Button size="sm" variant="outline" className="gap-2 cursor-pointer" onClick={() => setSaved((v) => !v)}>
                <Bookmark className={cn("w-4 h-4", saved && "fill-primary-600 text-primary-600")} />Follow
              </Button>
              <Button size="sm" variant="outline" className="cursor-pointer"><Share2 className="w-4 h-4" /></Button>
              <Button size="sm" variant="primary" className="gap-2 font-bold cursor-pointer">
                <MessageCircle className="w-4 h-4" />Message seller
              </Button>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl font-bold text-neutral-900">Emeka Okafor</h1>
              <Badge variant="success" className="font-bold"><CheckCircle2 className="w-3 h-3" />Verified seller</Badge>
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-neutral-500 flex-wrap">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />Lagos, Nigeria</span>
              <span>Member since 2022</span>
            </div>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed max-w-2xl">
              Trusted electronics reseller based in Lekki. I specialise in Apple devices and Sony audio equipment. All items are tested, photographed, and listed accurately. Fast responses, same-day delivery available.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 pt-5 border-t border-neutral-100">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-bold text-neutral-900">{s.value}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Listings */}
      <div>
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <h2 className="text-xl font-bold text-neutral-900 relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-4 before:bg-primary-600 before:rounded-full">
            Listings by Emeka
          </h2>
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORY_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer",
                  activeFilter === f
                    ? "bg-primary-600 text-white border-primary-600"
                    : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {LISTINGS.map((item, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-300 transition-colors cursor-pointer">
              <div className={cn("aspect-[4/3] bg-gradient-to-br flex items-center justify-center", item.gradient)}>
                <item.icon className={cn("w-10 h-10 opacity-80", item.iconColor)} strokeWidth={1.5} />
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold text-neutral-800 line-clamp-2 mb-1.5">{item.title}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-neutral-900">{item.price}</p>
                  {item.verified && <span className="text-success-600 text-2xs font-semibold flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-success-500" />Verified</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full h-11 border border-neutral-200 rounded-xl text-sm font-semibold text-neutral-600 hover:bg-neutral-50 transition-colors cursor-pointer flex items-center justify-center gap-1.5">
          See all 23 listings <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Reviews */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-neutral-900 relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-4 before:bg-primary-600 before:rounded-full">
            Reviews <span className="text-neutral-400 font-normal text-base">★ 4.9 · 47 reviews</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REVIEWS.map((r, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className={cn("w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0", r.bg, r.color)}>
                  {r.initials}
                </div>
                <div className="grow">
                  <p className="text-sm font-bold text-neutral-900">{r.name}</p>
                  <p className="text-xs text-neutral-400">{r.date}</p>
                </div>
                <p className="text-warning-500 text-sm">{"★".repeat(r.stars)}</p>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

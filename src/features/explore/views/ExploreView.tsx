"use client";

import * as React from "react";
import {
  Smartphone, Laptop, Headphones, Shirt, Armchair,
  Gamepad2, Car, Camera, Clock, BookOpen, Bike, Radio,
  Heart, ChevronDown, SlidersHorizontal,
} from "lucide-react";
import { Badge } from "@/shared/ui/base/Badge";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Phones", "Laptops", "Fashion", "Home", "Vehicles"];

const LISTINGS = [
  { title: "iPhone 14 Pro Max · 256GB Deep Purple, sealed in box", price: "₦420,000", oldPrice: "₦520,000", location: "Lekki", verified: true,  icon: Smartphone, gradient: "from-indigo-100 to-indigo-50",   iconColor: "text-indigo-500" },
  { title: "Sony WH-1000XM5 wireless noise-cancelling headphones", price: "₦185,000", location: "Ikeja",   verified: true,  icon: Headphones, gradient: "from-orange-100 to-amber-50",   iconColor: "text-orange-500" },
  { title: 'MacBook Pro 14" M3 Pro · 18GB / 512GB Space Black',    price: "₦1,420,000",                    location: "Lekki",   verified: true,  icon: Laptop,     gradient: "from-emerald-100 to-green-50",  iconColor: "text-emerald-600" },
  { title: "Vintage Levi's 501 Selvedge denim · barely worn, size 32", price: "₦42,000", oldPrice: "₦65,000", location: "Yaba", verified: false, icon: Shirt,  gradient: "from-pink-100 to-rose-50",    iconColor: "text-pink-500" },
  { title: "PlayStation 5 Slim Disc · with 2 controllers",         price: "₦580,000",                      location: "Surulere", verified: true, icon: Gamepad2,  gradient: "from-violet-100 to-purple-50", iconColor: "text-violet-500" },
  { title: "Sony A7 IV mirrorless body + 28-70mm kit lens",        price: "₦1,180,000",                    location: "VI",      verified: true, icon: Camera,    gradient: "from-sky-100 to-blue-50",      iconColor: "text-sky-500" },
  { title: "Mid-century lounge chair, walnut frame · barely used", price: "₦128,000",                      location: "Ikoyi",   verified: true, icon: Armchair,  gradient: "from-amber-100 to-orange-50",  iconColor: "text-amber-600" },
  { title: "Apple Watch Series 9 GPS · 45mm Midnight Aluminum",    price: "₦310,000",  oldPrice: "₦360,000", location: "Lekki", verified: true, icon: Clock,  gradient: "from-slate-100 to-gray-50",    iconColor: "text-slate-500" },
  { title: "Samsung Galaxy S24 Ultra · 512GB Titanium Gray",       price: "₦780,000",                      location: "Ikeja",   verified: true, icon: Smartphone, gradient: "from-indigo-100 to-indigo-50", iconColor: "text-indigo-500" },
  { title: "JBL Charge 5 portable Bluetooth speaker",              price: "₦62,000",                       location: "Surulere",verified: false, icon: Radio,    gradient: "from-orange-100 to-amber-50",  iconColor: "text-orange-500" },
  { title: "Trek FX 3 disc commuter bike · barely ridden",         price: "₦440,000",                      location: "Lekki",   verified: true, icon: Bike,      gradient: "from-emerald-100 to-green-50", iconColor: "text-emerald-600" },
  { title: "Kindle Oasis 32GB · graphite, with cover",             price: "₦88,000",                       location: "Ikoyi",   verified: true, icon: BookOpen,  gradient: "from-violet-100 to-purple-50", iconColor: "text-violet-500" },
];

const LOCATIONS = ["Lagos", "Abuja", "Ibadan", "PH"];
const CONDITIONS = ["Like new", "Good", "Fair"];

export function ExploreView() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [saved, setSaved] = React.useState<Set<number>>(new Set([1]));
  const [activeLocation, setActiveLocation] = React.useState("Lagos");
  const [conditions, setConditions] = React.useState<Set<string>>(new Set(["Like new", "Good"]));
  const [rating, setRating] = React.useState("4.5+");

  const toggleSaved = (idx: number) =>
    setSaved((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });

  const toggleCondition = (c: string) =>
    setConditions((prev) => {
      const next = new Set(prev);
      next.has(c) ? next.delete(c) : next.add(c);
      return next;
    });

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      {/* Page heading */}
      <div>
        <h1 className="text-3xl font-bold text-neutral-900 tracking-[-0.5px] flex items-center gap-3">
          Explore listings
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 bg-primary-50 border border-primary-100 rounded-full px-3 py-1">
            📍 Lagos
          </span>
        </h1>
        <p className="text-sm text-neutral-500 mt-1">Verified items near you in Lagos.</p>
      </div>

      {/* Category filter + sort */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all cursor-pointer",
                cat === activeCategory
                  ? "bg-primary-600 text-white border-primary-600"
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 text-sm font-medium text-neutral-600 border border-neutral-200 rounded-lg px-3 py-2 hover:bg-neutral-50 transition-colors cursor-pointer">
          <SlidersHorizontal className="w-4 h-4" />
          Sort: Newest
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Content: listings + filters */}
      <div className="flex gap-6 items-start">
        {/* Listings grid */}
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LISTINGS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden group relative flex flex-col hover:border-neutral-300 transition-colors cursor-pointer"
              >
                <div className="absolute top-3 left-3 z-10">
                  <Badge variant={item.verified ? "success" : "neutral"} className="text-2xs font-semibold">
                    {item.verified ? "Verified" : "New seller"}
                  </Badge>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleSaved(idx); }}
                  className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer"
                  aria-label="Save"
                >
                  <Heart className={cn("w-3.5 h-3.5 transition-colors", saved.has(idx) ? "fill-error-500 text-error-500" : "text-neutral-400")} />
                </button>

                <div className={cn("aspect-[4/3] bg-gradient-to-br flex items-center justify-center", item.gradient)}>
                  <item.icon className={cn("w-12 h-12 opacity-80", item.iconColor)} strokeWidth={1.5} />
                </div>

                <div className="p-3 flex flex-col gap-1 flex-1">
                  <p className="text-xs font-semibold text-neutral-800 leading-snug line-clamp-2">{item.title}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-neutral-900">{item.price}</span>
                    {item.oldPrice && <span className="text-xs text-neutral-400 line-through">{item.oldPrice}</span>}
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-500 mt-auto pt-1">
                    <span>📍 {item.location}</span>
                    {item.verified
                      ? <span className="text-success-600 font-semibold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-success-500" />Verified</span>
                      : <span className="text-neutral-500 font-semibold">New seller</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="flex items-center gap-2 px-6 py-3 border border-neutral-300 rounded-xl text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer">
              Load more listings
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filters panel */}
        <div className="w-[220px] shrink-0 hidden lg:flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-neutral-900">Filters</span>
            <button className="text-xs font-semibold text-primary-600 hover:underline cursor-pointer">Clear all</button>
          </div>

          <div>
            <p className="text-2xs font-bold tracking-wider uppercase text-neutral-400 mb-3">PRICE RANGE</p>
            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-1 border border-neutral-200 rounded-lg px-2 py-2 text-xs text-neutral-400">
                <span className="text-neutral-500 font-medium">₦</span>
                <input type="text" placeholder="Min" className="flex-1 min-w-0 outline-none bg-transparent" />
              </div>
              <div className="flex-1 flex items-center gap-1 border border-neutral-200 rounded-lg px-2 py-2 text-xs text-neutral-400">
                <span className="text-neutral-500 font-medium">₦</span>
                <input type="text" placeholder="Max" className="flex-1 min-w-0 outline-none bg-transparent" />
              </div>
            </div>
          </div>

          <div>
            <p className="text-2xs font-bold tracking-wider uppercase text-neutral-400 mb-3">CONDITION</p>
            <div className="flex flex-col gap-2">
              {CONDITIONS.map((c) => (
                <label key={c} className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={conditions.has(c)}
                    onChange={() => toggleCondition(c)}
                    className="w-4 h-4 rounded border-neutral-300 accent-primary-600 cursor-pointer"
                  />
                  <span className="text-sm text-neutral-700">{c}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="text-2xs font-bold tracking-wider uppercase text-neutral-400 mb-3">LOCATION</p>
            <div className="flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setActiveLocation(loc)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer",
                    loc === activeLocation
                      ? "bg-neutral-900 text-white border-neutral-900"
                      : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300"
                  )}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-2xs font-bold tracking-wider uppercase text-neutral-400 mb-3">SELLER RATING</p>
            <div className="flex flex-col gap-2">
              {["4.0+", "4.5+", "4.9+"].map((r) => (
                <label key={r} className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    checked={rating === r}
                    onChange={() => setRating(r)}
                    className="w-4 h-4 accent-primary-600 cursor-pointer"
                  />
                  <span className="text-sm text-neutral-700">⭐ {r}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

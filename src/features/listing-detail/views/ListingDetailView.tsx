"use client";

import * as React from "react";
import {
  Smartphone, MapPin, CheckCircle2, ShieldCheck, ChevronRight,
  ChevronLeft, MessageCircle, Heart, Share2,
} from "lucide-react";
import { Badge } from "@/shared/ui/base/Badge";
import { Button } from "@/shared/ui/base/Button";
import { cn } from "@/lib/utils";

const THUMBNAILS = ["bg-indigo-100", "bg-indigo-50", "bg-slate-100", "bg-neutral-100", "bg-blue-50"];
const SIMILAR = [
  { title: "iPhone 14 Pro · 128GB Space Black",         price: "₦390,000", location: "Victoria Island", gradient: "from-slate-100 to-gray-50"    },
  { title: "iPhone 13 Pro Max · 256GB Gold",            price: "₦280,000", location: "Ikeja",           gradient: "from-indigo-100 to-blue-50"   },
  { title: "Samsung Galaxy S23 Ultra · 256GB",          price: "₦340,000", location: "Lekki",           gradient: "from-violet-100 to-purple-50" },
  { title: "Google Pixel 8 Pro · 128GB Obsidian",       price: "₦380,000", location: "Yaba",            gradient: "from-neutral-100 to-gray-50"  },
];

const FEATURES = [
  { title: "Original box included",     sub: "Sealed accessories, manual, and unopened MagSafe charger." },
  { title: "Battery health: 92%",       sub: "Confirmed in Settings → Battery. Full charge cycle holds well." },
  { title: "48-hour inspection window", sub: "You have 48h after delivery to inspect and release payment." },
];

export function ListingDetailView() {
  const [activeImg, setActiveImg] = React.useState(0);
  const [saved, setSaved] = React.useState(false);
  const [showOffer, setShowOffer] = React.useState(false);

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      {/* Main 2-col */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
        {/* Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
            <Smartphone className="w-24 h-24 text-indigo-500 opacity-80" strokeWidth={1.5} />
            {/* Prev/Next */}
            <button onClick={() => setActiveImg((p) => Math.max(0, p - 1))} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 border border-neutral-200 flex items-center justify-center shadow-sm hover:bg-white cursor-pointer">
              <ChevronLeft className="w-4 h-4 text-neutral-700" />
            </button>
            <button onClick={() => setActiveImg((p) => Math.min(4, p + 1))} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 border border-neutral-200 flex items-center justify-center shadow-sm hover:bg-white cursor-pointer">
              <ChevronRight className="w-4 h-4 text-neutral-700" />
            </button>
            <span className="absolute bottom-3 right-3 text-xs font-semibold text-neutral-600 bg-white/80 px-2 py-1 rounded-lg">
              {activeImg + 1} / 5
            </span>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2">
            {THUMBNAILS.map((bg, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={cn(
                  "w-16 h-16 rounded-lg flex items-center justify-center border-2 transition-all cursor-pointer shrink-0", bg,
                  i === activeImg ? "border-primary-600" : "border-transparent hover:border-neutral-300"
                )}
              >
                <Smartphone className="w-6 h-6 text-indigo-400 opacity-70" strokeWidth={1.5} />
              </button>
            ))}
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3 relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-4 before:bg-primary-600 before:rounded-full">
              About this item
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Bought outright from the Apple Store in November 2023, only 11 months of use. No scratches on the screen or body — kept in a MagSafe case from day one. Battery health 92%. Comes with original box, unused EarPods, and an unopened MagSafe charger. Selling because I upgraded to the iPhone 15 Pro.
            </p>
          </div>

          {/* Spec badges */}
          <div className="flex flex-wrap gap-2 text-sm text-neutral-600">
            {["Like new", "Apple", "256GB", "Battery: 92%"].map((spec) => (
              <span key={spec} className="px-3 py-1.5 bg-neutral-100 rounded-full text-xs font-semibold">{spec}</span>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-neutral-50 border border-neutral-100 rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-success-600 mb-2" />
                <p className="text-sm font-bold text-neutral-900">{f.title}</p>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky meta panel */}
        <div className="flex flex-col gap-5">
          <div className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col gap-4 lg:sticky lg:top-[80px]">
            <div className="flex items-start justify-between">
              <div className="flex flex-wrap gap-2">
                <Badge variant="success" className="font-bold">Verified seller</Badge>
                <Badge variant="primary" className="font-bold">Escrow protected</Badge>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setSaved((v) => !v)} className="w-9 h-9 rounded-lg border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer">
                  <Heart className={cn("w-4 h-4", saved ? "fill-error-500 text-error-500" : "text-neutral-400")} />
                </button>
                <button className="w-9 h-9 rounded-lg border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer">
                  <Share2 className="w-4 h-4 text-neutral-400" />
                </button>
              </div>
            </div>

            <div>
              <p className="text-3xl font-bold text-neutral-900 tracking-[-1px]">₦420,000</p>
              <h1 className="text-base font-semibold text-neutral-800 mt-1">iPhone 14 Pro Max 256GB · Deep Purple</h1>
              <p className="text-xs text-neutral-500 mt-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />Lekki, Lagos · Listed 2 days ago
              </p>
            </div>

            {/* Seller */}
            <div className="flex items-center gap-3 bg-neutral-50 rounded-xl p-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-sm font-bold text-indigo-700 shrink-0">EO</div>
              <div className="grow min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-bold text-neutral-900">Tunde A.</p>
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary-600" />
                </div>
                <p className="text-xs text-neutral-500">★ 4.9 · 47 reviews · responds in ~1 hr</p>
              </div>
              <button className="h-8 px-3 rounded-lg border border-neutral-200 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 cursor-pointer flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" />Message
              </button>
            </div>

            {/* CTA */}
            <Button variant="primary" className="w-full font-bold h-12 text-base gap-2 cursor-pointer">
              <ShieldCheck className="w-5 h-5" />Lock ₦420,000 in escrow
            </Button>

            {showOffer ? (
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-neutral-500">₦</span>
                  <input
                    type="text"
                    placeholder="Your offer amount"
                    className="w-full h-11 pl-7 pr-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors"
                    autoFocus
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="primary" size="sm" className="flex-1 font-bold cursor-pointer">Send offer</Button>
                  <Button variant="outline" size="sm" className="cursor-pointer" onClick={() => setShowOffer(false)}>Cancel</Button>
                </div>
              </div>
            ) : (
              <Button variant="outline" className="w-full font-semibold cursor-pointer" onClick={() => setShowOffer(true)}>
                Make an offer
              </Button>
            )}

            <p className="text-xs text-neutral-500 text-center flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-success-600" />
              Protected by Setlarr escrow · 48h inspection
            </p>
          </div>
        </div>
      </div>

      {/* Similar listings */}
      <div>
        <h2 className="text-xl font-bold text-neutral-900 mb-4 relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-4 before:bg-primary-600 before:rounded-full">
          Similar listings
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SIMILAR.map((item, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-300 transition-colors cursor-pointer">
              <div className={cn("aspect-[4/3] bg-gradient-to-br flex items-center justify-center", item.gradient)}>
                <Smartphone className="w-10 h-10 text-indigo-400 opacity-70" strokeWidth={1.5} />
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold text-neutral-800 line-clamp-2 mb-1.5">{item.title}</p>
                <p className="text-sm font-bold text-neutral-900">{item.price}</p>
                <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" />{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

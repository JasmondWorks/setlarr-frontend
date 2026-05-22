"use client";

import * as React from "react";
import { Smartphone, Headphones, Laptop, Clock, ChevronRight, CheckCircle2, X, Send } from "lucide-react";
import { Badge } from "@/shared/ui/base/Badge";
import { Button } from "@/shared/ui/base/Button";
import { cn } from "@/lib/utils";

type OfferStatus = "pending" | "accepted" | "declined";

interface Offer {
  id: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  item: string;
  asking: string;
  offered: string;
  diff: string;
  buyerInitials: string;
  buyerName: string;
  buyerRating: string;
  when: string;
  quote: string;
  status: OfferStatus;
  counterValue?: string;
}

const OFFERS: Offer[] = [
  {
    id: "1", icon: Smartphone, iconBg: "bg-indigo-50", iconColor: "text-indigo-600",
    item: "iPhone 14 Pro · 256GB Deep Purple", asking: "₦620,000", offered: "₦380,000", diff: "₦40,000", status: "pending",
    buyerInitials: "AC", buyerName: "Ada Chukwu", buyerRating: "★ 4.8 · 8 purchases", when: "2 hours ago",
    quote: "Would you take ₦380,000 if I pick up today? I'm in Lekki Phase 1.", counterValue: "₦400,000",
  },
  {
    id: "2", icon: Headphones, iconBg: "bg-orange-50", iconColor: "text-orange-600",
    item: "Sony WH-1000XM5", asking: "₦185,000", offered: "₦160,000", diff: "₦25,000", status: "accepted",
    buyerInitials: "KB", buyerName: "Kunle B.", buyerRating: "★ 4.6 · 3 purchases", when: "1 day ago",
    quote: "Best I can do is ₦160,000. Happy to pay immediately.",
  },
  {
    id: "3", icon: Laptop, iconBg: "bg-emerald-50", iconColor: "text-emerald-600",
    item: 'MacBook Pro 14" M3 Pro · 18GB', asking: "₦1,420,000", offered: "₦900,000", diff: "₦520,000", status: "declined",
    buyerInitials: "TJ", buyerName: "Tobi J.", buyerRating: "★ 4.2 · 1 purchase", when: "3 days ago",
    quote: "I know it's a stretch but ₦900K is all I have.",
  },
  {
    id: "4", icon: Clock, iconBg: "bg-neutral-100", iconColor: "text-neutral-500",
    item: "Apple Watch Series 9 · 45mm", asking: "₦310,000", offered: "₦280,000", diff: "₦30,000", status: "pending",
    buyerInitials: "FO", buyerName: "Folake O.", buyerRating: "★ 5.0 · 12 purchases", when: "5 hours ago",
    quote: "₦280,000 and I can do pickup in Lekki this evening.",
  },
];

const TABS = [
  { label: "All offers", count: 17 },
  { label: "Pending",    count: 8  },
  { label: "Accepted",   count: 5  },
  { label: "Declined",   count: 4  },
];

function OfferCard({ offer }: { offer: Offer }) {
  const [counter, setCounter] = React.useState(offer.counterValue ?? "");

  return (
    <div className={cn("bg-white border border-neutral-200 rounded-xl overflow-hidden", offer.status === "declined" && "opacity-60")}>
      {/* Top */}
      <div className="p-5 flex items-center gap-4">
        <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center shrink-0", offer.iconBg)}>
          <offer.icon className={cn("w-6 h-6", offer.iconColor)} strokeWidth={1.5} />
        </div>
        <div className="grow min-w-0">
          <p className="font-semibold text-neutral-900 text-sm">{offer.item}</p>
          <p className="text-xs text-neutral-500 mt-0.5">Asking: <span className="font-semibold text-neutral-700">{offer.asking}</span></p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-lg font-bold text-neutral-900">{offer.offered}</p>
          <p className="text-xs text-error-600 mt-0.5">↓ {offer.diff} below asking</p>
        </div>
      </div>

      <div className="h-px bg-neutral-100 mx-5" />

      {/* Buyer */}
      <div className="px-5 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-700 shrink-0">
          {offer.buyerInitials}
        </div>
        <div className="grow">
          <p className="text-sm font-bold text-neutral-900">{offer.buyerName}</p>
          <p className="text-xs text-neutral-500">{offer.buyerRating}</p>
        </div>
        <span className="text-xs text-neutral-400">{offer.when}</span>
      </div>

      {/* Quote */}
      <div className="mx-5 mb-4 bg-neutral-50 rounded-xl px-4 py-3 relative">
        <span className="absolute top-2 left-3 text-3xl text-neutral-200 font-serif leading-none select-none">"</span>
        <p className="text-sm text-neutral-600 italic pl-5 leading-relaxed">{offer.quote}</p>
      </div>

      {/* Actions */}
      {offer.status === "pending" && (
        <div className="px-5 pb-5 flex flex-col gap-3">
          {offer.counterValue && (
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-neutral-600 shrink-0">Counter with</span>
              <div className="relative grow">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-neutral-500">₦</span>
                <input
                  type="text"
                  value={counter}
                  onChange={(e) => setCounter(e.target.value)}
                  className="w-full h-9 pl-7 pr-3 rounded-lg border border-neutral-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors"
                />
              </div>
              <Button size="sm" variant="outline" className="gap-1.5 font-semibold cursor-pointer shrink-0">
                <Send className="w-3.5 h-3.5" />Send counter
              </Button>
            </div>
          )}
          <div className="flex items-center gap-3">
            <Button variant="primary" size="sm" className="flex-1 gap-2 font-bold bg-success-600 hover:bg-success-700 cursor-pointer">
              <CheckCircle2 className="w-4 h-4" />Accept offer — {offer.offered}
            </Button>
            <Button variant="outline" size="sm" className="font-semibold text-error-600 border-error-200 hover:bg-error-50 cursor-pointer">
              <X className="w-4 h-4" />Decline
            </Button>
          </div>
        </div>
      )}

      {offer.status === "accepted" && (
        <div className="px-5 pb-5">
          <div className="flex items-center justify-between">
            <Badge variant="success" className="font-bold">Accepted · awaiting buyer payment</Badge>
            <button className="text-sm font-semibold text-primary-600 hover:underline flex items-center gap-1 cursor-pointer">
              View order <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {offer.status === "declined" && (
        <div className="px-5 pb-5">
          <Badge variant="neutral" className="font-bold">Declined — too low</Badge>
        </div>
      )}
    </div>
  );
}

export function OffersView() {
  const [activeTab, setActiveTab] = React.useState("All offers");

  const filtered = OFFERS.filter((o) => {
    if (activeTab === "All offers") return true;
    if (activeTab === "Pending")  return o.status === "pending";
    if (activeTab === "Accepted") return o.status === "accepted";
    if (activeTab === "Declined") return o.status === "declined";
    return true;
  });

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900 tracking-[-0.5px]">Offers</h1>
        <p className="text-sm text-neutral-500 mt-1">Respond to buyer offers on your active listings.</p>
      </div>

      <div className="flex items-center gap-5 border-b border-neutral-200 overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={cn(
              "flex items-center gap-1.5 pb-3 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer whitespace-nowrap",
              activeTab === tab.label
                ? "text-neutral-900 border-warning-500"
                : "text-neutral-400 border-transparent hover:text-neutral-600"
            )}
          >
            {tab.label}
            <span className={cn("text-xs px-1.5 py-0.5 rounded-full", activeTab === tab.label ? "bg-warning-100 text-warning-700" : "bg-neutral-100 text-neutral-500")}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {filtered.map((o) => <OfferCard key={o.id} offer={o} />)}
      </div>
    </div>
  );
}

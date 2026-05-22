"use client";

import * as React from "react";
import { Smartphone, Headphones, Laptop, Clock, CheckCircle2, ChevronRight, Copy, Timer } from "lucide-react";
import { Badge } from "@/shared/ui/base/Badge";
import { Button } from "@/shared/ui/base/Button";
import { cn } from "@/lib/utils";

type OrderStatus = "Inspecting" | "In escrow" | "In transit" | "Funds released";

interface Order {
  id: string;
  status: OrderStatus;
  locked: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  item: string;
  seller: string;
  location: string;
  delivery: string;
  amount: string;
  inspection?: string;
  trackLink?: boolean;
}

const ACTIVE_ORDERS: Order[] = [
  {
    id: "SET-4012", status: "Inspecting", locked: "Locked Nov 12",
    icon: Smartphone, iconBg: "bg-indigo-50", iconColor: "text-indigo-600",
    item: "iPhone 14 Pro Max · 256GB Deep Purple", seller: "Emeka Okafor",
    location: "Lekki, Lagos", delivery: "Delivered yesterday", amount: "₦420,000",
    inspection: "Inspection window closes in 36h 14m · Fri, Nov 15 at 9:00 PM",
  },
  {
    id: "SET-3987", status: "In escrow", locked: "Locked Nov 11",
    icon: Headphones, iconBg: "bg-orange-50", iconColor: "text-orange-600",
    item: "Sony WH-1000XM5 Wireless Headphones", seller: "Tunde A.",
    location: "Ikeja, Lagos", delivery: "Awaiting shipment", amount: "₦185,000",
  },
  {
    id: "SET-3964", status: "In transit", locked: "Locked Nov 9",
    icon: Laptop, iconBg: "bg-emerald-50", iconColor: "text-emerald-600",
    item: 'MacBook Pro 14" M3 Pro · 18GB / 512GB', seller: "Sade L.",
    location: "Yaba, Lagos", delivery: "Arrives Thu, Nov 14", amount: "₦620,000",
    trackLink: true,
  },
];

const COMPLETED_ORDERS: Order[] = [
  {
    id: "SET-3902", status: "Funds released", locked: "Nov 4",
    icon: Clock, iconBg: "bg-neutral-100", iconColor: "text-neutral-500",
    item: "Apple Watch Series 9 · 45mm Midnight", seller: "Ifeanyi T.",
    location: "Lekki, Lagos", delivery: "Inspected and released", amount: "₦310,000",
  },
];

const STATUS_VARIANTS: Record<OrderStatus, "warning" | "primary" | "neutral" | "success"> = {
  "Inspecting":     "warning",
  "In escrow":      "primary",
  "In transit":     "neutral",
  "Funds released": "success",
};

const TABS = [
  { label: "Active",    count: 3 },
  { label: "Completed", count: 12 },
  { label: "Disputed",  count: 1 },
];

function OrderCard({ order, isCompleted }: { order: Order; isCompleted?: boolean }) {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-100">
        <button className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-700 cursor-pointer">
          Order #{order.id}
          <Copy className="w-3.5 h-3.5" />
        </button>
        <div className="flex items-center gap-3">
          <Badge variant={STATUS_VARIANTS[order.status]}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {order.status}
          </Badge>
          <span className="text-xs text-neutral-400">{order.locked}</span>
        </div>
      </div>

      <div className="px-5 py-4 flex items-center gap-4">
        <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center shrink-0", order.iconBg)}>
          <order.icon className={cn("w-6 h-6", order.iconColor)} strokeWidth={1.5} />
        </div>
        <div className="grow min-w-0">
          <p className="font-bold text-neutral-900 text-sm">{order.item}</p>
          <p className="text-xs text-neutral-500 mt-0.5">
            Sold by <span className="text-primary-600 font-medium">{order.seller}</span>
            {" · "}{order.location}{" · "}{order.delivery}
          </p>
        </div>
        <p className="font-bold text-neutral-900 text-base shrink-0">{order.amount}</p>
      </div>

      {order.inspection && (
        <div className="mx-5 mb-4 bg-warning-50 border border-warning-100 rounded-lg px-4 py-2.5 flex items-center gap-2 text-sm text-neutral-700">
          <Timer className="w-4 h-4 text-warning-600 shrink-0" />
          Inspection window closes in{" "}
          <span className="font-bold text-neutral-900">36h 14m</span>
          {" · Fri, Nov 15 at 9:00 PM"}
        </div>
      )}

      <div className="px-5 pb-4 flex items-center justify-end gap-4">
        {isCompleted ? (
          <button className="text-sm font-semibold text-primary-600 hover:underline flex items-center gap-1 cursor-pointer">
            View details <ChevronRight className="w-3.5 h-3.5" />
          </button>
        ) : order.trackLink ? (
          <button className="text-sm font-semibold text-primary-600 hover:underline flex items-center gap-1 cursor-pointer">
            Track shipment <ChevronRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold text-primary-600 hover:underline flex items-center gap-1 cursor-pointer">
              View order <ChevronRight className="w-3.5 h-3.5" />
            </button>
            {order.inspection && (
              <Button variant="primary" size="sm" className="gap-2 font-bold bg-success-600 hover:bg-success-700 cursor-pointer">
                <CheckCircle2 className="w-4 h-4" />
                Inspect &amp; release
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function OrdersView() {
  const [activeTab, setActiveTab] = React.useState("Active");

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      <h1 className="text-3xl font-bold text-neutral-900 tracking-[-0.5px]">Orders</h1>

      {/* Underline tabs */}
      <div className="flex items-center gap-6 border-b border-neutral-200">
        {TABS.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={cn(
              "flex items-center gap-2 pb-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer -mb-px",
              activeTab === tab.label
                ? "text-neutral-900 border-primary-600"
                : "text-neutral-400 border-transparent hover:text-neutral-600"
            )}
          >
            {tab.label}
            <span className={cn("text-xs px-1.5 py-0.5 rounded-full font-semibold", activeTab === tab.label ? "bg-primary-100 text-primary-700" : "bg-neutral-100 text-neutral-500")}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {activeTab === "Active" && (
        <div className="flex flex-col gap-6">
          {/* Active orders group */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-2xs font-bold tracking-wider uppercase text-neutral-500">
                <span className="w-4 h-px bg-primary-600" />
                ACTIVE ORDERS
              </div>
              <span className="text-sm text-neutral-500">3 orders · <span className="font-semibold text-neutral-800">₦1,225,000</span> in escrow</span>
            </div>
            <div className="flex flex-col gap-4">
              {ACTIVE_ORDERS.map((o) => <OrderCard key={o.id} order={o} />)}
            </div>
          </div>

          {/* Recently completed */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-2xs font-bold tracking-wider uppercase text-neutral-500">
                <span className="w-4 h-px bg-neutral-400" />
                RECENTLY COMPLETED
              </div>
              <button className="text-sm font-semibold text-primary-600 hover:underline cursor-pointer">
                View all →
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {COMPLETED_ORDERS.map((o) => <OrderCard key={o.id} order={o} isCompleted />)}
            </div>
          </div>
        </div>
      )}

      {activeTab !== "Active" && (
        <div className="flex items-center justify-center py-20 text-neutral-400 text-sm">
          No {activeTab.toLowerCase()} orders yet.
        </div>
      )}
    </div>
  );
}

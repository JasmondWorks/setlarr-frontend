"use client";

import * as React from "react";
import {
  Smartphone,
  Laptop,
  Headphones,
  Clock,
  Gamepad2,
  TrendingUp,
  Lock,
  LayoutDashboard,
  Star,
  AlertTriangle,
  Plus,
  Download,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/shared/ui/base/Badge";
import { Button } from "@/shared/ui/base/Button";
import { Table, type Column } from "@/shared/ui/base/Table";
import { cn } from "@/lib/utils";

interface ActiveListing {
  image: string;
  item: string;
  sub: string;
  price: string;
  status: "Active" | "In escrow" | "Draft";
  offers: string | null;
}

interface RecentOrder {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  item: string;
  buyer: string;
  status: "In escrow" | "Awaiting shipment" | "Released";
  amount: string;
}

const sellingStats = [
  { icon: TrendingUp, iconBg: "bg-success-50", iconColor: "text-success-600", label: "THIS MONTH", value: "₦1.2M", meta: "+18% vs last month", metaColor: "text-success-600" },
  { icon: Lock, iconBg: "bg-neutral-100", iconColor: "text-neutral-500", label: "IN ESCROW", value: "₦340K", meta: "2 pending release", metaColor: "text-neutral-500" },
  { icon: LayoutDashboard, iconBg: "bg-success-50", iconColor: "text-success-600", label: "ACTIVE LISTINGS", value: "14", meta: "3 with offers", metaColor: "text-success-600" },
  { icon: Star, iconBg: "bg-warning-50", iconColor: "text-warning-600", label: "RATING", value: "4.9", meta: "from 47 reviews", metaColor: "text-neutral-500" },
];

const listingsData: ActiveListing[] = [
  { image: "phone", item: "iPhone 14 Pro · 256GB Deep Purple", sub: "412 views · 38 saved", price: "₦620,000", status: "Active", offers: "3 offers" },
  { image: "headphone", item: "Sony WH-1000XM5", sub: "Adaeze O. · 47h inspection left", price: "₦185,000", status: "In escrow", offers: null },
  { image: "laptop", item: 'MacBook Pro 14" M3 Pro · 18GB / 512GB Space Black', sub: "718 views · 92 saved", price: "₦1,420,000", status: "Active", offers: "14 offers" },
  { image: "watch", item: "Apple Watch Series 9 · 45mm Midnight", sub: "204 views · 21 saved", price: "₦310,000", status: "Active", offers: "No offers" },
  { image: "game", item: "PlayStation 5 Slim Disc Edition", sub: "3 fields missing · not yet published", price: "₦580,000", status: "Draft", offers: null },
];

const recentOrders: RecentOrder[] = [
  { icon: Smartphone, iconBg: "bg-indigo-50", iconColor: "text-indigo-600", item: "iPhone 14 Pro", buyer: "Adaeze O.", status: "In escrow", amount: "₦620,000" },
  { icon: Headphones, iconBg: "bg-orange-50", iconColor: "text-orange-600", item: "Sony WH-1000XM5", buyer: "Kunle B.", status: "Awaiting shipment", amount: "₦185,000" },
  { icon: Laptop, iconBg: "bg-emerald-50", iconColor: "text-emerald-600", item: 'MacBook Pro 14"', buyer: "Sade L.", status: "Released", amount: "₦1,420,000" },
  { icon: Clock, iconBg: "bg-neutral-100", iconColor: "text-neutral-500", item: "Apple Watch S9", buyer: "Ifeanyi T.", status: "Released", amount: "₦310,000" },
];

function ItemIcon({ type }: { type: string }) {
  const map: Record<string, { icon: React.ElementType; bg: string; color: string }> = {
    phone:    { icon: Smartphone, bg: "bg-indigo-50",  color: "text-indigo-600" },
    headphone:{ icon: Headphones, bg: "bg-orange-50",  color: "text-orange-600" },
    laptop:   { icon: Laptop,     bg: "bg-emerald-50", color: "text-emerald-600" },
    watch:    { icon: Clock,      bg: "bg-neutral-100",color: "text-neutral-500" },
    game:     { icon: Gamepad2,   bg: "bg-violet-50",  color: "text-violet-600" },
  };
  const entry = map[type] ?? map.game;
  const Icon = entry.icon;
  return (
    <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0", entry.bg)}>
      <Icon className={cn("w-4 h-4", entry.color)} />
    </div>
  );
}

function orderStatusVariant(status: RecentOrder["status"]) {
  if (status === "In escrow") return "primary" as const;
  if (status === "Awaiting shipment") return "warning" as const;
  return "success" as const;
}

export function SellingContent() {
  const listingColumns: Column<ActiveListing>[] = [
    {
      header: "Image",
      accessor: (row) => <ItemIcon type={row.image} />,
      className: "w-[60px]",
    },
    {
      header: "Item",
      accessor: (row) => (
        <div>
          <div className="font-semibold text-neutral-900 text-sm leading-tight">{row.item}</div>
          <div className="text-xs text-neutral-500 mt-0.5">{row.sub}</div>
        </div>
      ),
    },
    {
      header: "Price",
      accessor: "price",
      className: "font-semibold text-neutral-900 text-sm whitespace-nowrap",
    },
    {
      header: "Status",
      accessor: (row) => {
        if (row.status === "Active") return <Badge variant="success">Active</Badge>;
        if (row.status === "In escrow") return <Badge variant="primary">In escrow</Badge>;
        return <Badge variant="neutral">Draft</Badge>;
      },
    },
    {
      header: "Offers",
      accessor: (row) => {
        if (!row.offers) return <span className="text-neutral-400 text-sm">—</span>;
        if (row.offers === "No offers") return <span className="text-neutral-400 text-sm">No offers</span>;
        return (
          <span className="text-primary-600 font-semibold text-sm flex items-center gap-1">
            ⚡ {row.offers}
          </span>
        );
      },
    },
    {
      header: "Actions",
      accessor: (row) => {
        if (row.status === "Active") {
          return (
            <div className="flex items-center gap-3 text-xs font-semibold">
              <button className="text-primary-600 hover:underline cursor-pointer">Edit</button>
              <button className="text-neutral-400 hover:text-error-600 cursor-pointer">Deactivate</button>
            </div>
          );
        }
        if (row.status === "In escrow") {
          return (
            <button className="text-primary-600 font-semibold text-xs hover:underline cursor-pointer">
              View order
            </button>
          );
        }
        return (
          <button className="text-primary-600 font-semibold text-xs hover:underline cursor-pointer">
            Finish & publish
          </button>
        );
      },
    },
  ];

  const orderColumns: Column<RecentOrder>[] = [
    {
      header: "",
      accessor: (row) => (
        <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0", row.iconBg)}>
          <row.icon className={cn("w-4 h-4", row.iconColor)} />
        </div>
      ),
      className: "w-[56px]",
    },
    {
      header: "Item",
      accessor: "item",
      className: "font-semibold text-neutral-900 text-sm",
    },
    {
      header: "Buyer",
      accessor: "buyer",
      className: "text-neutral-600 text-sm",
    },
    {
      header: "Status",
      accessor: (row) => (
        <Badge variant={orderStatusVariant(row.status)}>{row.status}</Badge>
      ),
    },
    {
      header: "Amount",
      accessor: "amount",
      className: "font-semibold text-neutral-900 text-sm whitespace-nowrap",
    },
    {
      header: "",
      accessor: () => <ChevronRight className="w-4 h-4 text-neutral-400" />,
      className: "w-[40px]",
    },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 tracking-[-0.5px]">Your store</h1>
          <p className="text-sm text-neutral-500 mt-1 flex items-center gap-2">
            Emeka's Electronics
            <span className="w-1 h-1 rounded-full bg-neutral-300" />
            <span className="text-warning-600 font-semibold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-warning-500 text-warning-500" />
              4.9
            </span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 font-semibold text-neutral-700 cursor-pointer">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button variant="primary" size="sm" className="gap-2 font-bold bg-warning-600 hover:bg-warning-700 cursor-pointer">
            <Plus className="w-4 h-4" />
            List a new item
          </Button>
        </div>
      </div>

      {/* Stats 2×2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sellingStats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-neutral-200 rounded-xl p-5">
            <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center mb-4", stat.iconBg)}>
              <stat.icon className={cn("w-4 h-4", stat.iconColor)} />
            </div>
            <div className="text-2xs font-bold uppercase tracking-wider text-neutral-400 mb-1">{stat.label}</div>
            <div className="text-4xl font-bold text-neutral-900 tracking-[-1px]">{stat.value}</div>
            <div className={cn("text-xs mt-1 font-medium", stat.metaColor)}>{stat.meta}</div>
          </div>
        ))}
      </div>

      {/* Dispute Alert */}
      <div className="bg-warning-50/50 border border-warning-200 border-l-4 border-l-warning-400 rounded-xl p-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-11 h-11 rounded-xl bg-white border border-warning-100 flex items-center justify-center text-warning-600 shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-neutral-900 text-sm">1 open dispute needs your response</div>
            <div className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
              Adaeze raised an issue with order #SET-4012{" "}
              <span className="font-bold text-neutral-800">(₦620,000)</span>. Reply within{" "}
              <span className="text-warning-600 font-semibold">23h 48m</span> or funds may be refunded.
            </div>
          </div>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="shrink-0 rounded-lg text-xs font-bold border-warning-200 text-warning-700 bg-white hover:bg-warning-50 gap-1 cursor-pointer"
        >
          Open dispute
          <ChevronRight className="w-3.5 h-3.5" />
        </Button>
      </div>

      {/* Active Listings */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-neutral-900 tracking-[-0.3px] relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-4 before:bg-primary-600 before:rounded-full">
            Active listings
          </h2>
          <Button size="sm" variant="primary" className="h-8 rounded-lg font-bold gap-1 text-xs cursor-pointer">
            <Plus className="w-3.5 h-3.5" />
            Add new
          </Button>
        </div>
        <Table columns={listingColumns} data={listingsData} />
      </div>

      {/* Recent Orders */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-neutral-900 tracking-[-0.3px] relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-4 before:bg-primary-600 before:rounded-full">
            Recent orders
          </h2>
          <button className="text-xs font-semibold text-warning-600 hover:underline flex items-center gap-1 cursor-pointer">
            View all orders <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <Table columns={orderColumns} data={recentOrders} />
      </div>
    </div>
  );
}

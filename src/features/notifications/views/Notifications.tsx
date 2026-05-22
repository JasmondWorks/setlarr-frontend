"use client";

import * as React from "react";
import { Timer, MessageCircle, Truck, CheckCircle2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface Notification {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  text: React.ReactNode;
  time: string;
  action: string;
  unread: boolean;
}

const TODAY: Notification[] = [
  {
    icon: Timer, iconBg: "bg-warning-50", iconColor: "text-warning-600",
    text: <><span className="font-bold">Inspection window opening soon.</span> Your iPhone 14 Pro Max from Emeka Okafor was delivered. You have 48h to inspect and release.</>,
    time: "2 minutes ago", action: "View", unread: true,
  },
  {
    icon: MessageCircle, iconBg: "bg-success-50", iconColor: "text-success-600",
    text: <><span className="font-bold">Tunde A. replied to your message.</span> "Yes, the headphones are still available — I can ship today if you confirm."</>,
    time: "28 minutes ago", action: "Reply", unread: true,
  },
  {
    icon: Truck, iconBg: "bg-primary-50", iconColor: "text-primary-600",
    text: <><span className="font-bold">Your MacBook Pro is on the way.</span> Sade L. shipped order #SET-3964 via verified courier. Arrives Thu, Nov 14.</>,
    time: "1 hour ago", action: "Track", unread: true,
  },
];

const YESTERDAY: Notification[] = [
  {
    icon: CheckCircle2, iconBg: "bg-success-50", iconColor: "text-success-600",
    text: <><span className="font-bold">Funds released.</span> ₦310,000 was paid out for your Apple Watch Series 9 purchase. The seller has been notified.</>,
    time: "Yesterday, 9:12 AM", action: "Receipt", unread: false,
  },
  {
    icon: ShieldCheck, iconBg: "bg-primary-50", iconColor: "text-primary-600",
    text: <><span className="font-bold">Your account is now verified.</span> NIN and BVN check complete. You'll see a green check on your profile.</>,
    time: "Yesterday, 7:48 AM", action: "", unread: false,
  },
];

const TABS = ["All", "Orders", "Payments", "Messages"];
const TAB_COUNTS: Record<string, number> = { All: 5, Orders: 3, Payments: 1, Messages: 1 };

function NotifItem({ n }: { n: Notification }) {
  return (
    <div className={cn("flex items-start gap-4 px-5 py-4 relative", n.unread && "bg-primary-50/20")}>
      {n.unread && <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-primary-600 rounded-full" />}
      <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5", n.iconBg)}>
        <n.icon className={cn("w-4 h-4", n.iconColor)} />
      </div>
      <div className="grow min-w-0">
        <p className="text-sm text-neutral-700 leading-relaxed">{n.text}</p>
        <p className="text-xs text-neutral-400 mt-1">{n.time}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {n.action && (
          <button className="text-sm font-semibold text-primary-600 hover:underline whitespace-nowrap cursor-pointer">
            {n.action} →
          </button>
        )}
        {n.unread && <span className="w-2 h-2 rounded-full bg-primary-600 shrink-0" />}
      </div>
    </div>
  );
}

function GroupLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 px-5 py-3 text-2xs font-bold tracking-wider uppercase text-neutral-500">
      <span className="w-4 h-px bg-neutral-300" />
      {label}
    </div>
  );
}

export function NotificationsView() {
  const [activeTab, setActiveTab] = React.useState("All");

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-neutral-900 tracking-[-0.5px]">Notifications</h1>
        <button className="text-sm font-semibold text-primary-600 hover:underline flex items-center gap-1 cursor-pointer">
          ✓ Mark all read
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-neutral-200">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex items-center gap-2 pb-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer -mb-px",
              activeTab === tab
                ? "text-neutral-900 border-primary-600"
                : "text-neutral-400 border-transparent hover:text-neutral-600"
            )}
          >
            {tab}
            <span className={cn("text-xs px-1.5 py-0.5 rounded-full font-semibold", activeTab === tab ? "bg-primary-100 text-primary-700" : "bg-neutral-100 text-neutral-500")}>
              {TAB_COUNTS[tab]}
            </span>
          </button>
        ))}
      </div>

      {/* Notification list */}
      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden divide-y divide-neutral-100">
        <GroupLabel label="TODAY" />
        {TODAY.map((n, i) => <NotifItem key={i} n={n} />)}
        <GroupLabel label="YESTERDAY" />
        {YESTERDAY.map((n, i) => <NotifItem key={i} n={n} />)}
      </div>
    </div>
  );
}

"use client";

import { Lock, ArrowUpRight, ArrowDownLeft, Plus, ArrowDownToLine, Send, ChevronRight } from "lucide-react";
import { Button } from "@/shared/ui/base/Button";
import { cn } from "@/lib/utils";

const TRANSACTIONS = [
  { icon: Lock, iconBg: "bg-primary-100", iconColor: "text-primary-600", label: "Escrow lock", desc: "iPhone 14 Pro Max · Emeka Okafor", date: "Nov 12, 14:22", amount: "−₦420,000", negative: true },
  { icon: ArrowDownLeft, iconBg: "bg-success-50", iconColor: "text-success-600", label: "Funds released", desc: "Apple Watch S9 · Ifeanyi T.", date: "Nov 4, 09:18", amount: "+₦310,000", negative: false },
  { icon: Lock, iconBg: "bg-warning-50", iconColor: "text-warning-600", label: "Pending release", desc: "MacBook Pro 14\" · Sade L.", date: "Nov 9, 11:45", amount: "−₦620,000", negative: true },
  { icon: ArrowDownLeft, iconBg: "bg-success-50", iconColor: "text-success-600", label: "Funds released", desc: "Sony WH-1000XM5 · Kunle B.", date: "Oct 28, 16:00", amount: "+₦185,000", negative: false },
];

export function WalletView() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      <h1 className="text-3xl font-bold text-neutral-900 tracking-[-0.5px]">Wallet</h1>

      {/* Balance cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main balance card — dark */}
        <div className="md:col-span-1 bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900 rounded-lg p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-2xs font-bold tracking-wider text-neutral-400 uppercase">
            <Lock className="w-3.5 h-3.5" />
            AVAILABLE BALANCE
          </div>
          <div>
            <p className="text-4xl font-bold text-white tracking-[-1px]">₦812,400</p>
            <p className="text-xs text-neutral-400 mt-2 flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span className="text-warning-400 font-semibold">₦340,000</span> pending release from 2 orders
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Button size="sm" variant="primary" className="gap-1.5 cursor-pointer">
              <Plus className="w-3.5 h-3.5" />Add money
            </Button>
            <button className="flex items-center gap-1.5 h-9 px-4 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors cursor-pointer">
              <ArrowDownToLine className="w-3.5 h-3.5" />Withdraw
            </button>
            <button className="flex items-center gap-1.5 h-9 px-4 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors cursor-pointer">
              <Send className="w-3.5 h-3.5" />Transfer
            </button>
          </div>
        </div>

        {/* Total sent */}
        <div className="bg-white border border-neutral-200 rounded-lg p-6 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-2xs font-bold tracking-wider uppercase text-neutral-400">TOTAL SENT</p>
            <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-primary-600" />
            </div>
          </div>
          <p className="text-4xl font-bold text-neutral-900 tracking-[-1px]">₦2.4M</p>
          <p className="text-xs text-success-600 font-semibold">↑ 18% <span className="text-neutral-400 font-normal">vs last month</span></p>
        </div>

        {/* Total received */}
        <div className="bg-white border border-neutral-200 rounded-lg p-6 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-2xs font-bold tracking-wider uppercase text-neutral-400">TOTAL RECEIVED</p>
            <div className="w-8 h-8 rounded-lg bg-success-50 flex items-center justify-center">
              <ArrowDownLeft className="w-4 h-4 text-success-600" />
            </div>
          </div>
          <p className="text-4xl font-bold text-neutral-900 tracking-[-1px]">₦3.2M</p>
          <p className="text-xs text-success-600 font-semibold">↑ 24% <span className="text-neutral-400 font-normal">vs last month</span></p>
        </div>
      </div>

      {/* Recent transactions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-neutral-900 tracking-[-0.3px] relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-4 before:bg-primary-600 before:rounded-full">
            Recent transactions
          </h2>
          <button className="text-sm font-semibold text-primary-600 hover:underline flex items-center gap-1 cursor-pointer">
            View all <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50/50">
                {["TYPE", "DESCRIPTION", "DATE", "AMOUNT"].map((h) => (
                  <th key={h} className="px-5 py-3 text-2xs font-bold tracking-wider uppercase text-neutral-400">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {TRANSACTIONS.map((tx, idx) => (
                <tr key={idx} className="hover:bg-neutral-50/40 transition-colors cursor-pointer">
                  <td className="px-5 py-4">
                    <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0", tx.iconBg)}>
                      <tx.icon className={cn("w-4 h-4", tx.iconColor)} />
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-sm font-semibold text-neutral-900">{tx.label}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">{tx.desc}</p>
                  </td>
                  <td className="px-5 py-4 text-sm text-neutral-500 whitespace-nowrap">{tx.date}</td>
                  <td className={cn("px-5 py-4 text-sm font-bold whitespace-nowrap", tx.negative ? "text-neutral-900" : "text-success-600")}>
                    {tx.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

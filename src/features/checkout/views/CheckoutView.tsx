"use client";

import * as React from "react";
import Link from "next/link";
import { Smartphone, ShieldCheck, HelpCircle, CreditCard, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/shared/ui/base/Button";
import { cn } from "@/lib/utils";

const TIMELINE = [
  { label: "Payment locked",     sub: "Just now",                         done: true  },
  { label: "Item shipped",       sub: "Seller has up to 48h to ship",     active: true },
  { label: "Inspection window",  sub: "48h to check the item"                          },
  { label: "Funds released",     sub: "Seller is paid out"                             },
];

export function CheckoutView() {
  const [payMethod, setPayMethod] = React.useState<"card" | "bank">("card");

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="h-14 bg-white border-b border-neutral-200 px-6 flex items-center justify-between sticky top-0 z-40">
        <Link href="/dashboard" className="inline-flex items-center gap-2.5" aria-label="Setlarr home">
          <span className="w-6 h-6 grid grid-cols-2 grid-rows-2 gap-[3px] shrink-0">
            <span className="bg-primary-600 rounded-[3px]" /><span className="bg-primary-500 rounded-[3px]" />
            <span className="bg-primary-500 rounded-[3px]" /><span className="bg-primary-700 rounded-[3px]" />
          </span>
          <span className="text-base font-semibold text-neutral-900">Setlarr</span>
        </Link>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success-50 text-success-700 border border-success-100 text-xs font-bold">
          <ShieldCheck className="w-3.5 h-3.5" />Secure checkout
        </span>
      </header>

      <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-8 flex flex-col gap-6">
        {/* Breadcrumb */}
        <p className="text-xs text-neutral-500 font-medium">Listing <span className="mx-1.5 text-neutral-300">/</span> <span className="text-primary-600 font-semibold">Checkout</span> <span className="mx-1.5 text-neutral-300">/</span> Confirmation</p>

        {/* Trust banner */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl px-5 py-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Your payment is held in escrow</p>
            <p className="text-xs text-white/80 mt-0.5">Setlarr holds your money safely until you've received and inspected the item. You have 48h after delivery to release or dispute.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          {/* Left */}
          <div className="flex flex-col gap-5">
            {/* Order summary */}
            <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
              <p className="px-5 py-3 text-2xs font-bold tracking-wider uppercase text-neutral-400 border-b border-neutral-100 bg-neutral-50/50">Order summary</p>
              <div className="p-5 flex items-center gap-4 border-b border-neutral-100">
                <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <Smartphone className="w-7 h-7 text-indigo-500" strokeWidth={1.5} />
                </div>
                <div className="grow">
                  <p className="text-sm font-semibold text-neutral-900">iPhone 14 Pro Max · 256GB Deep Purple</p>
                  <p className="text-xs text-neutral-500 mt-0.5">Sold by <span className="text-primary-600 font-medium">Emeka Okafor</span> · Lekki, Lagos</p>
                </div>
                <p className="font-bold text-neutral-900 shrink-0">₦420,000</p>
              </div>
              <div className="p-5 flex flex-col gap-3">
                {[["Item price", "₦420,000"], ["Escrow fee", "₦8,400"], ["Verified courier delivery", "₦6,300"]].map(([label, val]) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <span className="text-neutral-500 flex items-center gap-1.5">{label}<HelpCircle className="w-3.5 h-3.5 text-neutral-300" /></span>
                    <span className="font-semibold text-neutral-900">{val}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t border-neutral-100 pt-3 mt-1">
                  <span className="font-bold text-neutral-900">Total</span>
                  <span className="text-lg font-bold text-neutral-900">₦434,700</span>
                </div>
                <p className="text-xs text-neutral-400 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-success-500" />Refundable if dispute is upheld</p>
              </div>
            </div>

            {/* Payment method */}
            <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
              <p className="px-5 py-3 text-2xs font-bold tracking-wider uppercase text-neutral-400 border-b border-neutral-100 bg-neutral-50/50">Payment method</p>
              <div className="p-3 flex flex-col gap-2">
                {/* Card */}
                <label className={cn("flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all", payMethod === "card" ? "border-primary-600 bg-primary-50" : "border-neutral-200 hover:border-neutral-300")}>
                  <input type="radio" name="pay" value="card" checked={payMethod === "card"} onChange={() => setPayMethod("card")} className="sr-only" />
                  <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center shrink-0">
                    <CreditCard className="w-5 h-5 text-neutral-500" />
                  </div>
                  <div className="grow">
                    <p className="text-sm font-bold text-neutral-900">Mastercard •• 4827</p>
                    <p className="text-xs text-neutral-500">Expires 09/27 · default card</p>
                  </div>
                  <div className={cn("w-4 h-4 rounded-full border-2 flex items-center justify-center", payMethod === "card" ? "border-primary-600" : "border-neutral-300")}>
                    {payMethod === "card" && <div className="w-2 h-2 rounded-full bg-primary-600" />}
                  </div>
                </label>
                {/* Bank */}
                <label className={cn("flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all", payMethod === "bank" ? "border-primary-600 bg-primary-50" : "border-neutral-200 hover:border-neutral-300")}>
                  <input type="radio" name="pay" value="bank" checked={payMethod === "bank"} onChange={() => setPayMethod("bank")} className="sr-only" />
                  <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-neutral-500" />
                  </div>
                  <div className="grow">
                    <p className="text-sm font-bold text-neutral-900">Pay with bank transfer</p>
                    <p className="text-xs text-neutral-500">Get a one-time virtual account number</p>
                  </div>
                  <div className={cn("w-4 h-4 rounded-full border-2 flex items-center justify-center", payMethod === "bank" ? "border-primary-600" : "border-neutral-300")}>
                    {payMethod === "bank" && <div className="w-2 h-2 rounded-full bg-primary-600" />}
                  </div>
                </label>
              </div>
            </div>

            <Button variant="primary" size="lg" className="w-full font-bold gap-2 cursor-pointer" asChild>
              <Link href="/order-confirmation">
                <ShieldCheck className="w-5 h-5" />Lock ₦434,700 in escrow
              </Link>
            </Button>
          </div>

          {/* Right sticky */}
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden lg:sticky lg:top-[80px]">
              <div className="aspect-[16/9] bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center">
                <Smartphone className="w-16 h-16 text-indigo-400 opacity-80" strokeWidth={1.5} />
              </div>
              <div className="p-4">
                <p className="text-sm font-bold text-neutral-900">iPhone 14 Pro Max · 256GB Deep Purple</p>
                <p className="text-xs text-neutral-500 mt-0.5">Emeka Okafor · ★ 4.9</p>

                <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col gap-3">
                  {TIMELINE.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5", step.done ? "bg-success-600" : step.active ? "bg-primary-600" : "bg-neutral-200")}>
                        {step.done && <CheckCircle2 className="w-3 h-3 text-white" />}
                        {step.active && !step.done && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <div>
                        <p className={cn("text-xs font-semibold", step.done || step.active ? "text-neutral-900" : "text-neutral-400")}>{step.label}</p>
                        <p className="text-2xs text-neutral-400 mt-0.5">{step.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

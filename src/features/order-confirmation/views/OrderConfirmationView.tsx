import Link from "next/link";
import { CheckCircle2, ShieldCheck, ChevronRight } from "lucide-react";
import { Button } from "@/shared/ui/base/Button";

const NEXT_STEPS = [
  { step: "1.", title: "Seller ships your item",  sub: "Usually within 48 hours of confirmation." },
  { step: "2.", title: "You receive and inspect",  sub: "48-hour window to test the item thoroughly." },
  { step: "3.", title: "Release funds when satisfied", sub: "Or raise a dispute if something's wrong." },
];

export function OrderConfirmationView() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="h-14 bg-white border-b border-neutral-200 px-6 flex items-center justify-between">
        <Link href="/dashboard" className="inline-flex items-center gap-2.5">
          <span className="w-6 h-6 grid grid-cols-2 grid-rows-2 gap-[3px] shrink-0">
            <span className="bg-primary-600 rounded-[3px]" /><span className="bg-primary-500 rounded-[3px]" />
            <span className="bg-primary-500 rounded-[3px]" /><span className="bg-primary-700 rounded-[3px]" />
          </span>
          <span className="text-base font-semibold text-neutral-900">Setlarr</span>
        </Link>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success-50 text-success-700 border border-success-100 text-xs font-bold">
          <CheckCircle2 className="w-3.5 h-3.5" />Order confirmed
        </span>
      </header>

      <div className="max-w-lg mx-auto px-4 py-12 flex flex-col gap-6">
        {/* Success card */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col items-center text-center gap-6">
          <div className="w-18 h-18 rounded-full bg-success-50 border border-success-100 flex items-center justify-center">
            <CheckCircle2 className="w-9 h-9 text-success-600" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-neutral-900 tracking-[-0.4px]">Order confirmed! 🎉</h1>
            <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
              Your <span className="font-bold text-neutral-800">₦434,700</span> is safely held in escrow.
              The seller has been notified and will ship within 48 hours.
            </p>
          </div>

          {/* Summary */}
          <div className="w-full bg-neutral-50 rounded-xl divide-y divide-neutral-100">
            <div className="px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 text-lg">📱</div>
              <div className="grow text-left">
                <p className="text-sm font-semibold text-neutral-900">iPhone 14 Pro Max · 256GB</p>
                <p className="text-xs text-neutral-500">Emeka Okafor</p>
              </div>
              <p className="font-bold text-neutral-900 text-sm shrink-0">₦420,000</p>
            </div>
            {[["Escrow fee", "₦8,400"], ["Verified courier delivery", "₦6,300"]].map(([label, val]) => (
              <div key={label} className="px-4 py-2.5 flex justify-between text-sm">
                <span className="text-neutral-500">{label}</span>
                <span className="font-semibold text-neutral-700">{val}</span>
              </div>
            ))}
            <div className="px-4 py-3 flex justify-between">
              <span className="font-bold text-neutral-900">Total paid</span>
              <span className="font-bold text-neutral-900">₦434,700</span>
            </div>
          </div>

          {/* Next steps */}
          <div className="w-full text-left flex flex-col gap-3">
            <p className="text-xs font-bold tracking-wider uppercase text-neutral-400">What happens next</p>
            {NEXT_STEPS.map((s) => (
              <div key={s.step} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 text-xs font-bold flex items-center justify-center shrink-0">{s.step.replace(".", "")}</span>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{s.title}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="w-full flex flex-col gap-3">
            <Button variant="primary" className="w-full gap-2 font-bold cursor-pointer" asChild>
              <Link href="/orders">
                <ShieldCheck className="w-4 h-4" />Track this order <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="ghost" className="w-full font-semibold cursor-pointer" asChild>
              <Link href="/explore">Continue shopping</Link>
            </Button>
          </div>

          <button className="text-xs font-semibold text-primary-600 hover:underline cursor-pointer flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />Share receipt
          </button>
        </div>
      </div>
    </div>
  );
}

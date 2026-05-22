"use client";

import * as React from "react";
import Link from "next/link";
import { Smartphone, CheckCircle2, AlertTriangle, Clock } from "lucide-react";
import { Button } from "@/shared/ui/base/Button";
import { cn } from "@/lib/utils";

const CHECKS = [
  { label: "Screen is intact with no visible cracks",   hint: "Tilt under good light to check edges and corners." },
  { label: "Device powers on and functions correctly",  hint: "Test Face ID, all cameras, buttons, and speakers." },
  { label: "IMEI matches what was shown in the listing",hint: "Dial *#06# and compare against the IMEI in the listing." },
  { label: "All accessories listed are present",        hint: "Box, MagSafe charger, EarPods, original cable." },
];

const TIMELINE = [
  { label: "Payment locked",    sub: "3 days ago",              done: true   },
  { label: "Item shipped",      sub: "Delivered yesterday",     done: true   },
  { label: "Inspection window", sub: "Open until Fri 9:00 PM",  active: true },
  { label: "Funds released",    sub: "Once you confirm"                      },
];

function useCountdown() {
  const [time, setTime] = React.useState({ h: 36, m: 14, s: 22 });
  React.useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) return prev;
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

export function InspectionView() {
  const { h, m, s } = useCountdown();
  const [checked, setChecked] = React.useState<Set<number>>(new Set([0, 1]));

  const toggle = (i: number) =>
    setChecked((prev) => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });

  const allChecked = checked.size === CHECKS.length;

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      {/* Countdown banner */}
      <div className="bg-warning-50 border border-warning-100 rounded-xl px-5 py-4 text-center">
        <p className="text-xs font-bold tracking-wider uppercase text-warning-600 mb-2">Inspection window closes in</p>
        <p className="text-5xl font-bold text-neutral-900 font-mono tracking-[-2px]">
          {String(h).padStart(2, "0")}:{String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
        </p>
        <p className="text-xs text-neutral-500 mt-2">Closes Fri, Nov 15 at 9:00 PM</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        {/* Checklist */}
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 tracking-[-0.4px]">Inspection checklist</h1>
            <p className="text-sm text-neutral-500 mt-1">Check each item before releasing payment.</p>
          </div>

          <div className="flex flex-col gap-3">
            {CHECKS.map((c, i) => (
              <label
                key={i}
                className={cn(
                  "flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all",
                  checked.has(i) ? "border-success-500 bg-success-50/30" : "border-neutral-200 hover:border-neutral-300 bg-white"
                )}
              >
                <div
                  className={cn(
                    "w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all",
                    checked.has(i) ? "bg-success-600 border-success-600" : "border-neutral-300 bg-white"
                  )}
                  onClick={() => toggle(i)}
                >
                  {checked.has(i) && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <div>
                  <p className={cn("text-sm font-semibold", checked.has(i) ? "text-neutral-900" : "text-neutral-700")}>{c.label}</p>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">{c.hint}</p>
                </div>
              </label>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button
              variant="primary"
              size="lg"
              className={cn("flex-1 gap-2 font-bold cursor-pointer", !allChecked && "opacity-60", "bg-success-600 hover:bg-success-700")}
              disabled={!allChecked}
            >
              <CheckCircle2 className="w-5 h-5" />Release funds
            </Button>
            <Button variant="outline" size="lg" className="flex-1 gap-2 font-semibold text-error-600 border-error-200 hover:bg-error-50 cursor-pointer">
              <AlertTriangle className="w-5 h-5" />Raise dispute
            </Button>
          </div>
          {!allChecked && (
            <p className="text-xs text-neutral-400 text-center">Complete all checks before releasing funds</p>
          )}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-4">
          <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden lg:sticky lg:top-[80px]">
            <div className="aspect-[4/3] bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center">
              <Smartphone className="w-14 h-14 text-indigo-400 opacity-80" strokeWidth={1.5} />
            </div>
            <div className="p-4">
              <p className="text-sm font-bold text-neutral-900">iPhone 14 Pro Max · 256GB Deep Purple</p>
              <p className="text-2xs text-neutral-500 mt-0.5">₦420,000 · Order #SET-4012 · sold by Emeka Okafor</p>

              {/* Mini timer */}
              <div className="mt-4 bg-warning-50 border border-warning-100 rounded-lg px-3 py-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-warning-600 shrink-0" />
                <p className="text-xs font-bold text-neutral-900">{String(h).padStart(2, "0")}h {String(m).padStart(2, "0")}m {String(s).padStart(2, "0")}s</p>
              </div>

              {/* Timeline */}
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
  );
}

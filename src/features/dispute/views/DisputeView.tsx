"use client";

import * as React from "react";
import { Smartphone, Upload, CheckCircle2, Clock, Copy, ChevronRight, AlertTriangle } from "lucide-react";
import { Button } from "@/shared/ui/base/Button";
import { Badge } from "@/shared/ui/base/Badge";
import { cn } from "@/lib/utils";

type DisputeState = "raise" | "submitted" | "review";

const ISSUE_TYPES = [
  "Item not as described",
  "Item never arrived",
  "Damaged on arrival",
  "Counterfeit / fake",
];

const TIMELINE = [
  { label: "Dispute raised",         sub: "Today, 14:22 by buyer",               done: true   },
  { label: "Evidence reviewed",       sub: "Setlarr agent assigned",              active: true },
  { label: "Decision made",          sub: "Both parties notified"                              },
  { label: "Funds released or returned", sub: "Settlement within 24h of decision"             },
];

export function DisputeView() {
  const [state, setState] = React.useState<DisputeState>("raise");
  const [issue, setIssue] = React.useState("Item not as described");
  const [copied, setCopied] = React.useState(false);

  const copyCase = () => {
    navigator.clipboard.writeText("#7821");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300 max-w-2xl mx-auto">
      {/* Breadcrumb */}
      <nav className="text-xs text-neutral-500 font-medium flex items-center gap-1.5">
        <span className="hover:text-primary-600 cursor-pointer">Orders</span>
        <ChevronRight className="w-3 h-3" />
        <span className="hover:text-primary-600 cursor-pointer">iPhone 14 Pro Max</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-neutral-900 font-semibold">Raise dispute</span>
      </nav>

      {/* ── State: Raise ── */}
      {state === "raise" && (
        <>
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 tracking-[-0.5px]">Raise a dispute</h1>
            <p className="text-sm text-neutral-500 mt-1">Tell us what's wrong. We'll review and respond within 24 hours.</p>
          </div>

          {/* Item recap */}
          <div className="bg-neutral-50 border border-neutral-100 rounded-xl px-5 py-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
              <Smartphone className="w-6 h-6 text-indigo-500" strokeWidth={1.5} />
            </div>
            <div className="grow min-w-0">
              <p className="text-sm font-bold text-neutral-900 truncate">iPhone 14 Pro Max · 256GB Deep Purple</p>
              <p className="text-xs text-neutral-500 mt-0.5">Order #SET-4012 · Emeka Okafor</p>
            </div>
            <Badge variant="primary" className="font-bold shrink-0">₦420,000 in escrow</Badge>
          </div>

          {/* Form */}
          <div className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col gap-6">
            {/* Issue type */}
            <div>
              <p className="text-sm font-bold text-neutral-700 mb-3">What is the issue?</p>
              <div className="flex flex-wrap gap-2">
                {ISSUE_TYPES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setIssue(t)}
                    className={cn(
                      "px-3 py-2 rounded-xl text-xs font-semibold border-2 transition-all cursor-pointer",
                      issue === t
                        ? "border-error-500 bg-error-50 text-error-700"
                        : "border-neutral-200 text-neutral-600 hover:border-neutral-300"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold text-neutral-700 mb-2">Describe the problem</label>
              <textarea
                rows={5}
                placeholder="Be specific — include what was promised and what you received."
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors"
              />
            </div>

            {/* Evidence upload */}
            <div>
              <label className="block text-sm font-bold text-neutral-700 mb-2">Attach evidence</label>
              <div className="border-2 border-dashed border-neutral-200 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-primary-400 hover:bg-primary-50/20 transition-all cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  <Upload className="w-5 h-5 text-neutral-400" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-neutral-700">Upload photos or videos</p>
                  <p className="text-xs text-neutral-400 mt-0.5">PNG, JPG, MP4 up to 50MB each</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="destructive"
              size="lg"
              className="flex-1 gap-2 font-bold cursor-pointer"
              onClick={() => setState("submitted")}
            >
              <AlertTriangle className="w-5 h-5" />Submit dispute
            </Button>
            <Button variant="outline" size="lg" className="font-semibold cursor-pointer">
              Cancel
            </Button>
          </div>
        </>
      )}

      {/* ── State: Submitted ── */}
      {state === "submitted" && (
        <div className="flex flex-col items-center text-center gap-6 py-8">
          <div className="w-16 h-16 rounded-full bg-success-50 border border-success-100 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-success-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 tracking-[-0.4px]">Dispute submitted</h1>
            <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
              We'll review your case and respond within 24 hours. Funds remain in escrow until resolved.
            </p>
          </div>
          <div className="bg-neutral-50 border border-neutral-100 rounded-xl px-5 py-3 flex items-center gap-3">
            <p className="text-sm font-bold text-neutral-900">Case #7821</p>
            <button
              onClick={copyCase}
              className="text-xs text-primary-600 font-semibold flex items-center gap-1 hover:underline cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />{copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
            <Button variant="primary" className="flex-1 font-bold cursor-pointer" onClick={() => setState("review")}>
              View case status
            </Button>
            <Button variant="outline" className="flex-1 font-semibold cursor-pointer">
              My orders
            </Button>
          </div>
        </div>
      )}

      {/* ── State: Under Review ── */}
      {state === "review" && (
        <>
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 tracking-[-0.5px]">Dispute status</h1>
          </div>

          {/* Review banner */}
          <div className="bg-warning-50 border border-warning-100 rounded-xl px-5 py-4 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-warning-600 shrink-0" />
              <div>
                <p className="text-sm font-bold text-neutral-900">Case #7821 under review</p>
                <p className="text-xs text-neutral-500 mt-0.5">Setlarr support is reviewing the evidence.</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xs text-neutral-400 uppercase tracking-wider font-bold">Est. resolution</p>
              <p className="text-sm font-bold text-neutral-900">Nov 16, 2026</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white border border-neutral-200 rounded-xl p-5">
            <p className="text-sm font-bold text-neutral-900 mb-5">Case timeline</p>
            <div className="flex flex-col gap-4">
              {TIMELINE.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center shrink-0",
                      step.done ? "bg-success-600" : step.active ? "bg-primary-600" : "bg-neutral-200"
                    )}>
                      {step.done && <CheckCircle2 className="w-4 h-4 text-white" />}
                      {step.active && !step.done && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                    </div>
                    {idx < TIMELINE.length - 1 && (
                      <div className={cn("w-px flex-1 my-1", step.done ? "bg-success-300" : "bg-neutral-200")} style={{ minHeight: 24 }} />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className={cn("text-sm font-semibold", step.done || step.active ? "text-neutral-900" : "text-neutral-400")}>
                      {step.label}
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">{step.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

"use client";

import * as React from "react";
import { Check, Circle, ChevronLeft, ChevronRight, Lightbulb, Tag, X, Upload } from "lucide-react";
import { Button } from "@/shared/ui/base/Button";
import { cn } from "@/lib/utils";

const STEPS = [
  { label: "Photos",            status: "done",    sub: "4 uploaded" },
  { label: "Item details",      status: "current", sub: "In progress" },
  { label: "Pricing & delivery",status: "next",    sub: "Up next" },
];

const CONDITIONS = ["Like new", "Good", "Fair"];
const CATEGORIES = ["Phones", "Laptops", "Fashion", "Home", "Vehicles", "Gaming", "Audio", "Other"];
const DEFAULT_TAGS = ["iphone", "apple", "256gb", "deep-purple"];

export function NewListingView() {
  const [condition, setCondition] = React.useState("Like new");
  const [category, setCategory] = React.useState("Phones");
  const [negotiable, setNegotiable] = React.useState(true);
  const [tags, setTags] = React.useState<string[]>(DEFAULT_TAGS);
  const [tagInput, setTagInput] = React.useState("");

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      setTags((prev) => [...prev, tagInput.trim().toLowerCase()]);
      setTagInput("");
    }
  };
  const removeTag = (tag: string) => setTags((prev) => prev.filter((t) => t !== tag));

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Custom header */}
      <header className="h-14 bg-white border-b border-neutral-200 px-6 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 grid grid-cols-2 grid-rows-2 gap-[2px]" aria-hidden="true">
            <span className="bg-primary-600 rounded-[2px]" />
            <span className="bg-primary-500 rounded-[2px]" />
            <span className="bg-primary-500 rounded-[2px]" />
            <span className="bg-primary-700 rounded-[2px]" />
          </span>
          <span className="text-base font-semibold text-neutral-900">Setlarr</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-warning-200 bg-warning-50 text-warning-700 text-xs font-bold">
            <Tag className="w-3 h-3" />New listing
          </span>
          <button className="flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-800 cursor-pointer">
            <X className="w-4 h-4" />Save &amp; exit
          </button>
        </div>
      </header>

      <div className="max-w-[1100px] mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 tracking-[-0.5px]">List a new item</h1>
          <p className="text-sm text-neutral-500 mt-1">Create a listing that buyers trust. Each step takes about a minute.</p>
        </div>

        <div className="flex gap-8 items-start">
          {/* Progress sidebar */}
          <div className="w-[220px] shrink-0 flex flex-col gap-4">
            <p className="text-2xs font-bold tracking-wider uppercase text-neutral-400">LISTING PROGRESS</p>

            <div className="flex flex-col">
              {STEPS.map((step, idx) => (
                <div key={step.label} className="flex gap-3">
                  {/* Step indicator + connector */}
                  <div className="flex flex-col items-center">
                    <div className={cn(
                      "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border-2 transition-colors",
                      step.status === "done"    ? "bg-primary-600 border-primary-600"
                        : step.status === "current" ? "border-primary-600 bg-white"
                        : "border-neutral-300 bg-white"
                    )}>
                      {step.status === "done" ? (
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                      ) : step.status === "current" ? (
                        <Circle className="w-2.5 h-2.5 fill-primary-600 text-primary-600" />
                      ) : (
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                      )}
                    </div>
                    {idx < STEPS.length - 1 && (
                      <div className={cn("w-px flex-1 my-1", step.status === "done" ? "bg-primary-300" : "bg-neutral-200")} style={{ minHeight: 28 }} />
                    )}
                  </div>

                  <div className="pb-6">
                    <p className={cn("text-sm font-bold", step.status === "next" ? "text-neutral-400" : "text-neutral-900")}>
                      {step.label}
                    </p>
                    <p className={cn("text-xs mt-0.5", step.status === "done" ? "text-primary-600 font-semibold" : "text-neutral-400")}>
                      {step.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tip card */}
            <div className="bg-warning-50 border border-warning-100 rounded-xl p-4">
              <div className="w-7 h-7 rounded-lg bg-warning-100 flex items-center justify-center mb-3">
                <Lightbulb className="w-3.5 h-3.5 text-warning-600" />
              </div>
              <p className="text-sm font-bold text-neutral-900 mb-1">Be accurate, get verified faster</p>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Listings that match the item exactly get the verified badge within 24h and earn 3× more views.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 min-w-0 bg-white border border-neutral-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-neutral-900 tracking-[-0.4px] mb-1">Describe your item</h2>
            <p className="text-sm text-neutral-500 mb-6">Be accurate. Mismatches cause disputes and affect your rating.</p>

            <div className="flex flex-col gap-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Title</label>
                <input
                  type="text"
                  defaultValue="iPhone 14 Pro Max 256GB · Deep Purple"
                  className="w-full h-11 px-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors"
                />
                <p className="text-xs text-neutral-400 mt-1.5">Keep it clear — brand, model, storage, colour.</p>
              </div>

              {/* Category + Condition */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Category</label>
                  <div className="relative">
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full h-11 pl-3 pr-8 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 appearance-none transition-colors bg-white cursor-pointer"
                    >
                      {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                    </select>
                    <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 rotate-90 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Condition</label>
                  <div className="flex gap-2">
                    {CONDITIONS.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCondition(c)}
                        className={cn(
                          "flex-1 h-11 rounded-xl text-sm font-semibold border transition-all cursor-pointer",
                          condition === c
                            ? "bg-primary-600 text-white border-primary-600"
                            : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300"
                        )}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Brand + Model */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Brand</label>
                  <input type="text" defaultValue="Apple" className="w-full h-11 px-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Model</label>
                  <input type="text" defaultValue="iPhone 14 Pro Max" className="w-full h-11 px-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors" />
                </div>
              </div>

              {/* Price + Negotiable */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-neutral-500">₦</span>
                    <input type="text" defaultValue="420,000" className="w-full h-11 pl-7 pr-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Negotiable</label>
                  <div className="flex items-center gap-3 h-11">
                    <button
                      onClick={() => setNegotiable((v) => !v)}
                      className={cn(
                        "relative w-11 h-6 rounded-full transition-colors cursor-pointer shrink-0",
                        negotiable ? "bg-primary-600" : "bg-neutral-200"
                      )}
                    >
                      <span className={cn("absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform", negotiable ? "translate-x-5" : "translate-x-0")} />
                    </button>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">Price is negotiable</p>
                      <p className="text-xs text-neutral-500">Buyers can send offers below the asking price.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Description</label>
                <textarea
                  rows={5}
                  defaultValue="Bought outright from the Apple Store in November 2023, only 11 months of use. No scratches on the screen or body — kept in a MagSafe case from day one. Battery health 92%. Comes with original box, unused EarPods, and an unopened MagSafe charger."
                  className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-900 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors"
                />
                <p className="text-xs text-neutral-400 mt-1.5">Mention battery health, scratches, repairs, and what's included.</p>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Tags</label>
                <div className="min-h-[44px] px-3 py-2 rounded-xl border border-neutral-200 flex flex-wrap gap-2 items-center focus-within:ring-2 focus-within:ring-primary-500/20 focus-within:border-primary-400 transition-colors">
                  {tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary-50 text-primary-700 border border-primary-100 rounded-full text-xs font-semibold">
                      {tag}
                      <button onClick={() => removeTag(tag)} className="text-primary-400 hover:text-primary-700 cursor-pointer">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={addTag}
                    placeholder="Type a tag and press Enter..."
                    className="flex-1 min-w-[160px] text-sm text-neutral-900 placeholder:text-neutral-400 outline-none bg-transparent"
                  />
                </div>
                <p className="text-xs text-neutral-400 mt-1.5">Tags help buyers find your listing in search.</p>
              </div>
            </div>

            {/* Bottom action bar */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-neutral-100 flex-wrap gap-4">
              <Button variant="outline" className="gap-2 font-semibold cursor-pointer">
                <ChevronLeft className="w-4 h-4" />Back
              </Button>
              <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-500">Step 2 of 3</span>
                <button className="text-sm font-semibold text-neutral-600 hover:underline cursor-pointer">Save draft</button>
                <Button variant="primary" className="gap-2 font-bold cursor-pointer">
                  Continue to pricing
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

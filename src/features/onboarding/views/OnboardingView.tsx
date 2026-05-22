"use client";

import { useState } from "react";
import {
  ShoppingBag,
  Tag,
  Repeat,
  Compass,
  Lock,
  Check,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/shared/ui/base/Button";
import { Badge } from "@/shared/ui/base/Badge";
import { cn } from "@/lib/utils";

type OnboardingStep = 1 | 2 | 3;

interface RoleOption {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
  badge?: string;
}

interface LocationOption {
  id: string;
  city: string;
  traders: string;
}

interface CategoryOption {
  id: string;
  label: string;
}

const roleOptions: RoleOption[] = [
  {
    id: "buy",
    icon: <ShoppingBag className="w-5 h-5 text-indigo-600" />,
    iconBg: "bg-indigo-50",
    title: "I'm here to buy",
    subtitle: "Find great deals from verified sellers",
  },
  {
    id: "sell",
    icon: <Tag className="w-5 h-5 text-warning-600" />,
    iconBg: "bg-warning-50",
    title: "I'm here to sell",
    subtitle: "List items and reach thousands of buyers",
  },
  {
    id: "both",
    icon: <Repeat className="w-5 h-5 text-success-600" />,
    iconBg: "bg-success-50",
    title: "Both — buy & sell",
    subtitle: "Get the full Setlarr experience",
    badge: "Most popular",
  },
  {
    id: "browse",
    icon: <Compass className="w-5 h-5 text-neutral-500" />,
    iconBg: "bg-neutral-100",
    title: "Just browsing",
    subtitle: "Explore listings without committing",
  },
];

const locationOptions: LocationOption[] = [
  { id: "lagos", city: "Lagos", traders: "7,400+ active traders" },
  { id: "abuja", city: "Abuja", traders: "2,100+ active traders" },
  { id: "ibadan", city: "Ibadan", traders: "1,300+ active traders" },
  { id: "port-harcourt", city: "Port Harcourt", traders: "900+ active traders" },
  { id: "other", city: "Somewhere else in Nigeria", traders: "" },
];

const categoryOptions: CategoryOption[] = [
  { id: "phones", label: "Phones" },
  { id: "laptops", label: "Laptops" },
  { id: "audio", label: "Audio" },
  { id: "fashion", label: "Fashion" },
  { id: "home", label: "Home" },
  { id: "gaming", label: "Gaming" },
  { id: "automotive", label: "Automotive" },
  { id: "beauty", label: "Beauty" },
  { id: "books", label: "Books" },
];

const stepMeta = [
  { label: "Your role", subtitle: "Tell us how you plan to use Setlarr" },
  { label: "Your location", subtitle: "Connect with traders near you" },
  { label: "Preferences", subtitle: "Pick the categories you care about" },
];

const benefits = [
  "Personalised listing recommendations",
  "Matched with local verified traders",
  "Relevant fee & payout guidance",
];

export function OnboardingView() {
  const [step, setStep] = useState<OnboardingStep>(1);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const canContinue =
    (step === 1 && selectedRole !== null) ||
    (step === 2 && selectedLocation !== null) ||
    (step === 3 && selectedCategories.size >= 1);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-bold text-primary-600 tracking-tight">Setlarr</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-neutral-500 hidden sm:block">
            Step {step} of 3
          </span>
          <Button variant="ghost" size="sm" className="text-neutral-600">
            Save &amp; exit
          </Button>
        </div>
      </header>

      {/* Body */}
      <div className="flex-1 grid md:grid-cols-[440px_1fr] min-h-0">
        {/* Left panel */}
        <aside className="bg-primary-600 text-white p-8 flex flex-col gap-8">
          {/* Pill badge */}
          <Badge className="self-start bg-white/10 text-white border-white/20 rounded-full">
            Setting up your account
          </Badge>

          {/* Headline */}
          <h1 className="text-3xl font-bold leading-tight">
            Three steps and you&apos;re{" "}
            <em className="not-italic italic">trading.</em>
          </h1>

          {/* Stepper */}
          <div className="flex flex-col gap-0">
            {stepMeta.map((s, idx) => {
              const stepNum = (idx + 1) as OnboardingStep;
              const isActive = step === stepNum;
              const isCompleted = step > stepNum;

              return (
                <div key={s.label} className="flex gap-4">
                  {/* Column: circle + connector */}
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors",
                        isCompleted
                          ? "bg-white border-white"
                          : isActive
                          ? "bg-white border-white"
                          : "bg-white/10 border-white/30"
                      )}
                    >
                      {isCompleted ? (
                        <Check className="w-4 h-4 text-primary-600" />
                      ) : (
                        <span
                          className={cn(
                            "text-sm font-bold",
                            isActive ? "text-primary-600" : "text-white/60"
                          )}
                        >
                          {stepNum}
                        </span>
                      )}
                    </div>
                    {idx < stepMeta.length - 1 && (
                      <div
                        className={cn(
                          "w-0.5 flex-1 my-1 min-h-[28px]",
                          isCompleted ? "bg-white" : "bg-white/20"
                        )}
                      />
                    )}
                  </div>

                  {/* Column: text */}
                  <div className="pb-6">
                    <p
                      className={cn(
                        "font-semibold text-sm",
                        isActive || isCompleted ? "text-white" : "text-white/50"
                      )}
                    >
                      {s.label}
                    </p>
                    <p
                      className={cn(
                        "text-xs mt-0.5",
                        isActive || isCompleted ? "text-white/70" : "text-white/30"
                      )}
                    >
                      {s.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Benefit card */}
          <div className="bg-white/10 rounded-xl p-5 mt-auto flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-white/70" />
              <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                Why we ask
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-white/80">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Right panel */}
        <div className="bg-white flex flex-col overflow-y-auto">
          <div className="flex-1 p-8">
            {/* ── Step 1: Role ── */}
            {step === 1 && (
              <div className="flex flex-col gap-6 max-w-lg">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold tracking-widest uppercase text-primary-600">
                    Question 1 of 3
                  </span>
                  <h2 className="text-2xl font-bold text-neutral-900">
                    How will you mostly use Setlarr?
                  </h2>
                  <p className="text-sm text-neutral-500">
                    This helps us customise your experience from day one.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {roleOptions.map((opt) => {
                    const isSelected = selectedRole === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedRole(opt.id)}
                        className={cn(
                          "relative flex flex-col gap-3 p-4 rounded-xl border-2 text-left transition-colors cursor-pointer",
                          isSelected
                            ? "border-primary-600 bg-primary-50"
                            : "border-neutral-200 hover:border-neutral-300 bg-white"
                        )}
                      >
                        {opt.badge && (
                          <Badge variant="success" className="absolute top-3 right-3 text-2xs">
                            {opt.badge}
                          </Badge>
                        )}
                        <div
                          className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center",
                            opt.iconBg
                          )}
                        >
                          {opt.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-neutral-900">{opt.title}</p>
                          <p className="text-xs text-neutral-500 mt-0.5">{opt.subtitle}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <Lock className="w-3.5 h-3.5 text-neutral-400" />
                  Private — your answers are never shared
                </div>
              </div>
            )}

            {/* ── Step 2: Location ── */}
            {step === 2 && (
              <div className="flex flex-col gap-6 max-w-lg">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold tracking-widest uppercase text-primary-600">
                    Question 2 of 3
                  </span>
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Where are you based?
                  </h2>
                  <p className="text-sm text-neutral-500">
                    We&apos;ll show you listings and traders near you.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  {locationOptions.map((opt) => {
                    const isSelected = selectedLocation === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedLocation(opt.id)}
                        className={cn(
                          "flex items-center justify-between p-4 rounded-xl border-2 text-left transition-colors cursor-pointer",
                          isSelected
                            ? "border-primary-600 bg-primary-50"
                            : "border-neutral-200 hover:border-neutral-300 bg-white"
                        )}
                      >
                        <div>
                          <p className="font-semibold text-sm text-neutral-900">{opt.city}</p>
                          {opt.traders && (
                            <p className="text-xs text-neutral-500 mt-0.5">{opt.traders}</p>
                          )}
                        </div>
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                            isSelected
                              ? "border-primary-600 bg-primary-600"
                              : "border-neutral-300"
                          )}
                        >
                          {isSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── Step 3: Preferences ── */}
            {step === 3 && (
              <div className="flex flex-col gap-6 max-w-lg">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold tracking-widest uppercase text-primary-600">
                    Question 3 of 3
                  </span>
                  <h2 className="text-2xl font-bold text-neutral-900">
                    What are you interested in?
                  </h2>
                  <p className="text-sm text-neutral-500">
                    Select all the categories you care about.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {categoryOptions.map((cat) => {
                    const isSelected = selectedCategories.has(cat.id);
                    return (
                      <button
                        key={cat.id}
                        onClick={() => toggleCategory(cat.id)}
                        className={cn(
                          "relative flex items-center justify-between p-4 rounded-xl border-2 text-left transition-colors cursor-pointer",
                          isSelected
                            ? "border-primary-600 bg-primary-50"
                            : "border-neutral-200 hover:border-neutral-300 bg-white"
                        )}
                      >
                        <span className="text-sm font-semibold text-neutral-900">{cat.label}</span>
                        {isSelected && (
                          <div className="w-4 h-4 rounded-full bg-primary-600 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                <p className="text-xs text-neutral-500">
                  {selectedCategories.size} selected &middot; pick at least 1
                </p>
              </div>
            )}
          </div>

          {/* Bottom action bar */}
          <div className="border-t border-neutral-200 px-8 py-4 bg-white flex items-center justify-between sticky bottom-0">
            <Button
              variant="outline"
              onClick={() => setStep((s) => Math.max(1, s - 1) as OnboardingStep)}
              disabled={step === 1}
            >
              Back
            </Button>
            <Button
              variant="primary"
              disabled={!canContinue}
              onClick={() => {
                if (step < 3) setStep((s) => (s + 1) as OnboardingStep);
              }}
            >
              {step === 3 ? "Finish setup" : "Continue"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import {
  User, FileText, Camera, CheckCircle2, ChevronRight,
  Eye, EyeOff, Upload, Sun, Info,
} from "lucide-react";
import { Button } from "@/shared/ui/base/Button";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4;
type DocType = "nin" | "license" | "passport";

const STEPS = [
  { step: 1, label: "Personal info", icon: User     },
  { step: 2, label: "ID document",   icon: FileText  },
  { step: 3, label: "Selfie",        icon: Camera    },
  { step: 4, label: "Review",        icon: CheckCircle2 },
];

const DOC_TYPES: { id: DocType; label: string; sub: string }[] = [
  { id: "nin",      label: "NIN slip",        sub: "National Identity Number slip" },
  { id: "license",  label: "Driver's license", sub: "Valid Nigerian driver's license" },
  { id: "passport", label: "Int'l passport",   sub: "International passport bio-data page" },
];

const SELFIE_TIPS = [
  { icon: Sun,    label: "Good lighting" },
  { icon: Eye,    label: "Look forward" },
  { icon: Camera, label: "Clear photo"  },
];

export function IdentityVerificationView() {
  const [step, setStep] = React.useState<Step>(1);
  const [docType, setDocType] = React.useState<DocType>("nin");
  const [showNin, setShowNin] = React.useState(false);
  const [showBvn, setShowBvn] = React.useState(false);

  const next = () => setStep((s) => Math.min(4, s + 1) as Step);
  const back = () => setStep((s) => Math.max(1, s - 1) as Step);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300 max-w-2xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900 tracking-[-0.5px]">Verify your identity</h1>
        <p className="text-sm text-neutral-500 mt-1">Required to start selling on Setlarr. Takes about 3 minutes.</p>
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-0 bg-white border border-neutral-200 rounded-xl p-4">
        {STEPS.map((s, idx) => (
          <React.Fragment key={s.step}>
            <div className="flex items-center gap-2 flex-1">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all shrink-0",
                step > s.step ? "bg-success-600 text-white" : step === s.step ? "bg-primary-600 text-white" : "bg-neutral-100 text-neutral-400"
              )}>
                {step > s.step ? <CheckCircle2 className="w-4 h-4" /> : s.step}
              </div>
              <span className={cn("text-xs font-semibold hidden sm:block", step === s.step ? "text-neutral-900" : "text-neutral-400")}>
                {s.label}
              </span>
            </div>
            {idx < STEPS.length - 1 && <div className={cn("h-px flex-1 mx-2", step > s.step ? "bg-success-400" : "bg-neutral-200")} />}
          </React.Fragment>
        ))}
      </div>

      {/* Step content */}
      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
        {/* ── Step 1: Personal info ── */}
        {step === 1 && (
          <div className="p-5 flex flex-col gap-5">
            <div className="bg-primary-50 border border-primary-100 rounded-xl px-4 py-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-primary-600 shrink-0" />
              <p className="text-xs text-primary-700">Your data is encrypted and only used for verification. Never shared with third parties.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Full legal name</label>
                <input type="text" defaultValue="Adaeze Okonkwo" className="w-full h-11 px-4 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Date of birth</label>
                <input type="text" defaultValue="14 / 03 / 1998" className="w-full h-11 px-4 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Gender</label>
                <select className="w-full h-11 px-4 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors bg-white cursor-pointer">
                  <option>Female</option><option>Male</option><option>Prefer not to say</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">NIN number</label>
                <div className="relative">
                  <input type={showNin ? "text" : "password"} defaultValue="12345678901" maxLength={11} className="w-full h-11 px-4 pr-10 rounded-xl border border-neutral-200 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors" />
                  <button onClick={() => setShowNin((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 cursor-pointer">
                    {showNin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">BVN number</label>
                <div className="relative">
                  <input type={showBvn ? "text" : "password"} defaultValue="22345678" maxLength={11} className="w-full h-11 px-4 pr-10 rounded-xl border border-neutral-200 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors" />
                  <button onClick={() => setShowBvn((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 cursor-pointer">
                    {showBvn ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Step 2: ID document ── */}
        {step === 2 && (
          <div className="p-5 flex flex-col gap-5">
            <div>
              <h2 className="text-lg font-bold text-neutral-900">Upload your ID</h2>
              <p className="text-sm text-neutral-500 mt-0.5">Choose a document and upload clear photos.</p>
            </div>
            <div className="flex flex-col gap-2">
              {DOC_TYPES.map((dt) => (
                <button
                  key={dt.id}
                  onClick={() => setDocType(dt.id)}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3.5 rounded-xl border-2 transition-all cursor-pointer text-left",
                    docType === dt.id ? "border-primary-600 bg-primary-50" : "border-neutral-200 hover:border-neutral-300"
                  )}
                >
                  <FileText className={cn("w-5 h-5 shrink-0", docType === dt.id ? "text-primary-600" : "text-neutral-400")} />
                  <div>
                    <p className={cn("text-sm font-bold", docType === dt.id ? "text-primary-700" : "text-neutral-800")}>{dt.label}</p>
                    <p className="text-xs text-neutral-500">{dt.sub}</p>
                  </div>
                  <div className={cn("ml-auto w-4 h-4 rounded-full border-2 flex items-center justify-center", docType === dt.id ? "border-primary-600" : "border-neutral-300")}>
                    {docType === dt.id && <div className="w-2 h-2 rounded-full bg-primary-600" />}
                  </div>
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Front of ID", "Back of ID"].map((side) => (
                <div key={side} className="aspect-[3/2] border-2 border-dashed border-neutral-200 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-primary-400 hover:bg-primary-50/20 transition-all cursor-pointer">
                  <Upload className="w-6 h-6 text-neutral-400" />
                  <p className="text-xs font-semibold text-neutral-500">{side}</p>
                </div>
              ))}
            </div>
            <div className="bg-neutral-50 rounded-xl p-4">
              <p className="text-2xs font-bold tracking-wider uppercase text-neutral-400 mb-2">Tips for a good photo</p>
              {["Use good, even lighting", "Place ID flat on a dark surface", "All 4 corners must be visible"].map((tip) => (
                <p key={tip} className="text-xs text-neutral-500 flex items-center gap-1.5 mt-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-success-500 shrink-0" />{tip}</p>
              ))}
            </div>
          </div>
        )}

        {/* ── Step 3: Selfie ── */}
        {step === 3 && (
          <div className="p-5 flex flex-col gap-5 items-center text-center">
            <div>
              <h2 className="text-lg font-bold text-neutral-900">Take a selfie</h2>
              <p className="text-sm text-neutral-500 mt-0.5">Hold your {DOC_TYPES.find((d) => d.id === docType)?.label ?? "ID"} next to your face.</p>
            </div>
            <div className="w-48 h-48 rounded-full border-4 border-dashed border-primary-400 flex items-center justify-center bg-neutral-50">
              <User className="w-20 h-20 text-neutral-300" />
            </div>
            <div className="flex items-center gap-6">
              {SELFIE_TIPS.map((tip) => (
                <div key={tip.label} className="flex flex-col items-center gap-1.5">
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center">
                    <tip.icon className="w-4.5 h-4.5 text-neutral-500" />
                  </div>
                  <p className="text-xs font-semibold text-neutral-500">{tip.label}</p>
                </div>
              ))}
            </div>
            <Button variant="primary" size="lg" className="w-full gap-2 font-bold cursor-pointer">
              <Camera className="w-5 h-5" />Open camera
            </Button>
            <button className="text-sm font-semibold text-primary-600 hover:underline cursor-pointer">Upload photo instead</button>
          </div>
        )}

        {/* ── Step 4: Review ── */}
        {step === 4 && (
          <div className="p-5 flex flex-col gap-5">
            <div>
              <h2 className="text-lg font-bold text-neutral-900">Review & submit</h2>
              <p className="text-sm text-neutral-500 mt-0.5">Make sure everything looks right before submitting.</p>
            </div>
            <div className="flex flex-col divide-y divide-neutral-100">
              {[
                ["Full name", "Adaeze Okonkwo"],
                ["Date of birth", "14 March 1998"],
                ["NIN", "●●●●●●●8901"],
                ["BVN", "●●●●●●●5678"],
              ].map(([label, val]) => (
                <div key={label} className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-bold text-neutral-900 mt-0.5">{val}</p>
                  </div>
                  <button className="text-xs font-semibold text-primary-600 hover:underline cursor-pointer">Edit</button>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-3">Uploaded documents</p>
              <div className="flex gap-3">
                {["NIN Front", "NIN Back", "Selfie"].map((doc) => (
                  <div key={doc} className="flex-1 aspect-[3/2] bg-neutral-100 rounded-xl flex flex-col items-center justify-center gap-1">
                    <CheckCircle2 className="w-5 h-5 text-success-500" />
                    <p className="text-2xs font-semibold text-neutral-500">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
            <Button variant="primary" size="lg" className="w-full gap-2 font-bold cursor-pointer">
              Submit for verification <ChevronRight className="w-5 h-5" />
            </Button>
            <p className="text-xs text-neutral-400 text-center">Usually approved within 2–24 hours.</p>
          </div>
        )}

        {/* Nav footer */}
        <div className="px-5 py-4 border-t border-neutral-100 flex items-center justify-between">
          <Button variant="outline" onClick={back} disabled={step === 1} className="font-semibold cursor-pointer">
            Back
          </Button>
          {step < 4 ? (
            <Button variant="primary" onClick={next} className="gap-2 font-bold cursor-pointer">
              Continue <ChevronRight className="w-4 h-4" />
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

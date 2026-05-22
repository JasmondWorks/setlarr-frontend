"use client";

import * as React from "react";
import { Building2, Star, Trash2, Lock, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/shared/ui/base/Button";
import { Badge } from "@/shared/ui/base/Badge";
import NavItem from "@/shared/ui/components/NavItem";
import { User, Shield, Bell, Sun, MapPin, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Personal info",  icon: User,     href: "/profile" },
  { label: "Identity",       icon: Shield,   href: "/profile/verify" },
  { label: "Bank accounts",  icon: Building2, href: "/profile/bank-accounts" },
  { label: "Notifications",  icon: Bell,     href: "#notifications" },
  { label: "Appearance",     icon: Sun,      href: "#appearance" },
  { label: "Location",       icon: MapPin,   href: "#location" },
];

const BANKS = ["Access Bank", "GTBank", "First Bank", "Zenith Bank", "UBA", "Kuda", "Opay", "Moniepoint"];

export function BankAccountsView() {
  const [bank, setBank] = React.useState("");
  const [account, setAccount] = React.useState("");
  const [isPrimary, setIsPrimary] = React.useState(false);
  const [verified, setVerified] = React.useState(false);

  const handleAccountChange = (val: string) => {
    setAccount(val);
    setVerified(val.length === 10);
  };

  return (
    <div className="flex gap-6 items-start animate-in fade-in duration-300">
      {/* Left panel */}
      <div className="w-[220px] shrink-0 bg-white border border-neutral-200 rounded-xl overflow-hidden hidden md:block">
        <div className="p-5 flex flex-col items-center gap-2 border-b border-neutral-100">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-800">AO</div>
          <div className="text-center">
            <p className="text-sm font-bold text-neutral-900">Ada Okonkwo</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-success-600 mt-1">
              <CheckCircle2 className="w-3 h-3" />Verified
            </span>
          </div>
        </div>
        <nav className="p-2 flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} link={item} isActive={(href) => href === "/profile/bank-accounts"} />
          ))}
        </nav>
        <div className="p-2 border-t border-neutral-100">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-error-600 hover:bg-error-50 transition-all w-full text-left cursor-pointer">
            <LogOut className="w-4 h-4" />Sign out
          </button>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 min-w-0 flex flex-col gap-5">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 tracking-[-0.4px]">Bank accounts</h2>
          <p className="text-sm text-neutral-500 mt-1">Add up to 3 accounts for receiving payouts.</p>
        </div>

        {/* Existing account */}
        <div className="bg-white border border-neutral-200 rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-success-50 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-success-600" />
            </div>
            <div className="grow">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-bold text-neutral-900">GTBank</p>
                <Badge variant="warning" className="font-bold gap-1"><Star className="w-3 h-3 fill-warning-500" />Primary</Badge>
              </div>
              <p className="text-xs text-neutral-500 mt-0.5 font-mono tracking-wider">●●●●●●●● 4521</p>
              <p className="text-xs text-neutral-400 mt-0.5">ADAEZE OKONKWO</p>
            </div>
            <button className="flex items-center gap-1.5 text-xs font-semibold text-error-600 hover:bg-error-50 px-3 py-1.5 rounded-lg border border-error-200 transition-colors cursor-pointer">
              <Trash2 className="w-3.5 h-3.5" />Remove
            </button>
          </div>
        </div>

        {/* Add new */}
        <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-neutral-100 bg-neutral-50/50">
            <h3 className="text-sm font-bold text-neutral-900 relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-3.5 before:bg-primary-600 before:rounded-full">
              Add a new account
            </h3>
          </div>
          <div className="p-5 flex flex-col gap-5">
            {/* Bank select */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Bank name <span className="text-error-500">*</span></label>
              <div className="relative">
                <select
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
                  className="w-full h-11 pl-4 pr-10 rounded-xl border border-neutral-200 text-sm text-neutral-900 appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors bg-white cursor-pointer"
                >
                  <option value="">Select a bank</option>
                  {BANKS.map((b) => <option key={b}>{b}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
              </div>
            </div>

            {/* Account number */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Account number <span className="text-error-500">*</span></label>
              <div className="relative">
                <input
                  type="text"
                  maxLength={10}
                  value={account}
                  onChange={(e) => handleAccountChange(e.target.value.replace(/\D/g, ""))}
                  placeholder="0123456789"
                  className="w-full h-11 px-4 rounded-xl border border-neutral-200 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors pr-24"
                />
                {verified && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs font-bold text-success-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />Verified
                  </span>
                )}
              </div>
            </div>

            {/* Account name (auto-filled) */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Account name</label>
              <div className="relative">
                <input
                  type="text"
                  value={verified ? "EMEKA OKAFOR" : ""}
                  placeholder="Auto-filled after verification"
                  disabled
                  className={cn(
                    "w-full h-11 px-4 pr-10 rounded-xl border border-neutral-200 text-sm font-mono bg-neutral-50 text-neutral-500 cursor-not-allowed",
                    verified && "text-neutral-900"
                  )}
                />
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-300" />
              </div>
            </div>

            {/* Primary toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPrimary((v) => !v)}
                className={cn("relative w-11 h-6 rounded-full transition-colors cursor-pointer shrink-0", isPrimary ? "bg-primary-600" : "bg-neutral-200")}
              >
                <span className={cn("absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform", isPrimary ? "translate-x-5" : "translate-x-0")} />
              </button>
              <div>
                <p className="text-sm font-semibold text-neutral-900">Set as primary account</p>
                <p className="text-xs text-neutral-500">This account will receive all payouts by default.</p>
              </div>
            </div>

            <Button variant="primary" className="gap-2 font-bold cursor-pointer self-start">
              <CheckCircle2 className="w-4 h-4" />Save account
            </Button>

            <p className="text-xs text-neutral-400 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />Account details encrypted and stored securely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

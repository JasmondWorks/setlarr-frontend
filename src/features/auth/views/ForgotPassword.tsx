"use client";

import { useState } from "react";
import { Mail, MailCheck, Lock, Send } from "lucide-react";
import { Button } from "@/shared/ui/base/Button";
import { InputField } from "@/shared/ui/base/InputField";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ForgotPasswordStep = "request" | "sent" | "reset";

export function ForgotPasswordView() {
  const [step, setStep] = useState<ForgotPasswordStep>("request");
  const [email, setEmail] = useState("adaeze@gmail.com");

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-sm bg-white border border-neutral-200 rounded-2xl p-8 sm:p-10 flex flex-col gap-6">
        {/* ── State 1: Request ── */}
        {step === "request" && (
          <>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center">
                <Mail className="w-7 h-7 text-primary-600" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">
                  Forgot your password?
                </h1>
                <p className="text-sm text-neutral-500">
                  Enter your email and we&apos;ll send a reset link.
                </p>
              </div>
            </div>

            <InputField
              type="email"
              label="Email address"
              placeholder="you@example.com"
              icon={<Mail className="w-4 h-4" />}
              iconPosition="left"
              value={email}
              onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
            />

            <div className="flex flex-col gap-3">
              <Button
                variant="primary"
                className="w-full gap-2"
                onClick={() => setStep("sent")}
              >
                Send reset link
                <Send className="w-4 h-4" />
              </Button>
              <Link
                href="/login"
                className="text-sm text-neutral-600 text-center hover:underline"
              >
                ← Back to sign in
              </Link>
            </div>
          </>
        )}

        {/* ── State 2: Sent ── */}
        {step === "sent" && (
          <>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="w-14 h-14 bg-success-50 rounded-2xl flex items-center justify-center">
                <MailCheck className="w-7 h-7 text-success-600" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">
                  Check your email
                </h1>
                <p className="text-sm text-neutral-500">
                  We sent a reset link to{" "}
                  <span className="font-bold text-neutral-900">{email}</span>
                </p>
              </div>
            </div>

            <Button variant="outline" className="w-full" onClick={() => setStep("reset")}>
              Open email app
            </Button>

            <div className="flex items-center justify-center gap-4 text-sm">
              <button
                className="text-primary-600 font-medium hover:underline"
                onClick={() => setStep("request")}
              >
                Resend email
              </button>
              <span className="text-neutral-300">|</span>
              <button
                className="text-primary-600 font-medium hover:underline"
                onClick={() => setStep("request")}
              >
                Wrong email? Change it
              </button>
            </div>
          </>
        )}

        {/* ── State 3: Reset ── */}
        {step === "reset" && (
          <>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center">
                <Lock className="w-7 h-7 text-neutral-500" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">
                  Set new password
                </h1>
                <p className="text-sm text-neutral-500">
                  Must be at least 8 characters.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <InputField
                type="password"
                label="New password"
                placeholder="Enter new password"
              />
              <InputField
                type="password"
                label="Confirm password"
                placeholder="Confirm new password"
              />
            </div>

            {/* Strength indicator */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1.5 flex-1 rounded-full transition-colors",
                      i < 3 ? "bg-success-500" : "bg-neutral-200"
                    )}
                  />
                ))}
              </div>
              <p className="text-xs text-success-600 font-medium">Strong</p>
            </div>

            <Button variant="primary" className="w-full">
              Update password
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

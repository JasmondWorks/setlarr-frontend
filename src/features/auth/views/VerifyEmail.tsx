import { Mail } from "lucide-react";
import { Button } from "@/shared/ui/base/Button";
import Link from "next/link";

export function VerifyEmailView() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-sm bg-white border border-neutral-200 rounded-2xl p-8 sm:p-10 flex flex-col gap-6">
        {/* Icon */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary-600" />
          </div>

          <div className="flex flex-col gap-1.5">
            <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">
              Verify your email
            </h1>
            <p className="text-sm text-neutral-500">We sent a verification link to</p>
            <p className="text-sm font-bold text-primary-600">adaeze@gmail.com</p>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-neutral-50 border border-neutral-100 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-sm text-neutral-700">1. Open the email from Setlarr</p>
          <p className="text-sm text-neutral-700">2. Click the verification link</p>
          <p className="text-sm text-neutral-700">3. You&apos;ll be redirected back automatically</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button variant="primary" className="w-full">
            Open email app
          </Button>
          <Button variant="ghost" className="w-full">
            Resend verification email
          </Button>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-neutral-500">
            Wrong email address?{" "}
            <Link href="/login" className="text-error-600 font-medium hover:underline">
              Sign out
            </Link>
          </p>
          <p className="text-xs text-neutral-400 text-center">
            Didn&apos;t get the email? Check your spam folder.
          </p>
        </div>
      </div>
    </div>
  );
}

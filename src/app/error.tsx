"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[App Error]", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <header className="h-14 bg-white border-b border-neutral-200 px-6 flex items-center">
        <Link href="/dashboard" className="inline-flex items-center gap-2.5" aria-label="Setlarr home">
          <span className="w-6 h-6 grid grid-cols-2 grid-rows-2 gap-[3px] shrink-0" aria-hidden="true">
            <span className="bg-primary-600 rounded-[3px]" />
            <span className="bg-primary-500 rounded-[3px]" />
            <span className="bg-primary-500 rounded-[3px]" />
            <span className="bg-primary-700 rounded-[3px]" />
          </span>
          <span className="text-base font-semibold text-neutral-900">Setlarr</span>
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-sm w-full bg-white border border-neutral-200 rounded-2xl p-10 flex flex-col items-center text-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-error-50 border border-error-100 flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-error-600" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-neutral-900 tracking-[-0.4px]">Something went wrong</h1>
            <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
              An unexpected error occurred. You can try again — if it keeps happening, contact support.
            </p>
            {error.digest && (
              <p className="text-xs text-neutral-400 mt-3 font-mono bg-neutral-50 border border-neutral-100 rounded-lg px-3 py-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={reset}
              className="w-full h-11 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCcw className="w-4 h-4" />
              Try again
            </button>
            <Link
              href="/dashboard"
              className="w-full h-11 rounded-xl border border-neutral-200 text-sm font-semibold text-neutral-600 hover:bg-neutral-50 transition-colors flex items-center justify-center"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

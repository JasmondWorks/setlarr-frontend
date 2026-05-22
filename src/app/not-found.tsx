import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Minimal header */}
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
        <div className="max-w-sm w-full flex flex-col items-center text-center gap-6">
          {/* 404 number — decorative */}
          <p className="text-[120px] font-bold text-neutral-100 leading-none select-none">
            404
          </p>

          {/* Icon sits over the number */}
          <div className="-mt-16 w-16 h-16 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center shadow-sm">
            <SearchX className="w-8 h-8 text-neutral-400" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-neutral-900 tracking-[-0.4px]">Page not found</h1>
            <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
              This page doesn&apos;t exist or has been removed. Double-check the URL or head back home.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 h-11 px-6 bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold rounded-xl transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

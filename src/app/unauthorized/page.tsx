import Link from "next/link";
import { ShieldAlert, ShoppingBag, Tag } from "lucide-react";
import { switchRole } from "@/features/dashboard/lib/actions";

interface Props {
  searchParams: Promise<{ required?: string; from?: string }>;
}

export default async function UnauthorizedPage({ searchParams }: Props) {
  const { required, from } = await searchParams;

  const needsSeller = required === "seller";
  const requiredRole = needsSeller ? "seller" : "buyer";
  const currentRole  = needsSeller ? "Buying"  : "Selling";
  const targetRole   = needsSeller ? "Selling"  : "Buying";
  const targetPath   = needsSeller ? (from ?? "/store") : (from ?? "/dashboard");

  const handleSwitch = switchRole.bind(null, requiredRole, targetPath);

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

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white border border-neutral-200 rounded-2xl p-10 flex flex-col items-center text-center gap-6">

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-warning-50 border border-warning-100 flex items-center justify-center">
            <ShieldAlert className="w-8 h-8 text-warning-600" />
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 tracking-[-0.4px]">
              {targetRole} mode required
            </h1>
            <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
              This page is only available in <span className="font-semibold text-neutral-700">{targetRole} mode</span>.
              You&apos;re currently in <span className="font-semibold text-neutral-700">{currentRole} mode</span>.
              Switch to continue.
            </p>
          </div>

          {/* Role indicator row */}
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-neutral-100 rounded-xl">
              {needsSeller
                ? <ShoppingBag className="w-4 h-4 text-neutral-500 shrink-0" />
                : <Tag className="w-4 h-4 text-neutral-500 shrink-0" />}
              <div className="text-left">
                <p className="text-2xs text-neutral-400 font-semibold uppercase tracking-wider">Current</p>
                <p className="text-sm font-bold text-neutral-700">{currentRole}</p>
              </div>
            </div>

            <span className="text-neutral-300 font-light text-lg">→</span>

            <div className={`flex-1 flex items-center gap-2 px-4 py-3 rounded-xl border ${needsSeller ? "bg-warning-50 border-warning-100" : "bg-primary-50 border-primary-100"}`}>
              {needsSeller
                ? <Tag className="w-4 h-4 text-warning-600 shrink-0" />
                : <ShoppingBag className="w-4 h-4 text-primary-600 shrink-0" />}
              <div className="text-left">
                <p className={`text-2xs font-semibold uppercase tracking-wider ${needsSeller ? "text-warning-500" : "text-primary-500"}`}>Required</p>
                <p className={`text-sm font-bold ${needsSeller ? "text-warning-700" : "text-primary-700"}`}>{targetRole}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 w-full">
            <form action={handleSwitch}>
              <button
                type="submit"
                className={`w-full h-11 rounded-xl text-sm font-bold text-white transition-colors cursor-pointer ${needsSeller ? "bg-warning-600 hover:bg-warning-700" : "bg-primary-600 hover:bg-primary-700"}`}
              >
                Switch to {targetRole}
              </button>
            </form>

            <Link
              href={needsSeller ? "/dashboard" : "/store"}
              className="w-full h-11 rounded-xl border border-neutral-200 text-sm font-semibold text-neutral-600 hover:bg-neutral-50 transition-colors flex items-center justify-center"
            >
              Stay in {currentRole} mode
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

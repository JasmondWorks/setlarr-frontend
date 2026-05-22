import Link from "next/link";
import { Button } from "@/shared/ui/base/Button";

export function Topbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-[12px] backdrop-saturate-[140%] border-b border-neutral-200 z-50">
      <div className="h-full max-w-[1280px] mx-auto px-5 md:px-[80px] flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-[10px]" aria-label="Setlarr home">
          <span className="w-[28px] h-[28px] grid grid-cols-2 grid-rows-2 gap-[3px] shrink-0" aria-hidden="true">
            <span className="bg-primary-600 rounded-[3px]"></span>
            <span className="bg-primary-500 rounded-[3px]"></span>
            <span className="bg-primary-500 rounded-[3px]"></span>
            <span className="bg-primary-700 rounded-[3px]"></span>
          </span>
          <span className="text-[18px] font-semibold text-neutral-900 tracking-[-0.2px]">Setlarr</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          <Link href="#how" className="text-[14px] font-normal text-neutral-700 transition-colors duration-200 hover:text-neutral-900">How it works</Link>
          <Link href="#buyers" className="text-[14px] font-normal text-neutral-700 transition-colors duration-200 hover:text-neutral-900">For buyers</Link>
          <Link href="#sellers" className="text-[14px] font-normal text-neutral-700 transition-colors duration-200 hover:text-neutral-900">For sellers</Link>
          <Link href="#pricing" className="text-[14px] font-normal text-neutral-700 transition-colors duration-200 hover:text-neutral-900">Pricing</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="px-2" asChild>
            <Link href="/login">Sign in</Link>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <Link href="/register">Get started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

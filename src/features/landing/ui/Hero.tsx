import Link from "next/link";
import { Button } from "@/shared/ui/base/Button";
import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  BadgeCheck,
  Clock,
  Lock,
  Hourglass,
  Signal,
  Wifi,
  BatteryFull,
  Smartphone,
  Headphones,
  MapPin,
  Home,
  Search,
  Plus,
  MessageCircle,
  User
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-24 overflow-hidden isolate">
      {/* Background Grid */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, hsl(248, 30%, 80%) 1px, transparent 1.4px)`,
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0',
          maskImage: 'linear-gradient(to bottom, #000 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 60%, transparent 100%)'
        }}
      />
      {/* Background Blob */}
      <div
        className="absolute -top-[180px] -right-[140px] w-[680px] h-[680px] blur-[8px] -z-10 opacity-75 pointer-events-none hidden md:block"
        style={{
          background: `radial-gradient(circle at 35% 40%, hsl(248, 75%, 85%) 0%, transparent 55%), radial-gradient(circle at 65% 60%, hsl(38, 90%, 88%) 0%, transparent 55%)`
        }}
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-[80px] grid grid-cols-1 md:grid-cols-12 gap-6 relative">
        <div className="col-span-1 md:col-span-6 relative z-10 flex flex-col items-start">
          <span className="inline-flex items-center gap-2 bg-white text-primary-700 text-[12px] font-semibold py-[6px] pr-3 pl-2 rounded-full shadow-sm">
            <span className="w-[14px] h-[14px] bg-primary-100 text-primary-700 rounded-full inline-flex items-center justify-center" aria-hidden="true">
              <span className="w-[6px] h-[6px] bg-primary-600 rounded-full"></span>
            </span>
            Trusted P2P marketplace · Built for Nigeria
          </span>

          <h1 className="mt-5 text-[40px] md:text-[56px] leading-[1.1] tracking-[-1.4px] font-semibold text-neutral-900 max-w-[540px]">
            Buy and sell with <span className="text-primary-600 relative whitespace-nowrap">
              real confidence
              <span className="absolute left-0 right-0 -bottom-1 h-2 bg-warning-500/50 rounded-[4px] -z-10 opacity-[0.55]" aria-hidden="true"></span>
            </span>
          </h1>

          <p className="mt-5 text-[18px] leading-[1.65] text-neutral-600 max-w-[500px] font-normal">
            Setlarr holds your money in <strong className="font-semibold text-neutral-900">escrow</strong> until you're happy with your purchase. Verified sellers, 48-hour inspection windows, and no more getting scammed.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2" asChild>
              <Link href="/register">
                Get started free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto gap-[6px]">
              See how it works
              <PlayCircle className="w-[18px] h-[18px]" />
            </Button>
          </div>

          <div className="mt-7 flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-[6px] py-[6px] px-3 bg-white rounded-full text-[13px] font-normal text-neutral-700 shadow-sm">
              <span className="text-success-600 w-[14px] h-[14px] inline-flex items-center justify-center"><ShieldCheck className="w-[14px] h-[14px]" /></span>
              Escrow protected
            </span>
            <span className="inline-flex items-center gap-[6px] py-[6px] px-3 bg-white rounded-full text-[13px] font-normal text-neutral-700 shadow-sm">
              <span className="text-primary-600 w-[14px] h-[14px] inline-flex items-center justify-center"><BadgeCheck className="w-[14px] h-[14px]" /></span>
              Verified sellers
            </span>
            <span className="inline-flex items-center gap-[6px] py-[6px] px-3 bg-white rounded-full text-[13px] font-normal text-neutral-700 shadow-sm">
              <span className="text-warning-600 w-[14px] h-[14px] inline-flex items-center justify-center"><Clock className="w-[14px] h-[14px]" /></span>
              48h inspection
            </span>
          </div>
        </div>

        <div className="col-span-1 md:col-span-6 relative flex items-start justify-center min-h-[640px] mt-12 md:mt-0">
          <div className="relative w-full h-full min-h-[640px] flex items-center justify-center">

            {/* Stage background decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full z-0 pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(248, 70%, 92%) 0%, transparent 65%)' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border-[1.5px] border-dashed border-primary-200/50 opacity-50 z-0 pointer-events-none"></div>

            {/* Floating Card: Escrow Locked */}
            <div className="absolute bg-white rounded-[14px] shadow-[0_12px_32px_rgba(30,20,60,0.14),0_2px_6px_rgba(30,20,60,0.06)] py-[14px] px-4 z-30 flex items-center gap-3 top-[70px] left-[-8px] w-[230px] animate-[float1_7s_ease-in-out_infinite] hidden lg:flex" aria-label="Funds locked in escrow notification" role="img">
              <span className="w-9 h-9 rounded-[10px] inline-flex items-center justify-center shrink-0 bg-primary-50 text-primary-600"><Lock className="w-[18px] h-[18px]" /></span>
              <span className="flex flex-col gap-[2px]">
                <span className="text-[13px] font-semibold text-neutral-900 leading-[1.3]">₦620,000 in escrow</span>
                <span className="text-[11px] font-normal text-neutral-500 leading-[1.4]">Locked · pending delivery</span>
              </span>
            </div>

            {/* Floating Card: Verified Seller */}
            <div className="absolute bg-white rounded-[14px] shadow-[0_12px_32px_rgba(30,20,60,0.14),0_2px_6px_rgba(30,20,60,0.06)] py-[14px] px-4 z-30 flex items-center gap-3 top-[200px] right-[-16px] w-[200px] animate-[float2_8s_ease-in-out_infinite] hidden lg:flex" aria-label="Verified seller notification" role="img">
              <span className="w-9 h-9 rounded-[10px] inline-flex items-center justify-center shrink-0 bg-success-50 text-success-600"><BadgeCheck className="w-[18px] h-[18px]" /></span>
              <span className="flex flex-col gap-[2px]">
                <span className="text-[13px] font-semibold text-neutral-900 leading-[1.3]">Verified seller</span>
                <span className="text-[11px] font-normal text-neutral-500 leading-[1.4]">NIN &amp; BVN checked</span>
              </span>
            </div>

            {/* Floating Card: Inspection Timer */}
            <div className="absolute bg-white rounded-[14px] shadow-[0_12px_32px_rgba(30,20,60,0.14),0_2px_6px_rgba(30,20,60,0.06)] py-[14px] px-4 z-30 flex items-center gap-3 bottom-[60px] left-[-22px] w-[224px] animate-[float3_9s_ease-in-out_infinite] hidden lg:flex" aria-label="Inspection window timer" role="img">
              <span className="w-9 h-9 rounded-[10px] inline-flex items-center justify-center shrink-0 bg-warning-50 text-warning-600"><Hourglass className="w-[18px] h-[18px]" /></span>
              <span className="flex flex-col gap-[2px]">
                <span className="text-[13px] font-semibold text-neutral-900 leading-[1.3]">Inspection window</span>
                <span className="text-[11px] font-normal text-neutral-500 leading-[1.4]"><span className="text-[11px] font-semibold text-warning-600 bg-warning-50 py-[2px] px-2 rounded-full tabular-nums">47h 12m</span> left to release</span>
              </span>
            </div>

            {/* Phone */}
            <div className="relative z-20 w-[304px] h-[620px] bg-neutral-900 rounded-[44px] p-[10px] shadow-[0_24px_60px_rgba(30,20,60,0.22),0_8px_16px_rgba(30,20,60,0.10)]">
              <div className="w-full h-full bg-neutral-50 rounded-[34px] overflow-hidden relative flex flex-col">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-neutral-900 rounded-full z-40"></div>

                <div className="h-10 flex items-end justify-between px-6 pb-[6px] text-[12px] font-semibold text-neutral-900 relative z-30 bg-white">
                  <span>9:41</span>
                  <span className="inline-flex items-center gap-1">
                    <Signal className="w-[14px] h-[14px]" />
                    <Wifi className="w-[14px] h-[14px]" />
                    <BatteryFull className="w-[18px] h-[14px]" />
                  </span>
                </div>

                <div className="h-[52px] px-[18px] flex items-center justify-between bg-white">
                  <div className="flex flex-col gap-[1px]">
                    <span className="text-[13px] font-semibold text-neutral-900">Hi, Adaeze</span>
                    <span className="text-[10px] text-neutral-500">Browse Lagos</span>
                  </div>
                  <span className="w-[30px] h-[30px] rounded-full bg-primary-100 text-primary-700 inline-flex items-center justify-center text-[11px] font-semibold">A</span>
                </div>

                {/* Phone Banner */}
                <div className="mx-[18px] mt-3 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-[14px] relative overflow-hidden">
                  <div className="absolute -top-[30px] -right-[30px] w-[100px] h-[100px] rounded-full bg-[hsla(248,80%,88%,0.18)] pointer-events-none"></div>
                  <div className="text-[9px] font-semibold tracking-[0.06em] uppercase text-white/70">In escrow</div>
                  <div className="text-[18px] font-semibold mt-1 tabular-nums">₦620,000</div>
                  <div className="text-[10px] mt-1 text-white/75">1 active order · inspection ongoing</div>
                </div>

                <div className="mx-[18px] mt-[14px] flex items-baseline justify-between">
                  <span className="text-[12px] font-semibold text-neutral-900">Trending today</span>
                  <span className="text-[10px] text-primary-600 font-semibold">See all</span>
                </div>

                <div className="mx-[18px] mt-[10px] grid grid-cols-2 gap-[10px]">
                  <div className="bg-white rounded-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">
                    <div className="aspect-square relative flex items-center justify-center text-primary-900" style={{ background: 'linear-gradient(135deg, hsl(248, 50%, 92%), hsl(248, 40%, 80%))' }}>
                      <span className="absolute top-[6px] left-[6px] inline-flex items-center gap-[3px] py-[2px] px-[6px] rounded-full bg-white/95 text-success-900 text-[8px] font-semibold">
                        <span className="w-1 h-1 rounded-full bg-success-500"></span>Verified
                      </span>
                      <Smartphone className="w-9 h-9" />
                    </div>
                    <div className="p-2 pb-[10px] flex flex-col gap-[2px]">
                      <span className="text-[10px] text-neutral-900 line-clamp-1">iPhone 14 Pro</span>
                      <span className="text-[12px] font-semibold text-neutral-900 tabular-nums">₦620,000</span>
                      <span className="text-[9px] text-neutral-500 inline-flex items-center gap-[3px]">
                        <MapPin className="w-[9px] h-[9px]" />
                        Lekki
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">
                    <div className="aspect-square relative flex items-center justify-center text-warning-900" style={{ background: 'linear-gradient(135deg, hsl(38, 70%, 92%), hsl(38, 55%, 82%))' }}>
                      <span className="absolute top-[6px] left-[6px] inline-flex items-center gap-[3px] py-[2px] px-[6px] rounded-full bg-white/95 text-success-900 text-[8px] font-semibold">
                        <span className="w-1 h-1 rounded-full bg-success-500"></span>Verified
                      </span>
                      <Headphones className="w-9 h-9" />
                    </div>
                    <div className="p-2 pb-[10px] flex flex-col gap-[2px]">
                      <span className="text-[10px] text-neutral-900 line-clamp-1">Sony WH-1000XM5</span>
                      <span className="text-[12px] font-semibold text-neutral-900 tabular-nums">₦185,000</span>
                      <span className="text-[9px] text-neutral-500 inline-flex items-center gap-[3px]">
                        <MapPin className="w-[9px] h-[9px]" />
                        Ikeja
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto h-[56px] bg-white border-t border-neutral-200 grid grid-cols-5 relative">
                  <div className="flex flex-col items-center justify-center gap-[2px] text-neutral-900 font-semibold text-[9px] relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[14px] h-[3px] bg-primary-600 rounded-b-full"></div>
                    <Home className="w-[18px] h-[18px]" />
                    <span>Home</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[2px] text-neutral-400 text-[9px]">
                    <Search className="w-[18px] h-[18px]" />
                    <span>Search</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[2px] text-neutral-400 text-[9px] relative">
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-[10px] bg-primary-600 text-white inline-flex items-center justify-center shadow-[0_6px_14px_hsla(248,60%,47%,0.4)]">
                      <Plus className="w-[18px] h-[18px]" />
                    </span>
                    <span className="absolute top-9 left-1/2 -translate-x-1/2 text-[9px] font-semibold text-neutral-700 whitespace-nowrap">Sell</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[2px] text-neutral-400 text-[9px]">
                    <MessageCircle className="w-[18px] h-[18px]" />
                    <span>Chats</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[2px] text-neutral-400 text-[9px]">
                    <User className="w-[18px] h-[18px]" />
                    <span>You</span>
                  </div>
                </div>
                <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[110px] h-1 rounded-full bg-neutral-900/90"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

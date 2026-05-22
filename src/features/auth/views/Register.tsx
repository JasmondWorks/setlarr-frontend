import { AuthTopbar } from "../ui/AuthTopbar";
import { RegisterForm } from "../ui/RegisterForm";
import { ShieldCheck, BadgeCheck, Clock } from "lucide-react";

export function RegisterView() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white relative pt-14">
      <AuthTopbar mode="register" />

      {/* Left Pane - Marketing */}
      <div className="hidden md:flex w-1/2 relative bg-neutral-50 border-r border-neutral-200 flex-col justify-center px-[80px] overflow-hidden isolate">
        <div className="absolute inset-0 -z-20 opacity-[0.35] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at center, hsl(248, 30%, 80%) 1px, transparent 1.4px)`, backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-[10%] left-[-10%] w-[680px] h-[680px] blur-[120px] -z-10 opacity-60 pointer-events-none" style={{ background: `radial-gradient(circle at 35% 40%, hsl(248, 75%, 85%) 0%, transparent 55%), radial-gradient(circle at 65% 60%, hsl(38, 90%, 88%) 0%, transparent 55%)` }}></div>

        <div className="inline-flex items-center gap-[6px] px-3 py-[6px] rounded-full bg-white border border-primary-100 shadow-[0_2px_8px_rgba(30,20,60,0.04)] mb-8 self-start">
          <span className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
            <span className="w-[6px] h-[6px] rounded-full bg-primary-600"></span>
          </span>
          <span className="text-[12px] font-semibold text-primary-800 tracking-[0.02em]">
            Trusted by 12,000+ Nigerians
          </span>
        </div>

        <h2 className="text-[44px] leading-[1.1] tracking-[-1px] font-semibold text-neutral-900 max-w-[420px]">
          Join Setlarr. Trade with <span className="text-primary-600 relative inline-block">confidence<span className="absolute left-0 right-0 -bottom-1 h-2 bg-warning-500/50 rounded-[4px] -z-10 opacity-[0.55]" aria-hidden="true"></span></span>.
        </h2>

        <p className="mt-5 text-[18px] leading-[1.65] text-neutral-600 max-w-[400px]">
          The escrow-protected marketplace for Nigeria.
        </p>

        <div className="mt-12 flex flex-col gap-8 relative before:absolute before:left-[22px] before:top-[44px] before:bottom-[44px] before:border-l-[1.5px] before:border-dashed before:border-primary-300">
          <div className="flex gap-4 relative z-10">
            <div className="w-11 h-11 rounded-2xl bg-success-50 flex items-center justify-center shrink-0 border border-success-100">
              <ShieldCheck className="w-5 h-5 text-success-600" />
            </div>
            <div>
              <div className="font-semibold text-neutral-900 text-[15px]">Escrow protection</div>
              <div className="text-[13px] text-neutral-500 mt-1">Funds held until you're satisfied</div>
            </div>
          </div>

          <div className="flex gap-4 relative z-10">
            <div className="w-11 h-11 rounded-2xl bg-primary-50 flex items-center justify-center shrink-0 border border-primary-100">
              <BadgeCheck className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <div className="font-semibold text-neutral-900 text-[15px]">Verified sellers</div>
              <div className="text-[13px] text-neutral-500 mt-1">NIN and BVN checked</div>
            </div>
          </div>

          <div className="flex gap-4 relative z-10">
            <div className="w-11 h-11 rounded-2xl bg-warning-50 flex items-center justify-center shrink-0 border border-warning-100">
              <Clock className="w-5 h-5 text-warning-600" />
            </div>
            <div>
              <div className="font-semibold text-neutral-900 text-[15px]">48h inspection</div>
              <div className="text-[13px] text-neutral-500 mt-1">Test before funds release</div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white border border-neutral-200 rounded-[20px] p-4 flex items-center gap-5 shadow-sm max-w-[360px]">
          <div className="flex -space-x-3">
            <div className="w-[34px] h-[34px] rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-indigo-900 relative z-30 shadow-sm">AC</div>
            <div className="w-[34px] h-[34px] rounded-full bg-violet-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-violet-900 relative z-20 shadow-sm">CN</div>
            <div className="w-[34px] h-[34px] rounded-full bg-warning-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-warning-900 relative z-10 shadow-sm">EB</div>
            <div className="w-[34px] h-[34px] rounded-full bg-success-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-success-900 relative z-0 shadow-sm">TI</div>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-[14px] text-neutral-900">12,000+ traders</div>
            <div className="text-[11px] text-neutral-500 mt-[2px]">across Lagos, Abuja, Ibadan &amp; PH</div>
          </div>
          <div className="h-8 border-l border-neutral-200 px-4 flex items-center gap-[6px] text-success-600 font-semibold text-[12px]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
            +312 today
          </div>
        </div>
      </div>

      {/* Right Pane - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-5 pb-12 overflow-y-auto">
        <RegisterForm />
      </div>
    </div>
  );
}

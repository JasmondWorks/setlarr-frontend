import { AuthTopbar } from "../ui/AuthTopbar";
import { LoginForm } from "../ui/LoginForm";
import { Lock, BadgeCheck } from "lucide-react";

export function LoginView() {
  return (
    <div className="min-h-screen bg-neutral-50 relative overflow-hidden isolate">
      <AuthTopbar mode="login" />

      {/* Background Decor */}
      <div className="absolute inset-0 -z-20 opacity-[0.35] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at center, hsl(248, 30%, 80%) 1px, transparent 1.4px)`, backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-[10%] left-[20%] w-[800px] h-[800px] blur-[120px] -z-10 opacity-50 pointer-events-none" style={{ background: `radial-gradient(circle at 35% 40%, hsl(248, 75%, 85%) 0%, transparent 55%), radial-gradient(circle at 65% 60%, hsl(38, 90%, 88%) 0%, transparent 55%)` }}></div>

      {/* Floating Elements mimicking the landing page behind the modal */}
      <div className="hidden lg:flex absolute top-1/2 left-[calc(50%-360px)] -translate-y-1/2 items-center gap-4 bg-white/80 backdrop-blur-md px-4 py-3 rounded-[20px] border border-white/50 shadow-[0_8px_24px_rgba(30,20,60,0.06)] z-10">
        <div className="w-10 h-10 rounded-[12px] bg-primary-50 flex items-center justify-center shrink-0">
          <Lock className="w-5 h-5 text-primary-600" />
        </div>
        <div>
          <div className="font-semibold text-neutral-900 text-[13px]">₦620,000 in escrow</div>
          <div className="text-[11px] text-neutral-500">Locked · pending delivery</div>
        </div>
      </div>

      <div className="hidden lg:flex absolute top-[calc(50%+120px)] right-[calc(50%-360px)] -translate-y-1/2 items-center gap-4 bg-white/80 backdrop-blur-md px-4 py-3 rounded-[20px] border border-white/50 shadow-[0_8px_24px_rgba(30,20,60,0.06)] z-10">
        <div className="w-10 h-10 rounded-[12px] bg-success-50 flex items-center justify-center shrink-0">
          <BadgeCheck className="w-5 h-5 text-success-600" />
        </div>
        <div>
          <div className="font-semibold text-neutral-900 text-[13px]">Verified seller</div>
          <div className="text-[11px] text-neutral-500">NIN &amp; BVN checked</div>
        </div>
      </div>

      {/* Content */}
      <div className="min-h-screen flex items-center justify-center px-5 pt-24 pb-24">
        <LoginForm />
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="mt-8 py-14 relative overflow-hidden text-white" style={{
      background: `radial-gradient(circle at 12% 30%, hsla(38, 90%, 70%, 0.18) 0%, transparent 35%), radial-gradient(circle at 88% 70%, hsla(152, 60%, 70%, 0.16) 0%, transparent 40%), linear-gradient(180deg, hsl(248, 60%, 22%) 0%, hsl(248, 62%, 18%) 100%)`
    }}>
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1.2px)`,
        backgroundSize: '20px 20px'
      }}></div>
      <div className="max-w-[1280px] mx-auto px-5 md:px-[80px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative">
          <div className="relative">
            <div className="text-[32px] md:text-[40px] font-semibold text-white tracking-[-0.5px] leading-[1.1] tabular-nums">
              12,000<span className="text-[hsl(38,90%,78%)]">+</span>
            </div>
            <div className="mt-2 text-[13px] font-normal text-white/70">Verified traders</div>
            <div className="hidden md:block absolute left-full top-[14px] bottom-[14px] w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent"></div>
          </div>
          <div className="relative">
            <div className="text-[32px] md:text-[40px] font-semibold text-white tracking-[-0.5px] leading-[1.1] tabular-nums">
              ₦480M<span className="text-[hsl(38,90%,78%)]">+</span>
            </div>
            <div className="mt-2 text-[13px] font-normal text-white/70">Held in escrow</div>
            <div className="hidden md:block absolute left-full top-[14px] bottom-[14px] w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent"></div>
          </div>
          <div className="relative">
            <div className="text-[32px] md:text-[40px] font-semibold text-white tracking-[-0.5px] leading-[1.1] tabular-nums">
              4.9<span className="text-[hsl(38,90%,78%)]">★</span>
            </div>
            <div className="mt-2 text-[13px] font-normal text-white/70">Avg seller rating</div>
            <div className="hidden md:block absolute left-full top-[14px] bottom-[14px] w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent"></div>
          </div>
          <div className="relative">
            <div className="text-[32px] md:text-[40px] font-semibold text-white tracking-[-0.5px] leading-[1.1] tabular-nums">
              98<span className="text-[hsl(38,90%,78%)]">%</span>
            </div>
            <div className="mt-2 text-[13px] font-normal text-white/70">Dispute resolution rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

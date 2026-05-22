export function HowItWorks() {
  return (
    <section id="how" className="pt-24 pb-6 text-center relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-[80px]">
        <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-primary-600">How it works</div>
        <h2 className="mt-3 text-[28px] md:text-[36px] font-semibold text-neutral-900 tracking-[-0.6px] leading-[1.2]">
          Simple, safe, <em className="not-italic text-primary-600">settled</em>.
        </h2>
        <p className="mt-3 text-[16px] md:text-[18px] font-normal text-neutral-500 leading-[1.55]">
          Three steps between wanting something and owning it.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12 text-left relative">
          {/* Dashed connector (hidden on mobile) */}
          <div className="hidden md:block absolute top-[28px] left-[28px] right-[calc(33.3333%-60px)] h-0 border-t-2 border-dashed border-primary-200 z-0"></div>

          <div className="flex flex-col items-start relative z-10">
            <span className="w-14 h-14 rounded-2xl text-white text-[22px] font-semibold inline-flex items-center justify-center relative z-10 shadow-[0_8px_20px_hsla(248,60%,47%,0.18)]" style={{ background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-700))' }}>1</span>
            
            <div className="mt-5 w-full h-[140px] rounded-xl bg-white shadow-sm flex items-center justify-center relative overflow-hidden" style={{ background: 'radial-gradient(circle at 20% 80%, hsl(248, 70%, 96%) 0%, transparent 60%), #fff' }}>
              <div className="absolute inset-0 opacity-50 z-0" style={{ backgroundImage: 'radial-gradient(circle, hsl(240, 12%, 90%) 1px, transparent 1.2px)', backgroundSize: '14px 14px' }}></div>
              <svg viewBox="0 0 220 120" className="w-[180px] h-[100px] relative z-10" aria-hidden="true">
                <rect x="10" y="14" width="92" height="92" rx="10" fill="hsl(248, 50%, 92%)"/>
                <circle cx="56" cy="60" r="20" fill="hsl(248, 70%, 78%)" />
                <rect x="118" y="20" width="92" height="10" rx="3" fill="hsl(240, 12%, 90%)"/>
                <rect x="118" y="38" width="60" height="10" rx="3" fill="hsl(240, 12%, 90%)"/>
                <rect x="118" y="62" width="48" height="14" rx="3" fill="hsl(248, 60%, 47%)"/>
                <rect x="118" y="86" width="80" height="8" rx="3" fill="hsl(240, 12%, 95%)"/>
                <path d="M168 88 L172 100 L176 92 L186 92 Z" fill="hsl(240, 12%, 12%)" />
              </svg>
            </div>
            
            <h3 className="mt-6 text-[20px] font-semibold text-neutral-900 leading-[1.3]">Find &amp; offer</h3>
            <p className="mt-2 text-[14px] font-normal text-neutral-600 leading-[1.65]">
              Browse verified listings across Lagos, Abuja, Ibadan and PH. Message the seller, agree a price, lock in the terms.
            </p>
          </div>

          <div className="flex flex-col items-start relative z-10">
            <span className="w-14 h-14 rounded-2xl text-white text-[22px] font-semibold inline-flex items-center justify-center relative z-10 shadow-[0_8px_20px_hsla(38,88%,40%,0.22)]" style={{ background: 'linear-gradient(135deg, var(--color-warning-500), var(--color-warning-600))' }}>2</span>
            
            <div className="mt-5 w-full h-[140px] rounded-xl bg-white shadow-sm flex items-center justify-center relative overflow-hidden" style={{ background: 'radial-gradient(circle at 80% 20%, hsl(38, 90%, 95%) 0%, transparent 60%), #fff' }}>
              <div className="absolute inset-0 opacity-50 z-0" style={{ backgroundImage: 'radial-gradient(circle, hsl(240, 12%, 90%) 1px, transparent 1.2px)', backgroundSize: '14px 14px' }}></div>
              <svg viewBox="0 0 220 120" className="w-[180px] h-[100px] relative z-10" aria-hidden="true">
                <rect x="40" y="22" width="140" height="76" rx="14" fill="hsl(38, 90%, 92%)"/>
                <rect x="56" y="38" width="108" height="44" rx="10" fill="#fff"/>
                <text x="110" y="68" textAnchor="middle" style={{ font: '600 18px var(--font-inter), sans-serif', fill: 'hsl(38, 88%, 40%)' }}>₦620,000</text>
                <g transform="translate(150,12)">
                  <rect x="0" y="14" width="32" height="22" rx="5" fill="hsl(248, 60%, 47%)" />
                  <path d="M6 14 V8 a10 10 0 0 1 20 0 V14" fill="none" stroke="hsl(248, 60%, 47%)" strokeWidth="4"/>
                  <circle cx="16" cy="24" r="3" fill="#fff"/>
                </g>
                <path d="M30 100 Q 100 110 200 100" fill="none" stroke="hsl(38, 88%, 40%)" strokeWidth="1.5" strokeDasharray="3 3"/>
              </svg>
            </div>

            <h3 className="mt-6 text-[20px] font-semibold text-neutral-900 leading-[1.3]">Pay into escrow</h3>
            <p className="mt-2 text-[14px] font-normal text-neutral-600 leading-[1.65]">
              Your payment sits with Setlarr — not the seller — until you've received and inspected the item. We hold the funds, you hold the leverage.
            </p>
          </div>

          <div className="flex flex-col items-start relative z-10">
            <span className="w-14 h-14 rounded-2xl text-white text-[22px] font-semibold inline-flex items-center justify-center relative z-10 shadow-[0_8px_20px_hsla(152,55%,40%,0.22)]" style={{ background: 'linear-gradient(135deg, var(--color-success-500), var(--color-success-600))' }}>3</span>
            
            <div className="mt-5 w-full h-[140px] rounded-xl bg-white shadow-sm flex items-center justify-center relative overflow-hidden" style={{ background: 'radial-gradient(circle at 50% 50%, hsl(152, 60%, 95%) 0%, transparent 60%), #fff' }}>
              <div className="absolute inset-0 opacity-50 z-0" style={{ backgroundImage: 'radial-gradient(circle, hsl(240, 12%, 90%) 1px, transparent 1.2px)', backgroundSize: '14px 14px' }}></div>
              <svg viewBox="0 0 220 120" className="w-[180px] h-[100px] relative z-10" aria-hidden="true">
                <circle cx="110" cy="60" r="42" fill="hsl(152, 60%, 92%)" />
                <circle cx="110" cy="60" r="28" fill="hsl(152, 55%, 40%)" />
                <path d="M97 60 l10 10 l18 -20" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="30" y="42" width="40" height="10" rx="3" fill="hsl(152, 40%, 84%)"/>
                <rect x="30" y="60" width="28" height="10" rx="3" fill="hsl(152, 40%, 84%)"/>
                <rect x="150" y="42" width="40" height="10" rx="3" fill="hsl(152, 40%, 84%)"/>
                <rect x="162" y="60" width="28" height="10" rx="3" fill="hsl(152, 40%, 84%)"/>
              </svg>
            </div>

            <h3 className="mt-6 text-[20px] font-semibold text-neutral-900 leading-[1.3]">Inspect &amp; release</h3>
            <p className="mt-2 text-[14px] font-normal text-neutral-600 leading-[1.65]">
              You have 48 hours to check the item matches the listing. Release the funds when you're happy, or open a dispute if it doesn't.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

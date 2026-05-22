import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 bg-neutral-50 pt-14 pb-10 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-neutral-200"></div>
      <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary-500 via-warning-500 to-success-500 rounded-full"></div>
      
      <div className="max-w-[1280px] mx-auto px-5 md:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_6fr_2fr] gap-6 items-start">
          <div>
            <Link href="/" className="inline-flex items-center gap-[10px]" aria-label="Setlarr home">
              <span className="w-[28px] h-[28px] grid grid-cols-2 grid-rows-2 gap-[3px] shrink-0" aria-hidden="true">
                <span className="bg-primary-600 rounded-[3px]"></span>
                <span className="bg-primary-500 rounded-[3px]"></span>
                <span className="bg-primary-500 rounded-[3px]"></span>
                <span className="bg-primary-700 rounded-[3px]"></span>
              </span>
              <span className="text-[18px] font-semibold text-neutral-900 tracking-[-0.2px]">Setlarr</span>
            </Link>
            <p className="mt-4 text-[13px] text-neutral-500 max-w-[240px] leading-[1.6]">
              Peer-to-peer marketplace for Nigeria, with built-in escrow so nobody gets scammed.
            </p>
          </div>

          <nav className="grid grid-cols-2 md:grid-cols-4 gap-6" aria-label="Footer">
            <div className="flex flex-col">
              <div className="text-[12px] font-semibold text-neutral-900 tracking-[0.04em] uppercase mb-4">Product</div>
              <ul className="flex flex-col gap-[10px] p-0 m-0 list-none">
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">For buyers</Link></li>
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">For sellers</Link></li>
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">How escrow works</Link></li>
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="text-[12px] font-semibold text-neutral-900 tracking-[0.04em] uppercase mb-4">Company</div>
              <ul className="flex flex-col gap-[10px] p-0 m-0 list-none">
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">About</Link></li>
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">Press</Link></li>
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="text-[12px] font-semibold text-neutral-900 tracking-[0.04em] uppercase mb-4">Legal</div>
              <ul className="flex flex-col gap-[10px] p-0 m-0 list-none">
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">Terms of service</Link></li>
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">Privacy policy</Link></li>
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">Cookie policy</Link></li>
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">Dispute policy</Link></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="text-[12px] font-semibold text-neutral-900 tracking-[0.04em] uppercase mb-4">Support</div>
              <ul className="flex flex-col gap-[10px] p-0 m-0 list-none">
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">Help center</Link></li>
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">Trust &amp; safety</Link></li>
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">Verify your ID</Link></li>
                <li><Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">Status</Link></li>
              </ul>
            </div>
          </nav>

          <div className="flex justify-end gap-3 mt-6 md:mt-0">
            <Link href="#" className="w-9 h-9 rounded-full bg-white text-neutral-600 flex items-center justify-center shadow-sm transition-colors hover:bg-primary-50 hover:text-primary-700" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
              </svg>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full bg-white text-neutral-600 flex items-center justify-center shadow-sm transition-colors hover:bg-primary-50 hover:text-primary-700" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full bg-white text-neutral-600 flex items-center justify-center shadow-sm transition-colors hover:bg-primary-50 hover:text-primary-700" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H17.6v-5.4c0-1.3-.03-2.97-1.8-2.97-1.8 0-2.08 1.4-2.08 2.86V21H10V9Z"/>
              </svg>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full bg-white text-neutral-600 flex items-center justify-center shadow-sm transition-colors hover:bg-primary-50 hover:text-primary-700" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.5a3 3 0 0 0-2.1-2.12C19.5 4 12 4 12 4s-7.5 0-9.4.38A3 3 0 0 0 .5 6.5C.12 8.4.12 12 .12 12s0 3.6.38 5.5a3 3 0 0 0 2.1 2.12C4.5 20 12 20 12 20s7.5 0 9.4-.38a3 3 0 0 0 2.1-2.12c.38-1.9.38-5.5.38-5.5s0-3.6-.38-5.5ZM9.75 15.5v-7l6.25 3.5-6.25 3.5Z"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between text-[12px] text-neutral-500 gap-4">
          <span>© 2026 Setlarr Technologies Ltd. Lagos, Nigeria.</span>
          <span className="inline-flex items-center gap-[6px]">
            Made in Lagos
            <span className="inline-flex gap-0 rounded-[2px] overflow-hidden" aria-hidden="true">
              <span className="w-[6px] h-[10px] bg-success-500"></span>
              <span className="w-[6px] h-[10px] bg-white shadow-[inset_0_0_0_1px_var(--color-neutral-200)]"></span>
              <span className="w-[6px] h-[10px] bg-success-500"></span>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}

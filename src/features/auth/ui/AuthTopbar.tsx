import Link from "next/link";

export function AuthTopbar({ mode }: { mode: 'login' | 'register' }) {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 flex items-center justify-between px-5 md:px-[80px] bg-white border-b border-neutral-100 z-50">
      <Link href="/" className="inline-flex items-center gap-[10px]" aria-label="Setlarr home">
        <span className="w-[28px] h-[28px] grid grid-cols-2 grid-rows-2 gap-[3px] shrink-0" aria-hidden="true">
          <span className="bg-primary-600 rounded-[3px]"></span>
          <span className="bg-primary-500 rounded-[3px]"></span>
          <span className="bg-primary-500 rounded-[3px]"></span>
          <span className="bg-primary-700 rounded-[3px]"></span>
        </span>
        <span className="text-[20px] font-semibold text-neutral-900 tracking-[-0.2px]">Setlarr</span>
      </Link>

      <div className="text-[14px] text-neutral-500">
        {mode === 'login' ? (
          <>New to Setlarr? <Link href="/register" className="text-primary-600 font-medium hover:underline">Create account</Link></>
        ) : (
          <>Already have an account? <Link href="/login" className="text-primary-600 font-medium hover:underline">Sign in</Link></>
        )}
      </div>
    </header>
  );
}

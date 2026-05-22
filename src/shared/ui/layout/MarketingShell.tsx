import { ReactNode } from "react";
import { Topbar } from "./Topbar";
import { Footer } from "./Footer";

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}

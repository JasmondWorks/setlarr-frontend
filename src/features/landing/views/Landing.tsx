import { MarketingShell } from "@/shared/ui/layout/MarketingShell";
import { Hero } from "../ui/Hero";
import { Stats } from "../ui/Stats";
import { HowItWorks } from "../ui/HowItWorks";

export function LandingView() {
  return (
    <MarketingShell>
      <Hero />
      <Stats />
      <HowItWorks />
    </MarketingShell>
  );
}

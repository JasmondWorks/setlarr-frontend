import { DashboardView } from "@/features/dashboard/views/DashboardView";

export const metadata = {
  title: "Dashboard | Setlarr",
  description: "Manage your trades, listings, wallets, and disputes safely on Setlarr.",
};

export default function DashboardPage() {
  return <DashboardView />;
}

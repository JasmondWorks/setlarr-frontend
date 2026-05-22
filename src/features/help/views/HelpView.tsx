import {
  Shield,
  BadgeCheck,
  AlertTriangle,
  Truck,
  Tag,
  ShieldX,
  Search,
  ChevronDown,
  LifeBuoy,
} from "lucide-react";
import { Button } from "@/shared/ui/base/Button";
import { Input } from "@/shared/ui/base/Input";

const categories = [
  {
    icon: <Shield className="w-5 h-5 text-primary-600" />,
    iconBg: "bg-primary-50",
    title: "Escrow & payments",
    articles: "28 articles →",
  },
  {
    icon: <BadgeCheck className="w-5 h-5 text-success-600" />,
    iconBg: "bg-success-50",
    title: "Verification",
    articles: "14 articles →",
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-warning-600" />,
    iconBg: "bg-warning-50",
    title: "Disputes & refunds",
    articles: "18 articles →",
  },
  {
    icon: <Truck className="w-5 h-5 text-sky-600" />,
    iconBg: "bg-sky-50",
    title: "Shipping & delivery",
    articles: "22 articles →",
  },
  {
    icon: <Tag className="w-5 h-5 text-violet-600" />,
    iconBg: "bg-violet-50",
    title: "Selling on Setlarr",
    articles: "34 articles →",
  },
  {
    icon: <ShieldX className="w-5 h-5 text-error-600" />,
    iconBg: "bg-error-50",
    title: "Trust & safety",
    articles: "12 articles →",
  },
];

const faqs = [
  {
    question: "How does Setlarr's escrow protect me?",
    answer:
      "Your payment is locked in escrow the moment you confirm a purchase. The seller receives the funds only after you've received the item and confirmed it matches the listing. You have 48 hours to inspect. If anything is wrong, you can raise a dispute.",
    open: true,
  },
  {
    question: "What happens if the seller doesn't ship?",
    answer:
      "If the seller fails to ship within the agreed timeframe, you can raise a dispute and your funds will be returned from escrow. Our support team reviews all disputes within 24 hours.",
    open: false,
  },
  {
    question: "How long does verification take?",
    answer:
      "Verification typically takes between 2 and 24 hours during business days. You'll receive a notification as soon as your identity has been confirmed.",
    open: false,
  },
  {
    question: "What are Setlarr's fees?",
    answer:
      "Setlarr charges a small transaction fee on completed sales. Buyers pay no extra fees. Full fee details are shown before you confirm any transaction.",
    open: false,
  },
  {
    question: "Can I meet a seller in person?",
    answer:
      "Yes. Setlarr supports in-person meetups for local trades. We recommend meeting in a public place and confirming receipt in the app before releasing escrow funds.",
    open: false,
  },
];

export function HelpView() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero */}
      <section className="bg-primary-600 text-white rounded-2xl p-8 sm:p-12 flex flex-col items-center text-center gap-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-semibold">
          Help center
        </span>
        <h1 className="text-3xl font-bold leading-tight">
          How can we{" "}
          <em className="not-italic italic">help you?</em>
        </h1>
        <p className="text-sm text-white/80 max-w-md">
          Find guides on escrow, disputes, verification, payments and more.
        </p>
        {/* Search box */}
        <div className="bg-white rounded-xl h-14 px-5 flex items-center gap-3 max-w-lg w-full">
          <Search className="w-4 h-4 text-neutral-400 shrink-0" />
          <Input
            placeholder="Search 240+ help articles..."
            className="border-0 focus-visible:ring-0 focus-visible:border-0 p-0 h-auto text-neutral-900 placeholder:text-neutral-400 bg-transparent"
          />
          <span className="shrink-0 text-xs font-medium text-neutral-400 bg-neutral-100 rounded-md px-2 py-0.5">
            ⌘K
          </span>
        </div>
      </section>

      {/* Category grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-white border border-neutral-200 rounded-xl p-5 hover:border-primary-300 transition-colors cursor-pointer flex flex-col gap-3"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${cat.iconBg}`}>
              {cat.icon}
            </div>
            <div>
              <p className="font-semibold text-neutral-900 text-sm">{cat.title}</p>
              <p className="text-xs text-neutral-500 mt-0.5">{cat.articles}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom two-column section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* FAQ */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-primary-600 rounded-full" />
              <h2 className="text-xl font-bold text-neutral-900">Popular questions</h2>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-primary-600 hover:underline whitespace-nowrap"
            >
              See all FAQs →
            </a>
          </div>

          <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
            {faqs.map((faq, i) => (
              <details
                key={faq.question}
                open={faq.open}
                className={i < faqs.length - 1 ? "border-b border-neutral-100" : ""}
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-sm text-neutral-900 list-none select-none hover:bg-neutral-50 transition-colors">
                  {faq.question}
                  <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0 transition-transform details-open:rotate-180" />
                </summary>
                <div className="px-5 pb-4 text-sm text-neutral-500 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Support card */}
        <div className="lg:col-span-1">
          <div className="bg-neutral-900 text-white rounded-2xl p-6 flex flex-col gap-4">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <LifeBuoy className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg font-bold">Still need help?</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Our support team replies in under 2 hours during 9am – 9pm WAT, every day.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Button variant="primary" className="w-full bg-primary-600 hover:bg-primary-700">
                Chat with support
              </Button>
              <Button
                variant="ghost"
                className="w-full bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:text-white"
              >
                Email support
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500" />
              </span>
              <span className="text-xs text-white/60">Avg reply: 18 min</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing | Anita Obongha",
};

const TIERS = [
  {
    name: "Essential",
    price: "$500",
    desc: "For businesses that need consistent, on-brand content without doing it themselves.",
    features: [
      "Content strategy & monthly calendar",
      "12 feed posts / month",
      "Caption writing",
      "Basic monthly reporting",
    ],
    featured: false,
  },
  {
    name: "Signature",
    price: "$1,000",
    desc: "Full-service management for businesses ready to grow with intention.",
    features: [
      "Everything in Essential",
      "20 posts + Stories / month",
      "Community management",
      "Short-form video editing",
      "Monthly strategy call",
    ],
    featured: true,
  },
  {
    name: "Prestige",
    price: "$1,500",
    desc: "White-glove social media partnership for established brands.",
    features: [
      "Everything in Signature",
      "30+ posts across feed, Stories & Reels",
      "Custom graphic design",
      "Priority turnaround",
      "Quarterly strategy deep-dive",
    ],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-rose">
          Pricing
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-navy-deep sm:text-5xl">
          Investment, made simple.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-navy-deep/70">
          Three monthly packages built around how involved you want me to
          be, plus a guarantee that puts the risk on me, not you.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {TIERS.map((tier, i) => (
          <Reveal
            key={tier.name}
            delay={i * 120}
            className={`hover-lift relative flex flex-col rounded-2xl border p-8 ${
              tier.featured
                ? "border-rose bg-navy text-cream shadow-xl"
                : "border-navy/10 bg-white"
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-8 rounded-full bg-rose px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                Most popular
              </span>
            )}
            <p
              className={`font-serif text-xl font-semibold ${
                tier.featured ? "text-cream" : "text-navy-deep"
              }`}
            >
              {tier.name}
            </p>
            <p
              className={`mt-2 font-serif text-4xl font-semibold ${
                tier.featured ? "text-cream" : "text-navy-deep"
              }`}
            >
              {tier.price}
              <span
                className={`text-base font-normal ${
                  tier.featured ? "text-cream/60" : "text-navy-deep/50"
                }`}
              >
                {" "}
                /mo
              </span>
            </p>
            <p
              className={`mt-3 text-sm leading-relaxed ${
                tier.featured ? "text-cream/70" : "text-navy-deep/60"
              }`}
            >
              {tier.desc}
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((f) => (
                <li
                  key={f}
                  className={`flex gap-2 text-sm ${
                    tier.featured ? "text-cream/85" : "text-navy-deep/75"
                  }`}
                >
                  <span className={tier.featured ? "text-rose-soft" : "text-rose"}>
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener norefe

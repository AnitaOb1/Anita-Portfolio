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
              rel="noopener noreferrer"
              className={`mt-8 inline-block rounded-full px-6 py-3 text-center text-sm font-semibold transition-transform duration-250 hover:scale-[1.02] ${
                tier.featured
                  ? "bg-rose text-white"
                  : "bg-navy text-cream hover:bg-navy-soft"
              }`}
            >
              Get Started
            </a>
          </Reveal>
        ))}
      </div>

      {/* Guarantee */}
      <Reveal delay={200} className="mt-14 rounded-3xl border border-rose/20 bg-rose/5 px-8 py-12 text-center sm:px-16">
        <p className="text-xs font-semibold uppercase tracking-wider text-rose">
          The Guarantee
        </p>
        <p className="mx-auto mt-4 max-w-2xl font-serif text-2xl font-semibold text-navy-deep sm:text-3xl">
          If your full content calendar and deliverables aren&apos;t
          published on time in your first month, that month is free.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy-deep/65">
          I&apos;m not asking you to trust a stranger with your brand and
          hope for the best. The risk of showing up and doing the work is
          mine, not yours, because a strategy only works if it actually
          gets executed, consistently.
        </p>
      </Reveal>

      {/* Consultation */}
      <Reveal delay={300} className="hover-lift mt-8 flex flex-col items-center gap-6 rounded-2xl bg-navy p-8 text-center shadow-lg sm:flex-row sm:justify-between sm:p-10 sm:text-left">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-soft">
            One-off option
          </p>
          <p className="mt-2 font-serif text-2xl font-semibold text-cream">
            Just need a consultation?
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/70">
            Book a one-off strategy consultation and walk away with a clear,
            written plan you can run with yourself, no retainer required.
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-center gap-3 sm:items-end">
          <p className="font-serif text-3xl font-semibold text-cream">
            $150
            <span className="text-base font-normal text-cream/60"> one-time</span>
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-rose px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-250 hover:scale-[1.02]"
          >
            Book a Consultation
          </a>
        </div>
      </Reveal>
    </div>
  );
}

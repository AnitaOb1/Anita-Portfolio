import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SignatureJourney from "@/components/SignatureJourney";
import CaseStudyCover from "@/components/CaseStudyCover";
import { BOOKING_URL } from "@/lib/constants";
import { CASE_STUDIES } from "@/lib/case-studies";

const SERVICES_PREVIEW = [
  { name: "Strategy", desc: "A content roadmap built around how your business actually gets clients." },
  { name: "Content Creation", desc: "Feeds, carousels, reels and graphics that sound like you." },
  { name: "Management & Reporting", desc: "Scheduling, community, and monthly numbers that make sense." },
];

const FEATURED_CASE_STUDIES = CASE_STUDIES.slice(0, 3);

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-10 pt-8 md:grid-cols-2 md:pb-14 md:pt-12">
          <div>
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-rose/30 bg-rose/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose">
                Social Media Manager
              </span>
            </Reveal>

            <Reveal delay={150}>
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-navy-deep sm:text-5xl lg:text-6xl">
                Social media, <span className="italic text-rose">handled</span>,
                so you can focus on running your business.
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-deep/70">
                I&apos;m Anita, a freelance social media manager who helps
                business owners and brands turn scattered posting into a
                strategy that actually brings customers through the door.
              </p>
            </Reveal>

            <Reveal delay={450}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-cream transition-transform duration-250 hover:scale-[1.02] hover:bg-navy-soft"
                >
                  Book a Free Call
                </a>
                <Link
                  href="/case-studies"
                  className="text-sm font-semibold text-navy-deep underline decoration-rose/40 underline-offset-4 transition-colors hover:text-rose"
                >
                  See the work →
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative mx-auto w-full max-w-md md:max-w-lg">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-navy shadow-[0_30px_60px_-15px_rgba(27,58,107,0.35)]">
              <Image
                src="/assets/photos/navy-blazer.jpg"
                alt="Anita Obongha, social media manager"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 560px"
                className="scale-[0.96] object-cover object-top transition-transform duration-700 [transform-origin:center] [.js_&]:scale-100"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-cream px-5 py-4 shadow-lg sm:block">
              <p className="font-serif text-2xl font-semibold text-navy">6+</p>
              <p className="text-xs text-navy-deep/60">happy clients</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick services preview */}
      <section className="border-y border-navy/8 bg-cream-deep/60">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-rose">
              What I do
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {SERVICES_PREVIEW.map((s, i) => (
              <Reveal key={s.name} delay={i * 100} className="hover-lift rounded-2xl border border-navy/10 bg-cream p-6">
                <p className="font-serif text-xl font-semibold text-navy-deep">
                  {s.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-deep/65">
                  {s.desc}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300} className="mt-8">
            <Link
              href="/services"
              className="text-sm font-semibold text-navy underline decoration-rose/40 underline-offset-4 hover:text-rose"
            >
              See all services →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Signature strategy journey */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose">
            My approach
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold text-navy-deep sm:text-3xl">
            From brand to growth, on purpose.
          </h2>
        </Reveal>
        <SignatureJourney />
      </section>

      {/* Case studies preview */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wider text-rose">
            Case studies
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-navy-deep sm:text-4xl">
            How I think through strategy
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {FEATURED_CASE_STUDIES.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 100}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="hover-lift group block h-full overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm hover:shadow-xl"
              >
                <CaseStudyCover
                  slug={cs.slug}
                  accent={cs.accent}
                  category={cs.category}
                  className="flex aspect-[4/3] flex-col justify-between p-6 text-white transition-transform duration-300 group-hover:scale-[1.02]"
                >
                  <span className="relative w-fit rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">
                    Concept Project
                  </span>
                  <div className="relative">
                    <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                      {cs.category}
                    </p>
                    <p className="mt-1 font-serif text-2xl font-semibold">{cs.brand}</p>
                  </div>
                </CaseStudyCover>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-navy-deep/70">{cs.tagline}</p>
                  <span className="mt-4 inline-block text-sm font-semibold" style={{ color: cs.accent }}>
                    Read the strategy →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/case-studies"
            className="rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold text-navy-deep transition-colors hover:border-rose hover:text-rose"
          >
            See all 13 case studies
          </Link>
          <Link
            href="/work-samples"
            className="rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold text-navy-deep transition-colors hover:border-rose hover:text-rose"
          >
            View work samples
          </Link>
          
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition-transform duration-250 hover:scale-[1.02]"
          >
            Let&apos;s talk about your brand
          </a>
        </Reveal>
      </section>
    </div>
  );
}

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
                <a
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
            <p className="text-xs font-semibold uppercase tracking-wider text-rose"

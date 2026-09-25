import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CaseStudyCover from "@/components/CaseStudyCover";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | Anita Obongha",
  description:
    "13 concept case studies exploring social media strategy across wellness, coaching, SaaS, and local business brands.",
};

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-rose">
          Case studies
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-navy-deep sm:text-5xl">
          How I think through strategy.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-navy-deep/70">
          Thirteen concept projects, each one a real strategic exercise
          applying my approach to a different kind of brand. These are not
          paid client engagements; they&apos;re a look at how I diagnose a
          social media problem and build a plan to solve it.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES.map((cs, i) => (
          <Reveal key={cs.slug} delay={(i % 3) * 100}>
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
                  <p className="mt-1 font-serif text-2xl font-semibold">
                    {cs.brand}
                  </p>
                </div>
              </CaseStudyCover>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-navy-deep/70">
                  {cs.tagline}
                </p>
                <span
                  className="mt-4 inline-block text-sm font-semibold"
                  style={{ color: cs.accent }}
                >
                  Read the strategy →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

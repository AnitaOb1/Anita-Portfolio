import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CaseStudyCover from "@/components/CaseStudyCover";
import { CASE_STUDIES, getCaseStudy } from "@/lib/case-studies";
import { BOOKING_URL } from "@/lib/constants";

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.brand} | Case Study | Anita Obongha`,
    description: cs.tagline,
  };
}

export default async function CaseStudyDetail({
  params,
}: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const accentStyle = { color: cs.accent } as React.CSSProperties;

  return (
    <div>
      {/* Header */}
      <CaseStudyCover
        slug={cs.slug}
        accent={cs.accent}
        category={cs.category}
        className="text-white"
      >
        <div className="relative mx-auto max-w-4xl px-6 py-12 md:py-16">
          <Reveal>
            <Link
              href="/case-studies"
              className="text-sm text-white/70 hover:text-white"
            >
              ← All case studies
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <span className="mt-6 inline-block w-fit rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">
              Concept Project
            </span>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-sm font-medium uppercase tracking-wider text-white/70">
              {cs.category}
            </p>
            <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">
              {cs.brand}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              {cs.tagline}
            </p>
          </Reveal>
        </div>
      </CaseStudyCover>

      <div className="mx-auto max-w-4xl space-y-12 px-6 py-12">
        <Reveal>
          <p className="text-xs italic text-navy-deep/50">
            This is a concept project created to demonstrate strategic
            thinking, not a paid client engagement.
          </p>
        </Reveal>

        {/* Audience & Challenge */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-xl font-semibold" style={accentStyle}>
              The Audience
            </h2>
            <p className="mt-3 leading-relaxed text-navy-deep/75">
              {cs.audience}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-xl font-semibold" style={accentStyle}>
              The Challenge
            </h2>
            <p className="mt-3 leading-relaxed text-navy-deep/75">
              {cs.challenge}
            </p>
          </Reveal>
        </div>

        {/* Diagnosis */}
        <Reveal>
          <h2 className="font-serif text-xl font-semibold" style={accentStyle}>
            Strategic Diagnosis
          </h2>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {cs.diagnosisJourney.map((stage, i) => (
              <div key={stage} className="flex items-center gap-2">
                <span className="rounded-full border border-navy/15 bg-cream-deep px-4 py-1.5 text-sm font-medium text-navy-deep">
                  {stage}
                </span>
                {i < cs.diagnosisJourney.length - 1 && (
                  <span className="text-navy-deep/30">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 leading-relaxed text-navy-deep/75">
            {cs.diagnosisNote}
          </p>
        </Reveal>

        {/* Strategy */}
        <Reveal>
          <h2 className="font-serif text-xl font-semibold" style={accentStyle}>
            The Strategy
          </h2>
          <div className="mt-5 space-y-4">
            {cs.strategy.map((s, i) => (
              <div key={s.title} className="flex gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: cs.accent }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-navy-deep">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-navy-deep/70">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="mt-6 rounded-2xl border-l-4 bg-cream-deep/60 p-5 italic text-navy-deep/80"
            style={{ borderColor: cs.accent }}
          >
            &ldquo;{cs.sampleCaption}&rdquo;
          </div>
        </Reveal>

        {/* Content Direction */}
        <Reveal>
          <h2 className="font-serif text-xl font-semibold" style={accentStyle}>
            Content Direction
          </h2>
          <ul className="mt-4 space-y-2">
            {cs.contentDirection.map((item) => (
              <li key={item} className="flex gap-3 text-navy-deep/75">
                <span style={accentStyle}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* What I'd Test */}
        <Reveal>
          <h2 className="font-serif text-xl font-semibold" style={accentStyle}>
            What I&apos;d Test
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {cs.whatIdTest.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm text-navy-deep/75"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* How I'd Measure */}
        <Reveal>
          <h2 className="font-serif text-xl font-semibold" style={accentStyle}>
            How I&apos;d Measure It
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {cs.metrics.map((m) => (
              <span
                key={m}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-white"
                style={{ backgroundColor: cs.accent }}
              >
                {m}
              </span>
            ))}
          </div>
          <p className="mt-4 leading-relaxed text-navy-deep/75">
            {cs.outlook}
          </p>
        </Reveal>

        {/* Takeaway */}
        <Reveal className="rounded-2xl bg-navy px-8 py-10 text-cream">
          <h2 className="font-serif text-xl font-semibold text-rose-soft">
            Strategic Takeaway
          </h2>
          <p className="mt-3 text-lg leading-relaxed">{cs.takeaway}</p>
        </Reveal>

        <Reveal className="text-center">
          <p className="font-serif text-2xl font-semibold text-navy-deep">
            Want strategic thinking like this applied to your brand?
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-rose px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-250 hover:scale-[1.02]"
          >
            Book a Free Call
          </a>
        </Reveal>
      </div>
    </div>
  );
}

import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Anita Obongha",
  description:
    "Meet Anita Obongha, a freelance social media manager who helps wellness coaches build a content strategy that actually converts.",
};

const SKILLS = [
  "Social Media Strategy",
  "Content Planning",
  "Copywriting",
  "Graphic Design",
  "Short-Form Video Editing",
  "Community Management",
  "Analytics & Reporting",
];

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2 md:py-16">
        <Reveal className="order-2 md:order-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose">
            About me
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-navy-deep sm:text-5xl">
            I help wellness coaches sound like themselves online,
            strategically.
          </h1>

          <div className="mt-6 space-y-4 text-navy-deep/75 leading-relaxed">
            <p>
              I&apos;m Anita, a freelance social media manager who works
              exclusively with wellness coaches, nutritionists, yoga
              teachers, life coaches, and holistic health practitioners who
              know their craft but don&apos;t have hours to spare on content.
            </p>
            <p>
              My job is to take social media off your plate entirely:
              strategy, content, scheduling, community, and the reporting
              that actually tells you what&apos;s working. I help coaches who
              are posting inconsistently, feel invisible online, or are tired
              of guessing what to say, and turn that into a calm,
              intentional presence that brings the right clients to them.
            </p>
            <p>
              My approach starts with strategy, not content, understanding
              your audience, your offer, and your voice before a single post
              goes out. Everything I create is built to move someone from
              &ldquo;just found you&rdquo; to &ldquo;ready to book a
              call.&rdquo;
            </p>
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy/60">
              Skills
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-navy/15 bg-cream-deep px-4 py-1.5 text-sm text-navy-deep/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-cream transition-transform duration-250 hover:scale-[1.02] hover:bg-navy-soft"
          >
            Book a Free Call
          </a>
        </Reveal>

        <Reveal delay={150} className="order-1 mx-auto w-full max-w-md md:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-rose-soft/30 shadow-[0_30px_60px_-15px_rgba(192,80,122,0.3)]">
            <Image
              src="/assets/photos/pink-dress-white-bg.png"
              alt="Anita Obongha, freelance social media manager"
              fill
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      </section>

      {/* Meet Anita, intro video */}
      <section className="mx-auto max-w-4xl px-6 pb-12 md:pb-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wider text-rose">
            Meet me
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold text-navy-deep sm:text-3xl">
            A quick video introduction
          </h2>
        </Reveal>
        <Reveal delay={120} className="hover-lift group relative mt-6 aspect-video w-full overflow-hidden rounded-2xl bg-navy shadow-lg">
          <Image
            src="/assets/photos/navy-blazer.png"
            alt="Anita Obongha video introduction"
            fill
            sizes="100vw"
            className="object-cover object-top opacity-70 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-navy-deep/40 text-center text-white">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition-transform duration-250 group-hover:scale-105">
              ▶
            </span>
            <p className="text-sm font-medium">Video coming soon</p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

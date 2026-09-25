import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Anita Obongha",
  description:
    "Meet Anita Obongha, a freelance social media manager who helps businesses and brands build a content strategy that actually converts.",
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
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-10 px-6 py-12 md:grid-cols-2 md:py-16">
        <Reveal className="order-2 md:order-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose">
            About me
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-navy-deep sm:text-5xl">
            I help brands sound like themselves online, strategically.
          </h1>

          <div className="mt-6 space-y-4 text-navy-deep/75 leading-relaxed">
            <p>
              I&apos;m Anita, a freelance social media manager who works with
              business owners and brands across industries who know their
              craft but don&apos;t have hours to spare on content.
            </p>
            <p>
              My job is to take social media off your plate entirely:
              strategy, content, scheduling, community, and the reporting
              that actually tells you what&apos;s working. I help business
              owners who are posting inconsistently, feel invisible online,
              or are tired of guessing what to say, and turn that into a
              calm, intentional presence that brings the right customers to
              them.
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

          
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-cream transition-transform duration-250 hover:scale-[1.02] hover:bg-navy-soft"
          >
            Book a Free Call
          </a>

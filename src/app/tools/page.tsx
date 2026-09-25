import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tools & Skills | Anita Obongha",
};

const SKILLS = [
  "Social Media Strategy",
  "Social Media Management",
  "Content Strategy",
  "Content Creation",
  "Social Media Copywriting",
  "Instagram Marketing",
  "Graphic Design",
  "Short-Form Video Editing",
  "Community Management",
  "Analytics & Reporting",
];

const LOGOS = [
  "/assets/logos/logo-1.png",
  "/assets/logos/logo-2.jpg",
  "/assets/logos/logo-3.png",
  "/assets/logos/logo-4.jpg",
  "/assets/logos/logo-7.png",
];

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-rose">
          Tools &amp; skills
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-navy-deep sm:text-5xl">
          What I bring to the table.
        </h1>
      </Reveal>

      <div className="mt-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wider text-navy/60">
            Skills
          </p>
        </Reveal>
        <div className="mt-5 flex flex-wrap gap-3">
          {SKILLS.map((skill, i) => (
            <Reveal key={skill} delay={(i % 5) * 100}>
              <span className="hover-lift inline-block rounded-full border border-navy/15 bg-cream-deep px-5 py-2 text-sm font-medium text-navy-deep">
                {skill}
              </span>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wider text-navy/60">
            Tools I work in
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {LOGOS.map((logo, i) => (
            <Reveal
              key={logo}
              delay={(i % 5) * 100}
              className="hover-lift flex aspect-square items-center justify-center rounded-2xl border border-navy/10 bg-white p-8 shadow-sm"
            >
              <div className="relative h-full w-full transition-transform duration-300 hover:scale-110">
                <Image
                  src={logo}
                  alt="Tool logo"
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={500} className="mt-4 text-sm text-navy-deep/50">
          More tools coming soon.
        </Reveal>
      </div>
    </div>
  );
}

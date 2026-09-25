import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services | Anita Obongha",
  description:
    "Full-service social media management for businesses and brands, strategy, content creation, planning, copywriting, design, video, community, and reporting.",
};

const SERVICES = [
  {
    name: "Social Media Strategy",
    desc: "A clear content and growth plan built around your audience, your offer, and how your customers actually decide to buy.",
  },
  {
    name: "Social Media Management",
    desc: "Day-to-day handling of your platforms so your presence stays consistent without living in your inbox.",
  },
  {
    name: "Content Creation",
    desc: "Feeds, reels, stories and graphics created to sound and look like you, not a generic template.",
  },
  {
    name: "Content Planning",
    desc: "A calendar that balances visibility, trust-building, and conversion content, mapped weeks ahead.",
  },
  {
    name: "Social Media Copywriting",
    desc: "Captions and scripts that sound human, reflect your voice, and move people toward your offer.",
  },
  {
    name: "Graphic Design",
    desc: "On-brand carousels, quote graphics, and promotional assets that make your feed feel considered.",
  },
  {
    name: "Short-Form Video",
    desc: "Reels and short-form edits designed for reach and retention, without chasing every trend.",
  },
  {
    name: "Community Management",
    desc: "Genuine engagement with your audience, comments, DMs, and the relationship-building that turns followers into clients.",
  },
  {
    name: "Analytics & Reporting",
    desc: "Monthly reporting that tells you what actually moved the needle, in plain language.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose">
            Services
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-navy-deep sm:text-5xl">
            <span className="bg-rose/10 px-1.5 text-rose">
              Full-service social media management
            </span>{" "}
            for your business.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy-deep/70">
            From strategy to the last comment reply, everything your social
            media needs, so you can stay focused on running your business.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.name}
              delay={(i % 3) * 100}
              className="hover-lift rounded-2xl border border-navy/10 bg-cream-deep/50 p-7 hover:shadow-lg"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/10 text-sm font-semibold text-navy">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 font-serif text-xl font-semibold text-navy-deep">
                {service.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-deep/65">
                {service.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-16 rounded-3xl bg-navy px-8 py-12 text-center text-cream sm:px-16">
          <p className="font-serif text-2xl font-semibold sm:text-3xl">
            Ready to hand off your social media?
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-cream/70">
            Let&apos;s talk through your goals on a free 15-minute call.
          </p>
          
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-rose px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-250 hover:scale-[1.02]"
          >
            Book a Free Call
          </a>
        </Reveal>
      </section>
    </div>
  );
}

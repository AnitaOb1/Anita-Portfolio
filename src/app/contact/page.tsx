import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import ContactForm from "@/components/ContactForm";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Anita Obongha",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 text-center md:py-16">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-wider text-rose">
          Let&apos;s work together
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-navy-deep sm:text-5xl">
          Ready to improve your social media?
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-navy-deep/70">
          The fastest way to start is a free 15-minute call, we&apos;ll
          talk through where you are and what a strategic content plan
          could look like for you.
        </p>
      </Reveal>

      <Reveal delay={150}>
        
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-navy px-8 py-4 text-sm font-semibold text-cream transition-transform duration-250 hover:scale-[1.02] hover:bg-navy-soft">
          Book a Free Call
        </a>
      </Reveal>

      <Reveal delay={200} className="mx-auto mt-16 max-w-lg rounded-3xl border border-navy/10 bg-white px-8 py-10 text-center shadow-sm">
        <p className="font-serif text-xl font-semibold text-navy-deep">
          Prefer to send a message instead?
        </p>
        <p className="mt-2 text-sm leading-relaxed text-navy-deep/65">
          Fill this in and it will open in your email app, ready to send.
        </p>
        <ContactForm />
      </Reveal>

      <Reveal delay={250} className="mx-auto mt-16 max-w-md rounded-3xl border border-rose/20 bg-rose/5 px-8 py-10">
        <p className="font-serif text-xl font-semibold text-navy-deep">
          Not ready to book yet?
        </p>
        <p className="mt-2 text-sm leading-relaxed text-navy-deep/65">
          Grab <em>The Wellness Coach&apos;s Burnout Freedom Guide</em>, a
          free resource for coaches like Alexis who are ready to build a
          social media presence that doesn&apos;t drain them.
        </p>
        <LeadMagnetForm />
      </Reveal>
    </div>
  );
}

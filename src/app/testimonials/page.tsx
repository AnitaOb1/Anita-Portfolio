import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { TESTIMONIALS } from "@/lib/testimonials";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Testimonials | Anita Obongha",
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-rose">
          Results
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-navy-deep sm:text-5xl">
          What clients say.
        </h1>
      </Reveal>

      <Reveal delay={150} className="mt-16">
        <TestimonialCarousel items={TESTIMONIALS} />
      </Reveal>

      <Reveal delay={250} className="mx-auto mt-16 max-w-lg text-center">
        <p className="font-serif text-xl font-semibold text-navy-deep">
          Ready to be the next story?
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-cream transition-transform duration-250 hover:scale-[1.02] hover:bg-navy-soft"
        >
          Book a Free Call
        </a>
      </Reveal>
    </div>
  );
}

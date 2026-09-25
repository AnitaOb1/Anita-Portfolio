import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProcessTimeline from "@/components/ProcessTimeline";

export const metadata: Metadata = {
  title: "My Process | Anita Obongha",
};

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-wider text-rose">
          My process
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-navy-deep sm:text-5xl">
          How we&apos;ll work together.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-deep/70">
          Six stages, from understanding your business to optimizing what
          works, a calm, repeatable rhythm every month.
        </p>
      </Reveal>

      <div className="mt-16">
        <ProcessTimeline />
      </div>
    </div>
  );
}

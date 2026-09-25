"use client";

import { useState } from "react";
import type { Testimonial } from "@/lib/testimonials";

export default function TestimonialCarousel({
  items,
}: {
  items: Testimonial[];
}) {
  const [index, setIndex] = useState(0);
  const t = items[index];

  return (
    <div className="mx-auto max-w-2xl text-center">
      <div
        key={index}
        className="animate-[fadeSlide_500ms_cubic-bezier(0.16,1,0.3,1)]"
      >
        <p className="font-serif text-2xl leading-relaxed text-navy-deep sm:text-3xl">
          &ldquo;{t.quote}&rdquo;
        </p>
        <p className="mt-6 text-sm font-semibold text-navy-deep">{t.name}</p>
        <p className="text-xs text-navy-deep/50">{t.role}</p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Testimonial ${i + 1}`}
            className="h-2 rounded-full bg-rose transition-all duration-300"
            style={{
              width: i === index ? "1.5rem" : "0.5rem",
              opacity: i === index ? 1 : 0.3,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(12px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

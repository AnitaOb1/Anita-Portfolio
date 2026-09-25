"use client";

import { useEffect, useRef, useState } from "react";

const STAGES = ["Brand", "Audience", "Content", "Strategy", "Growth"];

export default function SignatureJourney() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height - viewportH * 0.4;
      const passed = viewportH * 0.8 - rect.top;
      const pct = total > 0 ? Math.min(1, Math.max(0, passed / total)) : 0;
      setProgress(pct);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeIndex = Math.min(
    STAGES.length - 1,
    Math.floor(progress * STAGES.length)
  );

  return (
    <div ref={containerRef} className="py-8">
      <div className="relative">
        <div className="absolute left-0 right-0 top-5 h-px bg-navy/10 sm:top-6" />
        <div
          className="absolute left-0 top-5 h-px bg-rose transition-[width] duration-200 ease-out sm:top-6"
          style={{ width: `${progress * 100}%` }}
        />

        <div className="relative grid grid-cols-5 gap-2">
          {STAGES.map((stage, i) => {
            const active = i <= activeIndex;
            return (
              <div key={stage} className="flex flex-col items-center text-center">
                <div
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-500 sm:h-3 sm:w-3 ${
                    active ? "scale-125 bg-rose" : "scale-100 bg-navy/15"
                  }`}
                  style={{ marginTop: "0.75rem" }}
                />
                <p
                  className={`mt-4 font-serif text-sm font-semibold transition-all duration-500 sm:text-lg ${
                    active
                      ? "translate-y-0 text-navy-deep opacity-100"
                      : "translate-y-1 text-navy-deep/40 opacity-60"
                  }`}
                >
                  {stage}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

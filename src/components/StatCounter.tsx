"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({
  target,
  suffix = "",
  durationMs = 1200,
}: {
  target: number;
  suffix?: string;
  durationMs?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLParagraphElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min(1, (now - start) / durationMs);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(eased * target));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return (
    <p ref={ref} className="font-serif text-2xl font-semibold text-navy">
      {value}
      {suffix}
    </p>
  );
}

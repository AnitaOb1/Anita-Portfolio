"use client";

import { useEffect, useRef, useState } from "react";

const STAGES = [
  { name: "Discovery", desc: "Understand your business, audience and goals." },
  { name: "Strategy", desc: "Develop your content and social media strategy." },
  { name: "Planning", desc: "Build the content calendar and content direction." },
  { name: "Creation", desc: "Create, write, and edit the content." },
  { name: "Publishing & Management", desc: "Schedule, publish and manage the platforms." },
  { name: "Analyze & Optimize", desc: "Review performance and improve the strategy." },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height - viewportH * 0.5;
      const passed = viewportH * 0.75 - rect.top;
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
    <div ref={containerRef} className="relative">
      <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-navy/10 sm:left-[23px]">
        <div
          className="w-full bg-rose transition-[height] duration-200 ease-out"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      <div className="space-y-10">
        {STAGES.map((stage, i) => {
          const active = i <= activeIndex;
          return (
            <div key={stage.name} className="relative flex gap-6 pl-0">
              <div
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300 sm:h-12 sm:w-12 ${
                  active
                    ? "scale-100 border-rose bg-rose text-white opacity-100"
                    : "scale-95 border-navy/20 bg-cream text-navy-deep/40 opacity-60"
                }`}
              >
                {i + 1}
              </div>
              <div
                className={`pt-1 transition-opacity duration-300 ${
                  active ? "opacity-100" : "opacity-50"
                }`}
              >
                <p className="font-serif text-xl font-semibold text-navy-deep">
                  {stage.name}
                </p>
                <p className="mt-1 text-sm text-navy-deep/65">{stage.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

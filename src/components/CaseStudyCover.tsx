import type { ReactNode } from "react";

function hashSeed(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

// A generated, illustrated "concept cover", abstract layered shapes in the
// case study's accent color, unique per brand (seeded from its slug), never
// a real photo. Reads as designed cover art rather than an empty gradient tile.
export default function CaseStudyCover({
  slug,
  accent,
  category,
  className = "",
  children,
}: {
  slug: string;
  accent: string;
  category: string;
  className?: string;
  children?: ReactNode;
}) {
  const seed = hashSeed(slug);
  const cx1 = 20 + (seed % 40);
  const cy1 = 15 + ((seed >> 3) % 30);
  const cx2 = 55 + ((seed >> 5) % 35);
  const cy2 = 55 + ((seed >> 7) % 35);
  const rot = (seed % 60) - 30;
  const initials = category
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: `linear-gradient(155deg, ${accent} 0%, #14181f 150%)` }}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-90"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx={cx1} cy={cy1} r="34" fill="white" opacity="0.08" />
        <circle cx={cx2} cy={cy2} r="22" fill="white" opacity="0.10" />
        <rect
          x="-10"
          y="60"
          width="140"
          height="34"
          fill="white"
          opacity="0.06"
          transform={`rotate(${rot} 50 70)`}
        />
        <circle cx={(cx1 + cx2) / 2} cy={(cy1 + cy2) / 2} r="3" fill="white" opacity="0.5" />
      </svg>
      <span className="pointer-events-none absolute -bottom-6 -right-2 select-none font-serif text-[7rem] font-semibold leading-none text-white/10">
        {initials}
      </span>
      {children}
    </div>
  );
}

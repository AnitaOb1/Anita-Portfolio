import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { WORK_CATEGORIES, categoryItemCount } from "@/lib/work-samples";

export const metadata: Metadata = {
  title: "Work Samples | Anita Obongha",
  description:
    "Real content samples across feeds, carousels, graphics, video, and analytics reporting.",
};

function getYouTubeId(src: string) {
  const match = src.match(
    /(?:youtube\.com\/(?:shorts\/|watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
  );
  return match ? match[1] : null;
}

function resolveCover(item?: { poster?: string; images: string[] }) {
  if (!item) return undefined;
  if (item.poster) return item.poster;
  const first = item.images[0];
  const ytId = getYouTubeId(first);
  if (ytId) return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
  if (/\.(mp4|mov|webm)(\?|%|$)/i.test(first)) return undefined;
  return first;
}

export default function WorkSamplesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-rose">
          Work samples
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-navy-deep sm:text-5xl">
          What I actually create.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-navy-deep/70">
          Case studies show how I think, this is where I show how I
          execute. Browse by format below.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {WORK_CATEGORIES.map((cat, i) => {
          const count = categoryItemCount(cat);
          const firstSubItem = cat.subCategories?.find((s) => s.items.length)?.items[0];
          const cover = resolveCover(cat.items[0] ?? firstSubItem);
          return (
            <Reveal key={cat.slug} delay={(i % 4) * 100}>
              <Link
                href={`/work-samples/${cat.slug}`}
                className="hover-lift group block h-full overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm hover:shadow-xl"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-cream-deep">
                  {cover ? (
                    <Image
                      src={cover}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 640px) 90vw, 280px"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-navy/5">
                      <span className="text-xs font-medium uppercase tracking-wider text-navy-deep/40">
                        Coming soon
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="font-serif text-lg font-semibold text-navy-deep">
                    {cat.name}
                  </p>
                  <p className="mt-1 text-xs text-navy-deep/50">
                    {count > 0 ? `${count} item${count === 1 ? "" : "s"}` : "Pending upload"}
                  </p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

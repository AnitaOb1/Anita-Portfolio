"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GalleryItem } from "@/lib/work-samples";

export default function Lightbox({
  items,
  accent = "#1B3A6B",
}: {
  items: GalleryItem[];
  accent?: string;
}) {
  const [openItem, setOpenItem] = useState<GalleryItem | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!openItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenItem(null);
      if (e.key === "ArrowRight")
        setSlideIndex((i) => Math.min(i + 1, openItem.images.length - 1));
      if (e.key === "ArrowLeft") setSlideIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openItem]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setOpenItem(item);
              setSlideIndex(0);
            }}
            className="hover-lift group relative aspect-square overflow-hidden rounded-xl border border-navy/10 bg-cream-deep text-left shadow-sm hover:shadow-lg"
          >
            <Image
              src={item.images[0]}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 45vw, 260px"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            />
            {item.images.length > 1 && (
              <span className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white">
                {item.images.length} slides
              </span>
            )}
          </button>
        ))}
      </div>

      {openItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setOpenItem(null)}
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-black">
              <Image
                src={openItem.images[slideIndex]}
                alt={openItem.title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>

            {openItem.images.length > 1 && (
              <div className="mt-4 flex items-center justify-center gap-2">
                {openItem.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    aria-label={`Slide ${i + 1}`}
                    className="h-2 w-2 rounded-full transition-all"
                    style={{
                      backgroundColor: i === slideIndex ? accent : "rgba(255,255,255,0.35)",
                      width: i === slideIndex ? "1.5rem" : "0.5rem",
                    }}
                  />
                ))}
              </div>
            )}

            <button
              onClick={() => setOpenItem(null)}
              aria-label="Close"
              className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy-deep shadow-lg"
            >
              ✕
            </button>

            {openItem.images.length > 1 && slideIndex > 0 && (
              <button
                onClick={() => setSlideIndex((i) => i - 1)}
                aria-label="Previous slide"
                className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-deep shadow-lg"
              >
                ‹
              </button>
            )}
            {openItem.images.length > 1 &&
              slideIndex < openItem.images.length - 1 && (
                <button
                  onClick={() => setSlideIndex((i) => i + 1)}
                  aria-label="Next slide"
                  className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-deep shadow-lg"
                >
                  ›
                </button>
              )}
          </div>
        </div>
      )}
    </>
  );
}

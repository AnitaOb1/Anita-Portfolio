export type GalleryItem = {
  id: string;
  title: string;
  images: string[]; // one image = single post, multiple = carousel/swipeable set
};

export type WorkCategory = {
  slug: string;
  name: string;
  description: string;
  items: GalleryItem[];
  subCategories?: { slug: string; name: string; items: GalleryItem[] }[];
};

export const WORK_CATEGORIES: WorkCategory[] = [
  {
    slug: "instagram-feeds",
    name: "Instagram Feeds",
    description: "Real feed photography and post treatments.",
    items: [],
  },
  {
    slug: "carousels",
    name: "Carousels",
    description: "Multi-slide educational and storytelling carousels.",
    items: [
      {
        id: "carousel-tips",
        title: "Tips carousel",
        images: [
          "/assets/carousel/04-tip3.png",
          "/assets/carousel/05-tip4.png",
          "/assets/carousel/06-tip5.png",
          "/assets/carousel/07-closing.png",
        ],
      },
    ],
  },
  {
    slug: "social-media-graphics",
    name: "Social Media Graphics",
    description: "Promotional and brand graphics.",
    items: [
      { id: "graphic-1", title: "Promo graphic", images: ["/assets/graphics/graphic-1-crocs.jpg"] },
      { id: "graphic-2", title: "Sale graphic", images: ["/assets/graphics/graphic-2-sale.jpg"] },
      { id: "graphic-3", title: "Coffee graphic", images: ["/assets/graphics/graphic-3-coffee.jpg"] },
      { id: "graphic-4", title: "Beauty graphic", images: ["/assets/graphics/graphic-4-beauty.jpg"] },
    ],
  },
  {
    slug: "videos",
    name: "Videos",
    description: "Reels, short-form edits, and AI-assisted video content.",
    items: [],
    subCategories: [
      { slug: "reels-short-form", name: "Reels / Short-Form Videos", items: [] },
      { slug: "ai-videos", name: "AI Videos", items: [] },
    ],
  },
  {
    slug: "stories",
    name: "Stories",
    description: "Story-format content and templates.",
    items: [],
  },
  {
    slug: "analytics",
    name: "Analytics",
    description: "Performance screenshots and reporting samples.",
    items: [
      { id: "analytics-1", title: "Analytics snapshot", images: ["/assets/analytics/04af8a82febd237e4d18bb2f4d6a22db.jpg"] },
      { id: "analytics-2", title: "Analytics snapshot", images: ["/assets/analytics/0aba1bba15bcdc8669e85655d82cf8da.jpg"] },
      { id: "analytics-3", title: "Analytics snapshot", images: ["/assets/analytics/20a09fd2425cad66ba08428de67ba3b0.jpg"] },
      { id: "analytics-4", title: "Analytics snapshot", images: ["/assets/analytics/215c92f7575a5a79ad6a83b0eeb89bc3.jpg"] },
      { id: "analytics-5", title: "Analytics snapshot", images: ["/assets/analytics/267dbd77ba492f45729ab1dc0f223c7e.jpg"] },
      { id: "analytics-6", title: "Analytics snapshot", images: ["/assets/analytics/4a5f3ac7dd6cb320da19ca72607deefa.jpg"] },
      { id: "analytics-7", title: "Analytics snapshot", images: ["/assets/analytics/8b74cf3346587a30d07fa9e8ef3c0197%20(1).jpg"] },
      { id: "analytics-8", title: "Analytics snapshot", images: ["/assets/analytics/8ba313bc0e33fec6e15b8074ff4139d2.jpg"] },
      { id: "analytics-9", title: "Analytics snapshot", images: ["/assets/analytics/94cf49f949853fda813d1f882f503a11.jpg"] },
      { id: "analytics-10", title: "Analytics snapshot", images: ["/assets/analytics/a3ad12207136d672f98405764526fefd.jpg"] },
      { id: "analytics-11", title: "Analytics snapshot", images: ["/assets/analytics/ac970ec5158dfd92476090f02d23167a.jpg"] },
      { id: "analytics-12", title: "Analytics snapshot", images: ["/assets/analytics/ae13ba3f65f055b9e07c0e076d15b4cf.jpg"] },
      { id: "analytics-13", title: "Analytics snapshot", images: ["/assets/analytics/ae8724ce196bfb8dfd1fb38e55f57347.jpg"] },
      { id: "analytics-14", title: "Analytics snapshot", images: ["/assets/analytics/analytics-3.jpg"] },
      { id: "analytics-15", title: "Analytics snapshot", images: ["/assets/analytics/bd52127fd159939b362f0fe7b2501dc0.jpg"] },
      { id: "analytics-16", title: "Analytics snapshot", images: ["/assets/analytics/analytics-5.jpg"] },
      { id: "analytics-17", title: "Analytics snapshot", images: ["/assets/analytics/b00077ff8d08c1c054eab6d4dd6bc4ea.jpg"] },
      { id: "analytics-18", title: "Analytics snapshot", images: ["/assets/analytics/bd7f72988883a0ae96050461b8d7401b.jpg"] },
    ],
  },
  {
    slug: "motion-graphics",
    name: "Motion Graphics",
    description: "Animated brand and promotional motion pieces.",
    items: [],
  },
  {
    slug: "other-content",
    name: "Other Content Samples",
    description: "Additional content across formats.",
    items: [],
  },
];

export function getWorkCategory(slug: string) {
  return WORK_CATEGORIES.find((c) => c.slug === slug);
}

export function categoryItemCount(cat: WorkCategory) {
  const own = cat.items.length;
  const sub = cat.subCategories?.reduce((n, s) => n + s.items.length, 0) ?? 0;
  return own + sub;
}

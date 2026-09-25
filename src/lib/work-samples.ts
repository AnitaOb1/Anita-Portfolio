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
    items: [
      { id: "feed-1", title: "Feed post", images: ["/assets/feed/feed-1.jpg"] },
      { id: "feed-2", title: "Feed post", images: ["/assets/feed/feed-2.jpg"] },
    ],
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
      {
        id: "carousel-2",
        title: "Story carousel",
        images: [
          "/assets/carousel/carousel2-slide1.jpg",
          "/assets/carousel/carousel2-slide2.jpg",
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
      { id: "analytics-1", title: "Analytics snapshot", images: ["/assets/analytics/analytics-1.jpg"] },
      { id: "analytics-2", title: "Analytics snapshot", images: ["/assets/analytics/analytics-2.jpg"] },
      { id: "analytics-3", title: "Analytics snapshot", images: ["/assets/analytics/analytics-3.jpg"] },
      { id: "analytics-4", title: "Analytics snapshot", images: ["/assets/analytics/analytics-4.jpg"] },
      { id: "analytics-5", title: "Analytics snapshot", images: ["/assets/analytics/analytics-5.jpg"] },
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

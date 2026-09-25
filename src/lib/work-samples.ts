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
        id: "carousel-yoga-anxiety",
        title: "Yoga & anxiety carousel",
        images: ["/assets/carousel/yoga-anxiety-carousel-grid%20%281%29.jpg"],
      },
    ],
  },
  {
    slug: "graphics",
    name: "Graphics",
    description: "Graphic design and motion graphics.",
    items: [],
    subCategories: [
      {
        slug: "graphic-design",
        name: "Graphic Design",
        items: [
          { id: "graphic-1", title: "Promo graphic", images: ["/assets/graphics/graphic-1-crocs.jpg"] },
          { id: "graphic-2", title: "Sale graphic", images: ["/assets/graphics/graphic-2-sale.jpg"] },
          { id: "graphic-3", title: "Coffee graphic", images: ["/assets/graphics/graphic-3-coffee.jpg"] },
          { id: "graphic-4", title: "Beauty graphic", images: ["/assets/graphics/graphic-4-beauty.jpg"] },
          { id: "graphic-5", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-07-17%20at%2020.41.09.jpeg"] },
          { id: "graphic-6", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-08-15%20at%2007.03.03%20%282%29.jpeg"] },
          { id: "graphic-7", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-08-15%20at%2007.03.03.jpeg"] },
          { id: "graphic-8", title: "Promo graphic", images: ["/assets/graphics/designing%20poster.jpg"] },
          { id: "graphic-9", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-08-15%20at%2007.03.03%20%283%29.jpeg"] },
          { id: "graphic-10", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-07-17%20at%2020.40.56%20%281%29.jpeg"] },
          { id: "graphic-11", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-07-17%20at%2020.40.54%20%281%29.jpeg"] },
          { id: "graphic-12", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-07-17%20at%2020.40.56.jpeg"] },
          { id: "graphic-13", title: "Promo graphic", images: ["/assets/graphics/Create%20Scroll%20Stopping%20visuals%20With%20Your%20Products%20_____.jpg"] },
          { id: "graphic-14", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-07-17%20at%2020.41.07.jpeg"] },
          { id: "graphic-15", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-07-17%20at%2020.41.10%20%281%29.jpeg"] },
          { id: "graphic-16", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-07-17%20at%2020.40.54.jpeg"] },
          { id: "graphic-17", title: "Promo graphic", images: ["/assets/graphics/Lemonade%20Juice.jpg"] },
          { id: "graphic-18", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-07-17%20at%2020.41.09%20%281%29.jpeg"] },
          { id: "graphic-19", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-07-17%20at%2020.41.08.jpeg"] },
          { id: "graphic-20", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-07-17%20at%2020.40.55.jpeg"] },
          { id: "graphic-21", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-07-17%20at%2020.41.14.jpeg"] },
          { id: "graphic-22", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-07-17%20at%2020.41.06.jpeg"] },
          { id: "graphic-23", title: "Promo graphic", images: ["/assets/graphics/WhatsApp%20Image%202026-08-15%20at%2007.03.02.jpeg"] },
          { id: "graphic-24", title: "Promo graphic", images: ["/assets/graphics/2%20%2B%201%20on%20all%20cocktails%20%281%29.png"] },
          { id: "graphic-25", title: "Promo graphic", images: ["/assets/graphics/2%20%2B%201%20on%20all%20cocktails.png"] },
          { id: "graphic-26", title: "Promo graphic", images: ["/assets/graphics/Yellow%20and%20White%20Playful%20Home%20made%20Food%20Brand%20Board%20Brand%20Kit.png"] },
          { id: "graphic-27", title: "Promo graphic", images: ["/assets/graphics/Black%20and%20Yellow%20Simple%20Chinese%20Restaurant%20flyer%20%282%29.png"] },
        ],
      },
      {
        slug: "motion-graphics",
        name: "Motion Graphics",
        items: [
          { id: "motion-1", title: "Motion graphic", images: ["/assets/graphics/WhatsApp%20Video%202026-07-17%20at%2020.40.55.mp4"] },
          { id: "motion-2", title: "Motion graphic", images: ["/assets/graphics/WhatsApp%20Video%202026-07-17%20at%2020.40.56.mp4"] },
          { id: "motion-3", title: "Motion graphic", images: ["/assets/graphics/WhatsApp%20Video%202026-07-17%20at%2020.41.05.mp4"] },
        ],
      },
    ],
  },
  {
    slug: "videos",
    name: "Videos",
    description: "Reels, short-form edits, and AI-assisted video content.",
    items: [],
    subCategories: [
      {
        slug: "reels-short-form",
        name: "Reels / Short-Form Videos",
        items: [
          { id: "reel-1", title: "Reel", images: ["https://youtube.com/shorts/GcPPj7OcYJQ"] },
          { id: "reel-2", title: "Reel", images: ["https://youtube.com/shorts/mSkxpDhc1Uc"] },
          { id: "reel-3", title: "Reel", images: ["https://youtube.com/shorts/ma5k6cPkf38"] },
          { id: "reel-4", title: "Reel", images: ["https://youtube.com/shorts/l5spAtDTTSs"] },
          { id: "reel-5", title: "Reel", images: ["https://youtube.com/shorts/zKa_edmwOtg"] },
          { id: "reel-6", title: "Reel", images: ["https://youtube.com/shorts/Aj6m0Et5j8k"] },
          { id: "reel-7", title: "Reel", images: ["https://youtube.com/shorts/OhUsZDXEWtc"] },
          { id: "reel-8", title: "Reel", images: ["https://youtube.com/shorts/p0B7xoOAaf0"] },
          { id: "reel-9", title: "Reel", images: ["https://youtube.com/shorts/sorQhJSZDVI"] },
          { id: "reel-10", title: "Reel", images: ["https://youtube.com/shorts/wpJBL0J08nY"] },
        ],
      },
      {
        slug: "ai-videos",
        name: "AI Videos",
        items: [
          { id: "ai-video-1", title: "AI video", images: ["/assets/WhatsApp%20Video%202026-07-25%20at%2014.03.23.mp4"] },
          { id: "ai-video-2", title: "AI video", images: ["/assets/WhatsApp%20Video%202026-07-25%20at%2014.03.32.mp4"] },
        ],
      },
    ],
  },
  {
    slug: "stories",
    name: "Stories",
    description: "Story-format content and templates.",
    items: [],
  },
  {
    slug: "analytics-feed",
    name: "Analytics/Feed",
    description: "Feed content and performance screenshots.",
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

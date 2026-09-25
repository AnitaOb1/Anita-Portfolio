import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import { WORK_CATEGORIES, getWorkCategory } from "@/lib/work-samples";

export function generateStaticParams() {
  return WORK_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work-samples/[category]">): Promise<Metadata> {
  const { category } = await params;
  const cat = getWorkCategory(category);
  if (!cat) return {};
  return { title: `${cat.name} | Work Samples | Anita Obongha` };
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-navy/20 bg-cream-deep/40 px-8 py-16 text-center">
      <p className="font-serif text-lg font-semibold text-navy-deep/60">
        {label}
      </p>
      <p className="mt-2 text-sm text-navy-deep/45">
        Samples for this category are pending upload.
      </p>
    </div>
  );
}

export default async function WorkCategoryPage({
  params,
}: PageProps<"/work-samples/[category]">) {
  const { category } = await params;
  const cat = getWorkCategory(category);
  if (!cat) notFound();

  const hasSub = !!cat.subCategories?.length;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <Reveal>
        <Link
          href="/work-samples"
          className="text-sm text-navy-deep/60 hover:text-rose"
        >
          ← All work samples
        </Link>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-navy-deep sm:text-5xl">
          {cat.name}
        </h1>
        <p className="mt-3 max-w-xl text-navy-deep/65">{cat.description}</p>
      </Reveal>

      <div className="mt-12">
        {!hasSub &&
          (cat.items.length ? (
            <Reveal>
              <Lightbox items={cat.items} />
            </Reveal>
          ) : (
            <Reveal>
              <EmptyState label={cat.name} />
            </Reveal>
          ))}

        {hasSub && (
          <div className="space-y-14">
            {cat.subCategories!.map((sub, i) => (
              <Reveal key={sub.slug} delay={i * 100}>
                <h2 className="font-serif text-xl font-semibold text-navy-deep">
                  {sub.name}
                </h2>
                <div className="mt-5">
                  {sub.items.length ? (
                    <Lightbox items={sub.items} />
                  ) : (
                    <EmptyState label={sub.name} />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

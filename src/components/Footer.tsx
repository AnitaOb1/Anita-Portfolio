import Link from "next/link";
import { BOOKING_URL, FOOTER_LINKS, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <Reveal className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-xl font-semibold">{SITE_NAME}</p>
            <p className="mt-2 text-sm text-cream/70">{SITE_TAGLINE}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-soft">
                Explore
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/80 transition-colors hover:text-rose-soft"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-soft">
                Get in touch
              </p>
              <div className="mt-3 flex flex-col gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-fit rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-250 hover:scale-[1.02]"
                >
                  Book a Call
                </a>
                <Link
                  href="/contact"
                  className="text-sm text-cream/80 transition-colors hover:text-rose-soft"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-xs text-cream/50">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </Reveal>
    </footer>
  );
}

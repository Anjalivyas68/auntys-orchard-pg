import Image from "next/image";
import { MessageCircle, Star } from "lucide-react";
import { heroImage } from "@/data/gallery";
import { whatsappHref } from "@/config/site";
import { content } from "@/config/nav";

const trust = ["Clean Rooms", "Meals", "Wi-Fi", "CCTV"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Decorative orchard leaf motif */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-6 hidden h-72 w-72 text-sage lg:block"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M100 10c40 20 70 60 60 110-30 5-60-5-80-30C65 60 70 35 100 10Z" />
        <path d="M30 130c30-5 55 10 65 40-30 8-60-5-65-40Z" opacity=".7" />
      </svg>

      <div className="container-page section-pad grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="animate-rise">
          <p className="eyebrow">Sainik Colony, Roorkee</p>
          <h1 className="font-serif text-4xl leading-[1.1] text-forest sm:text-5xl lg:text-[3.25rem]">
            PG in Roorkee for Working Professionals
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Furnished rooms, home-cooked meals, fast Wi-Fi, and hassle-free living in Sainik Colony,
            Roorkee.
          </p>

          {/* Trust line */}
          <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] font-medium text-ink/90">
            <li className="flex items-center gap-1.5">
              <span className="flex" role="img" aria-label="Rated 5 stars on Google">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} aria-hidden="true" className="fill-peach text-peach" />
                ))}
              </span>
              Google Rated
            </li>
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span aria-hidden="true" className="text-forest/30">|</span>
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href={whatsappHref(content.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto"
            >
              <MessageCircle size={20} aria-hidden="true" /> Check Availability
            </a>
          </div>
        </div>

        <div className="relative animate-rise [animation-delay:120ms]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-forest/10 bg-sage shadow-lift">
            {/* PLACEHOLDER IMAGE: replace /public/images/hero-pg.* with one strong, real photo of the property. */}
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
            {heroImage.isPlaceholder && (
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-muted">
                Placeholder image
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import { GraduationCap, BookOpen, ShoppingBag, Coffee, Bus, HeartPulse, MapPin, Navigation } from "lucide-react";
import { siteConfig, hasMapsUrl } from "@/config/site";
import Reveal from "./Reveal";

const nearby = [
  { label: "Educational Institutions", icon: GraduationCap },
  { label: "Coaching Centers", icon: BookOpen },
  { label: "Local Markets", icon: ShoppingBag },
  { label: "Restaurants & Cafes", icon: Coffee },
  { label: "Public Transportation", icon: Bus },
  { label: "Essential Services", icon: HeartPulse },
];

export default function Location() {
  return (
    <section id="location" className="section-pad bg-white">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">Location</p>
          <h2 className="section-title">Conveniently Located in Roorkee</h2>
          <p className="mt-5 text-lg text-muted">
            Aunty&apos;s Orchard PG is conveniently located with access to:
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {nearby.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-3 text-ink/90">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sage text-forest">
                  <Icon size={18} aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-muted">
            Whether you&apos;re attending classes, heading to work, or exploring the city, everyday
            essentials are within convenient reach.
          </p>
        </Reveal>

        <Reveal delay={100}>
          {siteConfig.mapsEmbedUrl ? (
            <div className="overflow-hidden rounded-2xl border border-forest/10 shadow-soft">
              <iframe
                title="Map showing the location of Aunty's Orchard PG"
                src={siteConfig.mapsEmbedUrl}
                className="h-[320px] w-full sm:h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : (
            // PLACEHOLDER: set mapsEmbedUrl in src/config/site.ts to show a live Google Map here.
            <div className="flex h-[320px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-forest/25 bg-cream p-6 text-center sm:h-[380px]">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage text-forest">
                <MapPin size={28} aria-hidden="true" />
              </span>
              <p className="text-lg font-semibold text-forest">{siteConfig.address}</p>
              <p className="max-w-xs text-sm text-muted">
                Map will appear here once the exact location is added.
              </p>
            </div>
          )}
          {hasMapsUrl ? (
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-5 w-full sm:w-auto"
            >
              <Navigation size={18} aria-hidden="true" /> Get Directions
            </a>
          ) : (
            <a href="#contact" className="btn btn-primary mt-5 w-full sm:w-auto">
              <Navigation size={18} aria-hidden="true" /> Get Directions
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}

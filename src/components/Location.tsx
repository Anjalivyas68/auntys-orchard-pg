import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { content } from "@/config/nav";
import Reveal from "./Reveal";

export default function Location() {
  return (
    <section id="location" className="section-pad bg-white">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Centrally Located in Roorkee</h2>
          <p className="mt-4 flex items-start justify-center gap-2 text-lg text-muted">
            <MapPin size={22} className="mt-0.5 shrink-0 text-orchard" aria-hidden="true" />
            <span>{content.locationAddress}</span>
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-10 max-w-4xl">
          {siteConfig.mapsEmbedUrl ? (
            <div className="overflow-hidden rounded-2xl border border-forest/10 shadow-soft">
              <iframe
                title="Map showing the location of Aunty's Orchard PG"
                src={siteConfig.mapsEmbedUrl}
                className="h-[320px] w-full sm:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : (
            // PLACEHOLDER: set mapsEmbedUrl in src/config/site.ts to show a live Google Map here.
            <div className="flex h-[320px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-forest/25 bg-cream p-6 text-center sm:h-[420px]">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage text-forest">
                <MapPin size={28} aria-hidden="true" />
              </span>
              <p className="max-w-xs text-sm text-muted">
                Map will appear here once the exact location is added.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

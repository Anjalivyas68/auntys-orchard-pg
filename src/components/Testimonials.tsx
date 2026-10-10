import { Star } from "lucide-react";
import { showTestimonials, testimonials } from "@/data/testimonials";
import { content } from "@/config/nav";
import Reveal from "./Reveal";

export default function Testimonials() {
  if (!showTestimonials) return null;

  return (
    <section id="reviews" className="section-pad bg-sage/60">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">What Residents Say</h2>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-forest shadow-soft">
            <span className="flex" role="img" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} aria-hidden="true" className="fill-peach text-peach" />
              ))}
            </span>
            {content.googleRating} Google Rating
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="card h-full">
                {t.isPlaceholder ? (
                  <span className="mb-4 inline-block rounded-full bg-peach/40 px-3 py-1 text-xs font-semibold text-forest">
                    Placeholder — replace with a real review
                  </span>
                ) : (
                  <div className="mb-3 flex gap-1" role="img" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        size={18}
                        aria-hidden="true"
                        className={s < t.rating ? "fill-peach text-peach" : "text-forest/20"}
                      />
                    ))}
                  </div>
                )}
                <blockquote className="leading-relaxed text-ink/90">{t.review}</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="block font-semibold text-forest">{t.name}</span>
                  {t.residentType && <span className="text-muted">{t.residentType}</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

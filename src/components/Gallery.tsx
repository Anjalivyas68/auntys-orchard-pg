"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import Reveal from "./Reveal";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const count = galleryItems.length;

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % count));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? i : (i - 1 + count) % count));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastFocus.current?.focus();
    };
  }, [active, count]);

  const item = active !== null ? galleryItems[active] : null;

  return (
    <section id="gallery" className="section-pad">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">See Where You&apos;ll Live</h2>
        </Reveal>

        {/* Phones: 2 columns so the gallery is quick to scroll. Tablet: 2, desktop: 3. */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {galleryItems.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 80} className="h-full">
              <figure className="group overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-lift">
                <button
                  type="button"
                  className="relative block aspect-[4/3] w-full overflow-hidden bg-sage"
                  aria-label={`View larger image: ${g.title}`}
                  onClick={(e) => {
                    lastFocus.current = e.currentTarget;
                    setActive(i);
                  }}
                >
                  {/* PLACEHOLDER IMAGE: replace the file in /public/images (see src/data/gallery.ts). */}
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  {g.isPlaceholder && (
                    <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium text-muted sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-xs">
                      Placeholder image
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-forest opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Expand size={16} aria-hidden="true" />
                  </span>
                </button>
                <figcaption className="px-3 py-3 sm:px-5 sm:py-4">
                  <h3 className="text-sm font-semibold leading-snug text-forest sm:text-lg">{g.title}</h3>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {item && active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/85 p-4"
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sage">
              <Image src={item.src} alt={item.alt} fill sizes="900px" className="object-cover" />
            </div>
            <p className="mt-3 text-center font-semibold text-white">{item.title}</p>
            <button
              ref={closeRef}
              type="button"
              aria-label="Close image"
              className="absolute -top-3 right-0 flex h-11 w-11 items-center justify-center rounded-full bg-white text-forest sm:-right-3"
              onClick={() => setActive(null)}
            >
              <X size={22} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest"
              onClick={() => setActive((active - 1 + count) % count)}
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest"
              onClick={() => setActive((active + 1) % count)}
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

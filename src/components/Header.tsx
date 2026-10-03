"use client";

import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled || open
          ? "border-b border-forest/10 bg-cream/95 shadow-soft backdrop-blur-sm"
          : "bg-cream"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <a href="#home" className="flex items-center gap-2 font-serif text-xl text-forest">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage text-orchard">
            <Leaf size={18} aria-hidden="true" />
          </span>
          {siteConfig.name}
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-ink/80 transition hover:text-forest"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-primary hidden !min-h-[44px] !px-5 !py-2 text-[15px] sm:inline-flex">
            Book a Visit
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-forest/20 text-forest lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-forest/10 bg-cream lg:hidden"
        >
          <ul className="container-page flex flex-col py-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center border-b border-forest/5 text-lg font-medium text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Book a Visit
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

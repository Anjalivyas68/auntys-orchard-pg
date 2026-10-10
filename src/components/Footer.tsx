import { Leaf, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { siteConfig, telHref, mailHref } from "@/config/site";
import { navLinks, content } from "@/config/nav";

export default function Footer() {
  const year = new Date().getFullYear();
  const { instagram, facebook } = siteConfig.social;

  return (
    <footer className="bg-[#1b3a2c] pb-24 pt-14 text-white/85 lg:pb-10">
      <div className="container-page grid gap-10 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-serif text-2xl text-white">
            <Leaf size={22} aria-hidden="true" className="text-peach" />
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-xs leading-relaxed">
            A comfortable, well-managed PG in Roorkee for working professionals.
          </p>
          {(instagram || facebook) && (
            <div className="mt-4 flex gap-3">
              {instagram && (
                <a href={instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                  <Instagram size={20} aria-hidden="true" />
                </a>
              )}
              {facebook && (
                <a href={facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                  <Facebook size={20} aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>

        <nav aria-label="Footer">
          <p className="font-semibold text-white">Quick links</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-white hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-semibold text-white">Contact</p>
          <ul className="mt-2 space-y-0.5">
            <li className="flex items-center gap-2">
              <Phone size={16} aria-hidden="true" />
              <a href={telHref} className="inline-flex min-h-[44px] items-center hover:underline">{siteConfig.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} aria-hidden="true" />
              <a href={mailHref} className="inline-flex min-h-[44px] items-center break-all hover:underline">{siteConfig.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} aria-hidden="true" className="mt-1 shrink-0" />
              {content.locationAddress}
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-10 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-white">{siteConfig.tagline}</p>
        <p>
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

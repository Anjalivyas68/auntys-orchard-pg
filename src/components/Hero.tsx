import Image from "next/image";
import { ShieldCheck, UtensilsCrossed, Wifi, Sparkles } from "lucide-react";
import { heroImage } from "@/data/gallery";

const trust = [
  { label: "CCTV Security", icon: ShieldCheck },
  { label: "Home-Cooked Meals", icon: UtensilsCrossed },
  { label: "High-Speed Wi-Fi", icon: Wifi },
  { label: "Daily Housekeeping", icon: Sparkles },
];

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
          <p className="eyebrow">Comfortable living in Roorkee</p>
          <h1 className="font-serif text-4xl leading-[1.1] text-forest sm:text-5xl lg:text-[3.5rem]">
            Your Home Away From Home in Roorkee
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Safe, comfortable, and fully equipped accommodation designed for students and working
            professionals seeking a peaceful and convenient place to stay in Roorkee.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-primary">
              Book a Visit
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Us
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 text-[15px] text-ink/85 sm:flex sm:flex-wrap sm:gap-x-6">
            {trust.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon size={18} className="shrink-0 text-orchard" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-rise [animation-delay:120ms]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-forest/10 bg-sage shadow-lift">
            {/* PLACEHOLDER IMAGE: replace /public/images/hero-pg.* with a real photo of the property. */}
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
          <div className="absolute -bottom-4 left-4 rounded-2xl border border-forest/10 bg-white px-4 py-3 text-sm shadow-soft sm:left-8">
            <span className="font-semibold text-forest">Roorkee, Uttarakhand</span>
            <span className="block text-muted">Students &amp; working professionals</span>
          </div>
        </div>
      </div>
    </section>
  );
}

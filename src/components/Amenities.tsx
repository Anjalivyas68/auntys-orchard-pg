import { amenityGroups } from "@/data/amenities";
import Reveal from "./Reveal";

export default function Amenities() {
  return (
    <section id="facilities" className="section-pad">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Facilities &amp; amenities</p>
          <h2 className="section-title">Everything You Need for Comfortable Living</h2>
        </Reveal>

        {/* Layout adapts to the number of cards: 4 cards sit in one row on large screens, 3 or 6 in rows of three. */}
        <div
          className={`mt-12 grid gap-6 sm:grid-cols-2 ${
            amenityGroups.length === 4 ? "xl:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {amenityGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 80}>
              <article className="card h-full">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-white">
                    <group.icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-semibold text-forest">{group.title}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map(({ label, icon: Icon }) => (
                    <li key={label} className="flex items-start gap-3 text-ink/90">
                      <Icon size={18} className="mt-0.5 shrink-0 text-orchard" aria-hidden="true" />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

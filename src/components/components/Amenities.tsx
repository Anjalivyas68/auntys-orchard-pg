import { amenities } from "@/data/amenities";
import Reveal from "./Reveal";

export default function Amenities() {
  return (
    <section id="amenities" className="section-pad bg-white">
      <div className="container-page">
        <Reveal className="mx-auto text-center">
          <h2 className="section-title lg:whitespace-nowrap">Everything You Need for Comfortable Living</h2>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {amenities.map(({ label, icon: Icon }, i) => (
            <li key={label} className="h-full">
              <Reveal delay={(i % 4) * 60} className="h-full">
                <div className="card flex h-full flex-col items-center gap-3 !p-5 text-center sm:!p-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage text-forest">
                    <Icon size={28} aria-hidden="true" />
                  </span>
                  <span className="text-base font-semibold text-forest sm:text-lg">{label}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

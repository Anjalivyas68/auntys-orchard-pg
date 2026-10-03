import { ShieldCheck, MapPin, Armchair, IndianRupee, Users, Wrench } from "lucide-react";
import Reveal from "./Reveal";

const reasons = [
  {
    title: "Safe & Secure",
    text: "Designed to provide peace of mind for both residents and their families.",
    icon: ShieldCheck,
  },
  {
    title: "Prime Location",
    text: "Conveniently located near educational institutions, workplaces, markets, and transportation.",
    icon: MapPin,
  },
  {
    title: "Comfortable Lifestyle",
    text: "A balanced environment where you can study, work, relax, and feel at home.",
    icon: Armchair,
  },
  {
    title: "Affordable Pricing",
    text: "Quality accommodation with excellent value for money.",
    icon: IndianRupee,
  },
  {
    title: "Friendly Community",
    text: "Meet like-minded students and professionals in a welcoming atmosphere.",
    icon: Users,
  },
  {
    title: "Well-Maintained Property",
    text: "Clean surroundings and attentive management ensure a pleasant stay.",
    icon: Wrench,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="section-pad bg-sage/60">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why us</p>
          <h2 className="section-title">Why Choose Aunty&apos;s Orchard PG?</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, text, icon: Icon }, i) => (
            <Reveal key={title} delay={(i % 3) * 80}>
              <article className="card h-full">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-peach/40 text-forest">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold text-forest">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

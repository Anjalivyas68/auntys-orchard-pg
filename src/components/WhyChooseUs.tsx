import { Leaf, UtensilsCrossed, Wifi, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const reasons = [
  {
    title: "Peaceful Living",
    text: "Comfortable environment for working professionals.",
    icon: Leaf,
  },
  {
    title: "Home-Cooked Meals",
    text: "Fresh everyday food without the hassle.",
    icon: UtensilsCrossed,
  },
  {
    title: "Fast Wi-Fi",
    text: "Reliable connectivity for work and entertainment.",
    icon: Wifi,
  },
  {
    title: "Clean & Managed",
    text: "Regular housekeeping and on-site support. Daily cleaning of washrooms.",
    icon: Sparkles,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="section-pad bg-sage/60">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Why Aunty&apos;s Orchard?</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ title, text, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 80}>
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

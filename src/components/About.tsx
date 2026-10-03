import { ShieldCheck, UtensilsCrossed, Sparkles, Users } from "lucide-react";
import Reveal from "./Reveal";

const cards = [
  { title: "Safe & Secure", text: "CCTV surveillance and secure entry.", icon: ShieldCheck },
  { title: "Nutritious Meals", text: "Fresh, home-cooked food.", icon: UtensilsCrossed },
  { title: "Clean Rooms", text: "Regular housekeeping and upkeep.", icon: Sparkles },
  { title: "Friendly Community", text: "A welcoming place to live.", icon: Users },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">About us</p>
          <h2 className="section-title">Welcome to Aunty&apos;s Orchard PG</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Located in Roorkee, Aunty&apos;s Orchard PG offers a warm, secure, and welcoming
            environment where residents can focus on their studies, careers, and personal growth.
            Whether you&apos;re a student preparing for exams or a working professional looking for
            a comfortable stay, we provide everything you need to feel at home.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Our goal is simple: clean rooms, quality facilities, nutritious meals, and a
            stress-free living experience.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map(({ title, text, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="card h-full bg-cream">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sage text-forest">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-forest">{title}</h3>
                <p className="mt-1 text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

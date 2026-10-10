import { BedDouble, Users, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/config/site";
import { content } from "@/config/nav";
import Reveal from "./Reveal";

const rooms = [
  {
    title: "Double Sharing",
    text: "Comfortable, furnished and practical.",
    icon: BedDouble,
  },
  {
    title: "Triple Sharing",
    text: "Affordable shared accommodation with all essential facilities.",
    icon: Users,
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="section-pad">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Furnished PG Rooms in Roorkee</h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {rooms.map(({ title, text, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 80}>
              <article className="card h-full">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-white">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold text-forest">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={whatsappHref(content.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full sm:w-auto"
          >
            <MessageCircle size={20} aria-hidden="true" /> Check Room Availability
          </a>
        </div>
      </div>
    </section>
  );
}

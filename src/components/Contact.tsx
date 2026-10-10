import { Phone, MessageCircle } from "lucide-react";
import { telHref, whatsappHref } from "@/config/site";
import { content } from "@/config/nav";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-forest text-white">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Looking for a PG in Roorkee?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/85">
            Check current room availability and schedule a visit.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappHref(content.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-peach text-forest hover:-translate-y-0.5 hover:shadow-lift"
            >
              <MessageCircle size={20} aria-hidden="true" /> WhatsApp
            </a>
            <a
              href={telHref}
              className="btn border border-white/40 text-white hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Phone size={20} aria-hidden="true" /> Call
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

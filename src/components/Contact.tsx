import { Phone, MessageCircle, Mail, Navigation } from "lucide-react";
import { siteConfig, telHref, mailHref, whatsappHref, hasMapsUrl } from "@/config/site";
import InquiryForm from "./InquiryForm";
import Reveal from "./Reveal";

export default function Contact() {
  const actions = [
    { label: "Call", detail: siteConfig.phone, href: telHref, icon: Phone, external: false },
    {
      label: "WhatsApp",
      detail: "Chat with us",
      href: whatsappHref(`Hi, I would like to inquire about ${siteConfig.name}.`),
      icon: MessageCircle,
      external: true,
    },
    { label: "Email", detail: siteConfig.email, href: mailHref, icon: Mail, external: false },
    {
      label: "Get Directions",
      detail: siteConfig.address,
      href: hasMapsUrl ? siteConfig.mapsUrl : "#location",
      icon: Navigation,
      external: hasMapsUrl,
    },
  ];

  return (
    <section id="contact" className="section-pad bg-forest text-white">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-peach">Contact</p>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Ready to Find Your New Home?
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
            Get in touch to schedule a visit, check room availability, or ask any questions.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {actions.map(({ label, detail, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex min-h-[72px] items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 transition duration-200 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-peach text-forest">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{label}</span>
                    <span className="block truncate text-sm text-white/80">{detail}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <div className="text-ink">
            <InquiryForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

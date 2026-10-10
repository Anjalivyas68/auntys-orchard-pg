import { Phone, MessageCircle } from "lucide-react";
import { telHref, whatsappHref } from "@/config/site";
import { content } from "@/config/nav";

export default function MobileCTA() {
  const item =
    "flex min-h-[52px] items-center justify-center gap-2 rounded-xl text-base font-semibold";
  const wa = whatsappHref(content.whatsappMessage);

  return (
    <>
      {/* Mobile: sticky bottom action bar. <main> has bottom padding so content is never covered. */}
      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-forest/10 bg-white/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(31,42,36,0.08)] backdrop-blur-sm lg:hidden"
      >
        <a href={telHref} className={`${item} flex-1 bg-sage text-forest`}>
          <Phone size={20} aria-hidden="true" /> Call
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} flex-[1.6] bg-forest text-white`}
        >
          <MessageCircle size={20} aria-hidden="true" /> Check Availability
        </a>
      </nav>

      {/* Desktop: subtle floating WhatsApp shortcut. */}
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-forest text-white shadow-lift transition hover:-translate-y-1 lg:flex"
      >
        <MessageCircle size={26} aria-hidden="true" />
      </a>
    </>
  );
}

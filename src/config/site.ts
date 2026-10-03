/**
 * CENTRAL SITE CONFIGURATION
 * --------------------------
 * Edit the values below to update contact details across the whole site.
 * Every value marked PLACEHOLDER must be replaced before public launch.
 */
export const siteConfig = {
  name: "Aunty's Orchard PG",
  tagline: "Comfort • Safety • Community • Convenience",
  description:
    "Discover Aunty's Orchard PG in Roorkee, Uttarakhand — comfortable furnished rooms, home-cooked meals, Wi-Fi, housekeeping, security, and convenient accommodation for students and working professionals.",

  // PLACEHOLDER: replace with the real URL once deployed / a domain is connected.
  url: "https://auntys-orchard-pg.vercel.app",

  // PLACEHOLDER: full number with country code, e.g. "+919876543210"
  phone: "+917906106313",
  // PLACEHOLDER: digits only, country code first, no "+" — e.g. "919876543210"
  whatsapp: "917906106313",
  // PLACEHOLDER
  email: "mayurenterprises.rke@gmail.com",
  // PLACEHOLDER: add the full street address when confirmed.
  address: "648, Janak Raj Kunj, Sainik Colony, Near Canal View Apartments, Roorkee, Uttarakhand, India",

  // PLACEHOLDER: link used by "Get Directions" (a Google Maps share link).
  mapsUrl: "https://share.google/LHmhX0bsyVVcBXK7V",
  // PLACEHOLDER: the "src" URL from Google Maps → Share → Embed a map. Leave empty to show the map card.
  mapsEmbedUrl: "",

  // Optional: add real profile URLs. Empty strings are hidden automatically.
  social: {
    instagram: "",
    facebook: "",
  },

  // Set to true ONLY after real business details above are filled in. Enables LocalBusiness JSON-LD.
  enableStructuredData: false,
};

const isPlaceholder = (v: string) => v.includes("XXXX");

export const hasRealPhone = !isPlaceholder(siteConfig.phone);
export const hasRealWhatsApp = !isPlaceholder(siteConfig.whatsapp);
export const hasMapsUrl = siteConfig.mapsUrl !== "#" && siteConfig.mapsUrl !== "";

export const telHref = `tel:${siteConfig.phone}`;
export const mailHref = `mailto:${siteConfig.email}`;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Facilities", href: "#facilities" },
  { label: "Rooms", href: "#rooms" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

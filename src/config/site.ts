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
  mapsUrl: "https://www.google.com/maps/dir/29.861298,77.8811105/Aunty's+Orchard+PG,+648-+Janakrajkunj,+Lane,+no+1,+near+Canal+View+Apartments,+Sainik+Colony,+Ganesh+Pur,+Roorkee,+Uttarakhand+247667/@29.8613472,77.8787424,570m/data=!3m2!1e3!4b1!4m17!1m7!3m6!1s0x390eb3fe73d6838d:0x35253207a4938714!2sAunty's+Orchard+PG!8m2!3d29.861303!4d77.8815222!16s%2Fg%2F11l1xhs73p!4m8!1m1!4e1!1m5!1m1!1s0x390eb3fe73d6838d:0x35253207a4938714!2m2!1d77.881521!2d29.8613016?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
  // PLACEHOLDER: the "src" URL from Google Maps → Share → Embed a map. Leave empty to show the map card.
  mapsEmbedUrl: "<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4468337223143!2d77.87879958085938!3d29.861176817715027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3fe73d6838d%3A0x35253207a4938714!2sAunty's%20Orchard%20PG!5e1!3m2!1sen!2sin!4v1791042962597!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin",

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

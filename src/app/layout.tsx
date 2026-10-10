import type { Metadata, Viewport } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource/dm-serif-display/400.css";
import "./globals.css";
import { siteConfig } from "@/config/site";

const DESC =
  "Furnished PG in Sainik Colony, Roorkee for working professionals: double and triple sharing rooms, home-cooked meals, fast Wi-Fi, housekeeping and CCTV. Check availability on WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "PG in Roorkee for Working Professionals | Aunty's Orchard PG",
  description: DESC,
  keywords: [
    "PG in Roorkee",
    "PG for working professionals in Roorkee",
    "PG in Sainik Colony Roorkee",
    "Paying guest in Roorkee",
    "Furnished PG Roorkee",
    "Working professional PG Roorkee",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "PG in Roorkee for Working Professionals | Aunty's Orchard PG",
    description: DESC,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary",
    title: "PG in Roorkee for Working Professionals | Aunty's Orchard PG",
    description: DESC,
  },
};

export const viewport: Viewport = {
  themeColor: "#244C3A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="font-sans">{children}</body>
    </html>
  );
}

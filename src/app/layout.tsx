import type { Metadata, Viewport } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource/dm-serif-display/400.css";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Aunty's Orchard PG | Comfortable PG Accommodation in Roorkee",
  description: siteConfig.description,
  keywords: [
    "PG in Roorkee",
    "Student PG in Roorkee",
    "Paying guest in Roorkee",
    "Student accommodation Roorkee",
    "Furnished PG Roorkee",
    "Working professional PG Roorkee",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aunty's Orchard PG | Comfortable PG Accommodation in Roorkee",
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary",
    title: "Aunty's Orchard PG | Comfortable PG Accommodation in Roorkee",
    description: siteConfig.description,
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

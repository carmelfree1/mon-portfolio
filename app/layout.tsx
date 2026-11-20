import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gnadou Carmel — Développeur web & mobile",
  description:
    "Portfolio de Gnadou Léazike Bienvenu Carmel, développeur fullstack en Côte d’Ivoire. Je conçois des produits web et mobiles utiles, accessibles et bien pensés.",
  metadataBase: new URL("https://mon-portfolio-fin.vercel.app"),
  openGraph: {
    title: "Gnadou Carmel — Développeur web & mobile",
    description: "Des produits numériques utiles, conçus avec attention.",
    locale: "fr_CI",
    type: "website",
    url: "https://mon-portfolio-fin.vercel.app",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f5f2",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

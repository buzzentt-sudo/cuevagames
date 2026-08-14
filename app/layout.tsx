import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://cuevagames.vercel.app";
const siteDescription =
  "CuevaGames es tu catálogo de videojuegos: descubrí juegos destacados, explorá por categoría y encontrá tu próximo juego favorito.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CuevaGames — Tu catálogo de videojuegos",
    template: "%s | CuevaGames",
  },
  description: siteDescription,
  keywords: [
    "videojuegos",
    "catálogo de juegos",
    "CuevaGames",
    "juegos online",
    "reseñas de juegos",
  ],
  openGraph: {
    title: "CuevaGames — Tu catálogo de videojuegos",
    description: siteDescription,
    url: siteUrl,
    siteName: "CuevaGames",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CuevaGames — Tu catálogo de videojuegos",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-background font-sans text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

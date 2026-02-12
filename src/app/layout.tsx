import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Click Rick — Agencia de Inteligencia Artificial",
  description:
    "Desarrollamos soluciones de inteligencia artificial a la medida que automatizan procesos, revelan información clave y aceleran el crecimiento de tu negocio.",
  keywords: [
    "inteligencia artificial",
    "IA",
    "agencia",
    "automatización",
    "machine learning",
    "chatbots",
    "analítica de datos",
    "México",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${manrope.variable} ${syne.variable} antialiased grain-overlay`}
      >
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

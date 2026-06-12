import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RoutePrefetch from "@/components/RoutePrefetch";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ma'My House Services — Nous prenons soin de ce qui compte le plus",
  description:
    "Services de personnel domestique et professionnel au Cameroun. Femme de ménage, nounou, chauffeur, garde et plus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased text-navy`}>
        <RoutePrefetch />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

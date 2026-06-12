import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import InnerPageHero from "@/components/InnerPageHero";
import { contactHero } from "@/lib/contact-data";

export const metadata: Metadata = {
  title: "Contact — Ma'My House Services",
  description:
    "Contactez Ma'My House Services pour un renseignement. Douala, Cameroun.",
};

export default function ContactPage() {
  return (
    <>
      <InnerPageHero
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        titleHighlight={contactHero.titleHighlight}
        subtitle={contactHero.subtitle}
        description={contactHero.description}
        image={contactHero.image}
        imageAlt="Contactez Ma'My House Services"
      />
      <ContactForm />
    </>
  );
}

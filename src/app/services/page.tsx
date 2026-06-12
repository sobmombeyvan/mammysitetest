import type { Metadata } from "next";
import Diaspora from "@/components/Diaspora";
import InnerPageHero from "@/components/InnerPageHero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyChoose from "@/components/WhyChoose";
import { servicesHero } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Nos Services — Ma'My House Services",
  description:
    "Femme de ménage, nounou, chauffeur, gardien, aide aux personnes âgées et services diaspora au Cameroun.",
};

export default function ServicesPage() {
  return (
    <>
      <InnerPageHero
        eyebrow={servicesHero.eyebrow}
        title={servicesHero.title}
        titleHighlight={servicesHero.titleHighlight}
        subtitle={servicesHero.subtitle}
        description={servicesHero.description}
        image={servicesHero.image}
        imageAlt="Nos services Ma'My House"
      />
      <Services />
      <WhyChoose layout="inline" />
      <Diaspora variant="full" />
      <Stats />
    </>
  );
}

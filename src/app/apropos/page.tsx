import type { Metadata } from "next";
import AboutAudiences from "@/components/about/AboutAudiences";
import AboutHistory from "@/components/about/AboutHistory";
import AboutPageHero from "@/components/about/AboutPageHero";
import MissionVisionValues from "@/components/about/MissionVisionValues";

export const metadata: Metadata = {
  title: "À Propos — Ma'My House Services",
  description:
    "Découvrez MA'MY HOUSE SERVICES : sélection, placement et accompagnement de personnel de confiance pour les familles, entreprises et la diaspora au Cameroun.",
};

export default function AboutPage() {
  return (
    <>
      <AboutPageHero />
      <AboutHistory />
      <MissionVisionValues />
      <AboutAudiences />
    </>
  );
}

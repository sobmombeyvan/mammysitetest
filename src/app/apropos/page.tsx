import type { Metadata } from "next";
import AboutEngagement from "@/components/about/AboutEngagement";
import AboutHistory from "@/components/about/AboutHistory";
import AboutPageHero from "@/components/about/AboutPageHero";
import AboutStats from "@/components/about/AboutStats";
import MissionVisionValues from "@/components/about/MissionVisionValues";

export const metadata: Metadata = {
  title: "À Propos — Ma'My House Services",
  description:
    "Découvrez l'histoire de Ma'My House, fondée par Gracela Webe. Notre mission, nos valeurs et notre engagement.",
};

export default function AboutPage() {
  return (
    <>
      <AboutPageHero />
      <AboutHistory />
      <MissionVisionValues />
      <AboutStats />
      <AboutEngagement />
    </>
  );
}

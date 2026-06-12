import HeroDesktop from "@/components/HeroDesktop";
import ServicesTeaser from "@/components/ServicesTeaser";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhyAndDiaspora from "@/components/WhyAndDiaspora";

export default function HomePage() {
  return (
    <>
      <HeroDesktop />
      <ServicesTeaser />
      <WhyAndDiaspora />
      <Testimonials />
      <Stats />
    </>
  );
}

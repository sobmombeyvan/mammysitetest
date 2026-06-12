import PageHero from "./PageHero";
import { heroContent } from "@/lib/data";

export default function HeroDesktop() {
  return (
    <PageHero
      eyebrow={heroContent.eyebrow}
      title={heroContent.title}
      titleHighlight={heroContent.titleHighlight}
      subtitle={heroContent.categories}
      description={heroContent.description}
      image={heroContent.image}
      imageAlt="Professionnelle Ma'My House avec une famille"
      priority
    />
  );
}

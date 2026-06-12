import type { Metadata } from "next";
import BlogGrid from "@/components/BlogGrid";
import InnerPageHero from "@/components/InnerPageHero";
import { blogHero } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — Ma'My House Services",
  description:
    "Conseils et actualités sur le personnel domestique, la garde d'enfants et les services diaspora au Cameroun.",
};

export default function BlogPage() {
  return (
    <>
      <InnerPageHero
        eyebrow={blogHero.eyebrow}
        title={blogHero.title}
        titleHighlight={blogHero.titleHighlight}
        subtitle={blogHero.subtitle}
        description={blogHero.description}
        image={blogHero.image}
        imageAlt="Blog Ma'My House Services"
      />
      <BlogGrid />
    </>
  );
}

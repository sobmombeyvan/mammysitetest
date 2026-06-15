import { siteImages } from "./images";

export const blogHero = {
  eyebrow: "BLOG",
  title: "Conseils, actualités et",
  titleHighlight: "bonnes pratiques.",
  subtitle: "Maison • Famille • Entreprise • Diaspora",
  description:
    "Retrouvez nos articles sur le personnel domestique, la garde d'enfants, les services diaspora et l'entretien de votre foyer au Cameroun.",
  image: siteImages.blog,
};

export const blogPosts = [
  {
    slug: "choisir-femme-de-menage",
    title: "Comment choisir une femme de ménage de confiance ?",
    excerpt:
      "Nos conseils pour sélectionner une professionnelle fiable, vérifiée et adaptée à votre foyer.",
    date: "5 juin 2026",
    category: "Maison",
    image: siteImages.housekeeping,
    readTime: "4 min",
  },
  {
    slug: "nounou-domicile-cameroun",
    title: "Trouver une nounou à domicile au Cameroun",
    excerpt:
      "Les critères essentiels pour confier vos enfants à une garde qualifiée et bienveillante.",
    date: "28 mai 2026",
    category: "Famille",
    image: siteImages.nanny,
    readTime: "5 min",
  },
  {
    slug: "services-diaspora",
    title: "Services diaspora : veiller sur vos proches depuis l'étranger",
    excerpt:
      "Comment Ma'My House accompagne les Camerounais vivant en France, Belgique ou ailleurs.",
    date: "15 mai 2026",
    category: "Diaspora",
    image: siteImages.diasporaBanner,
    readTime: "6 min",
  },
  {
    slug: "personnel-entreprise",
    title: "Personnel d'entretien pour les entreprises",
    excerpt:
      "Pourquoi externaliser l'entretien de vos locaux avec des profils formés et encadrés.",
    date: "2 mai 2026",
    category: "Entreprise",
    image: siteImages.housekeeping,
    readTime: "4 min",
  },
  {
    slug: "aide-personnes-agees",
    title: "Aide aux personnes âgées : un accompagnement digne",
    excerpt:
      "Nos solutions pour soutenir vos parents ou grands-parents au quotidien avec respect.",
    date: "20 avril 2026",
    category: "Famille",
    image: siteImages.elderly,
    readTime: "5 min",
  },
  {
    slug: "securite-domicile",
    title: "Sécuriser votre domicile avec un gardien professionnel",
    excerpt:
      "Les avantages d'un service de gardiennage fiable pour votre maison ou votre entreprise.",
    date: "8 avril 2026",
    category: "Maison",
    image: siteImages.security,
    readTime: "3 min",
  },
];

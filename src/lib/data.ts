import { landscapeCropTopClass, siteImages } from "./images";

export const navLinks = [
  { label: "ACCUEIL", href: "/" },
  { label: "NOS SERVICES", href: "/services" },
  { label: "À PROPOS", href: "/apropos" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

export const footerServices = [
  "Femme de ménage",
  "Nounou & Garde d'enfants",
  "Aide aux personnes âgées",
  "Chauffeur privé",
  "Gardien / Vigile",
  "Femme de chambre",
  "Services diaspora",
];

export const trustFeatures = [
  { label: "Profils vérifiés", icon: "shield-check" },
  { label: "Personnel formé", icon: "graduation-cap" },
  { label: "Suivi personnalisé", icon: "users" },
  { label: "Disponible 7j/7", icon: "clock" },
];

export const heroContent = {
  eyebrow: "VOTRE PARTENAIRE DE CONFIANCE",
  title: "Nous prenons soin de ce qui compte",
  titleHighlight: "le plus.",
  categories: "Maison • Famille • Entreprise • Diaspora",
  description:
    "Nous sélectionnons pour vous des professionnels fiables, formés et vérifiés, pour que vous puissiez vaquer à vos occupations en toute sérénité.",
  callLabel: "NOUS APPELER",
  advisorLabel: "PARLER À UN CONSEILLER",
  image: siteImages.hero,
};

export const services = [
  {
    title: "Femme de ménage",
    description:
      "Un intérieur impeccable, un quotidien allégé. Des professionnelles fiables pour l'entretien de votre domicile.",
    image: siteImages.housekeeping,
    icon: "home",
  },
  {
    title: "Nounou",
    description:
      "Une garde attentive et bienveillante pour vos enfants, à domicile, en toute confiance.",
    image: siteImages.nanny,
    icon: "baby",
  },
  {
    title: "Aide aux personnes âgées",
    description:
      "Un accompagnement respectueux et digne pour vos proches au quotidien.",
    image: siteImages.elderly,
    icon: "heart-handshake",
  },
  {
    title: "Chauffeur",
    description:
      "Des conducteurs expérimentés et ponctuels pour vos déplacements personnels ou professionnels.",
    image: siteImages.driver,
    icon: "car",
  },
  {
    title: "Gardien / Vigile",
    description:
      "La sécurité de votre domicile ou de vos locaux, jour et nuit, entre de bonnes mains.",
    image: siteImages.security,
    imageClassName: landscapeCropTopClass,
    icon: "shield",
  },
  {
    title: "Femme de chambre",
    description:
      "Un service hôtelier à domicile : chambres, linge et espaces toujours impeccables.",
    image: siteImages.chambermaid,
    icon: "bed",
  },
];

export const whyChoose = [
  { label: "Profils vérifiés", icon: "shield-check" },
  { label: "Personnel formé", icon: "graduation-cap" },
  { label: "Remplacement garanti", icon: "refresh-cw" },
  { label: "Suivi personnalisé", icon: "headphones" },
  { label: "Disponible 7j/7", icon: "clock" },
];

export const diasporaContent = {
  eyebrow: "VOUS VIVEZ À L'ÉTRANGER ?",
  title: "Nous prenons soin de ceux qui comptent pour vous.",
  description:
    "Que vous viviez en France, en Belgique, au Canada ou ailleurs, nous prenons soin de votre famille et de vos biens au Cameroun. Entretien de maison, garde d'enfants, aide aux personnes âgées : nous sommes vos yeux et vos mains sur place.",
  cta: "DÉCOUVRIR NOS SERVICES DIASPORA",
  image: siteImages.diasporaBanner,
};

export const testimonials = [
  {
    quote:
      "Grâce à Ma'My House, j'ai enfin trouvé une nounou de confiance pour mes enfants. Le suivi est impeccable et l'équipe très réactive.",
    author: "Marie",
    location: "Douala",
  },
  {
    quote:
      "Depuis la France, je peux suivre l'entretien de la maison de mes parents au Cameroun. Un service rassurant et professionnel.",
    author: "Jean-Pierre",
    location: "Paris",
  },
  {
    quote:
      "Notre entreprise fait appel à Ma'My House pour le personnel d'entretien. Ponctualité, sérieux et qualité au rendez-vous.",
    author: "Sophie",
    location: "Yaoundé",
  },
];

export const stats = [
  { value: "+200", label: "Profils qualifiés et vérifiés", icon: "users" },
  { value: "+50", label: "Familles accompagnées", icon: "home" },
  { value: "+20", label: "Entreprises servies", icon: "building-2" },
  { value: "95%", label: "De satisfaction clients", icon: "smile" },
];

export const contactPhones = [
  {
    network: "Orange",
    display: "+237 6 41 71 75 86",
    tel: "+237641717586",
  },
  {
    network: "MTN",
    display: "+237 6 53 33 99 22",
    tel: "+237653339922",
  },
] as const;

export const contactInfo = {
  email: "contact.mamyhouseservice@gmail.com",
  address: "Douala, Cameroun",
  tagline: "La confiance, notre priorité. Votre tranquillité, notre mission.",
  whatsapp: "+237641717586",
};

export const hours = [
  "Lundi - Samedi : 7h00 - 18h00",
  "Dimanche : Sur rendez-vous",
  "Disponible 24h/24 sur demande",
];

export const socialLinks = [
  { name: "Facebook", color: "#1877F2", letter: "f" },
  { name: "Instagram", color: "#E4405F", letter: "ig" },
  { name: "TikTok", color: "#000000", letter: "tk" },
  { name: "LinkedIn", color: "#0A66C2", letter: "in" },
  { name: "YouTube", color: "#FF0000", letter: "yt" },
];

import Image from "next/image";

type InnerPageHeroProps = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
};

/** Hero léger — pas de full-bleed, charge plus vite entre les pages */
export default function InnerPageHero({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  description,
  image,
  imageAlt,
}: InnerPageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-cream via-cream-light to-cream-dark py-12 md:py-16">
      <div className="section-container">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              {eyebrow}
            </p>
            <h1 className="mb-4 font-serif text-2xl font-bold leading-tight text-navy md:text-4xl">
              {title} <span className="text-gold">{titleHighlight}</span>
            </h1>
            {subtitle && (
              <p className="mb-3 text-sm font-bold text-navy">{subtitle}</p>
            )}
            <p className="text-sm leading-relaxed text-gray-600">{description}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-dark shadow-lg">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-contain object-center p-2"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

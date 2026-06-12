import { Phone, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contactPhones } from "@/lib/data";
import { trustFeatures } from "@/lib/data";
import Icon from "./Icon";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  showTrustBar?: boolean;
  priority?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  description,
  image,
  imageAlt,
  showTrustBar = true,
  priority = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream-light to-cream-dark">
      <div className="section-container py-12 md:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              {eyebrow}
            </p>
            <h1 className="mb-4 font-serif text-[2rem] font-bold leading-[1.15] text-navy sm:text-[2.5rem] lg:text-[2.75rem]">
              {title} <span className="text-gold">{titleHighlight}</span>
            </h1>
            <p className="mb-4 text-base font-bold text-navy sm:text-lg">{subtitle}</p>
            <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base">
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${contactPhones[0].tel}`} className="btn-navy">
                <Phone className="h-4 w-4" />
                NOUS APPELER
              </a>
              <Link href="/contact" className="btn-gold">
                <UserRound className="h-4 w-4" />
                PARLER À UN CONSEILLER
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(26,36,47,0.15)] lg:aspect-[5/4]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              priority={priority}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {showTrustBar && (
        <div className="border-t border-cream-dark bg-cream-light">
          <div className="section-container py-5">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {trustFeatures.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy/10 bg-white text-navy">
                    <Icon name={feature.icon} className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-semibold text-navy">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import { Phone, UserRound } from "lucide-react";
import Image from "next/image";
import { contactPhones, heroContent, trustFeatures } from "@/lib/data";
import Icon from "./Icon";

export default function HeroMobile() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="section-container">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              {heroContent.eyebrow}
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">
              {heroContent.title}{" "}
              <span className="text-gold">{heroContent.titleHighlight}</span>
            </h1>
            <p className="mb-4 text-base font-bold text-navy sm:text-lg">
              {heroContent.categories}
            </p>
            <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base">
              {heroContent.description}
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              <a href={`tel:${contactPhones[0].tel}`} className="btn-navy">
                <Phone className="h-4 w-4" />
                {heroContent.callLabel}
              </a>
              <a href="#contact" className="btn-gold">
                <UserRound className="h-4 w-4" />
                {heroContent.advisorLabel}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustFeatures.map((feature) => (
                <div key={feature.label} className="flex flex-col items-center text-center">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full border border-navy/10 bg-cream-light text-navy">
                    <Icon name={feature.icon} className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-semibold leading-tight text-navy">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-dark shadow-xl">
            <Image
              src={heroContent.image}
              alt="Professionnelle Ma'My House avec une famille"
              fill
              className="object-contain object-center p-2"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

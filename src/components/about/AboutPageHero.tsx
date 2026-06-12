import Image from "next/image";
import { aboutHero } from "@/lib/about-data";

export default function AboutPageHero() {
  return (
    <section className="bg-gradient-to-br from-cream via-cream-light to-cream-dark py-14 md:py-20">
      <div className="section-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              {aboutHero.eyebrow}
            </p>
            <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-navy md:text-4xl lg:text-[2.75rem]">
              {aboutHero.title}{" "}
              <span className="text-gold">{aboutHero.titleHighlight}</span>{" "}
              {aboutHero.titleEnd}
            </h1>
            <div className="max-w-lg space-y-4">
              {aboutHero.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-gray-600 md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6 max-w-lg rounded-xl border border-gold/25 bg-white/70 p-5">
              <p className="text-sm font-bold text-navy md:text-base">{aboutHero.missionTitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
                {aboutHero.missionText}
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(0,26,51,0.12)]">
            <Image
              src={aboutHero.image}
              alt="Équipe Ma'My House"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

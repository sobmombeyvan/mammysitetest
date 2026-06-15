import Image from "next/image";
import { aboutAudiences } from "@/lib/about-data";
import { landscapeCropTopClass } from "@/lib/images";

export default function AboutAudiences() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="section-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="mb-8 font-serif text-2xl font-bold text-navy md:text-3xl">
              {aboutAudiences.title}
            </h2>
            <ul className="mb-8 space-y-3">
              {aboutAudiences.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 text-sm text-gray-600 md:text-base"
                >
                  <span className="text-xl" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <ul className="mb-10 space-y-3 border-t border-cream-dark pt-6">
              {aboutAudiences.extras.map((extra) => (
                <li key={extra} className="flex items-start gap-3 text-sm text-gray-600 md:text-base">
                  <span className="mt-1 text-gold">•</span>
                  <span>{extra}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-navy px-6 py-5 text-center md:px-8">
              <p className="text-sm font-extrabold uppercase tracking-wider text-gold">
                {aboutAudiences.closingBrand}
              </p>
              <p className="mt-2 font-serif text-lg font-bold text-white md:text-xl">
                {aboutAudiences.closingTagline}
              </p>
            </div>
          </div>
          <div className="relative min-w-0 aspect-[16/10] overflow-hidden rounded-2xl bg-cream-dark shadow-lg">
            <Image
              src={aboutAudiences.image}
              alt="Clients accompagnés par Ma'My House Services"
              fill
              className={landscapeCropTopClass}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

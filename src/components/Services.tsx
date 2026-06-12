import Image from "next/image";
import { services } from "@/lib/data";
import Icon from "./Icon";

export default function Services() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-wide text-navy md:text-3xl">
            NOS SERVICES
          </h2>
          <div className="gold-underline" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,26,51,0.06)]"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute -bottom-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-white bg-navy text-gold shadow-md">
                  <Icon name={service.icon} className="h-4 w-4" />
                </div>
              </div>
              <div className="bg-cream px-5 pb-6 pt-9 text-center">
                <h3 className="mb-2 text-base font-bold text-navy">{service.title}</h3>
                <p className="text-xs leading-relaxed text-gray-500">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

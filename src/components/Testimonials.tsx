import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { siteImages } from "@/lib/images";

export default function Testimonials() {
  return (
    <section className="bg-cream-light py-14 md:py-20">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-wide text-navy md:text-3xl">
            ILS NOUS FONT CONFIANCE
          </h2>
          <div className="gold-underline" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-cream-dark shadow-lg lg:mx-0 lg:max-w-none">
            <Image
              src={siteImages.testimonial}
              alt="Cliente satisfaite"
              fill
              className="object-contain object-center p-2"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col gap-4">
            {testimonials.map((t, i) => (
              <article
                key={t.author}
                className={`rounded-xl bg-white p-6 shadow-[0_2px_16px_rgba(0,26,51,0.08)] ${
                  i === 1 ? "lg:-ml-6" : ""
                } ${i === 2 ? "lg:ml-3" : ""}`}
              >
                <Quote className="mb-2 h-6 w-6 fill-gold/20 text-gold" />
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mb-4 text-sm italic leading-relaxed text-gray-600">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="text-sm font-bold text-navy">
                  — {t.author}, {t.location}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Quote } from "lucide-react";
import { aboutHistory } from "@/lib/about-data";

export default function AboutHistory() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="section-container">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr_0.85fr] lg:gap-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg lg:aspect-auto lg:min-h-[360px]">
            <Image
              src={aboutHistory.image}
              alt="Notre histoire"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="mb-5 font-serif text-2xl font-bold text-navy md:text-3xl">
              {aboutHistory.title}
            </h2>
            <div className="space-y-4">
              {aboutHistory.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-sm leading-relaxed text-gray-600">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gold/20 bg-cream p-6 md:p-8">
            <Quote className="mb-4 h-8 w-8 text-gold" />
            <blockquote className="mb-6 text-sm italic leading-relaxed text-gray-600">
              &ldquo;{aboutHistory.quote}&rdquo;
            </blockquote>
            <p className="text-sm font-bold text-navy">{aboutHistory.author}</p>
            <p className="text-xs text-gold">{aboutHistory.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { aboutEngagement } from "@/lib/about-data";

export default function AboutEngagement() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="section-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              {aboutEngagement.eyebrow}
            </p>
            <h2 className="mb-5 font-serif text-2xl font-bold text-navy md:text-3xl">
              {aboutEngagement.title}
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-600">
              {aboutEngagement.description}
            </p>
            <Link href="/services" className="btn-gold">
              {aboutEngagement.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={aboutEngagement.image}
              alt="Notre équipe de professionnelles"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

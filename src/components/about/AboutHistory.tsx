import Image from "next/image";
import { aboutHistory } from "@/lib/about-data";

export default function AboutHistory() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="section-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg lg:aspect-auto lg:min-h-[380px]">
            <Image
              src={aboutHistory.image}
              alt="Notre histoire"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="mb-5 font-serif text-2xl font-bold text-navy md:text-3xl">
              {aboutHistory.title}
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-gray-600 md:text-base">
              {aboutHistory.intro}
            </p>
            <p className="mb-6 text-sm font-semibold leading-relaxed text-navy md:text-base">
              {aboutHistory.highlight}
            </p>
            <div className="space-y-4">
              {aboutHistory.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-gray-600 md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

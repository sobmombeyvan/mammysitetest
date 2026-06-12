import { aboutValues, aboutVision } from "@/lib/about-data";
import Icon from "../Icon";

export default function MissionVisionValues() {
  return (
    <section className="bg-cream-light py-14 md:py-20">
      <div className="section-container space-y-12">
        <article className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm md:p-10">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold text-gold">
            <Icon name={aboutVision.icon} className="h-6 w-6" strokeWidth={1.5} />
          </div>
          <h2 className="mb-4 font-serif text-2xl font-bold text-navy md:text-3xl">
            {aboutVision.title}
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
            {aboutVision.text}
          </p>
        </article>

        <div>
          <h2 className="mb-8 text-center font-serif text-2xl font-bold text-navy md:text-3xl">
            {aboutValues.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutValues.items.map((value) => (
              <article
                key={value.title}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold text-gold">
                  <Icon name={value.icon} className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-base font-bold text-navy">{value.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

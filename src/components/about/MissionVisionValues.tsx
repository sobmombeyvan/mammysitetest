import { mvv } from "@/lib/about-data";
import Icon from "../Icon";

export default function MissionVisionValues() {
  return (
    <section className="bg-cream-light py-14 md:py-20">
      <div className="section-container">
        <div className="grid gap-6 md:grid-cols-3">
          {mvv.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold text-gold">
                <Icon name={item.icon} className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-base font-bold text-navy">{item.title}</h3>
              {"text" in item && item.text && (
                <p className="text-sm leading-relaxed text-gray-500">{item.text}</p>
              )}
              {"values" in item && item.values && (
                <ul className="space-y-1.5 text-sm text-gray-500">
                  {item.values.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

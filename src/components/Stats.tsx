import { stats } from "@/lib/data";
import Icon from "./Icon";

export default function Stats() {
  return (
    <section className="bg-navy py-10 md:py-12">
      <div className="section-container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                <Icon name={stat.icon} className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gold md:text-[1.75rem]">
                  {stat.value}
                </p>
                <p className="text-xs leading-snug text-white/85 md:text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

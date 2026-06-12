import { whyChoose } from "@/lib/data";
import Icon from "./Icon";

type WhyChooseProps = {
  layout?: "inline" | "stacked";
};

export default function WhyChoose({ layout = "inline" }: WhyChooseProps) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="section-container">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-wide text-navy md:text-3xl">
            POURQUOI CHOISIR MA&apos;MY HOUSE ?
          </h2>
          <div className="gold-underline" />
        </div>

        <div
          className={
            layout === "inline"
              ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-5"
              : "grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          }
        >
          {whyChoose.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold text-gold">
                <Icon name={item.icon} className="h-7 w-7" strokeWidth={1.25} />
              </div>
              <p className="max-w-[180px] text-xs font-medium leading-relaxed text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

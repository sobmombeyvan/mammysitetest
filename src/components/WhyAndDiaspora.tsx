import { whyChoose } from "@/lib/data";
import Diaspora from "./Diaspora";
import Icon from "./Icon";

export default function WhyAndDiaspora() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="section-container">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col justify-center">
            <h2 className="mb-8 text-xl font-extrabold uppercase tracking-wide text-navy md:text-2xl">
              POURQUOI CHOISIR MA&apos;MY HOUSE ?
            </h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
              {whyChoose.map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold text-gold">
                    <Icon name={item.icon} className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <p className="max-w-[110px] text-[11px] font-semibold leading-snug text-navy">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Diaspora variant="card" />
        </div>
      </div>
    </section>
  );
}

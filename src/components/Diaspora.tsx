import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { diasporaContent } from "@/lib/data";

type DiasporaProps = {
  variant?: "card" | "full";
};

function DiasporaVisual() {
  return (
    <div className="relative flex h-full min-h-[220px] items-center justify-center overflow-hidden rounded-xl lg:min-h-[280px]">
      <Image
        src={diasporaContent.image}
        alt="Service diaspora Ma'My House"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 40vw"
      />
      <div className="absolute inset-0 bg-navy/35" />
      <svg
        viewBox="0 0 400 240"
        className="relative z-10 h-full w-full max-w-sm opacity-70"
        aria-hidden="true"
      >
        <circle cx="200" cy="120" r="95" fill="none" stroke="#C5A059" strokeWidth="0.8" />
        <circle cx="200" cy="120" r="65" fill="none" stroke="#C5A059" strokeWidth="0.5" />
        <circle cx="205" cy="145" r="5" fill="#C5A059" />
        <circle cx="115" cy="95" r="3.5" fill="#C5A059" />
        <circle cx="290" cy="85" r="3.5" fill="#C5A059" />
        <line x1="115" y1="95" x2="205" y2="145" stroke="#C5A059" strokeWidth="0.8" opacity="0.6" />
        <line x1="290" y1="85" x2="205" y2="145" stroke="#C5A059" strokeWidth="0.8" opacity="0.6" />
      </svg>
    </div>
  );
}

export default function Diaspora({ variant = "card" }: DiasporaProps) {
  const content = (
    <>
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-gold">
        {diasporaContent.eyebrow}
      </p>
      <h2 className="mb-4 text-xl font-bold leading-snug text-white md:text-2xl">
        {diasporaContent.title}
      </h2>
      <p className="mb-8 max-w-md text-sm leading-relaxed text-white/85">
        {diasporaContent.description}
      </p>
      <Link href="/contact" className="btn-gold">
        {diasporaContent.cta}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </>
  );

  if (variant === "full") {
    return (
      <section id="diaspora" className="bg-white py-12 md:py-16">
        <div className="section-container">
          <div className="overflow-hidden rounded-2xl bg-navy px-8 py-10 md:px-12 md:py-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>{content}</div>
              <DiasporaVisual />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div id="diaspora" className="h-full overflow-hidden rounded-2xl bg-navy px-7 py-9 md:px-9 md:py-10">
      <div className="grid h-full items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>{content}</div>
        <DiasporaVisual />
      </div>
    </div>
  );
}

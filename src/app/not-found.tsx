import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[50vh] items-center bg-cream-light py-20">
      <div className="section-container text-center">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
          Erreur 404
        </p>
        <h1 className="mb-4 font-serif text-3xl font-bold text-navy">Page introuvable</h1>
        <p className="mb-8 text-sm text-gray-600">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/" prefetch className="btn-gold">
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}

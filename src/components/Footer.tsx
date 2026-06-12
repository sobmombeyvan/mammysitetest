import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { contactInfo, footerServices, hours, navLinks, socialLinks } from "@/lib/data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy py-12 text-white md:py-14">
      <div className="section-container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/">
              <Logo light />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Votre partenaire de confiance pour tous vos besoins en personnel domestique
              et professionnel au Cameroun.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[9px] font-bold text-white transition hover:opacity-80"
                  style={{ backgroundColor: social.color }}
                >
                  {social.letter}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-gold">
              Nos services
            </h3>
            <ul className="space-y-2">
              {footerServices.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-white/70 transition hover:text-gold">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-gold">
              Liens utiles
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 transition hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-gold">
              Nous contacter
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                {contactInfo.phone}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                {contactInfo.email}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                {contactInfo.address}
              </li>
            </ul>
            <ul className="mt-4 space-y-2">
              {hours.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-white/70">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Ma&apos;My House Services. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold">Mentions légales</a>
            <a href="#" className="hover:text-gold">Politique de confidentialité</a>
            <a href="#" className="hover:text-gold">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

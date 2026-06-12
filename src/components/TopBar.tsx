import { Mail, Phone } from "lucide-react";
import { contactInfo, contactPhones, socialLinks } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-navy text-white md:block">
      <div className="section-container flex h-9 items-center justify-between text-[11px]">
        <div className="flex items-center gap-5">
          {contactPhones.map((phone) => (
            <a
              key={phone.tel}
              href={`tel:${phone.tel}`}
              className="flex items-center gap-1.5 hover:text-gold"
            >
              <Phone className="h-3 w-3" />
              {phone.network} : {phone.display}
            </a>
          ))}
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1.5 hover:text-gold">
            <Mail className="h-3 w-3" />
            {contactInfo.email}
          </a>
        </div>
        <p className="hidden text-white/70 lg:block">{contactInfo.tagline}</p>
        <div className="flex items-center gap-2">
          {socialLinks.slice(0, 4).map((s) => (
            <a
              key={s.name}
              href="#"
              aria-label={s.name}
              className="flex h-5 w-5 items-center justify-center rounded-full text-[8px] font-bold text-white transition hover:opacity-80"
              style={{ backgroundColor: s.color }}
            >
              {s.letter}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

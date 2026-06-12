import { Phone } from "lucide-react";
import { contactPhones } from "@/lib/data";

type ContactPhonesProps = {
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
};

export default function ContactPhones({
  className = "text-sm text-white/85",
  linkClassName = "transition hover:text-gold",
  iconClassName = "h-4 w-4 shrink-0 text-gold",
}: ContactPhonesProps) {
  return (
    <>
      {contactPhones.map((phone) => (
        <li key={phone.tel} className={`flex items-start gap-3 ${className}`}>
          <Phone className={`mt-0.5 ${iconClassName}`} aria-hidden="true" />
          <a href={`tel:${phone.tel}`} className={linkClassName}>
            <span className="font-semibold">{phone.network}</span> : {phone.display}
          </a>
        </li>
      ))}
    </>
  );
}

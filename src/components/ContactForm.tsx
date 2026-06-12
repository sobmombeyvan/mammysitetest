"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { contactInfo, hours } from "@/lib/data";
import { serviceOptions } from "@/lib/contact-data";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {sent ? (
              <div className="rounded-2xl border border-gold/30 bg-gold/5 p-10 text-center">
                <p className="text-lg font-bold text-navy">Message envoyé !</p>
                <p className="mt-2 text-sm text-gray-600">
                  Merci pour votre message. Notre équipe vous contactera sous 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase text-navy">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase text-navy">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      type="tel"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold"
                      placeholder="+237 6XX XXX XXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase text-navy">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-xs font-bold uppercase text-navy">
                    Service souhaité
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase text-navy">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold"
                    placeholder="Décrivez votre besoin..."
                  />
                </div>
                <button type="submit" className="btn-gold">
                  <Send className="h-4 w-4" />
                  ENVOYER LE MESSAGE
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-navy p-8 text-white">
              <h3 className="mb-6 text-lg font-extrabold uppercase">Contactez-nous</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-sm text-white/85">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {contactInfo.phone}
                </li>
                <li className="flex items-start gap-3 text-sm text-white/85">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {contactInfo.email}
                </li>
                <li className="flex items-start gap-3 text-sm text-white/85">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {contactInfo.address}
                </li>
              </ul>
              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="mb-4 text-xs font-extrabold uppercase text-gold">Horaires</h4>
                <ul className="space-y-2">
                  {hours.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-white/80">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

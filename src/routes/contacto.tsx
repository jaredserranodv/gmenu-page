import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/gmenu/Header";
import { Footer } from "@/components/gmenu/Footer";
import { PageHero } from "@/components/gmenu/PageHero";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Gmenu" },
      {
        name: "description",
        content:
          "Habla con nuestro equipo comercial. Resolvemos dudas, agendamos demo o te ayudamos a empezar.",
      },
      { property: "og:title", content: "Contacto — Gmenu" },
      {
        property: "og:description",
        content: "Estamos para ayudarte a operar mejor.",
      },
    ],
  }),
  component: ContactoPage,
});

const inputCx =
  "w-full rounded-xl border border-hairline bg-white px-4 py-3 text-[15px] text-navy placeholder:text-navy/35 transition focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/15";

function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="bg-white text-navy">
      <Header />
      <PageHero
        eyebrow="Contacto"
        title="Hablemos."
        highlight="Estamos para ayudarte."
        description="Cuéntanos sobre tu operación y te respondemos en menos de 24 horas hábiles."
      />

      <section className="bg-white pb-32 pt-4 lg:pb-44">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Contact cards */}
            <aside className="lg:col-span-5 space-y-6">
              <ContactCard
                title="Ventas"
                desc="Para conocer planes, módulos y agendar demo."
                value="hola@gmenu.app"
                href="mailto:hola@gmenu.app"
              />
              <ContactCard
                title="Soporte"
                desc="Si ya eres cliente y necesitas ayuda operativa."
                value="soporte@gmenu.app"
                href="mailto:soporte@gmenu.app"
              />
              <ContactCard
                title="Teléfono"
                desc="Lunes a viernes, 9:00 — 19:00."
                value="+52 55 0000 0000"
                href="tel:+5255"
              />

              <div className="rounded-2xl border border-hairline bg-secondary/60 p-6">
                <p className="font-display text-lg font-semibold tracking-[-0.02em] text-navy">
                  ¿Quieres empezar ya?
                </p>
                <p className="mt-2 text-[14px] text-navy/60">
                  Activa tu prueba gratis de 1 mes sin tarjeta.
                </p>
                <Link
                  to="/registro"
                  className="ring-focus mt-5 inline-flex items-center justify-center rounded-full bg-orange px-5 py-3 text-[14px] font-medium text-white shadow-soft transition hover:brightness-110"
                >
                  Empieza gratis
                </Link>
              </div>
            </aside>

            {/* Contact form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="lg:col-span-7 grid gap-4 sm:grid-cols-2"
            >
              <Field label="Nombre" id="c-nombre">
                <input id="c-nombre" required className={inputCx} placeholder="Tu nombre" />
              </Field>
              <Field label="Negocio" id="c-negocio">
                <input id="c-negocio" required className={inputCx} placeholder="Ej. Café Aurora" />
              </Field>
              <Field label="Correo" id="c-email">
                <input id="c-email" type="email" required className={inputCx} placeholder="tu@correo.com" />
              </Field>
              <Field label="Teléfono" id="c-tel">
                <input id="c-tel" type="tel" className={inputCx} placeholder="+52 ..." />
              </Field>
              <div className="sm:col-span-2">
                <Field label="¿Cómo podemos ayudarte?" id="c-msg">
                  <textarea id="c-msg" rows={5} className={inputCx} placeholder="Cuéntanos qué necesitas…" />
                </Field>
              </div>

              <div className="sm:col-span-2 mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[13px] text-navy/50">
                  Te respondemos en menos de 24 h hábiles.
                </p>
                <button
                  type="submit"
                  disabled={sent}
                  className="ring-focus inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[15px] font-medium text-white shadow-soft transition hover:bg-navy/90 disabled:opacity-60"
                >
                  {sent ? "Mensaje enviado ✓" : "Enviar mensaje"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactCard({ title, desc, value, href }: { title: string; desc: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="ring-focus group block rounded-2xl border border-hairline bg-white p-6 transition hover:border-navy/30"
    >
      <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-teal">{title}</p>
      <p className="font-display mt-3 text-xl font-semibold tracking-[-0.02em] text-navy">{value}</p>
      <p className="mt-2 text-[14px] leading-relaxed text-navy/60">{desc}</p>
      <p className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-navy/70 transition group-hover:text-orange">
        Contactar <span aria-hidden>→</span>
      </p>
    </a>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-[13px] font-medium text-navy/70">{label}</span>
      {children}
    </label>
  );
}

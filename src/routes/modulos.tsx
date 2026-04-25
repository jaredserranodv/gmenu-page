import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/gmenu/Header";
import { Footer } from "@/components/gmenu/Footer";
import { PageHero } from "@/components/gmenu/PageHero";
import { PrimaryCta, SecondaryCta } from "@/components/gmenu/CtaButtons";
import { FinalCTA } from "@/components/gmenu/FinalCTA";

export const Route = createFileRoute("/modulos")({
  head: () => ({
    meta: [
      { title: "Módulos — Gmenu" },
      {
        name: "description",
        content:
          "Pagos, delivery, facturación, multi-sucursal, lealtad, IA y más. Activa solo lo que tu operación necesita.",
      },
      { property: "og:title", content: "Módulos — Gmenu" },
      {
        property: "og:description",
        content: "Capacidades modulares para crecer al ritmo de tu restaurante.",
      },
    ],
  }),
  component: ModulosPage,
});

const modules = [
  {
    name: "Pagos",
    desc: "Cobro integrado, conciliación clara y soporte para múltiples métodos.",
    value: "Reduce errores y acelera el cierre de caja.",
    type: "Complemento",
  },
  {
    name: "Delivery",
    desc: "Recibe órdenes de plataformas externas en un solo flujo de cocina.",
    value: "Menos errores, menos pantallas, más servicio.",
    type: "Complemento",
  },
  {
    name: "Facturación",
    desc: "Emisión, timbrado y administración de comprobantes desde la operación.",
    value: "Cumplimiento sin frenar el servicio.",
    type: "Complemento",
  },
  {
    name: "Multi-sucursal",
    desc: "Vista consolidada de toda tu red, control granular por unidad.",
    value: "Operación uniforme, decisiones globales.",
    type: "Paquete",
  },
  {
    name: "Lealtad / CRM",
    desc: "Convierte visitas en clientes recurrentes con programas y segmentos.",
    value: "Sube frecuencia y ticket promedio.",
    type: "Complemento",
  },
  {
    name: "Integraciones",
    desc: "Conecta con contabilidad, ERPs, marketing y herramientas externas vía API.",
    value: "Tu stack actual, sin fricción.",
    type: "Complemento",
  },
  {
    name: "IA avanzada",
    desc: "Modelos predictivos, recomendaciones y alertas operativas inteligentes.",
    value: "Decisiones respaldadas, no intuidas.",
    type: "Paquete",
  },
  {
    name: "Analítica expandida",
    desc: "Cohortes, comparativos, paneles personalizados y exportación avanzada.",
    value: "Profundidad para equipos de control.",
    type: "Paquete",
  },
];

function ModulosPage() {
  return (
    <main className="bg-white text-navy">
      <Header />
      <PageHero
        eyebrow="Módulos"
        title="Crece por capas."
        highlight="Sin reescribir tu operación."
        description="Gmenu se adapta a cada etapa de tu negocio. Activa los módulos que necesitas hoy y suma nuevos a medida que tu restaurante evoluciona."
      >
        <PrimaryCta>Habla con un asesor</PrimaryCta>
        <SecondaryCta to="/precios">Ver planes</SecondaryCta>
      </PageHero>

      {/* Catalog */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid gap-px overflow-hidden rounded-[24px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-2">
            {modules.map((m, i) => (
              <motion.article
                key={m.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.05 }}
                className="bg-white p-8 lg:p-10"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy">
                    {m.name}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                      m.type === "Paquete" ? "bg-navy text-white" : "bg-teal/10 text-teal"
                    }`}
                  >
                    {m.type}
                  </span>
                </div>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-navy/65">{m.desc}</p>
                <p className="mt-5 border-t border-hairline pt-5 text-[13px] text-navy/55">
                  <span className="font-medium uppercase tracking-[0.12em] text-navy/40">Valor</span>{" "}
                  · {m.value}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Packages explainer */}
      <section className="bg-secondary py-32 lg:py-40">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[13px] font-medium text-teal">Cómo se contrata</p>
              <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-navy text-balance sm:text-5xl">
                Un plan base. Módulos a medida.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-navy/60">
                Empieza con el plan que mejor te encaja y suma módulos sueltos o paquetes
                completos según el momento de tu negocio.
              </p>
            </div>
            <ul className="lg:col-span-7 space-y-8">
              {[
                { t: "Plan base", d: "Básico, Pro o Inteligente. Define tu núcleo operativo." },
                { t: "Complementos", d: "Activa módulos individuales según tu necesidad." },
                { t: "Paquetes", d: "Conjuntos pensados para multi-sucursal, IA o analítica." },
              ].map((s, i) => (
                <li key={s.t} className="grid grid-cols-12 items-start gap-6 border-t border-hairline pt-6">
                  <span className="col-span-2 font-display text-3xl font-semibold tracking-[-0.02em] text-navy/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy">{s.t}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-navy/60">{s.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}

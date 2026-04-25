import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/gmenu/Header";
import { Footer } from "@/components/gmenu/Footer";
import { PageHero } from "@/components/gmenu/PageHero";
import { FAQ } from "@/components/gmenu/FAQ";
import { FinalCTA } from "@/components/gmenu/FinalCTA";

export const Route = createFileRoute("/precios")({
  head: () => ({
    meta: [
      { title: "Precios — Gmenu" },
      {
        name: "description",
        content:
          "Tres planes claros: Básico, Pro e Inteligente. 1 mes gratis sin tarjeta. Escala cuando quieras.",
      },
      { property: "og:title", content: "Precios — Gmenu" },
      {
        property: "og:description",
        content: "Planes pensados para crecer contigo. Empieza gratis 1 mes.",
      },
    ],
  }),
  component: PreciosPage,
});

const plans = [
  {
    name: "Básico",
    tagline: "Lo esencial para empezar a vender.",
    features: ["Punto de venta", "Ventas rápidas", "Ventas en espera", "Corte de caja", "Operación básica"],
  },
  {
    name: "Pro",
    tagline: "Para operar con orden y control.",
    features: ["Todo en Básico", "Inventario", "Usuarios y roles", "Reportes operativos", "Turnos y control de caja"],
  },
  {
    name: "Inteligente",
    featured: true,
    tagline: "Decisiones respaldadas por datos.",
    features: ["Todo en Pro", "Análisis de ventas", "Productos más rentables", "Alertas e indicadores clave", "Insights para mejores decisiones"],
  },
];

const compareRows = [
  { f: "Punto de venta", v: [true, true, true] },
  { f: "Ventas en espera", v: [true, true, true] },
  { f: "Corte de caja", v: [true, true, true] },
  { f: "Inventario", v: [false, true, true] },
  { f: "Usuarios y roles", v: [false, true, true] },
  { f: "Reportes operativos", v: [false, true, true] },
  { f: "Turnos y control de caja", v: [false, true, true] },
  { f: "Análisis de ventas", v: [false, false, true] },
  { f: "Productos más rentables", v: [false, false, true] },
  { f: "Alertas e indicadores", v: [false, false, true] },
  { f: "Insights accionables", v: [false, false, true] },
];

function PreciosPage() {
  return (
    <main className="bg-white text-navy">
      <Header />
      <PageHero
        eyebrow="Planes"
        title="Elige cómo empezar."
        highlight="Crece a tu ritmo."
        description="Tres planes pensados para acompañarte desde tu primer corte de caja hasta decisiones respaldadas por datos. 1 mes gratis sin tarjeta."
      />

      {/* Plans grid */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`relative flex flex-col rounded-3xl p-8 lg:p-10 ${
                  p.featured ? "bg-navy text-white shadow-product" : "border border-hairline bg-white text-navy"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-orange px-3 py-1 text-[11px] font-medium tracking-wide text-white">
                    Recomendado
                  </span>
                )}
                <header>
                  <h3 className={`font-display text-2xl font-semibold tracking-[-0.02em] ${p.featured ? "text-white" : "text-navy"}`}>
                    {p.name}
                  </h3>
                  <p className={`mt-2 text-[14px] ${p.featured ? "text-white/65" : "text-navy/55"}`}>
                    {p.tagline}
                  </p>
                </header>

                <div className={`mt-8 border-t pt-6 ${p.featured ? "border-white/15" : "border-hairline"}`}>
                  <p className="text-[12px] font-medium tracking-[0.14em] text-teal">1 MES GRATIS</p>
                  <p className={`font-display mt-2 text-3xl font-semibold tracking-[-0.02em] ${p.featured ? "text-white" : "text-navy"}`}>
                    Prueba sin costo
                  </p>
                  <p className={`mt-2 text-[13px] ${p.featured ? "text-white/55" : "text-navy/50"}`}>
                    Escala cuando lo necesites.
                  </p>
                </div>

                <ul className={`mt-6 flex-1 space-y-3 text-[14px] ${p.featured ? "text-white/85" : "text-navy/75"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 10.5l4 4 8-9" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="/registro"
                  className={`ring-focus mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-[14px] font-medium transition ${
                    p.featured ? "bg-orange text-white hover:brightness-110" : "bg-navy text-white hover:bg-navy/90"
                  }`}
                >
                  Empezar con {p.name}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare table */}
      <section className="bg-secondary py-32 lg:py-40">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-medium text-teal">Comparativa</p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-navy text-balance sm:text-5xl">
              Todo lo que incluye cada plan.
            </h2>
          </div>

          <div className="mt-14 overflow-hidden rounded-[24px] border border-hairline bg-white">
            <div className="grid grid-cols-12 border-b border-hairline bg-white px-6 py-5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy/45">
              <div className="col-span-6">Función</div>
              <div className="col-span-2 text-center">Básico</div>
              <div className="col-span-2 text-center">Pro</div>
              <div className="col-span-2 text-center text-teal">Inteligente</div>
            </div>
            <ul>
              {compareRows.map((r) => (
                <li key={r.f} className="grid grid-cols-12 items-center border-b border-hairline px-6 py-4 last:border-0 text-[14px] text-navy/80">
                  <div className="col-span-6">{r.f}</div>
                  {r.v.map((on, i) => (
                    <div key={i} className="col-span-2 flex justify-center">
                      {on ? (
                        <svg viewBox="0 0 20 20" className="h-4 w-4 text-teal" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 10.5l4 4 8-9" />
                        </svg>
                      ) : (
                        <span className="h-px w-4 bg-navy/15" />
                      )}
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

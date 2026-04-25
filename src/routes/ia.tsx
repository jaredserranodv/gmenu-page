import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/gmenu/Header";
import { Footer } from "@/components/gmenu/Footer";
import { PageHero } from "@/components/gmenu/PageHero";
import { PrimaryCta, SecondaryCta } from "@/components/gmenu/CtaButtons";
import { FinalCTA } from "@/components/gmenu/FinalCTA";

export const Route = createFileRoute("/ia")({
  head: () => ({
    meta: [
      { title: "Gmenu IA — Inteligencia para tu restaurante" },
      {
        name: "description",
        content:
          "Detecta productos rentables, horas pico, alertas y oportunidades. La IA de Gmenu convierte datos en decisiones.",
      },
      { property: "og:title", content: "Gmenu IA — Decisiones respaldadas por datos" },
      {
        property: "og:description",
        content: "Una capa inteligente que observa tu operación y entrega señales accionables.",
      },
    ],
  }),
  component: IaPage,
});

const detect = [
  { t: "Productos más rentables", d: "Margen real por plato, no solo volumen." },
  { t: "Horas pico", d: "Cuándo rinden de verdad tu cocina y tu equipo." },
  { t: "Alertas operativas", d: "Mermas, anomalías y caídas de venta a tiempo." },
  { t: "Oportunidades", d: "Combinaciones, upselling y horarios subutilizados." },
  { t: "Análisis de ventas", d: "Tendencias por categoría, día y canal." },
  { t: "Recomendaciones", d: "Acciones concretas, no tableros para interpretar." },
];

const insights = [
  {
    title: "Tus jueves rinden 18% más que tu promedio.",
    body: "Patrón sostenido en 6 semanas. Considera reforzar inventario y personal en esa franja.",
    tag: "Patrón detectado",
  },
  {
    title: "El plato 'Pasta Alfredo' aporta 24% de margen.",
    body: "Tu top en margen real, aunque no es tu top en ventas. Promociónalo en horas valle.",
    tag: "Oportunidad",
  },
  {
    title: "Merma cocina −12% vs mes anterior.",
    body: "El nuevo flujo de prep está funcionando. Mantén el monitoreo semanal.",
    tag: "Mejora confirmada",
  },
];

function IaPage() {
  return (
    <main className="bg-white text-navy">
      <Header />
      <PageHero
        eyebrow="Gmenu IA"
        title="Inteligencia útil"
        highlight="para decisiones reales."
        description="No es un buzzword. Gmenu IA es una capa que observa, ordena y traduce tu operación en señales claras — para que cada decisión esté respaldada, no intuida."
      >
        <PrimaryCta>Solicita una demo</PrimaryCta>
        <SecondaryCta to="/precios">Ver plan Inteligente</SecondaryCta>
      </PageHero>

      {/* Qué detecta */}
      <section className="bg-white py-32 lg:py-44">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-medium text-teal">Qué puede detectar</p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-navy text-balance sm:text-5xl">
              Las señales que hoy se te escapan.
            </h2>
          </div>
          <div className="mt-20 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {detect.map((it, i) => (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
                className="border-t border-hairline pt-6"
              >
                <p className="text-[12px] font-medium tracking-[0.14em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-3 text-xl font-semibold tracking-[-0.02em] text-navy">
                  {it.t}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy/60">{it.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights examples */}
      <section className="bg-secondary py-32 lg:py-44">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-medium text-teal">Ejemplos reales</p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-navy text-balance sm:text-5xl">
              Insights que llegan listos para actuar.
            </h2>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {insights.map((ins, i) => (
              <motion.article
                key={ins.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="rounded-[24px] border border-hairline bg-white p-8 shadow-soft"
              >
                <span className="rounded-full bg-teal/10 px-3 py-1 text-[12px] font-medium text-teal">
                  {ins.tag}
                </span>
                <p className="font-display mt-5 text-2xl font-semibold leading-tight tracking-[-0.02em] text-navy">
                  {ins.title}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-navy/60">{ins.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo ayuda */}
      <section className="bg-white py-32 lg:py-44">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[13px] font-medium text-teal">Cómo ayuda</p>
              <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-navy text-balance sm:text-5xl">
                De los datos a la decisión.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-navy/60">
                Gmenu IA no te da más reportes. Te da menos preguntas. Cada señal viene
                con contexto, confianza y una acción sugerida.
              </p>
            </div>
            <ol className="lg:col-span-7 space-y-10">
              {[
                { n: "01", t: "Observa", d: "Ventas, cocina, inventario y caja, en tiempo real." },
                { n: "02", t: "Ordena", d: "Patrones, anomalías y comparativos relevantes." },
                { n: "03", t: "Traduce", d: "Una frase clara con la acción sugerida." },
              ].map((s) => (
                <li key={s.n} className="grid grid-cols-12 items-start gap-6 border-t border-hairline pt-6">
                  <span className="col-span-2 font-display text-3xl font-semibold tracking-[-0.02em] text-navy/35">
                    {s.n}
                  </span>
                  <div className="col-span-10">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy">{s.t}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-navy/60">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}

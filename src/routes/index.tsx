import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/gmenu/Header";
import { Footer } from "@/components/gmenu/Footer";
import { Hero } from "@/components/gmenu/Hero";
import { Benefits } from "@/components/gmenu/Benefits";
import { Differentiator } from "@/components/gmenu/Differentiator";
import { FinalCTA } from "@/components/gmenu/FinalCTA";
import { RegisterForm } from "@/components/gmenu/RegisterForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gmenu — Plataforma para restaurantes y cafeterías" },
      {
        name: "description",
        content:
          "Más que un punto de venta. Gmenu es operación, control e inteligencia para restaurantes y cafeterías. 1 mes gratis.",
      },
      { property: "og:title", content: "Gmenu — Entiende y mejora tu restaurante con datos claros" },
      {
        property: "og:description",
        content:
          "Punto de venta, operación, módulos e IA aplicada a restaurantes. Empieza gratis 1 mes.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const modulesPreview = [
  { t: "Pagos", d: "Cobro integrado y conciliación clara." },
  { t: "Delivery", d: "Órdenes de plataformas en un solo flujo." },
  { t: "Multi-sucursal", d: "Una sola vista para toda tu operación." },
  { t: "Lealtad / CRM", d: "Convierte visitas en clientes recurrentes." },
];

const aiPreview = [
  { k: "Top", v: "Pasta Alfredo", s: "+24% margen real" },
  { k: "Pico", v: "Jueves 21:30", s: "+18% ticket promedio" },
  { k: "Alerta", v: "Merma cocina", s: "−12% vs mes anterior" },
];

const plansPreview = [
  { name: "Básico", desc: "Lo esencial para empezar a vender." },
  { name: "Pro", desc: "Para operar con orden y control.", featured: false },
  { name: "Inteligente", desc: "Decisiones respaldadas por datos.", featured: true },
];

function Index() {
  return (
    <main className="bg-white text-navy">
      <Header />
      <Hero />
      <Benefits />
      <Differentiator />

      {/* Modules preview */}
      <section id="modulos" className="bg-white py-32 lg:py-44">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-[13px] font-medium text-teal">Módulos</p>
              <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-navy text-balance sm:text-5xl">
                Empieza simple. Crece por módulos.
              </h2>
              <p className="mt-5 max-w-xl text-[16px] text-navy/60">
                Activa solo lo que necesitas. Suma capacidades cuando tu operación lo pida.
              </p>
            </div>
            <a
              href="/modulos"
              className="ring-focus inline-flex items-center gap-1 text-[14px] font-medium text-navy transition hover:text-orange"
            >
              Ver todos los módulos <span aria-hidden>→</span>
            </a>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {modulesPreview.map((m, i) => (
              <motion.div
                key={m.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="border-t border-hairline pt-6"
              >
                <p className="text-[12px] font-medium tracking-[0.14em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-3 text-xl font-semibold tracking-[-0.02em] text-navy">
                  {m.t}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy/60">{m.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI preview */}
      <section id="ia" className="bg-secondary py-32 lg:py-44">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[13px] font-medium text-teal">Gmenu IA</p>
              <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-navy text-balance sm:text-5xl">
                Inteligencia que <span className="text-navy/45">trabaja por ti.</span>
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-navy/60">
                Gmenu IA observa tu operación, detecta patrones y te entrega señales claras
                para decidir mejor — sin tableros complicados.
              </p>
              <a
                href="/ia"
                className="ring-focus mt-8 inline-flex items-center gap-1 text-[14px] font-medium text-navy transition hover:text-orange"
              >
                Conoce Gmenu IA <span aria-hidden>→</span>
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="overflow-hidden rounded-[28px] border border-hairline bg-white shadow-product">
                <div className="flex items-center justify-between border-b border-hairline px-6 py-3.5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy/45">
                    Señales detectadas · esta semana
                  </p>
                  <span className="flex items-center gap-1.5 text-[11px] text-teal">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" /> En vivo
                  </span>
                </div>
                <ul className="divide-y divide-hairline">
                  {aiPreview.map((a) => (
                    <li key={a.v} className="flex items-baseline justify-between gap-6 px-6 py-5">
                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-navy/45">
                          {a.k}
                        </p>
                        <p className="font-display mt-1.5 text-xl font-semibold tracking-[-0.02em] text-navy">
                          {a.v}
                        </p>
                      </div>
                      <p className="text-right text-[13px] text-navy/55">{a.s}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans summary */}
      <section id="precios" className="bg-white py-32 lg:py-44">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-medium text-teal">Planes</p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-navy text-balance sm:text-5xl">
              Tres formas de empezar.
              <span className="block text-navy/45">1 mes gratis en cualquiera.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {plansPreview.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`relative flex flex-col rounded-3xl p-8 lg:p-10 ${
                  p.featured ? "bg-navy text-white shadow-product" : "border border-hairline bg-white"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-orange px-3 py-1 text-[11px] font-medium tracking-wide text-white">
                    Recomendado
                  </span>
                )}
                <h3 className={`font-display text-2xl font-semibold tracking-[-0.02em] ${p.featured ? "text-white" : "text-navy"}`}>
                  {p.name}
                </h3>
                <p className={`mt-2 text-[14px] ${p.featured ? "text-white/65" : "text-navy/55"}`}>
                  {p.desc}
                </p>
                <a
                  href="/precios"
                  className={`ring-focus mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-[14px] font-medium transition ${
                    p.featured ? "bg-orange text-white hover:brightness-110" : "bg-navy text-white hover:bg-navy/90"
                  }`}
                >
                  Ver detalles
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RegisterForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/gmenu/Header";
import { Footer } from "@/components/gmenu/Footer";
import { PageHero } from "@/components/gmenu/PageHero";
import { PrimaryCta, SecondaryCta } from "@/components/gmenu/CtaButtons";
import { FinalCTA } from "@/components/gmenu/FinalCTA";

export const Route = createFileRoute("/producto")({
  head: () => ({
    meta: [
      { title: "Producto — Gmenu" },
      {
        name: "description",
        content:
          "POS, caja, inventario, reportes, control operativo e integraciones. Conoce Gmenu en profundidad.",
      },
      { property: "og:title", content: "Producto — Gmenu" },
      {
        property: "og:description",
        content: "Una plataforma completa para operar tu restaurante con claridad.",
      },
    ],
  }),
  component: ProductoPage,
});

const blocks = [
  {
    eyebrow: "POS y ventas",
    title: "Cobra fluido. Sin fricción.",
    desc: "Atajos inteligentes, modos de servicio y ventas en espera para que el equipo no se detenga en hora pico.",
    points: ["Cobro rápido", "Modos: mesa, barra, llevar", "Ventas en espera", "Propinas y divisiones"],
  },
  {
    eyebrow: "Caja y turnos",
    title: "Cierres claros, sin sorpresas.",
    desc: "Apertura, arqueos y cierres con trazabilidad total por usuario, turno y caja.",
    points: ["Apertura/cierre por turno", "Arqueo asistido", "Diferencias detectadas", "Historial por cajero"],
  },
  {
    eyebrow: "Inventario",
    title: "Sabe qué entra, sale y falta.",
    desc: "Existencias, mermas y reposición sin hojas de cálculo. Pensado para cocina real.",
    points: ["Recetas e insumos", "Mermas", "Reposición sugerida", "Multi-almacén"],
  },
  {
    eyebrow: "Reportes",
    title: "Datos leíbles en segundos.",
    desc: "Lo importante primero: ventas, productos, horarios y desempeño operativo.",
    points: ["Ventas por hora/día", "Top productos", "Desempeño por turno", "Exportación"],
  },
  {
    eyebrow: "Control operativo",
    title: "Una sola vista de todo.",
    desc: "Usuarios, roles, permisos y bitácora. Mantén el control sin perder agilidad.",
    points: ["Usuarios y roles", "Permisos finos", "Bitácora de acciones", "Multi-sucursal"],
  },
  {
    eyebrow: "Integraciones",
    title: "Conecta tu stack.",
    desc: "Pagos, delivery, facturación y herramientas externas listas para sumarse.",
    points: ["Pagos", "Delivery", "Facturación", "API"],
  },
];

const verticals = [
  { t: "Restaurantes", d: "Servicio en mesa, barra, llevar y delivery." },
  { t: "Cafeterías", d: "Velocidad, recetas y ticket promedio claro." },
  { t: "Dark kitchens", d: "Multi-marca, multi-canal, una sola operación." },
  { t: "Multi-sucursal", d: "Vista consolidada, control por unidad." },
];

function ProductoPage() {
  return (
    <main className="bg-white text-navy">
      <Header />
      <PageHero
        eyebrow="Producto"
        title="Toda tu operación,"
        highlight="en una sola plataforma."
        description="Gmenu reúne punto de venta, control de caja, inventario, reportes e integraciones en un sistema diseñado para el ritmo real de un restaurante."
      >
        <PrimaryCta>Empieza gratis 1 mes</PrimaryCta>
        <SecondaryCta to="/contacto">Habla con ventas</SecondaryCta>
      </PageHero>

      {/* Blocks */}
      <section className="bg-white py-24 lg:py-36">
        <div className="mx-auto max-w-[1120px] space-y-28 px-6 lg:space-y-40">
          {blocks.map((b, i) => (
            <motion.div
              key={b.eyebrow}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid items-center gap-14 lg:grid-cols-12 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-6">
                <p className="text-[13px] font-medium text-teal">{b.eyebrow}</p>
                <h2 className="font-display mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-navy text-balance sm:text-4xl lg:text-5xl">
                  {b.title}
                </h2>
                <p className="mt-5 max-w-md text-[16px] leading-relaxed text-navy/60">{b.desc}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[14px] text-navy/75">
                      <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 10.5l4 4 8-9" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-[28px] border border-hairline bg-secondary/60 p-8 shadow-soft">
                  <div className="rounded-2xl border border-hairline bg-white p-6">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy/45">{b.eyebrow}</p>
                      <span className="rounded-full bg-teal/10 px-2.5 py-1 text-[11px] font-medium text-teal">En vivo</span>
                    </div>
                    <p className="font-display mt-4 text-2xl font-semibold tracking-[-0.02em] text-navy">{b.title}</p>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {b.points.slice(0, 4).map((p) => (
                        <div key={p} className="rounded-xl border border-hairline bg-white p-3">
                          <p className="text-[11px] uppercase tracking-[0.1em] text-navy/40">Módulo</p>
                          <p className="font-display mt-1 text-sm font-semibold text-navy">{p}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Verticals */}
      <section className="bg-secondary py-32 lg:py-44">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-medium text-teal">Para tu tipo de negocio</p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-navy text-balance sm:text-5xl">
              Una herramienta. Muchos formatos.
            </h2>
          </div>
          <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {verticals.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="border-t border-hairline pt-6"
              >
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-navy">{v.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy/60">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}

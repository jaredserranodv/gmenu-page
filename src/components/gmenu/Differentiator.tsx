import { motion } from "framer-motion";

const items = [
  { t: "Productos más rentables", d: "Sabe qué platos sostienen tu margen real, no solo los que más se venden." },
  { t: "Horarios de mejor desempeño", d: "Identifica las ventanas donde tu equipo y tu cocina rinden mejor." },
  { t: "Oportunidades de mejora", d: "Detecta cuellos, mermas y combinaciones que hoy estás dejando pasar." },
  { t: "Señales clave del negocio", d: "Alertas inteligentes cuando algo importante cambia. Sin ruido." },
];

export function Differentiator() {
  return (
    <section className="bg-secondary py-32 lg:py-44">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[13px] font-medium text-teal">La diferencia Gmenu</p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-navy text-balance sm:text-5xl lg:text-7xl"
          >
            No solo registras ventas.
            <span className="block text-navy/45">Entiendes tu negocio.</span>
          </motion.h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy/60">
            Gmenu observa, ordena y traduce los datos de tu operación en señales concretas
            para que cada decisión esté respaldada — no intuida.
          </p>
        </div>

        {/* Editorial UI block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 overflow-hidden rounded-[28px] border border-hairline bg-white shadow-product"
        >
          <div className="grid grid-cols-12 gap-px bg-hairline">
            <div className="col-span-12 bg-white p-8 md:col-span-7 lg:p-12">
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-navy/45">
                Resumen semanal
              </p>
              <p className="font-display mt-3 text-3xl font-semibold tracking-[-0.02em] text-navy lg:text-4xl">
                Tus jueves rinden 18% más que tu promedio.
              </p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-navy/60">
                Detectamos un patrón sostenido en las últimas 6 semanas. Considera reforzar
                inventario y personal en esa franja.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-teal/10 px-3 py-1 text-[12px] font-medium text-teal">
                  Insight detectado
                </span>
                <span className="rounded-full border border-hairline px-3 py-1 text-[12px] text-navy/55">
                  Confianza alta
                </span>
              </div>
            </div>

            <div className="col-span-12 bg-white p-8 md:col-span-5 lg:p-12">
              <ul className="space-y-5">
                {[
                  { k: "+18%", v: "ticket promedio · jueves" },
                  { k: "Top 5", v: "productos más rentables" },
                  { k: "21:30", v: "hora pico real de cocina" },
                  { k: "−12%", v: "merma vs mes anterior" },
                ].map((s) => (
                  <li key={s.v} className="flex items-baseline justify-between gap-6 border-b border-hairline pb-4 last:border-0">
                    <span className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy">
                      {s.k}
                    </span>
                    <span className="text-right text-[13px] text-navy/55">{s.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* List */}
        <div className="mt-20 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-navy">
                {it.t}
              </h3>
              <p className="mt-2 max-w-md text-[15px] leading-relaxed text-navy/60">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

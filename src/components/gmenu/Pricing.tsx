import { motion } from "framer-motion";

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

export function Pricing() {
  return (
    <section id="precios" className="bg-secondary py-32 lg:py-44">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-medium text-teal">Planes</p>
          <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-navy text-balance sm:text-5xl lg:text-6xl">
            Elige el plan ideal.
            <span className="block text-navy/45">Empieza gratis 1 mes.</span>
          </h2>
          <p className="mt-6 text-[16px] text-navy/60">
            Sin tarjeta de crédito. Cambia de plan cuando lo necesites.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-3xl p-8 lg:p-10 ${
                p.featured
                  ? "bg-navy text-white shadow-product"
                  : "border border-hairline bg-white text-navy"
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
                <p className={`text-[12px] font-medium tracking-[0.14em] ${p.featured ? "text-teal" : "text-teal"}`}>
                  1 MES GRATIS
                </p>
                <p className={`font-display mt-2 text-3xl font-semibold tracking-[-0.02em] ${p.featured ? "text-white" : "text-navy"}`}>
                  Prueba sin costo
                </p>
              </div>

              <ul className={`mt-6 flex-1 space-y-3 text-[14px] ${p.featured ? "text-white/85" : "text-navy/75"}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      aria-hidden
                      viewBox="0 0 20 20"
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${p.featured ? "text-teal" : "text-teal"}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 10.5l4 4 8-9" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#registro"
                className={`ring-focus mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-[14px] font-medium transition ${
                  p.featured
                    ? "bg-orange text-white hover:brightness-110"
                    : "bg-navy text-white hover:bg-navy/90"
                }`}
              >
                Empezar con {p.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

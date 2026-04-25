import { motion } from "framer-motion";

const features = [
  { t: "Punto de venta", d: "Cobro fluido, atajos inteligentes, modos de servicio." },
  { t: "Ventas en espera", d: "Mantén órdenes abiertas sin perder el control de la mesa." },
  { t: "Caja y turnos", d: "Cierres claros, arqueos sencillos, trazabilidad total." },
  { t: "Inventario básico", d: "Existencias, mermas y reposición sin complicarte." },
  { t: "Reportes claros", d: "Lo que importa, leíble en segundos." },
  { t: "Insights del negocio", d: "Patrones, tendencias y alertas accionables." },
];

export function Features() {
  return (
    <section className="bg-white py-32 lg:py-44">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-medium text-teal">Funcionalidades</p>
          <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-navy text-balance sm:text-5xl lg:text-6xl">
            Una herramienta para cada momento del servicio.
          </h2>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.t}
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
                {f.t}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-navy/60">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
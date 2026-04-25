import { motion } from "framer-motion";

const benefits = [
  { title: "Punto de venta rápido", desc: "Cobra en segundos, sin curva de aprendizaje. Pensado para servicio en piso." },
  { title: "Control de caja y turnos", desc: "Cierra el día con certeza. Cada peso, cada turno, cada movimiento, claro." },
  { title: "Inventario y operación", desc: "Sabe lo que entra, lo que sale y lo que falta. Sin hojas de cálculo." },
  { title: "Datos para mejores decisiones", desc: "Insights accionables que convierten ventas en estrategia." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-white py-32 lg:py-44">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-medium text-teal">Lo esencial, refinado</p>
          <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-navy text-balance sm:text-5xl lg:text-6xl">
            Todo lo que tu restaurante necesita.
            <span className="block text-navy/45">Nada más.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-x-12 gap-y-16 md:grid-cols-2">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="border-t border-hairline pt-8"
            >
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy">
                {b.title}
              </h3>
              <p className="mt-3 max-w-md text-[16px] leading-relaxed text-navy/60">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export function FinalCTA() {
  return (
    <section className="bg-white py-32 lg:py-44">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="overflow-hidden rounded-[32px] bg-navy px-8 py-20 text-center text-white shadow-product lg:px-16 lg:py-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-display mx-auto max-w-[18ch] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-7xl"
          >
            Empieza hoy y descubre lo que tu negocio te
            <span className="block text-white/55">quiere decir.</span>
          </motion.h2>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/registro"
              className="ring-focus inline-flex items-center justify-center rounded-full bg-orange px-6 py-3.5 text-[15px] font-medium text-white transition hover:brightness-110"
            >
              Empieza gratis
            </Link>
            <Link
              to="/contacto"
              className="ring-focus inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-[15px] font-medium text-white transition hover:bg-white/10"
            >
              Solicita información <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
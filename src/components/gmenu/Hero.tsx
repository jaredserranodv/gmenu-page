import { motion } from "framer-motion";
import { ScrollFadeText } from "@/components/ui/ScrollFadeText";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-hero-soft pt-32 pb-20 lg:pt-44 lg:pb-32"
    >
      <div className="mx-auto max-w-[1120px] px-6">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[13px] font-medium text-teal"
        >
          Plataforma para restaurantes y cafeterías
        </motion.p>

        {/* Headline */}
        <ScrollFadeText
          as="h1"
          fadeRange={[0.15, 0.9]}
          offset={["start start", "end start"]}
          parallaxY={-24}
          className="font-display mx-auto mt-6 max-w-[18ch] text-center text-[44px] font-semibold leading-[1.05] tracking-[-0.04em] text-navy text-balance sm:text-[64px] lg:text-[88px]"
        >
          Más que un punto de venta.
          <span className="block text-navy/55">Entiende y mejora tu restaurante.</span>
        </ScrollFadeText>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-8 max-w-[58ch] text-center text-pretty text-lg text-navy/65 lg:text-xl"
        >
          Gmenu te ayuda a vender, controlar tu operación y descubrir información clave para tomar
          mejores decisiones — con datos claros.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#registro"
            className="ring-focus inline-flex items-center justify-center rounded-full bg-orange px-6 py-3.5 text-[15px] font-medium text-white shadow-soft transition hover:brightness-110"
          >
            Empieza tu prueba gratis por 1 mes
          </a>
          <a
            href="#registro"
            className="ring-focus inline-flex items-center gap-1 rounded-full px-5 py-3.5 text-[15px] font-medium text-navy transition hover:text-orange"
          >
            Solicita más información <span aria-hidden>→</span>
          </a>
        </motion.div>

        {/* Signals */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-navy/55"
        >
          {["1 mes gratis", "Sin tarjeta de crédito", "Para restaurantes y cafeterías"].map((s) => (
            <li key={s} className="flex items-center gap-2">
              <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-teal" />
              {s}
            </li>
          ))}
        </motion.ul>

        {/* Hero product visual — single, refined */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 max-w-[980px]"
        >
          <div className="absolute -inset-x-10 -bottom-10 -top-4 -z-10 rounded-[40px] bg-gradient-to-b from-transparent via-navy/[0.03] to-navy/[0.06] blur-2xl" />
          <ProductMockup />
        </motion.div>
      </div>
    </section>
  );
}

/* Single, elegant product UI piece — Apple/Stripe style */
function ProductMockup() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-hairline bg-white shadow-product">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-hairline px-6 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-navy/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-navy/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-navy/10" />
        </div>
        <div className="text-[11px] font-medium tracking-wide text-navy/40">gmenu · panel</div>
        <div className="flex items-center gap-1.5 text-[11px] text-teal">
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          En vivo
        </div>
      </div>

      <div className="grid grid-cols-12 gap-px bg-hairline">
        {/* Left rail */}
        <div className="col-span-12 bg-white px-6 py-6 md:col-span-3">
          <div className="space-y-1.5">
            {["Inicio", "Ventas", "Caja", "Inventario", "Insights"].map((t, i) => (
              <div
                key={t}
                className={`rounded-lg px-3 py-2 text-[13px] ${i === 4 ? "bg-navy text-white" : "text-navy/65 hover:bg-secondary"
                  }`}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="col-span-12 bg-white px-6 py-7 md:col-span-9 md:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-navy/45">
                Ventas de hoy
              </p>
              <p className="font-display mt-2 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
                $24,180<span className="text-navy/35">.50</span>
              </p>
            </div>
            <span className="rounded-full bg-teal/10 px-2.5 py-1 text-[12px] font-medium text-teal">
              +12.4%
            </span>
          </div>

          {/* Chart */}
          <div className="mt-6 rounded-xl border border-hairline bg-secondary/50 p-4">
            <svg viewBox="0 0 600 140" className="h-32 w-full">
              <defs>
                <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.66 0.12 196)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="oklch(0.66 0.12 196)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,110 C60,100 100,60 160,65 C220,70 260,30 320,35 C380,40 420,80 480,72 C540,66 570,40 600,46 L600,140 L0,140 Z"
                fill="url(#hg)"
              />
              <path
                d="M0,110 C60,100 100,60 160,65 C220,70 260,30 320,35 C380,40 420,80 480,72 C540,66 570,40 600,46"
                fill="none"
                stroke="oklch(0.66 0.12 196)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Insight tiles */}
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
            {[
              { k: "Top", v: "Pasta Alfredo", s: "+24% margen" },
              { k: "Pico", v: "21:30", s: "viernes" },
              { k: "Alerta", v: "Merma −12%", s: "vs mes anterior" },
            ].map((c) => (
              <div key={c.v} className="rounded-xl border border-hairline bg-white p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-navy/45">
                  {c.k}
                </p>
                <p className="font-display mt-1.5 text-lg font-semibold text-navy">{c.v}</p>
                <p className="mt-0.5 text-[12px] text-navy/55">{c.s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


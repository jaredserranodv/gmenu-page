import { useState } from "react";

const faqs = [
  { q: "¿Cuánto dura la prueba gratis?", a: "1 mes completo, con acceso a todas las funciones del plan que elijas." },
  { q: "¿Necesito tarjeta de crédito?", a: "No. Empiezas sin compromiso ni datos de pago. Solo activas tu cuenta." },
  { q: "¿Sirve para cafeterías y restaurantes pequeños?", a: "Sí. Gmenu se adapta desde una cafetería de barrio hasta operaciones con varias sucursales." },
  { q: "¿Puedo cambiar de plan después?", a: "Cuando quieras. Subes o bajas de plan sin perder tu información." },
  { q: "¿Qué diferencia a Gmenu de otros puntos de venta?", a: "No solo registra ventas: convierte tu operación en datos claros que te ayudan a decidir mejor cada semana." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-secondary py-32 lg:py-44">
      <div className="mx-auto max-w-[880px] px-6">
        <div className="text-center">
          <p className="text-[13px] font-medium text-teal">Preguntas frecuentes</p>
          <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-navy sm:text-5xl">
            Lo que necesitas saber.
          </h2>
        </div>

        <ul className="mt-14 divide-y divide-hairline border-y border-hairline">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="ring-focus flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold tracking-[-0.02em] text-navy lg:text-xl">
                    {f.q}
                  </span>
                  <span
                    aria-hidden
                    className={`inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-hairline text-navy/70 transition ${
                      isOpen ? "rotate-45 bg-navy text-white" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-400 ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="min-h-0 max-w-2xl text-[15px] leading-relaxed text-navy/65">{f.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

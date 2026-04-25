import { useState } from "react";

const inputCx =
  "w-full rounded-xl border border-hairline bg-white px-4 py-3 text-[15px] text-navy placeholder:text-navy/35 transition focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/15";

export function RegisterForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="registro" className="bg-white py-32 lg:py-44">
      <div className="mx-auto max-w-[880px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-medium text-teal">Registro</p>
          <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-navy text-balance sm:text-5xl">
            Solicita más información y empieza tu prueba gratis.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[16px] text-navy/60">
            Déjanos tus datos y te ayudamos a encontrar el plan ideal para tu restaurante o cafetería.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-14 grid gap-4 sm:grid-cols-2"
        >
          <Field label="Nombre" id="nombre"><input id="nombre" required className={inputCx} placeholder="Tu nombre" /></Field>
          <Field label="Nombre del negocio" id="negocio"><input id="negocio" required className={inputCx} placeholder="Ej. Café Aurora" /></Field>
          <Field label="Correo electrónico" id="email"><input id="email" type="email" required className={inputCx} placeholder="tu@correo.com" /></Field>
          <Field label="Teléfono" id="tel"><input id="tel" type="tel" required className={inputCx} placeholder="+52 ..." /></Field>
          <Field label="Tipo de negocio" id="tipo">
            <select id="tipo" className={inputCx} defaultValue="">
              <option value="" disabled>Selecciona…</option>
              <option>Restaurante</option>
              <option>Cafetería</option>
              <option>Bar</option>
              <option>Comida rápida</option>
              <option>Otro</option>
            </select>
          </Field>
          <Field label="Número de sucursales" id="suc">
            <select id="suc" className={inputCx} defaultValue="1">
              <option>1</option><option>2-5</option><option>6-10</option><option>10+</option>
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Mensaje" id="msg">
              <textarea id="msg" rows={4} className={inputCx} placeholder="Cuéntanos brevemente sobre tu operación…" />
            </Field>
          </div>

          <div className="sm:col-span-2 mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-navy/50">
              Al enviar aceptas que te contactemos para activar tu prueba.
            </p>
            <button
              type="submit"
              disabled={sent}
              className="ring-focus inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-[15px] font-medium text-white shadow-soft transition hover:brightness-110 disabled:opacity-60"
            >
              {sent ? "Recibido. Te contactamos pronto ✓" : "Quiero mi prueba gratis de 1 mes"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-[13px] font-medium text-navy/70">{label}</span>
      {children}
    </label>
  );
}

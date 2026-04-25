import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gmenu/Header";
import { Footer } from "@/components/gmenu/Footer";
import { PageHero } from "@/components/gmenu/PageHero";
import { RegisterForm } from "@/components/gmenu/RegisterForm";

export const Route = createFileRoute("/registro")({
  head: () => ({
    meta: [
      { title: "Registro — Empieza tu prueba gratis | Gmenu" },
      {
        name: "description",
        content:
          "Solicita tu prueba gratis de 1 mes. Te ayudamos a encontrar el plan ideal para tu restaurante o cafetería.",
      },
      { property: "og:title", content: "Registro — Gmenu" },
      {
        property: "og:description",
        content: "Empieza tu prueba gratis de 1 mes. Sin tarjeta.",
      },
    ],
  }),
  component: RegistroPage,
});

const benefits = [
  { t: "1 mes gratis", d: "Acceso completo, sin tarjeta de crédito." },
  { t: "Asesoría guiada", d: "Te ayudamos a configurar tu operación." },
  { t: "Cambio de plan flexible", d: "Sube o baja cuando lo necesites." },
];

function RegistroPage() {
  return (
    <main className="bg-white text-navy">
      <Header />
      <PageHero
        eyebrow="Registro"
        title="Empieza tu prueba"
        highlight="gratis de 1 mes."
        description="Déjanos tus datos y te acompañamos para activar Gmenu en tu restaurante o cafetería."
      />

      <section className="bg-white pb-12">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid gap-10 sm:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.t} className="border-t border-hairline pt-6">
                <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-navy">{b.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-navy/60">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RegisterForm />
      <Footer />
    </main>
  );
}

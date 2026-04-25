import { Logo } from "./Logo";

type FooterLink = { label: string; href: string };

const productLinks: FooterLink[] = [
  { label: "Producto", href: "/producto" },
  { label: "IA", href: "/ia" },
  { label: "Módulos", href: "/modulos" },
  { label: "Precios", href: "/precios" },
];

const companyLinks: FooterLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Registro", href: "/registro" },
  { label: "Contacto", href: "/contacto" },
];

const contactLinks: FooterLink[] = [
  { label: "hola@gmenu.app", href: "mailto:hola@gmenu.app" },
  { label: "+52 55 0000 0000", href: "tel:+5255" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="dark" className="h-6" />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-navy/60">
              Gmenu es la plataforma para restaurantes y cafeterías que convierte tu operación diaria
              en decisiones más inteligentes.
            </p>
          </div>

          <FooterCol title="Producto" links={productLinks} />
          <FooterCol title="Empresa" links={companyLinks} />
          <FooterCol title="Contacto" links={contactLinks} />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-6 text-[12px] text-navy/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Gmenu. Todos los derechos reservados.</p>
          <p>Hecho con precisión para quienes viven el servicio.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="lg:col-span-2">
      <h4 className="text-[12px] font-medium tracking-[0.12em] text-navy/45">{title.toUpperCase()}</h4>
      <ul className="mt-4 space-y-2.5 text-[14px]">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-navy/75 transition hover:text-orange">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


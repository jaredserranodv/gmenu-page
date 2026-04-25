import { useEffect, useState } from "react";

import { Logo } from "./Logo";

const sectionLinks = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#producto", label: "Producto" },
  { href: "/#ia", label: "IA" },
  { href: "/#precios", label: "Precios" },
  { href: "/#modulos", label: "Módulos" },
  { href: "/#registro", label: "Registro" },
] as const;

const routeLinks = [{ href: "/contacto", label: "Contacto" }] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/75 backdrop-blur-xl border-b border-hairline"
          : "bg-white/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6">
        <a href="/#inicio" className="ring-focus" aria-label="Gmenu — inicio">
          <Logo tone="dark" className="h-6" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {sectionLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="ring-focus text-[13px] font-medium text-navy/60 transition hover:text-navy"
            >
              {l.label}
            </a>
          ))}

          {routeLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="ring-focus text-[13px] font-medium text-navy/60 transition hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="/registro"
            className="ring-focus inline-flex items-center rounded-full bg-navy px-4 py-2 text-[13px] font-medium text-white transition hover:bg-navy/90"
          >
            Empieza gratis
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="ring-focus inline-flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-md text-navy lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span
            className={`block h-px w-5 bg-current transition ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-current transition ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-hairline bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 py-4">
            {sectionLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-[15px] text-navy/80 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}

            {routeLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-[15px] text-navy/80 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}

            <a
              href="/registro"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-navy px-5 py-3 text-center text-[14px] font-medium text-white"
            >
              Empieza gratis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


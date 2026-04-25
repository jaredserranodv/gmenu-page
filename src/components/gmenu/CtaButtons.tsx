import { Link } from "@tanstack/react-router";

export function PrimaryCta({ children = "Empieza tu prueba gratis por 1 mes" }: { children?: React.ReactNode }) {
  return (
    <Link
      to="/registro"
      className="ring-focus inline-flex items-center justify-center rounded-full bg-orange px-6 py-3.5 text-[15px] font-medium text-white shadow-soft transition hover:brightness-110"
    >
      {children}
    </Link>
  );
}

export function SecondaryCta({
  to = "/contacto",
  children = "Solicita más información",
}: {
  to?: "/contacto" | "/registro" | "/producto" | "/ia" | "/precios" | "/modulos" | "/";
  children?: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="ring-focus inline-flex items-center gap-1 rounded-full px-5 py-3.5 text-[15px] font-medium text-navy transition hover:text-orange"
    >
      {children} <span aria-hidden>→</span>
    </Link>
  );
}

import logoMark from "@/assets/gmenu-logo.png";

export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const color = tone === "light" ? "text-white" : "text-navy";
  // The mark already contains "Gmenu" wordmark with chef hat replacing the G.
  // We render it as a single image so it lives as part of the typography system.
  return (
    <span className={`inline-flex items-center ${color} ${className}`} aria-label="Gmenu">
      <img
        src={logoMark.src}
        alt="Gmenu"
        className={`h-7 w-auto select-none ${tone === "dark" ? "invert" : ""}`}
        draggable={false}
      />
    </span>
  );
}

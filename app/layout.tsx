import "../src/styles.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gmenu",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

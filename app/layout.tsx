import "../src/styles.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gmenu",
  description: "Gmenu Generated Project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


import type { Metadata } from "next";
import Link from "next/link";
import { routes } from "@/core/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casas Rurales",
  description: "Portal de alquiler vacacional de casas rurales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <header className="header">
          <span className="icon">🛏️</span>
          <Link href={routes.root}>
            <h1>Casas Rurales</h1>
          </Link>
        </header>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}

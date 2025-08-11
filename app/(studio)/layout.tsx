import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "ADMIN",
  description: "Estodios y Alquileres fotográficos en Montevideo, Uruguay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        {children}
      </body>
    </html>
  );
}

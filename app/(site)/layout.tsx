import React from "react";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";

import ThemeProvider from "@/components/common/ThemeContext";
import SessionProvider from "@/components/common/SessionContext";
import HoverProvider from "@/components/common/HoverContext";
import CartProvider from "@/components/common/CartContext";

import CursorFollower from "@/components/ui/CursorFollower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Central Estudios",
  description: "Estodios y Alquileres fotográficos en Montevideo, Uruguay",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased tracking-tight`}>
        <ThemeProvider>
          <SessionProvider>
            <HoverProvider>
              <CartProvider>
                {/* <PageLoader> */}
                {children}
                <CursorFollower />
                {/* </PageLoader> */}
              </CartProvider>
            </HoverProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}



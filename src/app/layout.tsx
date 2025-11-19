import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Centro Cultural Banreservas",
  description: "Plataforma de gestión de eventos y visitantes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        montserrat.variable
      )}>
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

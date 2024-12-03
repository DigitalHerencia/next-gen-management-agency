import type { Metadata } from "next";
import { Bebas_Neue } from 'next/font/google';
import "./globals.css";
import MyThemeProvider from "@/providers/theme-provider";

// Load Bebas Neue font
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

// Metadata
export const metadata: Metadata = {
  title: "NextGen Management Agency",
  description: "Empowering creators through streamlined management solutions.",
};

// RootLayout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} antialiased`}>
        <MyThemeProvider>{children}</MyThemeProvider>
      </body>
    </html>
  );
}

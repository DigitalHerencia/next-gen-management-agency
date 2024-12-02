import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MyThemeProvider from "@/providers/theme-provider";

// Load Bebas Neue font
const bebasNeue = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebas-neue",
  weight: "400", // Bebas Neue typically uses normal weight
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

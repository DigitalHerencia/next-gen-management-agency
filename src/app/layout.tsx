import type { Metadata } from 'next';
import { Bebas_Neue } from 'next/font/google';
import './globals.css';
import MyThemeProvider from '@/providers/theme-provider';

const font = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-bebas-neue',
    display: 'swap', // Ensures text renders with a fallback while the font loads
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
  children: React.ReactNode | null;
}>) {
  return (
    <html lang="en">
      <body className={`${font?.variable || ''} antialiased`}>
        <MyThemeProvider>{children}</MyThemeProvider>
      </body>
    </html>
  );
}


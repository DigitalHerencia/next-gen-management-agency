// layout.tsx
"use client"

import "./globals.css"
import { ReactNode } from "react"

interface RootLayoutProps {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>NextGen Management Agency</title>
            </head>
            <body className="bg-[#0a0a0a] text-white font-sans">
                {children}
            </body>
        </html>
    )
}

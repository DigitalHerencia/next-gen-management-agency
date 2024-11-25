import { ThemeProvider } from "next-themes"
import Head from "next/head"
import "./globals.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Head>
                <title>NextGen Management Agency</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charSet="UTF-8" />
            </Head>
            <body>
                <ThemeProvider attribute="class">
                    <div className="container">{children}</div>
                </ThemeProvider>
            </body>
        </html>
    )
}

"use client"

import Image from "next/image"
import { useState } from "react"

export default function LandingPage() {
    const [theme, setTheme] = useState<"light" | "dark">("dark")

    return (
        <div className={`theme-${theme}`}>
            <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-primary text-white">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/Shapes_Black.jpg"
                        alt="Background Shapes"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <header className="z-10 p-4 text-center">
                    <Image
                        src="/Main_Black.jpg"
                        alt="NGMA Logo"
                        width={400}
                        height={100}
                        className="mx-auto"
                    />
                    <h1 className="text-5xl font-bold mt-4">
                        NextGen Management Agency
                    </h1>
                    <p className="mt-2 text-lg">
                        Empowering creators with the tools to grow, engage, and
                        monetize.
                    </p>
                </header>
                <main className="z-10 flex flex-col items-center mt-8 space-y-4">
                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="px-4 py-2 rounded bg-accent hover:bg-accent-hover"
                    >
                        Toggle Theme
                    </button>
                    <a
                        href="/dashboard"
                        className="px-6 py-3 text-black bg-white rounded hover:bg-gray-300"
                    >
                        Get Started
                    </a>
                </main>
                <footer className="absolute bottom-4 text-sm text-center">
                    <p>
                        © 2024 NextGen Management Agency. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    )
}

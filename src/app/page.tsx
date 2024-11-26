"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import {
    EnvelopeIcon,
    ShieldCheckIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid"

export default function Home() {
    useEffect(() => {
        const shapes = document.getElementById("background-shapes")
        shapes?.classList.add("animate-background-enter")
    }, [])

    return (
        <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
            {/* Background Shapes */}
            <div
                id="background-shapes"
                className="absolute right-0 top-0 w-[70vw] h-full opacity-70 z-10 animate-slideLimited"
            >
                <Image
                    src="/assets/background-shape-black.png"
                    alt="Background Shape"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-start justify-center min-h-screen px-8 md:px-24 space-y-6">
                {/* Logo */}
                <div className="mb-6">
                    <Image
                        src="/assets/logo-main-black.png"
                        alt="NextGen Management Agency Logo"
                        width={450}
                        height={200}
                        priority
                        className="drop-shadow-lg"
                    />
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-left leading-tight tracking-wide animate-fadeInUp">
                    Elevate Your Career with <br /> NextGen Management Agency
                </h1>

                {/* Subtext */}
                <p className="text-lg text-left max-w-2xl mb-6 text-gray-300 animate-fadeInUp delay-200">
                    Join a platform designed to streamline talent management,
                    boost growth, and deliver outstanding results. Discover how
                    we can help you grow your audience and maximize your
                    potential.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 animate-fadeInUp delay-400">
                    <Link
                        href="/auth/register"
                        className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white py-3 px-8 rounded-full text-lg transition-all duration-300 hover:animate-gradient-loop hover:scale-105"
                    >
                        Create an Account
                    </Link>
                    <Link
                        href="/auth/login"
                        className="bg-white text-black py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-indigo-600 hover:text-white shadow-lg transform hover:scale-105"
                    >
                        Login
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-0 w-full flex justify-center gap-12 pb-12 text-lg z-50 animate-fadeInUp delay-600">
                <Link
                    href="/contact"
                    className="flex items-center gap-2 transition-colors hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-indigo-600 hover:text-white py-2 px-4 rounded-full"
                >
                    <EnvelopeIcon className="w-7 h-7" />
                    Contact
                </Link>
                <Link
                    href="/about"
                    className="flex items-center gap-2 transition-colors hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-indigo-600 hover:text-white py-2 px-4 rounded-full"
                >
                    <UserCircleIcon className="w-7 h-7" />
                    About
                </Link>
                <Link
                    href="/privacy-policy"
                    className="flex items-center gap-2 transition-colors hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-indigo-600 hover:text-white py-2 px-4 rounded-full"
                >
                    <ShieldCheckIcon className="w-7 h-7" />
                    Privacy Policy
                </Link>
            </footer>
        </div>
    )
}

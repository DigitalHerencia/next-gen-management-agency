"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col justify-between">
            {/* Background Shapes */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute right-0 top-0 w-[70vw] h-full z-10"
            >
                <Image
                    src="/assets/background-shape-black.png"
                    alt="Background Shape"
                    fill
                    className="object-contain"
                />
            </motion.div>

            {/* Logo */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="absolute z-5 left-10 top-10"
            >
                <Image
                    src="/assets/logo-main-black.png"
                    alt="NextGen Management Agency Logo"
                    width={150}
                    height={150}
                />
            </motion.div>

            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-center justify-center flex-1 space-y-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl font-bold leading-tight tracking-wide"
                >
                    Elevate Your Career with <br /> NextGen Management Agency
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-lg text-gray-300 max-w-2xl"
                >
                    Join a platform designed to streamline talent management,
                    boost growth, and deliver outstanding results. Discover how
                    we can help you grow your audience and maximize your
                    potential.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <Link
                        href="/auth/register"
                        className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-black shadow-lg transform hover:scale-105 animate-gradient-x"
                    >
                        Create an Account
                    </Link>
                    <Link
                        href="/auth/login"
                        className="bg-white text-black py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-indigo-600 hover:text-white shadow-lg transform hover:scale-105"
                    >
                        Login
                    </Link>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="flex justify-center gap-12 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex items-center gap-4"
                >
                    <Link
                        href="/contact"
                        className="flex items-center gap-2 transition-colors hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-indigo-600 hover:text-white py-2 px-4 rounded-full"
                    >
                        <span>📧</span> Contact
                    </Link>
                    <Link
                        href="/about"
                        className="flex items-center gap-2 transition-colors hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-indigo-600 hover:text-white py-2 px-4 rounded-full"
                    >
                        <span>ℹ️</span> About
                    </Link>
                    <Link
                        href="/privacy-policy"
                        className="flex items-center gap-2 transition-colors hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-indigo-600 hover:text-white py-2 px-4 rounded-full"
                    >
                        <span>🔒</span> Privacy Policy
                    </Link>
                </motion.div>
            </footer>
        </div>
    )
}

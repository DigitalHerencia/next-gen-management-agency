"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
    return (
        <main>
            <section className="hero">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    NextGen Management Agency
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Empowering creators with the tools to grow, engage, and
                    monetize.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link href="/dashboard">
                        <button>Get Started</button>
                    </Link>
                </motion.div>
            </section>
        </main>
    )
}

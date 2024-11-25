"use client"

import { motion } from "framer-motion"

export default function DashboardPage() {
    return (
        <main>
            <section className="dashboard">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Welcome to Your Dashboard
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Here you can manage your content, analytics, and payouts.
                </motion.p>
                <div className="dashboard-links">
                    <motion.a
                        href="/settings"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Settings
                    </motion.a>
                    <motion.a
                        href="/analytics"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Analytics
                    </motion.a>
                    <motion.a
                        href="/content"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Manage Content
                    </motion.a>
                </div>
            </section>
        </main>
    )
}

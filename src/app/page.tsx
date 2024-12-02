"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col justify-between">
            {/* Background Shape */}
            <div className="absolute right-0 top-0 w-[70vw] h-[70vh] mt-36 mr-16 z-0">
                <Image
                    src="assets/Shapes_Black.png" // Correct relative path
                    alt="Background Shape"
                    width={1400} // Replace with your actual width
                    height={800} // Replace with your actual height
                />
            </div>

            {/* Logo */}
            <div className="absolute z-0 left-10 top-60">
                <Image
                    src="assets/Main_Black.png" // Correct relative path
                    alt="NextGen Management Agency Logo"
                    width={450}
                    height={275}
                />
            </div>

            {/* Hero Section */}
            <div className="flex flex-col items-left justify-center text-left z-20 px-8 py-16 mt-96 ml-24 space-y-4">
                <div className="text-3xl md:text-4xl font-extrabold leading-tight">
                    Elevate Your Career with
                    <br />
                    NextGen Management Agency
                </div>
                <div className="text-lg text-left md:text-xl text-gray-300">
                    Join a platform designed to streamline talent management, boost growth,
                    <br />
                    and deliver outstanding results. Discover how we can help you grow your
                    <br />
                    audience and maximize your potential.
                </div>
                <div className="flex space-x-6">
                <Button
                asChild
                variant="default"
                size="lg"
                className="bg-foreground text-background hover:bg-gradient-to-r hover:from-[#ff00ff] hover:to-[#00ffff]"
                >
                <Link href="/auth/register">Create an Account</Link>
                    </Button>
                    <Button
                    asChild
                    variant="default"
                    size="lg"
                    className="bg-foreground text-background hover:bg-gradient-to-r hover:from-[#ff00ff] hover:to-[#00ffff]"
                    >
                    <Link href="/auth/login">Login</Link>
                    </Button>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-16 z-20 text-center py-8">
                <nav id="footer-links" className="flex justify-center space-x-6 text-gray-400">
                    <Link href="#contact" className="hover:text-white">
                        Contact
                    </Link>
                    <Link href="#about" className="hover:text-white">
                        About
                    </Link>
                    <Link href="#privacy" className="hover:text-white">
                        Privacy Policy
                    </Link>
                </nav>
            </footer>
        </div>
    );
}

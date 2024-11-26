import Link from "next/link"

export default function TopNav() {
    return (
        <header className="w-full bg-secondary text-white p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">NGMA</h1>
                <nav className="space-x-4">
                    <Link href="/" className="hover:text-accent">
                        Home
                    </Link>
                    <a href="/about" className="hover:text-accent">
                        About
                    </a>
                    <a href="/contact" className="hover:text-accent">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    )
}

import Link from "next/link"

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-gray-900 text-white fixed">
            <nav className="flex flex-col items-start p-6">
                <h2 className="text-xl font-bold mb-6">NGMA</h2>
                <ul className="space-y-4">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-pink-400 transition"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/analytics"
                            className="hover:text-pink-400 transition"
                        >
                            Analytics
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/settings"
                            className="hover:text-pink-400 transition"
                        >
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

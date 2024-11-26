import Link from "next/link"

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-secondary text-white p-4">
            <nav className="space-y-4">
                <Link href="/">
                    <a className="block text-lg hover:text-accent">Home</a>
                </Link>
                <a
                    href="/dashboard"
                    className="block text-lg hover:text-accent"
                >
                    Dashboard
                </a>
                <a
                    href="/analytics"
                    className="block text-lg hover:text-accent"
                >
                    Analytics
                </a>
                <a href="/content" className="block text-lg hover:text-accent">
                    Content
                </a>
                <a href="/settings" className="block text-lg hover:text-accent">
                    Settings
                </a>
            </nav>
        </aside>
    )
}

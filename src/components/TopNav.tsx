import Link from "next/link"

export default function TopNav() {
    return (
        <header>
            <h1>NextGen Management Agency</h1>
            <nav>
                <Link href="/about">About</Link>
            </nav>
        </header>
    )
}

export default function Footer() {
    return (
        <footer className="w-full bg-secondary text-white p-4 text-center">
            <p>© 2024 NextGen Management Agency. All rights reserved.</p>
            <a href="/privacy" className="hover:text-accent">
                Privacy Policy
            </a>
            <a href="/terms" className="ml-4 hover:text-accent">
                Terms of Service
            </a>
        </footer>
    )
}

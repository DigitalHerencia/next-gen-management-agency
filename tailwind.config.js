import { fontFamily } from "tailwindcss/defaultTheme"

export const darkMode = "class"
export const content = ["./src/**/*.{js,ts,jsx,tsx}"]
export const theme = {
    extend: {
        fontFamily: {
            sans: ["Bebas Neue", ...fontFamily.sans],
        },
        colors: {
            accent: "#ff00ff",
            altAccent: "#00ffff",
            backgroundDark: "#0a0a0a",
            backgroundLight: "#ffffff",
            textDark: "#ffffff",
            textLight: "#000000",
        },
    },
}
export const plugins = []

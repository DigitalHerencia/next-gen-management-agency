module.exports = {
    compiler: {
        // Enables the styled components SWC transform
        styledComponents: true,
    },
    // Enable typescript support
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    // Enable bundled Tailwind CSS support
    tailwindcss: true,
    // Enable bundled font support for fonts served from Google Fonts
    googleFonts: true,
    // Enable bundled font support for fonts served from Google Fonts
    // that do not have display variants
    googleFontsWithoutDisplay: true,
    // Enable bundled font support for fonts served from Google Fonts
    // that do not have italic variants
    googleFontsWithoutItalic: true,
    // Enable bundled font support for fonts served from Google Fonts
    // that do not have bold italic variants
    googleFontsWithoutBoldItalic: true,
    // Enable bundled font support for fonts served from Google Fonts
    // that do not have bold variants
    googleFontsWithoutBold: true,
    // Enable bundled font support for fonts served from Google Fonts
    // that do not have italic variants

}    

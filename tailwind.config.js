const defaultTheme = require('tailwindcss/defaultTheme')

const breakpoints = {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
    // print: { raw: 'print' },
}

module.exports = {
    purge: {
        content: ['./src/**/*.{twig,html}'],
    },
    darkMode: false, // Options: false/media/class
    theme: {
        extend: {
            fontFamily: {
                sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
            },
            spacing: {
                em: '1em',
                128: '32rem',
                160: '40rem',
                192: '48rem',
                224: '56rem',
                256: '64rem',
                vw: '100vw',
                vh: '100vh',
                full: '100%',
            },
            minHeight: theme => ({
                ...theme('spacing'),
            }),
        },
        screens: breakpoints,
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#222222',
            white: '#ffffff',
            // @import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,600;0,700;1,400&display=swap");
            primary: '#0d323f',
            secondary: '#efc042',
            outline: 'rgba(59, 130, 246, 0.5)',
            gray: {
                light: '#f2f2f2',
                DEFAULT: '#aabec4',
                dark: '#5a7a86',
            },
        },
        fontSize: {
            xxs: '0.625rem',
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
        fontWeight: {
            // hairline: 100,
            // thin: 200,
            // light: 300,
            normal: 400,
            // medium: 500,
            // semibold: 600,
            bold: 700,
            // extrabold: 800,
            // black: 900,
        },
        lineHeight: {
            none: 1,
            tight: 1.25,
            snug: 1.375,
            normal: 1.5,
            relaxed: 1.625,
            loose: 2,
        },
        borderRadius: {
            none: '0',
            DEFAULT: '3px',
            5: '5px',
            8: '8px',
            16: '16px',
            100: '100%',
            full: '9999px',
        },
        transitionDuration: {
            DEFAULT: '200ms',
        },
        transitionTimingFunction: {
            DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
    },
    variants: {},
    plugins: [],
}

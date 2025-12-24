/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Custom neon gradient colors for dark mode aesthetic
                neon: {
                    purple: '#A855F7',
                    blue: '#3B82F6',
                    pink: '#EC4899',
                    cyan: '#06B6D4',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' },
                    '100%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(59, 130, 246, 0.6)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}

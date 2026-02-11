/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#050505",
                accent: "#7000ff",
                secondary: "#00d4ff",
                neon: {
                    purple: "#bc13fe",
                    blue: "#01ffff",
                    pink: "#ff00ee"
                }
            },
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            animation: {
                'glow-pulse': 'glow 2s infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #7000ff' },
                    '100%': { boxShadow: '0 0 20px #00d4ff' },
                }
            }
        },
    },
    plugins: [],
}

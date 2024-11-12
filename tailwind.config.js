/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{html,js}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Public Sans', 'sans-serif']
            },
            colors: {
                primary: '#cf1675',
                secondary: '#07fbfb',
            }
        }
    },
    plugins: []
}


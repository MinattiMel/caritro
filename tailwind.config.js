/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{html,js}"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#cf1675',
                secondary: '#07fbfb',
            }
        }
    },
    plugins: []
}


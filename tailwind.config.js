/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/*.{html,js,vue}",
        "./pages/*.{html,js,vue}",
        "./*.{html,js,vue}",
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


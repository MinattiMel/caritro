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
                tertiary: '#801b72',
                quaternary:'#df0d78',
                quinary: '#8c0876',
            }
        }
    },
    plugins: []
}


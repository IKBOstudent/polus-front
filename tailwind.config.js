/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                white: '#CAD8EB',
                'back-dark': '#272C3C',
                'back-medium': '#2D3343',
                'back-light': '#314054',
            },
        },
    },
    plugins: [],
};

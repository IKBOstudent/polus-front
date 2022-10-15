/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                white: "#CAD8EB",
                warning: "#e69438",

                "back-dark": "#272C3C",
                "back-medium": "#2D3343",
                "back-light": "#314054",

                "green-light": "#00B3B4",
                "green-dark": "#00CDB5",
            },
        },
    },
    plugins: [],
};

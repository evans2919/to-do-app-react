/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "light-img": "url('/images/bg-desktop-light.jpg')",
                "dark-img": "url('/images/bg-desktop-dark.jpg')",
                "mobile-light-img": "url('/images/bg-mobile-light.jpg')",
                "mobile-dark-img": "url('/images/bg-mobile-dark.jpg')",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};

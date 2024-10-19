/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,mjs,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        logoImage: "url('/images/hamburguers.jpg')",
        fireImage: "url('/images/brasas.jpg')",
        refriImage: "url('/images/bebidas.jpg')",
        dessertImage: "url('/images/berry-cheesecake.jpg')",
      },
      keyframes: {
        floatOwn: {
          "0%": { transform: "translateY(4px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(4px)" },
        },
      },
      animation: {
        ownFloat: "floatOwn ease-in-out infinite 3s",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};


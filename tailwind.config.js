/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        henna: "#7B3F00",       // Deep Mehendi Brown
        gold: "#C5A880",        // Soft Elegant Gold
        "henna-dark": "#4B2E05",
        "henna-light": "#FDF6EC",
      },
    },
  },
  plugins: [],
}

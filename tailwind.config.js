/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit"],
        OpenSans: ["Open Sans"],
        Amaranth: ["Amaranth"],
        PlayFairDisplay: ["Playfair Display"],
        
      },
      colors: {
        "primary": "#5BBC04"
      }
    },
  },
  plugins: [require("daisyui")],
}

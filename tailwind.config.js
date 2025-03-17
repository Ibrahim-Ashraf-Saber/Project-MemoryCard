/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myFont: ["Press Start 2P"],
      },
      backgroundImage: {
        bgImg: "url('./public/background.png')",
      },
    },
  },
  plugins: [],
};

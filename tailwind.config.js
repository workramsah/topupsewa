/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: "#1A212E",
          card: "#263141",
          accent: "#FF7F00",
          accentGreen: "#34C759",
          accentBlue: "#007AFF",
        },
      },
    },
  },
  plugins: [],
}
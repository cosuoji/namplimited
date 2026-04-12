/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ag-dark": "#004526", // Deep Forest
        "ag-lime": "#C3DA4D", // Fresh Accent
        "ag-cream": "#F9F9F7", // Background
      },
      fontFamily: {
        // We'll use standard high-end fallbacks for now
        serif: ["Georgia", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

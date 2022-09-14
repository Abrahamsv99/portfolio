/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3E497A",

          "secondary": "#F1D00A",

          "accent": "#F0F0F0",

          "neutral": "#10182e",

          "base-100": "#192647",

          "info": "#0284c7",

          "success": "#059669",

          "warning": "#f59e0b",

          "error": "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

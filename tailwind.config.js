/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/ui/**/*.{js,jsx,ts,tsx}",
    "./app/ui/components/**/*.{js,jsx,ts,tsx}",
    "./app/ui/components/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
        'primary' : "#0d232e",
        'secondary' : "#ffffff",
        'info' : "#c79604",
    },
    extend: {
      fontFamily: {
        play : "'Playfair Display SC', serif",
      },
    },
  },
  plugins: [],
}

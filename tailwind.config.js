/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
        'primary' : "#0d232e",
        'light-primary' : "#112d3c",
        'secondary' : "#ffffff",
        'shadow-secondary' : "#e6e6e6",
        'info' : "#c79604",
    },
    extend: {
      fontFamily: {
        play : "'Playfair Display SC', serif",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation : {
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite' : 'marquee 24s linear infinite',
      },
    },
  },
  plugins: [],
}

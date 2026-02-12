/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { 600: '#7c3aed' },
        accent: '#22d3ee', // Тот самый голубой
        dark: '#1e1e1e',
      },
      boxShadow: {
        'neo': '5px 5px 0px 0px rgba(30, 30, 30, 1)',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Мы добавили 'accent' (желтый), чтобы было ярко
        accent: '#facc15', 
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        dark: '#18181b', 
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], 
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #18181b',
        'neo-hover': '2px 2px 0px 0px #18181b',
        'neo-white': '4px 4px 0px 0px #ffffff',
      },
    },
  },
  plugins: [],
}
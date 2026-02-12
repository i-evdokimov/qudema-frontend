/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#a78bfa',
          600: '#7c3aed', // Фиолетовый (основной)
        },
        accent: '#22d3ee', // Голубой неон (вторичный)
        dark: '#1e1e1e', // Почти черный (для границ)
      },
      boxShadow: {
        'neo': '5px 5px 0px 0px rgba(30, 30, 30, 1)', // Жесткая тень
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Или твой шрифт
      },
      // === ВОТ ЭТО МЫ ДОБАВЛЯЕМ ===
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-150px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        }
      },
      animation: {
        'fall': 'fall linear infinite', // Название анимации: animate-fall
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}
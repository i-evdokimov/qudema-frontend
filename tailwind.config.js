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
          600: '#7c3aed',
        },
        accent: '#22d3ee',
        dark: '#1e1e1e',
      },
      boxShadow: {
        // Та самая тень, которая используется в btn-neo
        'neo': '5px 5px 0px 0px rgba(30, 30, 30, 1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Анимации прописываем здесь для использования классов типа animate-fall
      animation: {
        'fall': 'fallAndRotate linear infinite', 
        'spin-slow': 'spin-slow 8s linear infinite',
        'bounce-slow': 'bounce-slow 3s infinite',
      },
      // Ключевые кадры для анимаций
      keyframes: {
        fallAndRotate: {
          '0%': { transform: 'translateY(-150px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
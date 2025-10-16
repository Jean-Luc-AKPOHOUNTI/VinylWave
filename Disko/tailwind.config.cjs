/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'comfortaa': ['Comfortaa', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'gradient-shift-slow': 'gradient-shift 20s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 1.2s ease-out',
        'slide-in-right': 'slide-in-right 1.2s ease-out',
        'spin-slow': 'spin-slow 3s linear infinite',
        'tonearm-move': 'tonearm-move 6s ease-in-out infinite',
        'wave-1': 'wave-pulse 2s ease-in-out infinite',
        'wave-2': 'wave-pulse 2s ease-in-out infinite 0.5s',
        'wave-3': 'wave-pulse 2s ease-in-out infinite 1s',
        'float-1': 'float-note 4s ease-in-out infinite',
        'float-2': 'float-note 4s ease-in-out infinite 1s',
        'float-3': 'float-note 4s ease-in-out infinite 2s',
        'stars-appear': 'stars-appear 20s ease-in-out infinite',
        'twinkle-1': 'twinkle 3s ease-in-out infinite',
        'twinkle-2': 'twinkle 2.5s ease-in-out infinite 0.5s',
        'twinkle-3': 'twinkle 4s ease-in-out infinite 1s',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'tonearm-move': {
          '0%, 100%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(-5deg)' },
        },
        'wave-pulse': {
          '0%': { opacity: '0.8', transform: 'scale(0.8)' },
          '50%': { opacity: '0.3' },
          '100%': { opacity: '0', transform: 'scale(1.2)' },
        },
        'float-note': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'translateY(-30px) rotate(10deg)', opacity: '1' },
        },
        'stars-appear': {
          '0%, 30%': { opacity: '0' },
          '40%, 60%': { opacity: '1' },
          '70%, 100%': { opacity: '0' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, #1a1a1a 15%, #333 16%, #1a1a1a 17%, #333 30%, #1a1a1a 31%, #222 100%)',
      },
      backgroundSize: {
        'gradient-shift': '400% 400%',
      }
    },
  },
  plugins: [],
}
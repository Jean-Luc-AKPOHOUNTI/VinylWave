export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'comfortaa': ['Comfortaa', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    }
  }
}
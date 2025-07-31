/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
  glow: '0 0 10px rgba(0, 255, 255, 0.7)',
},

      colors: {
        hyperspace: '#0D0D0D',
        saberBlue: '#3B82F6',
        saberTeal: '#00FFFF',
        starWhite: '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        'move-shadow': {
          '0%': { transform: 'translate(-10px, -10px)' },
          '25%': { transform: 'translate(10px, -10px)' },
          '50%': { transform: 'translate(10px, 10px)' },
          '75%': { transform: 'translate(-10px, 10px)' },
          '100%': { transform: 'translate(-10px, -10px)' },
        },
      },
      animation: {
        'moving-shadow': 'move-shadow 4s linear infinite',
      },
      boxShadow: {
        'colored-shadow': '0 0 15px 5px rgba(192, 192, 192, 0.5) ', // Adjust color and size as needed
      },
    
    },
  },
  plugins: [],
}


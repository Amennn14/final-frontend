// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Your existing content paths
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700', // Custom gold color
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite', // Custom shake animation
        'slide-in': 'slideIn 0.5s ease-out forwards', // New slide-in animation for notification
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
        slideIn: {
          '0%': {
            transform: 'translateX(50px)', // Starts from the right
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)', // Moves to its final position
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
}

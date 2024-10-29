/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--width)' }
        }
      },
      animation: {
        progress: 'progress 2s ease-in-out forwards'
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

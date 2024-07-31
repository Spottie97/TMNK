/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6b46c1', // Custom purple
        secondary: '#d6bcfa', // Lighter purple
        darkBg: '#2d2d2d', // Dark background
        lightBg: '#f7f7f7', // Light background
        darkText: '#333', // Dark text
        lightText: '#fff', // Light text
      },
    },
  },
  plugins: [],
}




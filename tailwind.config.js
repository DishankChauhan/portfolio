/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards'
      },
      colors: {
        background: {
          light: '#ffffff',
          dark: '#000000',
        },
        text: {
          light: '#1f2937',
          dark: '#ffffff',
        },
        primary: '#3b82f6',
        secondary: '#10b981',
        accent: '#f43f5e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 
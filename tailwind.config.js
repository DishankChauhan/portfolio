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
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        wave: 'wave 2.5s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite'
      },
      colors: {
        background: {
          DEFAULT: 'rgb(var(--background))',
        },
        foreground: {
          DEFAULT: 'rgb(var(--foreground))',
        },
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          50: 'rgb(var(--primary) / 0.05)',
          100: 'rgb(var(--primary) / 0.1)',
          200: 'rgb(var(--primary) / 0.2)',
          300: 'rgb(var(--primary) / 0.3)',
          400: 'rgb(var(--primary) / 0.4)',
          500: 'rgb(var(--primary) / 0.5)',
          600: 'rgb(var(--primary) / 0.6)',
          700: 'rgb(var(--primary) / 0.7)',
          800: 'rgb(var(--primary) / 0.8)',
          900: 'rgb(var(--primary) / 0.9)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent))',
        },
        muted: {
          DEFAULT: 'rgb(var(--muted))',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 
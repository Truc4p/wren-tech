/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f8fd',
          100: '#e1f1fb',
          200: '#c3e3f7',
          300: '#a5d5f3',
          400: '#87c7ef',
          500: '#5dade2',
          600: '#3498db',
          700: '#2980b9',
          800: '#1f6897',
          900: '#145075',
        },
        secondary: {
          50: '#f1fcf4',
          100: '#e3f9e9',
          200: '#c7f3d3',
          300: '#abedbd',
          400: '#8fe7a7',
          500: '#58d68d',
          600: '#2ecc71',
          700: '#25a35a',
          800: '#1c7a44',
          900: '#12522d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

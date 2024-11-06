/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      colors: {
        primary: '#4a3aff',
        secondary: '#ffffff',
        muted: '#9c9c9c',
        black: '#2b2b2b',
        popover: '#ffffff',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

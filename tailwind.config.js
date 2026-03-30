/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B4D6E',
        'primary-dark': '#1c6192',
        'primary-light': '#516e85',
        accent: '#3a3235',
        'accent-light': '#F5C97A',
        warm: '#8a9bc0',
        'warm-dark': '#665c4d',
        muted: '#6B7E8F',
      },
      fontFamily: {
        display: ['sans-serif', 'Cambria', 'serif'],
        body: ['Palatino Linotype', 'Book Antiqua', 'Palatino', 'serif'],
        sans: ['Gill Sans', 'Optima', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1a3a5c',
        accent: '#e8531a',
        paper: '#f8f6f1',
        ink: '#1a1a1a',
        'navy-light': '#2a5a8c',
        'accent-light': '#f07040',
        'paper-dark': '#eae7e0',
      },
      fontFamily: {
        heading: ['"Libre Baskerville"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

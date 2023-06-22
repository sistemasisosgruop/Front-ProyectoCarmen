/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#335F28',
        orange: '#D47D16',
        turquoise: '#0EA888',
        blue: '#0072A9',
        dark: '#1b2631 '
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        green: '#335F28',
        orange: '#D47D16'
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
}


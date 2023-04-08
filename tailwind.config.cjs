/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
      sans: ['Poppins', 'sans-serif'],
      monospace: ['Roboto Mono', 'monospace']
    },
    extend: {
      colors: {
        primary: '#0EFF00',
        primaryDark: '#27AE60',
        accent: '#F9003A',
        greenSoft: '#1ABC9C',
        greenSoftDark: '#16A085',
        brownLight: '#F97B5A',
        blueDeep: '#34495E',
        blueDeepDark: '#2C3E50',
        greyLighter: '#95A5A6',
        greyDark: '#7F8C8D'
      }
    }
  },
  plugins: []
}


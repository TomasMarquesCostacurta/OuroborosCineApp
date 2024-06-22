/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'headercolor':'#0B0014',
      'Vermeiolegal':'#F94239',
      'OutroVermeio':'#7E1918',
      'white': '#ffffff',
    },
    extend: {
      backgroundImage: {
        'FotodeFundo': "url('/public/Sobre.png')"
      }
  },
  plugins: [],
}
}
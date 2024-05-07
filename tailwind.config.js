/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sedan' : 'Sedan SC',
      'banger': 'Bangers',
      'kode' : 'Kode Mono'
    },
    extend: {},
  },
  plugins: [],
}
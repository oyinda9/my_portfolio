/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
      },
  },
  },
  plugins: [],
}

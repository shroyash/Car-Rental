/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000d6b',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      opacity: ['group-hover'],
      transform: ['group-hover'],
    },
  },
}

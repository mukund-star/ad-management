/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-background': '#fafafa',
        'base-gray': '#ebebeb',
        'faded-black': '#8c8c8c',
        'sky-blue-shade':'#0096ff',
      },
    },
  },
  plugins: [],
}


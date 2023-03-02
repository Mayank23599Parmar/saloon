/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        bg_color:"var(--bg_color)"
      }
      ,
      boxShadow: {
        'btn-shadow': '0 .5rem 1rem rgba(0,0,0,.15)',
      }

    },
  },
  plugins: [],
}

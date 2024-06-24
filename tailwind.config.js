/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeintopnav: {
          '0%': { opacity:0,transform: 'translateY(-50px)' },
          '100%': { opacity:100, transform: 'translateY(0px)'},
        },
        fadeintopmain: {
          '0%': { opacity:0,transform: 'translateY(-5.5rem)' },
          '100%': { opacity:100, transform: 'translateY(-3.5rem)'},
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), require('daisyui'),
  ],
}


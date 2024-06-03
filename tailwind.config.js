/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        'boutiqueCustomTheme': {
          'primary': '#F9D949', //custom yellow
          'secondary': '#71717A', //dark grey
          'accent': '#3C486B', //dark blue
          'neutral': '#FAFAFA', //off-white
          
          'success': '#0E793C', //nextui green
          'warning': '#936316', //bootstrap yellow
          'danger': '#920B3A', //nextui red
          'default': '#FAFAFA'
        },
      },
    ],
  },
}

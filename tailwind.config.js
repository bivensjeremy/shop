const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      paddingX: '12px'
    },
  },
  darkMode:'class',
  plugins: [nextui({
    themes: {
      'boutiqueCustomTheme': {
        colors: {
          background: '#F0F0F0', //Page background
          foreground: '#3C486B', //text color
          primary: '#f9d949', //custom yellow
          secondary: '#71717A', //dark grey
          success: '#0E793C', //nextui green
          warning: '#936316', //bootstrap yellow
          danger: '#920B3A', //nextui red
          default: '#FAFAFA' //off-white
        },
      }
    }
  })],
};

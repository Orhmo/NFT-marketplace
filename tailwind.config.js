/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        primary: '#f8fafc',
        secondary: {
          100:'#a7f3d0',
          200: '#047857'
        },
        eth:'#ec4899',
        light:'#fde68a',
        hover: '#34d399',
        bright: '#fcd34d',
      },
    },
  },
  plugins: [],
}

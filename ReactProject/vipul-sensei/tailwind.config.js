/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/components/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'pc-1': '#272727',
        'pc-2': '#747474',
        'pc-3': '#FF652F',
        'pc-4': '#FFE400',
        'pc-5': '#14A76C',
        'pc-6': '#61892F',
        'pc-7': '#86C232',
        'pc-8': '#222629',
        'pc-9': '#474B4F',
        'pc-10': '#6B6E70',
      },
    }
  },
  plugins: [],
}


// 'pc-1': '#8D8741',
// 'pc-2': '#659DBD',
// 'pc-3': '#DAAD86',
// 'pc-4': '#BC986A',
// 'pc-5': '#FBEEC1',
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode: 'class', 
      colors:{
        'imputs': '#e7e7e7',
        'rosappa': '#a55676',
        'rosappa2': '#b56183',
        'redppa': '#91173c',
        'redppahv': '#67001f',
        'redlgppa': '#FFF7F9',
        'redlgppahv': '#ffe6ee',
        'goldppa': '#b48207',
        'wtppa': '#f7f7f7',
        'grayppa': '#dfdfdf',
        'grayppabg': '#f1f1f1',
        'grayppaph': '#bdbdbd',
        'greenppa' : '#6ac34f',
        'yellowkmj': '#fdb200',
        'yellowkmjhv': '#bf8500',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '12': '12px',
        '18': '18px',
      },
      width: {
        '8': '8%',
        '9': '9%',
        '12': '12%',
        '15': '15%',
        '37': '37.333333'
      },
      maxWidth: {
        '2000': '2000px',
        '930': '930px'
      },
      maxHeight:{
        '95vh': '95vh',
      },
      screens: {
        '439': '439px',
        'lap': '1550px'
      },
      fontSize: {
        '13': '12px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}


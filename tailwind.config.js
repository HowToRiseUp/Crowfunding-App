
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadowP': '0 4px 4px 0 rgb(0 0 0 / 0.25);',
      }
    },
    colors: {
      primary: '#1DC071',
      secondary: '#6F49FD',
      text1: '#171725',
      text2: '#4B5264',
      text3: '#808191',
      text4: '#B2B3BD',
      iconColor: '#A2A2A8',
      white: '#FFFFFF',
      whiteSoft: '#FCFBFF',
      graySoft: '#FCFCFC',
      stock: '#F1F1F3',
      lite: '#FCFCFD',
      error: '#EB5757',
      darkBg: '#13131A',
      darkSecondary: '#1C1C24',
      softDark: '#22222C',
      darkSoft: '#24242C',
      darkStroke: '#3A3A43',
      darkRed: '#422C32',
      transparent: 'transparent',
    }
  },

  plugins: [],
}
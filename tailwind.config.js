/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mabry_problack: ['mabry_problack'],
      mabry_probold: ['mabry_probold'],
      mabry_proregular: ['mabry_proregular'],
      pp_morisemibold: ['pp_morisemibold'],
      interregular: ['interregular'],
      intermedium: ['intermedium'],
      interbold: ['interbold'],
    },
    screens: {
      xs: '450px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1720px',
      '4xl': '1920px',
      '5xl': '2560px',
    },
    extend: {
      backgroundImage: {
        accent_black: "url('./assets/images/background_accent_black.jpeg')",
      },
      colors: {
        black: '#191919',
        white: '#f4f3ee',
        grey: '#d0d0d0',
      },
    },
  },
  plugins: [],
};

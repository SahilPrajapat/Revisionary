module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'regal-blue' : '#0d4889',
        'sandy' : '#ffc363',
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        fundo: "url(/fundo.png)",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 6%, #43E7AD 69%, #E1D55D 89%);',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);',
      }
    },
  },
  plugins: [],
}

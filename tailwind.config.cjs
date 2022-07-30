module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        'yellow-primary': '#DBAC2C',
        'yellow-dark': '#C47F11',
        'yellow-light': '#F1E9C9',

        'purple-dark': '#4B2995',
        'purple-primary': '#8047F8',
        'purple-light': '#EBE5F9',

        'base-title': '#272221',
        'base-subtitle': '#403937',
        'base-text': '#574F4D',
        'base-label': '#8D8686',
        'base-hover': '#D7D5D5',
        'base-button': '#E6E5E5',
        'base-input': '#EDEDED',
        'base-card': '#F3F2F2',

        'background-color': '#FAFAFA',

        white: '#FFFFFF',
      },

      fontFamily: {
        Baloo2: ['Baloo 2', 'cursive'],
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

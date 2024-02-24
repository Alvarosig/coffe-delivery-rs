/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        baloo: '"Baloo 2"'
      }
    },
    colors: {
      yellow: {
        light: '#F1E9C9',
        normal: '#DBAC2C',
        dark: '#C47F17'
      },
      purple: {
        light: '#EBE5F9',
        normal: '#8047F8',
        dark: '#4B2995'
      },
      base: {
        hover: '#D7D5D5',
        label: '#8D8686',
        text: '#574F4D',
        subtitle: '#403937',
        title: '#272221',
        card: '#F3F2F2',
        input: '#EDEDED',
        button: '#E6E5E5'
      },
      white: '#FFFFFF',
      background: '#FAFAFA'
    }
  },
  plugins: [],
}


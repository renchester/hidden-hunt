/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      merriweather: ['Merriweather', 'Arial', 'Helvetica', 'sans-serif'],
      montserrat: ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
      opensans: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'],
      poppins: ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
      roboto: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'],
      raleway: ['Raleway', 'Arial', 'Helvetica', 'sans-serif'],
      playfair: ['Playfair Display', 'Arial', 'Helvetica', 'sans-serif'],
      yeseva: ['Yeseva One', 'Arial', 'Helvetica', 'sans-serif'],
    },
  },
  plugins: [],
};

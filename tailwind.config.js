/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1c273c'
      },
      fontFamily: {
        'poppins-regular': 'poppins-regular',
        'poppins-semibold': 'poppins-semibold',
        'poppins-bold': 'poppins-bold',
        'poppins-medium': 'poppins-medium'
      },
    },
  },
  plugins: [],
}


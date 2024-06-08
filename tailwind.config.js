/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        deepBlue: '#02042a',
        lightBlue : "#2b84ea",
        lightBlue300 : "#4b94ed",
        lightblue500 : "#0b72e7",
        greenLight : "#61cea6",
        grayText : "#818597",
        lightgray : "#e2e2e2",
        grayBlue : "#344a6c",
        deepBlueHead : "#162f56",
        gray2 : "#525a76"
       },
       backgroundImage: {
        'default-image': "url('/path/to/default/image.jpg')",
        'hoverimage': "url('./photos/instantsettlement-hoverbg.svg')",
      },
    },
  },
  plugins: [],
}


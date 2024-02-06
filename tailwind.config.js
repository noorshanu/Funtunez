/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      work: " 'Work Sans', sans-serif;",
      popins: "'Poppins', sans-serif",
      daughter: "'Architects Daughter', cursive",
    },
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      primary: "#04181c",
      secondary: "#051f23",
      "sky-blue": "#95E3FD",
    },
    extend: {},
  },
  plugins: [],
}


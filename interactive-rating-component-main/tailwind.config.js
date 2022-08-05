/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        orangecolor: "#fb7413",
        lightgrey: "#959eac",
        mediumgrey: "#7c8798",
        darkblue: "#252d37",
        verydarkblue: "#121417",
      },
    },
  },
  plugins: [
    // ...
    require("tailwindcss"),
    require("autoprefixer"),
    // ...
  ],
};

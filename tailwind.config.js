const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'libre-baskerville': ['"Libre Baskerville"', 'serif']
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["group-hover"],
      scale: ["group-hover"],
      backgroundOpacity: ['active'],
    },
  },
  plugins: [],
};

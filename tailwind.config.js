const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#004586",
      },
    },
    fontFamily: {
      sansSerif: ["Roboto", sans - serif],
      cursive: ["Alfa Slab One", cursive],
    },
  },
};

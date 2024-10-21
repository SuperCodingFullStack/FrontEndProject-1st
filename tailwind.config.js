/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#F6F7FB",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

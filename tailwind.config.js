/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#F6F7FB",
        "custom-light-gray": "#A9A9A9",
        "sale-btn": "#06AE6F",
        "sale-color": "#F7FCFA",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

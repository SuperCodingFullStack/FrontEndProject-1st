/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // src 폴더 내의 모든 파일을 포함
    "./public/index.html", // public/index.html도 포함
  ],
  theme: {
    extend: {
      height: {
        "68vh": "68vh", // 사용자 정의 높이
      },
      colors: {
        "custom-gray": "#F6F7FB", // 사용자 정의 색상
        "custom-light-gray": "#A9A9A9",
        "sale-btn": "#06AE6F",
        "sale-color": "#F7FCFA",
        "timer-red": "#FF0038",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")], // 필요한 플러그인 추가
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A4EA",
        "primary-dark": "#273444",
        "primary-transparent": "#00a4ea0d",
        "gray-transparent": "#000000b3",
        "white-transparent": "#ffffffcc",
      },
      container: {
        center: true,
      },
      spacing: {
        "92px": "92px",
        "124px": "124px",
      },
      margin: {
        "92px": "92px",
        "124px": "124px",
      },
    },
    fontFamily: {
      sans: ["Inter"],
      serif: ["Inter"],
      mono: ["Inter"],
      display: ["Inter"],
      body: ["Inter"],
    },
  },
  plugins: [],
};

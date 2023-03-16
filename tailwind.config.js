/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A4EA",
        "primary-dark": "#273444",
        "primary-transparent": "#00a4ea0d",
        "gray-transparent": "#000000b3",
        "white-transparent": "#ffffffcc",
        "light-grey": "rgba(20, 31, 25, 0.5)",
      },
      container: {
        center: true,
      },
      spacing: {
        "24px": "24px",
        "92px": "92px",
        "124px": "124px",
      },
      margin: {
        "92px": "92px",
        "124px": "124px",
      }
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

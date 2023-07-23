/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "3xl": ["28px", "36px"],
        "hero-title": ["52px", "64px"],
        "hero-subtitle": ["16px", "24px"],
      },
    },
  },
  plugins: [],
};

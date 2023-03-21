/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroImage: "url('/images/bg-hero.jpg')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {},
    minHeight: {
      minContainer: "70px",
      "40vh": "40vh",
    },
    flex: {
      2: "2 2 0%",
    },
    maxHeight: {
      "80vh": "80vh",
    },
  },
  plugins: [],
};

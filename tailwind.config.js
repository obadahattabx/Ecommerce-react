/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_color: " #00a8f3",
        p_color: "#7b7b7b",
        bg_color: " #f3f3f3",
        white_color: "#fff",
        color_heading: "#121416",
        border_color: "#e5e5e5d5",
        sale_color: "#e51a1a",
      },
    },
  },
  plugins: [],
};

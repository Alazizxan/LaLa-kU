/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {spacing: {
      '12': '3.5rem',
      '14' : '5rem'  // 3rem ni belgilash
    },},
  },
  plugins: [],
};

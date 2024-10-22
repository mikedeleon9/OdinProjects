/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}", // Root directory files
    "./src/**/*.{html,js}", // Files in the src directory and subdirectories
    "./components/**/*.{html,js}", // Files in the components directory and subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

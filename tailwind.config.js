/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('./assets/file_2023-03-25_07.56.05.png')",
        "footer": "url(./assets/footer.png)",
        "mob_footer": "url(./assets/footer_mob.png)",
        "sponsors": "url(./assets/sponsors.png)",
      },
      colors: {
        "orange-custom": "#ffa500"
      },
      height: {
        "100": "32rem",
        "custom": "29rem",
        "photoCustom":"32rem"
      },
      screens: {
        'laptop': { 'raw': '(min-aspect-ratio: 1/1)' },  // Landscape orientation (min-aspect-ratio)
        'mobile': { 'raw': '(max-aspect-ratio: 1/1)' }  // Portrait orientation (max-aspect-ratio)
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        "move-ahead": "example 5s linear 2s infinite alternate"
      },
      width: {
        "custom":"73rem",
        "participants-image-width": "7.5rem"
      },
      fontFamily: {
        onejinja: ['Onejinja', 'sans-serif'],
        appetite: ['Appetite', 'sans-serif'],
        sans: ['Arial', 'sans-serif'], // Test with a generic font
    }
  },
},
  plugins: [],
}

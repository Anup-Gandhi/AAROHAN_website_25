/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('./assets/file_2023-03-25_07.56.05.png')",
        "background-mobile": "url('https://i.ibb.co/fMZT32d/protait-bg.gif')",
        "background-laptop": "url('https://i.ibb.co/ZJt1xNx/landscape-bg.gif')",
        "footer": "url(./assets/footer.png)",
        "mob_footer": "url(./assets/footer_mob.png)",
        "sponsors": "url(./assets/sponsors.png)",
      },
      colors: {
        "white-custom": "#F7EDDF",
        "purple-custom": "rgb(139, 49, 255)",
        "green-custom": "#3be679",
        "blue-custom": "#5c81e7",
        "yellow-custom": "#ffe845"
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
        'fade': 'fadeIn 1s ease-in-out infinite',
        'spin-slow': 'spin 60s linear infinite',
        "move-ahead": "example 5s linear 2s infinite alternate"
      },
      width: {
        "custom":"73rem",
        "participants-image-width": "7.5rem"
      },
      fontFamily: {
        OneJinja: ['OneJinja', 'sans-serif'],
        appetite: ['Appetite', 'sans-serif'],
        Quintessential: ['Quintessential', 'sans-serif'],
        Uchiyama: ['Uchiyama', 'sans-serif'],
        Akaya_Telivigala: ['Akaya Telivigala', 'sans-serif'],
        sans: ['Arial', 'sans-serif'], // Test with a generic font
    }
  },
},
  plugins: [],
}

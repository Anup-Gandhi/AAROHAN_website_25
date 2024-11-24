/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('./assets/file_2023-03-25_07.56.05.png')",
        "groupDance": "url(./assets/Desktop_GROUPDANCE.JPG)",
        "bandWars": "url(./assets/Desktop_BANDWARS.JPG)",
        "streetPlay": "url(./assets/Desktop_STREETPLAY.JPG)",
        "soloDance": "url(./assets/Desktop_SOLODANCE.JPG)",
        "soloSinging": "url(./assets/Desktop_SOLOSINGING.JPG)",
        "boxCricket": "url(./assets/Desktop_CRICKET.JPG)",
        "eSports": "url(./assets/Desktop_E-SPORTS.jpg)",
        "football": "url(./assets/Desktop_FOOTBALL.JPG)",
        "instrumental": "url(./assets/Desktop_INSTRUMENTAL.JPG)",
        "artMaestro": "url(./assets/Desktop_ARTMAESTRO.JPG)",
        "fashion": "url(./assets/Desktop_FASHION.JPG)",
        "platform": "url(./assets/Desktop_PLATFORM.JPG)",
        "groupDance_mobile": "url(./assets/GROUP_DANCE.JPG)",
        "bandWars_mobile": "url(./assets/BANDWARS.JPG)",
        "streetPlay_mobile": "url(./assets/STREETPLAY.JPG)",
        "soloDance_mobile": "url(./assets/SOLO_DANCE.JPG)",
        "soloSinging_mobile": "url(./assets/SOLO_SINGING.JPG)",
        "boxCricket_mobile": "url(./assets/CRICKET.JPG)",
        "eSports_mobile": "url(./assets/E-SPORTS.jpg)",
        "football_mobile": "url(./assets/FOOTBALL.JPG)",
        "instrumental_mobile": "url(./assets/INSTRUMENTAL.JPG)",
        "artMaestro_mobile": "url(./assets/ART_MAESTRO.JPG)",
        "fashion_mobile": "url(./assets/FASHION.JPG)",
        "platform_mobile": "url(./assets/PLATFORM.JPG)",
        "comedyNite": "url(./assets/COMEDY_NITE.JPG)",
        "proNite": "url(./assets/PRO-NITE.jpg)",
        "theatre": "url(./assets/THEATRE.JPG)",
        "youtubers": "url(./assets/YOUTUBERS.JPG)",
        "comedyNite_desktop": "url(./assets/Desktop_COMEDY-NITE.JPG)",
        "proNite_desktop": "url(./assets/Desktop_PRO-NITE.jpg)",
        "theatre_desktop": "url(./assets/Desktop_THEATRE.JPG)",
        "youtubers_desktop": "url(./assets/Desktop_YOUTUBERS.JPG)",
        "aarohan_banner": "url(./assets/Aarohan_banner.png)"

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
        'sans': 'Carter One',
        'serif': 'Raleway'
    }
  },
},
  plugins: [],
}

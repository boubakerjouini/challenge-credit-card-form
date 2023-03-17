/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-grayish-violet': 'hsl(270, 3%, 87%)',
        'dark-grayish-violet': 'hsl(279, 6%, 55%)',
        'very-dark-violet': 'hsl(278, 68%, 11%)',
      },
      fontFamily: {
        'main-font': ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'main-desktop': "url('/src/assets/bg-main-desktop.png')",
        'main-mobile': "url('/src/assets/bg-main-mobile.png')",
        'card-back': "url('/src/assets/bg-card-back.png')",
        'card-front': "url('/src/assets/bg-card-front.png')",
      },
    },
  },
  plugins: [],
}

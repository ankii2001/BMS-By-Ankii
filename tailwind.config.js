// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          bmshow:
          {
            50: '#fff3d2',
            100: '#d3d4e1',
            200: '#b6b8c9',
            300: '#989bb2',
            400: '#2B3148',
            500: '#636582',
            600: '#4c4f66',
            700: '#363849',
            800: '#222539',
            900: '#F84464',
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',

    './layouts/**/*.vue',

    './pages/**/*.vue',

    './plugins/**/*.{js,ts}',

    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sharpie: [
          "'Sharpie VF'",
          "'Sharpie'",
          ...defaultTheme.fontFamily.serif,
        ],
        branch: ["'Branch'", ...defaultTheme.fontFamily.serif],
        cyrene: ["'Cyrene'", ...defaultTheme.fontFamily.serif],
        kyivsans: [
          "'Kyiv Sans VF'",
          "'Kyiv Sans'",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        bluegray: colors.blueGray,
        lemon: colors.yellow,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: [
              "'Kyiv Sans VF'",
              "'Kyiv Sans'",
              ...defaultTheme.fontFamily.sans,
            ],
            color: '#0F172A',
            h1: {
              fontWeight: '400',
              fontFamily: "'Branch'",
            },
            h2: {
              fontWeight: '400',
              fontFamily: "'Branch'",
            },
            h3: {
              fontWeight: '400',
              fontFamily: "'Branch'",
            },
            h4: {
              fontWeight: '400',
              fontFamily: "'Branch'",
            },
          },
        },
        dark: {
          css: {
            color: '#F8FAFC',
            h1: {
              color: '#F1F5F9',
            },
            h2: {
              color: '#F1F5F9',
            },
            h3: {
              color: '#F1F5F9',
            },
            h4: {
              color: '#F1F5F9',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}

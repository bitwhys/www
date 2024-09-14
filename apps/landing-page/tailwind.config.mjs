/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  presets: [require('@bitwhys/tailwind/preset')],
  theme: {
    extend: {
      // TODO: replace with colors from preset
      colors: {
        black: {
          DEFAULT: '#000000',
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        white: {
          DEFAULT: '#FFFFFF',
          50: '#FFFFFF',
          100: '#FCFCFC',
          200: '#FCFCFC',
          300: '#FAFAFA',
          400: '#FAFAFA',
          500: '#F7F7F7',
          600: '#C7C7C7',
          700: '#949494',
          800: '#636363',
          900: '#303030',
        },
        primary: {
          50: '#F0EBFF',
          100: '#DDD1FF',
          200: '#BEA8FF',
          300: '#9C7AFF',
          400: '#794DFF',
          500: '#5A21FF',
          600: '#3900E6',
          700: '#2B00AD',
          800: '#1D0075',
          900: '#0E0038',
          950: '#08001F',
        },
        secondary: {
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#010101',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        badge: '#F1F5F9',
        badgeText: '#475569',
      },
    },
  },
}

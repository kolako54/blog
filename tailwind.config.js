/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
(darkMode = 'class'),
  (module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'primary-dark': '#1f1f1f',
          'primary': '#ffffff',
          'highlight': {
            dark: '#FFFFFF',
            light: '#1f1f1f',
          },
          'secondary': {
            dark: '#707070',
            light: '#e6e6e6',
          },
          'action': '#3B82F6',
        },
        transitionProperty: {
          width: 'width',
        },
      },
    },
    plugins: [],
  });

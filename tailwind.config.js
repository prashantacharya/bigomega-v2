module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          normal: 'var(--theme-primary)',
          darker: 'var(--theme-primary-darker)',
          background: 'var(--background)',
        },
        secondary: {
          normal: 'var(--theme-secondary)',
          darker: 'var(--theme-secondary-darker)',
        },
      },
      backgroundColor: {
        normal: 'var(--background)',
        section: 'var(--section-background)',
      },

      fontFamily: {
        sans: ['montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

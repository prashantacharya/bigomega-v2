module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: { lg: '720px' },
    },
    extend: {
      colors: {
        primary: {
          normal: 'var(--theme-primary)',
          darker: 'var(--theme-primary-darker)',
        },
        secondary: {
          normal: 'var(--theme-secondary)',
          darker: 'var(--theme-secondary-darker)',
        },
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
      },
      backgroundColor: {
        normal: 'var(--background)',
        surface: 'var(--surface)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

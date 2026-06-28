/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#09111f',
        navy: '#0f1e33',
        steel: '#526175',
        mist: '#edf2f7',
        gold: '#d6a84f',
        azure: '#2f80ed',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 24px 70px rgba(9, 17, 31, 0.14)',
      },
    },
  },
  plugins: [],
};

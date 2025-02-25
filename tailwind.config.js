/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
        'neon-purple': '#B026FF',
        'neon-pink': '#FF10F0',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'robot-blink': 'robot-blink 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
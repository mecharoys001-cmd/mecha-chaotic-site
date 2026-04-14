import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'mc-orange': '#ff380d',
        'mc-dark': '#1d0600',
        'mc-pale': 'rgba(255, 51, 1, 0.1)',
        'mc-grey': '#b3b3b3',
        'mc-red': '#ff0126',
        'mc-blue': '#5700ff',
        'mc-lime': '#00ff01',
        'mc-pink': '#f7018d',
        'mc-gold': '#f0ab1b',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        changa: ['Changa One', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;

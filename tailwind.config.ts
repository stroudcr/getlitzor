import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'red': {
          500: '#F04E3C', // Litzor red from logo
        },
        'cream': {
          50: '#FFF8F0', // Light background color
        }
      },
    },
  },
  plugins: [],
};

export default config;
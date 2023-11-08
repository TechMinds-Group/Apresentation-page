import { defaultTheme } from './src/themes/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: defaultTheme,
    extend: {},
  },
  plugins: [],
};

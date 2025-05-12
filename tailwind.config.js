/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#800000',
        accent: '#B3A463',
        background: '#EAEAEA',
        text: '#1F1F1F',
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monument: ['var(--font-monument)'],
        satoshibold: ['var(--font-satoshibold)'],
        satoshiregular: ['var(--font-satoshiregular)'],
        satoshimedium: ['var(--font-satoshimedium)'],
      },
      fontSize: {
        '27': '27px',
        '26': '26px',
        '28': '28px',
      },
      height: {
        '100': '350px',
      }
    },
  },
  plugins: [],
}


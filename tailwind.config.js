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
        '28': '26px',
        '29': '28px',
        '68': '68px',
      },
      height: {
        '100': '350px',
      }
    },
  },
  plugins: [],
}


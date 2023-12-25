import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: 'rgb(255 255 255)',
      black: 'rgb(0 0 0)',
    },
    screens: {
      sm: {'max': '585px'},
      md: '768px',
      lg: '976px',
      xl: '840px',
      xxl: '1000px',
    },
    fontFamily: {
      yanon: ['var(--font-yanone)']
    },
    extend: {

    },
  },
  plugins: [],
}
export default config

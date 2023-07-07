/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['var(--font-sora)'],
        barrio: ['var(--font-barrio)'],
      },
      colors: {
        background: '#F6F5FC',
        black: '#000000',
        white: '#ffffff',
        blue: {
          900: '#283460',
          400: '#4F5887',
        },
        gray: {
          900: '#222222',
          400: '#BCBCBC',
          200: '#E5E5E5',
        },
        danger: {
          900: '#F63131',
          400: '#FC5050',
          200: '#F97171',
        },
        success: {
          900: '#219653',
          400: '#51CA73',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

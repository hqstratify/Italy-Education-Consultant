/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2.5rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        forest: {
          DEFAULT: '#12372A',
          50: '#F2F6F3',
          100: '#DCE5DD',
          200: '#B9CBBE',
          300: '#8FAC97',
          400: '#5F8570',
          500: '#37604B',
          600: '#1F4A35',
          700: '#12372A',
          800: '#0D2A20',
          900: '#081B14',
        },
        ivory: '#F8F5EE',
        charcoal: '#171717',
        sage: '#DCE5DD',
        terracotta: {
          DEFAULT: '#B9583C',
          50: '#FBF2EF',
          100: '#F3DCD3',
          400: '#C8714F',
          600: '#A44A31',
          700: '#8A3C27',
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6.2vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 4.6vw, 3.75rem)', { lineHeight: '1.06', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.75rem, 3.2vw, 2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
      },
      maxWidth: { prose: '68ch' },
      borderRadius: { '4xl': '2rem' },
      boxShadow: {
        soft: '0 1px 2px rgba(18,55,42,.04), 0 12px 32px -12px rgba(18,55,42,.14)',
        lift: '0 2px 4px rgba(18,55,42,.05), 0 28px 60px -24px rgba(18,55,42,.28)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        400: '400ms',
        450: '450ms',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translate3d(0, 22px, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .7s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};

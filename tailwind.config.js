/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'royal': ['Cinzel', 'serif'],
        'elegant': ['Playfair Display', 'serif'],
        'modern': ['Inter', 'sans-serif'],
      },
      colors: {
        royal: {
          50: '#faf8f3',
          100: '#f4f0e6',
          200: '#e8dcc7',
          300: '#d9c49e',
          400: '#c8a975',
          500: '#b8935a',
          600: '#a6824e',
          700: '#896a42',
          800: '#70563a',
          900: '#5c4731',
          950: '#322518',
        },
        crown: {
          50: '#fef7f0',
          100: '#feecdc',
          200: '#fcd5b4',
          300: '#f9b882',
          400: '#f5934d',
          500: '#f27527',
          600: '#e35b1d',
          700: '#bc451a',
          800: '#96381d',
          900: '#792f1b',
          950: '#41150b',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(184, 147, 90, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(184, 147, 90, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #b8935a 0%, #a6824e 50%, #896a42 100%)',
        'crown-gradient': 'linear-gradient(135deg, #f27527 0%, #e35b1d 50%, #bc451a 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}

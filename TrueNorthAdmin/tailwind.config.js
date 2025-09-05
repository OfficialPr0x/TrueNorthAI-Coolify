/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // True North AI Brand Colors
        royal: {
          50: '#f8f9fc',
          100: '#f1f3f8',
          200: '#e3e8f0',
          300: '#d1d9e6',
          400: '#b8c5d6',
          500: '#9db0c7',
          600: '#7d92b3',
          700: '#6b7fa3',
          800: '#5a6b85',
          900: '#4c596d'
        },
        crown: {
          50: '#fefbf3',
          100: '#fdf6e3',
          200: '#faecc2',
          300: '#f6dd97',
          400: '#f0c96a',
          500: '#eab848',
          600: '#d9a441',
          700: '#b8935a',
          800: '#94744a',
          900: '#785f3f'
        }
      },
      fontFamily: {
        'royal': ['Playfair Display', 'serif'],
        'modern': ['Inter', 'sans-serif'],
        'elegant': ['Crimson Text', 'serif']
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #4c596d 0%, #6b7fa3 50%, #7d92b3 100%)',
        'crown-gradient': 'linear-gradient(135deg, #b8935a 0%, #d9a441 50%, #eab848 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
      }
    },
  },
  plugins: [],
}

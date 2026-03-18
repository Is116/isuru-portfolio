/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#4A6FA5',
          50: '#EFF3FA',
          100: '#D9E4F3',
          200: '#BAD0E8',
          300: '#8CB0D6',
          400: '#6B8DBF',
          500: '#4A6FA5',
          600: '#3A5A8E',
          700: '#2D4872',
          800: '#1E3154',
          900: '#132040',
        },
        stone: {
          50: '#F9F8F6',
          100: '#F2F0EC',
          200: '#E8E5DF',
          300: '#D6D2CA',
          400: '#B8B3A8',
          500: '#8F8980',
          600: '#6B6560',
          700: '#4E4A45',
          800: '#333030',
          900: '#1C1A18',
          950: '#111010',
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          850: '#1a1a1a',
          900: '#171717',
          950: '#0a0a0a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

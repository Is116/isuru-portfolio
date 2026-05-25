/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#013792',
          50: '#E5EBF5',
          100: '#BACDE8',
          200: '#8EADDA',
          300: '#5A8ACA',
          400: '#2D68BA',
          500: '#013792',
          600: '#012F81',
          700: '#01256B',
          800: '#011B56',
          900: '#011342',
        },
        teal: {
          DEFAULT: '#6EC8D2',
          50: '#EEF9FA',
          100: '#D3EFF2',
          200: '#A8DDE5',
          300: '#6EC8D2',
          400: '#4BB8C5',
          500: '#2FA8B5',
          600: '#248A96',
          700: '#1A6D77',
          800: '#115059',
          900: '#0B383E',
        },
        stone: {
          50: '#FAFAF8',
          100: '#F5F4F0',
          200: '#ECEAE4',
          300: '#D6D3CB',
          400: '#B5B0A6',
          500: '#8C877D',
          600: '#696460',
          700: '#4D4A46',
          800: '#323030',
          900: '#1C1A18',
          950: '#0E0D0C',
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
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
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

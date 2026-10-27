/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#0a0d0b',
          900: '#111512',
          800: '#1a201c',
          700: '#262f29',
        },
        forest: {
          900: '#0f1c16',
          800: '#172820',
          700: '#233d31',
          600: '#325646',
        },
        gold: {
          300: '#f0d999',
          400: '#dfbd75',
          500: '#c6a15b',
          600: '#9e7d3b',
          700: '#755b25',
        },
        parchment: {
          50: '#fcfaf5',
          100: '#f6f1e6',
          200: '#f2e8d5',
          300: '#e5d7bd',
          400: '#cebc99',
        },
        stone: {
          300: '#d7d4cd',
          400: '#b4b0a5',
          500: '#8c887e',
          600: '#646158',
        },
        earth: {
          600: '#945347',
          700: '#754238',
          800: '#562f27',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Cinzel Decorative', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        sinhala: ['"Noto Sans Sinhala"', '"Iskoola Pota"', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
};

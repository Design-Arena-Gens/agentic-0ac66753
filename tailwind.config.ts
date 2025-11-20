import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f8ff',
          100: '#dbeeff',
          200: '#bcdcff',
          300: '#8ec3ff',
          400: '#5ca3ff',
          500: '#2f82ff',
          600: '#1b64db',
          700: '#164fb0',
          800: '#153f8a',
          900: '#14366f',
        }
      }
    },
  },
  plugins: [],
} satisfies Config

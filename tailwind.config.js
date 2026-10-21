/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050507',
          900: '#0a0a0c',
          850: '#111116',
          800: '#18181f',
          700: '#272732',
          600: '#383847',
        },
        navy: {
          950: '#050a14',
          900: '#091322',
          850: '#0c1b30',
          800: '#0f2744',
          700: '#17365d',
          600: '#1e40af',
          500: '#2563eb',
        },
        safety: {
          950: '#450a0a',
          900: '#7f1d1d',
          800: '#991b1b',
          700: '#b91c1c',
          600: '#dc2626', // Logo Primary Red
          500: '#ef4444',
          400: '#f87171',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 2px 12px -2px rgba(10, 10, 12, 0.06), 0 1px 3px 0 rgba(10, 10, 12, 0.04)',
        hover: '0 12px 28px -4px rgba(10, 10, 12, 0.12), 0 4px 8px -2px rgba(10, 10, 12, 0.06)',
        header: '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};

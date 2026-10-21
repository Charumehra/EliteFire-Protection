/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a192f',
          800: '#0f2744',
          700: '#17365d',
          600: '#1e40af',
          500: '#2563eb',
        },
        safety: {
          900: '#7f1d1d',
          800: '#991b1b',
          700: '#b91c1c',
          600: '#dc2626',
          500: '#ef4444',
          400: '#f87171',
        },
        accent: {
          orange: '#ea580c',
          amber: '#d97706',
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
        card: '0 4px 20px -2px rgba(15, 23, 42, 0.08)',
        hover: '0 10px 30px -4px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
};

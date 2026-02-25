/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nzh-blue': '#1161e8',
        'nzh-deep': '#0b3f9b',
        'nzh-midnight': '#161d35',
      },
      backgroundImage: {
        'hero-glow': 'linear-gradient(95deg, #040a17 0%, #161d35 45%, #4f46e5 100%)',
      },
      boxShadow: {
        neon: '0 30px 80px rgba(56, 189, 248, 0.28)',
      },
    },
  },
  plugins: [],
}


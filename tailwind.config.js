/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'canva-blue': '#aec4c4',
        'canva-blue-light': '#c8d9d9',
        'canva-blue-dark': '#8da8a8',
        'canva-green': '#1b392c',
        'canva-green-dark': '#12261d',
        'canva-green-light': '#2a5442',
        'canva-cream': '#fffdf0',
        'canva-cream-dark': '#f5f2de',
        'canva-sand': '#f2edd1',
        'canva-sand-dark': '#e2dbb5',
        'canva-muted': '#3d5c4d',
        'canva-border': '#1b392c'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'TTHoves', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'TTHoves', 'Inter', 'system-ui', 'sans-serif'],
        migra: ['"Plus Jakarta Sans"', 'TTHoves', 'Inter', 'system-ui', 'sans-serif'],
        hoves: ['"Plus Jakarta Sans"', 'TTHoves', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'editorial': '32px',
        'editorial-lg': '40px',
        'editorial-sm': '20px',
        'pill': '9999px',
      },
      boxShadow: {
        'editorial': '0 10px 30px -10px rgba(27, 57, 44, 0.08)',
        'editorial-hover': '0 20px 40px -15px rgba(27, 57, 44, 0.16)',
      }
    },
  },
  plugins: [],
}

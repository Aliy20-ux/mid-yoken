/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          deep: '#1C3829',
          mid:  '#2E5445',
          light:'#3D6B57',
        },
        amber: {
          warm: '#C4892A',
          gold: '#DBA84E',
          pale: '#F0D49A',
        },
        charcoal: '#1A1918',
        cream:   '#F5EEE5',
        ivory:   '#FBF7F2',
        stone:   '#8A7F70',
        rust:    '#7C3728',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Lato"', 'Helvetica', 'sans-serif'],
      },
      spacing: {
        section: '6rem',
        'section-sm': '4rem',
      },
      maxWidth: {
        wide: '90rem',
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}

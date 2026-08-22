/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lab: {
          'black-pure': '#030712',
          'black-base': '#09090B',
          'black-surface': '#111622',
          'black-elevated': '#182030',
          'black-subtle': '#232B3E',
          'border-subtle': '#232B3E',
          'border-strong': '#3B4866',
          'white-stark': '#F8FAFC',
          'white-muted': '#94A3B8',
          'white-dim': '#64748B',
        },
        laser: {
          cyan: '#00F2FE',
          'cyan-dim': '#0891B2',
          'cyan-glow': 'rgba(0, 242, 254, 0.15)',
        },
        quantum: {
          emerald: '#10B981',
          'emerald-dim': '#059669',
          'emerald-glow': 'rgba(16, 185, 129, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Instrument Serif', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

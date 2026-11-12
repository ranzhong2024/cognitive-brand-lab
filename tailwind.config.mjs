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
        m1: {
          DEFAULT: '#38BDF8',
          surface: 'rgba(56, 189, 248, 0.08)',
          border: 'rgba(56, 189, 248, 0.25)',
        },
        m2: {
          DEFAULT: '#818CF8',
          surface: 'rgba(129, 140, 248, 0.08)',
          border: 'rgba(129, 140, 248, 0.25)',
        },
        m3: {
          DEFAULT: '#34D399',
          surface: 'rgba(52, 211, 153, 0.08)',
          border: 'rgba(52, 211, 153, 0.25)',
        },
        m4: {
          DEFAULT: '#FBBF24',
          surface: 'rgba(251, 191, 36, 0.08)',
          border: 'rgba(251, 191, 36, 0.25)',
        },
        m5: {
          DEFAULT: '#FB7185',
          surface: 'rgba(251, 113, 133, 0.08)',
          border: 'rgba(251, 113, 133, 0.25)',
        },
        m6: {
          DEFAULT: '#C084FC',
          surface: 'rgba(192, 132, 252, 0.08)',
          border: 'rgba(192, 132, 252, 0.25)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Instrument Serif', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-hero': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'display-hero-mobile': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
        'h1-desktop': ['3.25rem', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
        'h1-mobile': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        'h2-desktop': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        'h2-mobile': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        'h3-desktop': ['1.625rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'h3-mobile': ['1.375rem', { lineHeight: '1.35', letterSpacing: '-0.015em' }],
        'body-editorial': ['1.0625rem', { lineHeight: '1.8', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        'reading-prose': '72ch',
      },
      borderRadius: {
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        full: '9999px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#c9d1d9',
        'custom-bg': '#1e1e2e',
        'custom-link': 'var(--r-link-color)',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'custom': '0px 0px 128px 0px var(--r-link-color)',
        'custom-pulse': '0px 0px 128px 28px var(--r-link-color)',
      },
      animation: {
        'pulse2': 'pulse2 20s ease 0s infinite normal forwards',
      },
      keyframes: {
        'pulse2': {
          '0%': {
            boxShadow: '0px 0px 128px 0px var(--r-link-color)',
          },
          '50%': {
            boxShadow: '0px 0px 128px 28px var(--r-link-color)',
          },
          '100%': {
            boxShadow: '0px 0px 128px 0px var(--r-link-color)',
          },
        },
      },
    },
  },
  plugins: [],
}


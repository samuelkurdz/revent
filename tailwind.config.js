/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
          primary: "hsl(var(--primary))",
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      gridTemplateColumns: {
        'stats': 'repeat(auto-fill, minmax(min(160px, 100%), 1fr))',
      }
    },
  },
  plugins: [],
}


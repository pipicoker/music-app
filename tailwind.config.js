/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'textcolor': 'rgba(239, 238, 224, 0.25)',
      },
      backgroundImage: {
        'hero': "url('/src/components/assets/Vector2.png')",
        'hero2': "url('/src/components/assets/Vector.png')",
        'man': "url('/src/components/assets/man.png')",
        'lead': "url('/src/components/assets/lead.png')",

      },
      dropShadow: {
        '3xl': "(-3.4px 0px 3.4px rgba(0, 0, 0, 0.1))"
      }
    },
  },
  plugins: [],
}

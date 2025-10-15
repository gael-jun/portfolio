const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
  // theme is where you define your colors, spacing, fonts, etc. Anything visual
  theme: {
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    // If you’d like to preserve the default values for a theme option but also add new values, add your extensions under the extend key in the theme section of your configuration file.
    extend: {
      colors: {
        // https://tailwindcss.com/docs/customizing-colors#color-palette-reference
        primaryText: colors.zinc,
        // Use a darker green scale for the whole app by remapping accent shades
        // Most components use accent-400/500/600; here we shift these to darker emerald values
        accent: {
          50: colors.emerald[100],
          100: colors.emerald[200],
          200: colors.emerald[300],
          300: colors.emerald[400],
          400: colors.emerald[600], // was mid; now darker
          500: colors.emerald[700], // primary accent becomes deeper green
          600: colors.emerald[800],
          700: colors.emerald[900],
          800: colors.emerald[950],
          900: colors.emerald[950],
        },
        // Gradients start from the darker accent now
        gradientStart: {
          ...colors.emerald,
        },
        gradientEnd: colors.stone,
      },
    },
  },
}

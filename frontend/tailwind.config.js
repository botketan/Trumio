/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dmsans': ['DM Sans']
      },
    },
  },
  plugins: [],
  presets: [
    require('@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset'),
  ],
}
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');

module.exports = {
  plugins: [tailwindcss('./tailwind.config.js'), nested(), autoprefixer()],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.jsx",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors: {
        // Aquí puedes definir tus colores personalizados
        'custom-text': '#1ed760',
      },
    },
  },
  plugins: [],
}

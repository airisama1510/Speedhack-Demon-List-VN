/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",'./node_modules/preline/preline.js',],
  plugins: [
    require('preline/plugin'),
],
  theme: {
    extend: {},
  },
}


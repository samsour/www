const { defineConfig } = require("vite");
const vue = require("@vitejs/plugin-vue");
const svgLoader = require("vite-svg-loader");

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [
    vue(),
    svgLoader({
      svgo: false,
    }),
  ],
});

import { defineConfig } from "vite";
import inject from "@rollup/plugin-inject";
import htmlPurge from "vite-plugin-purgecss";

export default defineConfig({
  base: "webuster",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  plugins: [
    inject({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    htmlPurge(),
  ],
});

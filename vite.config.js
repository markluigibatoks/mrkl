import { fileURLToPath, URL } from "node:url";
import AutoImport from "./src/config/unplugin-auto-import";
import Components from "./src/config/unplugin-vue-components";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), AutoImport, Components],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

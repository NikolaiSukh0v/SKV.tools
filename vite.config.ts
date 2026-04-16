import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Воссоздаем __dirname для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        flare: resolve(__dirname, "projects/flare/index.html"),
        quarry: resolve(__dirname, "projects/quarry/index.html"),
        snapapi: resolve(__dirname, "projects/snapapi/index.html"),
        jsmemo: resolve(__dirname, "projects/jsmemo/index.html"),
        bash: resolve(__dirname, "projects/bash-guide/index.html"),
        logic: resolve(__dirname, "projects/logic-lab/index.html"),
      },
    },
  },
});

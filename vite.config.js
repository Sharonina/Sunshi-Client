import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.js",
    exclude: ["**/node_modules/**", "**/dist/**", "./src/test"],
    css: false,
    coverage: {
      provider: "c8",
      reporter: ["text", "json", "html"],
    },
  },
});

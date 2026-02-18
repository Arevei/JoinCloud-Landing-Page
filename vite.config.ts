import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Node 18 compatible (import.meta.dirname is Node 20.11+)
const __root = typeof import.meta.dirname !== "undefined"
  ? import.meta.dirname
  : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__root, "client", "src"),
      "@shared": path.resolve(__root, "shared"),
      "@assets": path.resolve(__root, "attached_assets"),
    },
  },
  root: path.resolve(__root, "client"),
  build: {
    outDir: path.resolve(__root, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

/**
 * Vite configuration file
 *
 * The React and Tailwind plugins are both required for Make, even if Tailwind
 * is not being actively used – do not remove them
 * 
 * @see https://vitejs.dev/config/ 
 */
import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["cloudvoyages.com", "www.cloudvoyages.com"],
    watch: {
      ignored: [
        "**/bin/**",
        "**/lib/**",
        "**/logs/**",
        "**/node_modules/**",
        "**/.git/**",
        "**/build/**",
        "**/.Library/**",
        "**/dist/**",
      ],
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      // Alias @ to the src directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

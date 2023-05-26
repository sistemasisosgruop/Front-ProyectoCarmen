import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@layouts": "/src/components/layouts",
      "@forms": "/src/components/forms",
      "@styles": "/src/styles",
      "@hooks": "/src/hooks",
      "@api": "/src/api",
      "@web": "/src/pages/web",
      "@dashboard": "/src/pages/dashboard",
    },
  },
});

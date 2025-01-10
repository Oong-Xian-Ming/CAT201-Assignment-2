import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  base: "/src/MainMenu.jsx", // Only if your app is deployed under a subpath
});

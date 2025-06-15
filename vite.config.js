import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// IMPORTANT: Add the correct repo name to `base`
export default defineConfig({
  base: "/Portfolio/", // <-- repo name here
  plugins: [react(), tailwindcss()],
});

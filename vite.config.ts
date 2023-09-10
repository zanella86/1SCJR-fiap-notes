import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/1SCJR-fiap-notes/",
  //server: {
  //  port: 3001,
  //},
  publicDir: "assets",
});

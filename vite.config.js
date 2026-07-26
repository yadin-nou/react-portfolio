import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "https://yadin-nou.github.io/react-portfolio",
// });
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/react-portfolio/" : "/",
  plugins: [react()],
}));
// export default defineConfig({
//   plugins: [react()],
//   base: "/",
// });

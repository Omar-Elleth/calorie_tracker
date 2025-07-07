import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/calorie_tracker/", // 👈 دي السطر المهم
  plugins: [react()],
});

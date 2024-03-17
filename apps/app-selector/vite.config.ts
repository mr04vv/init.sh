import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import kumaUI from "@kuma-ui/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), kumaUI()],
});

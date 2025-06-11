import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import * as path from "node:path"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		TanStackRouterVite({
			semicolons: false,
			quoteStyle: "double",
			target: "react",
		}),
		react(),
		visualizer({
			open: true,
		}),
	],
	resolve: {
		alias: {
			src: path.resolve(__dirname, "./src"),
		},
	},
})

import { defineConfig } from "vitest/config";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	test: {
		projects: [
			{
				extends: true,
				test: {
					name: "unit",
					globals: true,
					environment: "jsdom",
					setupFiles: ["./vitest.setup.ts"],
					include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
					exclude: ["src/**/*.export-harness.test.ts"],
				},
			},
			{
				extends: true,
				test: {
					name: "scripts",
					globals: true,
					environment: "node",
					include: ["scripts/**/*.test.mjs"],
				},
			},
		],
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});

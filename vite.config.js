import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "@unocss/svelte-scoped/vite";

// silly import to make changes in uno.config.js restart the Vite dev server
// import { reloadMe } from "./uno.config";
import { defineConfig } from "vite";
export default defineConfig({
	plugins: [
		UnoCSS({
			injectReset: "@unocss/reset/tailwind.css",
		}),
		sveltekit(),
	],
	test: {
		// Jest like globals
		globals: true,
		environment: "jsdom",
		include: ["src/**/*.{test,spec}.js"],
		// Extend jest-dom matchers
		setupFiles: ["./setupTest.js"],
	},
});

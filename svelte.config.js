// use adapter-auto for zero config deployment to Vercel, adapter-static for Github Pages
// import adapter from '@sveltejs/adapter-auto';
// import preprocess from "svelte-preprocess";
// import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { preprocessMeltUI } from "@melt-ui/pp";
import sequence from "svelte-sequential-preprocessor";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
	preprocess: sequence([mdsvex(mdsvexConfig), vitePreprocess(), preprocessMeltUI()]),
	kit: {
		adapter: adapter(),
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: "shift",
			holdMode: true,
		},
	},
};

export default config;

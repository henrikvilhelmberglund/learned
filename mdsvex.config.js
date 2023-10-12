const config = {
	extensions: [".svelte.md", ".svelte", ".md", ".svx"],

	smartypants: {
		dashes: "oldschool",
	},
	layout: {
		notes: "src/lib/mdsvex/mdsvex-layout-notes.svx",
	},

	remarkPlugins: [],
	rehypePlugins: [],
	// see https://github.com/spences10/sveltekit-mdsvex-starter-blog/blob/main/mdsvex.config.js for stuff maybe
};

export default config;

/** @type {import('./$types').PageServerLoad} */
import console from "hvb-console";

async function importMarkdownFiles() {
	const modules = import.meta.glob("../obsidian-vault/*.md");
	const mds = [];

	for (let path in modules) {
		const md = await modules[path]();
		// const md = await import(path);
		// console.log(md);
		mds.push(md);
	}
	return mds;
}

export async function load() {
	return {
		mds: importMarkdownFiles(),
	};
}

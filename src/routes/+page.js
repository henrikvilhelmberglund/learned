/** @type {import('./$types').PageServerLoad} */
import console from "hvb-console";

async function importMarkdownFiles() {
	const modules = import.meta.glob([
		"../obsidian-vault/refactored/*.md",
		"!../obsidian-vault/refactored/Drawing*.md",
	]);
	const mds = {};

	for (let path in modules) {
		const md = await modules[path]();
		// const md = await import(path);
		// console.log(md);
		const regex = /(\d{4}-\d{2}-\d{2})/;
		const match = path.match(regex);
		let date;
		if (match) {
			date = match[1];
			if (mds[date]) {
				mds[date].push({ content: md, date });
			} else {
				mds[date] = [{ content: md, date }];
			}
			console.warn(mds);
		}
	}
	return mds;
}

export async function load() {
	const mds = await importMarkdownFiles();
	return {
		mds: mds,
	};
}

/** @type {import('./$types').PageServerLoad} */
import console from "hvb-console";

function last(array) {
	return array[array.length - 1];
}

async function importMarkdownFiles(params) {
	const modules = import.meta.glob([
		"!../../../obsidian-vault/refactored/*.excalidraw.md",
		"../../../obsidian-vault/refactored/*.md",
	]);

	let metadataImport;

	const mds = {};

	for (let path in modules) {
		const post = await modules[path]();
		const metadata = post.metadata;
		const tags = metadata.tags.split(",").map((a) => a.trim());

		if (!tags.includes(params.tagName)) continue;

		const regex = /(\d{4}-\d{2}-\d{2})/;
		const match = path.match(regex);
		const link = last(path.split("/")).split(".md")[0];
		metadata.link = link;
		let date;

		if (match) {
			date = match[1];
			if (mds[date]) {
				mds[date].push({ content: post, date, link, metadata });
			} else {
				mds[date] = [{ content: post, date, link, metadata }];
			}
			// console.warn(mds);
		}
	}
	return mds;
}

export async function load({ params }) {
	const mds = await importMarkdownFiles(params);
	return {
		mds: mds,
	};
}

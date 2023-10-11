/** @type {import('./$types').PageServerLoad} */
import { sanitize, isSupported } from "isomorphic-dompurify";
import { marked } from "marked";

async function importMarkdownFiles() {
	const files = import.meta.glob("/src/obsidian-vault/*.md", { as: "raw" });
	const mds = [];

	for (let file in files) {
		const md = await files[file]();
		mds.push(sanitize(marked.parse(md)));
	}
	return mds;
}

export async function load() {
	const mds = await importMarkdownFiles();
	return { mds };
}

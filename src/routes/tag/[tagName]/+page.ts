/** @type {import('./$types').PageServerLoad} */
import console from "hvb-console";
import type { RouteParams } from "./$types.js";
import type { Component, SvelteComponent } from "svelte";

function last(array: string[]) {
	return array[array.length - 1];
}

export type Post = {
  content: { default: Component<{}, {}, ""> };
	metadata: {
		tags: string;
    link: string;
    title: string;
	};
  link?: string;
	date: string;
};

async function importMarkdownFiles(params: RouteParams) {
	const modules = import.meta.glob([
		"!../../../obsidian-vault/refactored/*.excalidraw.md",
		"../../../obsidian-vault/refactored/*.md",
	]);

	let metadataImport;

  const mds: Record<string, Post[]> = {};

	for (let path in modules) {
    const post = (await modules[path]()) as Post & { default: Component<{}, {}, "">};
		const metadata = post.metadata;
		if (metadata && typeof metadata === "object" && typeof metadata.tags !== "string") continue;
		const tags = metadata.tags.split(",").map((a) => a.trim());

		if (!tags.includes(params.tagName)) continue;

		const regex = /(\d{4}-\d{2}-\d{2})/;
		const match = path.match(regex);
		let link;
		if (path.includes(".md")) {
			link = last(path.split("/")).split(".md")[0];
			metadata.link = link;
		}
		let date;

		if (match && link) {
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

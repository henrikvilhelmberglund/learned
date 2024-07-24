import type { Post } from '../../tag/[tagName]/+page.js';
import type { RouteParams } from './$types.js';

/** @type {import('./$types').PageLoad} */
async function importPost(params: RouteParams) {
	// console.info(params);
	const link = params.link;
	const mds: Record<string, Post[]> = {};

	// const md = await import(path);
	// console.log(md);
	const regex = /(\d{4}-\d{2}-\d{2})/;
	const match = link.match(regex);
  const post = await import(`../../../obsidian-vault/refactored/${link}.md`);
  const metadata = post.metadata;
	if (match) {
		const date = match[1];
		mds[date] = [{ content: post, date, metadata }];
	}
	return mds;
}

export async function load({ params }) {
	const mds = await importPost(params);
	return {
		mds: mds,
	};
}

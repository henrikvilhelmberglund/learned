/** @type {import('./$types').PageServerLoad} */
import console from "hvb-console";
import type { Post } from "./tag/[tagName]/+page";
import type { Component } from "svelte";

interface ModuleRawImportInterface {
	default: string;
}

function last(array: string[]) {
	return array[array.length - 1];
}

async function importTodo() {
	let todo;
	let todoText = "";
	const todoImport = import.meta.glob("../lib/-learned.todo", { query: "?raw", eager: true });
	// console.log(todoImport);
	for (let path in todoImport) {
		todo = (await todoImport[path]) as ModuleRawImportInterface;
		todoText = todo.default;
	}

	return todoText;
}

async function importMarkdownFiles() {
	const modules = import.meta.glob([
		"!../obsidian-vault/refactored/*.excalidraw.md",
		"../obsidian-vault/refactored/*.md",
	]);

	let metadataImport;

	const mds: Record<string, Post[]> = {};

	for (let path in modules) {
		const post = (await modules[path]()) as Post & { default: Component<{}, {}, ""> };
		const metadata = post.metadata;

		const regex = /(\d{4}-\d{2}-\d{2})/;
		const match = path.match(regex);
		let link;
		// console.log("current file", path);
		if (path.includes(".md")) {
			link = last(path.split("/")).split(".md")[0];
		}
		// else console.log("error:", link)
		// if (path.includes(".svx")) link = last(path.split("/")).split(".svx")[0];
		try {
			if (link) {
				metadata.link = link;
			}
		} catch (error) {
			console.error("error in" + path);
			console.error("link is " + link);
			console.error(error);
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

export async function load() {
	const mds = await importMarkdownFiles();
	const todo = await importTodo();
	return {
		mds: mds,
		todo: todo,
	};
}

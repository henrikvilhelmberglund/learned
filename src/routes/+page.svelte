<script>
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";
	import DarkModeToggle from "$lib/theme/DarkModeToggle.svelte";
	import ThemeSwitcher from "$lib/theme/ThemeSwitcher.svelte";
	import { browser } from "$app/environment";
	import { color } from "$lib/stores";
	import MeltAccordion from "$lib/melt-examples/MeltAccordion.svelte";
	import Posts from "$lib/components/Posts.svx";
	import Todo from "$lib/components/Todo.svelte";

	// let color = "blue";
	// $: if (browser) color = localStorage.color;

	export let data;

	const todo = data.todo;
</script>

<h1
	class="text-primary-950 font-onest dark:text-primary-100 text-center text-4xl font-thin md:p-8 md:py-14 md:pb-0 md:text-6xl">
	Today I learned...
</h1>

<Todo {todo} />

<div class="py-12" />

{#each Object.values(data.mds).reverse() as posts}
	<Posts {posts} />
	<!-- {post.default} -->
{/each}

<Footer />

<style>
</style>

<script>
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";
	import DarkModeToggle from "$lib/theme/DarkModeToggle.svelte";
	import ThemeSwitcher from "$lib/theme/ThemeSwitcher.svelte";
	import { browser } from "$app/environment";
	import { color } from "$lib/stores";
	import MeltAccordion from "$lib/melt-examples/MeltAccordion.svelte";
	import Post from "$lib/components/Post.svx";

	// let color = "blue";
	// $: if (browser) color = localStorage.color;

	export let data;

	// console.log(data.mds);
</script>

<main
	class="dark:bg-primary-950 bg-primary-100 min-w-screen flex min-h-screen flex-col items-center [&>*]:m-4">
	<header>
		<ThemeSwitcher />
		<DarkModeToggle />
	</header>

	<h1 class="text-primary-950 font-thin font-onest dark:text-primary-100 text-6xl md:p-8 md:pb-0">
		Today I learned...
	</h1>

	{#each data.mds as post}
		<Post {post} />
		<!-- {post.default} -->
	{/each}
</main>

<Footer />

<style>
</style>
